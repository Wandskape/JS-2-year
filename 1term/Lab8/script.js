let user = {
  name: 'Masha',
  age: 21
};
let numbers = [1, 2, 3];
let user1 = {
  name: 'Masha',
  age: 23,
  location: {
    city: 'Minsk',
    country: 'Belarus'
  }
};
let user2 = {
  name: 'Masha',
  age: 28,
  skills: ["HTML", "CSS", "JavaScript", "React"]
};
const array = [
  { id: 1, name: 'Vasya', group: 10 },
  { id: 2, name: 'Ivan', group: 11 },
  { id: 3, name: 'Masha', group: 12 },
  { id: 4, name: 'Petya', group: 10 },
  { id: 5, name: 'Kira', group: 11 },
]
let user4 = {
  name: 'Masha',
  age: 19,
  studies: {
    university: 'BSTU',
    speciality: 'designer',
    year: 2020,
    exams: {
      maths: true,
      programming: false
    }
  }
};

let user5 = {
  name: 'Masha',
  age: 22,
  studies: {
    university: 'BSTU',
    speciality: 'designer',
    year: 2020,
    department: {
      faculty: 'FIT',
      group: 10,
    },
    exams: [
      { maths: true, mark: 8 },
      { programming: true, mark: 4 },
    ],
  },
};

let user6 = {
  name: 'Masha',
  age: 21,
  studies: {
    university: 'BSTU',
    speciality: 'designer',
    year: 2020,
    department: {
      faculty: 'FIT',
      group: 10,
    },
    exams: [
      {
        maths: true,
        mark: 8,
        professor: {
          name: 'Ivan Ivanov ',
          degree: 'PhD'
        }
      },
      {
        programming: true,
        mark: 10,
        professor: {
          name: 'Petr Petrov',
          degree: 'PhD'
        }
      },
    ]
  }
};

let user7 = {
  name: 'Masha',
  age: 20,
  studies: {
    university: 'BSTU',
    speciality: 'designer',
    year: 2020,
    department: {
      faculty: 'FIT',
      group: 10,
    },
    exams: [
      {
        maths: true,
        mark: 8,
        professor: {
          name: 'Ivan Petrov',
          degree: 'PhD',
          articles: [
            { title: "About HTML", pagesNumber: 3 },
            { title: "About CSS", pagesNumber: 5 },
            { title: "About JavaScript", pagesNumber: 1 },
          ]
        }
      },
      {
        programming: true,
        mark: 10,
        professor: {
          name: 'Petr Ivanov',
          degree: 'PhD',
          articles: [
            { title: "About HTML", pagesNumber: 3 },
            { title: "About CSS", pagesNumber: 5 },
            { title: "About JavaScript", pagesNumber: 1 },
          ]
        }
      },
    ]
  }
};


let store = {
  state: {// 1 уровень
    profilePage: { // 2 уровень
      posts: [ // 3 уровень
        { id: 1, message: 'Hi', likeCount: 12 },
        { id: 2, message: 'By', likeCount: 1 },
      ],
      newPostText: 'About me',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Valera' },
        { id: 1, name: 'Andrey' },
        { id: 1, name: 'Sasha' },
        { id: 1, name: 'Viktor' },
      ],
      messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hi hi' },
        { id: 3, message: 'hi hi hi' },
      ],
    },
    sidebar: [],
  },
}

console.log("1111");
let test = {
  ...store,
  state: {
      ...store.state,
      profilePage: {
          ...store.state.profilePage,
          posts: store.state.profilePage.posts.map(post => ({ ...post }))
      },
      dialogsPage: {
          ...store.state.dialogsPage,
          dialogs: store.state.dialogsPage.dialogs.map(dialog => ({ ...dialog })),
          messages: store.state.dialogsPage.messages.map(message => ({ ...message }))
      },
      sidebar: [...store.state.sidebar]
  }
}
console.log(test);
test.state.dialogsPage.dialogs[0].id = 99

// Задание 1: Глубокое копирование с использованием spread оператора 
function deepCopy(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item));
  } else if (typeof obj === 'object' && obj !== null) {
    return { ...obj };
  } else {
    return obj;
  }
}

// Задание 2: Изменение значения свойства group и оценки по программированию в копии объекта user5
function modifyUser5() {
  const user5Copy = deepCopy(user5);
  user5Copy.studies.department.group = 12;
  user5Copy.studies.exams[1].mark = 10;
  return user5Copy;
}

// Задание 3: Изменение имени преподавателя в копии объекта user6
function modifyUser6() {
  const user6Copy = deepCopy(user6);
  user6Copy.studies.exams[0].professor.name = 'New Professor';
  return user6Copy;
}

// Задание 4: Изменение количества страниц для статьи "About CSS" преподавателя Petr Ivanov в копии объекта user7
function modifyUser7() {
  const user7Copy = deepCopy(user7);
  const cssArticle = user7Copy.studies.exams[0].professor.articles.find(article => article.title === 'About CSS');
  if (cssArticle) {
    cssArticle.pagesNumber = 3;
  }
  return user7Copy;
}

// Задание 5: Замена всех сообщений в объекте store на "Hello"
function replaceStoreMessages() {
  const storeCopy = deepCopy(store);
  const { dialogsPage } = storeCopy.state;
  dialogsPage.messages.forEach(message => {
    message.message = 'Hello';
  });
  return storeCopy;
}

// Вызов функций и вывод результатов
console.log("Task 1:", deepCopy(user));
console.log("Task 2:", modifyUser5());
console.log("Task 3:", modifyUser6());
console.log("Task 4:", modifyUser7());
console.log("Task 5:", replaceStoreMessages());
