// package: 
// file: src/language-guide-proto3/02-scalar/02-bytes/01.proto

import * as jspb from "google-protobuf";

export class Foo extends jspb.Message {
  getX(): Uint8Array | string;
  getX_asU8(): Uint8Array;
  getX_asB64(): string;
  setX(value: Uint8Array | string): void;

  getY(): Uint8Array | string;
  getY_asU8(): Uint8Array;
  getY_asB64(): string;
  setY(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Foo.AsObject;
  static toObject(includeInstance: boolean, msg: Foo): Foo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Foo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Foo;
  static deserializeBinaryFromReader(message: Foo, reader: jspb.BinaryReader): Foo;
}

export namespace Foo {
  export type AsObject = {
    x: Uint8Array | string,
    y: Uint8Array | string,
  }
}

