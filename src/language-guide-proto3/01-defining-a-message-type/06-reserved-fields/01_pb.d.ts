// package: 
// file: src/language-guide-proto3/01-defining-a-message-type/06-reserved-fields/01.proto

import * as jspb from "google-protobuf";

export class Foo extends jspb.Message {
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
  }
}

export class Bar extends jspb.Message {
  getX(): string;
  setX(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bar.AsObject;
  static toObject(includeInstance: boolean, msg: Bar): Bar.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bar;
  static deserializeBinaryFromReader(message: Bar, reader: jspb.BinaryReader): Bar;
}

export namespace Bar {
  export type AsObject = {
    x: string,
  }
}

