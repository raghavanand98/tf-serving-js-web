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

var tensorflow_serving_apis_classification_pb = require('../../tensorflow_serving/apis/classification_pb.js');
var tensorflow_serving_apis_input_pb = require('../../tensorflow_serving/apis/input_pb.js');
var tensorflow_serving_apis_model_pb = require('../../tensorflow_serving/apis/model_pb.js');
var tensorflow_serving_apis_regression_pb = require('../../tensorflow_serving/apis/regression_pb.js');
goog.exportSymbol('proto.tensorflow.serving.InferenceResult', null, global);
goog.exportSymbol('proto.tensorflow.serving.InferenceTask', null, global);
goog.exportSymbol('proto.tensorflow.serving.MultiInferenceRequest', null, global);
goog.exportSymbol('proto.tensorflow.serving.MultiInferenceResponse', null, global);

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
proto.tensorflow.serving.InferenceTask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.serving.InferenceTask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.InferenceTask.displayName = 'proto.tensorflow.serving.InferenceTask';
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
proto.tensorflow.serving.InferenceTask.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.InferenceTask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.InferenceTask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.InferenceTask.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelSpec: (f = msg.getModelSpec()) && tensorflow_serving_apis_model_pb.ModelSpec.toObject(includeInstance, f),
    methodName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.tensorflow.serving.InferenceTask}
 */
proto.tensorflow.serving.InferenceTask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.InferenceTask;
  return proto.tensorflow.serving.InferenceTask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.InferenceTask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.InferenceTask}
 */
proto.tensorflow.serving.InferenceTask.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorflow_serving_apis_model_pb.ModelSpec;
      reader.readMessage(value,tensorflow_serving_apis_model_pb.ModelSpec.deserializeBinaryFromReader);
      msg.setModelSpec(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodName(value);
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
proto.tensorflow.serving.InferenceTask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.InferenceTask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.InferenceTask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.InferenceTask.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tensorflow_serving_apis_model_pb.ModelSpec.serializeBinaryToWriter
    );
  }
  f = message.getMethodName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ModelSpec model_spec = 1;
 * @return {?proto.tensorflow.serving.ModelSpec}
 */
proto.tensorflow.serving.InferenceTask.prototype.getModelSpec = function() {
  return /** @type{?proto.tensorflow.serving.ModelSpec} */ (
    jspb.Message.getWrapperField(this, tensorflow_serving_apis_model_pb.ModelSpec, 1));
};


/** @param {?proto.tensorflow.serving.ModelSpec|undefined} value */
proto.tensorflow.serving.InferenceTask.prototype.setModelSpec = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.serving.InferenceTask.prototype.clearModelSpec = function() {
  this.setModelSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.InferenceTask.prototype.hasModelSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string method_name = 2;
 * @return {string}
 */
proto.tensorflow.serving.InferenceTask.prototype.getMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tensorflow.serving.InferenceTask.prototype.setMethodName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
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
proto.tensorflow.serving.InferenceResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tensorflow.serving.InferenceResult.oneofGroups_);
};
goog.inherits(proto.tensorflow.serving.InferenceResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.InferenceResult.displayName = 'proto.tensorflow.serving.InferenceResult';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tensorflow.serving.InferenceResult.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.tensorflow.serving.InferenceResult.ResultCase = {
  RESULT_NOT_SET: 0,
  CLASSIFICATION_RESULT: 2,
  REGRESSION_RESULT: 3
};

/**
 * @return {proto.tensorflow.serving.InferenceResult.ResultCase}
 */
proto.tensorflow.serving.InferenceResult.prototype.getResultCase = function() {
  return /** @type {proto.tensorflow.serving.InferenceResult.ResultCase} */(jspb.Message.computeOneofCase(this, proto.tensorflow.serving.InferenceResult.oneofGroups_[0]));
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
proto.tensorflow.serving.InferenceResult.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.InferenceResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.InferenceResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.InferenceResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelSpec: (f = msg.getModelSpec()) && tensorflow_serving_apis_model_pb.ModelSpec.toObject(includeInstance, f),
    classificationResult: (f = msg.getClassificationResult()) && tensorflow_serving_apis_classification_pb.ClassificationResult.toObject(includeInstance, f),
    regressionResult: (f = msg.getRegressionResult()) && tensorflow_serving_apis_regression_pb.RegressionResult.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.serving.InferenceResult}
 */
proto.tensorflow.serving.InferenceResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.InferenceResult;
  return proto.tensorflow.serving.InferenceResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.InferenceResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.InferenceResult}
 */
