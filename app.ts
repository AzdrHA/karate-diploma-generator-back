import VoreppeGenerateDiploma from './script/VoreppeGenerateDiploma'
import { ISKCVoreppeGroup } from './types/ISKCVoreppeGroup'
import CoublevieGenerateDiploma from './script/CoublevieGenerateDiploma'
import DefaultGenerateDiploma from './script/DefaultGenerateDiploma'

const voreppeGenerateDiploma = new VoreppeGenerateDiploma()
voreppeGenerateDiploma.generateDiplomas([
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_2),
    firstName: 'Ilan',
    lastName: 'Philipe',
    date: new Date(),
    type: 'bleu'
  }
])

const coublevieGenerateDiploma = new CoublevieGenerateDiploma()
coublevieGenerateDiploma.generateDiplomas([
  {
    ...coublevieGenerateDiploma.baseMember,
    firstName: 'Baptiste',
    lastName: 'Philipe',
    date: new Date(),
    type: 'vert'
  }
])

const defaultGenerateDiploma = new DefaultGenerateDiploma('Grenlobe', 'Hosh')
defaultGenerateDiploma.generateDiplomas([
  {
    ...defaultGenerateDiploma.baseMember,
    firstName: 'Jean',
    lastName: 'Pierre',
    date: new Date(),
    type: 'marron'
  }
])
