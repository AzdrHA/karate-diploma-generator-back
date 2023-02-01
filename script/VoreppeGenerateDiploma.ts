import {
  type ISKCVoreppeDiploma,
  type PickGroupSKCVoreppeMember
} from '../types/ISKCVoreppeDiploma'
import { countTheDifferentGroup, sortedDiplomas } from '../utils/UtilsDiploma'
import util from 'util'
import { slugify } from '../utils/UtilsStr'
import BaseGenerateDiploma from './BaseGenerateDiploma'
import { type ISKCVoreppeGroup } from '../types/ISKCVoreppeGroup'

export default class VoreppeGenerateDiploma extends BaseGenerateDiploma {
  public readonly CLUB_NAME: string = 'SKC Voreppe'
  public readonly CLUB_CITY: string = 'Voreppe'

  public baseGroupMember = (
    group: ISKCVoreppeGroup
  ): PickGroupSKCVoreppeMember => {
    return {
      ...this.baseMember,
      group
    }
  }

  public generateDiplomas(diplomas: ISKCVoreppeDiploma[]): void {
    countTheDifferentGroup(diplomas).forEach((group) => {
      const diplomasByGroup = sortedDiplomas(diplomas).filter(
        (diploma) => diploma.group === group
      )

      super.generateDiplomas(
        diplomasByGroup,
        util.format(
          '%s-Voreppe-Diplomes-Karate-%s-%s',
          diplomasByGroup.length,
          slugify(group),
          slugify(this.makeAt.toLocaleDateString('fr'))
        )
      )
    })
  }
}
