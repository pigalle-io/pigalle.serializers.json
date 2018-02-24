/**
 * This file is part of pigalle.serializers.simple-json
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {UndefinedError} = require('@9fv.io/undefined-error')
const {JsonSerializer} = require('../lib/simple-json-serializer')

describe('Class {JsonSerializer}', () => {
  it('should be a function', () => {
    (JsonSerializer).should.be.a.Function()
  })
})

describe('Create a instance of {JsonSerializer} using <new> keyword', () => {
  it('should be an object', () => {
    (new JsonSerializer()).should.be.an.Object()
  })

  it('should be an instance of {JsonSerializer}', () => {
    (new JsonSerializer()).should.be.an.instanceOf(JsonSerializer)
  })

  it('should have an internal property named <type>', () => {
    (new JsonSerializer().internals().get('type')).should.be.not.null()
  })

  it('should have an internal property named <type>', () => {
    (new JsonSerializer().internals().get('type')).should.be.equal('plugins.serializer')
  })
})

describe('Call method without argument: ', () => {
  it('<.serialize> should throw a {UndefinedError}', () => {
    (() => JsonSerializer.factory().serialize()).should.throw(UndefinedError)
  })

  it('<.unserialize> should throw a {UndefinedError}', () => {
    (() => JsonSerializer.factory().unserialize()).should.throw(UndefinedError)
  })
})

describe('Call method with a valid argument: ', () => {
  it('<.serialize> should return a string', () => {
    (JsonSerializer.factory().serialize({name: 'chicken'})).should.be.a.String()
  })

  it('<.unserialize> should return an object', () => {
    (JsonSerializer.factory().unserialize('{"name": "chicken"}')).should.be.an.Object()
  })
})