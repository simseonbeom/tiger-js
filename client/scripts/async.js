


// 1. async : promise를 리턴하는 함수로 만들어버림.
// const delay = async () => {
  // return '성공!'  
// }


// 2. await : result를 뽑아낼 수 있다.
//          : 코드 실행 흐름 제어 

// const message = await delay();
// console.log( message );

const END_POINT = 'https://jsonplaceholder.typicode.com/users/1'


const fetchUser = async (END_POINT) => {
  
  const data = await fetch(END_POINT);

  const user = await data.json();

  return user;
}



await fetchUser()



// function template({name}){
//   return `
//     <div>이름 : ${name}</div>
//   `
// }

// async function renderUser(){
//   const data = await fetchUser('https://jsonplaceholder.typicode.com/users/1');

//   const temp = template(data)

//   document.querySelector('#root').insertAdjacentHTML('beforeend',temp);
// }



// renderUser()



// 유저정보가져오기().then(유저정보랜더링하기()) // 5초 믿음과 신뢰 Promise 약속할게..내가 꼭 너에게 데이터를 주기를 
 // error




















