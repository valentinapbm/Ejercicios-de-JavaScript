//ejercicio1
const numPasos=(num)=>{
    let pasos =0;
    
    while(num>0){
        if (num % 2 ===0){
            num /= 2;
            pasos++;
        } else {
        num--;
        pasos++;
    }
    
}
return pasos;
}
console.log(numPasos(14)) // retorna 6
console.log(numPasos(8)) // returna 4
console.log(numPasos(123)) // retorna 12

//ejercicio 2
const contrasena = (string) => {
    let texto = string.replace(/ /g, "").toLowerCase();
    let texto2 = texto.replace(/a/g, "4").replace(/e/g, "3").replace(/i/g, "1").replace(/o/g, "0");
    return console.log(texto2)
    }
    contrasena("hola"); // "h0l4"
    contrasena("esta es una prueba"); // "3st43sun4pru3b4"
    contrasena(""); // ""

//ejercicio3
const likes = (numero)=>{
    if (numero >= 1000000) {
        return (Math.floor((numero / 1000000)) + 'M');
    }
    if (numero >= 1000) {
        return (Math.floor((numero / 1000)) + 'K');
    }
    return numero.toString();
}
console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "120K"
console.log(likes(25222444)); // "25M"

//ejercicio 4
const generarCodigo = (string) => {
    const textArray = string.split(' ').map( e => e.slice(0, 2) ).join('');
    return textArray;
    }
    console.log(generarCodigo("hola mundo")); // "homu"
    console.log(generarCodigo("juan david berbeo")); // "judabe"
    console.log(generarCodigo("")); // "" 
