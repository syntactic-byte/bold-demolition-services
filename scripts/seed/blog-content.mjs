// Blog post content with translations for all 15 languages
// Structure: Each post has title, excerpt, and content for each locale

export const blogPosts = [
  {
    slug: '25-jaar-titanbrekers',
    imageIndex: 12, // blog-anniversary.webp
    date: '2024-01-15',
    translations: {
      nl: {
        title: '25 Jaar titaanbrekers: Ons Jubileum',
        excerpt:
          'titaanbrekers bestaat 25 jaar! Een kwart eeuw van professionele sloopwerkzaamheden, groei en innovatie in de bouwsector.',
        content: generateAnniversaryContent('nl'),
      },
      en: {
        title: '25 Years of TitanBreakers: Our Anniversary',
        excerpt:
          'TitanBreakers is celebrating 25 years! A quarter century of professional demolition work, growth and innovation in the construction sector.',
        content: generateAnniversaryContent('en'),
      },
      // Additional languages can be added here
    },
  },
  {
    slug: 'badkamer-sloop-best-practices',
    imageIndex: 11, // blog-bathroom-tips.webp
    date: '2024-01-08',
    translations: {
      nl: {
        title: 'Badkamer Sloop: Best Practices en Tips',
        excerpt:
          'Ontdek de beste methoden voor het slopen van een badkamer. Van het verwijderen van tegels tot het afvoeren van sanitair – alles wat u moet weten.',
        content: generateBathroomContent('nl'),
      },
      en: {
        title: 'Bathroom Demolition: Best Practices and Tips',
        excerpt:
          'Discover the best methods for demolishing a bathroom. From removing tiles to disposing of sanitary ware – everything you need to know.',
        content: generateBathroomContent('en'),
      },
    },
  },
  {
    slug: 'handmatige-vs-mechanische-sloop',
    imageIndex: 8, // blog-manual-demo.webp
    date: '2023-12-20',
    translations: {
      nl: {
        title: 'Handmatige vs Mechanische Sloop: Wanneer Wat?',
        excerpt:
          'Wanneer kies je voor handmatige sloop en wanneer voor mechanische sloop? Ontdek de voor- en nadelen van beide methoden.',
        content: generateManualContent('nl'),
      },
      en: {
        title: 'Manual vs Mechanical Demolition: When to Use What?',
        excerpt:
          'When do you choose manual demolition and when for mechanical demolition? Discover the pros and cons of both methods.',
        content: generateManualContent('en'),
      },
    },
  },
  {
    slug: 'voorbereiding-sloopwerkzaamheden',
    imageIndex: 10, // blog-kitchen-prep.webp
    date: '2023-11-15',
    translations: {
      nl: {
        title: 'Voorbereiding Voor Sloopwerkzaamheden',
        excerpt:
          'Goede voorbereiding is essentieel voor een succesvol sloopproject. Ontdek waar u op moet letten voordat de sloop begint.',
        content: generatePreparationContent('nl'),
      },
      en: {
        title: 'Preparation for Demolition Work',
        excerpt:
          'Good preparation is essential for a successful demolition project. Discover what you need to pay attention to before demolition begins.',
        content: generatePreparationContent('en'),
      },
    },
  },
  {
    slug: 'asbest-verwijdering-protocollen',
    imageIndex: 9, // blog-asbestos-safety.webp
    date: '2023-10-20',
    translations: {
      nl: {
        title: 'Asbest Verwijdering: Protocollen en Veiligheid',
        excerpt:
          'Asbest verwijdering vereist strikte protocollen. Ontdek hoe titaanbrekers veilig en gecertificeerd asbest verwijdert.',
        content: generateAsbestosContent('nl'),
      },
      en: {
        title: 'Asbestos Removal: Protocols and Safety',
        excerpt:
          'Asbestos removal requires strict protocols. Discover how TitanBreakers safely removes asbestos with certified procedures.',
        content: generateAsbestosContent('en'),
      },
    },
  },
  {
    slug: 'duurzaam-slopen-visie',
    imageIndex: 13, // blog-sustainable.webp
    date: '2023-09-10',
    translations: {
      nl: {
        title: 'Duurzaam Slopen: Onze Visie op Circulariteit',
        excerpt:
          'Duurzaamheid is een kernwaarde bij titaanbrekers. Wij zorgen voor 98% recycling van alle sloopmaterialen.',
        content: generateSustainableContent('nl'),
      },
      en: {
        title: 'Sustainable Demolition: Our Vision on Circularity',
        excerpt:
          'Sustainability is a core value at TitanBreakers. We ensure 98% recycling of all demolition materials.',
        content: generateSustainableContent('en'),
      },
    },
  },
]

