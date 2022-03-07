const { expect } = require('chai')

const { handlerGet } = require('../../src/exercise-one/controller')
const { exerciseOne } = require('../../src/exercise-one/service')

const errorMessage = {
  success: false,
  statusCode: 400,
  message: 'until must be a number'
  }

describe('integrity test for exercise-one', () => {
  it('should return string \'Nuts\' when 5', async () => {
    const resultSet = exerciseOne(5);
    expect(resultSet[4]).equal('Nuts')
  })
  it('should return string \'Visual\' when 3 ', async () => {
    const resultSet = exerciseOne(3);
    expect(resultSet[2]).equal('Visual')
  })
  it('should return string \'Visual Nuts\' when 15', async () => {
    const resultSet = exerciseOne(15);
    expect(resultSet[14]).equal('Visual Nuts')
  })
  it('should return Error when passing anything but integer or positive integer', async () => {
    try {
      await handlerGet({ params: { until: 'something' } }, { status: (code) => { return { json: (message) => { } } }, message: null }, (e) => { throw e })
    } catch (e) {
      expect(e.toString()).equal('Error: "until" have to be a number')
    }
  })
})