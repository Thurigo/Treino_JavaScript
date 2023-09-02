// Abre um pop up na tela com a menssagem abaixo

alert("Hello, world");

//Exeplo de como declarar um variável em JavaScript  no  caso um numero
// colocar Var é um boa Prática
var num = 1; // {1}

// Atulaizar uma variável existente como JS não é tipido é possivel fazer uma troca entre int e string 
num = 3; // {2}

// Numero deciamal 
var price =1.3

// declaração de string 
var myName = 'arthur';

// declaração de boolean
var boleano = true;

//declaração de um valor null
var nullvar = null;

//variavel indefinida
var und; 

//--------------------------------------------------------//

// Console.log 

console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('boleano: ' + boleano);
console.log('price: ' + price);
console.log('nullvar: ' + nullvar);
console.log('und:' + und);

// concatena em uma mesma string 
console.log('num: '+ num);
// Mostra que é uma variavel
console.log('num:', num);

//--------------------------------------------------------//

// escopo de Variaveis 

var minha_variavel = 'global';

outra_variavel = 'global';

function minhafuncao () {
    var minha_variavel = 'local';
    return minha_variavel;
}

function outraFuncao () {
    outra_variavel = 'local';
    return  outra_variavel;
}

// Ira mostrar a variavel de escopo Global
console.log(minha_variavel);

//Ira mostrar a variavel de escopo Local da funcao
console.log(minhafuncao());

// Ira mostrar a variavel de escopo Global
console.log(outra_variavel);

//Ira mostrar a variavel de escopo Local da funcao
console.log(outraFuncao());

// Ira mostrar a variavel de escopo Global
console.log(outra_variavel);
//--------------------------------------------------------//
// Operadores


//  Operadores de aritim[etico]
var num = 0; // {1}
num = num + 2;
num = num *3;
num = num /2;
num++;
num--;

// Operadores  de atribuicao
num += 1; // {2}
num -=2;
num *=3;
num /=3;

//  Operadores de comparacao 
console.log('num == 1: ' + (num==1)); //{3}
console.log('num === 1: ' + (num ===1)); // tanto o valor quanto o Tipo
console.log('num !=1: ' + (num !=1));
console.log('num > 1: ' + (num > 1));
console.log('num < 1: ' + (num < 1));
console.log('num >= 1: ' + (num >=1));
console.log('num <= 1: ' + (num <=1));

// operadores logiscos 
console.log('true && false: ' + (true && false)); // {4}
console.log('true || false' + (true || false));
console.log('!true; ' + (!true));

//--------------------------------------------------------//

//bit a bit
console.log('5 & 1:', (5&1));
console.log('5|1:', (5|1));
console.log('~5:',(~5));
console.log('5^1;', (5^1));
console.log('5 << 1', (5<<1));
console.log('5 >> 1', (5>>1));

//--------------------------------------------------------//

// Typeof devolve o tipo da variável 
console.log('typeof num:', typeof num);
console.log('typeof Packt: ', typeof 'Packt');
console.log('typeof true: ', typeof true);
console.log('typeof [1,2,3,4]: ' , typeof [1,2,3,4]);
console.log('typeof {name:john}: ',  typeof {name:'John'});
//--------------------------------------------------------//

// Tipo de dados primitivos NULL (nulo) undefined (indefinido), string, number, boolean, e symbol

// Tipo de dados derivados/objetos Objetos JAvaScript, incluindo funções, arrays e expressões regulares 

// A linguagem JS permite o operador "delete", que apaga uma prpriedade de um objeto

console.log('Exemplo');

var  myObj = {name: 'John', age: 21};
console.log(myObj);

delete myObj.age
console.log('delete myObj.agr')

console.log(myObj);


// Tabelas de verdadeiro ou falso 

function testTruthy(val){
    return val ? console.log('truthy') : console.log('falsy');
}

testTruthy(true); // true 
testTruthy(false); // false 
testTruthy(new Boolean(false)); // true (objeto sempre e' true
testTruthy('') // false 
testTruthy('Packt');// true 
testTruthy(new String('')); // objeto sempre 'e true 
testTruthy(1); //True
testTruthy(-1);// false
testTruthy(NaN)//falso 
testTruthy(new Number(NaN)); // Objeto sempre e true 
testTruthy({}); // true 'e objeto sempre 'e true
var obj = {name: 'John'};
testTruthy(obj);// true 
testTruthy(obj.name) // true 
testTruthy(obj.age) // age (Propriedade n'ao  existe)

