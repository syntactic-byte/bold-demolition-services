import { getPayload } from 'payload'
import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '..', '.env') })

const { default: config } = await import(path.join(__dirname, '..', 'src', 'payload.config.ts'))

// Translation content for all locales
const aboutPageContent = {
  nl: {
    hero: {
      title: 'WIE ZIJN WIJ',
      description:
        'Al meer dan 25 jaar is TitanBrekers dé specialist in professioneel sloopwerk. Met passie, vakmanschap en moderne apparatuur maken wij ruimte voor de toekomst.',
    },
    story: {
      title: 'ONS VERHAAL',
      paragraphs: [
        {
          text: 'TitanBrekers werd in 1999 opgericht door twee ervaren slopers met een duidelijke missie: professioneel sloopwerk leveren met oog voor veiligheid, kwaliteit en milieu.',
        },
        {
          text: 'Wat begon als een klein familiebedrijf is uitgegroeid tot een van de meest gerespecteerde sloopbedrijven van Nederland. Met meer dan 50 medewerkers, een modern machinepark en alle benodigde certificeringen pakken wij elk project aan - groot of klein.',
        },
        {
          text: 'Onze kracht zit in ons team. Ervaren vakmensen die trots zijn op hun werk en altijd streven naar het beste resultaat. Samen met onze opdrachtgevers vinden wij oplossingen voor de meest complexe sloopprojecten.',
        },
      ],
    },
    stats: [
      { number: '25+', label: 'Jaar Ervaring' },
      { number: '500+', label: 'Projecten' },
      { number: '50+', label: 'Medewerkers' },
      { number: '98%', label: 'Recycling' },
    ],
    values: [
      {
        icon: 'Shield',
        title: 'Veiligheid',
        description:
          'Veiligheid staat altijd voorop. Wij werken volgens VCA** en hanteren de hoogste veiligheidsnormen op al onze projecten.',
      },
      {
        icon: 'Target',
        title: 'Kwaliteit',
        description:
          'Wij leveren kwaliteitswerk, op tijd en binnen budget. Onze klanten kunnen rekenen op professionele uitvoering.',
      },
      {
        icon: 'Heart',
        title: 'Duurzaamheid',
        description:
          'Met 98% recycling van sloopafval dragen wij bij aan een circulaire economie en een schonere toekomst.',
      },
      {
        icon: 'Users',
        title: 'Vakmanschap',
        description:
          'Ons team bestaat uit ervaren vakmensen die trots zijn op hun werk en altijd streven naar het beste resultaat.',
      },
    ],
    timeline: [
      {
        year: '1999',
        title: 'Oprichting',
        description: 'TitanBrekers wordt opgericht in Rotterdam',
      },
      { year: '2005', title: 'VCA Certificering', description: 'Behalen van VCA** certificering' },
      { year: '2010', title: 'SC-530 Erkenning', description: 'Erkenning voor asbestverwijdering' },
      { year: '2015', title: 'Landelijke Dekking', description: 'Uitbreiding naar heel Nederland' },
      { year: '2020', title: '50 Medewerkers', description: 'Groei naar 50+ vakmensen' },
      {
        year: '2024',
        title: '500+ Projecten',
        description: 'Mijlpaal van 500 succesvolle projecten',
      },
    ],
  },
  en: {
    hero: {
      title: 'WHO WE ARE',
      description:
        'For more than 25 years, TitanBreakers has been the specialist in professional demolition work. With passion, craftsmanship, and modern equipment, we make room for the future.',
    },
    story: {
      title: 'OUR STORY',
      paragraphs: [
        {
          text: 'TitanBreakers was founded in 1999 by two experienced demolition workers with a clear mission: to deliver professional demolition work with attention to safety, quality, and environment.',
        },
        {
          text: 'What started as a small family business has grown into one of the most respected demolition companies in the Netherlands. With more than 50 employees, a modern fleet of equipment, and all necessary certifications, we tackle every project - big or small.',
        },
        {
          text: 'Our strength lies in our team. Experienced professionals who are proud of their work and always strive for the best results. Together with our clients, we find solutions for the most complex demolition projects.',
        },
      ],
    },
    stats: [
      { number: '25+', label: 'Years Experience' },
      { number: '500+', label: 'Projects' },
      { number: '50+', label: 'Employees' },
      { number: '98%', label: 'Recycling' },
    ],
    values: [
      {
        icon: 'Shield',
        title: 'Safety',
        description:
          'Safety always comes first. We work according to VCA** and maintain the highest safety standards on all our projects.',
      },
      {
        icon: 'Target',
        title: 'Quality',
        description:
          'We deliver quality work, on time and within budget. Our clients can count on professional execution.',
      },
      {
        icon: 'Heart',
        title: 'Sustainability',
        description:
          'With 98% recycling of demolition waste, we contribute to a circular economy and a cleaner future.',
      },
      {
        icon: 'Users',
        title: 'Craftsmanship',
        description:
          'Our team consists of experienced professionals who are proud of their work and always strive for the best results.',
      },
    ],
    timeline: [
      { year: '1999', title: 'Foundation', description: 'TitanBreakers is founded in Rotterdam' },
      { year: '2005', title: 'VCA Certification', description: 'Achieving VCA** certification' },
      {
        year: '2010',
        title: 'SC-530 Recognition',
        description: 'Recognition for asbestos removal',
      },
      {
        year: '2015',
        title: 'National Coverage',
        description: 'Expansion throughout the Netherlands',
      },
      { year: '2020', title: '50 Employees', description: 'Growth to 50+ professionals' },
      { year: '2024', title: '500+ Projects', description: 'Milestone of 500 successful projects' },
    ],
  },
  fr: {
    hero: {
      title: 'QUI SOMMES-NOUS',
      description:
        "Depuis plus de 25 ans, TitanFracteurs est le spécialiste des travaux de démolition professionnels. Avec passion, savoir-faire et équipement moderne, nous faisons de la place pour l'avenir.",
    },
    story: {
      title: 'NOTRE HISTOIRE',
      paragraphs: [
        {
          text: "TitanFracteurs a été fondé en 1999 par deux démolisseurs expérimentés avec une mission claire: fournir des travaux de démolition professionnels avec attention à la sécurité, la qualité et l'environnement.",
        },
        {
          text: "Ce qui a commencé comme une petite entreprise familiale est devenu l'une des entreprises de démolition les plus respectées aux Pays-Bas. Avec plus de 50 employés, un parc de machines moderne et toutes les certifications nécessaires, nous abordons chaque projet - grand ou petit.",
        },
        {
          text: 'Notre force réside dans notre équipe. Des professionnels expérimentés qui sont fiers de leur travail et visent toujours les meilleurs résultats. Ensemble avec nos clients, nous trouvons des solutions pour les projets de démolition les plus complexes.',
        },
      ],
    },
    stats: [
      { number: '25+', label: "Années d'Expérience" },
      { number: '500+', label: 'Projets' },
      { number: '50+', label: 'Employés' },
      { number: '98%', label: 'Recyclage' },
    ],
    values: [
      {
        icon: 'Shield',
        title: 'Sécurité',
        description:
          'La sécurité est toujours la priorité. Nous travaillons selon VCA** et maintenons les normes de sécurité les plus élevées sur tous nos projets.',
      },
      {
        icon: 'Target',
        title: 'Qualité',
        description:
          'Nous livrons des travaux de qualité, dans les délais et dans le budget. Nos clients peuvent compter sur une exécution professionnelle.',
      },
      {
        icon: 'Heart',
        title: 'Durabilité',
        description:
          'Avec 98% de recyclage des déchets de démolition, nous contribuons à une économie circulaire et à un avenir plus propre.',
      },
      {
        icon: 'Users',
        title: 'Savoir-faire',
        description:
          'Notre équipe est composée de professionnels expérimentés qui sont fiers de leur travail et visent toujours les meilleurs résultats.',
      },
    ],
    timeline: [
      { year: '1999', title: 'Fondation', description: 'TitanFracteurs est fondé à Rotterdam' },
      {
        year: '2005',
        title: 'Certification VCA',
        description: 'Obtention de la certification VCA**',
      },
      {
        year: '2010',
        title: 'Reconnaissance SC-530',
        description: 'Reconnaissance pour le désamiantage',
      },
      {
        year: '2015',
        title: 'Couverture Nationale',
        description: "Extension à l'ensemble des Pays-Bas",
      },
      { year: '2020', title: '50 Employés', description: 'Croissance à plus de 50 professionnels' },
      { year: '2024', title: '500+ Projets', description: 'Jalon de 500 projets réussis' },
    ],
  },
}

