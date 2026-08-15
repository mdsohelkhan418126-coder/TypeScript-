// student profile project

type Student = {
  name: string;
  age: number;
  isEnrooled: boolean;
  coures: string[];
  scores: number[];
  info: [string, number, boolean];
};

const student: Student = {
  name: 'sohel',
  age: 21,
  isEnrooled: true,
  coures: ['Javascript', 'Typescript', 'React'],
  scores: [90, 85, 80],
  info: ['sohel', 21, true],
};
const student1: Student = {
  name: 'sohel',
  age: 21,
  isEnrooled: true,
  coures: [],
  scores: [43, 56],
  info: ['sohel', 65, true],
};
function displayStudent(student:Student):void {
  console.log(`Name:${student.name}`);
  console.log(`age:${student.age}`);
  console.log(`Coures:${student.coures.join(',')}`);
  console.log(`Scores:${student.scores}`);
  console.log(`Info:${student.info}`);
}
displayStudent(student1)
