import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Header'



//transformando a funcao abaixo em arrow functions para evitar o hoisting
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header"></header>
// ...

const App = () => {
  const [counter, setCounter] = useState(0)
  const names = ['Robert', 'Vicente', 'Libotti']
  const namesElements = names.map(name => <p>{name}</p>)
  return (
    <div className="App">
      <header className="App-header">
          <div>
          <Header />
          {namesElements}
          {counter}
          </div>
      </header>
    </div>
  );
}



//evitar hoisting
//usar const ou let
//Ex: var variavel1 = 10 

//funcoes declaradas assim tambem sao hoisting
//function soma(a,b) {...}

// é possivel criar uma variavel passando uma funcao
// const funcsoma = soma
// possivel:
// const soma = function soma(a,b) { return a+ b }
//
// ideal usar arrow function
// const soma = (a,b) => { return a + b} 
// ou 
// const soma = (a,b) => a + b

const obj = {
  name: 'Robert',
  lastname: 'Libotti',
  address: {
      city: 'Rio de Janeiro'
  }
}

const keys = Object.keys(obj)
//high order functions
keys.forEach(item => {
  console.log(item, obj[item]);
})

const values = keys.map(item => {
  return obj[item]
})
console.log(values)

//destructuring assignament
//ex para acessar a propriedade name:
//ao inves de usar
//  const name = obj.name (criando dois objetos iguais)
//poderia usar
//  const {name} = obj
const {name} = obj
console.log(name)

export default App;
