// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file network_connection.proto (syntax proto2)
/* eslint-disable */
// @ts-nocheck

import { proto2 } from "@bufbuild/protobuf";
import { EnumValueOptions } from "./google/protobuf/descriptor_pb.js";

/**
 * @generated from enum ENetworkDisconnectionReason
 */
export enum ENetworkDisconnectionReason {
  /**
   * @generated from enum value: NETWORK_DISCONNECT_INVALID = 0;
   */
  NETWORK_DISCONNECT_INVALID = 0,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_SHUTDOWN = 1;
   */
  NETWORK_DISCONNECT_SHUTDOWN = 1,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_DISCONNECT_BY_USER = 2;
   */
  NETWORK_DISCONNECT_DISCONNECT_BY_USER = 2,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_DISCONNECT_BY_SERVER = 3;
   */
  NETWORK_DISCONNECT_DISCONNECT_BY_SERVER = 3,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_LOST = 4;
   */
  NETWORK_DISCONNECT_LOST = 4,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_OVERFLOW = 5;
   */
  NETWORK_DISCONNECT_OVERFLOW = 5,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STEAM_BANNED = 6;
   */
  NETWORK_DISCONNECT_STEAM_BANNED = 6,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STEAM_INUSE = 7;
   */
  NETWORK_DISCONNECT_STEAM_INUSE = 7,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STEAM_TICKET = 8;
   */
  NETWORK_DISCONNECT_STEAM_TICKET = 8,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STEAM_LOGON = 9;
   */
  NETWORK_DISCONNECT_STEAM_LOGON = 9,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STEAM_AUTHCANCELLED = 10;
   */
  NETWORK_DISCONNECT_STEAM_AUTHCANCELLED = 10,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED = 11;
   */
  NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED = 11,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STEAM_AUTHINVALID = 12;
   */
  NETWORK_DISCONNECT_STEAM_AUTHINVALID = 12,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STEAM_VACBANSTATE = 13;
   */
  NETWORK_DISCONNECT_STEAM_VACBANSTATE = 13,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE = 14;
   */
  NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE = 14,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT = 15;
   */
  NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT = 15,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STEAM_DROPPED = 16;
   */
  NETWORK_DISCONNECT_STEAM_DROPPED = 16,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STEAM_OWNERSHIP = 17;
   */
  NETWORK_DISCONNECT_STEAM_OWNERSHIP = 17,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_SERVERINFO_OVERFLOW = 18;
   */
  NETWORK_DISCONNECT_SERVERINFO_OVERFLOW = 18,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_TICKMSG_OVERFLOW = 19;
   */
  NETWORK_DISCONNECT_TICKMSG_OVERFLOW = 19,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW = 20;
   */
  NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW = 20,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW = 21;
   */
  NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW = 21,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW = 22;
   */
  NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW = 22,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW = 23;
   */
  NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW = 23,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_SNAPSHOTOVERFLOW = 24;
   */
  NETWORK_DISCONNECT_SNAPSHOTOVERFLOW = 24,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_SNAPSHOTERROR = 25;
   */
  NETWORK_DISCONNECT_SNAPSHOTERROR = 25,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_RELIABLEOVERFLOW = 26;
   */
  NETWORK_DISCONNECT_RELIABLEOVERFLOW = 26,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_BADDELTATICK = 27;
   */
  NETWORK_DISCONNECT_BADDELTATICK = 27,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_NOMORESPLITS = 28;
   */
  NETWORK_DISCONNECT_NOMORESPLITS = 28,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_TIMEDOUT = 29;
   */
  NETWORK_DISCONNECT_TIMEDOUT = 29,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_DISCONNECTED = 30;
   */
  NETWORK_DISCONNECT_DISCONNECTED = 30,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_LEAVINGSPLIT = 31;
   */
  NETWORK_DISCONNECT_LEAVINGSPLIT = 31,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_DIFFERENTCLASSTABLES = 32;
   */
  NETWORK_DISCONNECT_DIFFERENTCLASSTABLES = 32,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_BADRELAYPASSWORD = 33;
   */
  NETWORK_DISCONNECT_BADRELAYPASSWORD = 33,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_BADSPECTATORPASSWORD = 34;
   */
  NETWORK_DISCONNECT_BADSPECTATORPASSWORD = 34,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_HLTVRESTRICTED = 35;
   */
  NETWORK_DISCONNECT_HLTVRESTRICTED = 35,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_NOSPECTATORS = 36;
   */
  NETWORK_DISCONNECT_NOSPECTATORS = 36,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_HLTVUNAVAILABLE = 37;
   */
  NETWORK_DISCONNECT_HLTVUNAVAILABLE = 37,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_HLTVSTOP = 38;
   */
  NETWORK_DISCONNECT_HLTVSTOP = 38,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_KICKED = 39;
   */
  NETWORK_DISCONNECT_KICKED = 39,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_BANADDED = 40;
   */
  NETWORK_DISCONNECT_BANADDED = 40,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_KICKBANADDED = 41;
   */
  NETWORK_DISCONNECT_KICKBANADDED = 41,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_HLTVDIRECT = 42;
   */
  NETWORK_DISCONNECT_HLTVDIRECT = 42,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA = 43;
   */
  NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA = 43,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_PURESERVER_MISMATCH = 44;
   */
  NETWORK_DISCONNECT_PURESERVER_MISMATCH = 44,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_USERCMD = 45;
   */
  NETWORK_DISCONNECT_USERCMD = 45,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECTED_BY_GAME = 46;
   */
  NETWORK_DISCONNECT_REJECTED_BY_GAME = 46,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR = 47;
   */
  NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR = 47,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR = 48;
   */
  NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR = 48,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_BAD_SERVER_PASSWORD = 49;
   */
  NETWORK_DISCONNECT_BAD_SERVER_PASSWORD = 49,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION = 50;
   */
  NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION = 50,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_CONNECTION_FAILURE = 51;
   */
  NETWORK_DISCONNECT_CONNECTION_FAILURE = 51,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS = 52;
   */
  NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS = 52,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_RECONNECTION = 53;
   */
  NETWORK_DISCONNECT_RECONNECTION = 53,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_LOOPSHUTDOWN = 54;
   */
  NETWORK_DISCONNECT_LOOPSHUTDOWN = 54,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_LOOPDEACTIVATE = 55;
   */
  NETWORK_DISCONNECT_LOOPDEACTIVATE = 55,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_HOST_ENDGAME = 56;
   */
  NETWORK_DISCONNECT_HOST_ENDGAME = 56,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_LOOP_LEVELLOAD_ACTIVATE = 57;
   */
  NETWORK_DISCONNECT_LOOP_LEVELLOAD_ACTIVATE = 57,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_CREATE_SERVER_FAILED = 58;
   */
  NETWORK_DISCONNECT_CREATE_SERVER_FAILED = 58,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_EXITING = 59;
   */
  NETWORK_DISCONNECT_EXITING = 59,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REQUEST_HOSTSTATE_IDLE = 60;
   */
  NETWORK_DISCONNECT_REQUEST_HOSTSTATE_IDLE = 60,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REQUEST_HOSTSTATE_HLTVRELAY = 61;
   */
  NETWORK_DISCONNECT_REQUEST_HOSTSTATE_HLTVRELAY = 61,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_CLIENT_CONSISTENCY_FAIL = 62;
   */
  NETWORK_DISCONNECT_CLIENT_CONSISTENCY_FAIL = 62,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_CLIENT_UNABLE_TO_CRC_MAP = 63;
   */
  NETWORK_DISCONNECT_CLIENT_UNABLE_TO_CRC_MAP = 63,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_CLIENT_NO_MAP = 64;
   */
  NETWORK_DISCONNECT_CLIENT_NO_MAP = 64,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_CLIENT_DIFFERENT_MAP = 65;
   */
  NETWORK_DISCONNECT_CLIENT_DIFFERENT_MAP = 65,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_SERVER_REQUIRES_STEAM = 66;
   */
  NETWORK_DISCONNECT_SERVER_REQUIRES_STEAM = 66,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STEAM_DENY_MISC = 67;
   */
  NETWORK_DISCONNECT_STEAM_DENY_MISC = 67,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_STEAM_DENY_BAD_ANTI_CHEAT = 68;
   */
  NETWORK_DISCONNECT_STEAM_DENY_BAD_ANTI_CHEAT = 68,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_SERVER_SHUTDOWN = 69;
   */
  NETWORK_DISCONNECT_SERVER_SHUTDOWN = 69,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REPLAY_INCOMPATIBLE = 71;
   */
  NETWORK_DISCONNECT_REPLAY_INCOMPATIBLE = 71,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_CONNECT_REQUEST_TIMEDOUT = 72;
   */
  NETWORK_DISCONNECT_CONNECT_REQUEST_TIMEDOUT = 72,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_SERVER_INCOMPATIBLE = 73;
   */
  NETWORK_DISCONNECT_SERVER_INCOMPATIBLE = 73,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_LOCALPROBLEM_MANYRELAYS = 74;
   */
  NETWORK_DISCONNECT_LOCALPROBLEM_MANYRELAYS = 74,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_LOCALPROBLEM_HOSTEDSERVERPRIMARYRELAY = 75;
   */
  NETWORK_DISCONNECT_LOCALPROBLEM_HOSTEDSERVERPRIMARYRELAY = 75,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_LOCALPROBLEM_NETWORKCONFIG = 76;
   */
  NETWORK_DISCONNECT_LOCALPROBLEM_NETWORKCONFIG = 76,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_LOCALPROBLEM_OTHER = 77;
   */
  NETWORK_DISCONNECT_LOCALPROBLEM_OTHER = 77,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REMOTE_TIMEOUT = 79;
   */
  NETWORK_DISCONNECT_REMOTE_TIMEOUT = 79,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REMOTE_TIMEOUT_CONNECTING = 80;
   */
  NETWORK_DISCONNECT_REMOTE_TIMEOUT_CONNECTING = 80,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REMOTE_OTHER = 81;
   */
  NETWORK_DISCONNECT_REMOTE_OTHER = 81,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REMOTE_BADCRYPT = 82;
   */
  NETWORK_DISCONNECT_REMOTE_BADCRYPT = 82,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REMOTE_CERTNOTTRUSTED = 83;
   */
  NETWORK_DISCONNECT_REMOTE_CERTNOTTRUSTED = 83,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_UNUSUAL = 84;
   */
  NETWORK_DISCONNECT_UNUSUAL = 84,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_INTERNAL_ERROR = 85;
   */
  NETWORK_DISCONNECT_INTERNAL_ERROR = 85,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_BADCHALLENGE = 128;
   */
  NETWORK_DISCONNECT_REJECT_BADCHALLENGE = 128,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_NOLOBBY = 129;
   */
  NETWORK_DISCONNECT_REJECT_NOLOBBY = 129,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_BACKGROUND_MAP = 130;
   */
  NETWORK_DISCONNECT_REJECT_BACKGROUND_MAP = 130,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_SINGLE_PLAYER = 131;
   */
  NETWORK_DISCONNECT_REJECT_SINGLE_PLAYER = 131,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_HIDDEN_GAME = 132;
   */
  NETWORK_DISCONNECT_REJECT_HIDDEN_GAME = 132,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_LANRESTRICT = 133;
   */
  NETWORK_DISCONNECT_REJECT_LANRESTRICT = 133,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_BADPASSWORD = 134;
   */
  NETWORK_DISCONNECT_REJECT_BADPASSWORD = 134,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_SERVERFULL = 135;
   */
  NETWORK_DISCONNECT_REJECT_SERVERFULL = 135,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_INVALIDRESERVATION = 136;
   */
  NETWORK_DISCONNECT_REJECT_INVALIDRESERVATION = 136,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_FAILEDCHANNEL = 137;
   */
  NETWORK_DISCONNECT_REJECT_FAILEDCHANNEL = 137,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_CONNECT_FROM_LOBBY = 138;
   */
  NETWORK_DISCONNECT_REJECT_CONNECT_FROM_LOBBY = 138,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_RESERVED_FOR_LOBBY = 139;
   */
  NETWORK_DISCONNECT_REJECT_RESERVED_FOR_LOBBY = 139,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_INVALIDKEYLENGTH = 140;
   */
  NETWORK_DISCONNECT_REJECT_INVALIDKEYLENGTH = 140,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_OLDPROTOCOL = 141;
   */
  NETWORK_DISCONNECT_REJECT_OLDPROTOCOL = 141,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_NEWPROTOCOL = 142;
   */
  NETWORK_DISCONNECT_REJECT_NEWPROTOCOL = 142,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_INVALIDCONNECTION = 143;
   */
  NETWORK_DISCONNECT_REJECT_INVALIDCONNECTION = 143,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_INVALIDCERTLEN = 144;
   */
  NETWORK_DISCONNECT_REJECT_INVALIDCERTLEN = 144,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_INVALIDSTEAMCERTLEN = 145;
   */
  NETWORK_DISCONNECT_REJECT_INVALIDSTEAMCERTLEN = 145,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_STEAM = 146;
   */
  NETWORK_DISCONNECT_REJECT_STEAM = 146,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_SERVERAUTHDISABLED = 147;
   */
  NETWORK_DISCONNECT_REJECT_SERVERAUTHDISABLED = 147,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_SERVERCDKEYAUTHINVALID = 148;
   */
  NETWORK_DISCONNECT_REJECT_SERVERCDKEYAUTHINVALID = 148,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_REJECT_BANNED = 149;
   */
  NETWORK_DISCONNECT_REJECT_BANNED = 149,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_KICKED_TEAMKILLING = 150;
   */
  NETWORK_DISCONNECT_KICKED_TEAMKILLING = 150,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_KICKED_TK_START = 151;
   */
  NETWORK_DISCONNECT_KICKED_TK_START = 151,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_KICKED_UNTRUSTEDACCOUNT = 152;
   */
  NETWORK_DISCONNECT_KICKED_UNTRUSTEDACCOUNT = 152,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_KICKED_CONVICTEDACCOUNT = 153;
   */
  NETWORK_DISCONNECT_KICKED_CONVICTEDACCOUNT = 153,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_KICKED_COMPETITIVECOOLDOWN = 154;
   */
  NETWORK_DISCONNECT_KICKED_COMPETITIVECOOLDOWN = 154,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_KICKED_TEAMHURTING = 155;
   */
  NETWORK_DISCONNECT_KICKED_TEAMHURTING = 155,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_KICKED_HOSTAGEKILLING = 156;
   */
  NETWORK_DISCONNECT_KICKED_HOSTAGEKILLING = 156,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_KICKED_VOTEDOFF = 157;
   */
  NETWORK_DISCONNECT_KICKED_VOTEDOFF = 157,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_KICKED_IDLE = 158;
   */
  NETWORK_DISCONNECT_KICKED_IDLE = 158,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_KICKED_SUICIDE = 159;
   */
  NETWORK_DISCONNECT_KICKED_SUICIDE = 159,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_KICKED_NOSTEAMLOGIN = 160;
   */
  NETWORK_DISCONNECT_KICKED_NOSTEAMLOGIN = 160,

