function greeter(person: string | string[]) {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return person.map(name => "Hello, " + name);
  }
}

let user = ["Jane Doe", "John Smith"];
let user2 = "Jane Doe";
console.log(greeter(user));
console.log(greeter(user2));