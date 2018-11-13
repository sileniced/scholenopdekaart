export const baseUrl = 'http://localhost:4000'

//Maximum number of schools in a comparison.
//If this number is increased, the number of colors in schoolColors also has to be increased
export const maxSchools = 5; 

//Available comparisons and their labels
export const filters = {
    liggingContactgegevens: "Ligging en contactgegevens",
    profielSchool: "Profiel van de school",
    aantalLeerlingen: "Aantal leerlingen",
    verdelingLestijden: "Verdeling van de lestijden",
    ondersteuningSpecialisten: "Ondersteuning van specialisten",
    schooltijdenOpvang: "Schooltijden en opvang",
    resultatenEindtoets: "Resultaten eindtoets",
    waarderingOudersEnLeerlingen: "Waardering van de ouders en leerlingen"
}

export const denominatie = {
    1: "Rooms-Katholiek",
    2: "Openbaar",
    3: "Algemeen Bijzonder",
    4: "Overige",
    5: "Protestant-Christelijk",
    6: "Samenwerking",
    7: "Confessioneel overig"
}

export const typeOnderwijs = {
    1: "Basisonderwijs",
    2: "Speciaal basisonderwijs",
    3: "Speciaal onderwijs"
}

export const schoolColors = ["red", "orange", "green", "blue", "purple"]