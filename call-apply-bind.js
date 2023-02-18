console.log("Call-Apply-Bind");

const student = {
  name: "Avi",
  id: 1,
};

function getName(age, city) {
  return (
    "This is the name - " +
    this.name +
    " And this is their age - " +
    age +
    " And this is their city - " +
    city
  );
}

console.log(getName.call(student, 15, "New Delhi"));

const teacher = {
  name: "XYZ",
  id: 1000,
};

// console.log(getName.call(teacher, 45, "New Delhi"));
console.log(getName.apply(teacher, [45, "New Delhi"]));

const getNameOfTeacher = getName.bind(teacher, 45, "New Delhi");
// console.log(getNameOfTeacher());

// const nameOfTeacher = getNameOfTeacher();
// console.log(nameOfTeacher);
