import PDFDocument from 'pdfkit'
import fs from 'fs'

/**
 * Create a new diploma
 * @param {string} clubName
 * @param {string} awardedTo
 * @param {string} city
 * @param {string} date
 * @returns {void}
 */
const newDiploma = (clubName: string, awardedTo: string, city: string, date: Date, type: string): void => {
  const doc = new PDFDocument({ size: 'A1', layout: 'landscape' })
  doc.pipe(fs.createWriteStream('output.pdf'))
  const imageWidth = 2339
  const imageHeight = 1654
  doc.image(`./diplomas/${type}.png`, doc.page.width / 2 - imageWidth / 2, doc.page.height / 2 - imageHeight / 2, { scale: 1, align: 'center', valign: 'center', width: imageWidth, height: imageHeight })

  doc
    .fontSize(50)
    .font('fonts/BebasNeueRegular.ttf')

  doc.text(clubName, doc.page.width / 3 - 30, doc.page.height / 2 - 30, {
    align: 'left'
  })

  doc.text(awardedTo, doc.page.width / 3 - 30, doc.page.height / 2 + 65, {
    align: 'left'
  })

  doc.text(city, doc.page.width / 3 - 30, doc.page.height / 1.5 - 28, {
    align: 'left'
  })

  doc.text(date.toDateString(), doc.page.width / 1.7 + 8, doc.page.height / 1.5 - 28, {
    align: 'left'
  })

  doc.end()
}

const belts = [
  {
    name: 'white-yellow',
    entry: ['blanche-jaune']
  },
  {
    name: 'yellow',
    entry: ['jaune']
  },
  {
    name: 'yellow-orange',
    entry: ['jaune-orange']
  },
  {
    name: 'orange',
    entry: ['orange']
  },
  {
    name: 'orange-green',
    entry: ['orange-vert']
  },
  {
    name: 'green',
    entry: ['vert']
  },
  {
    name: 'green-blue',
    entry: ['vert-bleu']
  },
  {
    name: 'blue',
    entry: ['bleu']
  },
  {
    name: 'blue-brown',
    entry: ['bleu-marron']
  },
  {
    name: 'brown',
    entry: ['marron']
  }
]

const entry = 'orange'

const testBlabla = (colors: string[]) => {
  return colors.map((color) => {
    const splitColor = color.split('-')
    const test = splitColor.map((word) => word.charAt(0)).join('')
    const t2 = splitColor.map((word) => word.charAt(0).toLowerCase() + word.slice(1)).join('')
    return [test, t2, color]
  })
}

const find = belts.find((belt) => testBlabla(belt.entry)[0].includes(entry.toLowerCase()))
console.log(find)

if (find != null) newDiploma('SKC Voreppe', 'Baptiste BRAND', 'Voreppe', new Date(), find.name)
