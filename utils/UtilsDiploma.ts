import { type ISKCVoreppeDiploma } from '../types/ISKCVoreppeDiploma'
import { type IDiploma } from '../types/IDiploma'

const countTheDifferentGroup = (diplomas: ISKCVoreppeDiploma[]): string[] =>
  diplomas.reduce((acc: string[], diploma) => {
    if (!acc.includes(diploma.group)) {
      acc.push(diploma.group)
    }
    return acc
  }, [])

const sortedDiplomas = (diplomas: IDiploma[]): IDiploma[] =>
  diplomas.sort((a, b) => {
    if (a.group !== undefined && b.group !== undefined) {
      if (a.group < b.group) return -1
    }

    return a.type.localeCompare(b.type)
  })

export { countTheDifferentGroup, sortedDiplomas }
