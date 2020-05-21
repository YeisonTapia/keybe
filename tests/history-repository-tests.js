'use strict'


const test = require('ava')
const sinon = require('sinon')
const proxyquire = require('proxyquire')

let sandbox = null
let historyRepository = null
const HistoryStub = {
  create: null
}
const newHistory = {
  city: 'Ibague',
  ip: '::1',
  response: '{"latitude":4.4535114,"longitude":-75.194808,"timezone":"America/Bogota","currently":{"time":1589942099,"summary":"Overcast","icon":"cloudy"}'
}

test.beforeEach(async () => {
  sandbox = sinon.createSandbox()

  HistoryStub.create = sandbox.stub()
  HistoryStub.create.withArgs(newHistory).returns(Promise.resolve({
    toJSON () {
      return newHistory
    }
  }))

  historyRepository = proxyquire('../respositories/history.repository.js', {
    '../models/history': HistoryStub
  })
})

test.afterEach(() => {
  sandbox && sandbox.restore()
})

test('HistoryRepo', async t => {
  const history = await historyRepository.create(newHistory)
  t.true(HistoryStub.create.called, 'create should be called on model')
  t.true(HistoryStub.create.calledOnce, 'create should be called once')
  t.deepEqual(history, newHistory)
})
