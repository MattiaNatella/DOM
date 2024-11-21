// TRAMITE 2 PROMPT CHIEDERE ALL'UTENTE NOME E GENERE, se il genere è M il colore sarà verse, F rosso

// fase di preparazione
const namePlaceholder = document.getElementById('name-placeholder')


//fase di raccolta dati
const firstName = prompt("Inserire il nome")
const gender = prompt("inserire genere M o F")

//fase di elaborazione
const nameColor = (gender === 'M') ? 'verde' : 'rosso'

//fase di output
console.log(nameColor)

namePlaceholder.innerHTML =`
${firstName} ${gender}
`
namePlaceholder.classList.add(nameColor)