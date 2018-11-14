/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.tensorflow.RecvBufRespExtra', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tensorflow.RecvBufRespExtra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.RecvBufRespExtra.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.RecvBufRespExtra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.RecvBufRespExtra.displayName = 'proto.tensorflow.RecvBufRespExtra';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.RecvBufRespExtra.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tensorflow.RecvBufRespExtra.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.RecvBufRespExtra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.RecvBufRespExtra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RecvBufRespExtra.toObject = function(includeInstance, msg) {
  var f, obj = {
    tensorContentList: msg.getTensorContentList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tensorflow.RecvBufRespExtra}
 */
proto.tensorflow.RecvBufRespExtra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.RecvBufRespExtra;
  return proto.tensorflow.RecvBufRespExtra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.RecvBufRespExtra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.RecvBufRespExtra}
 */
proto.tensorflow.RecvBufRespExtra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addTensorContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tensorflow.RecvBufRespExtra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.RecvBufRespExtra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.RecvBufRespExtra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RecvBufRespExtra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTensorContentList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes tensor_content = 1;
 * @return {!Array.<string>}
 */
proto.tensorflow.RecvBufRespExtra.prototype.getTensorContentList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes tensor_content = 1;
 * This is a type-conversion wrapper around `getTensorContentList()`
 * @return {!Array.<string>}
 */
proto.tensorflow.RecvBufRespExtra.prototype.getTensorContentList_asB64 = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.bytesListAsB64(
      this.getTensorContentList()));
};


/**
 * repeated bytes tensor_content = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTensorContentList()`
 * @return {!Array.<!Uint8Array>}
 */
proto.tensorflow.RecvBufRespExtra.prototype.getTensorContentList_asU8 = function() {
  return /** @type {!Array.<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTensorContentList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.tensorflow.RecvBufRespExtra.prototype.setTensorContentList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.tensorflow.RecvBufRespExtra.prototype.addTensorContent = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.tensorflow.RecvBufRespExtra.prototype.clearTensorContentList = function() {
  this.setTensorContentList([]);
};


goog.object.extend(exports, proto.tensorflow);
