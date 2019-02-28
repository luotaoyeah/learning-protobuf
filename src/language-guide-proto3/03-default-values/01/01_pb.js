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
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.Foo.repeatedFields_,
    null
  );
};
goog.inherits(proto.Foo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Foo.displayName = "proto.Foo";
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Foo.repeatedFields_ = [5];

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
      x: jspb.Message.getFieldWithDefault(msg, 1, ""),
      y: msg.getY_asB64(),
      b: jspb.Message.getFieldWithDefault(msg, 3, false),
      i: jspb.Message.getFieldWithDefault(msg, 4, 0),
      rList: jspb.Message.getRepeatedField(msg, 5)
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
        var value = /** @type {string} */ (reader.readString());
        msg.setX(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setY(value);
        break;
      case 3:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setB(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setI(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.addR(value);
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
  f = message.getX();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getY_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
  f = message.getB();
  if (f) {
    writer.writeBool(3, f);
  }
  f = message.getI();
  if (f !== 0) {
    writer.writeInt32(4, f);
  }
  f = message.getRList();
  if (f.length > 0) {
    writer.writeRepeatedString(5, f);
  }
};

/**
 * optional string x = 1;
 * @return {string}
 */
proto.Foo.prototype.getX = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/** @param {string} value */
proto.Foo.prototype.setX = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional bytes y = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Foo.prototype.getY = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    2,
    ""
  ));
};

/**
 * optional bytes y = 2;
 * This is a type-conversion wrapper around `getY()`
 * @return {string}
 */
proto.Foo.prototype.getY_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getY()));
};

/**
 * optional bytes y = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getY()`
 * @return {!Uint8Array}
 */
proto.Foo.prototype.getY_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getY()));
};

/** @param {!(string|Uint8Array)} value */
proto.Foo.prototype.setY = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};

/**
 * optional bool b = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Foo.prototype.getB = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(
    this,
    3,
    false
  ));
};

/** @param {boolean} value */
proto.Foo.prototype.setB = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};

/**
 * optional int32 i = 4;
 * @return {number}
 */
proto.Foo.prototype.getI = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/** @param {number} value */
proto.Foo.prototype.setI = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * repeated string r = 5;
 * @return {!Array<string>}
 */
proto.Foo.prototype.getRList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};

/** @param {!Array<string>} value */
proto.Foo.prototype.setRList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.Foo.prototype.addR = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 */
proto.Foo.prototype.clearRList = function() {
  this.setRList([]);
};

goog.object.extend(exports, proto);