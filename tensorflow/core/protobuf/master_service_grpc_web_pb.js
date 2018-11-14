/**
 * @fileoverview gRPC-Web generated client stub for tensorflow.grpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var tensorflow_core_protobuf_master_pb = require('../../../tensorflow/core/protobuf/master_pb.js')
const proto = {};
proto.tensorflow = {};
proto.tensorflow.grpc = require('./master_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tensorflow.grpc.MasterServiceClient =
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
proto.tensorflow.grpc.MasterServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tensorflow.grpc.MasterServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tensorflow.grpc.MasterServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.CreateSessionRequest,
 *   !proto.tensorflow.CreateSessionResponse>}
 */
const methodInfo_MasterService_CreateSession = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_master_pb.CreateSessionResponse,
  /** @param {!proto.tensorflow.CreateSessionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_master_pb.CreateSessionResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.CreateSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.CreateSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.CreateSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServiceClient.prototype.createSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.MasterService/CreateSession',
      request,
      metadata,
      methodInfo_MasterService_CreateSession,
      callback);
};


/**
 * @param {!proto.tensorflow.CreateSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.CreateSessionResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServicePromiseClient.prototype.createSession =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createSession(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.ExtendSessionRequest,
 *   !proto.tensorflow.ExtendSessionResponse>}
 */
const methodInfo_MasterService_ExtendSession = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_master_pb.ExtendSessionResponse,
  /** @param {!proto.tensorflow.ExtendSessionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_master_pb.ExtendSessionResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.ExtendSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.ExtendSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.ExtendSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServiceClient.prototype.extendSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.MasterService/ExtendSession',
      request,
      metadata,
      methodInfo_MasterService_ExtendSession,
      callback);
};


/**
 * @param {!proto.tensorflow.ExtendSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.ExtendSessionResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServicePromiseClient.prototype.extendSession =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.extendSession(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.PartialRunSetupRequest,
 *   !proto.tensorflow.PartialRunSetupResponse>}
 */
const methodInfo_MasterService_PartialRunSetup = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_master_pb.PartialRunSetupResponse,
  /** @param {!proto.tensorflow.PartialRunSetupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_master_pb.PartialRunSetupResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.PartialRunSetupRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.PartialRunSetupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.PartialRunSetupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServiceClient.prototype.partialRunSetup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.MasterService/PartialRunSetup',
      request,
      metadata,
      methodInfo_MasterService_PartialRunSetup,
      callback);
};


/**
 * @param {!proto.tensorflow.PartialRunSetupRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.PartialRunSetupResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServicePromiseClient.prototype.partialRunSetup =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.partialRunSetup(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.RunStepRequest,
 *   !proto.tensorflow.RunStepResponse>}
 */
const methodInfo_MasterService_RunStep = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_master_pb.RunStepResponse,
  /** @param {!proto.tensorflow.RunStepRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_master_pb.RunStepResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.RunStepRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.RunStepResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.RunStepResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServiceClient.prototype.runStep =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.MasterService/RunStep',
      request,
      metadata,
      methodInfo_MasterService_RunStep,
      callback);
};


/**
 * @param {!proto.tensorflow.RunStepRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.RunStepResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServicePromiseClient.prototype.runStep =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.runStep(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.CloseSessionRequest,
 *   !proto.tensorflow.CloseSessionResponse>}
 */
const methodInfo_MasterService_CloseSession = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_master_pb.CloseSessionResponse,
  /** @param {!proto.tensorflow.CloseSessionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_master_pb.CloseSessionResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.CloseSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.CloseSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.CloseSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServiceClient.prototype.closeSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.MasterService/CloseSession',
      request,
      metadata,
      methodInfo_MasterService_CloseSession,
      callback);
};


/**
 * @param {!proto.tensorflow.CloseSessionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.CloseSessionResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServicePromiseClient.prototype.closeSession =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.closeSession(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.ListDevicesRequest,
 *   !proto.tensorflow.ListDevicesResponse>}
 */
const methodInfo_MasterService_ListDevices = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_master_pb.ListDevicesResponse,
  /** @param {!proto.tensorflow.ListDevicesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_master_pb.ListDevicesResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.ListDevicesRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.ListDevicesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.ListDevicesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServiceClient.prototype.listDevices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.MasterService/ListDevices',
      request,
      metadata,
      methodInfo_MasterService_ListDevices,
      callback);
};


/**
 * @param {!proto.tensorflow.ListDevicesRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.ListDevicesResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServicePromiseClient.prototype.listDevices =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listDevices(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.ResetRequest,
 *   !proto.tensorflow.ResetResponse>}
 */
const methodInfo_MasterService_Reset = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_master_pb.ResetResponse,
  /** @param {!proto.tensorflow.ResetRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_master_pb.ResetResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.ResetRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.ResetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.ResetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServiceClient.prototype.reset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.MasterService/Reset',
      request,
      metadata,
      methodInfo_MasterService_Reset,
      callback);
};


/**
 * @param {!proto.tensorflow.ResetRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.ResetResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServicePromiseClient.prototype.reset =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.reset(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.MakeCallableRequest,
 *   !proto.tensorflow.MakeCallableResponse>}
 */
const methodInfo_MasterService_MakeCallable = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_master_pb.MakeCallableResponse,
  /** @param {!proto.tensorflow.MakeCallableRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_master_pb.MakeCallableResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.MakeCallableRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.MakeCallableResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.MakeCallableResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServiceClient.prototype.makeCallable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.MasterService/MakeCallable',
      request,
      metadata,
      methodInfo_MasterService_MakeCallable,
      callback);
};


/**
 * @param {!proto.tensorflow.MakeCallableRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.MakeCallableResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServicePromiseClient.prototype.makeCallable =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.makeCallable(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.RunCallableRequest,
 *   !proto.tensorflow.RunCallableResponse>}
 */
const methodInfo_MasterService_RunCallable = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_master_pb.RunCallableResponse,
  /** @param {!proto.tensorflow.RunCallableRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_master_pb.RunCallableResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.RunCallableRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.RunCallableResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.RunCallableResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServiceClient.prototype.runCallable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.MasterService/RunCallable',
      request,
      metadata,
      methodInfo_MasterService_RunCallable,
      callback);
};


/**
 * @param {!proto.tensorflow.RunCallableRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.RunCallableResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServicePromiseClient.prototype.runCallable =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.runCallable(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tensorflow.ReleaseCallableRequest,
 *   !proto.tensorflow.ReleaseCallableResponse>}
 */
const methodInfo_MasterService_ReleaseCallable = new grpc.web.AbstractClientBase.MethodInfo(
  tensorflow_core_protobuf_master_pb.ReleaseCallableResponse,
  /** @param {!proto.tensorflow.ReleaseCallableRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_core_protobuf_master_pb.ReleaseCallableResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.ReleaseCallableRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tensorflow.ReleaseCallableResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.ReleaseCallableResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServiceClient.prototype.releaseCallable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.grpc.MasterService/ReleaseCallable',
      request,
      metadata,
      methodInfo_MasterService_ReleaseCallable,
      callback);
};


/**
 * @param {!proto.tensorflow.ReleaseCallableRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.ReleaseCallableResponse>}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.grpc.MasterServicePromiseClient.prototype.releaseCallable =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.releaseCallable(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.tensorflow.grpc;

