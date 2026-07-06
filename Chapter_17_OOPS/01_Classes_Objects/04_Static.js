class Student{

    constructor(s_name, age) {
        this.name = s_name;
        this.age = age;
    }

    //static variables are common amongst all objects 
    static course="Playwright";
    static profession = "QA";
    
    static display() {
        console.log("I am a common static function");
    }
}

const s1 = new Student("Yasho", 32);
const s2 = new Student("Japinder", 32);

console.log(s1.name); //Yasho

console.log(Student.course); //PLaywright
console.log(s1.s_name); //undefined
console.log(Student.display());