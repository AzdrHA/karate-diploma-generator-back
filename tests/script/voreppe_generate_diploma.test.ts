import VoreppeGenerateDiploma from '../../script/VoreppeGenerateDiploma'
import { ISKCVoreppeGroup } from '../../types/ISKCVoreppeGroup'

describe('voreppe_generate_diploma', () => {
  test('baseMember', () => {
    const voreppeGenerateDiploma = new VoreppeGenerateDiploma()
    expect(voreppeGenerateDiploma.baseMember).toStrictEqual({
      clubName: voreppeGenerateDiploma.CLUB_NAME,
      city: voreppeGenerateDiploma.CLUB_CITY
    })
  })

  test('baseGroupMember', () => {
    const voreppeGenerateDiploma = new VoreppeGenerateDiploma()

    expect(
      voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_1)
    ).toStrictEqual({
      ...voreppeGenerateDiploma.baseMember,
      group: ISKCVoreppeGroup.GROUP_1
    })
  })
})
