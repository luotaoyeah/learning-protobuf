// package: 
// file: src/language-guide-proto3/04-enum/03/01.proto

import * as jspb from "google-protobuf";

export class M01 extends jspb.Message {
  getE(): E;
  setE(value: E): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): M01.AsObject;
  static toObject(includeInstance: boolean, msg: M01): M01.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: M01, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): M01;
  static deserializeBinaryFromReader(message: M01, reader: jspb.BinaryReader): M01;
}

export namespace M01 {
  export type AsObject = {
    e: E,
  }
}

export class M02 extends jspb.Message {
  getE(): E;
  setE(value: E): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): M02.AsObject;
  static toObject(includeInstance: boolean, msg: M02): M02.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: M02, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): M02;
  static deserializeBinaryFromReader(message: M02, reader: jspb.BinaryReader): M02;
}

export namespace M02 {
  export type AsObject = {
    e: E,
  }
}

export enum E {
  A = 0,
  B = 1,
}

