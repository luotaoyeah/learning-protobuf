// package: 
// file: src/language-guide-proto3/03-default-values/01/01.proto

import * as jspb from "google-protobuf";

export class Foo extends jspb.Message {
  getX(): string;
  setX(value: string): void;

  getY(): Uint8Array | string;
  getY_asU8(): Uint8Array;
  getY_asB64(): string;
  setY(value: Uint8Array | string): void;

  getB(): boolean;
  setB(value: boolean): void;

  getI(): number;
  setI(value: number): void;

  clearRList(): void;
  getRList(): Array<string>;
  setRList(value: Array<string>): void;
  addR(value: string, index?: number): string;

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
    x: string,
    y: Uint8Array | string,
    b: boolean,
    i: number,
    rList: Array<string>,
  }
}

