// package: 
// file: src/language-guide-proto3/01-defining-a-message-type/07-whats-generated-from-your-proto/01.proto

import * as jspb from "google-protobuf";

export class Person extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAge(): number;
  setAge(value: number): void;

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
    age: number,
  }
}

