const ageToVote = 18

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

for (let i = 0; i < cases.length; i++) {
  const currentCase = cases[i];
  console.log(`${currentCase.title} ${currentCase.releaseYear}`)
}
for (let i = 0; i < cases.length; i++) {
  const currentCase = cases[i];
  if (currentCase.releaseYear == 1903) {
    console.log(`${currentCase.title}`)
  }
}

var currentYear;
currentYear = 2023;

var jsReleaseYear;
jsReleaseYear = 1995;

console.log("current age of JavaScript is " + (currentYear - jsReleaseYear))

if (currentYear - jsReleaseYear >= ageToVote) {
  console.log(`JavaScript is old enough to vote`)
}
if (currentYear - jsReleaseYear < ageToVote) {
  console.log(`JavaScript is not old enough to vote`)
}

console.log("Starting")
for (let i = 0; i <= 100; i += 10) {
  console.log(i)
  if (i == 50) {
    console.log("halfway")
  }
}
console.log("Finished")

console.log(`${user.name} lives at ${user.address.street}, ${user.address.city}`)


// **Working with an array of objects in JavaScript**
// Iterate over the `cases` array and log the title and release year of each story
//- Iterate over the `cases` array and log only the title of cases released in the year `1903`