  /**
   * @generated from enum value: NETWORK_DISCONNECT_KICKED_NOSTEAMTICKET = 161;
   */
  NETWORK_DISCONNECT_KICKED_NOSTEAMTICKET = 161,
}
// Retrieve enum metadata with: proto2.getEnumType(ENetworkDisconnectionReason)
proto2.util.setEnumType(ENetworkDisconnectionReason, "ENetworkDisconnectionReason", [
  { no: 0, name: "NETWORK_DISCONNECT_INVALID" },
  { no: 1, name: "NETWORK_DISCONNECT_SHUTDOWN" },
  { no: 2, name: "NETWORK_DISCONNECT_DISCONNECT_BY_USER" },
  { no: 3, name: "NETWORK_DISCONNECT_DISCONNECT_BY_SERVER" },
  { no: 4, name: "NETWORK_DISCONNECT_LOST" },
  { no: 5, name: "NETWORK_DISCONNECT_OVERFLOW" },
  { no: 6, name: "NETWORK_DISCONNECT_STEAM_BANNED" },
  { no: 7, name: "NETWORK_DISCONNECT_STEAM_INUSE" },
  { no: 8, name: "NETWORK_DISCONNECT_STEAM_TICKET" },
  { no: 9, name: "NETWORK_DISCONNECT_STEAM_LOGON" },
  { no: 10, name: "NETWORK_DISCONNECT_STEAM_AUTHCANCELLED" },
  { no: 11, name: "NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED" },
  { no: 12, name: "NETWORK_DISCONNECT_STEAM_AUTHINVALID" },
  { no: 13, name: "NETWORK_DISCONNECT_STEAM_VACBANSTATE" },
  { no: 14, name: "NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE" },
  { no: 15, name: "NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT" },
  { no: 16, name: "NETWORK_DISCONNECT_STEAM_DROPPED" },
  { no: 17, name: "NETWORK_DISCONNECT_STEAM_OWNERSHIP" },
  { no: 18, name: "NETWORK_DISCONNECT_SERVERINFO_OVERFLOW" },
  { no: 19, name: "NETWORK_DISCONNECT_TICKMSG_OVERFLOW" },
  { no: 20, name: "NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW" },
  { no: 21, name: "NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW" },
  { no: 22, name: "NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW" },
  { no: 23, name: "NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW" },
  { no: 24, name: "NETWORK_DISCONNECT_SNAPSHOTOVERFLOW" },
  { no: 25, name: "NETWORK_DISCONNECT_SNAPSHOTERROR" },
  { no: 26, name: "NETWORK_DISCONNECT_RELIABLEOVERFLOW" },
  { no: 27, name: "NETWORK_DISCONNECT_BADDELTATICK" },
  { no: 28, name: "NETWORK_DISCONNECT_NOMORESPLITS" },
  { no: 29, name: "NETWORK_DISCONNECT_TIMEDOUT" },
  { no: 30, name: "NETWORK_DISCONNECT_DISCONNECTED" },
  { no: 31, name: "NETWORK_DISCONNECT_LEAVINGSPLIT" },
  { no: 32, name: "NETWORK_DISCONNECT_DIFFERENTCLASSTABLES" },
  { no: 33, name: "NETWORK_DISCONNECT_BADRELAYPASSWORD" },
  { no: 34, name: "NETWORK_DISCONNECT_BADSPECTATORPASSWORD" },
  { no: 35, name: "NETWORK_DISCONNECT_HLTVRESTRICTED" },
  { no: 36, name: "NETWORK_DISCONNECT_NOSPECTATORS" },
  { no: 37, name: "NETWORK_DISCONNECT_HLTVUNAVAILABLE" },
  { no: 38, name: "NETWORK_DISCONNECT_HLTVSTOP" },
  { no: 39, name: "NETWORK_DISCONNECT_KICKED" },
  { no: 40, name: "NETWORK_DISCONNECT_BANADDED" },
  { no: 41, name: "NETWORK_DISCONNECT_KICKBANADDED" },
  { no: 42, name: "NETWORK_DISCONNECT_HLTVDIRECT" },
  { no: 43, name: "NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA" },
  { no: 44, name: "NETWORK_DISCONNECT_PURESERVER_MISMATCH" },
  { no: 45, name: "NETWORK_DISCONNECT_USERCMD" },
  { no: 46, name: "NETWORK_DISCONNECT_REJECTED_BY_GAME" },
  { no: 47, name: "NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR" },
  { no: 48, name: "NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR" },
  { no: 49, name: "NETWORK_DISCONNECT_BAD_SERVER_PASSWORD" },
  { no: 50, name: "NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION" },
  { no: 51, name: "NETWORK_DISCONNECT_CONNECTION_FAILURE" },
  { no: 52, name: "NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS" },
  { no: 53, name: "NETWORK_DISCONNECT_RECONNECTION" },
  { no: 54, name: "NETWORK_DISCONNECT_LOOPSHUTDOWN" },
  { no: 55, name: "NETWORK_DISCONNECT_LOOPDEACTIVATE" },
  { no: 56, name: "NETWORK_DISCONNECT_HOST_ENDGAME" },
  { no: 57, name: "NETWORK_DISCONNECT_LOOP_LEVELLOAD_ACTIVATE" },
  { no: 58, name: "NETWORK_DISCONNECT_CREATE_SERVER_FAILED" },
  { no: 59, name: "NETWORK_DISCONNECT_EXITING" },
  { no: 60, name: "NETWORK_DISCONNECT_REQUEST_HOSTSTATE_IDLE" },
  { no: 61, name: "NETWORK_DISCONNECT_REQUEST_HOSTSTATE_HLTVRELAY" },
  { no: 62, name: "NETWORK_DISCONNECT_CLIENT_CONSISTENCY_FAIL" },
  { no: 63, name: "NETWORK_DISCONNECT_CLIENT_UNABLE_TO_CRC_MAP" },
  { no: 64, name: "NETWORK_DISCONNECT_CLIENT_NO_MAP" },
  { no: 65, name: "NETWORK_DISCONNECT_CLIENT_DIFFERENT_MAP" },
  { no: 66, name: "NETWORK_DISCONNECT_SERVER_REQUIRES_STEAM" },
  { no: 67, name: "NETWORK_DISCONNECT_STEAM_DENY_MISC" },
  { no: 68, name: "NETWORK_DISCONNECT_STEAM_DENY_BAD_ANTI_CHEAT" },
  { no: 69, name: "NETWORK_DISCONNECT_SERVER_SHUTDOWN" },
  { no: 71, name: "NETWORK_DISCONNECT_REPLAY_INCOMPATIBLE" },
  { no: 72, name: "NETWORK_DISCONNECT_CONNECT_REQUEST_TIMEDOUT" },
  { no: 73, name: "NETWORK_DISCONNECT_SERVER_INCOMPATIBLE" },
  { no: 74, name: "NETWORK_DISCONNECT_LOCALPROBLEM_MANYRELAYS" },
  { no: 75, name: "NETWORK_DISCONNECT_LOCALPROBLEM_HOSTEDSERVERPRIMARYRELAY" },
  { no: 76, name: "NETWORK_DISCONNECT_LOCALPROBLEM_NETWORKCONFIG" },
  { no: 77, name: "NETWORK_DISCONNECT_LOCALPROBLEM_OTHER" },
  { no: 79, name: "NETWORK_DISCONNECT_REMOTE_TIMEOUT" },
  { no: 80, name: "NETWORK_DISCONNECT_REMOTE_TIMEOUT_CONNECTING" },
  { no: 81, name: "NETWORK_DISCONNECT_REMOTE_OTHER" },
  { no: 82, name: "NETWORK_DISCONNECT_REMOTE_BADCRYPT" },
  { no: 83, name: "NETWORK_DISCONNECT_REMOTE_CERTNOTTRUSTED" },
  { no: 84, name: "NETWORK_DISCONNECT_UNUSUAL" },
  { no: 85, name: "NETWORK_DISCONNECT_INTERNAL_ERROR" },
  { no: 128, name: "NETWORK_DISCONNECT_REJECT_BADCHALLENGE" },
  { no: 129, name: "NETWORK_DISCONNECT_REJECT_NOLOBBY" },
  { no: 130, name: "NETWORK_DISCONNECT_REJECT_BACKGROUND_MAP" },
  { no: 131, name: "NETWORK_DISCONNECT_REJECT_SINGLE_PLAYER" },
  { no: 132, name: "NETWORK_DISCONNECT_REJECT_HIDDEN_GAME" },
  { no: 133, name: "NETWORK_DISCONNECT_REJECT_LANRESTRICT" },
  { no: 134, name: "NETWORK_DISCONNECT_REJECT_BADPASSWORD" },
  { no: 135, name: "NETWORK_DISCONNECT_REJECT_SERVERFULL" },
  { no: 136, name: "NETWORK_DISCONNECT_REJECT_INVALIDRESERVATION" },
  { no: 137, name: "NETWORK_DISCONNECT_REJECT_FAILEDCHANNEL" },
  { no: 138, name: "NETWORK_DISCONNECT_REJECT_CONNECT_FROM_LOBBY" },
  { no: 139, name: "NETWORK_DISCONNECT_REJECT_RESERVED_FOR_LOBBY" },
  { no: 140, name: "NETWORK_DISCONNECT_REJECT_INVALIDKEYLENGTH" },
  { no: 141, name: "NETWORK_DISCONNECT_REJECT_OLDPROTOCOL" },
  { no: 142, name: "NETWORK_DISCONNECT_REJECT_NEWPROTOCOL" },
  { no: 143, name: "NETWORK_DISCONNECT_REJECT_INVALIDCONNECTION" },
  { no: 144, name: "NETWORK_DISCONNECT_REJECT_INVALIDCERTLEN" },
  { no: 145, name: "NETWORK_DISCONNECT_REJECT_INVALIDSTEAMCERTLEN" },
  { no: 146, name: "NETWORK_DISCONNECT_REJECT_STEAM" },
  { no: 147, name: "NETWORK_DISCONNECT_REJECT_SERVERAUTHDISABLED" },
  { no: 148, name: "NETWORK_DISCONNECT_REJECT_SERVERCDKEYAUTHINVALID" },
  { no: 149, name: "NETWORK_DISCONNECT_REJECT_BANNED" },
  { no: 150, name: "NETWORK_DISCONNECT_KICKED_TEAMKILLING" },
  { no: 151, name: "NETWORK_DISCONNECT_KICKED_TK_START" },
  { no: 152, name: "NETWORK_DISCONNECT_KICKED_UNTRUSTEDACCOUNT" },
  { no: 153, name: "NETWORK_DISCONNECT_KICKED_CONVICTEDACCOUNT" },
  { no: 154, name: "NETWORK_DISCONNECT_KICKED_COMPETITIVECOOLDOWN" },
  { no: 155, name: "NETWORK_DISCONNECT_KICKED_TEAMHURTING" },
  { no: 156, name: "NETWORK_DISCONNECT_KICKED_HOSTAGEKILLING" },
  { no: 157, name: "NETWORK_DISCONNECT_KICKED_VOTEDOFF" },
  { no: 158, name: "NETWORK_DISCONNECT_KICKED_IDLE" },
  { no: 159, name: "NETWORK_DISCONNECT_KICKED_SUICIDE" },
  { no: 160, name: "NETWORK_DISCONNECT_KICKED_NOSTEAMLOGIN" },
  { no: 161, name: "NETWORK_DISCONNECT_KICKED_NOSTEAMTICKET" },
]);

/**
 * @generated from extension: optional string network_connection_token = 50500;
 */
export const network_connection_token = proto2.makeExtension<EnumValueOptions, string>(
  "network_connection_token", 
  EnumValueOptions, 
  { no: 50500, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

