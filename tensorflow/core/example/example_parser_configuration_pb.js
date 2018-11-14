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

var tensorflow_core_framework_tensor_shape_pb = require('../../../tensorflow/core/framework/tensor_shape_pb.js');
var tensorflow_core_framework_tensor_pb = require('../../../tensorflow/core/framework/tensor_pb.js');
var tensorflow_core_framework_types_pb = require('../../../tensorflow/core/framework/types_pb.js');
goog.exportSymbol('proto.tensorflow.ExampleParserConfiguration', null, global);
goog.exportSymbol('proto.tensorflow.FeatureConfiguration', null, global);
goog.exportSymbol('proto.tensorflow.FixedLenFeatureProto', null, global);
goog.exportSymbol('proto.tensorflow.VarLenFeatureProto', null, global);

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
proto.tensorflow.VarLenFeatureProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.VarLenFeatureProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.VarLenFeatureProto.displayName = 'proto.tensorflow.VarLenFeatureProto';
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
proto.tensorflow.VarLenFeatureProto.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.VarLenFeatureProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.VarLenFeatureProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.VarLenFeatureProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    dtype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    valuesOutputTensorName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    indicesOutputTensorName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    shapesOutputTensorName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.tensorflow.VarLenFeatureProto}
 */
proto.tensorflow.VarLenFeatureProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.VarLenFeatureProto;
  return proto.tensorflow.VarLenFeatureProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.VarLenFeatureProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.VarLenFeatureProto}
 */
proto.tensorflow.VarLenFeatureProto.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setValuesOutputTensorName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIndicesOutputTensorName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setShapesOutputTensorName(value);
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
proto.tensorflow.VarLenFeatureProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.VarLenFeatureProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.VarLenFeatureProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.VarLenFeatureProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDtype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getValuesOutputTensorName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIndicesOutputTensorName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getShapesOutputTensorName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional DataType dtype = 1;
 * @return {!proto.tensorflow.DataType}
 */
proto.tensorflow.VarLenFeatureProto.prototype.getDtype = function() {
  return /** @type {!proto.tensorflow.DataType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.tensorflow.DataType} value */
proto.tensorflow.VarLenFeatureProto.prototype.setDtype = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string values_output_tensor_name = 2;
 * @return {string}
 */
proto.tensorflow.VarLenFeatureProto.prototype.getValuesOutputTensorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tensorflow.VarLenFeatureProto.prototype.setValuesOutputTensorName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string indices_output_tensor_name = 3;
 * @return {string}
 */
proto.tensorflow.VarLenFeatureProto.prototype.getIndicesOutputTensorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.tensorflow.VarLenFeatureProto.prototype.setIndicesOutputTensorName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string shapes_output_tensor_name = 4;
 * @return {string}
 */
proto.tensorflow.VarLenFeatureProto.prototype.getShapesOutputTensorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.tensorflow.VarLenFeatureProto.prototype.setShapesOutputTensorName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
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
proto.tensorflow.FixedLenFeatureProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.FixedLenFeatureProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.FixedLenFeatureProto.displayName = 'proto.tensorflow.FixedLenFeatureProto';
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
proto.tensorflow.FixedLenFeatureProto.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.FixedLenFeatureProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.FixedLenFeatureProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.FixedLenFeatureProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    dtype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    shape: (f = msg.getShape()) && tensorflow_core_framework_tensor_shape_pb.TensorShapeProto.toObject(includeInstance, f),
    defaultValue: (f = msg.getDefaultValue()) && tensorflow_core_framework_tensor_pb.TensorProto.toObject(includeInstance, f),
    valuesOutputTensorName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.tensorflow.FixedLenFeatureProto}
 */
proto.tensorflow.FixedLenFeatureProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.FixedLenFeatureProto;
  return proto.tensorflow.FixedLenFeatureProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.FixedLenFeatureProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.FixedLenFeatureProto}
 */
