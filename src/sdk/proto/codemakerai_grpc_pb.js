// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var src_sdk_proto_codemakerai_pb = require('../../../src/sdk/proto/codemakerai_pb.js');

function serialize_ai_codemaker_service_AssistantCodeCompletionRequest(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.AssistantCodeCompletionRequest)) {
    throw new Error('Expected argument of type ai.codemaker.service.AssistantCodeCompletionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_AssistantCodeCompletionRequest(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.AssistantCodeCompletionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_AssistantCodeCompletionResponse(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.AssistantCodeCompletionResponse)) {
    throw new Error('Expected argument of type ai.codemaker.service.AssistantCodeCompletionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_AssistantCodeCompletionResponse(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.AssistantCodeCompletionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_AssistantCompletionRequest(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.AssistantCompletionRequest)) {
    throw new Error('Expected argument of type ai.codemaker.service.AssistantCompletionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_AssistantCompletionRequest(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.AssistantCompletionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_AssistantCompletionResponse(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.AssistantCompletionResponse)) {
    throw new Error('Expected argument of type ai.codemaker.service.AssistantCompletionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_AssistantCompletionResponse(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.AssistantCompletionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_AssistantSpeechRequest(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.AssistantSpeechRequest)) {
    throw new Error('Expected argument of type ai.codemaker.service.AssistantSpeechRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_AssistantSpeechRequest(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.AssistantSpeechRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_AssistantSpeechResponse(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.AssistantSpeechResponse)) {
    throw new Error('Expected argument of type ai.codemaker.service.AssistantSpeechResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_AssistantSpeechResponse(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.AssistantSpeechResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_CompletionRequest(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.CompletionRequest)) {
    throw new Error('Expected argument of type ai.codemaker.service.CompletionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_CompletionRequest(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.CompletionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_CompletionResponse(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.CompletionResponse)) {
    throw new Error('Expected argument of type ai.codemaker.service.CompletionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_CompletionResponse(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.CompletionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_CreateSourceContextRequest(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.CreateSourceContextRequest)) {
    throw new Error('Expected argument of type ai.codemaker.service.CreateSourceContextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_CreateSourceContextRequest(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.CreateSourceContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_CreateSourceContextResponse(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.CreateSourceContextResponse)) {
    throw new Error('Expected argument of type ai.codemaker.service.CreateSourceContextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_CreateSourceContextResponse(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.CreateSourceContextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_DiscoverSourceContextRequest(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.DiscoverSourceContextRequest)) {
    throw new Error('Expected argument of type ai.codemaker.service.DiscoverSourceContextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_DiscoverSourceContextRequest(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.DiscoverSourceContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_DiscoverSourceContextResponse(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.DiscoverSourceContextResponse)) {
    throw new Error('Expected argument of type ai.codemaker.service.DiscoverSourceContextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_DiscoverSourceContextResponse(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.DiscoverSourceContextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_ListModelsRequest(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.ListModelsRequest)) {
    throw new Error('Expected argument of type ai.codemaker.service.ListModelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_ListModelsRequest(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.ListModelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_ListModelsResponse(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.ListModelsResponse)) {
    throw new Error('Expected argument of type ai.codemaker.service.ListModelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_ListModelsResponse(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.ListModelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_PredictRequest(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.PredictRequest)) {
    throw new Error('Expected argument of type ai.codemaker.service.PredictRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_PredictRequest(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.PredictRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_PredictResponse(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.PredictResponse)) {
    throw new Error('Expected argument of type ai.codemaker.service.PredictResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_PredictResponse(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.PredictResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_ProcessRequest(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.ProcessRequest)) {
    throw new Error('Expected argument of type ai.codemaker.service.ProcessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_ProcessRequest(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.ProcessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_ProcessResponse(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.ProcessResponse)) {
    throw new Error('Expected argument of type ai.codemaker.service.ProcessResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_ProcessResponse(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.ProcessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_RegisterAssistantFeedbackRequest(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackRequest)) {
    throw new Error('Expected argument of type ai.codemaker.service.RegisterAssistantFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_RegisterAssistantFeedbackRequest(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_RegisterAssistantFeedbackResponse(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackResponse)) {
    throw new Error('Expected argument of type ai.codemaker.service.RegisterAssistantFeedbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_RegisterAssistantFeedbackResponse(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_RegisterSourceContextRequest(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.RegisterSourceContextRequest)) {
    throw new Error('Expected argument of type ai.codemaker.service.RegisterSourceContextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_RegisterSourceContextRequest(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.RegisterSourceContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_codemaker_service_RegisterSourceContextResponse(arg) {
  if (!(arg instanceof src_sdk_proto_codemakerai_pb.RegisterSourceContextResponse)) {
    throw new Error('Expected argument of type ai.codemaker.service.RegisterSourceContextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_codemaker_service_RegisterSourceContextResponse(buffer_arg) {
  return src_sdk_proto_codemakerai_pb.RegisterSourceContextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CodemakerServiceService = exports.CodemakerServiceService = {
  assistantCompletion: {
    path: '/ai.codemaker.service.CodemakerService/AssistantCompletion',
    requestStream: false,
    responseStream: false,
    requestType: src_sdk_proto_codemakerai_pb.AssistantCompletionRequest,
    responseType: src_sdk_proto_codemakerai_pb.AssistantCompletionResponse,
    requestSerialize: serialize_ai_codemaker_service_AssistantCompletionRequest,
    requestDeserialize: deserialize_ai_codemaker_service_AssistantCompletionRequest,
    responseSerialize: serialize_ai_codemaker_service_AssistantCompletionResponse,
    responseDeserialize: deserialize_ai_codemaker_service_AssistantCompletionResponse,
  },
  assistantCodeCompletion: {
    path: '/ai.codemaker.service.CodemakerService/AssistantCodeCompletion',
    requestStream: false,
    responseStream: false,
    requestType: src_sdk_proto_codemakerai_pb.AssistantCodeCompletionRequest,
    responseType: src_sdk_proto_codemakerai_pb.AssistantCodeCompletionResponse,
    requestSerialize: serialize_ai_codemaker_service_AssistantCodeCompletionRequest,
    requestDeserialize: deserialize_ai_codemaker_service_AssistantCodeCompletionRequest,
    responseSerialize: serialize_ai_codemaker_service_AssistantCodeCompletionResponse,
    responseDeserialize: deserialize_ai_codemaker_service_AssistantCodeCompletionResponse,
  },
  assistantSpeech: {
    path: '/ai.codemaker.service.CodemakerService/AssistantSpeech',
    requestStream: false,
    responseStream: false,
    requestType: src_sdk_proto_codemakerai_pb.AssistantSpeechRequest,
    responseType: src_sdk_proto_codemakerai_pb.AssistantSpeechResponse,
    requestSerialize: serialize_ai_codemaker_service_AssistantSpeechRequest,
    requestDeserialize: deserialize_ai_codemaker_service_AssistantSpeechRequest,
    responseSerialize: serialize_ai_codemaker_service_AssistantSpeechResponse,
    responseDeserialize: deserialize_ai_codemaker_service_AssistantSpeechResponse,
  },
  assistantSpeechStream: {
    path: '/ai.codemaker.service.CodemakerService/AssistantSpeechStream',
    requestStream: false,
    responseStream: true,
    requestType: src_sdk_proto_codemakerai_pb.AssistantSpeechRequest,
    responseType: src_sdk_proto_codemakerai_pb.AssistantSpeechResponse,
    requestSerialize: serialize_ai_codemaker_service_AssistantSpeechRequest,
    requestDeserialize: deserialize_ai_codemaker_service_AssistantSpeechRequest,
    responseSerialize: serialize_ai_codemaker_service_AssistantSpeechResponse,
    responseDeserialize: deserialize_ai_codemaker_service_AssistantSpeechResponse,
  },
  registerAssistantFeedback: {
    path: '/ai.codemaker.service.CodemakerService/RegisterAssistantFeedback',
    requestStream: false,
    responseStream: false,
    requestType: src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackRequest,
    responseType: src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackResponse,
    requestSerialize: serialize_ai_codemaker_service_RegisterAssistantFeedbackRequest,
    requestDeserialize: deserialize_ai_codemaker_service_RegisterAssistantFeedbackRequest,
    responseSerialize: serialize_ai_codemaker_service_RegisterAssistantFeedbackResponse,
    responseDeserialize: deserialize_ai_codemaker_service_RegisterAssistantFeedbackResponse,
  },
  completion: {
    path: '/ai.codemaker.service.CodemakerService/Completion',
    requestStream: false,
    responseStream: false,
    requestType: src_sdk_proto_codemakerai_pb.CompletionRequest,
    responseType: src_sdk_proto_codemakerai_pb.CompletionResponse,
    requestSerialize: serialize_ai_codemaker_service_CompletionRequest,
    requestDeserialize: deserialize_ai_codemaker_service_CompletionRequest,
    responseSerialize: serialize_ai_codemaker_service_CompletionResponse,
    responseDeserialize: deserialize_ai_codemaker_service_CompletionResponse,
  },
  process: {
    path: '/ai.codemaker.service.CodemakerService/Process',
    requestStream: false,
    responseStream: false,
    requestType: src_sdk_proto_codemakerai_pb.ProcessRequest,
    responseType: src_sdk_proto_codemakerai_pb.ProcessResponse,
    requestSerialize: serialize_ai_codemaker_service_ProcessRequest,
    requestDeserialize: deserialize_ai_codemaker_service_ProcessRequest,
    responseSerialize: serialize_ai_codemaker_service_ProcessResponse,
    responseDeserialize: deserialize_ai_codemaker_service_ProcessResponse,
  },
  predict: {
    path: '/ai.codemaker.service.CodemakerService/Predict',
    requestStream: false,
    responseStream: false,
    requestType: src_sdk_proto_codemakerai_pb.PredictRequest,
    responseType: src_sdk_proto_codemakerai_pb.PredictResponse,
    requestSerialize: serialize_ai_codemaker_service_PredictRequest,
    requestDeserialize: deserialize_ai_codemaker_service_PredictRequest,
    responseSerialize: serialize_ai_codemaker_service_PredictResponse,
    responseDeserialize: deserialize_ai_codemaker_service_PredictResponse,
  },
  discoverContext: {
    path: '/ai.codemaker.service.CodemakerService/DiscoverContext',
    requestStream: false,
    responseStream: false,
    requestType: src_sdk_proto_codemakerai_pb.DiscoverSourceContextRequest,
    responseType: src_sdk_proto_codemakerai_pb.DiscoverSourceContextResponse,
    requestSerialize: serialize_ai_codemaker_service_DiscoverSourceContextRequest,
    requestDeserialize: deserialize_ai_codemaker_service_DiscoverSourceContextRequest,
    responseSerialize: serialize_ai_codemaker_service_DiscoverSourceContextResponse,
    responseDeserialize: deserialize_ai_codemaker_service_DiscoverSourceContextResponse,
  },
  createContext: {
    path: '/ai.codemaker.service.CodemakerService/CreateContext',
    requestStream: false,
    responseStream: false,
    requestType: src_sdk_proto_codemakerai_pb.CreateSourceContextRequest,
    responseType: src_sdk_proto_codemakerai_pb.CreateSourceContextResponse,
    requestSerialize: serialize_ai_codemaker_service_CreateSourceContextRequest,
    requestDeserialize: deserialize_ai_codemaker_service_CreateSourceContextRequest,
    responseSerialize: serialize_ai_codemaker_service_CreateSourceContextResponse,
    responseDeserialize: deserialize_ai_codemaker_service_CreateSourceContextResponse,
  },
  registerContext: {
    path: '/ai.codemaker.service.CodemakerService/RegisterContext',
    requestStream: false,
    responseStream: false,
    requestType: src_sdk_proto_codemakerai_pb.RegisterSourceContextRequest,
    responseType: src_sdk_proto_codemakerai_pb.RegisterSourceContextResponse,
    requestSerialize: serialize_ai_codemaker_service_RegisterSourceContextRequest,
    requestDeserialize: deserialize_ai_codemaker_service_RegisterSourceContextRequest,
    responseSerialize: serialize_ai_codemaker_service_RegisterSourceContextResponse,
    responseDeserialize: deserialize_ai_codemaker_service_RegisterSourceContextResponse,
  },
  listModels: {
    path: '/ai.codemaker.service.CodemakerService/ListModels',
    requestStream: false,
    responseStream: false,
    requestType: src_sdk_proto_codemakerai_pb.ListModelsRequest,
    responseType: src_sdk_proto_codemakerai_pb.ListModelsResponse,
    requestSerialize: serialize_ai_codemaker_service_ListModelsRequest,
    requestDeserialize: deserialize_ai_codemaker_service_ListModelsRequest,
    responseSerialize: serialize_ai_codemaker_service_ListModelsResponse,
    responseDeserialize: deserialize_ai_codemaker_service_ListModelsResponse,
  },
};

exports.CodemakerServiceClient = grpc.makeGenericClientConstructor(CodemakerServiceService);
