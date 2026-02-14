import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  heroImage: Media
  blockImage: Media
  author: User
}

export const post1: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'handmatige-vs-mechanische-sloop',
    _status: 'published',
    authors: [author],
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Bij het slopen van gebouwen staat u voor een belangrijke keuze: handmatige sloop of mechanische sloop. Deze gids helpt u de juiste beslissing te maken voor uw project.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Voordelen van Handmatige Sloop',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '✓ Maximale precisie en controle over het sloopproces\n✓ Minimale kans op beschadiging van omliggende constructies\n✓ Uitstekende mogelijkheden voor materiaalscheiding en recycling\n✓ Lagere geluidsproductie en trillingen\n✓ Geschikt voor krappe ruimtes waar machines niet passen\n✓ Ideal voor selectieve sloop en monumentale panden',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Nadelen van Handmatige Sloop',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '✗ Langere doorlooptijd voor grotere projecten\n✗ Hogere arbeidskosten bij omvangrijke sloopwerkzaamheden\n✗ Fysiek zwaar werk voor de vakmensen\n✗ Beperkte capaciteit voor grote industriële projecten\n✗ Niet geschikt voor instabiele of gevaarlijke constructies',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Voordelen van Mechanische Sloop',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '✓ Enorme productiviteit en snelheid\n✓ Lagere kosten voor grote projecten\n✓ Hoger veiligheidsniveau bij instabiele constructies\n✓ Mogelijkheid tot sloop van hoogbouw en bruggen\n✓ Minder arbeidsintensief\n✓ Constante prestatie ongeacht weersomstandigheden',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Nadelen van Mechanische Sloop',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '✗ Hoge investeringen in apparatuur en transport\n✗ Meer geluidsoverlast en trillingen\n✗ Beperkte mogelijkheden voor selectieve demontage\n✗ Minder geschikt voor krappe stedelijke omgevingen\n✗ Lagere recyclingpercentages door gemengd puin\n✗ Vereist ruime toegangswegen en werkterrein',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: '',
              blockType: 'mediaBlock',
              media: blockImage.id,
            },
            format: '',
            version: 2,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Kostenvergelijking',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Voor een gemiddeld woonhuis van 150m² liggen de kosten voor handmatige sloop tussen €15.000 en €25.000. Mechanische sloop van hetzelfde huis kost doorgaans €12.000 tot €20.000, maar met minder mogelijkheden voor materiaalhergebruik.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Wanneer Welke Methode Kiezen?',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Kies voor handmatige sloop bij: binnenruimtes, monumentale panden, selectieve renovatie, en situaties met risico op trillingschade.\n\nKies voor mechanische sloop bij: grote industriële gebouwen, flatgebouwen, betonnen bruggen, en projecten met strakke deadlines.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description:
        'Ontdek de verschillen tussen handmatige en mechanische sloop. Lees welke methode het beste bij uw project past en maak een weloverwogen keuze.',
      image: heroImage.id,
      title: 'Handmatige vs Mechanische Sloop: De Juiste Methode Kiezen',
    },
    relatedPosts: [],
    title: 'Handmatige vs Mechanische Sloop: De Juiste Methode Kiezen',
  }
}
