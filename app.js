const questions = [
  "Qual é o seu nome?",
  "O que Aprendi Hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
  process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if(answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit()
  }
})

process.on("exit", () => {
  console.log(`

  |||====BEST OF ME APP====|||
  ___________________________
  |Olá, ${answers[0]}!!
  |
  |O que você aprendeu hoje > ${answers[1]}
  |
  |O que te aborreceu e o que você poderia fazer para melhorar > ${answers[2]}
  |
  |O que te deixou feliz hoje > ${answers[3]}
  |
  |Quantas pessoas você ajudou > ${answers[4]}`)
})