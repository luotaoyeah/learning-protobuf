/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require("google-protobuf");
var goog = jspb;
var global = Function("return this")();

goog.exportSymbol("proto.Foo", null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Foo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Foo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Foo.displayName = "proto.Foo";
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Foo.prototype.toObject = function(opt_includeInstance) {
    return proto.Foo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Foo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Foo.toObject = function(includeInstance, msg) {
    var obj = {
      a: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
      b: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
      c: jspb.Message.getFieldWithDefault(msg, 3, 0),
      d: jspb.Message.getFieldWithDefault(msg, 4, 0),
      e: jspb.Message.getFieldWithDefault(msg, 5, 0),
      f: jspb.Message.getFieldWithDefault(msg, 6, 0),
      g: jspb.Message.getFieldWithDefault(msg, 7, 0),
      h: jspb.Message.getFieldWithDefault(msg, 8, 0),
      i: jspb.Message.getFieldWithDefault(msg, 9, 0),
      j: jspb.Message.getFieldWithDefault(msg, 10, 0),
      k: jspb.Message.getFieldWithDefault(msg, 11, 0),
      l: jspb.Message.getFieldWithDefault(msg, 12, 0),
      m: jspb.Message.getFieldWithDefault(msg, 13, false),
      n: jspb.Message.getFieldWithDefault(msg, 14, ""),
      o: msg.getO_asB64()
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Foo}
 */
proto.Foo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Foo();
  return proto.Foo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Foo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Foo}
 */
proto.Foo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readDouble());
        msg.setA(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setB(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setC(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setD(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setE(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setF(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readSint32());
        msg.setG(value);
        break;
      case 8:
        var value = /** @type {number} */ (reader.readSint64());
        msg.setH(value);
        break;
      case 9:
        var value = /** @type {number} */ (reader.readFixed32());
        msg.setI(value);
        break;
      case 10:
        var value = /** @type {number} */ (reader.readFixed64());
        msg.setJ(value);
        break;
      case 11:
        var value = /** @type {number} */ (reader.readSfixed32());
        msg.setK(value);
        break;
      case 12:
        var value = /** @type {number} */ (reader.readSfixed64());
        msg.setL(value);
        break;
      case 13:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setM(value);
        break;
      case 14:
        var value = /** @type {string} */ (reader.readString());
        msg.setN(value);
        break;
      case 15:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setO(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Foo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Foo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Foo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Foo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getA();
  if (f !== 0.0) {
    writer.writeDouble(1, f);
  }
  f = message.getB();
  if (f !== 0.0) {
    writer.writeFloat(2, f);
  }
  f = message.getC();
  if (f !== 0) {
    writer.writeInt32(3, f);
  }
  f = message.getD();
  if (f !== 0) {
    writer.writeInt64(4, f);
  }
  f = message.getE();
  if (f !== 0) {
    writer.writeUint32(5, f);
  }
  f = message.getF();
  if (f !== 0) {
    writer.writeUint64(6, f);
  }
  f = message.getG();
  if (f !== 0) {
    writer.writeSint32(7, f);
  }
  f = message.getH();
  if (f !== 0) {
    writer.writeSint64(8, f);
  }
  f = message.getI();
  if (f !== 0) {
    writer.writeFixed32(9, f);
  }
  f = message.getJ();
  if (f !== 0) {
    writer.writeFixed64(10, f);
  }
  f = message.getK();
  if (f !== 0) {
    writer.writeSfixed32(11, f);
  }
  f = message.getL();
  if (f !== 0) {
    writer.writeSfixed64(12, f);
  }
  f = message.getM();
  if (f) {
    writer.writeBool(13, f);
  }
  f = message.getN();
  if (f.length > 0) {
    writer.writeString(14, f);
  }
  f = message.getO_asU8();
  if (f.length > 0) {
    writer.writeBytes(15, f);
  }
};

/**
 * optional double a = 1;
 * @return {number}
 */
proto.Foo.prototype.getA = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(
    this,
    1,
    0.0
  ));
};

/** @param {number} value */
proto.Foo.prototype.setA = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};

/**
 * optional float b = 2;
 * @return {number}
 */
proto.Foo.prototype.getB = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(
    this,
    2,
    0.0
  ));
};

/** @param {number} value */
proto.Foo.prototype.setB = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};

/**
 * optional int32 c = 3;
 * @return {number}
 */
proto.Foo.prototype.getC = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/** @param {number} value */
proto.Foo.prototype.setC = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional int64 d = 4;
 * @return {number}
 */
proto.Foo.prototype.getD = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/** @param {number} value */
proto.Foo.prototype.setD = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional uint32 e = 5;
 * @return {number}
 */
proto.Foo.prototype.getE = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/** @param {number} value */
proto.Foo.prototype.setE = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};

/**
 * optional uint64 f = 6;
 * @return {number}
 */
proto.Foo.prototype.getF = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/** @param {number} value */
proto.Foo.prototype.setF = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};

/**
 * optional sint32 g = 7;
 * @return {number}
 */
proto.Foo.prototype.getG = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/** @param {number} value */
proto.Foo.prototype.setG = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};

/**
 * optional sint64 h = 8;
 * @return {number}
 */
proto.Foo.prototype.getH = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};

/** @param {number} value */
proto.Foo.prototype.setH = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};

/**
 * optional fixed32 i = 9;
 * @return {number}
 */
proto.Foo.prototype.getI = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};

/** @param {number} value */
proto.Foo.prototype.setI = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};

/**
 * optional fixed64 j = 10;
 * @return {number}
 */
proto.Foo.prototype.getJ = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};

/** @param {number} value */
proto.Foo.prototype.setJ = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};

/**
 * optional sfixed32 k = 11;
 * @return {number}
 */
proto.Foo.prototype.getK = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};

/** @param {number} value */
proto.Foo.prototype.setK = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};

/**
 * optional sfixed64 l = 12;
 * @return {number}
 */
proto.Foo.prototype.getL = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};

/** @param {number} value */
proto.Foo.prototype.setL = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};

/**
 * optional bool m = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Foo.prototype.getM = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(
    this,
    13,
    false
  ));
};

/** @param {boolean} value */
proto.Foo.prototype.setM = function(value) {
  jspb.Message.setProto3BooleanField(this, 13, value);
};

/**
 * optional string n = 14;
 * @return {string}
 */
proto.Foo.prototype.getN = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};

/** @param {string} value */
proto.Foo.prototype.setN = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};

/**
 * optional bytes o = 15;
 * @return {!(string|Uint8Array)}
 */
proto.Foo.prototype.getO = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    15,
    ""
  ));
};

/**
 * optional bytes o = 15;
 * This is a type-conversion wrapper around `getO()`
 * @return {string}
 */
proto.Foo.prototype.getO_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getO()));
};

/**
 * optional bytes o = 15;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getO()`
 * @return {!Uint8Array}
 */
proto.Foo.prototype.getO_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getO()));
};

/** @param {!(string|Uint8Array)} value */
proto.Foo.prototype.setO = function(value) {
  jspb.Message.setProto3BytesField(this, 15, value);
};

goog.object.extend(exports, proto);
