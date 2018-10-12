let numeros = [];
let impares = [];
let pares = [];
let maior;
let menor;
let mediaImpares;
let somaImpares = 0;
let difMaiorMenor;
let maiorPar;

for(let i = 0; i<=3; i++){
	numeros[i] = Number(prompt("Digite um valor inteiro"));
}
console.log(numeros.length)
console.log(pares.length)

maior = numeros[0];
menor = numeros[0];

for(let numero of numeros){


	//maior e menor numero de todos
	if(numero >= maior ){

		maior = numero;
	}

	if(numero <= menor){

		menor = numero;
	}



	// separa pares e impares
	if(numero % 2 == 0){

		pares.push(numero);

	}else{

		impares.push(numero);

	}
}


//Calculo diferença maior e menor
difMaiorMenor = maior - menor;



//Calcula média dos Impares
for(let impar of impares){
	somaImpares = somaImpares + impar; 
}

mediaImpares = somaImpares / impares.length;

//Maior Numero Par
maiorPar = pares[0];
for(let par of pares){

	if(par >= maiorPar){

		maiorPar = par;

	}
}

alert(`Média dos valores ímpares é ${mediaImpares}
	Maior número par ${maiorPar}
	Diferença entre o maior e menor número ${difMaiorMenor}`);