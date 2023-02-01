import BaseGenerateDiploma from './BaseGenerateDiploma'

export default class DefaultGenerateDiploma extends BaseGenerateDiploma {
  public readonly CLUB_CITY: string
  public readonly CLUB_NAME: string
  public constructor(clubCity: string, clubName: string) {
    super(clubCity, clubName)

    this.CLUB_CITY = clubCity
    this.CLUB_NAME = clubName
  }
}