proto.tensorflow.serving.InferenceResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorflow_serving_apis_model_pb.ModelSpec;
      reader.readMessage(value,tensorflow_serving_apis_model_pb.ModelSpec.deserializeBinaryFromReader);
      msg.setModelSpec(value);
      break;
    case 2:
      var value = new tensorflow_serving_apis_classification_pb.ClassificationResult;
      reader.readMessage(value,tensorflow_serving_apis_classification_pb.ClassificationResult.deserializeBinaryFromReader);
      msg.setClassificationResult(value);
      break;
    case 3:
      var value = new tensorflow_serving_apis_regression_pb.RegressionResult;
      reader.readMessage(value,tensorflow_serving_apis_regression_pb.RegressionResult.deserializeBinaryFromReader);
      msg.setRegressionResult(value);
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
proto.tensorflow.serving.InferenceResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.InferenceResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.InferenceResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.InferenceResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tensorflow_serving_apis_model_pb.ModelSpec.serializeBinaryToWriter
    );
  }
  f = message.getClassificationResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tensorflow_serving_apis_classification_pb.ClassificationResult.serializeBinaryToWriter
    );
  }
  f = message.getRegressionResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tensorflow_serving_apis_regression_pb.RegressionResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional ModelSpec model_spec = 1;
 * @return {?proto.tensorflow.serving.ModelSpec}
 */
proto.tensorflow.serving.InferenceResult.prototype.getModelSpec = function() {
  return /** @type{?proto.tensorflow.serving.ModelSpec} */ (
    jspb.Message.getWrapperField(this, tensorflow_serving_apis_model_pb.ModelSpec, 1));
};


/** @param {?proto.tensorflow.serving.ModelSpec|undefined} value */
proto.tensorflow.serving.InferenceResult.prototype.setModelSpec = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.serving.InferenceResult.prototype.clearModelSpec = function() {
  this.setModelSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.InferenceResult.prototype.hasModelSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ClassificationResult classification_result = 2;
 * @return {?proto.tensorflow.serving.ClassificationResult}
 */
proto.tensorflow.serving.InferenceResult.prototype.getClassificationResult = function() {
  return /** @type{?proto.tensorflow.serving.ClassificationResult} */ (
    jspb.Message.getWrapperField(this, tensorflow_serving_apis_classification_pb.ClassificationResult, 2));
};


/** @param {?proto.tensorflow.serving.ClassificationResult|undefined} value */
proto.tensorflow.serving.InferenceResult.prototype.setClassificationResult = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.tensorflow.serving.InferenceResult.oneofGroups_[0], value);
};


proto.tensorflow.serving.InferenceResult.prototype.clearClassificationResult = function() {
  this.setClassificationResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.InferenceResult.prototype.hasClassificationResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RegressionResult regression_result = 3;
 * @return {?proto.tensorflow.serving.RegressionResult}
 */
proto.tensorflow.serving.InferenceResult.prototype.getRegressionResult = function() {
  return /** @type{?proto.tensorflow.serving.RegressionResult} */ (
    jspb.Message.getWrapperField(this, tensorflow_serving_apis_regression_pb.RegressionResult, 3));
};


/** @param {?proto.tensorflow.serving.RegressionResult|undefined} value */
proto.tensorflow.serving.InferenceResult.prototype.setRegressionResult = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.tensorflow.serving.InferenceResult.oneofGroups_[0], value);
};


proto.tensorflow.serving.InferenceResult.prototype.clearRegressionResult = function() {
  this.setRegressionResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.InferenceResult.prototype.hasRegressionResult = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.tensorflow.serving.MultiInferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.serving.MultiInferenceRequest.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.serving.MultiInferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.MultiInferenceRequest.displayName = 'proto.tensorflow.serving.MultiInferenceRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.serving.MultiInferenceRequest.repeatedFields_ = [1];



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
proto.tensorflow.serving.MultiInferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.MultiInferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.MultiInferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.MultiInferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tasksList: jspb.Message.toObjectList(msg.getTasksList(),
    proto.tensorflow.serving.InferenceTask.toObject, includeInstance),
    input: (f = msg.getInput()) && tensorflow_serving_apis_input_pb.Input.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.serving.MultiInferenceRequest}
 */
