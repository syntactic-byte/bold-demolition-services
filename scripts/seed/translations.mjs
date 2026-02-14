// All supported locales
export const locales = [
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
]

// Helper to create translations for all locales from a base object
export function createTranslations(base) {
  const translations = {}
  locales.forEach((locale) => {
    translations[locale] = base[locale] || base['en'] || base['nl']
  })
  return translations
}

// Services translations
export const serviceTranslations = {
  manual: {
    nl: {
      title: 'Handmatige Sloop',
      description:
        'Voorzichtige en nauwkeurige handmatige sloopwerkzaamheden voor binnenprojecten waar machines niet kunnen komen.',
    },
    en: {
      title: 'Manual Demolition',
      description:
        'Careful and precise manual demolition work for interior projects where machinery cannot access.',
    },
    fr: {
      title: 'Démolition Manuelle',
      description:
        'Travaux de démolition manuelle soignés et précis pour projets intérieurs où les machines ne peuvent pas accéder.',
    },
    de: {
      title: 'Manueller Abriss',
      description:
        'Sorgfältige und präzise manuelle Abbrucharbeiten für Innenprojekte, wo Maschinen nicht hinkommen.',
    },
    it: {
      title: 'Demolizione Manuale',
      description:
        'Lavori di demolizione manuale accurati e precisi per progetti interni dove le macchine non possono accedere.',
    },
    es: {
      title: 'Demolición Manual',
      description:
        'Trabajos de demolición manual cuidadosos y precisos para proyectos interiores donde la maquinaria no puede acceder.',
    },
    sv: {
      title: 'Manuell Rivning',
      description:
        'Försiktiga och noggranna manuella rivningsarbeten för inomhusprojekt där maskiner inte kan komma åt.',
    },
    fi: {
      title: 'Käsityöpurkaminen',
      description:
        'Huolelliset ja tarkat käsityöpurkaminen sisäprojekteihin, joihin koneet eivät pääse.',
    },
    pl: {
      title: 'Rozbiórka Ręczna',
      description:
        'Ostrożne i precyzyjne prace rozbiórkowe ręczne dla projektów wewnętrznych, gdzie maszyny nie mają dostępu.',
    },
    ar: {
      title: 'الهدم اليدوي',
      description: 'أعمال هدم يدوية دقيقة وحذرة للمشاريع الداخلية حيث لا تستطيع الآلات الوصول.',
    },
    zh: {
      title: '人工拆除',
      description: '在室内项目中进行谨慎精确的人工拆除工作，机械无法进入的地方。',
    },
    ja: {
      title: '手動解体',
      description: '機械がアクセスできない室内プロジェクトのための慎重かつ正確な手動解体作業。',
    },
    pt: {
      title: 'Demolição Manual',
      description:
        'Trabalhos de demolição manual cuidadosos e precisos para projetos interiores onde máquinas não podem acessar.',
    },
    tr: {
      title: 'Manuel Yıkım',
      description:
        'Makinelerin erişemediği iç mekan projeleri için dikkatli ve hassas manuel yıkım çalışmaları.',
    },
    ru: {
      title: 'Ручной Демонтаж',
      description:
        'Осторожные и точные ручные демонтажные работы для внутренних проектов, куда нет доступа технике.',
    },
  },
  selective: {
    nl: {
      title: 'Selectieve Sloop',
      description:
        'Selectief slopen met oog voor hergebruik van materialen en behoud van bestaande structuren.',
    },
    en: {
      title: 'Selective Demolition',
      description:
        'Selective demolition with attention to material reuse and preservation of existing structures.',
    },
    fr: {
      title: 'Démolition Sélective',
      description:
        'Démolition sélective en accordant attention au réemploi des matériaux et à la préservation des structures existantes.',
    },
    de: {
      title: 'Selektiver Abriss',
      description:
        'Selektiver Abriss mit Augenmerk auf Wiederverwendung von Materialien und Erhaltung bestehender Strukturen.',
    },
    it: {
      title: 'Demolizione Selettiva',
      description:
        'Demolizione selettiva con attenzione al riutilizzo dei materiali e alla preservazione delle strutture esistenti.',
    },
    es: {
      title: 'Demolición Selectiva',
      description:
        'Demolición selectiva con atención a la reutilización de materiales y preservación de estructuras existentes.',
    },
    sv: {
      title: 'Selektiv Rivning',
      description:
        'Selektiv rivning med fokus på återanvändning av material och bevarande av befintliga strukturer.',
    },
    fi: {
      title: 'Valikoiva Purkaminen',
      description:
        'Valikoiva purkaminen huomioiden materiaalien uusiokäyttö ja olemassa olevien rakenteiden säilyttäminen.',
    },
    pl: {
      title: 'Rozbiórka Selektywna',
      description:
        'Rozbiórka selektywna z uwzględnieniem ponownego wykorzystania materiałów i zachowania istniejących struktur.',
    },
    ar: {
      title: 'الهدم الانتقائي',
      description:
        'الهدم الانتقائي مع الاهتمام بإعادة استخدام المواد والحفاظ على الهياكل الموجودة.',
    },
    zh: { title: '选择性拆除', description: '选择性拆除，注重材料再利用和现有结构的保护。' },
    ja: {
      title: '選択的解体',
      description: '材料の再利用と既存構造の保護に注意を払った選択的解体。',
    },
    pt: {
      title: 'Demolição Seletiva',
      description:
        'Demolição seletiva com atenção à reutilização de materiais e preservação de estruturas existentes.',
    },
    tr: {
      title: 'Seçici Yıkım',
      description:
        'Materyallerin yeniden kullanımına ve mevcut yapıların korunmasına dikkat eden seçici yıkım.',
    },
    ru: {
      title: 'Селективный Демонтаж',
      description:
        'Селективный демонтаж с вниманием к повторному использованию материалов и сохранению существующих конструкций.',
    },
  },
  asbestos: {
    nl: {
      title: 'Asbest Sanering',
      description:
        'Veilige en gecertificeerde asbestverwijdering volgens SC-530 normen door gespecialiseerde professionals.',
    },
    en: {
      title: 'Asbestos Removal',
      description:
        'Safe and certified asbestos removal according to SC-530 standards by specialized professionals.',
    },
    fr: {
      title: 'Désamiantage',
      description:
        "Retrait de l'amiante sûr et certifié selon les normes SC-530 par des professionnels spécialisés.",
    },
    de: {
      title: 'Asbestsanierung',
      description:
        'Sichere und zertifizierte Asbestentfernung nach SC-530-Normen durch spezialisierte Fachkräfte.',
    },
    it: {
      title: 'Rimozione Amianto',
      description:
        "Rimozione dell'amianto sicura e certificata secondo gli standard SC-530 da professionisti specializzati.",
    },
    es: {
      title: 'Retiro de Amianto',
      description:
        'Retiro de amianto seguro y certificado según estándares SC-530 por profesionales especializados.',
    },
    sv: {
      title: 'Asbestsanering',
      description:
        'Säker och certifierad asbestsanering enligt SC-530-standarder av specialiserade professionella.',
    },
    fi: {
      title: 'Asbestin Poisto',
      description:
        'Turvallinen ja sertifioitu asbestin poisto SC-530-standardien mukaisesti erikoistuneiden ammattilaisten toimesta.',
    },
    pl: {
      title: 'Usuwanie Azbestu',
      description:
        'Bezpieczne i certyfikowane usuwanie azbestu zgodnie z normami SC-530 przez wyspecjalizowanych profesjonalistów.',
    },
    ar: {
      title: 'إزالة الأسبستوس',
      description: 'إزالة الأسبستوس الآمنة والمعتمدة وفقًا لمعايير SC-530 من قبل متخصصين محترفين.',
    },
    zh: { title: '石棉清除', description: '由专业人员进行符合SC-530标准的安全认证石棉清除。' },
    ja: {
      title: 'アスベスト除去',
      description: 'SC-530規格に準拠した専門家による安全で認定されたアスベスト除去。',
    },
    pt: {
      title: 'Remoção de Amianto',
      description:
        'Remoção de amianto segura e certificada de acordo com os padrões SC-530 por profissionais especializados.',
    },
    tr: {
      title: 'Asbet Temizleme',
      description:
        'Uzman profesyoneller tarafından SC-530 standartlarına göre güvenli ve sertifikalı asbet temizleme.',
    },
    ru: {
      title: 'Удаление Асбеста',
      description:
        'Безопасное и сертифицированное удаление асбеста по стандартам SC-530 специализированными профессионалами.',
    },
  },
  clearing: {
    nl: {
      title: 'Woning Ontruiming',
      description:
        'Complete woningontruiming en opruiming van verontreinigde panden met zorg voor milieu en veiligheid.',
    },
    en: {
      title: 'Property Clearing',
      description:
        'Complete property clearing and cleanup of contaminated buildings with care for environment and safety.',
    },
    fr: {
      title: 'Déblayage',
      description:
        "Déblayage complet et nettoyage de bâtiments contaminés avec souci de l'environnement et de la sécurité.",
    },
    de: {
      title: 'Entrümpelung',
      description:
        'Komplette Entrümpelung und Reinigung kontaminierter Gebäude mit Sorge für Umwelt und Sicherheit.',
    },
    it: {
      title: 'Sgombero',
      description:
        'Sgombero completo e pulizia di edifici contaminati con attenzione per ambiente e sicurezza.',
    },
    es: {
      title: 'Despeje',
      description:
        'Despeje completo y limpieza de edificios contaminados con cuidado por el medio ambiente y la seguridad.',
    },
    sv: {
      title: 'Rensning',
      description:
        'Fullständig rensning och städning av förorenade byggnader med omsorg om miljö och säkerhet.',
    },
    fi: {
      title: 'Tyhjennys',
      description:
        'Täydellinen tyhjennys ja saastuneiden rakennusten puhdistus huolehtien ympäristöstä ja turvallisuudesta.',
    },
    pl: {
      title: 'Oczyszczanie',
      description:
        'Pełne oczyszczanie i czyszczenie zanieczyszczonych budynków z dbałością o środowisko i bezpieczeństwo.',
    },
    ar: {
      title: 'تنظيف العقارات',
      description: 'تنظيف العقارات بالكامل وتنظيف المباني الملوثة مع الاهتمام بالبيئة والسلامة.',
    },
    zh: { title: '物业清理', description: '全面清理物业和清洁受污染建筑，注重环境和安全。' },
    ja: {
      title: '物件片付け',
      description: '環境と安全に配慮した物件の完全な片付けと汚染された建物の清掃。',
    },
    pt: {
      title: 'Limpeza',
      description:
        'Limpeza completa de propriedades e limpeza de edifícios contaminados com cuidado pelo ambiente e segurança.',
    },
    tr: {
      title: 'Temizlik',
      description:
        'Çevre ve güvenliğe özen göstererek mülklerin tam temizliği ve kirli binaların temizlenmesi.',
    },
    ru: {
      title: 'Очистка Объектов',
      description:
        'Полная очистка объектов и уборка загрязненных зданий с заботой об окружающей среде и безопасности.',
    },
  },
  kitchen: {
    nl: {
      title: 'Keuken en Badkamer Sloop',
      description:
        'Professionele keuken- en badkamersloop voor renovatieprojecten met minimale overlast.',
    },
    en: {
      title: 'Kitchen & Bathroom Demolition',
      description:
        'Professional kitchen and bathroom demolition for renovation projects with minimal disruption.',
    },
    fr: {
      title: 'Démolition Cuisine & Salle de Bain',
      description:
        'Démolition professionnelle de cuisine et salle de bain pour projets de rénovation avec perturbation minimale.',
    },
    de: {
      title: 'Küchen- & Badezimmerabbriss',
      description:
        'Professioneller Küchen- und Badezimmerabbriss für Renovierungsprojekte mit minimaler Störung.',
    },
    it: {
      title: 'Demolizione Cucina e Bagno',
      description:
        'Demolizione professionale di cucina e bagno per progetti di ristrutturazione con minimo disagio.',
    },
    es: {
      title: 'Demolición Cocina y Baño',
      description:
        'Demolición profesional de cocina y baño para proyectos de renovación con mínima interrupción.',
    },
    sv: {
      title: 'Kök & Badrumsrivning',
      description:
        'Professionell kök- och badrumsrivning för renoveringsprojekt med minimal störning.',
    },
    fi: {
      title: 'Keittiö- ja Kylpyhuonepurku',
      description:
        'Ammattimainen keittiö- ja kylpyhuonepurku remonttiprojekteihin minimaalisella häiriöllä.',
    },
    pl: {
      title: 'Rozbiórka Kuchni i Łazienki',
      description:
        'Profesjonalna rozbiórka kuchni i łazienki dla projektów renowacyjnych z minimalnym zakłóceniem.',
    },
    ar: {
      title: 'هدم المطبخ والحمام',
      description: 'هدم المطبخ والحمام الاحترافي لمشاريع التجديد مع الحد الأدنى من الاضطرابات.',
    },
    zh: { title: '厨房和浴室拆除', description: '专业的厨房和浴室拆除，用于翻新项目，干扰最小。' },
    ja: {
      title: 'キッチン・バスルーム解体',
      description:
        '最小限の混乱でリノベーションプロジェクトのためのプロのキッチンとバスルーム解体。',
    },
    pt: {
      title: 'Demolição Cozinha e Banheiro',
      description:
        'Demolição profissional de cozinha e banheiro para projetos de renovação com mínima interrupção.',
    },
    tr: {
      title: 'Mutfak ve Banyo Yıkımı',
      description:
        'Minimum aksaklıkla renovasyon projeleri için profesyonel mutfak ve banyo yıkımı.',
    },
    ru: {
      title: 'Демонтаж Кухни и Ванной',
      description:
        'Профессиональный демонтаж кухни и ванной для проектов ремонта с минимальными неудобствами.',
    },
  },
  interior: {
    nl: {
      title: 'Interieur Sloop',
      description:
        'Strip-out werkzaamheden en selectieve sloop van interieurs voor renovatie en herinrichting.',
    },
    en: {
      title: 'Interior Demolition',
      description:
        'Strip-out work and selective demolition of interiors for renovation and redesign.',
    },
    fr: {
      title: 'Démolition Intérieure',
      description:
        "Travaux de démolition et démolition sélective d'intérieurs pour rénovation et réaménagement.",
    },
    de: {
      title: 'Innenabbriss',
      description: 'Entkernungsarbeiten und selektiver Innenabbriss für Renovierung und Redesign.',
    },
    it: {
      title: 'Demolizione Interna',
      description:
        'Lavori di strip-out e demolizione selettiva di interni per ristrutturazione e riprogettazione.',
    },
    es: {
      title: 'Demolición Interior',
      description:
        'Trabajos de strip-out y demolición selectiva de interiores para renovación y rediseño.',
    },
    sv: {
      title: 'Invändig Rivning',
      description:
        'Strip-out arbete och selektiv rivning av interiörer för renovering och omdesign.',
    },
    fi: {
      title: 'Sisäpurkaminen',
      description:
        'Tyhjennystyöt ja valikoiva sisäpurkaminen remonttia ja uudelleensuunnittelua varten.',
    },
    pl: {
      title: 'Rozbiórka Wewnętrzna',
      description:
        'Prace rozbiórkowe i selektywna rozbiórka wnętrz do renowacji i przeprojektowania.',
    },
    ar: {
      title: 'الهدم الداخلي',
      description: 'أعمال إفراغ وهدم انتقائي للداخليات للتجديد وإعادة التصميم.',
    },
    zh: { title: '室内拆除', description: '用于翻新和重新设计的室内清空工作和选择性拆除。' },
    ja: {
      title: '内部解体',
      description: 'リノベーションと再設計のためのストリップアウト作業と選択的な内部解体。',
    },
    pt: {
      title: 'Demolição Interior',
      description:
        'Trabalhos de esvaziamento e demolição seletiva de interiores para renovação e redesenho.',
    },
    tr: {
      title: 'İç Yıkım',
      description:
        'Yenileme ve yeniden tasarım için şerit dışı çalışmalar ve seçici iç mekan yıkımı.',
    },
    ru: {
      title: 'Внутренний Демонтаж',
      description:
        'Работы по демонтажу и селективный демонтаж интерьеров для ремонта и перепланировки.',
    },
  },
}

