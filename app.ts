import VoreppeGenerateDiploma from './script/VoreppeGenerateDiploma'
import { ISKCVoreppeGroup } from './types/ISKCVoreppeGroup'

const voreppeGenerateDiploma = new VoreppeGenerateDiploma()
voreppeGenerateDiploma.generateDiplomas([
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_2),
    firstName: 'Jean',
    lastName: 'Philipe',
    date: new Date(),
    type: 'blanche-jaune'
  }
])
