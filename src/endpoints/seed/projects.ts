export const projects = [
  {
    title: 'Oude Fabriek Rotterdam',
    description: 'Complete demontage van een voormalige staalfabriek van 15.000m² inclusief asbestsanering en grondwerk.',
    category: 'demolition' as const,
    completed: new Date('2024-06-15').toISOString(),
    featured: true,
  },
  {
    title: 'Kantoorcomplex Zuidas',
    description: 'Gecontroleerde sloop van een 12-verdiepingen kantoorgebouw in stedelijk gebied met minimale overlast.',
    category: 'demolition' as const,
    completed: new Date('2024-03-20').toISOString(),
    featured: true,
  },
  {
    title: 'Winkelcentrum Renovatie',
    description: 'Selectieve strip-out van 15.000m² winkelruimte voor herontwikkeling tot mixed-use complex.',
    category: 'renovation' as const,
    completed: new Date('2023-11-10').toISOString(),
    featured: true,
  },
  {
    title: 'Haventerrein Demontage',
    description: 'Demontage van havenkranen, silo\'s en opslagloodsen op een voormalig haventerrein.',
    category: 'demolition' as const,
    completed: new Date('2023-09-05').toISOString(),
    featured: true,
  },
  {
    title: 'Woningbouwproject Den Haag',
    description: 'Sloop van verouderde portiekflats om plaats te maken voor 200 nieuwe duurzame woningen.',
    category: 'demolition' as const,
    completed: new Date('2023-07-22').toISOString(),
    featured: true,
  },
  {
    title: 'Ziekenhuis Renovatie',
    description: 'Gefaseerde strip-out van ziekenhuisvleugels tijdens operationele bezetting van het gebouw.',
    category: 'renovation' as const,
    completed: new Date('2022-12-15').toISOString(),
    featured: true,
  },
]
