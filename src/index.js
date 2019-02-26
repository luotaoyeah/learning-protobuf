import("./language-guide-proto3/01-defining-a-message-type/03-field-rule/01_pb")
  .then(({ default: { Person } }) => {
    const person = new Person();
    person.setName("foo");
    person.addScore(9);
    person.addScore(99);
    console.log(person.toObject()); // { name: 'foo', scoreList: [ 9, 99 ] }
  })
  .catch(e => {
    console.error(e);
  });
