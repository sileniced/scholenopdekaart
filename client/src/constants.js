export const baseUrl = 'http://localhost:4000'

//Maximum number of schools in a comparison.
//If this number is increased, the number of colors in schoolColors also has to be increased
export const maxSchools = 5

//Available comparisons and their labels
export const filters = {
  naw: 'Ligging en contactgegevens',
  profiel: 'Profiel van de school',
  leerlingen: 'Aantal leerlingen',
  verdelingLestijden: 'Verdeling van de lestijden',
  specialisten: 'Ondersteuning van specialisten',
  tijden: 'Schooltijden en opvang',
  eindtoets: 'Resultaten eindtoets',
  tevredenheid: 'Waardering van de ouders en leerlingen',
}

export const filtersOndertitels = {
  naw: 'Waar vind ik de scholen en wat zijn de contactgegevens?',
  profiel: 'Hoe omschrijft de school zichzelf?',
  leerlingen: 'Hoeveel leerlingen hebben de scholen en wat is het gemiddelde aantal leerlingen per klas in 2017/2018?',
  verdelingLestijden: 'Hoe ziet een gemiddelde week er uit?',
  specialisten: 'Welke gediplomeerde specialisten zijn structureel binnen de school aanwezig?',
  tijden: 'Welke schooltijden/opvangtijden hanteren de scholen?',
  eindtoets: 'Wat zijn de gemiddelde scores op de eindtoets (ROUTE 8) van de scholen?',
  tevredenheid: 'Hoe tevreden zijn ouders en leerlingen over de school?',
}

export const denominatie = {
  1: 'Rooms-Katholiek',
  2: 'Openbaar',
  3: 'Algemeen Bijzonder',
  4: 'Overige',
  5: 'Protestant-Christelijk',
  6: 'Samenwerking',
  7: 'Confessioneel overig',
}

export const typeOnderwijs = {
  1: 'Basisonderwijs',
  2: 'Speciaal basisonderwijs',
  3: 'Speciaal onderwijs',
}

export const conceptOnderwijs = {
  2: 'Ervaringsgericht Onderwijs',
  3: 'Freinet',
  4: 'Ontwikkelingsgericht Onderwijs',
  5: 'Montessori',
  6: 'Jenaplan',
  7: 'Vrijeschool',
  9: 'Nieuw / natuurlijk / conceptueel leren',
  10: 'Jenaplan/Montessori',
  11: 'Dalton',
  12: 'Dalton/Jenaplan',
  13: 'Eigen tempo werkwijze',
}

export const schoolColors = ['red', 'orange', 'green', 'blue', 'purple']

export const allSpecialisten = () => ({
  'Dylexsiespecialist': false,
  'Gedragsspecialist': false,
  'Intern begeleider': false,
  'Klassenassistent': false,
  'Onderwijsassistent': false,
  'Orthopedagoog': false,
  'Rekenspecialist': false,
  'Remedial teacher': false,
  'Specialist hoogbegaafdheid': false,
  'Taalspecialist': false,
  'Fysiotherapeut': false,
  'Ergotherapeut': false,
  'Zorgassistent': false,
})