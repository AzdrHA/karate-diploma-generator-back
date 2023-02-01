import { sortedDiplomas } from '../utils/UtilsDiploma'
import BaseGenerateDiploma from './BaseGenerateDiploma'
import { type IDiploma } from '../types/IDiploma'

export default class CoublevieGenerateDiploma extends BaseGenerateDiploma {
  public readonly CLUB_NAME: string = 'CKC Coublevie'
  public readonly CLUB_CITY: string = 'Coublevie'
  public generateDiplomas(diplomas: IDiploma[]): void {
    const diplomasByGroup = sortedDiplomas(diplomas)

    super.generateDiplomas(diplomasByGroup)
  }
}
