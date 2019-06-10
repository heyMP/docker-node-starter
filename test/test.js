const assert = require('assert');
const service = require('../index.js')

describe('general', function () {
  it('It should display a nice greeting', async function () {
    const greeting = service()
    return greeting.includes(':)')
  })
});