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

var tensorflow_serving_config_model_server_config_pb = require('../../tensorflow_serving/config/model_server_config_pb.js');
var tensorflow_serving_util_status_pb = require('../../tensorflow_serving/util/status_pb.js');
goog.exportSymbol('proto.tensorflow.serving.ReloadConfigRequest', null, global);
goog.exportSymbol('proto.tensorflow.serving.ReloadConfigResponse', null, global);

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
proto.tensorflow.serving.ReloadConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.serving.ReloadConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.ReloadConfigRequest.displayName = 'proto.tensorflow.serving.ReloadConfigRequest';
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
proto.tensorflow.serving.ReloadConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.ReloadConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.ReloadConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.ReloadConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && tensorflow_serving_config_model_server_config_pb.ModelServerConfig.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.serving.ReloadConfigRequest}
 */
proto.tensorflow.serving.ReloadConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.ReloadConfigRequest;
  return proto.tensorflow.serving.ReloadConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.ReloadConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.ReloadConfigRequest}
 */
proto.tensorflow.serving.ReloadConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorflow_serving_config_model_server_config_pb.ModelServerConfig;
      reader.readMessage(value,tensorflow_serving_config_model_server_config_pb.ModelServerConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
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
proto.tensorflow.serving.ReloadConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.ReloadConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.ReloadConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.ReloadConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tensorflow_serving_config_model_server_config_pb.ModelServerConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional ModelServerConfig config = 1;
 * @return {?proto.tensorflow.serving.ModelServerConfig}
 */
proto.tensorflow.serving.ReloadConfigRequest.prototype.getConfig = function() {
  return /** @type{?proto.tensorflow.serving.ModelServerConfig} */ (
    jspb.Message.getWrapperField(this, tensorflow_serving_config_model_server_config_pb.ModelServerConfig, 1));
};


/** @param {?proto.tensorflow.serving.ModelServerConfig|undefined} value */
proto.tensorflow.serving.ReloadConfigRequest.prototype.setConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.serving.ReloadConfigRequest.prototype.clearConfig = function() {
  this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.ReloadConfigRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.tensorflow.serving.ReloadConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.serving.ReloadConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.ReloadConfigResponse.displayName = 'proto.tensorflow.serving.ReloadConfigResponse';
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
proto.tensorflow.serving.ReloadConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.ReloadConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.ReloadConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.ReloadConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && tensorflow_serving_util_status_pb.StatusProto.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.serving.ReloadConfigResponse}
 */
proto.tensorflow.serving.ReloadConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.ReloadConfigResponse;
  return proto.tensorflow.serving.ReloadConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.ReloadConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.ReloadConfigResponse}
 */
proto.tensorflow.serving.ReloadConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorflow_serving_util_status_pb.StatusProto;
      reader.readMessage(value,tensorflow_serving_util_status_pb.StatusProto.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.tensorflow.serving.ReloadConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.ReloadConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.ReloadConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.ReloadConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tensorflow_serving_util_status_pb.StatusProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional StatusProto status = 1;
 * @return {?proto.tensorflow.serving.StatusProto}
 */
proto.tensorflow.serving.ReloadConfigResponse.prototype.getStatus = function() {
  return /** @type{?proto.tensorflow.serving.StatusProto} */ (
    jspb.Message.getWrapperField(this, tensorflow_serving_util_status_pb.StatusProto, 1));
};


/** @param {?proto.tensorflow.serving.StatusProto|undefined} value */
proto.tensorflow.serving.ReloadConfigResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.serving.ReloadConfigResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.ReloadConfigResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.tensorflow.serving);
