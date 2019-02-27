import { Foo } from "./01_pb";

console.log("\n-------------------------------------------------- 01");
const foo = new Foo();
foo.setX("xxx");
console.log(foo.getX());
/*
 * 通过 getX_asB64() 方法，获取 string 类型的值，
 */
console.log(foo.getX_asB64());
/*
 * 通过 getX_asU8() 方法，获取 Uint8Array 类型的值，
 */
console.log(foo.getX_asU8());

console.log("\n-------------------------------------------------- 02");
foo.setY(foo.getX_asU8());
console.log(foo.getY());
console.log(foo.getY_asB64());
console.log(foo.getY_asU8());
