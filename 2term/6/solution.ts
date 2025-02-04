type MyStudent = {
    id:number,
    name:string,
    group:number
}

const array: MyStudent[] = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

type CarsType = {
    manufacturer?:string,
    model?:string
}

let car: CarsType = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';


const car1: CarsType = {} as CarsType; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {} as CarsType; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';

type ArrayCarsType = {
    cars:CarsType[]
}

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];


//4-----------------------------------------------------------------------------------------

// function studentsFilter(group:number): StudentType[]{
//     let stud:StudentType[] = [];
//     stud.forEach(element => {
//         if(element.group == group)
//         stud.push(element);
//     });

//     return stud;
// }

// function marksFilter(mark: number): StudentType[]{
//     let stud:StudentType[] = [];
//     let bufferMark:number = 0;
//     stud.forEach(element => {
//         element.marks.forEach(oneMark =>{
//             bufferMark += oneMark.mark;
//         });
//         bufferMark /= element.marks.length;
//         if(bufferMark == mark)
//             stud.push(element);
//         bufferMark = 0;
//     });
//     return stud;
// }

type MarkFilterType = 1|2|3|4|5|6|7|8|9|10;
type DoneType = boolean;

type GroupFilterType = MarkFilterType|11|12;

type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}

type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>,
}

type GroupType = {
    students: Array<StudentType>// массив студентов типа StudentType
    studentsFilter: (group: GroupFilterType) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: MarkFilterType) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
    mark: MarkFilterType,
    group: GroupFilterType,
}

const studentsFilter = (group: GroupFilterType, students: Array<StudentType>): Array<StudentType> => {
    return students.filter(student => student.group === group);
};

const markFilter = (mark: MarkFilterType, students: Array<StudentType>): Array<StudentType> => {
    return students.filter(student => student.marks.some(m => m.mark === mark));
};

const deleteStudent = (id: number, students: Array<StudentType>): void => {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) { 
        students.splice(index, 1);
    }
};

const createGroup = (): GroupType => {
    const group: GroupType = {
        students: [],
        marksFilter: (mark: MarkFilterType) => markFilter(mark, group.students),
        studentsFilter: (groupNumber: GroupFilterType) => studentsFilter(groupNumber, group.students),
        deleteStudent: (id: number) => deleteStudent(id, group.students),
        mark: 1,
        group: 1,
    };
    return group;
};


const group = createGroup();

group.students.push({
    id: 1,
    name: "Арсений",
    group: 1,
    marks: [
        { subject: "Математика", mark: 8, done: true },
        { subject: "Физика", mark: 7, done: true },
        { subject: "Русский", mark: 3, done: false},
    ],
});

group.students.push({
    id: 2,
    name: "Андрей",
    group: 2,
    marks: [
        { subject: "Математика", mark: 9, done: true },
        { subject: "Физика", mark: 6, done: true },
        { subject: "Русский", mark: 3, done: false},
    ],
});

group.students.push({
    id: 3,
    name: "Иван",
    group: 2,
    marks: [
        { subject: "Математика", mark: 4, done: true },
        { subject: "Физика", mark: 9, done: true },
        { subject: "Русский", mark: 10, done: true},
    ],
});

console.log(group);
console.log("Фильтр по группе");
const filteredByGroup = group.studentsFilter(1);
console.log(filteredByGroup);

console.log("Фильтр по оценке");
const filteredByMark = group.marksFilter(9);
console.log(filteredByMark);

console.log("Группа после удаления");
group.deleteStudent(1);
console.log(group);

