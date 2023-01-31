import {
  countTheDifferentGroup,
  sortedDiplomas
} from '../../utils/UtilsDiploma'
import { type ISKCVoreppeDiploma } from '../../types/ISKCVoreppeDiploma'
import { type IDiploma } from '../../types/IDiploma'

describe('utils_diploma', () => {
  test('countTheDifferentGroup', () => {
    const date = new Date()

    const diplomas: ISKCVoreppeDiploma[] = [
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'blanche-jaune',
        group: 'Groupe 1'
      },
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'blanche-jaune',
        group: 'Groupe 2'
      },
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'blanche-jaune',
        group: 'Groupe 2'
      },
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'blanche-jaune',
        group: 'Groupe 3'
      }
    ]
    expect(countTheDifferentGroup(diplomas)).toStrictEqual([
      'Groupe 1',
      'Groupe 2',
      'Groupe 3'
    ])
  })

  test('sortedDiplomas with type of diploma', () => {
    const date = new Date()
    const diplomas: IDiploma[] = [
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'jaune'
      },
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'blanche-jaune'
      }
    ]
    expect(sortedDiplomas(diplomas)).toStrictEqual([
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'blanche-jaune'
      },
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'jaune'
      }
    ] as IDiploma[])
  })

  test('sortedDiplomas with type and group of diploma', () => {
    const date = new Date()
    const diplomas: IDiploma[] = [
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'jaune',
        group: 'Groupe 3'
      },
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'blanche-jaune',
        group: 'Groupe 2'
      },
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'vert',
        group: 'Groupe 1'
      },
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'bleu',
        group: 'Groupe 1'
      }
    ]
    expect(sortedDiplomas(diplomas)).toStrictEqual([
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'bleu',
        group: 'Groupe 1'
      },
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'vert',
        group: 'Groupe 1'
      },
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'blanche-jaune',
        group: 'Groupe 2'
      },
      {
        clubName: 'hello-world',
        firstName: 'hello-world',
        lastName: 'hello-world',
        city: 'hello-world',
        date,
        type: 'jaune',
        group: 'Groupe 3'
      }
    ] as IDiploma[])
  })
})
