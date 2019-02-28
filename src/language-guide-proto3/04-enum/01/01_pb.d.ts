// package: 
// file: src/language-guide-proto3/04-enum/01/01.proto

import * as jspb from "google-protobuf";

export class M extends jspb.Message {
  getE01(): M.E01;
  setE01(value: M.E01): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): M.AsObject;
  static toObject(includeInstance: boolean, msg: M): M.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: M, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): M;
  static deserializeBinaryFromReader(message: M, reader: jspb.BinaryReader): M;
}

export namespace M {
  export type AsObject = {
    e01: M.E01,
  }

  export enum E01 {
    A = 0,
    B = 1,
  }
}