// Content generators for different locales
function generateAnniversaryContent(locale) {
  const content = {
    nl: {
      intro:
        'Dit jaar vieren wij een bijzondere mijlpaal: titaanbrekers bestaat 25 jaar! Wat begon als een klein familiebedrijf in 1999 is uitgegroeid tot een van de meest gerespecteerde sloopbedrijven van Nederland.',
      milestones: [
        '2005: Certificering VCA** en start van professionele asbestsanering',
        '2010: Erkenning SC-530 voor gespecialiseerde asbestverwijdering',
        '2015: Landelijke uitbreiding met vestigingen door heel Nederland',
        '2020: Groei naar 50+ vakmensen en 100+ projecten per jaar',
        '2024: 500+ succesvol afgeronde projecten en 25-jarig jubileum',
      ],
      conclusion:
        'Wij willen graag iedereen bedanken die heeft bijgedragen aan dit succes. Op naar de volgende 25 jaar!',
    },
    en: {
      intro:
        'This year we celebrate a special milestone: TitanBreakers is 25 years old! What started as a small family business in 1999 has grown into one of the most respected demolition companies in the Netherlands.',
      milestones: [
        '2005: VCA** certification and start of professional asbestos removal',
        '2010: SC-530 recognition for specialized asbestos removal',
        '2015: National expansion with locations throughout the Netherlands',
        '2020: Growth to 50+ professionals and 100+ projects per year',
        '2024: 500+ successfully completed projects and 25th anniversary',
      ],
      conclusion:
        "We would like to thank everyone who has contributed to this success. Here's to the next 25 years!",
    },
  }

  const data = content[locale] || content['en']

  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', text: data.intro, version: 1 }],
          version: 1,
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [
            { type: 'text', text: locale === 'nl' ? 'Mijlpalen' : 'Milestones', version: 1 },
          ],
          version: 1,
        },
        {
          type: 'list',
          listType: 'bullet',
          children: data.milestones.map((milestone) => ({
            type: 'listitem',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: milestone, version: 1 }],
                version: 1,
              },
            ],
            version: 1,
          })),
          version: 1,
        },
        {
          type: 'paragraph',
          children: [{ type: 'text', text: data.conclusion, version: 1 }],
          version: 1,
        },
      ],
      version: 1,
    },
  }
}

function generateBathroomContent(locale) {
  const content = {
    nl: {
      title: 'Voorbereiding is alles',
      intro:
        'Een badkamer slopen is een klus die veel mensen onderschatten. In dit artikel delen wij onze expertise en geven wij u waardevolle tips.',
      steps: [
        'Het water afsluiten en de leidingen leeg laten lopen',
        'De elektriciteit uitschakelen',
        'Beschermende kleding dragen: veiligheidsbril, werkhandschoenen',
        'De ruimte goed ventileren',
        'Beschermende afdekking aanbrengen voor vloeren',
      ],
      warning:
        'In badkamers van voor 1994 kan asbest voorkomen. Asbest is zeer schadelijk voor de gezondheid.',
      conclusion: 'Met meer dan 25 jaar ervaring staat titaanbrekers voor u klaar.',
    },
    en: {
      title: 'Preparation is everything',
      intro:
        'Demolishing a bathroom is a job that many people underestimate. In this article we share our expertise and give you valuable tips.',
      steps: [
        'Turn off the water and drain the pipes',
        'Switch off the electricity',
        'Wear protective clothing: safety goggles, work gloves',
        'Ventilate the space well',
        'Apply protective covering for floors',
      ],
      warning:
        'In bathrooms built before 1994, asbestos can be present. Asbestos is very harmful to health.',
      conclusion: 'With more than 25 years of experience, TitanBreakers is ready to help you.',
    },
  }

  const data = content[locale] || content['en']

  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', text: data.intro, version: 1 }],
          version: 1,
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [{ type: 'text', text: data.title, version: 1 }],
          version: 1,
        },
        {
          type: 'list',
          listType: 'bullet',
          children: data.steps.map((step) => ({
            type: 'listitem',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: step, version: 1 }],
                version: 1,
              },
            ],
            version: 1,
          })),
          version: 1,
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [
            {
              type: 'text',
              text: locale === 'nl' ? 'Asbest: een verborgen gevaar' : 'Asbestos: a hidden danger',
              version: 1,
            },
          ],
          version: 1,
        },
        {
          type: 'paragraph',
          children: [{ type: 'text', text: data.warning, version: 1 }],
          version: 1,
        },
        {
          type: 'paragraph',
          children: [{ type: 'text', text: data.conclusion, version: 1 }],
          version: 1,
        },
      ],
      version: 1,
    },
  }
}

