import DefaultGenerateDiploma from './script/DefaultGenerateDiploma'

// https://docs.google.com/spreadsheets/d/1HzTR5o8jnzensFqWDI9GsugC0MrUvjAdrylAkBaE3x4/edit?usp=sharing
const type: 'file' | 'url' = process.argv[2] as 'file' | 'url'
const path = process.argv[3]
console.log(process.argv)

const clubCity = 'Voreppe'
const clubName = 'SKC Voreppe'
const generateDiploma = new DefaultGenerateDiploma(clubCity, clubName)
generateDiploma.fromExcel(type, path)
