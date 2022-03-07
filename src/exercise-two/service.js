const res = require('express/lib/response')
const worldCountries = require('../../worldCountries.json')

const exerciseTwo = () => {
  // Write a function in javascript that:
  // - returns the number of countries in the world
  // - finds the country with the most official languages, where they officially speak German
  // (de). - that counts all the official languages spoken in the listed countries.
  // - to find the country with the highest number of official languages.
  // - to find the most common official language(s), of all countries.

  let countryWithMostLanguagesAndHasGermany = { languages: [] }
  let countryWithMostLanguages = { languages: [] }
  const allLanguages = []

  try {
    worldCountries.forEach(c => {
      allLanguages.push(...c.languages)
      if (c.languages.includes('de') && countryWithMostLanguagesAndHasGermany.languages.length < c.languages.length) {
        countryWithMostLanguagesAndHasGermany = c
      }
      if (countryWithMostLanguages.languages.length < c.languages.length) {
        countryWithMostLanguages = c
      }
    })

    const languagesCounters = {}
    for (const element of Object.values(allLanguages)) {
      if (languagesCounters[element]) {
        languagesCounters[element] += 1
      } else {
        languagesCounters[element] = 1
      }
    }

    const mostCommonLanguage = Object.keys(languagesCounters).reduce((prev, curr) => languagesCounters[prev] > languagesCounters[curr] ? prev : curr)

    return [
      `The number of countries that exists on the provided array is: ${worldCountries.length} - ${worldCountries.map(c => c.country).join(', ')}`,
      `Country with most official languages that can speak germany on the provided array is: ${countryWithMostLanguagesAndHasGermany.country} - ${countryWithMostLanguagesAndHasGermany.languages.length}.`,
      `The Country with most official languages on the provided array is: ${countryWithMostLanguages.country} - ${countryWithMostLanguages.languages.length}.`,
      `The most common official language of all countries provided in the array is: ${mostCommonLanguage}`
    ]
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports = { exerciseTwo }
