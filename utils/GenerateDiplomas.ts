import { type IDiploma } from '../types/IDiploma'
import PDFDocument from 'pdfkit'
import fs from 'fs'
import util from 'util'
import sizeOf from 'image-size'
import { slugify } from './UtilsStr'
import { parse } from 'yaml'
import { type IBelt } from '../types/IBelt'

const belts: IBelt[] = parse(fs.readFileSync('./belts.yml', 'utf8'))

/**
 * @param {IDiploma[]} diplomas
 * @param {string|null} outputName
 * @return {void}
 */
export const generateDiplomas = (
  diplomas: IDiploma[],
  outputName: string | null = null
): void => {
  const doc = new PDFDocument({ size: 'A1', layout: 'landscape' })
  const currentDate = new Date()
  doc.pipe(
    fs.createWriteStream(
      util.format(
        './output/%s.pdf',
        outputName ??
          util.format(
            '%s-Diplomes-Karate-%s-%s',
            diplomas.length,
            slugify(currentDate.toLocaleDateString('fr')),
            currentDate.getTime()
          )
      )
    )
  )

  doc.fontSize(50).font('fonts/BebasNeueRegular.ttf')

  diplomas.forEach((diploma, i) => {
    const find = belts.find((belt) =>
      belt.entry.includes(diploma.type.toLowerCase())
    )
    if (find == null) return

    const image = sizeOf(`./diplomas/${find.name}.png`)
    const { width: imageWidth = 0, height: imageHeight = 0 } = image

    doc.image(
      `./diplomas/${find.name}.png`,
      doc.page.width / 2 - imageWidth / 2,
      doc.page.height / 2 - imageHeight / 2,
      {
        scale: 1,
        align: 'center',
        valign: 'center',
        width: imageWidth,
        height: imageHeight
      }
    )

    doc.text(
      diploma.clubName,
      doc.page.width / 3 - 30,
      doc.page.height / 2 - 30,
      {
        align: 'left'
      }
    )

    doc.text(
      util.format('%s %s', diploma.firstName, diploma.lastName.toUpperCase()),
      doc.page.width / 3 - 30,
      doc.page.height / 2 + 65,
      {
        align: 'left'
      }
    )

    doc.text(
      diploma.city,
      doc.page.width / 3 - 30,
      doc.page.height / 1.5 - 28,
      {
        align: 'left'
      }
    )

    doc.text(
      diploma.date.toLocaleDateString('fr'),
      doc.page.width / 1.7 + 8,
      doc.page.height / 1.5 - 28,
      {
        align: 'left'
      }
    )

    if (i + 1 < diplomas.length) doc.addPage()
  })

  doc.end()
}
