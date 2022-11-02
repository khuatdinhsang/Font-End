// function showDia() {
//     myString = '';
//     for (const param of arguments) {
//         myString += `${param}, `;
//     }
//     console.log(myString);
// }
// showDia('1', '2', '3', '4');

// // var s = prompt('Sang dep trai');
// // console.log(s);

// function sum(a, b) {
//     var x = a + b;
//     console.log(x);
// }
// sum(1, 2);
// // console.log(k);
// function triple(x) {
//     return 3 * x;
// }
// console.log(triple(3))



// var sang = function testname() {
//     // console.log('sang1');
//     return 'ang1'
// }
// console.log(sang())

// console.log('sang dep trai vcl \'dpe trao vck\'')
// var dongfsf = "sasngannnnnnnnnnnnnnnnnnnnnnnnnnnn" + "dasdkkkkkkkkkkkkkkkkkkk";
// console.log(dongfsf)
// var name = 'Sang';
// var ho = 'Khuat';
// console.log(`Toi l       a ${name}            ${ho}`)
// var s1 = "Hoc js tai js js js f8";
// console.log(s1.replaceAll('js', 'html'))

// var dong = 'cao';
// var myinfo = {
//     name: 'Khuat sang',
//     age: 18,
//     address: 'ha noi',
//     [dong]: 'dasdsads',
//     getName: function() {
//         return this.name;
//     }
// }
// var mykey = 'address';
// myinfo.email = 'sangkdhe161711@fpt.edu.vn'
// myinfo['height'] = 19
// console.log(myinfo.getName())
//     // console.log(myinfo[mykey])


// function getd(x) {
//     var s = "";
//     for (var i of x) {
//         s = s + i;
//     }
//     console.log(s)
// }

// function run(str_input) {
//     var output = "";
//     for (value of str_input) {
//         output = value + output;
//     }
//     console.log(output);
// }
// getd('sangdeptrai')
// run('sangdeptrai')
// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth();
// console.log(month)
// var day1 = date.getDate();
// console.log(day1)
// var orders = [{
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// function getTotal(oders) {
//     var s = 0;
//     for (let i = 0; i < orders.length; i++) {
//         s += orders[i].price;
//     }
//     console.log(s);
// }
// // Expected results:
// getTotal(orders) // Output: 8700000
// function run(object) {
//     var arr = [];
//     for (var key in object) {
//         arr.push(`Thuộc tính ${name} có giá trị ${object[key]}`)
//     }
//     return arr
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));


// var courses = [{
//         id: 1,
//         name: 'Jav',
//         coin: 400
//     }, {
//         id: 2,
//         name: 'PHP',
//         coin: 100
//     },
//     {
//         id: 3,
//         name: 'Rub1y',
//         coin: 450
//     },
//     {
//         id: 4,
//         name: 'C++',
//         coin: 315
//     },
//     {
//         id: 5,
//         name: 'Ruby',
//         coin: 400
//     }
// ];

// var isFind = courses.every(function(course, index) {
//     return course.name === 'C++';
// })
// console.log(isFind);

// // var newCourse = courses.map(function(course) {
// //     return {
// //         id: course.id,
// //         name: `Khoa hoc: ${course.id}`,
// //         coin: course.coin,
// //         context: `Gia la: ${course.coin}`
// //     }
// // })
// // console.log(newCourse);

// var listName = courses.map(function(course) {
//     return course.name;
// })
// console.log(listName);
// var i = 0;
// var total = courses.reduce(function(a, b) {
//     return a + b.coin;
// }, 0)
// console.log(total)

// var sports = [{
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]

// function render(sports) {
//     var cc = document.querySelector('ul');
//     var html = sports.map(function(sport) {
//         return `<li>${sport.gold}</li>`
//     })
//     cc.innerHTML = html.join('');
// }
// // render(sports);
// // Expected results:
// // console.log(getTotalGold(sports)) // Output: 23

// Array.prototype.filter2 = function(callback) {
//     var output = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var results = callback(this[index], index);
//             if (results) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }
// var courses = [{
//     name: 'PHP',
//     coin: 500
// }, {
//     name: 'JAva',
//     coin: 100
// }, {
//     name: 'Ruby',
//     coin: 560
// }, {
//     name: 'LOl',
//     coin: 50
// }, {
//     name: 'C++',
//     coin: 500
// }]
// var listCost = courses.filter2(function(course, index) {
//     return course.coin < 500;
// })
// console.log(listCost);

// var a = document.querySelector('.box-1 ul li');
// // console.log(a[0])

// // var box1 = document.querySelector('.box-1');
// // // box1.style.width = '100px';
// // box1.style.height = '200px';
// // box1.style.backgroundColor = 'red';
// // box1.classList.add('red', 'cl');
// // setInterval(function() {
// //     box1.classList.toggle('red');

