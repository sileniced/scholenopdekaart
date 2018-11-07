import { Get, JsonController, NotFoundError, Param } from 'routing-controllers'
import * as fs from 'fs'
import { chkDir, combineDir, ISchool, TPoind } from './AppControllerUtils'

@JsonController()
export default class AppController {

  @Get('/')
  public async getList(): Promise<ISchool[]> {
    const list: string = await fs.readFileSync('src/data/schoolList.json', { encoding: 'UTF8' })
    return JSON.parse(list).filter(school => school.A.split('#')[2] === 'Utrecht')
  }

  @Get('/:C')
  public async getSchoolDetails(
    @Param('C') C: string
  ): Promise<any> {

    const dir = await chkDir(C)

    const result = combineDir(dir)
    if (!result) throw new NotFoundError('not found')

    return result

  }

  @Get('/:C/:poind')
  public async getSchoolDetail(
    @Param('C') C: string,
    @Param('poind') poind: TPoind
  ): Promise<any> {

    const dir = await chkDir(C)

    const result = await fs.readFileSync(`${dir}/${poind}.json`, { encoding: 'UTF8' })
    if (!result) throw new NotFoundError('not found')

    return JSON.parse(result)

  }

}