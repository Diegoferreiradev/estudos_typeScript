
 function echoMelhorado<TIPO>(objeto: TIPO): TIPO {
     return objeto
 }

 
console.log(echoMelhorado('Diego').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: 'Diego', sobrenome: 'Ferreira', idade: 28 }))


const chamarEcho: <T>(data: T) => T = echoMelhorado
console.log(chamarEcho<string>('Alguma Coisa'))
