import * as fs from 'fs'
import * as request from 'request'
import * as cheerio from 'cheerio'

export interface ISchool {
  I: number, // ID
  N: string, // Name
  C: string, // External ID
  A: string, // Address
  W: string, // Website
  T: string, // Phone
  L?: number, // Unknown
  Lt: number, // Latitude
  Lg: number, // Longitude
  D: number, // unknown
  M: [], // unknown
  O: number[] // unknown
  Ni: number // unknown mostly the number 2047
}

export type TPoind =
  'leerlingen'
  | 'naw'
  | 'inspectie'
  | 'eindtoets'
  | 'tevredenheid'
  | 'profiel'
  | 'sociale'
  | 'ondersteuning'
  | 'tijden'
  | 'schoolgids'

const poinds: TPoind[] = ['leerlingen', 'naw', 'inspectie', 'eindtoets', 'tevredenheid', 'profiel', 'sociale', 'ondersteuning', 'tijden', 'schoolgids']

const convertPoind = (poind: TPoind): string => {
  switch (poind) {
    case 'leerlingen':
      return '01'
    case 'naw':
      return '02'
    case 'inspectie':
      return '07'
    case 'eindtoets':
      return '12'
    case 'tevredenheid':
      return '15'
    case 'profiel':
      return '17'
    case 'sociale':
      return '20'
    case 'ondersteuning':
      return '24'
    case 'tijden':
      return '37'
    case 'schoolgids':
      return '40'
    default:
      return '02'
  }
}

const generateLink = (C: string, poind: TPoind): string => {
  const CPoind: string = convertPoind(poind)
  return `https://www.scholenopdekaart.nl/vensters/public/${C}/poind${CPoind}_json/poind${CPoind}_json_${C}.json`
}

const generateSpecialistLink = (C: string): string => `https://www.scholenopdekaart.nl/vensters/public/${C}/poind24_leesmeer/poind24_leesmeer_${C}.html`
const generateOnderwijsTijdLink = (C: string): string => `https://www.scholenopdekaart.nl/vensters/public/${C}/poind18_leesmeer/poind18_leesmeer_${C}.html`

const getJson = (url): Promise<ISchool> => new Promise((resolve, reject) => {
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      resolve(body.trim())
    } else {
      reject(`Got an error: ${error}`)
    }
  })
})

const getSpecialist = async C => {
  const $ = cheerio.load(await getJson(generateSpecialistLink(C)))

  const a59 = $('.a59')
  const specialistNamesArr = Object.keys(a59).map(key => !isNaN(Number(key)) ? a59[key] : false).filter(spec => spec)
  return specialistNamesArr.map(name => {
    const child = name.children[0]
    return child.data ? child.data : child.children[0].data
  })
}

export const getSpecialistAndLeerlingen = async (list, query): Promise<any> => {
  const path = `database/${query}.json`

  try {
    const file = await fs.readFileSync(path, { encoding: 'UTF8' })
    return JSON.parse(file)
  } catch (e) {
    const schools = JSON.parse(list).filter(school => school.A.split('#')[2].toLowerCase() === query)

    const tryCatcher = async (func, arg) => {
      try {
        return await func(arg)
      } catch (e) {
        console.error(e)
        return {}
      }
    }

    const promises = schools.map(async school => {

      return {
        ...school,
        specialist: await tryCatcher(getSpecialist, school.C),
        leerlingen: await tryCatcher(getJson, generateLink(school.C, 'leerlingen'))
      }
    })

    const resolved: any = await Promise.all(promises)


    const mapped = resolved.map(school => {


      const getAantalLeerlingen = leerlingen => {
        if (leerlingen.rapport) {
          if (leerlingen.rapport.versie1.datasetAantalLeerlingen)
            try {
              return leerlingen.rapport.versie1.datasetAantalLeerlingen.rij.aantalLeerlingen
            } catch (e) {
              console.error(e)
            }

          if (leerlingen.rapport.versie1.datasetAantalLeerlingenTrend)
            try {
              return leerlingen.rapport.versie1.datasetAantalLeerlingenTrend.rij[0].aantalLeerlingen
            } catch (e) {
              console.error(e)
            }

          console.log(leerlingen)
        }
        return 0
      }

      school.leerlingen = getAantalLeerlingen(JSON.parse(school.leerlingen))
      return school
    })

    await fs.writeFileSync(path, JSON.stringify(mapped))
    return mapped
  }
}

export const chk = C => new Promise(async (resolve, reject) => {
  const path = `database/${C}.json`

  const getOnderwijsTijd = async () => {
    const $ = cheerio.load(await getJson(generateOnderwijsTijdLink(C)))
    const getData = a => Object.keys(a).map(key => !isNaN(Number(key)) ? a[key] : false).filter(spec => spec).map(key => key.children[0].data)
    const lesNamesCell = getData($('.a75'))
    const lesUren = getData($('.a139'))

    let newArr: string[][] = []
    let newNewArr: string[] = []

    for (const [index, les] of lesUren.entries()) {
      if (index % 6 === 0) {
        if (newNewArr.length) newArr = [...newArr, newNewArr]
        newNewArr = []
      }
      newNewArr = [...newNewArr, les]
    }
    newArr = [...newArr, newNewArr]

    const newNewNewArr: number[] = newArr.map(les => les.reduce((sum, uur) => {
      const hour = Number(uur[0])
      const minutes = Number(`${uur[3]}${uur[4]}`) / 60
      return sum + hour + minutes
    }, 0))

    return lesNamesCell.length ? { rapport: lesNamesCell.map((name, i) => ({ name, y: newNewNewArr[i] })) } : {}
  }

  try {
    const file = await fs.readFileSync(path, { encoding: 'UTF8' })
    resolve(JSON.parse(file))
  } catch (e1) {
    try {
      const poindsPromises = poinds.map(item => getJson(generateLink(C, item)))
      const result: any[] = await Promise.all(poindsPromises)
      const reduced = result.reduce((combined, poind, i) => {
        combined[poinds[i]] = (poind[0] === '<') ? {} : JSON.parse(poind)
        return combined
      }, { C })

      reduced.specialist = await getSpecialist(C)
      reduced.onderwijstijd = await getOnderwijsTijd()

      // const a162 = $('.a162')

      await fs.writeFileSync(path, JSON.stringify(reduced))
      resolve(reduced)
    } catch (e2) {
      reject({ e1, e2 })
    }
  }
})


// export const chkDir = async C => new Promise(async (resolve: (dir: string) => void, reject) => {
//   const dir = `database/${C}`
//
//   if (!fs.existsSync(dir)) {
//     try {
//       await fs.mkdirSync(dir)
//
//       const poindsPromises = poinds.map(item => getJson(generateLink(C, item)))
//       const result = await Promise.all(poindsPromises)
//       const filePromises = result.map((res, i) => {
//         if (res[0] === '<') return false
//         return fs.writeFileSync(`${dir}/${poinds[i]}.json`, res)
//       }).filter(file => file)
//       await Promise.all(filePromises)
//     } catch (e) {
//       reject(e)
//     }
//   }
//
//   resolve(dir)
// })
//
//
// export const combineDir = (dir: string, C: string) => new Promise((resolve, reject) =>
//   Promise.all(poinds.map(poind => fs.readFileSync(`${dir}/${poind}.json`, { encoding: 'UTF8' })))
//   .then(result =>
//     resolve(result.reduce((combined, poind, i) => {
//       combined[poinds[i]] = JSON.parse(poind)
//       return combined
//     }, {
//       C
//     }))
//   )
//   .catch(e => reject(e))
// )

