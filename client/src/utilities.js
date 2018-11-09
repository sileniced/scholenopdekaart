export const checkPoindAvailability = (schools, poind) => ({
  available:    schools.filter(school => !!(school[poind] && school[poind].rapport)),
  unavailable:  schools.filter(school => !(school[poind] && school[poind].rapport)),
})