// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file steammessages.proto (syntax proto2)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2, protoInt64 } from "@bufbuild/protobuf";
import { FieldOptions, MessageOptions } from "./google/protobuf/descriptor_pb.js";

/**
 * @generated from enum GCProtoBufMsgSrc
 */
export enum GCProtoBufMsgSrc {
  /**
   * @generated from enum value: GCProtoBufMsgSrc_Unspecified = 0;
   */
  GCProtoBufMsgSrc_Unspecified = 0,

  /**
   * @generated from enum value: GCProtoBufMsgSrc_FromSystem = 1;
   */
  GCProtoBufMsgSrc_FromSystem = 1,

  /**
   * @generated from enum value: GCProtoBufMsgSrc_FromSteamID = 2;
   */
  GCProtoBufMsgSrc_FromSteamID = 2,

  /**
   * @generated from enum value: GCProtoBufMsgSrc_FromGC = 3;
   */
  GCProtoBufMsgSrc_FromGC = 3,

  /**
   * @generated from enum value: GCProtoBufMsgSrc_ReplySystem = 4;
   */
  GCProtoBufMsgSrc_ReplySystem = 4,
}
// Retrieve enum metadata with: proto2.getEnumType(GCProtoBufMsgSrc)
proto2.util.setEnumType(GCProtoBufMsgSrc, "GCProtoBufMsgSrc", [
  { no: 0, name: "GCProtoBufMsgSrc_Unspecified" },
  { no: 1, name: "GCProtoBufMsgSrc_FromSystem" },
  { no: 2, name: "GCProtoBufMsgSrc_FromSteamID" },
  { no: 3, name: "GCProtoBufMsgSrc_FromGC" },
  { no: 4, name: "GCProtoBufMsgSrc_ReplySystem" },
]);

/**
 * @generated from message CMsgProtoBufHeader
 */
export class CMsgProtoBufHeader extends Message<CMsgProtoBufHeader> {
  /**
   * @generated from field: optional fixed64 client_steam_id = 1;
   */
  clientSteamId?: bigint;

  /**
   * @generated from field: optional int32 client_session_id = 2;
   */
  clientSessionId?: number;

  /**
   * @generated from field: optional uint32 source_app_id = 3;
   */
  sourceAppId?: number;

  /**
   * @generated from field: optional fixed64 job_id_source = 10 [default = 18446744073709551615];
   */
  jobIdSource?: bigint;

  /**
   * @generated from field: optional fixed64 job_id_target = 11 [default = 18446744073709551615];
   */
  jobIdTarget?: bigint;

  /**
   * @generated from field: optional string target_job_name = 12;
   */
  targetJobName?: string;

  /**
   * @generated from field: optional int32 eresult = 13 [default = 2];
   */
  eresult?: number;

  /**
   * @generated from field: optional string error_message = 14;
   */
  errorMessage?: string;

  /**
   * @generated from field: optional uint32 ip = 15;
   */
  ip?: number;

  /**
   * @generated from field: optional GCProtoBufMsgSrc gc_msg_src = 200 [default = GCProtoBufMsgSrc_Unspecified];
   */
  gcMsgSrc?: GCProtoBufMsgSrc;

  /**
   * @generated from field: optional uint32 gc_dir_index_source = 201;
   */
  gcDirIndexSource?: number;

