const test = require('ava')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const weatherFixtures = require('./fixtures/weather')

let sandbox = null
const lat = '4.4535114'
const lgn = '-75.194808'
let services = null
let WeatherStub = {
  index: null
}

test.beforeEach(async () => {
  sandbox = sinon.createSandbox()

  // Service index Stub
  WeatherStub.index = sandbox.stub()
  WeatherStub.index.withArgs(lat, lgn).returns(Promise.resolve(weatherFixtures.single))

  services = proxyquire('../services', {
    './weather.service': WeatherStub,
  })

})

test.afterEach(() => {
  sandbox && sandbox.restore()
})

test('WeatherService', t => {
  t.truthy(services.weatherService, 'weatherService service should exist')
})

test.serial('weatherService#Index', async t => {
  const weather = await services.weatherService.index(lat, lgn)
  t.true(WeatherStub.index.called, 'index should be called on model')
  t.true(WeatherStub.index.calledOnce, 'index should be called once')
  t.deepEqual(weather, weatherFixtures.single)
})


