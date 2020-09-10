import{Teacher} from'./Teacher.js'
import{Student} from'./Student.js'

class Class {
    idClass;
    subject;
    teachers = [];
    students = [];

    constructor(idClass,subject){
        this.idClass = idClass;
        this.subject = subject;
        this.teachers = [];
        this.students = [];
    }

    addTeacher(teacher){
        if(teacher instanceof Teacher){
            this.teachers.push(teacher);
        }
    }

    addStudent(student){
        if(student instanceof Student){
            this.students.push(student);
        }
    }

    findStudent(name){
        for(let student of this.students){
            if(student.name == name){
                console.log(student);
            }
        }
    }

    studentPoint(point){
        for(let student of this.students){
            if(student.point > point){
                console.log(student);
            }
        }
    }
    
}

export{Class}