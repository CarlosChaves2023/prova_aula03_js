var numAlunos = parseFloat(prompt(`Digite a quantidade de alunos:`))
var contador = 1
var soma = 0
var media = 0
var maiorNota = 0
var menorNota = 10

while(contador <= numAlunos){
    var notaAluno = parseFloat(prompt(`Digite  a nota do ${contador}º aluno`)) 
    
    if(notaAluno > maiorNota){
        maiorNota = notaAluno
    } 
    
    if(notaAluno < menorNota){
        menorNota = notaAluno
    }
   
    soma += notaAluno
    media = soma / numAlunos
    contador++

}
console.log(media)
console.log(maiorNota)
console.log(menorNota)