// Contact page content
const contactPageContent = {
  nl: {
    hero: {
      title: 'NEEM CONTACT OP',
      description:
        'Heeft u een sloop- of demontageproject? Neem vrijblijvend contact met ons op voor een offerte of advies. Wij reageren binnen 24 uur.',
    },
    formSettings: {
      title: 'STUUR EEN BERICHT',
      subjects: [
        { value: 'offerte', label: 'Offerte aanvragen' },
        { value: 'informatie', label: 'Informatie aanvragen' },
        { value: 'samenwerking', label: 'Samenwerking' },
        { value: 'anders', label: 'Anders' },
      ],
    },
  },
  en: {
    hero: {
      title: 'GET IN TOUCH',
      description:
        'Do you have a demolition or dismantling project? Feel free to contact us for a quote or advice. We respond within 24 hours.',
    },
    formSettings: {
      title: 'SEND A MESSAGE',
      subjects: [
        { value: 'quote', label: 'Request Quote' },
        { value: 'info', label: 'Request Information' },
        { value: 'collaboration', label: 'Partnership' },
        { value: 'other', label: 'Other' },
      ],
    },
  },
  fr: {
    hero: {
      title: 'CONTACTEZ-NOUS',
      description:
        "Vous avez un projet de démolition ou de démontage? N'hésitez pas à nous contacter pour un devis ou des conseils. Nous répondons dans les 24 heures.",
    },
    formSettings: {
      title: 'ENVOYER UN MESSAGE',
      subjects: [
        { value: 'devis', label: 'Demande de devis' },
        { value: 'info', label: "Demande d'information" },
        { value: 'partenariat', label: 'Partenariat' },
        { value: 'autre', label: 'Autre' },
      ],
    },
  },
  de: {
    hero: {
      title: 'KONTAKT',
      description:
        'Haben Sie ein Abbruch- oder Demontageprojekt? Kontaktieren Sie uns für ein Angebot oder eine Beratung. Wir antworten innerhalb von 24 Stunden.',
    },
    formSettings: {
      title: 'NACHRICHT SENDEN',
      subjects: [
        { value: 'angebot', label: 'Angebotsanfrage' },
        { value: 'info', label: 'Information' },
        { value: 'zusammenarbeit', label: 'Zusammenarbeit' },
        { value: 'sonstiges', label: 'Sonstiges' },
      ],
    },
  },
  it: {
    hero: {
      title: 'CONTATTACI',
      description:
        'Hai un progetto di demolizione o smantellamento? Non esitare a contattarci per un preventivo o una consulenza. Rispondiamo entro 24 ore.',
    },
    formSettings: {
      title: 'INVIA MESSAGGIO',
      subjects: [
        { value: 'preventivo', label: 'Richiesta Preventivo' },
        { value: 'info', label: 'Richiesta Informazioni' },
        { value: 'collaborazione', label: 'Collaborazione' },
        { value: 'altro', label: 'Altro' },
      ],
    },
  },
  es: {
    hero: {
      title: 'CONTACTO',
      description:
        '¿Tienes un proyecto de demolición o desmantelamiento? No dudes en contactarnos para un presupuesto o asesoramiento. Respondemos en 24 horas.',
    },
    formSettings: {
      title: 'ENVIAR MENSAJE',
      subjects: [
        { value: 'presupuesto', label: 'Solicitar Presupuesto' },
        { value: 'info', label: 'Solicitar Información' },
        { value: 'colaboracion', label: 'Colaboración' },
        { value: 'otro', label: 'Otro' },
      ],
    },
  },
  sv: {
    hero: {
      title: 'KONTAKT',
      description:
        'Har du ett rivnings- eller demonteringsprojekt? Kontakta oss för en offert eller rådgivning. Vi svarar inom 24 timmar.',
    },
    formSettings: {
      title: 'SKICKA MEDDELANDE',
      subjects: [
        { value: 'offert', label: 'Begära Offert' },
        { value: 'info', label: 'Begära Information' },
        { value: 'samarbete', label: 'Samarbete' },
        { value: 'annat', label: 'Annat' },
      ],
    },
  },
  fi: {
    hero: {
      title: 'YHTEYDENOTTO',
      description:
        'Onko sinulla purku- tai purkamisprojekti? Ota yhteyttä tarjousta tai neuvontaa varten. Vastaamme 24 tunnin kuluessa.',
    },
    formSettings: {
      title: 'LÄHETÄ VIESTI',
      subjects: [
        { value: 'tarjous', label: 'Pyydä Tarjous' },
        { value: 'info', label: 'Pyydä Tietoja' },
        { value: 'yhteistyo', label: 'Yhteistyö' },
        { value: 'muu', label: 'Muu' },
      ],
    },
  },
  pl: {
    hero: {
      title: 'KONTAKT',
      description:
        'Masz projekt rozbiórkowy lub demontażowy? Skontaktuj się z nami w sprawie wyceny lub porady. Odpowiadamy w ciągu 24 godzin.',
    },
    formSettings: {
      title: 'WYŚLIJ WIADOMOŚĆ',
      subjects: [
        { value: 'wycena', label: 'Zapytaj o Wycenę' },
        { value: 'info', label: 'Zapytaj o Informacje' },
        { value: 'wspolpraca', label: 'Współpraca' },
        { value: 'inne', label: 'Inne' },
      ],
    },
  },
  ar: {
    hero: {
      title: 'اتصل بنا',
      description:
        'هل لديك مشروع هدم أو تفكيك؟ لا تتردد في الاتصال بنا للحصول على عرض أسعار أو استشارة. نرد في غضون 24 ساعة.',
    },
    formSettings: {
      title: 'إرسال رسالة',
      subjects: [
        { value: 'quote', label: 'طلب عرض سعر' },
        { value: 'info', label: 'طلب معلومات' },
        { value: 'collaboration', label: 'شراكة' },
        { value: 'other', label: 'أخرى' },
      ],
    },
  },
  zh: {
    hero: {
      title: '联系我们',
      description: '您有拆除或拆卸项目吗？请随时联系我们获取报价或建议。我们在24小时内回复。',
    },
    formSettings: {
      title: '发送消息',
      subjects: [
        { value: 'quote', label: '请求报价' },
        { value: 'info', label: '请求信息' },
        { value: 'collaboration', label: '合作' },
        { value: 'other', label: '其他' },
      ],
    },
  },
  ja: {
    hero: {
      title: 'お問い合わせ',
      description:
        '解体または撤去のプロジェクトはありますか？見積りやご相談はお気軽にお問い合わせください。24時間以内にご返信いたします。',
    },
    formSettings: {
      title: 'メッセージを送信',
      subjects: [
        { value: 'quote', label: '見積り依頼' },
        { value: 'info', label: '情報請求' },
        { value: 'collaboration', label: 'パートナーシップ' },
        { value: 'other', label: 'その他' },
      ],
    },
  },
  pt: {
    hero: {
      title: 'CONTATO',
      description:
        'Tem um projeto de demolição ou desmantelamento? Entre em contato para um orçamento ou consultoria. Respondemos em 24 horas.',
    },
    formSettings: {
      title: 'ENVIAR MENSAGEM',
      subjects: [
        { value: 'orcamento', label: 'Solicitar Orçamento' },
        { value: 'info', label: 'Solicitar Informações' },
        { value: 'colaboracao', label: 'Colaboração' },
        { value: 'outro', label: 'Outro' },
      ],
    },
  },
  tr: {
    hero: {
      title: 'İLETİŞİM',
      description:
        'Yıkım veya söküm projeniz mi var? Fiyat teklifi veya danışmanlık için bizimle iletişime geçin. 24 saat içinde yanıt veriyoruz.',
    },
    formSettings: {
      title: 'MESAJ GÖNDER',
      subjects: [
        { value: 'teklif', label: 'Fiyat Teklifi İste' },
        { value: 'info', label: 'Bilgi İste' },
        { value: 'isbirligi', label: 'İşbirliği' },
        { value: 'diger', label: 'Diğer' },
      ],
    },
  },
  ru: {
    hero: {
      title: 'КОНТАКТЫ',
      description:
        'У вас есть проект сноса или демонтажа? Свяжитесь с нами для получения расчета или консультации. Мы отвечаем в течение 24 часов.',
    },
    formSettings: {
      title: 'ОТПРАВИТЬ СООБЩЕНИЕ',
      subjects: [
        { value: 'quote', label: 'Запросить Расчет' },
        { value: 'info', label: 'Запросить Информацию' },
        { value: 'collaboration', label: 'Сотрудничество' },
        { value: 'other', label: 'Другое' },
      ],
    },
  },
}