proto.tensorflow.serving.MultiInferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.MultiInferenceRequest;
  return proto.tensorflow.serving.MultiInferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.MultiInferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.MultiInferenceRequest}
 */
proto.tensorflow.serving.MultiInferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.serving.InferenceTask;
      reader.readMessage(value,proto.tensorflow.serving.InferenceTask.deserializeBinaryFromReader);
      msg.addTasks(value);
      break;
    case 2:
      var value = new tensorflow_serving_apis_input_pb.Input;
      reader.readMessage(value,tensorflow_serving_apis_input_pb.Input.deserializeBinaryFromReader);
      msg.setInput(value);
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
proto.tensorflow.serving.MultiInferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.MultiInferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.MultiInferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.MultiInferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tensorflow.serving.InferenceTask.serializeBinaryToWriter
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tensorflow_serving_apis_input_pb.Input.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InferenceTask tasks = 1;
 * @return {!Array.<!proto.tensorflow.serving.InferenceTask>}
 */
proto.tensorflow.serving.MultiInferenceRequest.prototype.getTasksList = function() {
  return /** @type{!Array.<!proto.tensorflow.serving.InferenceTask>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.serving.InferenceTask, 1));
};


/** @param {!Array.<!proto.tensorflow.serving.InferenceTask>} value */
proto.tensorflow.serving.MultiInferenceRequest.prototype.setTasksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.serving.InferenceTask=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.serving.InferenceTask}
 */
proto.tensorflow.serving.MultiInferenceRequest.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.serving.InferenceTask, opt_index);
};


proto.tensorflow.serving.MultiInferenceRequest.prototype.clearTasksList = function() {
  this.setTasksList([]);
};


/**
 * optional Input input = 2;
 * @return {?proto.tensorflow.serving.Input}
 */
proto.tensorflow.serving.MultiInferenceRequest.prototype.getInput = function() {
  return /** @type{?proto.tensorflow.serving.Input} */ (
    jspb.Message.getWrapperField(this, tensorflow_serving_apis_input_pb.Input, 2));
};


/** @param {?proto.tensorflow.serving.Input|undefined} value */
proto.tensorflow.serving.MultiInferenceRequest.prototype.setInput = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.serving.MultiInferenceRequest.prototype.clearInput = function() {
  this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tensorflow.serving.MultiInferenceRequest.prototype.hasInput = function() {
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
proto.tensorflow.serving.MultiInferenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.serving.MultiInferenceResponse.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.serving.MultiInferenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.MultiInferenceResponse.displayName = 'proto.tensorflow.serving.MultiInferenceResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.serving.MultiInferenceResponse.repeatedFields_ = [1];



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
proto.tensorflow.serving.MultiInferenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.MultiInferenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.MultiInferenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.MultiInferenceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.tensorflow.serving.InferenceResult.toObject, includeInstance)
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
 * @return {!proto.tensorflow.serving.MultiInferenceResponse}
 */
proto.tensorflow.serving.MultiInferenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.MultiInferenceResponse;
  return proto.tensorflow.serving.MultiInferenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.MultiInferenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.MultiInferenceResponse}
 */
proto.tensorflow.serving.MultiInferenceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.serving.InferenceResult;
      reader.readMessage(value,proto.tensorflow.serving.InferenceResult.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.tensorflow.serving.MultiInferenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.MultiInferenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.MultiInferenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.MultiInferenceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tensorflow.serving.InferenceResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InferenceResult results = 1;
 * @return {!Array.<!proto.tensorflow.serving.InferenceResult>}
 */
proto.tensorflow.serving.MultiInferenceResponse.prototype.getResultsList = function() {
  return /** @type{!Array.<!proto.tensorflow.serving.InferenceResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.serving.InferenceResult, 1));
};


/** @param {!Array.<!proto.tensorflow.serving.InferenceResult>} value */
proto.tensorflow.serving.MultiInferenceResponse.prototype.setResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.serving.InferenceResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.serving.InferenceResult}
 */
proto.tensorflow.serving.MultiInferenceResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.serving.InferenceResult, opt_index);
};


proto.tensorflow.serving.MultiInferenceResponse.prototype.clearResultsList = function() {
  this.setResultsList([]);
};


goog.object.extend(exports, proto.tensorflow.serving);
