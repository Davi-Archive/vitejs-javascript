// Nullish Coalecent  Operator

/* const idade = 0;  */       //null, 0, [], undefined

/* document.body.innerText = 'Sua idade é: '+(idade || 'Não Informado') */

//Objeto metodos

/* const user = {
  name: 'Davi',
  idade: 28,
  address: {
    street: 'Rua Teste',
    number: 176,
  },
};
 */
///REST OPERATOR

/* const {address, idade: age, nickname} = user; */

/* const {name, ...rest} = user;    */         //rest Operator

/* const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, , third, ...rest] = array;
document.body.innerText = JSON.stringify({first, third, rest}) */


/// Short Syntax
/*
const name = 'Davi';
const idade = 28;

const user = {
  name,
  idade,
}
document.body.innerText = JSON.stringify({user})
 */

/* const user = {
  name: 'Davi',
  idade: 28,
  address: {
    street: 'Rua Teste',
    number: 176,
    zip: {
      code: '088093813a4',
      city: 'Rio do Norte',
    },
    showFullAddress(){
      return 'ok';
    }
  },
}; */
/*
const key = 'name'; */
/* const key = 'name'; */

/* document.body.innerText = user.address.showFullAddress?.() ?? 'Não Informado' */
/* document.body.innerText = user[key]; */



const array = [1, 2 ,3 ,4, 5];


/* for (const i of array){
  document.body.innerText += i;
} */

/* array.forEach(item => {
  document.body.innerText += item;
})
 */

/* const novoArray = array.map(item =>{
  if (item %2 === 0){
    return item * 5
  }
  return item;
}) */


/* let novoArray = array
.filter(item => item % 2 === 0)
.map(item => item * 10);   //20,40 */

/* const soma = array.reduce((acc, item)=> {
  return acc + item;
}, 0)

const name = 'Davi';
const message = `Bem-vindo, ${name}`


document.body.innerText = message; */


// PROMISE

/* const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(a + b);
    }, 2000)
  })
}

somaDoisNumeros(1, 5)
.then(soma => {
  document.body.innerText = soma
})
.catch(err=> {
  console.log(err);
}) */



/* fetch('https://api.github.com/users/davi38')
.then(response => {
  return console.log(response.json());
})
.catch(err =>{
  console.log(err);
})
.finally(()=>{
  console.log('deu');
}) */

//// PROMISE


async function buscaDadosNoGithub() {
  try {
    const response = await fetch('https://api.github.com/users/davi38');
    const body = await response.json();
    return body.name;
  }
  catch (err) {
    console.log(err);
  }
  finally {
    console.log('deu');
  }
}

buscaDadosNoGithub().then(name => {
  console.log(name)
})