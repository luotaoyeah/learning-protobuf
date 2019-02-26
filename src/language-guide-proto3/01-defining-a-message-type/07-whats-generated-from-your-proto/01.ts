import { Person } from "./01_pb";

console.log("\n-------------------------------------------------- 01");
/*
 * 可以通过 setXXX() 方法，设置字段的值，
 * 可以通过 getXXX() 方法，获取字段的值，
 */
const person = new Person();
person.setName("foo");
person.setAge(18);
console.log(person.getName()); // foo
console.log(person.getAge()); // 18

console.log("\n-------------------------------------------------- 02");
/*
 * 可以通过 toObject() 方法，获取JSON对象格式的数据
 */
console.log(person.toObject()); // { name: 'foo', age: 18 }

console.log("\n-------------------------------------------------- 03");
/*
 * 可以通过 serializeBinary() 方法，将数据转换为二进制数据（Uint8Array）
 */
console.log(person.serializeBinary()); // Uint8Array [ 10, 3, 102, 111, 111, 16, 18 ]

console.log("\n-------------------------------------------------- 04");
/*
 * 可以通过 deserializeBinary() 静态方法，将二进制数据转换为对象
 */
console.log(
  Person.deserializeBinary(
    new Uint8Array([10, 3, 102, 111, 111, 16, 20])
  ).toObject()
); // { name: 'foo', age: 20 }
