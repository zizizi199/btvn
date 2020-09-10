import{Class} from'./Class.js';
import{Teacher} from'./Teacher.js';
import{Student} from'./Student.js';

let s1 = new Student('Lâm', 'man', 1,'2018-2020',9);
let s2 = new Student('Thảo', 'woman', 2, '2020-2021',7);
let s3 = new Student('Hòa', 'woman', 3, '2017-2019',2);

let t1 = new Teacher('Dũng', 'man', 'Math','proplayer');

let class1 = new Class(1,'Math');

class1.addTeacher(t1);
class1.addStudent(s1);
class1.addStudent(s2);
class1.addStudent(s3);

console.log(class1);

class1.findStudent('Lâm');
class1.studentPoint(6);
