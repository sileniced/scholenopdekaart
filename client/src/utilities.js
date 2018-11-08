export const checkPoindAvailability = (schools, poind) => {

  const init = {
    available: [],
    unavailable: [],
  }

  return schools.reduce((a, school) => {

    if (school[poind].rapport) a.available = [...a.available, school]
    else a.unavailable = [...a.unavailable, school]

    return a;

  }, init)
}