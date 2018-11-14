/**
 * @fileoverview gRPC-Web generated client stub for tensorflow.serving
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var tensorflow_serving_apis_classification_pb = require('../../tensorflow_serving/apis/classification_pb.js')

var tensorflow_serving_apis_get_model_metadata_pb = require('../../tensorflow_serving/apis/get_model_metadata_pb.js')

var tensorflow_serving_apis_inference_pb = require('../../tensorflow_serving/apis/inference_pb.js')

var tensorflow_serving_apis_predict_pb = require('../../tensorflow_serving/apis/predict_pb.js')

var tensorflow_serving_apis_regression_pb = require('../../tensorflow_serving/apis/regression_pb.js')
const proto = {};
proto.tensorflow = {};
proto.tensorflow.serving = require('./prediction_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tensorflow.serving.PredictionServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tensorflow.serving.PredictionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tensorflow.serving.PredictionServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tensorflow.serving.PredictionServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.serving.ClassificationRequest,
 *   !proto.tensorflow.serving.ClassificationResponse>}
 */
const methodInfo_PredictionService_Classify = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_serving_apis_classification_pb.ClassificationResponse,
  /** @param {!proto.tensorflow.serving.ClassificationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_classification_pb.ClassificationResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.ClassificationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.serving.ClassificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.ClassificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServiceClient.prototype.classify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/Classify',
      request,
      metadata,
      methodInfo_PredictionService_Classify,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.ClassificationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.ClassificationResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServicePromiseClient.prototype.classify =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.classify(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.serving.RegressionRequest,
 *   !proto.tensorflow.serving.RegressionResponse>}
 */
const methodInfo_PredictionService_Regress = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_serving_apis_regression_pb.RegressionResponse,
  /** @param {!proto.tensorflow.serving.RegressionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_regression_pb.RegressionResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.RegressionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.serving.RegressionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.RegressionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServiceClient.prototype.regress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/Regress',
      request,
      metadata,
      methodInfo_PredictionService_Regress,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.RegressionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.RegressionResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServicePromiseClient.prototype.regress =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.regress(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.serving.PredictRequest,
 *   !proto.tensorflow.serving.PredictResponse>}
 */
const methodInfo_PredictionService_Predict = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_serving_apis_predict_pb.PredictResponse,
  /** @param {!proto.tensorflow.serving.PredictRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_predict_pb.PredictResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.PredictRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.serving.PredictResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.PredictResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServiceClient.prototype.predict =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/Predict',
      request,
      metadata,
      methodInfo_PredictionService_Predict,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.PredictRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.PredictResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServicePromiseClient.prototype.predict =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.predict(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.serving.MultiInferenceRequest,
 *   !proto.tensorflow.serving.MultiInferenceResponse>}
 */
const methodInfo_PredictionService_MultiInference = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_serving_apis_inference_pb.MultiInferenceResponse,
  /** @param {!proto.tensorflow.serving.MultiInferenceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_inference_pb.MultiInferenceResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.MultiInferenceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.serving.MultiInferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.MultiInferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServiceClient.prototype.multiInference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/MultiInference',
      request,
      metadata,
      methodInfo_PredictionService_MultiInference,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.MultiInferenceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.MultiInferenceResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServicePromiseClient.prototype.multiInference =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.multiInference(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.serving.GetModelMetadataRequest,
 *   !proto.tensorflow.serving.GetModelMetadataResponse>}
 */
const methodInfo_PredictionService_GetModelMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_serving_apis_get_model_metadata_pb.GetModelMetadataResponse,
  /** @param {!proto.tensorflow.serving.GetModelMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_get_model_metadata_pb.GetModelMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.GetModelMetadataRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.serving.GetModelMetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.GetModelMetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServiceClient.prototype.getModelMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/GetModelMetadata',
      request,
      metadata,
      methodInfo_PredictionService_GetModelMetadata,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.GetModelMetadataRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.GetModelMetadataResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServicePromiseClient.prototype.getModelMetadata =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getModelMetadata(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.tensorflow.serving;