proto.tensorflow.FixedLenFeatureProto.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = new tensorflow_core_framework_tensor_pb.TensorProto;
      reader.readMessage(value,tensorflow_core_framework_tensor_pb.TensorProto.deserializeBinaryFromReader);
      msg.setDefaultValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setValuesOutputTensorName(value);
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
proto.tensorflow.FixedLenFeatureProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.FixedLenFeatureProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.FixedLenFeatureProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.FixedLenFeatureProto.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDefaultValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tensorflow_core_framework_tensor_pb.TensorProto.serializeBinaryToWriter
    );
  }
  f = message.getValuesOutputTensorName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional DataType dtype = 1;
 * @return {!proto.tensorflow.DataType}
 */
proto.tensorflow.FixedLenFeatureProto.prototype.getDtype = function() {
  return /** @type {!proto.tensorflow.DataType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.tensorflow.DataType} value */
proto.tensorflow.FixedLenFeatureProto.prototype.setDtype = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional TensorShapeProto shape = 2;
 * @return {?proto.tensorflow.TensorShapeProto}
 */
proto.tensorflow.FixedLenFeatureProto.prototype.getShape = function() {
  return /** @type{?proto.tensorflow.TensorShapeProto} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_tensor_shape_pb.TensorShapeProto, 2));
};


/** @param {?proto.tensorflow.TensorShapeProto|undefined} value */
proto.tensorflow.FixedLenFeatureProto.prototype.setShape = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.FixedLenFeatureProto.prototype.clearShape = function() {
  this.setShape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.FixedLenFeatureProto.prototype.hasShape = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TensorProto default_value = 3;
 * @return {?proto.tensorflow.TensorProto}
 */
proto.tensorflow.FixedLenFeatureProto.prototype.getDefaultValue = function() {
  return /** @type{?proto.tensorflow.TensorProto} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_tensor_pb.TensorProto, 3));
};


/** @param {?proto.tensorflow.TensorProto|undefined} value */
proto.tensorflow.FixedLenFeatureProto.prototype.setDefaultValue = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.tensorflow.FixedLenFeatureProto.prototype.clearDefaultValue = function() {
  this.setDefaultValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.FixedLenFeatureProto.prototype.hasDefaultValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string values_output_tensor_name = 4;
 * @return {string}
 */
proto.tensorflow.FixedLenFeatureProto.prototype.getValuesOutputTensorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.tensorflow.FixedLenFeatureProto.prototype.setValuesOutputTensorName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
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
proto.tensorflow.FeatureConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tensorflow.FeatureConfiguration.oneofGroups_);
};
goog.inherits(proto.tensorflow.FeatureConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.FeatureConfiguration.displayName = 'proto.tensorflow.FeatureConfiguration';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tensorflow.FeatureConfiguration.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.tensorflow.FeatureConfiguration.ConfigCase = {
  CONFIG_NOT_SET: 0,
  FIXED_LEN_FEATURE: 1,
  VAR_LEN_FEATURE: 2
};

/**
 * @return {proto.tensorflow.FeatureConfiguration.ConfigCase}
 */
proto.tensorflow.FeatureConfiguration.prototype.getConfigCase = function() {
  return /** @type {proto.tensorflow.FeatureConfiguration.ConfigCase} */(jspb.Message.computeOneofCase(this, proto.tensorflow.FeatureConfiguration.oneofGroups_[0]));
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
proto.tensorflow.FeatureConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.FeatureConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.FeatureConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.FeatureConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
    fixedLenFeature: (f = msg.getFixedLenFeature()) && proto.tensorflow.FixedLenFeatureProto.toObject(includeInstance, f),
    varLenFeature: (f = msg.getVarLenFeature()) && proto.tensorflow.VarLenFeatureProto.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.FeatureConfiguration}
 */
proto.tensorflow.FeatureConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.FeatureConfiguration;
  return proto.tensorflow.FeatureConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.FeatureConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.FeatureConfiguration}
 */
proto.tensorflow.FeatureConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.FixedLenFeatureProto;
      reader.readMessage(value,proto.tensorflow.FixedLenFeatureProto.deserializeBinaryFromReader);
      msg.setFixedLenFeature(value);
      break;
    case 2:
      var value = new proto.tensorflow.VarLenFeatureProto;
      reader.readMessage(value,proto.tensorflow.VarLenFeatureProto.deserializeBinaryFromReader);
      msg.setVarLenFeature(value);
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
proto.tensorflow.FeatureConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.FeatureConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.FeatureConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.FeatureConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFixedLenFeature();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.FixedLenFeatureProto.serializeBinaryToWriter
    );
  }
  f = message.getVarLenFeature();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tensorflow.VarLenFeatureProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional FixedLenFeatureProto fixed_len_feature = 1;
 * @return {?proto.tensorflow.FixedLenFeatureProto}
 */
proto.tensorflow.FeatureConfiguration.prototype.getFixedLenFeature = function() {
  return /** @type{?proto.tensorflow.FixedLenFeatureProto} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.FixedLenFeatureProto, 1));
};


/** @param {?proto.tensorflow.FixedLenFeatureProto|undefined} value */
proto.tensorflow.FeatureConfiguration.prototype.setFixedLenFeature = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.tensorflow.FeatureConfiguration.oneofGroups_[0], value);
};


