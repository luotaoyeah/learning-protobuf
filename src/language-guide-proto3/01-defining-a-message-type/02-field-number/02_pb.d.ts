// package: 
// file: src/language-guide-proto3/01-defining-a-message-type/02-field-number/02.proto

import * as jspb from "google-protobuf";

export class SearchRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  getPageNumber(): number;
  setPageNumber(value: number): void;

  getResultPerPage(): number;
  setResultPerPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    query: string,
    pageNumber: number,
    resultPerPage: number,
  }
}

