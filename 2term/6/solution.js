var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
var car = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';
var car1 = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
var car2 = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';
var arrayCars = [{
        cars: [car1, car2]
    }];
var studentsFilter = function (group, students) {
    return students.filter(function (student) { return student.group === group; });
};
var markFilter = function (mark, students) {
    return students.filter(function (student) { return student.marks.some(function (m) { return m.mark === mark; }); });
};
var deleteStudent = function (id, students) {
    var index = students.findIndex(function (student) { return student.id === id; });
    if (index !== -1) {
        students.splice(index, 1);
    }
};
var createGroup = function () {
    var group = {
        students: [],
        marksFilter: function (mark) { return markFilter(mark, group.students); },
        studentsFilter: function (groupNumber) { return studentsFilter(groupNumber, group.students); },
        deleteStudent: function (id) { return deleteStudent(id, group.students); },
        mark: 1,
        group: 1,
    };
    return group;
};
var group = createGroup();
group.students.push({
    id: 1,
    name: "Арсений",
    group: 1,
    marks: [
        { subject: "Математика", mark: 8, done: true },
        { subject: "Физика", mark: 7, done: true },
        { subject: "Русский", mark: 3, done: false },
    ],
});
group.students.push({
    id: 2,
    name: "Андрей",
    group: 2,
    marks: [
        { subject: "Математика", mark: 9, done: true },
        { subject: "Физика", mark: 6, done: true },
        { subject: "Русский", mark: 3, done: false },
    ],
});
group.students.push({
    id: 3,
    name: "Иван",
    group: 2,
    marks: [
        { subject: "Математика", mark: 4, done: true },
        { subject: "Физика", mark: 9, done: true },
        { subject: "Русский", mark: 10, done: true },
    ],
});
console.log(group);
console.log("Фильтр по группе");
var filteredByGroup = group.studentsFilter(1);
console.log(filteredByGroup);
console.log("Фильтр по оценке");
var filteredByMark = group.marksFilter(9);
console.log(filteredByMark);
console.log("Группа после удаления");
group.deleteStudent(1);
console.log(group);
