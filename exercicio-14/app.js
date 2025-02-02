/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/

const title = document.querySelector('h1')
title.textContent = title.textContent.toUpperCase()
//console.log(title)




/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [ 53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55 ]

const AddUl = document.querySelector('.numbers')

numbers.forEach(number => {
  AddUl.innerHTML += `<li class ="number">${number}</li>`
})


/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/

const list = document.querySelectorAll('.number')

list.forEach(li =>{
  const isEven = Number(li.textContent) % 2 === 0

  if(isEven){    
    li.style.color = 'lightblue'
    return
  }
  li.style.color = 'pink'
})



/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/

//const body = document.querySelector('body')

const body = document.body
body.classList.add('body-background')




/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/

const repoLink = document.querySelector('a')

repoLink.setAttribute('href', 'https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo')




/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/

console.log(repoLink.getAttribute('href'))


/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/

console.log(title.style)


/*
  08

  - Remova a classe "body-background", do elemento body.
*/

body.classList.remove('body-background')



/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/

repoLink.classList.toggle('link')
