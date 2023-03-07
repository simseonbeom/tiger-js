



function generateRandomString() {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  characters.forEach(function(character) {
    if (result.length < 10) {
      result += character;
    }
  });

  return result;
}



const defaultProps = {
  fail:true,
  timeout:1000,
  name:'',
  email:'',
  uuid:`tiger-${generateRandomString(10)}`,
  message:'알 수 없는 오류입니다.'
}





function delay(options){

  const {email,name,uuid,fail,message:error} = {...defaultProps,...options};

  // const {email,name,uuid,fail,message} = config;
  // const {} = options

  return new Promise((resolve, reject) => {
    if(!fail){
      resolve({
        name,
        email,
        uuid
      })
    }else{
      reject({error})
    }
  })
}


delay({
  name:'tiger',
  email:'tiger@naver.com',
  fail:!true,
}) // promise
.then(({name,uuid})=>{
  console.log(uuid);

}).catch(({message})=>{
  console.log(message);
})





























