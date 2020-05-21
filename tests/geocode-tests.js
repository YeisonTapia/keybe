'use strict'

const test = require('ava')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const ageocodeFixtures = require('./fixtures/geocode')

let sandbox = null
const city = 'Ibague'
let services = null
const GeocodeStub = {
  index: null
}

test.beforeEach(async () => {
  sandbox = sinon.createSandbox()

  // Service index Stub
  GeocodeStub.index = sandbox.stub()
  GeocodeStub.index.withArgs(city).returns(Promise.resolve(ageocodeFixtures.single))

  services = proxyquire('../services', {
    './geocode.service': GeocodeStub
  })
})

test.afterEach(() => {
  sandbox && sandbox.restore()
})

test('GeocodeService', t => {
  t.truthy(services.geocodeService, 'Geocode service should exist')
})

test.serial('GeocodeService#Index', async t => {
  const geocode = await services.geocodeService.index(city)
  t.true(GeocodeStub.index.called, 'index should be called on model')
  t.true(GeocodeStub.index.calledOnce, 'index should be called once')
  t.deepEqual(geocode, ageocodeFixtures.single)
})
