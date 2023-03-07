

const colors = ['#f2eee5','#e5c1c5','#c3e2dd','#6eceda','#FB9DA7','#FCCCD4','#FBDEA2','#F2E2C6','#8EB695']

gsap.set('section',{background:gsap.utils.wrap(colors)})

async function fetchUser(){
  const data = await fetch('https://jsonplaceholder.typicode.com/users')  

  const user = await data.json()
  

  // map 배열의 메서드  반환 값이 있음 => 배열 반환 
  // filter 배열의 메서드  반환 값이 있음 => 배열 반환 

  const arr = user.map(({name})=>name) // 퉤 했음 
  // const arr = user.filter(({email})=>email.includes('info')) 
  


  arr.forEach((item)=>{
    const temp = `
      <p>${item}</p>
    `
    document.querySelector('#section03')?.insertAdjacentHTML('beforeend',temp)
  })


  gsap.from('p',{y:100,opacity:0,stagger:0.1,scrollTrigger:{
    id:'render',
    trigger:'#section03',
    scrub:1,
    // markers:true,
    start:'top center',
    end:'bottom center'
  }})
  
}


fetchUser()



// gsap.to('rect',{
//   strokeDashoffset:0,
//   scrollTrigger:{
//     trigger:'body',
//     scrub:1,
// }})


// timeline 
  
  // const tl = gsap.timeline({
  //   defaults:{
  //     ease: 'power3.inOut'
  //   },
      //  scrollTrigger:{

      //  }
    
  // });
  

  // tl.to('.box',{x:300}) // tween
    // .to('.box',{y:100,rotation:360})
    // .to('.box',{x:0,rotation:360*2,duration:3,ease:'linear'})
    // .to('.box',{y:0,rotation:360*3})




    // 타임라인에서 엮어서 사용할 수 있다.
    // 단일 트윈에도 엮어서 사용할 수 있다.
    // 스크롤 트리거 자체를 빼서 쓰는것도 가능 

    
    // gsap.from('.box',{
    //   x:100,
    //   opacity:0,
    //   scrollTrigger:{
    //     trigger:'.box',
    //     scrub: 1,
    //     start:'top 30%',
    //     end:'bottom 75%',
    //     // markers:true
    //   }
    // })  




    ScrollTrigger.create({
      trigger: '#section02',
      start: 'top top',
      // end: 'bottom bottom',
      end: '+=3000',
      animation: gsap.to('.box',{rotation:360,scale:15}),
      pin: true,
      // markers: true,
      onUpdate:({progress})=>{

        document.querySelector('.progress').textContent = (progress * 100).toFixed(0) + '%';
        
      },
      scrub: true,
    })



    const last = document.querySelector('.last').offsetLeft

    

    ScrollTrigger.create({
      trigger: '#horizontal',
      start: 'top top',
      end: '+=3000',
      animation: gsap.to('.wrap',{x:-last}),
      pin: true,
      // pinSpacing: false,
      // markers: true,
      scrub: true,
    })










