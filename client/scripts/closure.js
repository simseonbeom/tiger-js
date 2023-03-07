


// 클로저(closure) : 함수는 함수가 태어난 환경자체를 기억한다.



// function outer(initValue){
//   let value = initValue;


//   function incre(){
//     return ++value
//   }

//   function decre(){
//     return --value
//   }

//   return [incre,decre]
// }


// const [plus,minus] = outer(10);


// console.log( plus() );
// console.log( plus() );
// console.log( plus() );
// console.log( plus() );
// console.log( plus() );
// console.log( minus() );
// console.log( minus() );
// console.log( minus() );
// console.log( minus() );





function useState(init){
   let value = init;

   function write(init){
    return value = init;
   }

   function read(){
    return value;
   }


   return [read,write];
}



const [state,setState] = useState(10);
const [isClick,setIsClick] = useState(true);


function bindEvent(node,type,handler){

  node.addEventListener(type,handler);

  return ()=> node.removeEventListener(type,handler); // clean up
}



bindEvent(button,'click',()=>{

})



const button = document.querySelector('button');


let isClicked = false;

button.addEventListener('click',(e)=>{


  
  if(setIsClick(!isClick())){
    // e.currentTarget.classList.add('active')
    gsap.to(e.currentTarget,{background:'#fff',color:'#000',rotation:360});
  }else{
    // e.currentTarget.classList.remove('active')
    gsap.to(e.currentTarget,{background:'#000',color:'#fff'});
  }
  

  isClicked = !isClicked;
})





















