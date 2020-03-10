const scott = {
  name: "Scott Bromander",
  age: 37,
  hometown: "Blaine",
};

const rachael = {
  name: "Rachael Bromander",
  age: 37,
  hometown: "Laguna, CA",
};

const myron = {
  name: "Myron Schippers",
  age: 37,
  hometown: "Spring Lake, MI",
};

const john = {
  name: "John Smith",
  age: 31,
  hometown: "Dallas, TX",
};

const jill = {
  name: "Jill Anderson",
  age: 27,
  hometown: "Atlanta, GA",
};

const people = [scott, rachael, myron];
const students = [john, jill];

for (let person of people) {
  person.age++;
  console.log(person);
}

function isCool(coolPersonName, listOfPeople) {
  const coolPeople = [];
  for (let person of listOfPeople) {
    if (person.name === coolPersonName) {
      coolPeople.push(person);
    }
  }
  return coolPeople;
}

console.log(isCool("Scott Bromander", people));
console.log(isCool("Jill Anderson", students));

// console.table(people);
