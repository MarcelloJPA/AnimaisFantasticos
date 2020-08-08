// Seleciona pelo ID  //Retorna null caso nao exista
const animais = document.getElementById('animais');
console.log('Retornando pelo Id', animais);

// Seleciona pela Classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
console.log('Retornando pela ClassName', gridSection);
console.log('Retornando o 2º da do HTMLColletion', gridSection[1]);

// Seleciona todas as ul's, Retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');
console.log('Retornando pela TagName', ul);

//Seleciona a primeira li do html
const primeiraLi = document.querySelector('li');
console.log('Retornando a 1º li', primeiraLi);

//Seleciona o primeiro link que começa com '#'
const linkInterno = document.querySelector('[href^="#"]');
console.log('Retornando o 1ºlink interno', linkInterno);

//Seleciona uma NodeList de todas imgs que estao dentro da classe animais
const animaisImg = document.querySelectorAll('.animais img');
console.log('Retornando todas img da classe animaiss', animaisImg);
console.log('Retornando a 4º imagem da NodeList', animaisImg[3]); //Seleciona a 4ºImagem da NodeList
