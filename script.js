//3 métodos facilitadores: Includes, StartWith e EndsWith

//Includes
let nomes = ["Amir", "Bemir", "Cemir"];
console.log(nomes);
console.log(nomes.includes("Demir"));

if (nomes.includes("Amir")) {
  console.log("O meliante Amir está incluido em nosso array");
} else {
  console.log("O meliante Amir não está no array");
}

if (nomes.includes("Bemir")) {
  console.log("O meliante Bemir está incluido em nosso array");
} else {
  console.log("O meliante Bemir não está no array");
}

if (nomes.includes("Cemir")) {
  console.log("O meliante Cemir está incluido em nosso array");
} else {
  console.log("O meliante Cemir não está no array");
}

//StartWith
let aluno = "Albano";
console.log(aluno.startsWith("Alb"));
console.log(aluno.startsWith("alb"));

//EndsWith
console.log(aluno.endsWith("ano"));