// Funções dos operadores de igualdade

// == 'e quando os valores sao iguais sem contar o tipo da variavel 
// para verificar se 'e igual em ate no tipo 'e utiizado o ===

console.log ('packet' ? true : false); 

console.log('packet' == true );

// para fazer essa verificacao e utilizado a dfuncao interna toNUmber onde cconverte 
// undefined é NAN 
// null é +0
// Bollean se o valor for true, o resultado será 1; se p valor for false o resultado sera 0
// num é o vlaor do numero 

// === é quando é realmente o mesmo tipo ou o mesmo o Objeto 


//----------------------------------------------------//
// Estrutura de Controle 

// wihlem,  do ... while, if, else e for 


// If Else

var num = 1;
if (num === 1) {
    console.log('num is equal to 1')
}


var num = 0;
if(num === 1) {
    console.log('num is equal to 1 ');
}else {
    console.log('num is not equal to 1, the value of num is ' + num);
}

// se as condicoes foram acatadas sera executado no If se nao sera realizado no else 

// tambeém é possivel realizar de forma ternária 

if( num === 1){
    num++
}else{
    num--
}
// forma ternária 

(num === 1) ? num++ : num--;

 // por fim pode ser utilizado o  else depois do if 

 var month = 5;

 if (month=== 1){
    console.log('Janeito');
 }else if (month === 5){
    console.log('maio');
 }else{
    console.log('outro mes')
 };

//tambem ha  o switch case que e oque e uma estrutura de condicao 




switch (month){
    case 1:
        console.log('Janeiro');
    break;
    case 2: 
        console.log('fevereiro');
    break;
    case 3: 
        console.log('marco');
    break;
    default:
     console.log('O mes nao e janeiro fevereiro marco');
}


// lACOS DE REPETICAO 

for (var i = 0; i < 10; i++)
    console.log(i);

// o for funciona de forma para onde o laco de repiticao tem uma cota determinada para 

var i = 0;

while (i < 10){
    console.log(i);
    i++;
}


// no while o o laco sera executado apenas se acatar a condicao do inicio sera executado 

do{
    i--
     console.log(i);
}while(i>10)

// do while faz a verificacao no final do loop fazendo o loop pelo menos uma vez 

// FUNCOES NO JAVA SCRIPT 

function sayHello(){
    console.log('Hello Git')
}

// Funcao simples sem parametros e sem retorno

// para chamar essa funcao apenas colocar o nome da funcao 

sayHello;


function output(text){
    console.log(text);
}

// essa funcao tem um parametro e para sere chamado e necessario fazer passar um paramentro para a funcao 

output('test');


output('Hello', 'git');

// Nesse caso apenas o primeiro texto sera considerado





 function sum (sum1, sum2){
    return sum1 +  sum2;
 }

console.log(sum(1,2));

// essa funcao callcuta a soma de dois numeros e retorna o reesultado 



//  PROGRAMACAO ORIENTADA A OBJETOS EM JAVASCRIPT 

// ha dois meios de ser criados os objetos no JS 

// 1
var obj = new Object

// 2 
var obj = {};

// tambe e possivel criar um objeto completo


obj = {
    name:{
        primeiro: 'Gandalf',
        segundo: 'the grey'
    },
    endereco: 'Middle earth'
}


// classe construtura de um livro 
function Livro (titulo, pag, isbn){
    this.titulo = titulo;
    this.pag = pag;
    this.isbn = isbn;
}


var livro = new Livro('titulo', 'paginas', '12341234');

// para acessar as propriedades e atualizalas seria utilizados 

console.log(livro.titulo); // para acessar o atributo titulo e utilizado o objeto livro em questao e o .titulo para acessar o titulo 
livro.titulo = 'novo titulo';


Livro.prototype.imprimeTitulo = function() {
    console.log(livro.titulo); // para acessar o atributo titulo e utilizado o objeto livro em questao e o .titulo para acessar o titulo 
 }

livro.imprimeTitulo(); 