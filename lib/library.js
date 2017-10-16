'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.argon2dVerify = exports.argon2iVerify = exports.argon2dHashRaw = exports.argon2dHashEncoded = exports.argon2iHashRaw = exports.argon2iHashEncoded = exports.argon2Encodedlen = exports.argon2ErrorMessage = undefined;

var _ffi = require('ffi');

var _ffi2 = _interopRequireDefault(_ffi);

var _ref = require('ref');

var _ref2 = _interopRequireDefault(_ref);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dylib = _path2.default.join(__dirname, '..', 'build', 'Release', 'argon2');
var lib = new _ffi2.default.Library(dylib, {
  argon2i_hash_encoded: ['int', ['uint32', 'uint32', 'uint32', // t_cost, m_cost, p
  _ref2.default.refType('void'), 'size_t', // password
  _ref2.default.refType('void'), 'size_t', // salt
  'size_t', // hash length
  _ref2.default.refType('char'), 'size_t']], // encoded hash

  argon2i_hash_raw: ['int', ['uint32', 'uint32', 'uint32', // t_cost, m_cost, p
  _ref2.default.refType('void'), 'size_t', // password
  _ref2.default.refType('void'), 'size_t', // salt
  _ref2.default.refType('void'), 'size_t']], // hash output

  argon2d_hash_encoded: ['int', ['uint32', 'uint32', 'uint32', // t_cost, m_cost, p
  _ref2.default.refType('void'), 'size_t', // password
  _ref2.default.refType('void'), 'size_t', // salt
  'size_t', // hash length
  _ref2.default.refType('char'), 'size_t']], // encoded hash

  argon2d_hash_raw: ['int', ['uint32', 'uint32', 'uint32', // t_cost, m_cost, p
  _ref2.default.refType('void'), 'size_t', // password
  _ref2.default.refType('void'), 'size_t', // salt
  _ref2.default.refType('void'), 'size_t']], // hash output

  argon2i_verify: ['int', [_ref2.default.refType('char'), // encoded
  _ref2.default.refType('void'), // password
  'size_t']], // password length

  argon2d_verify: ['int', [_ref2.default.refType('char'), // encoded
  _ref2.default.refType('void'), // password
  'size_t']], // password length

  argon2_encodedlen: ['size_t', ['uint32', 'uint32', 'uint32', // t_cost, m_cost, p
  'uint32', 'uint32']], // salt length, hash length

  argon2_error_message: ['string', ['int']] // error_code
});

var argon2ErrorMessage = lib.argon2_error_message,
    argon2Encodedlen = lib.argon2_encodedlen,
    argon2iHashEncoded = lib.argon2i_hash_encoded,
    argon2iHashRaw = lib.argon2i_hash_raw,
    argon2dHashEncoded = lib.argon2d_hash_encoded,
    argon2dHashRaw = lib.argon2d_hash_raw,
    argon2iVerify = lib.argon2i_verify,
    argon2dVerify = lib.argon2d_verify;
exports.argon2ErrorMessage = argon2ErrorMessage;
exports.argon2Encodedlen = argon2Encodedlen;
exports.argon2iHashEncoded = argon2iHashEncoded;
exports.argon2iHashRaw = argon2iHashRaw;
exports.argon2dHashEncoded = argon2dHashEncoded;
exports.argon2dHashRaw = argon2dHashRaw;
exports.argon2iVerify = argon2iVerify;
exports.argon2dVerify = argon2dVerify;