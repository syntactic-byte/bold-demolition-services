import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.join(__dirname, '..', 'scripts', 'seed-translations.ts')
let content = readFileSync(filePath, 'utf8')

// Add missing keys to each language

// Swedish (sv)
content = content.replace(
  /  sv: \{[\s\S]*?about: \{\s+title: 'Vilka Vi Är',\s+description: 'Över 25 års erfarenhet av manuell rivning\.',/,
  `  sv: {
    about: {
      title: 'Vilka Vi Är',
      titleShort: 'Mer Om Oss',
      description: 'Över 25 års erfarenhet av manuell rivning.',
      certifications: 'VCA** certifierad och fullt försäkrad',
      equipment: 'Modern maskinpark och erfarna proffs',
      recycling: '98% återvinning av allt rivningsavfall',
      coverage: 'Nationell täckning med lokal service',
      yearsActive: 'År Aktiva',
      projects: 'Projekt',
      employees: 'Anställda',
      recyclingStat: 'Återvinning',
      moreAbout: 'Mer Om Oss',`,
)

// Finnish (fi)
content = content.replace(
  /  fi: \{[\s\S]*?about: \{\s+title: 'Keitä Me Olemme',\s+description: 'Yli 25 vuoden kokemus käsityömäisestä purkutyöstä\.',/,
  `  fi: {
    about: {
      title: 'Keitä Me Olemme',
      titleShort: 'Lue Lisää',
      description: 'Yli 25 vuoden kokemus käsityömäisestä purkutyöstä.',
      certifications: 'VCA** sertifioitu ja täysin vakuutettu',
      equipment: 'Moderni kalusto ja kokeneet ammattilaiset',
      recycling: '98% kierrätys kaikista purkujätteistä',
      coverage: 'Valtakunnallinen kattavuus paikallisella palvelulla',
      yearsActive: 'Vuotta Toiminnassa',
      projects: 'Projektit',
      employees: 'Työntekijää',
      recyclingStat: 'Kierrätys',
      moreAbout: 'Lue Lisää',`,
)

// Polish (pl)
content = content.replace(
  /  pl: \{[\s\S]*?about: \{\s+title: 'Kim Jesteśmy',\s+description: 'Ponad 25 lat doświadczenia w manualnym burzeniu\.',/,
  `  pl: {
    about: {
      title: 'Kim Jesteśmy',
      titleShort: 'Dowiedz się Więcej',
      description: 'Ponad 25 lat doświadczenia w manualnym burzeniu.',
      certifications: 'Certyfikowany VCA** i w pełni ubezpieczony',
      equipment: 'Nowoczesny sprzęt i doświadczeni profesjonaliści',
      recycling: '98% recyklingu wszystkich odpadów rozbiórkowych',
      coverage: 'Zasięg krajowy z lokalną obsługą',
      yearsActive: 'Lat Aktywności',
      projects: 'Projektów',
      employees: 'Pracowników',
      recyclingStat: 'Recykling',
      moreAbout: 'Dowiedz się Więcej',`,
)

// Chinese (zh)
content = content.replace(
  /  zh: \{[\s\S]*?about: \{\s+title: '关于我们',\s+description: '超过25年手工拆除经验。',/,
  `  zh: {
    about: {
      title: '关于我们',
      titleShort: '了解更多',
      description: '超过25年手工拆除经验。',
      certifications: 'VCA** 认证且完全投保',
      equipment: '现代化机械和经验丰富的专业人员',
      recycling: '98%的拆除废料回收率',
      coverage: '全国覆盖，本地服务',
      yearsActive: '活跃年数',
      projects: '项目',
      employees: '员工',
      recyclingStat: '回收',
      moreAbout: '了解更多',`,
)

// Japanese (ja)
content = content.replace(
  /  ja: \{[\s\S]*?about: \{\s+title: '私たちについて',\s+description: '手作業による解体の経験25年以上。',/,
  `  ja: {
    about: {
      title: '私たちについて',
      titleShort: '詳しく知る',
      description: '手作業による解体の経験25年以上。',
      certifications: 'VCA** 認定、完全保険付き',
      equipment: '最新機械と経験豊富な専門家',
      recycling: '解体廃棄物の98%をリサイクル',
      coverage: '全国カバレッジ、ローカルサービス',
      yearsActive: '活動年数',
      projects: 'プロジェクト',
      employees: '社員',
      recyclingStat: 'リサイクル',
      moreAbout: '詳しく知る',`,
)

// Portuguese (pt)
content = content.replace(
  /  pt: \{[\s\S]*?about: \{\s+title: 'Quem Somos',\s+description: 'Mais de 25 anos de experiência em demolição manual.',/,
  `  pt: {
    about: {
      title: 'Quem Somos',
      titleShort: 'Saiba Mais',
      description: 'Mais de 25 anos de experiência em demolição manual.',
      certifications: 'Certificado VCA** e totalmente segurado',
      equipment: 'Maquinaria moderna e profissionais experientes',
      recycling: '98% de reciclagem de todos os resíduos de demolição',
      coverage: 'Cobertura nacional com serviço local',
      yearsActive: 'Anos de Atividade',
      projects: 'Projetos',
      employees: 'Funcionários',
      recyclingStat: 'Reciclagem',
      moreAbout: 'Saiba Mais',`,
)

// Turkish (tr)
content = content.replace(
  /  tr: \{[\s\S]*?about: \{\s+title: 'Biz Kimiz',\s+description: 'Manuel yıkımda 25 yılı aşkın deneyim.',/,
  `  tr: {
    about: {
      title: 'Biz Kimiz',
      titleShort: 'Daha Fazla',
      description: 'Manuel yıkımda 25 yılı aşkın deneyim.',
      certifications: 'VCA** sertifikalı ve tamamen sigortalı',
      equipment: 'Modern makine parkı ve deneyimli profesyoneller',
      recycling: 'Tüm yıkım atıklarının %98 i geri dönüştürülüyor',
      coverage: 'Yerel hizmetle ulusal kapsam',
      yearsActive: 'Aktif Yıllar',
      projects: 'Projeler',
      employees: 'Çalışanlar',
      recyclingStat: 'Geri Dönüşüm',
      moreAbout: 'Daha Fazla',`,
)

// Russian (ru)
content = content.replace(
  /  ru: \{[\s\S]*?about: \{\s+title: 'Кто Мы',\s+description: 'Более 25 лет опыта в ручном сносе.',/,
  `  ru: {
    about: {
      title: 'Кто Мы',
      titleShort: 'Узнайте Больше',
      description: 'Более 25 лет опыта в ручном сносе.',
      certifications: 'Сертифицировано VCA** и полностью застраховано',
      equipment: 'Современная техника и опытные профессионалы',
      recycling: '98% переработки всех отходов сноса',
      coverage: 'Национальное покрытие с локальным обслуживанием',
      yearsActive: 'Лет Активности',
      projects: 'Проектов',
      employees: 'Сотрудников',
      recyclingStat: 'Переработка',
      moreAbout: 'Узнайте Больше',`,
)

writeFileSync(filePath, content)
console.log('✅ Fixed all translation files!')
