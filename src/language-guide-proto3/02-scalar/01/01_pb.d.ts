// package: 
// file: src/language-guide-proto3/02-scalar/01/01.proto

import * as jspb from "google-protobuf";

export class Foo extends jspb.Message {
  getA(): number;
  setA(value: number): void;

  getB(): number;
  setB(value: number): void;

  getC(): number;
  setC(value: number): void;

  getD(): number;
  setD(value: number): void;

  getE(): number;
  setE(value: number): void;

  getF(): number;
  setF(value: number): void;

  getG(): number;
  setG(value: number): void;

  getH(): number;
  setH(value: number): void;

  getI(): number;
  setI(value: number): void;

  getJ(): number;
  setJ(value: number): void;

  getK(): number;
  setK(value: number): void;

  getL(): number;
  setL(value: number): void;

  getM(): boolean;
  setM(value: boolean): void;

  getN(): string;
  setN(value: string): void;

  getO(): Uint8Array | string;
  getO_asU8(): Uint8Array;
  getO_asB64(): string;
  setO(value: Uint8Array | string): void;

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
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
    g: number,
    h: number,
    i: number,
    j: number,
    k: number,
    l: number,
    m: boolean,
    n: string,
    o: Uint8Array | string,
  }
}

