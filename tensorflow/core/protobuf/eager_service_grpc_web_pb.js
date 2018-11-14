/**
 * @fileoverview gRPC-Web generated client stub for tensorflow.eager
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var tensorflow_core_framework_attr_value_pb = require('../../../tensorflow/core/framework/attr_value_pb.js')

var tensorflow_core_framework_device_attributes_pb = require('../../../tensorflow/core/framework/device_attributes_pb.js')

var tensorflow_core_framework_function_pb = require('../../../tensorflow/core/framework/function_pb.js')

var tensorflow_core_framework_versions_pb = require('../../../tensorflow/core/framework/versions_pb.js')

var tensorflow_core_protobuf_tensorflow_server_pb = require('../../../tensorflow/core/protobuf/tensorflow_server_pb.js')

var tensorflow_core_framework_tensor_shape_pb = require('../../../tensorflow/core/framework/tensor_shape_pb.js')

var tensorflow_core_framework_tensor_pb = require('../../../tensorflow/core/framework/tensor_pb.js')
const proto = {};
proto.tensorflow = {};
proto.tensorflow.eager = require('./eager_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tensorflow.eager.EagerServiceClient =
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
proto.tensorflow.eager.EagerServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tensorflow.eager.EagerServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tensorflow.eager.EagerServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.eager.CreateContextRequest,
 *   !proto.tensorflow.eager.CreateContextResponse>}
 */
const methodInfo_EagerService_CreateContext = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tensorflow.eager.CreateContextResponse,
  /** @param {!proto.tensorflow.eager.CreateContextRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tensorflow.eager.CreateContextResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.eager.CreateContextRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.eager.CreateContextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.eager.CreateContextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.eager.EagerServiceClient.prototype.createContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.eager.EagerService/CreateContext',
      request,
      metadata,
      methodInfo_EagerService_CreateContext,
      callback);
};


/**
 * @param {!proto.tensorflow.eager.CreateContextRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.eager.CreateContextResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.eager.EagerServicePromiseClient.prototype.createContext =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createContext(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.eager.EnqueueRequest,
 *   !proto.tensorflow.eager.EnqueueResponse>}
 */
const methodInfo_EagerService_Enqueue = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tensorflow.eager.EnqueueResponse,
  /** @param {!proto.tensorflow.eager.EnqueueRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tensorflow.eager.EnqueueResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.eager.EnqueueRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.eager.EnqueueResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.eager.EnqueueResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.eager.EagerServiceClient.prototype.enqueue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.eager.EagerService/Enqueue',
      request,
      metadata,
      methodInfo_EagerService_Enqueue,
      callback);
};


/**
 * @param {!proto.tensorflow.eager.EnqueueRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.eager.EnqueueResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.eager.EagerServicePromiseClient.prototype.enqueue =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.enqueue(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.eager.WaitQueueDoneRequest,
 *   !proto.tensorflow.eager.WaitQueueDoneResponse>}
 */
const methodInfo_EagerService_WaitQueueDone = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tensorflow.eager.WaitQueueDoneResponse,
  /** @param {!proto.tensorflow.eager.WaitQueueDoneRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tensorflow.eager.WaitQueueDoneResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.eager.WaitQueueDoneRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.eager.WaitQueueDoneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.eager.WaitQueueDoneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.eager.EagerServiceClient.prototype.waitQueueDone =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.eager.EagerService/WaitQueueDone',
      request,
      metadata,
      methodInfo_EagerService_WaitQueueDone,
      callback);
};


/**
 * @param {!proto.tensorflow.eager.WaitQueueDoneRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.eager.WaitQueueDoneResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.eager.EagerServicePromiseClient.prototype.waitQueueDone =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.waitQueueDone(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.eager.KeepAliveRequest,
 *   !proto.tensorflow.eager.KeepAliveResponse>}
 */
const methodInfo_EagerService_KeepAlive = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tensorflow.eager.KeepAliveResponse,
  /** @param {!proto.tensorflow.eager.KeepAliveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tensorflow.eager.KeepAliveResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.eager.KeepAliveRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.eager.KeepAliveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.eager.KeepAliveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.eager.EagerServiceClient.prototype.keepAlive =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.eager.EagerService/KeepAlive',
      request,
      metadata,
      methodInfo_EagerService_KeepAlive,
      callback);
};


/**
 * @param {!proto.tensorflow.eager.KeepAliveRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.eager.KeepAliveResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.eager.EagerServicePromiseClient.prototype.keepAlive =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.keepAlive(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.eager.CloseContextRequest,
 *   !proto.tensorflow.eager.CloseContextResponse>}
 */
const methodInfo_EagerService_CloseContext = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tensorflow.eager.CloseContextResponse,
  /** @param {!proto.tensorflow.eager.CloseContextRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tensorflow.eager.CloseContextResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.eager.CloseContextRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.eager.CloseContextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.eager.CloseContextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.eager.EagerServiceClient.prototype.closeContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.eager.EagerService/CloseContext',
      request,
      metadata,
      methodInfo_EagerService_CloseContext,
      callback);
};


/**
 * @param {!proto.tensorflow.eager.CloseContextRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.eager.CloseContextResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.eager.EagerServicePromiseClient.prototype.closeContext =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.closeContext(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.eager.RegisterFunctionRequest,
 *   !proto.tensorflow.eager.RegisterFunctionResponse>}
 */
const methodInfo_EagerService_RegisterFunction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tensorflow.eager.RegisterFunctionResponse,
  /** @param {!proto.tensorflow.eager.RegisterFunctionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tensorflow.eager.RegisterFunctionResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.eager.RegisterFunctionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.eager.RegisterFunctionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.eager.RegisterFunctionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.eager.EagerServiceClient.prototype.registerFunction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.eager.EagerService/RegisterFunction',
      request,
      metadata,
      methodInfo_EagerService_RegisterFunction,
      callback);
};


/**
 * @param {!proto.tensorflow.eager.RegisterFunctionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.eager.RegisterFunctionResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.eager.EagerServicePromiseClient.prototype.registerFunction =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.registerFunction(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.eager.SendTensorRequest,
 *   !proto.tensorflow.eager.SendTensorResponse>}
 */
const methodInfo_EagerService_SendTensor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tensorflow.eager.SendTensorResponse,
  /** @param {!proto.tensorflow.eager.SendTensorRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tensorflow.eager.SendTensorResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.eager.SendTensorRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.eager.SendTensorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.eager.SendTensorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.eager.EagerServiceClient.prototype.sendTensor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.eager.EagerService/SendTensor',
      request,
      metadata,
      methodInfo_EagerService_SendTensor,
      callback);
};


/**
 * @param {!proto.tensorflow.eager.SendTensorRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.eager.SendTensorResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.eager.EagerServicePromiseClient.prototype.sendTensor =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.sendTensor(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.tensorflow.eager;

