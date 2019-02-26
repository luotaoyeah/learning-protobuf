// package: 
// file: src/language-guide-proto3/01-defining-a-message-type/04-adding-more-message-types/01.proto

import * as jspb from "google-protobuf";

export class Person extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Person.AsObject;
  static toObject(includeInstance: boolean, msg: Person): Person.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Person, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Person;
  static deserializeBinaryFromReader(message: Person, reader: jspb.BinaryReader): Person;
}

export namespace Person {
  export type AsObject = {
    name: string,
  }
}

export class Boy extends jspb.Message {
  hasParent(): boolean;
  clearParent(): void;
  getParent(): Person | undefined;
  setParent(value?: Person): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Boy.AsObject;
  static toObject(includeInstance: boolean, msg: Boy): Boy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Boy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Boy;
  static deserializeBinaryFromReader(message: Boy, reader: jspb.BinaryReader): Boy;
}

export namespace Boy {
  export type AsObject = {
    parent?: Person.AsObject,
  }
}

