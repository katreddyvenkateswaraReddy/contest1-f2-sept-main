let arr = [
  { id: 1, name: "john", age: 18, profession: "developer", salary: 1000 },
  { id: 2, name: "jack", age: 20, profession: "developer", salary: 1100 },
  { id: 3, name: "karen", age: 19, profession: "admin", salary: 900 },
];

// 1. Print all developers from the array whose salary is above the average salary of the array.
function PrintHighEarningDevelopers() {
  //Write your code here , just console.log
  const averageSalary =
    arr.reduce((sum, person) => sum + person.salary, 0) / arr.length;
  const highEarningDevelopers = arr.filter(
    (person) =>
      person.profession === "developer" && person.salary > averageSalary
  );
  console.log(highEarningDevelopers);
}

// 2. Using a recursive function, add a new data object to the array until the user says 'no' via a prompt.
function recursiveAddData() {
  //Write your code here, just console.log
  const newData = {};
  newData.id = arr.length + 1; // Assign a new ID.
  newData.name = prompt("Enter a name:");
  newData.age = parseInt(prompt("Enter an age:"));
  newData.profession = prompt("Enter a profession:");
  newData.salary = parseInt(prompt("Enter a salary:"));
  arr.push(newData);
  const continueAdding = prompt(
    "Do you want to add another person? (yes/no)"
  ).toLowerCase();
  if (continueAdding === "yes") {
    recursiveAddData();
  }
  console.log(arr);
}

// 3. Remove the youngest and oldest person from the array.
function removeYoungestAndOldest() {
  //Write your code here, just console.log
  const sortedArr = [...arr].sort((a, b) => a.age - b.age);
  arr = arr.filter(
    (person) =>
      person !== sortedArr[0] && person !== sortedArr[sortedArr.length - 1]
  );
  console.log(arr);
}

// 4. Merge two arrays (use a dummy array for demonstration) such that the resulting array has no duplicate professions.
function mergeAndFilterProfessions() {
  //Write your code here, just console.log
  const dummyArray = [
    { profession: "developer" },
    { profession: "manager" },
    { profession: "admin" },
  ];

  const mergedArray = arr.concat(dummyArray);
  const uniqueProfessions = mergedArray
    .filter((person, index, array) => {
      return (
        array.findIndex((p) => p.profession === person.profession) === index
      );
    })
    .map((person) => person.profession);

  console.log(uniqueProfessions);
}

// 5. Find the person with the highest salary and reduce their salary by 10% as tax.
function applyTax() {
  //Write your code here, just console.log
  const highestSalaryPerson = arr.reduce(
    (max, person) => (person.salary > max.salary ? person : max),
    arr[0]
  );
  highestSalaryPerson.salary -= highestSalaryPerson.salary * 0.1;
  console.log(arr);
}

// 6. Check if every person in the array is a developer.
function isEveryoneDeveloper() {
  //Write your code here, just console.log
  const isEveryDeveloper = arr.every(
    (person) => person.profession === "developer"
  );
  console.log(isEveryDeveloper);
}

// 7. Swap the professions of the first and last person in the array.
function swapProfessions() {
  //Write your code here, just console.log
  if (arr.length >= 2) {
    const temp = arr[0].profession;
    arr[0].profession = arr[arr.length - 1].profession;
    arr[arr.length - 1].profession = temp;
  }
  console.log(arr);
}

// 8. Using the `map` method, add a new property to each person called 'experience' with a default value of 1 year.
function addExperienceProperty() {
  //Write your code here, just console.log
  arr = arr.map((person) => ({ ...person, experience: 1 }));
  console.log(arr);
}

// 9. Group persons by profession and count them. E.g., {developer: 2, admin: 1}.
function groupByProfession() {
  //Write your code here, just console.log
  const professionCounts = {};
  arr.forEach((person) => {
    const profession = person.profession;
    professionCounts[profession] = (professionCounts[profession] || 0) + 1;
  });
  console.log(professionCounts);
}

