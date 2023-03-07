


// 생성자 함수


// 함수 한가지 기능만 = 양면의 얼굴

//  과거의 유물 es5 이전
function Cat(name,age,sound){
  this.name = name;
  this.age = age;
  
  this.bark = () => {
     return `${sound} 하고 짖습니다.`
  }
}

// console.log( cat() ); // 일반 함수 
// const cat1 = new Cat('navi',3,'냥냥~');
// console.log(cat1.bark()); // 생성자 함수

class Dog {
  #leg = 4;

  static cute(){
    return '뒹구르기~'
  }
  
  constructor(name,age,sound){
    this.name = name;
    this.age = age;
    this.sound = sound;
  }

  bark(){
    return `${this.sound} 하고 짖습니다.`
  }

  render(element){
    const template = `
      <div> 우리집 강아지 이름은 ${this.name} 이야</div>
      <div> 날 보면 ${this.sound} 라고 해 </div>
    `    
    element.insertAdjacentHTML('beforeend',template)
  }
}




<Button />



















class upgradeDog extends Dog{

}



const dog2 = new upgradeDog('보영',10,'왈왈');



const obj = {
  
}


console.log(dog2.bark.call(obj));


Dog.cute()

// dog2.render()
// console.log(Dog.eat());





// console.log(dog2.render(document.querySelector('#root')));






