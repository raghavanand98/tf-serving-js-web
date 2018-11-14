/**
 * @fileoverview gRPC-Web generated client stub for tensorflow.serving
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var tensorflow_serving_apis_get_model_status_pb = require('../../tensorflow_serving/apis/get_model_status_pb.js')

var tensorflow_serving_apis_model_management_pb = require('../../tensorflow_serving/apis/model_management_pb.js')
const proto = {};
proto.tensorflow = {};
proto.tensorflow.serving = require('./model_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tensorflow.serving.ModelServiceClient =
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
proto.tensorflow.serving.ModelServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tensorflow.serving.ModelServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tensorflow.serving.ModelServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.serving.GetModelStatusRequest,
 *   !proto.tensorflow.serving.GetModelStatusResponse>}
 */
const methodInfo_ModelService_GetModelStatus = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_serving_apis_get_model_status_pb.GetModelStatusResponse,
  /** @param {!proto.tensorflow.serving.GetModelStatusRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_get_model_status_pb.GetModelStatusResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.GetModelStatusRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.serving.GetModelStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.GetModelStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.ModelServiceClient.prototype.getModelStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.ModelService/GetModelStatus',
      request,
      metadata,
      methodInfo_ModelService_GetModelStatus,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.GetModelStatusRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.GetModelStatusResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.ModelServicePromiseClient.prototype.getModelStatus =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getModelStatus(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.serving.ReloadConfigRequest,
 *   !proto.tensorflow.serving.ReloadConfigResponse>}
 */
const methodInfo_ModelService_HandleReloadConfigRequest = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_serving_apis_model_management_pb.ReloadConfigResponse,
  /** @param {!proto.tensorflow.serving.ReloadConfigRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_model_management_pb.ReloadConfigResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.ReloadConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.serving.ReloadConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.ReloadConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.ModelServiceClient.prototype.handleReloadConfigRequest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.ModelService/HandleReloadConfigRequest',
      request,
      metadata,
      methodInfo_ModelService_HandleReloadConfigRequest,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.ReloadConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.ReloadConfigResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.ModelServicePromiseClient.prototype.handleReloadConfigRequest =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.handleReloadConfigRequest(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.tensorflow.serving;

