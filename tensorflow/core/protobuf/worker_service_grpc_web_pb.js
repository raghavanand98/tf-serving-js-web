/**
 * @fileoverview gRPC-Web generated client stub for tensorflow.grpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var tensorflow_core_protobuf_worker_pb = require('../../../tensorflow/core/protobuf/worker_pb.js')
const proto = {};
proto.tensorflow = {};
proto.tensorflow.grpc = require('./worker_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tensorflow.grpc.WorkerServiceClient =
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
proto.tensorflow.grpc.WorkerServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tensorflow.grpc.WorkerServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tensorflow.grpc.WorkerServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.GetStatusRequest,
 *   !proto.tensorflow.GetStatusResponse>}
 */
const methodInfo_WorkerService_GetStatus = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.GetStatusResponse,
  /** @param {!proto.tensorflow.GetStatusRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.GetStatusResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.GetStatusRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.GetStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.GetStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.getStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/GetStatus',
      request,
      metadata,
      methodInfo_WorkerService_GetStatus,
      callback);
};


/**
 * @param {!proto.tensorflow.GetStatusRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.GetStatusResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.getStatus =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getStatus(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.CreateWorkerSessionRequest,
 *   !proto.tensorflow.CreateWorkerSessionResponse>}
 */
const methodInfo_WorkerService_CreateWorkerSession = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.CreateWorkerSessionResponse,
  /** @param {!proto.tensorflow.CreateWorkerSessionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.CreateWorkerSessionResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.CreateWorkerSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.CreateWorkerSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.CreateWorkerSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.createWorkerSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/CreateWorkerSession',
      request,
      metadata,
      methodInfo_WorkerService_CreateWorkerSession,
      callback);
};


/**
 * @param {!proto.tensorflow.CreateWorkerSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.CreateWorkerSessionResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.createWorkerSession =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createWorkerSession(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.DeleteWorkerSessionRequest,
 *   !proto.tensorflow.DeleteWorkerSessionResponse>}
 */
const methodInfo_WorkerService_DeleteWorkerSession = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.DeleteWorkerSessionResponse,
  /** @param {!proto.tensorflow.DeleteWorkerSessionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.DeleteWorkerSessionResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.DeleteWorkerSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.DeleteWorkerSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.DeleteWorkerSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.deleteWorkerSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/DeleteWorkerSession',
      request,
      metadata,
      methodInfo_WorkerService_DeleteWorkerSession,
      callback);
};


/**
 * @param {!proto.tensorflow.DeleteWorkerSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.DeleteWorkerSessionResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.deleteWorkerSession =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteWorkerSession(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.RegisterGraphRequest,
 *   !proto.tensorflow.RegisterGraphResponse>}
 */
const methodInfo_WorkerService_RegisterGraph = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.RegisterGraphResponse,
  /** @param {!proto.tensorflow.RegisterGraphRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.RegisterGraphResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.RegisterGraphRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.RegisterGraphResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.RegisterGraphResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.registerGraph =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/RegisterGraph',
      request,
      metadata,
      methodInfo_WorkerService_RegisterGraph,
      callback);
};


/**
 * @param {!proto.tensorflow.RegisterGraphRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.RegisterGraphResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.registerGraph =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.registerGraph(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.DeregisterGraphRequest,
 *   !proto.tensorflow.DeregisterGraphResponse>}
 */
const methodInfo_WorkerService_DeregisterGraph = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.DeregisterGraphResponse,
  /** @param {!proto.tensorflow.DeregisterGraphRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.DeregisterGraphResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.DeregisterGraphRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.DeregisterGraphResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.DeregisterGraphResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.deregisterGraph =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/DeregisterGraph',
      request,
      metadata,
      methodInfo_WorkerService_DeregisterGraph,
      callback);
};


/**
 * @param {!proto.tensorflow.DeregisterGraphRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.DeregisterGraphResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.deregisterGraph =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deregisterGraph(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.RunGraphRequest,
 *   !proto.tensorflow.RunGraphResponse>}
 */
const methodInfo_WorkerService_RunGraph = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.RunGraphResponse,
  /** @param {!proto.tensorflow.RunGraphRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.RunGraphResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.RunGraphRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.RunGraphResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.RunGraphResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.runGraph =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/RunGraph',
      request,
      metadata,
      methodInfo_WorkerService_RunGraph,
      callback);
};


/**
 * @param {!proto.tensorflow.RunGraphRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.RunGraphResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.runGraph =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.runGraph(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.CleanupGraphRequest,
 *   !proto.tensorflow.CleanupGraphResponse>}
 */
const methodInfo_WorkerService_CleanupGraph = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.CleanupGraphResponse,
  /** @param {!proto.tensorflow.CleanupGraphRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.CleanupGraphResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.CleanupGraphRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.CleanupGraphResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.CleanupGraphResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.cleanupGraph =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/CleanupGraph',
      request,
      metadata,
      methodInfo_WorkerService_CleanupGraph,
      callback);
};


/**
 * @param {!proto.tensorflow.CleanupGraphRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.CleanupGraphResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.cleanupGraph =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.cleanupGraph(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.CleanupAllRequest,
 *   !proto.tensorflow.CleanupAllResponse>}
 */
