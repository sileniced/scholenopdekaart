import { Get, JsonController, NotFoundError, Param } from 'routing-controllers'
import * as fs from 'fs'
import { chkDir, ISchool, TPoind  } from './AppControllerUtils'

@JsonController()
export default class AppController {

  @Get('/')
  public async getList(): Promise<ISchool[]> {
    const list: string = await fs.readFileSync('src/data/schoolList.json', { encoding: 'UTF8' })
    return JSON.parse(list).filter(school => school.A.split('#')[2] === 'Utrecht')
  }

  @Get('/:C/:poind')
  public async getSchoolDetails(
    @Param('C') C: string,
    @Param('poind') poind: TPoind
  ): Promise<ISchool> {

    const dir = `database/${C}`
    await chkDir(C, dir)

    const result = await fs.readFileSync(`${dir}/${poind}.json`, { encoding: 'UTF8' })
    if (!result) throw new NotFoundError('not found')

    return JSON.parse(result)

  }

}