const { expect } = require('chai')

const { exerciseTwo } = require('../../src/exercise-two/service')
const worldCountries = require('../../worldCountries.json')

describe('integrity test for exercise-two', () => {
  it('should test the return to be an array of messages', async () => {
    const result = exerciseTwo()
    expect(result).to.be.an('array')
  })
  it('should test the return to be an array and have a size of 4', async () => {
    const result = exerciseTwo()
    expect(new Set(result)).to.have.property('size', 4)
  })
  it('should return the right number of countries', async () => {
    const result = exerciseTwo()[0]
    expect(result.split(': ')[1].split(' - ')[0]).equal(worldCountries.length.toString())
  })
  it('should return the country that has the most languages and has germany as one of them', async () => {
    const filteredCountries = worldCountries.filter(c => c.languages.includes('de'))
    const expected = filteredCountries.reduce((prev, curr) => prev.languages.length > curr.languages.length ? prev : curr)
    const result = exerciseTwo()[1]
    expect(result.split(': ')[1].split(' - ')[0]).contains(expected.country)
  })
  it('should return the country that has the most languages', async () => {
    const result = exerciseTwo()[2]
    const expected = worldCountries.reduce((prev, curr) => prev.languages.length > curr.languages.length ? prev : curr)
    expect(result.split(': ')[1].split(' - ')[0]).contains(expected.country)
  })
  it('should return the the most common official language', async () => {
    const languagesCounters = {}
    worldCountries.forEach(l => {
      l.languages.forEach(lang => {
        if (languagesCounters[lang]) {
          languagesCounters[lang] += 1
        } else {
          languagesCounters[lang] = 1
        }
      })
    })
    const mostCommonLanguage = Object.keys(languagesCounters).reduce((prev, curr) => languagesCounters[prev] > languagesCounters[curr] ? prev : curr)
    const result = exerciseTwo()[3]
    expect(result.split(': ')[1].split(' - ')[0]).contains(mostCommonLanguage)
  })
})
