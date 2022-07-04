const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple type, exactly two elements, first is number and second is string
} = {
  name: "Dhruvin",
  age: 21,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

/*
person.role[1] = 10; // this will not work, as role is a tuple type, and we can not asign a number to a second element
person.role = [1, "admin", "user"]; // this will not work, as role is a tuple type, and it can only have two elements
*/

let favoriteActivities: string[];
favoriteActivities = ["Sports", "Cooking"];

person.hobbies.map((hobby) => {
  console.log(`${person.name} likes ${hobby.toLocaleUpperCase()}`);
  //   console.log(person.name.map()); // Error: person.name.map is not a function
});

// enum

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person2 = {
  name: "Dhruvin",
  age: 21,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (person2.role === Role.ADMIN) {
  console.log("is admin");
}
