class Student {
    constructor(name,email,community) {
    this.name= name;
    this.email= email; 
    this.community= community; }
}

class Bootcamp {
    constructor(name,level,students = []) {
        this.name = name;
        this.level = level;
        this.students = students;


    }

    registerStudent(studentToRegister) {
      if (this.students.filter(student => student.email === studentToRegister.email).length) {
          console.log(`This student ${studentToRegister.email} is already registered.`);
      }
      else {
          this.students.push(studentToRegister);
          console.log(`This ${studentToRegister.email} is now registered to bootcamp ${this.name}`)
      }
      return this.students;
};


}
const Jack = new Student('Jack', 'jack@jack.com','Hilo');
const Jill = new Student('Jill', 'jill@jill.com', 'Kona');
const Jane = new Student('Jane', 'jill@jill.com', 'honolulu');
const webFundamentals = new Bootcamp('Web Developement Fundamentals', 'Beginner');