const methodInfo_WorkerService_CleanupAll = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.CleanupAllResponse,
  /** @param {!proto.tensorflow.CleanupAllRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.CleanupAllResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.CleanupAllRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.CleanupAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.CleanupAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.cleanupAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/CleanupAll',
      request,
      metadata,
      methodInfo_WorkerService_CleanupAll,
      callback);
};


/**
 * @param {!proto.tensorflow.CleanupAllRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.CleanupAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.cleanupAll =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.cleanupAll(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.RecvTensorRequest,
 *   !proto.tensorflow.RecvTensorResponse>}
 */
const methodInfo_WorkerService_RecvTensor = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.RecvTensorResponse,
  /** @param {!proto.tensorflow.RecvTensorRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.RecvTensorResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.RecvTensorRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.RecvTensorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.RecvTensorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.recvTensor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/RecvTensor',
      request,
      metadata,
      methodInfo_WorkerService_RecvTensor,
      callback);
};


/**
 * @param {!proto.tensorflow.RecvTensorRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.RecvTensorResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.recvTensor =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.recvTensor(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.LoggingRequest,
 *   !proto.tensorflow.LoggingResponse>}
 */
const methodInfo_WorkerService_Logging = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.LoggingResponse,
  /** @param {!proto.tensorflow.LoggingRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.LoggingResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.LoggingRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.LoggingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.LoggingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.logging =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/Logging',
      request,
      metadata,
      methodInfo_WorkerService_Logging,
      callback);
};


/**
 * @param {!proto.tensorflow.LoggingRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.LoggingResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.logging =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.logging(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.TracingRequest,
 *   !proto.tensorflow.TracingResponse>}
 */
const methodInfo_WorkerService_Tracing = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.TracingResponse,
  /** @param {!proto.tensorflow.TracingRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.TracingResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.TracingRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.TracingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.TracingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.tracing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/Tracing',
      request,
      metadata,
      methodInfo_WorkerService_Tracing,
      callback);
};


/**
 * @param {!proto.tensorflow.TracingRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.TracingResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.tracing =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.tracing(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.RecvBufRequest,
 *   !proto.tensorflow.RecvBufResponse>}
 */
const methodInfo_WorkerService_RecvBuf = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.RecvBufResponse,
  /** @param {!proto.tensorflow.RecvBufRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.RecvBufResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.RecvBufRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.RecvBufResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.RecvBufResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.recvBuf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/RecvBuf',
      request,
      metadata,
      methodInfo_WorkerService_RecvBuf,
      callback);
};


/**
 * @param {!proto.tensorflow.RecvBufRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.RecvBufResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.recvBuf =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.recvBuf(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.GetStepSequenceRequest,
 *   !proto.tensorflow.GetStepSequenceResponse>}
 */
const methodInfo_WorkerService_GetStepSequence = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.GetStepSequenceResponse,
  /** @param {!proto.tensorflow.GetStepSequenceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.GetStepSequenceResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.GetStepSequenceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.GetStepSequenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.GetStepSequenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.getStepSequence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/GetStepSequence',
      request,
      metadata,
      methodInfo_WorkerService_GetStepSequence,
      callback);
};


/**
 * @param {!proto.tensorflow.GetStepSequenceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.GetStepSequenceResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.getStepSequence =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getStepSequence(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.CompleteGroupRequest,
 *   !proto.tensorflow.CompleteGroupResponse>}
 */
const methodInfo_WorkerService_CompleteGroup = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.CompleteGroupResponse,
  /** @param {!proto.tensorflow.CompleteGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.CompleteGroupResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.CompleteGroupRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.CompleteGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.CompleteGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.completeGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/CompleteGroup',
      request,
      metadata,
      methodInfo_WorkerService_CompleteGroup,
      callback);
};


/**
 * @param {!proto.tensorflow.CompleteGroupRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.CompleteGroupResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.completeGroup =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.completeGroup(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.CompleteInstanceRequest,
 *   !proto.tensorflow.CompleteInstanceResponse>}
 */
const methodInfo_WorkerService_CompleteInstance = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_worker_pb.CompleteInstanceResponse,
  /** @param {!proto.tensorflow.CompleteInstanceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_worker_pb.CompleteInstanceResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.CompleteInstanceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.CompleteInstanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.CompleteInstanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServiceClient.prototype.completeInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.WorkerService/CompleteInstance',
      request,
      metadata,
      methodInfo_WorkerService_CompleteInstance,
      callback);
};


/**
 * @param {!proto.tensorflow.CompleteInstanceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.CompleteInstanceResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.WorkerServicePromiseClient.prototype.completeInstance =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.completeInstance(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.tensorflow.grpc;

