// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file engine_gcmessages.proto (syntax proto2)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";

/**
 * @generated from message CEngineGotvSyncPacket
 */
export class CEngineGotvSyncPacket extends Message<CEngineGotvSyncPacket> {
  /**
   * @generated from field: optional uint64 match_id = 1;
   */
  matchId?: bigint;

  /**
   * @generated from field: optional uint32 instance_id = 2;
   */
  instanceId?: number;

  /**
   * @generated from field: optional uint32 signupfragment = 3;
   */
  signupfragment?: number;

  /**
   * @generated from field: optional uint32 currentfragment = 4;
   */
  currentfragment?: number;

  /**
   * @generated from field: optional float tickrate = 5;
   */
  tickrate?: number;

  /**
   * @generated from field: optional uint32 tick = 6;
   */
  tick?: number;

  /**
   * @generated from field: optional float rtdelay = 8;
   */
  rtdelay?: number;

  /**
   * @generated from field: optional float rcvage = 9;
   */
  rcvage?: number;

  /**
   * @generated from field: optional float keyframe_interval = 10;
   */
  keyframeInterval?: number;

  /**
   * @generated from field: optional uint32 cdndelay = 11;
   */
  cdndelay?: number;

  constructor(data?: PartialMessage<CEngineGotvSyncPacket>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "CEngineGotvSyncPacket";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "match_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 2, name: "instance_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 3, name: "signupfragment", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 4, name: "currentfragment", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 5, name: "tickrate", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 6, name: "tick", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 8, name: "rtdelay", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 9, name: "rcvage", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 10, name: "keyframe_interval", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 11, name: "cdndelay", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CEngineGotvSyncPacket {
    return new CEngineGotvSyncPacket().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CEngineGotvSyncPacket {
    return new CEngineGotvSyncPacket().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CEngineGotvSyncPacket {
    return new CEngineGotvSyncPacket().fromJsonString(jsonString, options);
  }

  static equals(a: CEngineGotvSyncPacket | PlainMessage<CEngineGotvSyncPacket> | undefined, b: CEngineGotvSyncPacket | PlainMessage<CEngineGotvSyncPacket> | undefined): boolean {
    return proto2.util.equals(CEngineGotvSyncPacket, a, b);
  }
}