proto.tensorflow.FeatureConfiguration.prototype.clearFixedLenFeature = function() {
  this.setFixedLenFeature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.FeatureConfiguration.prototype.hasFixedLenFeature = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VarLenFeatureProto var_len_feature = 2;
 * @return {?proto.tensorflow.VarLenFeatureProto}
 */
proto.tensorflow.FeatureConfiguration.prototype.getVarLenFeature = function() {
  return /** @type{?proto.tensorflow.VarLenFeatureProto} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.VarLenFeatureProto, 2));
};


/** @param {?proto.tensorflow.VarLenFeatureProto|undefined} value */
proto.tensorflow.FeatureConfiguration.prototype.setVarLenFeature = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.tensorflow.FeatureConfiguration.oneofGroups_[0], value);
};


proto.tensorflow.FeatureConfiguration.prototype.clearVarLenFeature = function() {
  this.setVarLenFeature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.FeatureConfiguration.prototype.hasVarLenFeature = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.tensorflow.ExampleParserConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.ExampleParserConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.ExampleParserConfiguration.displayName = 'proto.tensorflow.ExampleParserConfiguration';
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
proto.tensorflow.ExampleParserConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.ExampleParserConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.ExampleParserConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.ExampleParserConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
    featureMapMap: (f = msg.getFeatureMapMap()) ? f.toObject(includeInstance, proto.tensorflow.FeatureConfiguration.toObject) : []
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
 * @return {!proto.tensorflow.ExampleParserConfiguration}
 */
proto.tensorflow.ExampleParserConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.ExampleParserConfiguration;
  return proto.tensorflow.ExampleParserConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.ExampleParserConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.ExampleParserConfiguration}
 */
proto.tensorflow.ExampleParserConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getFeatureMapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.tensorflow.FeatureConfiguration.deserializeBinaryFromReader);
         });
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
proto.tensorflow.ExampleParserConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.ExampleParserConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.ExampleParserConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.ExampleParserConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeatureMapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.tensorflow.FeatureConfiguration.serializeBinaryToWriter);
  }
};


/**
 * map<string, FeatureConfiguration> feature_map = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.tensorflow.FeatureConfiguration>}
 */
proto.tensorflow.ExampleParserConfiguration.prototype.getFeatureMapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.tensorflow.FeatureConfiguration>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.tensorflow.FeatureConfiguration));
};


proto.tensorflow.ExampleParserConfiguration.prototype.clearFeatureMapMap = function() {
  this.getFeatureMapMap().clear();
};


goog.object.extend(exports, proto.tensorflow);
