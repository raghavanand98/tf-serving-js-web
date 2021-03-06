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

var tensorflow_core_framework_tensor_pb = require('../../../tensorflow/core/framework/tensor_pb.js');
goog.exportSymbol('proto.tensorflow.NamedTensorProto', null, global);

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
proto.tensorflow.NamedTensorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.NamedTensorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.NamedTensorProto.displayName = 'proto.tensorflow.NamedTensorProto';
}


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
proto.tensorflow.NamedTensorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.NamedTensorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.NamedTensorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.NamedTensorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tensor: (f = msg.getTensor()) && tensorflow_core_framework_tensor_pb.TensorProto.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.NamedTensorProto}
 */
proto.tensorflow.NamedTensorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.NamedTensorProto;
  return proto.tensorflow.NamedTensorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.NamedTensorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.NamedTensorProto}
 */
proto.tensorflow.NamedTensorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new tensorflow_core_framework_tensor_pb.TensorProto;
      reader.readMessage(value,tensorflow_core_framework_tensor_pb.TensorProto.deserializeBinaryFromReader);
      msg.setTensor(value);
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
proto.tensorflow.NamedTensorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.NamedTensorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.NamedTensorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.NamedTensorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTensor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tensorflow_core_framework_tensor_pb.TensorProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.tensorflow.NamedTensorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tensorflow.NamedTensorProto.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TensorProto tensor = 2;
 * @return {?proto.tensorflow.TensorProto}
 */
proto.tensorflow.NamedTensorProto.prototype.getTensor = function() {
  return /** @type{?proto.tensorflow.TensorProto} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_tensor_pb.TensorProto, 2));
};


/** @param {?proto.tensorflow.TensorProto|undefined} value */
proto.tensorflow.NamedTensorProto.prototype.setTensor = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.NamedTensorProto.prototype.clearTensor = function() {
  this.setTensor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.NamedTensorProto.prototype.hasTensor = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.tensorflow);
