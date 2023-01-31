import generateVoreppeDiplomas from './script/voreppe'

switch (process.argv[2]) {
  case 'voreppe':
    generateVoreppeDiplomas()
    break
  case 'generate-diplomas-voreppe':
    console.log('generate-diplomas-voreppe')
    break
  default:
    console.log('No command found')
    break
}
