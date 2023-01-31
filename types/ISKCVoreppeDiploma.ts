import { type IDiploma } from './IDiploma'

export type PickSKCVoreppeMember = Pick<ISKCVoreppeDiploma, 'clubName' | 'city'>
export type PickGroupSKCVoreppeMember = Pick<ISKCVoreppeDiploma, 'group'> &
  PickSKCVoreppeMember

export interface ISKCVoreppeDiploma extends IDiploma {
  group: string
}