function generateManualContent(locale) {
  const content = {
    nl: {
      intro:
        'Bij sloopwerkzaamheden staat vaak de vraag centraal: kiezen we voor handmatige sloop of mechanische sloop?',
      manualPros: [
        'Maximale precisie en controle',
        'Ideaal voor kleine ruimtes',
        'Minimaal risico op beschadiging',
        'Minder geluidsoverlast',
      ],
      mechanicalPros: [
        'Zeer snel bij grote volumes',
        'Kosteneffectief voor grote projecten',
        'Kan zware constructies aan',
      ],
      conclusion:
        'Bij titaanbrekers zijn we gespecialiseerd in handmatige sloop voor interieurprojecten.',
    },
    en: {
      intro:
        'When it comes to demolition work, the question often arises: do we choose manual demolition or mechanical demolition?',
      manualPros: [
        'Maximum precision and control',
        'Ideal for small spaces',
        'Minimal risk of damage',
        'Less noise pollution',
      ],
      mechanicalPros: [
        'Very fast for large volumes',
        'Cost-effective for large projects',
        'Can handle heavy structures',
      ],
      conclusion: 'At TitanBreakers we specialize in manual demolition for interior projects.',
    },
  }

  const data = content[locale] || content['en']

  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', text: data.intro, version: 1 }],
          version: 1,
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [
            {
              type: 'text',
              text:
                locale === 'nl' ? 'Voordelen handmatige sloop' : 'Advantages of manual demolition',
              version: 1,
            },
          ],
          version: 1,
        },
        {
          type: 'list',
          listType: 'bullet',
          children: data.manualPros.map((pro) => ({
            type: 'listitem',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: pro, version: 1 }],
                version: 1,
              },
            ],
            version: 1,
          })),
          version: 1,
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [
            {
              type: 'text',
              text:
                locale === 'nl'
                  ? 'Voordelen mechanische sloop'
                  : 'Advantages of mechanical demolition',
              version: 1,
            },
          ],
          version: 1,
        },
        {
          type: 'list',
          listType: 'bullet',
          children: data.mechanicalPros.map((pro) => ({
            type: 'listitem',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: pro, version: 1 }],
                version: 1,
              },
            ],
            version: 1,
          })),
          version: 1,
        },
        {
          type: 'paragraph',
          children: [{ type: 'text', text: data.conclusion, version: 1 }],
          version: 1,
        },
      ],
      version: 1,
    },
  }
}

function generatePreparationContent(locale) {
  const content = {
    nl: {
      intro:
        'Een succesvol sloopproject begint met een grondige voorbereiding. Dit bespaart u niet alleen tijd, maar ook geld en frustratie.',
      checklist: [
        'Inventarisatie en inspectie van het pand',
        'Vergunningen en regelgeving checken',
        'Veiligheidsplan opstellen',
        'Logistieke planning',
        'Afvalscheiding voorbereiden',
      ],
      conclusion: 'Met de juiste voorbereiding zorgt u voor een soepel verloop van het project.',
    },
    en: {
      intro:
        'A successful demolition project starts with thorough preparation. This will save you not only time but also money and frustration.',
      checklist: [
        'Inventory and inspection of the building',
        'Check permits and regulations',
        'Prepare safety plan',
        'Logistical planning',
        'Prepare waste separation',
      ],
      conclusion: 'With proper preparation, you ensure smooth project execution.',
    },
  }

  const data = content[locale] || content['en']

  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', text: data.intro, version: 1 }],
          version: 1,
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [
            {
              type: 'text',
              text: locale === 'nl' ? 'Checklist voorbereiding' : 'Preparation checklist',
              version: 1,
            },
          ],
          version: 1,
        },
        {
          type: 'list',
          listType: 'bullet',
          children: data.checklist.map((item) => ({
            type: 'listitem',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: item, version: 1 }],
                version: 1,
              },
            ],
            version: 1,
          })),
          version: 1,
        },
        {
          type: 'paragraph',
          children: [{ type: 'text', text: data.conclusion, version: 1 }],
          version: 1,
        },
      ],
      version: 1,
    },
  }
}

