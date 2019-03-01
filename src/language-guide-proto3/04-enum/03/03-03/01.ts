import { M } from "./01_pb";

/*
 * 在反序列化的时候，如果数据中的值，跟定义的枚举值不匹配，
 * 则数据不会受影响，会按照实际的值进行反序列化，
 * 如下，定义的枚举值中只包含 0 和 1，但是反序列化之后，e 的值为 2，
 * 此时，e 的值不受影响，就是 2
 */
console.assert(M.deserializeBinary(new Uint8Array([8, 2])).toObject().e === 2);
