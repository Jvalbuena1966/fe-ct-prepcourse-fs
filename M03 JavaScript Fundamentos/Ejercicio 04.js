/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   return Math.pow(num,2);

}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   return Math.pow(num,3);

}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   return Math.pow(num,exponent)
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.round(num,0)
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   //Math.floor(2.6) = 2;

   return Math.ceil(num) ;
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random() ;

}

// let num  = 10;
// console.log(`cuadrado de ${num} = `,elevarAlCuadrado(num))
// console.log(`cubo de ${num} = `,elevarAlCubo(num))

// let num1  = 10.5;
// console.log(`elevar  de ${num} elevado a  ${num1}= ` , elevar( num,num1))

// console.log(`redondear ${num1} = `,redondearNumero(num1))


// console.log(`redondear hacia arriba  ${num1} = ` , redondearHaciaArriba( num1))

// console.log(`aleatorio entre 0 y 1  = ` , numeroRandom())


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
