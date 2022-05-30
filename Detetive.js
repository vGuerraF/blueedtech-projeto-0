const prompt = require("prompt-sync")();
console.clear();

const pergunta1 = prompt(`Você estava no banheiro do apartamento as 22:00 horas? (SIM/NAO)  `).toLowerCase();
const pergunta2 = prompt(`Você usou uma luva para entrar no banheiro? (SIM/NAO)  `).toLowerCase();
const pergunta3 = prompt(`Você entrou com uma mulher no banheiro? (SIM/NAO)  `).toLowerCase();
const pergunta4 = prompt(`Você deixou a torneira da pia ligada até sair do banheiro? (SIM/NAO)  `).toLowerCase();
const pergunta5 = prompt(`Você saiu sozinho do banheiro? (SIM/NAO)  `).toLowerCase();

let suspeitas = 0;
let perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];

for(i = 0; i < perguntas.length; i++){
    while(perguntas[i] != 'sim' && perguntas[i] != 'nao'){
        perguntas[i] = prompt(`Resposta inválida na pergunta ${i+1}. Responda somente com "sim" ou "nao": `)
    }
    if(perguntas[i] == 'sim'){
        suspeitas++
    }}

if(suspeitas <= 2){
    console.log(`\nVocê é INOCENTE.`)
}
else if(suspeitas == 3){
    console.log(`\nVocê é SUSPEITO do assasinato da mulher...`)
}
else{
    console.log(`Você é o CULPADO do assasinato da mulher!`)
}

