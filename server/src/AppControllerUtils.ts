import * as fs from 'fs'

import * as request from 'request'

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

const getJson = (url): Promise<ISchool> => new Promise((resolve, reject) => {
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      resolve(body.trim())
    } else {
      reject(`Got an error: ${error}, status code: ${response.statusCode}`)
    }
  })
})

export const chk = C => new Promise(async (resolve, reject) => {
  const path = `database/${C}.json`
  try {
    const file = await fs.readFileSync(path, { encoding: 'UTF8' })
    resolve(JSON.parse(file))
  } catch (e) {
    try {
      const poindsPromises = poinds.map(item => getJson(generateLink(C, item)))
      const result: any[] = await Promise.all(poindsPromises)
      const reduced = result.reduce((combined, poind, i) => {
        combined[poinds[i]] = (poind[0] === '<') ? {} : JSON.parse(poind)
        return combined
      }, { C })

      await fs.writeFileSync(path, JSON.stringify(reduced))
      resolve(reduced)
    } catch (e) {
      reject(e)
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