// // }, 1000);

// var h1Es = document.querySelectorAll('h1')
// h1Es.forEach(function(h1) {
//     h1.onclick = function(e) {
//         console.log(e.target);
//     }
// })

// var input = document.querySelector('input[type="text"]');
// input.onkeyup = function(e) {
//     // console.log(e.which);
//     switch (e.which) {
//         case 27:
//             {
//                 console.log('Exit');
//                 break;
//             }
//     }
// }

// var aElements = document.querySelectorAll('a');
// aElements.forEach(function(a) {
//     a.onclick = function(e) {
//         if (e.target.href.startsWith('https://www.facebook.com/')) {
//             e.preventDefault();
//         }
//     }
// })


// function sang111() {
//     console.log('sang dep trai');

// }
// var button = document.querySelector('button');
// button.addEventListener('click', sang111);

// setTimeout(function() {
//     button.removeEventListener('click', sang111);
// }, 1000)

// {
//     var age = 18;
// }
// console.log(age)

// function acs() {
//     let counter = 0;

//     function inc() {
//         return ++counter;
//     }
//     return inc;
// }
// const counter1 = acs();
// console.log(counter1);

// var dasd = 1;
// console.log(dasd);


// {
//     x = 100;
// }
// console.log(x);

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const app = (() => {
//     const cars = ['BMW', 'Posecher'];
//     const root = $('#root');
//     const input = $('#input');
//     const submit = $('#submit')
//     console.log(root)
//     return {
//         add(car) {
//             cars.push(car);
//         },
//         delete(index) {
//             cars.splice(index, 1);
//         },
//         render() {
//             const html = cars.map((car, index) => `
//             <li>${car}
//             <span class="delete" data-index="${index}">&times</span></li>`)

//             .join('');

//             root.innerHTML = html;
//         },
//         handleDelete(e) {
//             const deleteBtn = e.target.closest('.delete');
//             if (deleteBtn) {
//                 const index = deleteBtn.datasets.index;
//                 this.delete(index);
//                 this.render;
//             }
//         },
//         init() {
//             submit.onclick = (e) => {
//                 const car = input.value;
//                 this.add(car);
//                 this.render();
//                 input.value = "";
//                 input.focus();
//             }
//             root.onclick = this.handleDelete;
//             this.render();
//         }
//     }
// })();
// app.init();

// var in1 = $('.input');
// var kick = $('.kick');
// var check = true;

// kick.addEventListener('click', () => {
//     if (check) {
//         in1.type = "text";
//         check = false;
//     } else {
//         in1.type = "password";
//         check = true;
//     }

// })


// var a = $('#t1');
// var b = $('#t1b')
// var c = $('#t1c');
// var t2 = $('#t2');
// t2.addEventListener('click', () => {
//     if (isNaN(a.value) || (isNaN(b.value))) {
//         alert("May nhap sai")
//     } else {
//         var x = parseInt((a.va)lue) + parseInt((b.va)lue);
//         return c.value = x;
//     }

// })

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
// var dataList = [];

// var results = $('#para');

// function init() {
//     let json = localStorage.getItem('title');
//     dataList = JSON.parse(json);
//     displayAll();
// }

// function savetoStorage() {
//     var title = $('#title').value;
//     var description = $('#description').value;
//     var data = {
//         'title': title,
//         'description': description
//     };
//     dataList.push(data);
//     displayAll();

// }

// function displayAll() {
//     results.innerHTML = '';
//     for (var i = 0; i < dataList.length; i++) {
//         results.innerHTML += `
//             <li>${i+1}</li>
//             <li>${dataList[i].title},${dataList[i].description}  <span onclick="delete1()">&times</span></li>
//         `
//     }
// }

// function delete1(index) {
//     dataList.splice(index, 1);
//     displayAll();
//     var json = JSON.stringify(dataList);
//     console.log(json);
//     localStorage.setItem('title', json);

// }

// var tu = $('#tu');

// function my(some) {
//     tu.innerHTML = some;
// }

// function first(cb) {
//     my('sang');
//     cb();
// }

// function last() {
//     my('dong')
// }
// first(last);


// const promiseExp = () => {

//     return new Promise((resolve, reject) => {
//         reject('get some data')
//     });
// }
// promiseExp()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// var promise = new Promise((resolve, reject) => {
//     resolve();
// })

// promise
//     .then((data) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject([1, 2, 3]);
//             }, 3000);
//         })
//     })
//     .then((data) => {
//         console.log(data);
//         return 2;
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((data) => {
//         console.log("Fail", data)
//         return 2;
//     })
//     .catch((err) => {
//         console.log("Error", err)
//     })
//     .finally(() => {
//         console.log("Finally")
//     })


// function sleepppp(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms);
//     });
// }
// sleepppp(1000)
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(1);
//             }, 1000);
//         })
//     })
//     .then((data) => {
//         console.log(data);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(2);
//             }, 1000);
//         })
//     })
//     .then((data) => {
//         console.log(data);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(3);
//             }, 1000);
//         })
//     })
//     .then((data) => {
//         console.log(data);
//     })

// function ngu(cb) {
//     cb();
// }

// function delay(m) {
//     setTimeout(() => {
//         console.log(m)
//     }, 1000);
// }
// var i = 0;

// while (true) {
//     if (i < 5) {
//         ngu(delay(1));
//     }
//     i++;
// }


// var promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([1]);
//     }, 2000)
// })

// var promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Co loi');
//     }, 3000)
// })

// Promise.all([promise1, promise2])
//     .then((result) => {

//         var result1 = result[0];
//         var result2 = result[1];
//         console.log(result1.concat(result2));
//     })

var users = [{
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Sang'
    }
];

var comments = [{
        id: 1,
        user_id: 1,
        content: 'Anh son chua ra video'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi!!'
    }
]

//1. lay comments
//2 tu comments lay ra user_id
//3. tu user_id lay ra user tuong ung


// function getUserByIds(userIds) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             var results = users.filter((user) => {
//                 return userIds.includes(user.id);
//             });
//             resolve(results);
//         }, 1000)
//     })
// }




// function getComments() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             resolve(comments);
//         }, 1000)
//     })
// }


// getComments()
//     .then((comments) => {
//         var userIDs = comments.map((comment) => {
//             return comment.user_id;
//         });
//         return getUserByIds(userIDs)
//             .then((users) => {
//                 return {
//                     users: users,
//                     comments: comments,
//                 }
//             })
//     })
//     .then((data) => {
//         var comments_block = $('.sang');
//         var html = '';
//         data.comments.forEach((comment) => {
//             var user = data.users.find((user) => {
//                 return user.id === comment.user_id;
//             });
//             html += `${user.name}: ${comment.content}`
//         });
//         comments_block.innerHTML = html;
//     })

// var postAPI = 'https://jsonplaceholder.typicode.com/todos/'

// fetch(postAPI)
//     .then((data) => {
//         return data.json();
//     })

// .then((posts) => {
//     var htmls = posts.map((post) => {
//         return `<li>
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//         </li>`
//     });
//     var html = htmls.join('');
//     document.getElementById('post-block').innerHTML = html;
// })

// var request = 'https://622b588614ccb950d2374872.mockapi.io/user';
// fetch(request, {
//         method: "get"
//     })
//     .then((data) => {
//         return data.json();
//     })
//     .then((posts) => {
//         document.getElementById('target').innerHTML = '';
//         if (posts.length > 0) {
//             var content = '';
//             posts.forEach((post) => {
//                 content += `
//             <li>${post.id}</li>
//             <li>${post.name}</li>
//                 `
//             });
//             document.getElementById('target').innerHTML = content;
//         }
//     })

// var str = "fpt oly- fpt edu- fpt coc";
// var cnt = 0;
// while (str.indexOf('fpt') != -1) {
//     str = str.replace("fpt", "sang");
//     cnt++;
//     console.log(cnt)
// }
// console.log(str)

// function Student(name, age) {
//     this.age = age;
//     this.name = name;
// }
// const s1 = new Student("Bad Seler", 20);
// Student.prototype.sayHello = () => {
//     console.log('Ang dep trai')
// }
// s1.sayHello();
// Student.prototype.sang = "dep tria"
// console.log(s1);

// var gin = {
//     self: function() {
//         return this
//     }
// }
// console.log(gin === gin.self())

// function getsang(name) {
//     console.log(name, 'sang is dep trai')
// }

// function thucthi(callback) {
//     callback();
// }

let ten = prompt('Ten cua ban')
let subject = prompt('Subject mon hoc')
let lab1 = 0,
    lab2 = 0,
    lab3 = 0,
    lab4 = 0;

function inputS(lab, msg) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            var score = prompt('input' + lab);
            return resolve(score);
        }, msg);
    })
}

async function main() {
    (lab1) = await inputS("lab1", 1000);
    (lab2) = await inputS("lab1", 1000);
    (lab3) = await inputS("lab1", 1000);
    (lab4) = await inputS("lab1", 1000);
    var tong = lab1 * 0.1 + lab2 * 0.1 + lab3 * 0.1 + lab4 * 0.1;
    console.log(tong);
}
main();