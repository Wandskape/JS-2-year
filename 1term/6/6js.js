//1
var nums = [3, 6, 1, 4, 6, 3, 2]

var [num] = nums

alert(num)

//2
var user = {
  name: 'John',
  age: 34
}

var admin = { password: 'admin', ...user }

//3

let store = {
  state: {//1
    profilePage: {//2
      posts: [//3
        { id: 1, message: 'Hi', likesCount: 12 },
        { id: 2, message: 'By', likesCount: 1 },
      ],
      newPostText: 'About me',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Valera' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Viktor' },
      ],
      messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hi hi' },
        { id: 3, message: 'hi hi hi' },
      ]
    },
    sidebar: [],
  },
}

let { state: { profilePage: { posts: [item1, item2] }, dialogsPage: { dialogs: item3, messages: item4 } }, } = store;

alert(item1.likesCount)
alert(item2.likesCount)

item3.forEach(element => {
  if (element.id % 2 == 0) {
    alert(element.name)
  }
});

let messages = item4.map(element => { return { id: element.id, message: 'Hello user' } })

alert(messages[0].message)

//4

let tasks = [
  { id: 1, title: "HTML&CSS", isDone: true },
  { id: 2, title: "JS", isDone: true },
  { id: 3, title: "ReactJS", isDone: false },
  { id: 4, title: "Rest API", isDone: false },
  { id: 5, title: "GraphQL", isDone: false }
]

let task = { id: 6, title: "С++", isDone: true }

tasks = [...tasks, task]

console.log(tasks)

//5

let array = [1, 2, 3]

function sum(a, b, c) { return alert(a + b + c) }

sum(...array)