import { Foo } from "./01_pb";

const foo = new Foo();
// string 类型的默认值为空字符串（""）
console.assert(foo.getX() === "");

// bytes 类型的默认值为空字符串（""），或者空的 Uint8Array 对象
console.assert(foo.getY_asB64() === "");
console.assert(foo.getY_asU8().length === 0);

// bool 类型的默认值为 false
console.assert(foo.getB() === false);

// 数字类型（int32，int64，等等）的默认值为 0
console.assert(foo.getI() === 0);

// repeated 类型的默认值为空数组（[]）
const r = foo.getRList();
console.assert(Array.isArray(r) === true);
console.assert(r.length === 0);
