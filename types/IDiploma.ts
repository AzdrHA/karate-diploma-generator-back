export interface IDiploma {
  clubName: string
  firstName: string
  lastName: string
  city: string
  date?: Date
  type:
    | 'blanche-jaune'
    | 'jaune'
    | 'jaune-orange'
    | 'orange'
    | 'orange-vert'
    | 'vert'
    | 'vert-bleu'
    | 'bleu'
    | 'bleu-marron'
    | 'marron'

  group?: string
}
