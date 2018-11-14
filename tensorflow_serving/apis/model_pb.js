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

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.exportSymbol('proto.tensorflow.serving.ModelSpec', null, global);

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
proto.tensorflow.serving.ModelSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tensorflow.serving.ModelSpec.oneofGroups_);
};
goog.inherits(proto.tensorflow.serving.ModelSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.ModelSpec.displayName = 'proto.tensorflow.serving.ModelSpec';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tensorflow.serving.ModelSpec.oneofGroups_ = [[2,4]];

/**
 * @enum {number}
 */
proto.tensorflow.serving.ModelSpec.VersionChoiceCase = {
  VERSION_CHOICE_NOT_SET: 0,
  VERSION: 2,
  VERSION_LABEL: 4
};

/**
 * @return {proto.tensorflow.serving.ModelSpec.VersionChoiceCase}
 */
proto.tensorflow.serving.ModelSpec.prototype.getVersionChoiceCase = function() {
  return /** @type {proto.tensorflow.serving.ModelSpec.VersionChoiceCase} */(jspb.Message.computeOneofCase(this, proto.tensorflow.serving.ModelSpec.oneofGroups_[0]));
};



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
proto.tensorflow.serving.ModelSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.ModelSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.ModelSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.ModelSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: (f = msg.getVersion()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    versionLabel: jspb.Message.getFieldWithDefault(msg, 4, ""),
    signatureName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.tensorflow.serving.ModelSpec}
 */
proto.tensorflow.serving.ModelSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.ModelSpec;
  return proto.tensorflow.serving.ModelSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.ModelSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.ModelSpec}
 */
proto.tensorflow.serving.ModelSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionLabel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignatureName(value);
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
proto.tensorflow.serving.ModelSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.ModelSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.ModelSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.ModelSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSignatureName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.tensorflow.serving.ModelSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tensorflow.serving.ModelSpec.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int64Value version = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.tensorflow.serving.ModelSpec.prototype.getVersion = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.tensorflow.serving.ModelSpec.prototype.setVersion = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.tensorflow.serving.ModelSpec.oneofGroups_[0], value);
};


proto.tensorflow.serving.ModelSpec.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.ModelSpec.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string version_label = 4;
 * @return {string}
 */
proto.tensorflow.serving.ModelSpec.prototype.getVersionLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.tensorflow.serving.ModelSpec.prototype.setVersionLabel = function(value) {
  jspb.Message.setOneofField(this, 4, proto.tensorflow.serving.ModelSpec.oneofGroups_[0], value);
};


proto.tensorflow.serving.ModelSpec.prototype.clearVersionLabel = function() {
  jspb.Message.setOneofField(this, 4, proto.tensorflow.serving.ModelSpec.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.ModelSpec.prototype.hasVersionLabel = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string signature_name = 3;
 * @return {string}
 */
proto.tensorflow.serving.ModelSpec.prototype.getSignatureName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.tensorflow.serving.ModelSpec.prototype.setSignatureName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.tensorflow.serving);
