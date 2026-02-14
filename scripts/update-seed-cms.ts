// Script to update seed-cms-content.ts with ALL missing about page content (12 locales)
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const filePath = join(__dirname, '..', 'scripts', 'seed-cms-content.ts')
let content = readFileSync(filePath, 'utf-8')

// The about page content to insert after the French section
const newContent = `,
  de: {
    hero: {
      title: 'WER WIR SIND',
      description: 'Seit über 25 Jahren ist TitanBrecher die Spezialistin für professionelle Abbrucharbeiten. Mit Leidenschaft, Handwerkskunst und moderner Ausrüstung schaffen wir Raum für die Zukunft.',
    },
    story: {
      title: 'UNSERE GESCHICHTE',
      paragraphs: [
        { text: 'TitanBrecher wurde 1999 von zwei erfahrenen Abbruchfachleuten mit einer klaren Mission gegründet: professionelle Abbrucharbeiten mit Augenmerk auf Sicherheit, Qualität und Umwelt.' },
        { text: 'Was als kleines Familienunternehmen begann, ist zu einem der angesehensten Abbruchunternehmen der Niederlande gewachsen. Mit mehr als 50 Mitarbeitern, einem modernen Maschinenpark und allen notwendigen Zertifizierungen meistern wir jedes Projekt - groß oder klein.' },
        { text: 'Unsere Stärke liegt in unserem Team. Erfahrene Fachleute, die stolz auf ihre Arbeit sind und immer das beste Ergebnis anstreben. Zusammen mit unseren Auftraggebern finden wir Lösungen für die komplexesten Abbruchprojekte.' },
      ],
    },
    stats: [
      { number: '25+', label: 'Jahre Erfahrung' },
      { number: '500+', label: 'Projekte' },
      { number: '50+', label: 'Mitarbeiter' },
      { number: '98%', label: 'Recycling' },
    ],
    values: [
      { icon: 'Shield', title: 'Sicherheit', description: 'Sicherheit steht immer an erster Stelle. Wir arbeiten nach VCA** und halten die höchsten Sicherheitsstandards auf allen unseren Projekten ein.' },
      { icon: 'Target', title: 'Qualität', description: 'Wir liefern Qualitätsarbeit, pünktlich und im Budget. Unsere Kunden können sich auf professionelle Ausführung verlassen.' },
      { icon: 'Heart', title: 'Nachhaltigkeit', description: 'Mit 98% Recycling von Abbruchabfällen tragen wir zu einer Kreislaufwirtschaft und einer saubereren Zukunft bei.' },
      { icon: 'Users', title: 'Handwerkskunst', description: 'Unser Team besteht aus erfahrenen Fachleuten, die stolz auf ihre Arbeit sind und immer das beste Ergebnis anstreben.' },
    ],
    timeline: [
      { year: '1999', title: 'Gründung', description: 'TitanBrecher wird in Rotterdam gegründet' },
      { year: '2005', title: 'VCA Zertifizierung', description: 'Erreichung der VCA** Zertifizierung' },
      { year: '2010', title: 'SC-530 Anerkennung', description: 'Anerkennung für Asbestentfernung' },
      { year: '2015', title: 'Nationale Abdeckung', description: 'Expansion in die ganzen Niederlande' },
      { year: '2020', title: '50 Mitarbeiter', description: 'Wachstum auf über 50 Fachleute' },
      { year: '2024', title: '500+ Projekte', description: 'Meilenstein von 500 erfolgreichen Projekten' },
    ],
  },
  it: {
    hero: {
      title: 'CHI SIAMO',
      description: "Da oltre 25 anni, TitanDemolitores è lo specialista dei lavori di demolizione professionale. Con passione, artigianato ed equipaggiamento moderno, creiamo spazio per il futuro.",
    },
    story: {
      title: 'LA NOSTRA STORIA',
      paragraphs: [
        { text: "TitanDemolitores è stata fondata nel 1999 da due esperti demolitori con una chiara missione: fornire lavori di demolizione professionale con attenzione alla sicurezza, qualità e ambiente." },
        { text: "Ciò che iniziò come una piccola azienda familiare è cresciuta fino a diventare una delle imprese di demolizione più rispettate dei Paesi Bassi. Con oltre 50 dipendenti, un parco macchine moderno e tutte le certificazioni necessarie, affrontiamo ogni progetto - grande o piccolo." },
        { text: 'La nostra forza risiede nel nostro team. Professionisti esperti che sono orgogliosi del loro lavoro e mirano sempre ai migliori risultati. Insieme ai nostri clienti, troviamo soluzioni per i progetti di demolizione più complessi.' },
      ],
    },
    stats: [
      { number: '25+', label: 'Anni di Esperienza' },
      { number: '500+', label: 'Progetti' },
      { number: '50+', label: 'Dipendenti' },
      { number: '98%', label: 'Riciclaggio' },
    ],
    values: [
      { icon: 'Shield', title: 'Sicurezza', description: 'La sicurezza viene sempre prima di tutto. Lavoriamo secondo VCA** e manteniamo gli standard di sicurezza più elevati in tutti i nostri progetti.' },
      { icon: 'Target', title: 'Qualità', description: "Forniamo lavori di qualità, in orario e nel budget. I nostri clienti possono contare su un'esecuzione professionale." },
      { icon: 'Heart', title: 'Sostenibilità', description: "Con il 98% di riciclo dei rifiuti di demolizione, contribuiamo a un economia circolare e a un futuro più pulito." },
      { icon: 'Users', title: 'Artigianato', description: 'Il nostro team è composto da professionisti esperti che sono orgogliosi del loro lavoro e mirano sempre ai migliori risultati.' },
    ],
    timeline: [
      { year: '1999', title: 'Fondazione', description: 'TitanDemolitores viene fondata a Rotterdam' },
      { year: '2005', title: 'Certificazione VCA', description: 'Conseguimento della certificazione VCA**' },
      { year: '2010', title: 'Riconoscimento SC-530', description: 'Riconoscimento per la rimozione del amianto' },
      { year: '2015', title: 'Copertura Nazionale', description: 'Espansione in tutti i Paesi Bassi' },
      { year: '2020', title: '50 Dipendenti', description: 'Crescita a oltre 50 professionisti' },
      { year: '2024', title: '500+ Progetti', description: 'Traguardo di 500 progetti riusciti' },
    ],
  },
  es: {
    hero: {
      title: 'QUIÉNES SOMOS',
      description: 'Desde hace más de 25 años, TitanDemoledores es el especialista en trabajos de demolición profesionales. Con pasión, artesanía y equipamiento moderno, hacemos espacio para el futuro.',
    },
    story: {
      title: 'NUESTRA HISTORIA',
      paragraphs: [
        { text: 'TitanDemoledores fue fundada en 1999 por dos demolidores experimentados con una clara misión: ofrecer trabajos de demolición profesionales con atención a la seguridad, calidad y medio ambiente.' },
        { text: 'Lo que comenzó como una pequeña empresa familiar ha crecido hasta convertirse en una de las empresas de demolición más respetadas de los Países Bajos. Con más de 50 empleados, un parque de maquinaria moderno y todas las certificaciones necesarias, abordamos cada proyecto - grande o pequeño.' },
        { text: 'Nuestra fortaleza reside en nuestro equipo. Profesionales experimentados que están orgullosos de su trabajo y siempre aspiran a los mejores resultados. Junto con nuestros clientes, encontramos soluciones para los proyectos de demolición más complejos.' },
      ],
    },
    stats: [
      { number: '25+', label: 'Años de Experiencia' },
      { number: '500+', label: 'Proyectos' },
      { number: '50+', label: 'Empleados' },
      { number: '98%', label: 'Reciclaje' },
    ],
    values: [
      { icon: 'Shield', title: 'Seguridad', description: 'La seguridad siempre es lo primero. Trabajamos según VCA** y mantenemos los más altos estándares de seguridad en todos nuestros proyectos.' },
      { icon: 'Target', title: 'Calidad', description: 'Entregamos trabajo de calidad, a tiempo y dentro del presupuesto. Nuestros clientes pueden contar con una ejecución profesional.' },
      { icon: 'Heart', title: 'Sostenibilidad', description: 'Con el 98% de reciclaje de residuos de demolición, contribuimos a una economía circular y a un futuro más limpio.' },
      { icon: 'Users', title: 'Artesanía', description: 'Nuestro equipo está formado por profesionales experimentados que están orgullosos de su trabajo y siempre aspiran a los mejores resultados.' },
    ],
    timeline: [
      { year: '1999', title: 'Fundación', description: 'TitanDemoledores se funda en Róterdam' },
      { year: '2005', title: 'Certificación VCA', description: 'Obtención de la certificación VCA**' },
      { year: '2010', title: 'Reconocimiento SC-530', description: 'Reconocimiento para la retirada de amianto' },
      { year: '2015', title: 'Cobertura Nacional', description: 'Expansión a todos los Países Bajos' },
      { year: '2020', title: '50 Empleados', description: 'Crecimiento a más de 50 profesionales' },
      { year: '2024', title: '500+ Proyectos', description: 'Hito de 500 proyectos exitosos' },
    ],
  },
  sv: {
    hero: {
      title: 'VILKA VI ÄR',
      description: 'I mer än 25 år har TitanBrytare varit specialisten på professionellt rivningsarbete. Med passion, hantverk och modern utrustning skapar vi utrymme för framtiden.',
    },
    story: {
      title: 'VÅR HISTORIA',
      paragraphs: [
        { text: 'TitanBrytare grundades 1999 av två erfarna rivningsarbetare med ett tydligt uppdrag: att leverera professionellt rivningsarbete med fokus på säkerhet, kvalitet och miljö.' },
        { text: 'Det som började som ett litet familjeföretag har vuxit till ett av de mest respekterade rivningsföretagen i Nederländerna. Med mer än 50 anställda, en modern maskinpark och alla nödvändiga certifieringar tar vi oss an varje projekt - stort eller litet.' },
        { text: 'Vår styrka ligger i vårt team. Erfarna yrkesmän som är stolta över sitt arbete och alltid strävar efter de bästa resultaten. Tillsammans med våra kunder hittar vi lösningar för de mest komplexa rivningsprojekten.' },
      ],
    },
    stats: [
      { number: '25+', label: 'Års Erfarenhet' },
      { number: '500+', label: 'Projekt' },
      { number: '50+', label: 'Anställda' },
      { number: '98%', label: 'Återvinning' },
    ],
    values: [
      { icon: 'Shield', title: 'Säkerhet', description: 'Säkerhet kommer alltid först. Vi arbetar enligt VCA** och upprätthåller de högsta säkerhetsstandarderna på alla våra projekt.' },
      { icon: 'Target', title: 'Kvalitet', description: 'Vi levererar kvalitetsarbete i tid och inom budget. Våra kunder kan räkna med professionellt utförande.' },
      { icon: 'Heart', title: 'Hållbarhet', description: 'Med 98% återvinning av rivningsavfall bidrar vi till en cirkulär ekonomi och en renare framtid.' },
      { icon: 'Users', title: 'Hantverk', description: 'Vårt team består av erfarna yrkesmän som är stolta över sitt arbete och alltid strävar efter de bästa resultaten.' },
    ],
    timeline: [
      { year: '1999', title: 'Grundande', description: 'TitanBrytare grundas i Rotterdam' },
      { year: '2005', title: 'VCA Certifiering', description: 'Uppnående av VCA** certifiering' },
      { year: '2010', title: 'SC-530 Erkännande', description: 'Erkännande för asbetsborttagning' },
      { year: '2015', title: 'Nationell Täckning', description: 'Expansion över hela Nederländerna' },
      { year: '2020', title: '50 Anställda', description: 'Tillväxt till över 50 yrkesmän' },
      { year: '2024', title: '500+ Projekt', description: 'Milstolpe av 500 framgångsrika projekt' },
    ],
  },
  fi: {
    hero: {
      title: 'KEITÄ ME OLEMME',
      description: 'Yli 25 vuoden ajan TitanMurtajat on ollut ammattimaisen purkutyön asiantuntija. Intohimolla, käsityötaidoilla ja moderneilla laitteilla luomme tilaa tulevaisuudelle.',
    },
    story: {
      title: 'MEIDÄN TARINAMME',
      paragraphs: [
        { text: 'TitanMurtajat perustettiin vuonna 1999 kahden kokeneen purkutyöntekijän toimesta selkeällä missionilla: toimittaa ammattimainen purkutyö huomioiden turvallisuus, laatu ja ympäristö.' },
        { text: 'Se, mikä alkoi pienenä perheyrityksenä, on kasvanut yhdeksi Alankomaiden arvostetuimmista purkuyrityksistä. Yli 50 työntekijällä, modernilla kalustolla ja kaikilla tarvittavilla sertifikaateilla toteutamme jokaisen projektin - suuren tai pienen.' },
        { text: 'Vahvuutemme on tiimissämme. Kokeneita ammattilaisia, jotka ovat ylpeitä työstään ja pyrkivät aina parhaisiin tuloksiin. Yhdessä asiakkaidemme kanssa löydämme ratkaisuja monimutkaisimpiinkin purkuprojekteihin.' },
      ],
    },
    stats: [
      { number: '25+', label: 'Vuoden Kokemus' },
      { number: '500+', label: 'Projektit' },
      { number: '50+', label: 'Työntekijät' },
      { number: '98%', label: 'Kierrätys' },
    ],
    values: [
      { icon: 'Shield', title: 'Turvallisuus', description: 'Turvallisuus on aina etusijalla. Toimimme VCA** standardien mukaisesti ja ylläpidämme korkeimpia turvallisuusstandardeja kaikissa projekteissamme.' },
      { icon: 'Target', title: 'Laatu', description: 'Toimitamme laadukasta työtä ajoissa ja budjetissa. Asiakkaamme voivat luotella ammattimaiseen toteutukseen.' },
      { icon: 'Heart', title: 'Kestävyys', description: '98% kierrätysasteella purkujätteestä edistämme kiertotaloutta ja puhtaampaa tulevaisuutta.' },
      { icon: 'Users', title: 'Käsityötaito', description: 'Tiimimme koostuu kokeneista ammattilaisista, jotka ovat ylpeitä työstään ja pyrkivät aina parhaisiin tuloksiin.' },
    ],
    timeline: [
      { year: '1999', title: 'Perustaminen', description: 'TitanMurtajat perustetaan Rotterdamiin' },
      { year: '2005', title: 'VCA Sertifiointi', description: 'VCA** sertifikaatin saavuttaminen' },
      { year: '2010', title: 'SC-530 Tunnustus', description: 'Tunnustus asbestin poistamiseen' },
      { year: '2015', title: 'Valtakunnallinen Kattavuus', description: 'Laajentuminen koko Alankomaihin' },
      { year: '2020', title: '50 Työntekijää', description: 'Kasvu yli 50 ammattilaiseen' },
      { year: '2024', title: '500+ Projektia', description: '500 onnistuneen projektin merkkipaalu' },
    ],
  },
  pl: {
    hero: {
      title: 'KIM JESTEŚMY',
      description: 'Od ponad 25 lat TitanBurzyciele jest specjalistą w profesjonalnych pracach rozbiórkowych. Z pasją, rzemiosłem i nowoczesnym sprzętem tworzymy przestrzeń dla przyszłości.',
    },
    story: {
      title: 'NASZA HISTORIA',
      paragraphs: [
        { text: 'TitanBurzyciele został założony w 1999 roku przez dwóch doświadczonych robotników rozbiórkowych z jasną misją: świadczenie profesjonalnych usług rozbiórkowych z naciskiem na bezpieczeństwo, jakość i środowisko.' },
        { text: 'To, co zaczęło się jako mała firma rodzinna, rozrosło się do jednej z najbardziej szanowanych firm rozbiórkowych w Holandii. Z ponad 50 pracownikami, nowoczesnym parkiem maszynowym i wszystkimi wymaganymi certyfikatami, podejmujemy się każdego projektu - dużego czy małego.' },
        { text: 'Nasza siła tkwi w naszym zespole. Doświadczeni profesjonaliści, którzy są dumni ze swojej pracy i zawsze dążą do najlepszych wyników. Wspólnie z naszymi klientami znajdujemy rozwiązania dla najbardziej złożonych projektów rozbiórkowych.' },
      ],
    },
    stats: [
      { number: '25+', label: 'Lat Doświadczenia' },
      { number: '500+', label: 'Projektów' },
      { number: '50+', label: 'Pracowników' },
      { number: '98%', label: 'Recykling' },
    ],
    values: [
      { icon: 'Shield', title: 'Bezpieczeństwo', description: 'Bezpieczeństwo jest zawsze na pierwszym miejscu. Pracujemy zgodnie z VCA** i utrzymujemy najwyższe standardy bezpieczeństwa we wszystkich naszych projektach.' },
      { icon: 'Target', title: 'Jakość', description: 'Dostarczamy pracę najwyższej jakości, na czas i w budżecie. Nasi klienci mogą liczyć na profesjonalne wykonanie.' },
      { icon: 'Heart', title: 'Zrównoważony Rozwój', description: 'Z 98% recyklingiem odpadów rozbiórkowych przyczyniamy się do gospodarki o obiegu zamkniętym i czystszej przyszłości.' },
      { icon: 'Users', title: 'Rzemiosło', description: 'Nasz zespół składa się z doświadczonych profesjonalistów, którzy są dumni ze swojej pracy i zawsze dążą do najlepszych wyników.' },
    ],
    timeline: [
      { year: '1999', title: 'Założenie', description: 'TitanBurzyciele zostaje założony w Rotterdamie' },
      { year: '2005', title: 'Certyfikacja VCA', description: 'Uzyskanie certyfikacji VCA**' },
      { year: '2010', title: 'Uznanie SC-530', description: 'Uznanie dla usuwania azbestu' },
      { year: '2015', title: 'Ogólnokrajowe Pokrycie', description: 'Ekspansja na całe Holandię' },
      { year: '2020', title: '50 Pracowników', description: 'Wzrost do ponad 50 profesjonalistów' },
      { year: '2024', title: '500+ Projektów', description: 'Kamień milowy 500 ukończonych projektów' },
    ],
  },
  ar: {
    hero: {
      title: 'من نحن',
      description: 'منذ أكثر من 25 عامًا، كانت تيتان بريكرز المتخصصة في أعمال الهدم المهنية. مع الشغف والحرفية والمعدات الحديثة، نخلق مساحة للمستقبل.',
    },
    story: {
      title: 'قصتنا',
      paragraphs: [
        { text: 'تأسست تيتان بريكرز في عام 1999 على يد عاملي هدم متمرسين بمهمة واضحة: تقديم أعمال هدم مهنية مع التركيز على السلامة والجودة والبيئة.' },
        { text: 'ما بدأ كشركة عائلية صغيرة نمت لتصبح واحدة من أكثر شركات الهدم احترامًا في هولندا. مع أكثر من 50 موظفًا، ومعدات حديثة، وجميع الشهادات اللازمة، نتعامل مع كل مشروع - كبير أو صغير.' },
        { text: 'قوتنا تكمن في فريقنا. محترفون متمرسون يفخرون بعملهم ويسعون دائمًا لتحقيق أفضل النتائج. جنبًا إلى جنب مع عملائنا، نجد حلولًا لأكثر مشاريع الهدم تعقيدًا.' },
      ],
    },
    stats: [
      { number: '25+', label: 'سنوات الخبرة' },
      { number: '500+', label: 'المشاريع' },
      { number: '50+', label: 'الموظفين' },
      { number: '98%', label: 'إعادة التدوير' },
    ],
    values: [
      { icon: 'Shield', title: 'السلامة', description: 'السلامة دائمًا في المقام الأول. نحن نعمل وفقًا لمعايير VCA** ونحافظ على أعلى معايير السلامة في جميع مشاريعنا.' },
      { icon: 'Target', title: 'الجودة', description: 'نقدم عملاً عالي الجودة، في الوقت المحدد وضمن الميزانية. يمكن لعملائنا الاعتماد على التنفيذ المهني.' },
      { icon: 'Heart', title: 'الاستدامة', description: 'مع 98% من إعادة تدوير مخلفات الهدم، نساهم في الاقتصاد الدائري ومستقبل أنظف.' },
      { icon: 'Users', title: 'الحرفية', description: 'يتكون فريقنا من محترفين متمرسين يفخرون بعملهم ويسعون دائمًا لتحقيق أفضل النتائج.' },
    ],
    timeline: [
      { year: '1999', title: 'التأسيس', description: 'تيتان بريكرز تأسست في روتردام' },
      { year: '2005', title: 'شهادة VCA', description: 'الحصول على شهادة VCA**' },
      { year: '2010', title: 'اعتراف SC-530', description: 'اعتراف بإزالة الأسبستوس' },
      { year: '2015', title: 'التغطية الوطنية', description: 'التوسع في جميع أنحاء هولندا' },
      { year: '2020', title: '50 موظفًا', description: 'النمو إلى أكثر من 50 محترفًا' },
      { year: '2024', title: '500+ مشروع', description: 'علامة فارقة 500 مشروع ناجح' },
    ],
  },
  zh: {
    hero: {
      title: '我们是谁',
      description: '25年多以来，泰坦拆除一直是专业拆除工程领域的专家。凭借热情、工艺和现代化设备，我们为未来创造空间。',
    },
    story: {
      title: '我们的故事',
      paragraphs: [
        { text: '泰坦拆除由两位经验丰富的拆除工人于1999年创立，使命明确：提供专业的拆除工程，注重安全、质量和环境。' },
        { text: '这个起步于小型家族企业的公司，已成长为荷兰最受尊敬的拆除公司之一。拥有50多名员工、现代化的机械设备和所有必要的认证，我们承接每一个项目——无论大小。' },
        { text: '我们的力量在于我们的团队。经验丰富的专业人士，他们为自己的工作感到自豪，始终追求最佳结果。与客户一起，我们找到最复杂拆除项目的解决方案。' },
      ],
    },
    stats: [
      { number: '25+', label: '年经验' },
      { number: '500+', label: '项目' },
      { number: '50+', label: '员工' },
      { number: '98%', label: '回收' },
    ],
    values: [
      { icon: 'Shield', title: '安全', description: '安全永远是第一位的。我们按照VCA**工作，并在所有项目中保持最高的安全标准。' },
      { icon: 'Target', title: '质量', description: '我们按时、按预算交付高质量的工作。我们的客户可以信赖专业的执行。' },
      { icon: 'Heart', title: '可持续性', description: '通过98%的拆除废料回收，我们为循环经济和更清洁的未来做出贡献。' },
      { icon: 'Users', title: '工艺', description: '我们的团队由经验丰富的专业人士组成，他们为自己的工作感到自豪，始终追求最佳结果。' },
    ],
    timeline: [
      { year: '1999', title: '成立', description: '泰坦拆除在鹿特丹成立' },
      { year: '2005', title: 'VCA认证', description: '获得VCA**认证' },
      { year: '2010', title: 'SC-530认可', description: '石棉清除认可' },
      { year: '2015', title: '全国覆盖', description: '扩展到整个荷兰' },
      { year: '2020', title: '50名员工', description: '发展到50多名专业人员' },
      { year: '2024', title: '500+项目', description: '500个成功项目的里程碑' },
    ],
  },
  ja: {
    hero: {
      title: '私たちについて',
      description: '25年以上にわたり、タイタンブレーカーズは専門的な解体工事のスペシャリストです。情熱、職人技、そして最新の設備で、未来のための空間を創造します。',
    },
    story: {
      title: '私たちの物語',
      paragraphs: [
        { text: 'タイタンブレーカーズは1999年、2人の熟練した解体作業員によって明確な使命を持って設立されました：安全、品質、環境に配慮しながら専門的な解体工事を提供すること。' },
        { text: '小さな家族経営として始まった当社は、オランダで最も尊敬される解体会社の一つに成長しました。50名以上の社員、最新の機械設備、必要な認証をすべて持ち、大小問わずあらゆるプロジェクトに対応します。' },
        { text: '私たちの強みはチームにあります。自分たちの仕事に誇りを持ち、常に最高の結果を追求する経験豊富な専門家たちです。お客様と共に、最も複雑な解体プロジェクトの解決策を見つけます。' },
      ],
    },
    stats: [
      { number: '25+', label: '年の経験' },
      { number: '500+', label: 'プロジェクト' },
      { number: '50+', label: '従業員' },
      { number: '98%', label: 'リサイクル' },
    ],
    values: [
      { icon: 'Shield', title: '安全', description: '安全は常に最優先です。VCA**に準拠し、すべてのプロジェクトで最高の安全基準を維持しています。' },
      { icon: 'Target', title: '品質', description: '期限内かつ予算内で最高品質の作業を納品します。お客様はプロフェッショナルな対応を期待できます。' },
      { icon: 'Heart', title: '持続可能性', description: '解体廃棄物の98%をリサイクルし、循環型経済とより清潔な未来に貢献しています。' },
      { icon: 'Users', title: '職人技', description: '私たちのチームは、自分たちの仕事に誇りを持ち、常に最高の結果を追求する経験豊富な専門家で構成されています。' },
    ],
    timeline: [
      { year: '1999', title: '設立', description: 'タイタンブレーカーズがロッテルダムで設立' },
      { year: '2005', title: 'VCA認証', description: 'VCA**認証の取得' },
      { year: '2010', title: 'SC-530認定', description: 'アスベスト除去の認定' },
      { year: '2015', title: '全国展開', description: 'オランダ全国への展開' },
      { year: '2020', title: '50名の社員', description: '50名以上の専門家への成長' },
      { year: '2024', title: '500件以上のプロジェクト', description: '500件の成功したプロジェクトという節目' },
    ],
  },
  pt: {
    hero: {
      title: 'QUEM SOMOS',
      description: 'Há mais de 25 anos, a TitanDemolidores é a especialista em trabalhos de demolição profissionais. Com paixão, artesanato e equipamento moderno, criamos espaço para o futuro.',
    },
    story: {
      title: 'A NOSSA HISTÓRIA',
      paragraphs: [
        { text: 'A TitanDemolidores foi fundada em 1999 por dois demolidores experientes com uma missão clara: fornecer trabalhos de demolição profissionais com atenção à segurança, qualidade e ambiente.' },
        { text: 'O que começou como uma pequena empresa familiar tornou-se uma das empresas de demolição mais respeitadas dos Países Baixos. Com mais de 50 funcionários, uma frota de equipamentos moderna e todas as certificações necessárias, enfrentamos cada projeto - grande ou pequeno.' },
        { text: 'A nossa força reside na nossa equipa. Profissionais experientes que têm orgulho no seu trabalho e que sempre visam os melhores resultados. Juntamente com os nossos clientes, encontramos soluções para os projetos de demolição mais complexos.' },
      ],
    },
    stats: [
      { number: '25+', label: 'Anos de Experiência' },
      { number: '500+', label: 'Projetos' },
      { number: '50+', label: 'Funcionários' },
      { number: '98%', label: 'Reciclagem' },
    ],
    values: [
      { icon: 'Shield', title: 'Segurança', description: 'A segurança é sempre a prioridade. Trabalhamos segundo VCA** e mantemos os mais altos padrões de segurança em todos os nossos projetos.' },
      { icon: 'Target', title: 'Qualidade', description: 'Entregamos trabalho de qualidade, no prazo e dentro do orçamento. Os nossos clientes podem contar com uma execução profissional.' },
      { icon: 'Heart', title: 'Sustentabilidade', description: 'Com 98% de reciclagem de resíduos de demolição, contribuímos para uma economia circular e um futuro mais limpo.' },
      { icon: 'Users', title: 'Artesanato', description: 'A nossa equipa é composta por profissionais experientes que têm orgulho no seu trabalho e que sempre visam os melhores resultados.' },
    ],
    timeline: [
      { year: '1999', title: 'Fundação', description: 'TitanDemolidores é fundada em Roterdã' },
      { year: '2005', title: 'Certificação VCA', description: 'Obtenção da certificação VCA**' },
      { year: '2010', title: 'Reconhecimento SC-530', description: 'Reconhecimento para remoção de amianto' },
      { year: '2015', title: 'Cobertura Nacional', description: 'Expansão por todos os Países Baixos' },
      { year: '2020', title: '50 Funcionários', description: 'Crescimento para mais de 50 profissionais' },
      { year: '2024', title: '500+ Projetos', description: 'Marco de 500 projetos bem-sucedidos' },
    ],
  },
  tr: {
    hero: {
      title: 'BİZ KİMİZ',
      description: '25 yılı aşkın süredir TitanYıkıcılar profesyonel yıkım işlerinin uzmanıdır. Tutku, ustalık ve modern ekipmanla gelecek için alan yaratıyoruz.',
    },
    story: {
      title: 'HİKAYEMİZ',
      paragraphs: [
        { text: "TitanYıkıcılar, 1999 yılında iki deneyimli yıkım işçisi tarafından açık bir misyonla kuruldu: güvenlik, kalite ve çevreye dikkat ederek profesyonel yıkım işleri sunmak." },
        { text: 'Küçük bir aile işletmesi olarak başlayan şirket, Hollandanın en saygın yıkım şirketlerinden biri haline geldi. 50den fazla çalışan, modern makine parkı ve gerekli tüm sertifikasyonlarla her projeyi ele alıyoruz - büyük veya küçük.' },
        { text: 'Gücümüz ekibimizde yatıyor. İşleriyle gurur duyan ve her zaman en iyi sonuçları hedefleyen deneyimli profesyoneller. Müşterilerimizle birlikte en karmaşık yıkım projeleri için çözümler buluyoruz.' },
      ],
    },
    stats: [
      { number: '25+', label: 'Yıllık Deneyim' },
      { number: '500+', label: 'Projeler' },
      { number: '50+', label: 'Çalışanlar' },
      { number: '98%', label: 'Geri Dönüşüm' },
    ],
    values: [
      { icon: 'Shield', title: 'Güvenlik', description: 'Güvenlik her zaman ilk sırada gelir. VCA**ye göre çalışıyoruz ve tüm projelerimizde en yüksek güvenlik standartlarını koruyoruz.' },
      { icon: 'Target', title: 'Kalite', description: 'Zamanında ve bütçe dahilinde kaliteli iş teslim ediyoruz. Müşterilerimiz profesyonel uygulamaya güvenebilir.' },
      { icon: 'Heart', title: 'Sürdürülebilirlik', description: 'Yıkım atıklarının %98ini geri dönüştürerek dolaşım ekonomisine ve daha temiz bir geleceğe katkıda bulunuyoruz.' },
      { icon: 'Users', title: 'Ustalık', description: 'Ekibimiz işleriyle gurur duyan ve her zaman en iyi sonuçları hedefleyen deneyimli profesyonellerden oluşuyor.' },
    ],
    timeline: [
      { year: '1999', title: 'Kuruluş', description: 'TitanYıkıcılar Rotterdamda kuruldu' },
      { year: '2005', title: 'VCA Sertifikasyonu', description: 'VCA** sertifikasyonu alındı' },
      { year: '2010', title: 'SC-530 Tanınma', description: 'Asbest kaldırma için tanınma' },
      { year: '2015', title: 'Ulusal Kapsam', description: 'Tüm Hollandaya yayılma' },
      { year: '2020', title: '50 Çalışan', description: '50den fazla uzmana büyüme' },
      { year: '2024', title: '500+ Proje', description: '500 başarılı proje dönüm noktası' },
    ],
  },
  ru: {
    hero: {
      title: 'КТО МЫ',
      description: 'Более 25 лет ТитанРазрушители являются специалистами в профессиональных демонтажных работах. С мастерством, страстью и современным оборудованием мы создаем пространство для будущего.',
    },
    story: {
      title: 'НАША ИСТОРИЯ',
      paragraphs: [
        { text: 'ТитанРазрушители была основана в 1999 году двумя опытными демонтажными рабочими с четкой миссией: выполнять профессиональные демонтажные работы, уделяя внимание безопасности, качеству и окружающей среде.' },
        { text: 'То, что начиналось как небольшое семейное предприятие, выросло в одну из самых уважаемых демонтажных компаний Нидерландов. С более чем 50 сотрудниками, современным парком оборудования и всеми необходимыми сертификатами, мы беремся за каждый проект - большой или малый.' },
        { text: 'Наша сила заключается в нашей команде. Опытные профессионалы, которые гордятся своей работой и всегда стремятся к лучшим результатам. Вместе с нашими клиентами мы находим решения для самых сложных демонтажных проектов.' },
      ],
    },
    stats: [
      { number: '25+', label: 'Лет Опыта' },
      { number: '500+', label: 'Проектов' },
      { number: '50+', label: 'Сотрудников' },
      { number: '98%', label: 'Переработка' },
    ],
    values: [
      { icon: 'Shield', title: 'Безопасность', description: 'Безопасность всегда превыше всего. Мы работаем согласно VCA** и поддерживаем самые высокие стандарты безопасности на всех наших проектах.' },
      { icon: 'Target', title: 'Качество', description: 'Мы выполняем качественную работу в срок и в рамках бюджета. Наши клиенты могут рассчитывать на профессиональное исполнение.' },
      { icon: 'Heart', title: 'Устойчивость', description: 'С 98% переработкой демонтажных отходов, мы вносим вклад в циркулярную экономику и более чистое будущее.' },
      { icon: 'Users', title: 'Мастерство', description: 'Наша команда состоит из опытных профессионалов, которые гордятся своей работой и всегда стремятся к лучшим результатам.' },
    ],
    timeline: [
      { year: '1999', title: 'Основание', description: 'ТитанРазрушители основана в Роттердаме' },
      { year: '2005', title: 'Сертификация VCA', description: 'Получение сертификации VCA**' },
      { year: '2010', title: 'Признание SC-530', description: 'Признание для удаления асбеста' },
      { year: '2015', title: 'Национальное Покрытие', description: 'Расширение по всей Нидерландам' },
      { year: '2020', title: '50 Сотрудников', description: 'Рост до более чем 50 профессионалов' },
      { year: '2024', title: '500+ Проектов', description: 'Рубеж в 500 успешных проектов' },
    ],
  },
`

// Find where to insert - after the fr section ends and before "// Contact page content"
const searchStr = `    ],
  },
}

// Contact page content`

if (content.includes(searchStr)) {
  content = content.replace(
    searchStr,
    `    ],
  },
}${newContent}

// Contact page content`,
  )
  writeFileSync(filePath, content)
  console.log('✅ Successfully added about page content for all 12 missing locales:')
  console.log('   - German (de)')
  console.log('   - Italian (it)')
  console.log('   - Spanish (es)')
  console.log('   - Swedish (sv)')
  console.log('   - Finnish (fi)')
  console.log('   - Polish (pl)')
  console.log('   - Arabic (ar)')
  console.log('   - Chinese (zh)')
  console.log('   - Japanese (ja)')
  console.log('   - Portuguese (pt)')
  console.log('   - Turkish (tr)')
  console.log('   - Russian (ru)')
} else {
  console.error('❌ Could not find the insertion point in the file')
  console.log('Please manually check the file structure')
}
