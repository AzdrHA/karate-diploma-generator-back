import { type Diploma } from './Diploma'

export type PickSKCVoreppeMember = Pick<SKCVoreppeDiploma, 'clubName' | 'city'>
export type PickBandSKCVoreppeMember = Pick<SKCVoreppeDiploma, 'group'> &
  PickSKCVoreppeMember

export interface SKCVoreppeDiploma extends Diploma {
  group: string
}
