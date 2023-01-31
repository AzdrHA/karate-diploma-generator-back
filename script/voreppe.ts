import { countTheDifferentGroup, sortedDiplomas } from '../utils/UtilsDiploma'
import { generateDiplomas } from '../utils/GenerateDiplomas'
import util from 'util'
import { slugify } from '../utils/UtilsStr'
import {
  type PickBandSKCVoreppeMember,
  type ISKCVoreppeDiploma
} from '../types/ISKCVoreppeDiploma'
import { ISKCVoreppeBand } from '../types/ISKCVoreppeBand'

const defaultSKCVoreppeMember: Pick<ISKCVoreppeDiploma, 'clubName' | 'city'> = {
  clubName: 'SKC Voreppe',
  city: 'Voreppe'
}

const defaultBand1SKCVoreppeMember: PickBandSKCVoreppeMember = {
  ...defaultSKCVoreppeMember,
  group: ISKCVoreppeBand.BAND_1
}

const defaultBand2SKCVoreppeMember: PickBandSKCVoreppeMember = {
  ...defaultSKCVoreppeMember,
  group: ISKCVoreppeBand.BAND_2
}

const defaultBand3SKCVoreppeMember: PickBandSKCVoreppeMember = {
  ...defaultSKCVoreppeMember,
  group: ISKCVoreppeBand.BAND_3
}

const defaultBand4SKCVoreppeMember: PickBandSKCVoreppeMember = {
  ...defaultSKCVoreppeMember,
  group: ISKCVoreppeBand.BAND_4
}

const defaultBand5SKCVoreppeMember: PickBandSKCVoreppeMember = {
  ...defaultSKCVoreppeMember,
  group: ISKCVoreppeBand.BAND_5
}

const diplomas: ISKCVoreppeDiploma[] = [
  // Band 1
  {
    ...defaultBand1SKCVoreppeMember,
    firstName: 'Samuel',
    lastName: 'MARTINO',
    date: new Date(),
    type: 'blanche-jaune'
  },
  {
    ...defaultBand1SKCVoreppeMember,
    firstName: 'Nathan',
    lastName: 'DI BARTOLOMEO',
    date: new Date(),
    type: 'blanche-jaune'
  },
  {
    ...defaultBand1SKCVoreppeMember,
    firstName: 'Karell',
    lastName: 'LANGUILLE',
    date: new Date(),
    type: 'jaune'
  },
  {
    ...defaultBand1SKCVoreppeMember,
    firstName: 'Kiara',
    lastName: 'DIONGUE',
    date: new Date(),
    type: 'jaune'
  },
  {
    ...defaultBand1SKCVoreppeMember,
    firstName: 'Aissatou',
    lastName: 'DIONGUE',
    date: new Date(),
    type: 'jaune'
  },

  // Band 2
  {
    ...defaultBand2SKCVoreppeMember,
    firstName: 'Miley',
    lastName: 'FAVIER',
    date: new Date(),
    type: 'jaune'
  },
  {
    ...defaultBand2SKCVoreppeMember,
    firstName: 'Margaux',
    lastName: 'BRUANDET',
    date: new Date(),
    type: 'jaune'
  },
  {
    ...defaultBand2SKCVoreppeMember,
    firstName: 'Elina',
    lastName: 'PIXIERE',
    date: new Date(),
    type: 'blanche-jaune'
  },
  {
    ...defaultBand2SKCVoreppeMember,
    firstName: 'Sidney',
    lastName: 'BAWA-GROGEAUD',
    date: new Date(),
    type: 'blanche-jaune'
  },
  {
    ...defaultBand2SKCVoreppeMember,
    firstName: 'Iyed',
    lastName: 'YOUSSEF',
    date: new Date(),
    type: 'blanche-jaune'
  },

  // Band 3

  {
    ...defaultBand3SKCVoreppeMember,
    firstName: 'Valentin',
    lastName: 'COLLET-BEILLON',
    date: new Date(),
    type: 'vert'
  },
  {
    ...defaultBand3SKCVoreppeMember,
    firstName: 'Alix',
    lastName: 'BERGERON',
    date: new Date(),
    type: 'vert'
  },
  {
    ...defaultBand3SKCVoreppeMember,
    firstName: 'Diane',
    lastName: 'MAIGNE',
    date: new Date(),
    type: 'vert'
  },
  {
    ...defaultBand3SKCVoreppeMember,
    firstName: 'Stella',
    lastName: 'THERON',
    date: new Date(),
    type: 'vert'
  },
  {
    ...defaultBand3SKCVoreppeMember,
    firstName: 'Raphael',
    lastName: 'SNAIDERO',
    date: new Date(),
    type: 'vert'
  },
  {
    ...defaultBand3SKCVoreppeMember,
    firstName: 'DURAND',
    lastName: 'BERGERON',
    date: new Date(),
    type: 'vert'
  },
  {
    ...defaultBand3SKCVoreppeMember,
    firstName: 'Elian',
    lastName: 'ZRIDA',
    date: new Date(),
    type: 'orange'
  },
  {
    ...defaultBand3SKCVoreppeMember,
    firstName: 'Antonin',
    lastName: 'CHARRIER',
    date: new Date(),
    type: 'orange'
  },
  {
    ...defaultBand3SKCVoreppeMember,
    firstName: 'Emma',
    lastName: 'PESENTI',
    date: new Date(),
    type: 'jaune'
  },
  {
    ...defaultBand3SKCVoreppeMember,
    firstName: 'Sophia',
    lastName: 'DICORATO',
    date: new Date(),
    type: 'jaune'
  },
  {
    ...defaultBand3SKCVoreppeMember,
    firstName: 'Morjana',
    lastName: 'DAHOUMANE',
    date: new Date(),
    type: 'jaune'
  },

  // Band 4
  {
    ...defaultBand4SKCVoreppeMember,
    firstName: 'Alexis',
    lastName: 'LOIODICE',
    date: new Date(),
    type: 'vert'
  },
  {
    ...defaultBand4SKCVoreppeMember,
    firstName: 'Kenjy',
    lastName: 'SEIGLER',
    date: new Date(),
    type: 'vert'
  },
  {
    ...defaultBand4SKCVoreppeMember,
    firstName: 'Adam',
    lastName: 'HOUMANI',
    date: new Date(),
    type: 'bleu'
  },

  // Band 5
  {
    ...defaultBand5SKCVoreppeMember,
    firstName: 'Baptiste',
    lastName: 'BRAND',
    date: new Date(),
    type: 'vert'
  },
  {
    ...defaultBand5SKCVoreppeMember,
    firstName: 'Ilan',
    lastName: 'EL YANDOUZI',
    date: new Date(),
    type: 'bleu'
  },
  {
    ...defaultBand5SKCVoreppeMember,
    firstName: 'Etienne',
    lastName: 'CESAR',
    date: new Date(),
    type: 'vert'
  }
]

const generateVoreppeDiplomas = (): void => {
  countTheDifferentGroup(diplomas).forEach((group) => {
    const diplomasByGroup = sortedDiplomas(diplomas).filter(
      (diploma) => diploma.group === group
    )

    generateDiplomas(
      diplomasByGroup,
      util.format(
        '%s-Voreppe-Diplomes-Karate-%s-%s',
        diplomasByGroup.length,
        slugify(group),
        slugify(new Date().toLocaleDateString('fr'))
      )
    )
  })
}

export default generateVoreppeDiplomas
