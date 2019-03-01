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

goog.exportSymbol("proto.M", null, global);
goog.exportSymbol("proto.M.E", null, global);
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
proto.M = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.M, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.M.displayName = "proto.M";
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
  proto.M.prototype.toObject = function(opt_includeInstance) {
    return proto.M.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.M} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.M.toObject = function(includeInstance, msg) {
    var obj = {
      e01: jspb.Message.getFieldWithDefault(msg, 1, 0),
      e02: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.M}
 */
proto.M.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.M();
  return proto.M.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.M} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.M}
 */
proto.M.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.M.E} */ (reader.readEnum());
        msg.setE01(value);
        break;
      case 2:
        var value = /** @type {!proto.M.E} */ (reader.readEnum());
        msg.setE02(value);
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
proto.M.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.M.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.M} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.M.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getE01();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getE02();
  if (f !== 0.0) {
    writer.writeEnum(2, f);
  }
};

/**
 * @enum {number}
 */
proto.M.E = {
  A: 0,
  B: 9,
  C: 9
};

/**
 * optional E e01 = 1;
 * @return {!proto.M.E}
 */
proto.M.prototype.getE01 = function() {
  return /** @type {!proto.M.E} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    0
  ));
};

/** @param {!proto.M.E} value */
proto.M.prototype.setE01 = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional E e02 = 2;
 * @return {!proto.M.E}
 */
proto.M.prototype.getE02 = function() {
  return /** @type {!proto.M.E} */ (jspb.Message.getFieldWithDefault(
    this,
    2,
    0
  ));
};

/** @param {!proto.M.E} value */
proto.M.prototype.setE02 = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};

goog.object.extend(exports, proto);
