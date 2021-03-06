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

var tensorflow_core_framework_graph_pb = require('../../../tensorflow/core/framework/graph_pb.js');
var tensorflow_core_framework_tensor_shape_pb = require('../../../tensorflow/core/framework/tensor_shape_pb.js');
var tensorflow_core_framework_types_pb = require('../../../tensorflow/core/framework/types_pb.js');
goog.exportSymbol('proto.tensorflow.RemoteFusedGraphExecuteInfo', null, global);
goog.exportSymbol('proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto', null, global);

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
proto.tensorflow.RemoteFusedGraphExecuteInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.RemoteFusedGraphExecuteInfo.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.RemoteFusedGraphExecuteInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.RemoteFusedGraphExecuteInfo.displayName = 'proto.tensorflow.RemoteFusedGraphExecuteInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.repeatedFields_ = [2,3,6,7];



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
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.RemoteFusedGraphExecuteInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.RemoteFusedGraphExecuteInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    remoteGraph: (f = msg.getRemoteGraph()) && tensorflow_core_framework_graph_pb.GraphDef.toObject(includeInstance, f),
    graphInputNodeNameList: jspb.Message.getRepeatedField(msg, 2),
    graphOutputNodeNameList: jspb.Message.getRepeatedField(msg, 3),
    executorName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    serializedExecutorParameters: msg.getSerializedExecutorParameters_asB64(),
    defaultGraphInputTensorShapeList: jspb.Message.toObjectList(msg.getDefaultGraphInputTensorShapeList(),
    proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.toObject, includeInstance),
    defaultGraphOutputTensorShapeList: jspb.Message.toObjectList(msg.getDefaultGraphOutputTensorShapeList(),
    proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.toObject, includeInstance)
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
 * @return {!proto.tensorflow.RemoteFusedGraphExecuteInfo}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.RemoteFusedGraphExecuteInfo;
  return proto.tensorflow.RemoteFusedGraphExecuteInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.RemoteFusedGraphExecuteInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.RemoteFusedGraphExecuteInfo}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorflow_core_framework_graph_pb.GraphDef;
      reader.readMessage(value,tensorflow_core_framework_graph_pb.GraphDef.deserializeBinaryFromReader);
      msg.setRemoteGraph(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addGraphInputNodeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addGraphOutputNodeName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutorName(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSerializedExecutorParameters(value);
      break;
    case 6:
      var value = new proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto;
      reader.readMessage(value,proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.deserializeBinaryFromReader);
      msg.addDefaultGraphInputTensorShape(value);
      break;
    case 7:
      var value = new proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto;
      reader.readMessage(value,proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.deserializeBinaryFromReader);
      msg.addDefaultGraphOutputTensorShape(value);
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
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.RemoteFusedGraphExecuteInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.RemoteFusedGraphExecuteInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRemoteGraph();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tensorflow_core_framework_graph_pb.GraphDef.serializeBinaryToWriter
    );
  }
  f = message.getGraphInputNodeNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getGraphOutputNodeNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getExecutorName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSerializedExecutorParameters_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getDefaultGraphInputTensorShapeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.serializeBinaryToWriter
    );
  }
  f = message.getDefaultGraphOutputTensorShapeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.serializeBinaryToWriter
    );
  }
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
proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.displayName = 'proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto';
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
proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    dtype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    shape: (f = msg.getShape()) && tensorflow_core_framework_tensor_shape_pb.TensorShapeProto.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto;
  return proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tensorflow.DataType} */ (reader.readEnum());
      msg.setDtype(value);
      break;
    case 2:
      var value = new tensorflow_core_framework_tensor_shape_pb.TensorShapeProto;
      reader.readMessage(value,tensorflow_core_framework_tensor_shape_pb.TensorShapeProto.deserializeBinaryFromReader);
      msg.setShape(value);
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
proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDtype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getShape();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tensorflow_core_framework_tensor_shape_pb.TensorShapeProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional DataType dtype = 1;
 * @return {!proto.tensorflow.DataType}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.prototype.getDtype = function() {
  return /** @type {!proto.tensorflow.DataType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.tensorflow.DataType} value */
proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.prototype.setDtype = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional TensorShapeProto shape = 2;
 * @return {?proto.tensorflow.TensorShapeProto}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.prototype.getShape = function() {
  return /** @type{?proto.tensorflow.TensorShapeProto} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_tensor_shape_pb.TensorShapeProto, 2));
};


/** @param {?proto.tensorflow.TensorShapeProto|undefined} value */
proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.prototype.setShape = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.prototype.clearShape = function() {
  this.setShape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto.prototype.hasShape = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GraphDef remote_graph = 1;
 * @return {?proto.tensorflow.GraphDef}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.getRemoteGraph = function() {
  return /** @type{?proto.tensorflow.GraphDef} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_graph_pb.GraphDef, 1));
};


/** @param {?proto.tensorflow.GraphDef|undefined} value */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.setRemoteGraph = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.clearRemoteGraph = function() {
  this.setRemoteGraph(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.hasRemoteGraph = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string graph_input_node_name = 2;
 * @return {!Array.<string>}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.getGraphInputNodeNameList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array.<string>} value */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.setGraphInputNodeNameList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.addGraphInputNodeName = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.clearGraphInputNodeNameList = function() {
  this.setGraphInputNodeNameList([]);
};


/**
 * repeated string graph_output_node_name = 3;
 * @return {!Array.<string>}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.getGraphOutputNodeNameList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array.<string>} value */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.setGraphOutputNodeNameList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.addGraphOutputNodeName = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.clearGraphOutputNodeNameList = function() {
  this.setGraphOutputNodeNameList([]);
};


/**
 * optional string executor_name = 4;
 * @return {string}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.getExecutorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.setExecutorName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes serialized_executor_parameters = 5;
 * @return {string}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.getSerializedExecutorParameters = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes serialized_executor_parameters = 5;
 * This is a type-conversion wrapper around `getSerializedExecutorParameters()`
 * @return {string}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.getSerializedExecutorParameters_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSerializedExecutorParameters()));
};


/**
 * optional bytes serialized_executor_parameters = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSerializedExecutorParameters()`
 * @return {!Uint8Array}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.getSerializedExecutorParameters_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSerializedExecutorParameters()));
};


/** @param {!(string|Uint8Array)} value */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.setSerializedExecutorParameters = function(value) {
  jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * repeated TensorShapeTypeProto default_graph_input_tensor_shape = 6;
 * @return {!Array.<!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto>}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.getDefaultGraphInputTensorShapeList = function() {
  return /** @type{!Array.<!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto, 6));
};


/** @param {!Array.<!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto>} value */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.setDefaultGraphInputTensorShapeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.addDefaultGraphInputTensorShape = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto, opt_index);
};


proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.clearDefaultGraphInputTensorShapeList = function() {
  this.setDefaultGraphInputTensorShapeList([]);
};


/**
 * repeated TensorShapeTypeProto default_graph_output_tensor_shape = 7;
 * @return {!Array.<!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto>}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.getDefaultGraphOutputTensorShapeList = function() {
  return /** @type{!Array.<!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto, 7));
};


/** @param {!Array.<!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto>} value */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.setDefaultGraphOutputTensorShapeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto}
 */
proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.addDefaultGraphOutputTensorShape = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.tensorflow.RemoteFusedGraphExecuteInfo.TensorShapeTypeProto, opt_index);
};


proto.tensorflow.RemoteFusedGraphExecuteInfo.prototype.clearDefaultGraphOutputTensorShapeList = function() {
  this.setDefaultGraphOutputTensorShapeList([]);
};


goog.object.extend(exports, proto.tensorflow);