  constructor(data?: PartialMessage<CMsgProtoBufHeader>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "CMsgProtoBufHeader";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "client_steam_id", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true },
    { no: 2, name: "client_session_id", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "source_app_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 10, name: "job_id_source", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true, default: protoInt64.uParse("18446744073709551615") },
    { no: 11, name: "job_id_target", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true, default: protoInt64.uParse("18446744073709551615") },
    { no: 12, name: "target_job_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 13, name: "eresult", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true, default: 2 },
    { no: 14, name: "error_message", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 15, name: "ip", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 200, name: "gc_msg_src", kind: "enum", T: proto2.getEnumType(GCProtoBufMsgSrc), opt: true, default: GCProtoBufMsgSrc.GCProtoBufMsgSrc_Unspecified },
    { no: 201, name: "gc_dir_index_source", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CMsgProtoBufHeader {
    return new CMsgProtoBufHeader().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CMsgProtoBufHeader {
    return new CMsgProtoBufHeader().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CMsgProtoBufHeader {
    return new CMsgProtoBufHeader().fromJsonString(jsonString, options);
  }

  static equals(a: CMsgProtoBufHeader | PlainMessage<CMsgProtoBufHeader> | undefined, b: CMsgProtoBufHeader | PlainMessage<CMsgProtoBufHeader> | undefined): boolean {
    return proto2.util.equals(CMsgProtoBufHeader, a, b);
  }
}

/**
 * @generated from message CChinaAgreementSessions_StartAgreementSessionInGame_Request
 */
export class CChinaAgreementSessions_StartAgreementSessionInGame_Request extends Message<CChinaAgreementSessions_StartAgreementSessionInGame_Request> {
  /**
   * @generated from field: optional uint32 appid = 1;
   */
  appid?: number;

  /**
   * @generated from field: optional fixed64 steamid = 2;
   */
  steamid?: bigint;

  /**
   * @generated from field: optional string client_ipaddress = 3;
   */
  clientIpaddress?: string;

  constructor(data?: PartialMessage<CChinaAgreementSessions_StartAgreementSessionInGame_Request>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "CChinaAgreementSessions_StartAgreementSessionInGame_Request";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "appid", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 2, name: "steamid", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true },
    { no: 3, name: "client_ipaddress", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CChinaAgreementSessions_StartAgreementSessionInGame_Request {
    return new CChinaAgreementSessions_StartAgreementSessionInGame_Request().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CChinaAgreementSessions_StartAgreementSessionInGame_Request {
    return new CChinaAgreementSessions_StartAgreementSessionInGame_Request().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CChinaAgreementSessions_StartAgreementSessionInGame_Request {
    return new CChinaAgreementSessions_StartAgreementSessionInGame_Request().fromJsonString(jsonString, options);
  }

  static equals(a: CChinaAgreementSessions_StartAgreementSessionInGame_Request | PlainMessage<CChinaAgreementSessions_StartAgreementSessionInGame_Request> | undefined, b: CChinaAgreementSessions_StartAgreementSessionInGame_Request | PlainMessage<CChinaAgreementSessions_StartAgreementSessionInGame_Request> | undefined): boolean {
    return proto2.util.equals(CChinaAgreementSessions_StartAgreementSessionInGame_Request, a, b);
  }
}

/**
 * @generated from message CChinaAgreementSessions_StartAgreementSessionInGame_Response
 */
export class CChinaAgreementSessions_StartAgreementSessionInGame_Response extends Message<CChinaAgreementSessions_StartAgreementSessionInGame_Response> {
  /**
   * @generated from field: optional string agreement_url = 1;
   */
  agreementUrl?: string;

  constructor(data?: PartialMessage<CChinaAgreementSessions_StartAgreementSessionInGame_Response>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "CChinaAgreementSessions_StartAgreementSessionInGame_Response";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "agreement_url", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CChinaAgreementSessions_StartAgreementSessionInGame_Response {
    return new CChinaAgreementSessions_StartAgreementSessionInGame_Response().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CChinaAgreementSessions_StartAgreementSessionInGame_Response {
    return new CChinaAgreementSessions_StartAgreementSessionInGame_Response().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CChinaAgreementSessions_StartAgreementSessionInGame_Response {
    return new CChinaAgreementSessions_StartAgreementSessionInGame_Response().fromJsonString(jsonString, options);
  }

  static equals(a: CChinaAgreementSessions_StartAgreementSessionInGame_Response | PlainMessage<CChinaAgreementSessions_StartAgreementSessionInGame_Response> | undefined, b: CChinaAgreementSessions_StartAgreementSessionInGame_Response | PlainMessage<CChinaAgreementSessions_StartAgreementSessionInGame_Response> | undefined): boolean {
    return proto2.util.equals(CChinaAgreementSessions_StartAgreementSessionInGame_Response, a, b);
  }
}

/**
 * @generated from extension: optional bool key_field = 60000 [default = false];
 */
export const key_field = proto2.makeExtension<FieldOptions, boolean>(
  "key_field", 
  FieldOptions, 
  { no: 60000, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
);

/**
 * @generated from extension: optional int32 msgpool_soft_limit = 60000 [default = 32];
 */
export const msgpool_soft_limit = proto2.makeExtension<MessageOptions, number>(
  "msgpool_soft_limit", 
  MessageOptions, 
  { no: 60000, kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true, default: 32 },
);

/**
 * @generated from extension: optional int32 msgpool_hard_limit = 60001 [default = 384];
 */
export const msgpool_hard_limit = proto2.makeExtension<MessageOptions, number>(
  "msgpool_hard_limit", 
  MessageOptions, 
  { no: 60001, kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true, default: 384 },
);

