/**
 * @fileoverview gRPC-Web generated client stub for tensorflow.serving
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var tensorflow_serving_apis_model_pb = require('../../tensorflow_serving/apis/model_pb.js')

var tensorflow_core_protobuf_config_pb = require('../../tensorflow/core/protobuf/config_pb.js')

var tensorflow_core_protobuf_named_tensor_pb = require('../../tensorflow/core/protobuf/named_tensor_pb.js')
const proto = {};
proto.tensorflow = {};
proto.tensorflow.serving = require('./session_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tensorflow.serving.SessionServiceClient =
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
proto.tensorflow.serving.SessionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tensorflow.serving.SessionServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tensorflow.serving.SessionServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.serving.SessionRunRequest,
 *   !proto.tensorflow.serving.SessionRunResponse>}
 */
const methodInfo_SessionService_SessionRun = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tensorflow.serving.SessionRunResponse,
  /** @param {!proto.tensorflow.serving.SessionRunRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tensorflow.serving.SessionRunResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.SessionRunRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.serving.SessionRunResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.SessionRunResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.SessionServiceClient.prototype.sessionRun =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.SessionService/SessionRun',
      request,
      metadata,
      methodInfo_SessionService_SessionRun,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.SessionRunRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.SessionRunResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.SessionServicePromiseClient.prototype.sessionRun =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.sessionRun(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.tensorflow.serving;