// Projects translations
export const projectTranslations = {
  project1: {
    nl: {
      title: 'Winkelruimte Stripping Rotterdam',
      description:
        'Complete strip-out van een winkelruimte van 500m² in het centrum van Rotterdam voor herontwikkeling tot appartementencomplex.',
    },
    en: {
      title: 'Retail Space Stripping Rotterdam',
      description:
        'Complete strip-out of a 500m² retail space in downtown Rotterdam for redevelopment into an apartment complex.',
    },
    fr: {
      title: 'Déblayage Local Commercial Rotterdam',
      description:
        "Déblayage complet d'un espace commercial de 500m² au centre de Rotterdam pour réaménagement en complexe d'appartements.",
    },
    de: {
      title: 'Geschäftsraum-Entkernung Rotterdam',
      description:
        'Komplette Entkernung eines 500m² Geschäftsraums in der Innenstadt von Rotterdam für Umbau zu einem Wohnkomplex.',
    },
    it: {
      title: 'Sgombero Spazio Commerciale Rotterdam',
      description:
        'Sgombero completo di uno spazio commerciale di 500m² nel centro di Rotterdam per ristrutturazione in complesso residenziale.',
    },
    es: {
      title: 'Despeje Local Comercial Róterdam',
      description:
        'Despeje completo de un local comercial de 500m² en el centro de Róterdam para reurbanización en complejo de apartamentos.',
    },
    sv: {
      title: 'Butiksutrymme Rivning Rotterdam',
      description:
        'Fullständig rivning av ett 500m² butiksutrymme i centrala Rotterdam för ombyggnad till lägenhetskomplex.',
    },
    fi: {
      title: 'Liiketilan Purku Rotterdam',
      description:
        '500m² liiketilan täydellinen purku Rotterdamissa keskustassa asuntokompleksiksi muuttamista varten.',
    },
    pl: {
      title: 'Opróżnienie Lokalu Handlowego Rotterdam',
      description:
        'Pełne opróżnienie 500m² lokalu handlowego w centrum Rotterdamu do przebudowy na kompleks mieszkaniowy.',
    },
    ar: {
      title: 'تفريغ مساحة تجارية روتردام',
      description:
        'تفريغ كامل لمساحة تجارية 500 متر مربع في وسط روتردام لإعادة التطوير إلى مجمع شقق.',
    },
    zh: {
      title: '鹿特丹零售空间清理',
      description: '鹿特丹市中心500平方米零售空间的全面清理，重新开发为公寓综合体。',
    },
    ja: {
      title: 'ロッテルダム小売スペース片付け',
      description:
        'ロッテルダム中心部の500m²小売スペースをマンション複合施設に再開発するための完全な片付け。',
    },
    pt: {
      title: 'Limpeza Espaço Comercial Roterdã',
      description:
        'Limpeza completa de um espaço comercial de 500m² no centro de Roterdã para reurbanização em complexo de apartamentos.',
    },
    tr: {
      title: 'Rotterdam Perakende Alanı Temizliği',
      description:
        'Rotterdam şehir merkezinde 500m² perakende alanın daire kompleksine yeniden geliştirilmesi için tam temizliği.',
    },
    ru: {
      title: 'Очистка Торгового Помещения Роттердам',
      description:
        'Полная очистка 500м² торгового помещения в центре Роттердама для переоборудования в жилой комплекс.',
    },
  },
  project2: {
    nl: {
      title: 'Appartement Renovatie Den Haag',
      description:
        'Volledige renovatie van een appartement in Den Haag inclusief sloop van keuken, badkamer en tussenwanden.',
    },
    en: {
      title: 'Apartment Renovation The Hague',
      description:
        'Complete renovation of an apartment in The Hague including demolition of kitchen, bathroom, and partition walls.',
    },
    fr: {
      title: 'Rénovation Appartement La Haye',
      description:
        "Rénovation complète d'un appartement à La Haye incluant la démolition de la cuisine, salle de bain et cloisons.",
    },
    de: {
      title: 'Wohnungsrenovierung Den Haag',
      description:
        'Komplette Renovierung einer Wohnung in Den Haag einschließlich Abriss von Küche, Bad und Trennwänden.',
    },
    it: {
      title: "Ristrutturazione Appartamento L'Aia",
      description:
        "Ristrutturazione completa di un appartamento all'Aia inclusa demolizione di cucina, bagno e pareti divisorie.",
    },
    es: {
      title: 'Renovación Apartamento La Haya',
      description:
        'Renovación completa de un apartamento en La Haya incluyendo demolición de cocina, baño y tabiques.',
    },
    sv: {
      title: 'Lägenhetsrenovering Haag',
      description:
        'Komplett renovering av en lägenhet i Haag inklusive rivning av kök, badrum och skiljeväggar.',
    },
    fi: {
      title: 'Huoneistoremontti Haag',
      description:
        'Täydellinen huoneistoremontti Haagissa, mukaan lukien keittiön, kylpyhuoneen ja väliseinien purku.',
    },
    pl: {
      title: 'Renowacja Mieszkania Haga',
      description:
        'Kompletna renowacja mieszkania w Hadze, w tym rozbiórka kuchni, łazienki i ścian działowych.',
    },
    ar: {
      title: 'تجديد شقة لاهاي',
      description: 'تجديد كامل لشقة في لاهاي بما في ذلك هدم المطبخ والحمام والجدران الفاصلة.',
    },
    zh: { title: '海牙公寓翻新', description: '海牙公寓的全面翻新，包括拆除厨房、浴室和隔断墙。' },
    ja: {
      title: 'ハーグアパートリノベーション',
      description:
        'ハーグのアパートの全面リノベーション。キッチン、バスルーム、間仕切り壁の解体を含む。',
    },
    pt: {
      title: 'Renovação Apartamento Haia',
      description:
        'Renovação completa de um apartamento em Haia incluindo demolição de cozinha, banheiro e paredes divisórias.',
    },
    tr: {
      title: 'Lahey Daire Renovasyonu',
      description:
        "Lahey'de bir dairenin mutfak, banyo ve bölme duvarlarının yıkılması dahil tam renovasyonu.",
    },
    ru: {
      title: 'Реновация Квартиры Гаага',
      description:
        'Полная реновация квартиры в Гааге, включая демонтаж кухни, ванной и перегородок.',
    },
  },
  project3: {
    nl: {
      title: 'Woning Ontruiming Eindhoven',
      description:
        'Complete ontruiming van een woning in Eindhoven na verhuizing, inclusief verwijderen van vloeren en keuken.',
    },
    en: {
      title: 'Property Clearing Eindhoven',
      description:
        'Complete clearing of a home in Eindhoven after relocation, including removal of floors and kitchen.',
    },
    fr: {
      title: 'Déblayage Maison Eindhoven',
      description:
        "Déblayage complet d'une maison à Eindhoven après déménagement, y compris enlèvement des sols et cuisine.",
    },
    de: {
      title: 'Hausentrümpelung Eindhoven',
      description:
        'Komplette Entrümpelung eines Hauses in Eindhoven nach Umzug, einschließlich Entfernung von Böden und Küche.',
    },
    it: {
      title: 'Sgombero Casa Eindhoven',
      description:
        'Sgombero completo di una casa a Eindhoven dopo trasloco, inclusa rimozione di pavimenti e cucina.',
    },
    es: {
      title: 'Despeje Vivienda Eindhoven',
      description:
        'Despeje completo de una vivienda en Eindhoven tras mudanza, incluyendo eliminación de suelos y cocina.',
    },
    sv: {
      title: 'Husrensning Eindhoven',
      description:
        'Fullständig rensning av ett hus i Eindhoven efter flytt, inklusive borttagning av golv och kök.',
    },
    fi: {
      title: 'Talotyhjennys Eindhoven',
      description:
        'Täydellinen talotyhjennys Eindhovenissa muuton jälkeen, lattiat ja keittiö poistettuina.',
    },
    pl: {
      title: 'Opróżnienie Domu Eindhoven',
      description:
        'Pełne opróżnienie domu w Eindhoven po przeprowadzce, w tym usuwanie podłóg i kuchni.',
    },
    ar: {
      title: 'تنظيف منزل أيندهوفن',
      description: 'تنظيف كامل لمنزل في أيندهوفن بعد الانتقال، بما في ذلك إزالة الأرضيات والمطبخ.',
    },
    zh: {
      title: '埃因霍温物业清理',
      description: '搬迁后埃因霍温住宅的全面清理，包括拆除地板和厨房。',
    },
    ja: {
      title: 'アイントホーフェン物件片付け',
      description: '引っ越し後のアイントホーフェンの住宅を完全に片付け、床とキッチンの撤去を含む。',
    },
    pt: {
      title: 'Limpeza Residência Eindhoven',
      description:
        'Limpeza completa de uma residência em Eindhoven após mudança, incluindo remoção de pisos e cozinha.',
    },
    tr: {
      title: 'Eindhoven Ev Temizliği',
      description:
        "Taşınmadan sonra Eindhoven'de bir evin tam temizliği, zeminlerin ve mutfağın kaldırılması dahil.",
    },
    ru: {
      title: 'Очистка Дома Эйндховен',
      description:
        'Полная очистка дома в Эйндховене после переезда, включая удаление полов и кухни.',
    },
  },
  project4: {
    nl: {
      title: 'Keuken Renovatie Amsterdam',
      description:
        'Strip-out van een keuken in Amsterdam voor complete renovatie met behoud van originele details.',
    },
    en: {
      title: 'Kitchen Renovation Amsterdam',
      description:
        'Strip-out of a kitchen in Amsterdam for complete renovation while preserving original details.',
    },
    fr: {
      title: 'Rénovation Cuisine Amsterdam',
      description:
        "Déblayage d'une cuisine à Amsterdam pour rénovation complète en préservant les détails originaux.",
    },
    de: {
      title: 'Küchenrenovierung Amsterdam',
      description:
        'Entkernung einer Küche in Amsterdam für komplette Renovierung unter Erhaltung originaler Details.',
    },
    it: {
      title: 'Ristrutturazione Cucina Amsterdam',
      description:
        'Sgombero di una cucina ad Amsterdam per ristrutturazione completa preservando i dettagli originali.',
    },
    es: {
      title: 'Renovación Cocina Ámsterdam',
      description:
        'Despeje de una cocina en Ámsterdam para renovación completa preservando los detalles originales.',
    },
    sv: {
      title: 'Köksrenovering Amsterdam',
      description:
        'Rivning av ett kök i Amsterdam för komplett renovering med bevarande av originaldetaljer.',
    },
    fi: {
      title: 'Keittiöremontti Amsterdam',
      description:
        'Keittiön purku Amsterdamissa täydellistä remonttia varten alkuperäisiä yksityiskohtia säilyttäen.',
    },
    pl: {
      title: 'Renowacja Kuchni Amsterdam',
      description:
        'Opróżnienie kuchni w Amsterdamie do kompletnej renowacji z zachowaniem oryginalnych detali.',
    },
    ar: {
      title: 'تجديد مطبخ أمستردام',
      description: 'تفريغ مطبخ في أمستردام للتجديد الكامل مع الحفاظ على التفاصيل الأصلية.',
    },
    zh: {
      title: '阿姆斯特丹厨房翻新',
      description: '阿姆斯特丹厨房的清理，进行全面翻新，同时保留原始细节。',
    },
    ja: {
      title: 'アムステルダムキッチンリノベーション',
      description:
        'オリジナルのディテールを保ちながら全面リノベーションするためのアムステルダムのキッチンの片付け。',
    },
    pt: {
      title: 'Renovação Cozinha Amsterdã',
      description:
        'Limpeza de uma cozinha em Amsterdã para renovação completa preservando os detalhes originais.',
    },
    tr: {
      title: 'Amsterdam Mutfak Renovasyonu',
      description:
        "Orijinal detayları korurken tam renovasyon için Amsterdam'da bir mutfağın temizlenmesi.",
    },
    ru: {
      title: 'Реновация Кухни Амстердам',
      description:
        'Демонтаж кухни в Амстердаме для полной реновации с сохранением оригинальных деталей.',
    },
  },
  project5: {
    nl: {
      title: 'Badkamer Verbouwing Rotterdam',
      description:
        'Sloop en renovatie van een badkamer in Rotterdam met verwijderen van oude tegels en sanitair.',
    },
    en: {
      title: 'Bathroom Renovation Rotterdam',
      description:
        'Demolition and renovation of a bathroom in Rotterdam including removal of old tiles and fixtures.',
    },
    fr: {
      title: 'Rénovation Salle de Bain Rotterdam',
      description:
        "Démolition et rénovation d'une salle de bain à Rotterdam incluant enlèvement des vieux carreaux et sanitaires.",
    },
    de: {
      title: 'Badezimmerrenovierung Rotterdam',
      description:
        'Abriss und Renovierung eines Badezimmers in Rotterdam einschließlich Entfernung alter Fliesen und Sanitäreinrichtungen.',
    },
    it: {
      title: 'Ristrutturazione Bagno Rotterdam',
      description:
        'Demolizione e ristrutturazione di un bagno a Rotterdam inclusa rimozione di vecchie piastrelle e sanitari.',
    },
    es: {
      title: 'Renovación Baño Róterdam',
      description:
        'Demolición y renovación de un baño en Róterdam incluyendo eliminación de azulejos viejos y accesorios.',
    },
    sv: {
      title: 'Badrumsrenovering Rotterdam',
      description:
        'Rivning och renovering av ett badrum i Rotterdam inklusive borttagning av gamla kakel och armaturer.',
    },
    fi: {
      title: 'Kylpyhuoneremontti Rotterdam',
      description:
        'Kylpyhuoneen purku ja remontti Rotterdamissa, mukaan lukien vanhojen laattojen ja kalusteiden poisto.',
    },
    pl: {
      title: 'Renowacja Łazienki Rotterdam',
      description:
        'Rozbiórka i renowacja łazienki w Rotterdamie, w tym usuwanie starych płytek i armatur.',
    },
    ar: {
      title: 'تجديد حمام روتردام',
      description: 'هدم وتجديد حمام في روتردام بما في ذلك إزالة البلاط القديم والتركيبات.',
    },
    zh: {
      title: '鹿特丹浴室翻新',
      description: '鹿特丹浴室的拆除和翻新，包括拆除旧瓷砖和固定装置。',
    },
    ja: {
      title: 'ロッテルダムバスルームリノベーション',
      description: '古いタイルと器具の撤去を含むロッテルダムのバスルームの解体とリノベーション。',
    },
    pt: {
      title: 'Renovação Banheiro Roterdã',
      description:
        'Demolição e renovação de um banheiro em Roterdã incluindo remoção de azulejos velhos e acessórios.',
    },
    tr: {
      title: 'Rotterdam Banyo Renovasyonu',
      description:
        "Eski fayansların ve armatürlerin kaldırılması dahil Rotterdam'da bir banyonun yıkımı ve renovasyonu.",
    },
    ru: {
      title: 'Реновация Ванной Роттердам',
      description:
        'Демонтаж и реновация ванной в Роттердаме, включая удаление старой плитки и сантехники.',
    },
  },
  project6: {
    nl: {
      title: 'Interieur Renovatie Utrecht',
      description:
        'Complete interieur renovatie van een woning in Utrecht met sloop van alle binnenwanden en vloeren.',
    },
    en: {
      title: 'Interior Renovation Utrecht',
      description:
        'Complete interior renovation of a home in Utrecht with demolition of all interior walls and floors.',
    },
    fr: {
      title: 'Rénovation Intérieure Utrecht',
      description:
        "Rénovation intérieure complète d'une maison à Utrecht avec démolition de tous les murs et sols intérieurs.",
    },
    de: {
      title: 'Innenrenovierung Utrecht',
      description:
        'Komplette Innenrenovierung eines Hauses in Utrecht mit Abriss aller Innenwände und Böden.',
    },
    it: {
      title: 'Ristrutturazione Interna Utrecht',
      description:
        'Ristrutturazione interna completa di una casa a Utrecht con demolizione di tutte le pareti e pavimenti interni.',
    },
    es: {
      title: 'Renovación Interior Utrecht',
      description:
        'Renovación interior completa de una vivienda en Utrecht con demolición de todas las paredes y suelos interiores.',
    },
    sv: {
      title: 'Invändig Renovering Utrecht',
      description:
        'Komplett invändig renovering av ett hus i Utrecht med rivning av alla invändiga väggar och golv.',
    },
    fi: {
      title: 'Sisäremontti Utrecht',
      description:
        'Täydellinen sisäremontti talossa Utrechtissä, kaikki sisäseinät ja lattiat purettuina.',
    },
    pl: {
      title: 'Renowacja Wnętrza Utrecht',
      description:
        'Kompletna renowacja wnętrza domu w Utrechcie z rozbiórką wszystkich ścian i podłóg wewnętrznych.',
    },
    ar: {
      title: 'تجديد داخلي أوترخت',
      description: 'تجديد داخلي كامل لمنزل في أوترخت مع هدم جميع الجدران والأرضيات الداخلية.',
    },
    zh: {
      title: '乌得勒支室内翻新',
      description: '乌得勒支住宅的完整室内翻新，拆除所有内墙和地板。',
    },
    ja: {
      title: 'ユトレヒト室内リノベーション',
      description: 'すべての内壁と床を解体したユトレヒトの住宅の完全な室内リノベーション。',
    },
    pt: {
      title: 'Renovação Interior Utrecht',
      description:
        'Renovação interior completa de uma residência em Utrecht com demolição de todas as paredes e pisos interiores.',
    },
    tr: {
      title: 'Utrecht İç Mekan Renovasyonu',
      description:
        "Tüm iç duvarların ve zeminlerin yıkımı ile Utrecht'te bir evin tam iç mekan renovasyonu.",
    },
    ru: {
      title: 'Реновация Интерьера Утрехт',
      description:
        'Полная реновация интерьера дома в Утрехте с демонтажом всех внутренних стен и полов.',
    },
  },
}