// Home page content (about preview section)
// Note: highlights are NOT seeded here because arrays don't localize well in Payload
// Instead, they come from translation strings in the AboutPreview component
const homePageContent = {
  nl: {
    aboutPreview: {
      title: 'OVER TITANBREKERS',
      description:
        'Met meer dan 25 jaar ervaring is TitanBrekers uitgegroeid tot een van de meest gerespecteerde sloopbedrijven van Nederland. Wij combineren vakmanschap met moderne technieken voor elk type sloop- en demontageproject.',
    },
  },
  en: {
    aboutPreview: {
      title: 'ABOUT TITANBREAKERS',
      description:
        'With more than 25 years of experience, TitanBreakers has grown into one of the most respected demolition companies in the Netherlands. We combine craftsmanship with modern techniques for every type of demolition and dismantling project.',
    },
  },
  fr: {
    aboutPreview: {
      title: 'À PROPOS DE TITANFRACTEURS',
      description:
        "Avec plus de 25 ans d'expérience, TitanFracteurs est devenu l'une des entreprises de démolition les plus respectées des Pays-Bas. Nous combinons le savoir-faire avec des techniques modernes pour chaque type de projet de démolition et de démontage.",
    },
  },
  de: {
    aboutPreview: {
      title: 'ÜBER TITANBRECHER',
      description:
        'Mit mehr als 25 Jahren Erfahrung ist TitanBrecher zu einem der angesehensten Abbruchunternehmen der Niederlande gewachsen. Wir kombinieren Handwerkskunst mit modernen Techniken für jeden Abbruch- und Demontagetype.',
    },
  },
  it: {
    aboutPreview: {
      title: 'CHI SIAMO - TITANDEMOLITORI',
      description:
        "Con oltre 25 anni di esperienza, TitanDemolitores è cresciuta fino a diventare una delle imprese di demolizione più rispettate dei Paesi Bassi. Combiniamo l'artigianato con tecniche moderne per ogni tipo di progetto di demolizione e smantellamento.",
    },
  },
  es: {
    aboutPreview: {
      title: 'SOBRE TITANDEMOLEDORES',
      description:
        'Con más de 25 años de experiencia, TitanDemoledores ha crecido hasta convertirse en una de las empresas de demolición más respetadas de los Países Bajos. Combinamos artesanía con técnicas modernas para todo tipo de proyecto de demolición y desmantelamiento.',
    },
  },
  sv: {
    aboutPreview: {
      title: 'OM TITANBRYTARE',
      description:
        'Med mer än 25 års erfarenhet har TitanBrytare vuxit till ett av de mest respekterade rivningsföretagen i Nederländerna. Vi kombinerar hantverk med moderna tekniker för alla typer av rivnings- och demonteringsprojekt.',
    },
  },
  fi: {
    aboutPreview: {
      title: 'TIETOA TITAANIMURTAJISTA',
      description:
        'Yli 25 vuoden kokemuksella TitaaniMurtajat on kasvanut yhdeksi Alankomaiden arvostetuimmista purkuyrityksistä. Yhdistämme käsityötaitoa moderneilla tekniikoilla jokaiseen purku- ja demontaasioprojektiin.',
    },
  },
  pl: {
    aboutPreview: {
      title: 'O TITANBURZYCZELACH',
      description:
        'Z ponad 25-letnim doświadczeniem TitanBurzyciele rozrosło się do jednej z najbardziej szanowanych firm rozbiórkowych w Holandii. Łączymy rzemiosło z nowoczesnymi technikami w każdym projekcie rozbiórkowym i demontażowym.',
    },
  },
  ar: {
    aboutPreview: {
      title: 'عن تيتان بريكرز',
      description:
        'مع أكثر من 25 عامًا من الخبرة، نمت تيتان بريكرز لتصبح واحدة من أكثر شركات الهدم احترامًا في هولندا. نحن نجمع بين الحرفية والتقنيات الحديثة لكل نوع من مشاريع الهدم والتفكيك.',
    },
  },
  zh: {
    aboutPreview: {
      title: '关于泰坦拆除',
      description:
        '凭借25年以上的经验，泰坦拆除已发展成为荷兰最受尊敬的拆除公司之一。我们将工艺与现代技术相结合，用于各种类型的拆除和拆卸项目。',
    },
  },
  ja: {
    aboutPreview: {
      title: 'タイタンブレーカーズについて',
      description:
        '25年以上の経験を持つタイタンブレーカーズは、オランダで最も尊敬される解体会社の一つに成長しました。私たちは、あらゆるタイプの解体・撤去プロジェクトで職人技と最新技術を組み合わせています。',
    },
  },
  pt: {
    aboutPreview: {
      title: 'SOBRE A TITANDEMOLIDORES',
      description:
        'Com mais de 25 anos de experiência, a TitanDemolidores cresceu até se tornar uma das empresas de demolição mais respeitadas dos Países Baixos. Combinamos artesanato com técnicas modernas para todo o tipo de projeto de demolição e desmantelamento.',
    },
  },
  tr: {
    aboutPreview: {
      title: 'TITANYIKICILAR HAKKINDA',
      description:
        '25 yılı aşkın deneyimle TitanYıkıcılar, Hollanda nın en saygın yıkım şirketlerinden biri haline geldi. Her türlü yıkım ve söküm projesi için zanaatı modern tekniklerle birleştiriyoruz.',
    },
  },
  ru: {
    aboutPreview: {
      title: 'О ТИТАНРАЗРУШИТЕЛЯХ',
      description:
        'Имея более чем 25-летний опыт, ТитанРазрушители выросли в одну из самых уважаемых демонтажных компаний Нидерландов. Мы сочетаем мастерство с современными технологиями для проектов любого типа.',
    },
  },
}