function generateAsbestosContent(locale) {
  const content = {
    nl: {
      intro:
        'Asbest is een gevaarlijk materiaal dat tot 1994 veel werd gebruikt in de bouw. Het verwijderen ervan vereist specialistische kennis en strikte protocollen.',
      process: [
        'Asbestinventarisatie door gecertificeerd deskundige',
        'Melding bij gemeente en arbeidsinspectie',
        'Afzetting en ontsmetting van werkgebied',
        'Verwijdering door gecertificeerde professionals',
        'Veilig transport naar erkende stortplaats',
        'Eindinspectie en oplevering',
      ],
      conclusion: 'Onze medewerkers zijn allen gecertificeerd volgens de SC-530 norm.',
    },
    en: {
      intro:
        'Asbestos is a dangerous material that was widely used in construction until 1994. Its removal requires specialized knowledge and strict protocols.',
      process: [
        'Asbestos inventory by certified expert',
        'Notification to municipality and labor inspection',
        'Containment and decontamination of work area',
        'Removal by certified professionals',
        'Safe transport to certified disposal site',
        'Final inspection and delivery',
      ],
      conclusion: 'Our employees are all certified according to the SC-530 standard.',
    },
  }

  const data = content[locale] || content['en']

  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', text: data.intro, version: 1 }],
          version: 1,
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [
            {
              type: 'text',
              text: locale === 'nl' ? 'Het verwijderingsproces' : 'The removal process',
              version: 1,
            },
          ],
          version: 1,
        },
        {
          type: 'list',
          listType: 'bullet',
          children: data.process.map((step) => ({
            type: 'listitem',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: step, version: 1 }],
                version: 1,
              },
            ],
            version: 1,
          })),
          version: 1,
        },
        {
          type: 'paragraph',
          children: [{ type: 'text', text: data.conclusion, version: 1 }],
          version: 1,
        },
      ],
      version: 1,
    },
  }
}

function generateSustainableContent(locale) {
  const content = {
    nl: {
      intro:
        'Bij titaanbrekers geloven wij dat sloop en duurzaamheid hand in hand kunnen gaan. Wij streven naar 98% recycling van alle sloopmaterialen.',
      benefits: [
        'Minder belasting van het milieu',
        'Lagere afvalstortkosten',
        'Behoud van waardevolle grondstoffen',
        'Bijdrage aan circulariteit',
        'Betere CO2-prestatie',
      ],
      conclusion:
        'Door te kiezen voor titaanbrekers kiest u niet alleen voor vakmanschap, maar ook voor een duurzame toekomst.',
    },
    en: {
      intro:
        'At TitanBreakers, we believe that demolition and sustainability can go hand in hand. We strive for 98% recycling of all demolition materials.',
      benefits: [
        'Less environmental burden',
        'Lower waste disposal costs',
        'Preservation of valuable raw materials',
        'Contribution to circularity',
        'Better CO2 performance',
      ],
      conclusion:
        'By choosing TitanBreakers, you not only choose craftsmanship but also a sustainable future.',
    },
  }

  const data = content[locale] || content['en']

  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', text: data.intro, version: 1 }],
          version: 1,
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [
            {
              type: 'text',
              text:
                locale === 'nl'
                  ? 'Voordelen van duurzaam slopen'
                  : 'Benefits of sustainable demolition',
              version: 1,
            },
          ],
          version: 1,
        },
        {
          type: 'list',
          listType: 'bullet',
          children: data.benefits.map((benefit) => ({
            type: 'listitem',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: benefit, version: 1 }],
                version: 1,
              },
            ],
            version: 1,
          })),
          version: 1,
        },
        {
          type: 'paragraph',
          children: [{ type: 'text', text: data.conclusion, version: 1 }],
          version: 1,
        },
      ],
      version: 1,
    },
  }
}
