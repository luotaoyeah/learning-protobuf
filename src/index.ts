import {
  Person,
  Boy
} from "./language-guide-proto3/01-defining-a-message-type/04-adding-more-message-types/01_pb";

console.log("\n-------------------------------------------------- 01");

const person = new Person();
person.setName("foo");

const boy = new Boy();
boy.setParent(person);

console.log(boy.toObject());
