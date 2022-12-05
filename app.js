const questions = [

  "Qual é o seu nome?",
  "Qual é a sua idade?",
  "Você é fumante? (s/n)",
  "Tem alguma deficiência? (s/n)",
  
  "Possui Erupções cutâneas ou lesões de pele? (s/n)",
  "Possui Dores no corpo (s/n)",
  "Possui Febre (s/n)",
  "Possui Dor de cabeça (s/n)",
  "Possui Calafrio (s/n)",
  "Possui Fraqueza (s/n)",

]

const ask = ( index = 0 ) => {
  process.stdout.write("\n\n", questions[index] + " : ")
}

ask()

const answers = []
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.stdout.write(answers)
    process.exit()
  }
})