async function seedCMSContent() {
  console.log('🌱 Seeding CMS globals with translated content...')

  const payload = await getPayload({ config })
  const locales = [
    'nl',
    'en',
    'fr',
    'de',
    'it',
    'es',
    'sv',
    'fi',
    'pl',
    'ar',
    'zh',
    'ja',
    'pt',
    'tr',
    'ru',
  ] as const

  try {
    // Seed About Page for each locale
    for (const locale of locales) {
      console.log(`\n📝 Seeding About Page for ${locale}...`)
      const content = (aboutPageContent as any)[locale]

      if (content) {
        await payload.updateGlobal({
          slug: 'about-page',
          locale: locale as any,
          data: content,
        })
        console.log(`   ✅ About Page seeded for ${locale}`)
      }
    }

    // Seed Contact Page for each locale
    for (const locale of locales) {
      console.log(`\n📝 Seeding Contact Page for ${locale}...`)
      const content = (contactPageContent as any)[locale]

      if (content) {
        await payload.updateGlobal({
          slug: 'contact-page',
          locale: locale as any,
          data: content,
        })
        console.log(`   ✅ Contact Page seeded for ${locale}`)
      }
    }

    // Seed Home Page for each locale
    for (const locale of locales) {
      console.log(`\n📝 Seeding Home Page for ${locale}...`)
      const content = (homePageContent as any)[locale]

      if (content) {
        await payload.updateGlobal({
          slug: 'home-page',
          locale: locale as any,
          data: content,
        })
        console.log(`   ✅ Home Page seeded for ${locale}`)
      }
    }

    console.log('\n✅ All CMS globals seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding CMS content:', error)
    process.exit(1)
  }
}

seedCMSContent()
