/**
 * This file is part of pigalle.serializers.simple-json
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module simple-json-serializer
 * @description A simple JSON serializer for the Pigalle framework.
 * @example
 *
 * const {JsonSerializer} = require('@pigalle/serializers.simple-json')
 *
 * // Create a new {JsonSerializer}
 * const jsonSerializer = JsonSerializer.factory()
 *
 * // Serialize an object
 * const s = jsonSerializer.serialize({name: 'chicken'}) // returns a {string} equal to {"name": "chicken"}
 *
 * // Unserialize a string.
 * const o = jsonSerializer.unserialize(s) // returns an {object} equal to {name: 'chicken'}
 *
 */

const {UndefinedError} = require('@9fv.io/undefined-error')
const {SerializerPluginBase} = require('@pigalle/plugins.serializer')

const CONSTS = {
  SCOPE: {
    VALUE: 'serializer'
  },
  NAME: {
    VALUE: 'simpleJson'
  }
}

/**
 * A simple JSON serializer usable with the Pigalle framework.
 *
 * @class
 * @public
 */
class JsonSerializer extends SerializerPluginBase {
  constructor (...args) {
    super(...args)
    this.setName(CONSTS.NAME.VALUE)
  }

  /**
   * Serialize the provided {object} as a JSON {string}
   *
   * @param o {object} - The object to serialize.
   * @return {string} The JSON string.
   * @throws {UndefinedError} if object is not defined.
   * @public
   */
  serialize (o) {
    if (!o) {
      throw new UndefinedError()
    }
    return JSON.stringify(o)
  }

  /**
   * Unerialize the provided {string}.
   *
   * @param s {string} - The {string} to unserialize.
   * @return {object} An {object}.
   * @throws {UndefinedError} if object is not defined.
   * @public
   */
  unserialize (s) {
    if (!s) {
      throw new UndefinedError()
    }
    return JSON.parse(s)
  }
}

module.exports = {}
module.exports.JsonSerializer = JsonSerializer