// 10. Find the person who has a name with the longest length and capitalize their profession.
function capitalizeLongestNamedPersonProfession() {
  //Write your code here, just console.log
  const longestNamePerson = arr.reduce((longest, person) => {
    return person.name.length > longest.name.length ? person : longest;
  }, arr[0]);

  longestNamePerson.profession = longestNamePerson.profession.toUpperCase();
  console.log(arr);
}

// 11. Create a function that shuffles the array in a random order.
function shuffleArray() {
  //Write your code here, just console.log
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  console.log(arr);
}

// 12. Create a function that rotates the array to the right by n steps, where n is provided as an argument.
function rotateArray(n) {
  //Write your code here, just console.log
  const len = arr.length;
  const rotation = n % len;

  if (rotation === 0) {
    // No rotation needed if n is a multiple of the array length
    console.log(arr);
    return;
  }

  const rotatedArray = arr.slice(-rotation).concat(arr.slice(0, -rotation));
  console.log(rotatedArray);
}

// 13. Create a function that finds the person with the closest age to a given number.
function findClosestAge(age) {
  //Write your code here, just console.log
  const closestPerson = arr.reduce((closest, person) => {
    const personAgeDiff = Math.abs(person.age - age);
    const closestAgeDiff = Math.abs(closest.age - age);
    return personAgeDiff < closestAgeDiff ? person : closest;
  }, arr[0]);
  console.log(closestPerson);
}

// 14. Create a function that checks if there's any repeated name in the array.
function hasRepeatedNames() {
  //Write your code here, just console.log
  let hasDuplicates = false;
  const names = [];

  for (const person of arr) {
    if (names.includes(person.name)) {
      hasDuplicates = true;
      break;
    }
    names.push(person.name);
  }

  console.log(hasDuplicates);
}

// Function to log all developers
function PrintDeveloper() {
  const developers = arr.filter((person) => person.profession === "developer");
  console.log(developers);
}

// Function to add data using prompts
function addData() {
  const newData = {};
  newData.id = arr.length + 1; // Assign a new ID.
  newData.name = prompt("Enter a name:");
  newData.age = parseInt(prompt("Enter an age:"));
  newData.profession = prompt("Enter a profession:");
  newData.salary = parseInt(prompt("Enter a salary:"));
  arr.push(newData);
  console.log(arr);
}

// Function to remove admins
function removeAdmin() {
  arr = arr.filter((person) => person.profession !== "admin");
  console.log(arr);
}

// Function to concatenate arrays
function concatenateArray() {
  const dummyArray = [
    { id: 4, name: "mary", age: 22, profession: "designer", salary: 1200 },
    { id: 5, name: "joe", age: 24, profession: "manager", salary: 1300 },
  ];
  const concatenatedArray = arr.concat(dummyArray);
  console.log(concatenatedArray);
}

// Function to calculate average age
function averageAge() {
  let totalAge = 0;

  for (const person of arr) {
    totalAge += person.age;
  }

  const average = totalAge / arr.length;
  console.log(`Average Age: ${average}`);
}

// Function to check if there's at least one person older than 25
function checkAgeAbove25() {
  const hasPersonAbove25 = arr.some((person) => person.age > 25);
  console.log(`At least one person above 25: ${hasPersonAbove25}`);
}

// Function to get unique professions
function uniqueProfessions() {
  const unique = [];

  arr.forEach((person) => {
    if (!unique.includes(person.profession)) {
      unique.push(person.profession);
    }
  });

  console.log(unique);
}

// Function to sort by age in ascending order
function sortByAge() {
  arr.sort((a, b) => a.age - b.age);
  console.log(arr);
}

// Function to update John's profession
function updateJohnsProfession() {
  const john = arr.find((person) => person.name === "john");
  if (john) {
    john.profession = "manager";
  }
  console.log(arr);
}

// Function to get profession count
function getTotalProfessions() {
  const developerCount = arr.filter(
    (person) => person.profession === "developer"
  ).length;
  const adminCount = arr.filter(
    (person) => person.profession === "admin"
  ).length;
  console.log(`Developers: ${developerCount}, Admins: ${adminCount}`);
}
