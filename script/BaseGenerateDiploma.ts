import { type IDiploma } from '../types/IDiploma'
import PDFDocument from 'pdfkit'
import fs from 'fs'
import util from 'util'
import sizeOf from 'image-size'
import { parse } from 'yaml'
import { type IBelt } from '../types/IBelt'
import { slugify } from '../utils/UtilsStr'
import { type IGenerateDiplomaOptions } from '../types/IGenerateDiplomaOptions'

export default abstract class BaseGenerateDiploma {
  public readonly CLUB_NAME: string
  public readonly CLUB_CITY: string

  public readonly options: IGenerateDiplomaOptions

  public readonly madeAt: Date

  public constructor(options: IGenerateDiplomaOptions) {
    this.CLUB_NAME = options.clubName ?? ''
    this.CLUB_CITY = options.clubCity ?? ''
    this.options = options
    this.madeAt = this.options.date ?? new Date()
  }

  public get baseMember(): Pick<IDiploma, 'clubName' | 'city'> {
    return {
      clubName: this.CLUB_NAME,
      city: this.CLUB_CITY
    }
  }

  private readonly belts: IBelt[] = parse(
    fs.readFileSync('./belts.yml', 'utf8')
  )

  public generateDiplomas(
    diplomas: IDiploma[],
    outputName: string | null = null
  ): void {
    const doc = new PDFDocument({ size: 'A1', layout: 'landscape' })
    doc.pipe(
      fs.createWriteStream(
        util.format(
          './output/%s.pdf',
          outputName ??
            util.format(
              '%s-%s-Diplomes-Karate-%s-%s',
              diplomas.length,
              slugify(this.CLUB_NAME),
              slugify(this.madeAt.toLocaleDateString('fr')),
              this.madeAt.getTime()
            )
        )
      )
    )

    doc.fontSize(50).font('fonts/BebasNeueRegular.ttf')

    diplomas.forEach((diploma, i) => {
      diploma = { ...this.baseMember, ...diploma }
      const find = this.belts.find((belt) =>
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

      // Write the club name
      doc.text(
        diploma.clubName,
        doc.page.width / 3 - 30,
        doc.page.height / 2 - 30,
        {
          align: 'left'
        }
      )

      // Write the member name
      doc.text(
        util.format('%s %s', diploma.firstName, diploma.lastName.toUpperCase()),
        doc.page.width / 3 - 30,
        doc.page.height / 2 + 65,
        {
          align: 'left'
        }
      )

      // Write the city
      doc.text(
        diploma.city,
        doc.page.width / 3 - 30,
        doc.page.height / 1.5 - 28,
        {
          align: 'left'
        }
      )

      // Write the date
      doc.text(
        (diploma.date ?? this.madeAt).toLocaleDateString('fr'),
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
}
