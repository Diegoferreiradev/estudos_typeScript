
const usuarioID: string = 'testeSeven'
const notificacoes: string = '11'
const boasVindas = 'Boas Vindas ' + usuarioID + ' Notificações: ' + notificacoes

console.log(boasVindas)
console.log(`Boas Vindas ${usuarioID}, 
             Notificações ${parseInt(notificacoes) > 10 ? '+10' : notificacoes}`)
