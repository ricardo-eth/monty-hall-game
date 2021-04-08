const fs = require('fs')
const { randomInt } = require('crypto')
const readline = require('readline-sync')
const chalk = require('chalk');

// Mode debug option
DEBUG_MOD = false

const { welcome } = require('./text')

do{
  // creation des 3 portes
  const tab = [['Porte 1', 'Porte 2', 'Porte 3'],['chèvre', 'chèvre', 'chèvre']]

  const n = randomInt(0,3)
  tab[1][n] = 'tesla'

  welcome()

// debug mode
if (DEBUG_MOD) {
console.log('')
console.log('')
console.log('// debug mod')
console.log(tab)
console.log('// debug mod')
console.log('')
console.log('')
}

// recuperer le nom du joueur

let player = readline.question(chalk.yellow('Merci de rentre votre nom: '))
while (player.length < 1 || player.length > 20) {
  player = readline.question(`\nMerci d'entrée au moins un charactère \n${('votre nom: ')}`)
}

console.log(`Super ${player}, merci de choisir une porte :`)

let playerChoise = readline.keyInSelect(tab[0], 'votre Choix :')

if (playerChoise === -1) {
  console.clear()
  console.log('')
  console.log('')
  console.log('Au revoir, à bientôt !')
  console.log('')
  console.log('')
  process.exit(1)
}

// l'ordinateur choisi une porte qui est pas le numero du joueur et qui n'ai pas le numero de la voiture

const computeurChoise = (tab, playerChoise) => {
  for (let i = 0; i < tab[0].length; i++) {
    if (tab[1][i] !== 'tesla' && i !== playerChoise) {
      return (i)
    }
  }
}

console.clear()
console.log('')
console.log(`Vous avez choisi la ${tab[0][playerChoise]}. l'ordinateur a choisi d'ouvrir la ${tab[0][computeurChoise(tab, playerChoise)]} avec une ${tab[1][computeurChoise(tab, playerChoise)]} dedans.`)
console.log('')

let playerChangeChoice = readline.keyInYN('Voulez vous changer votre choix ? : ')

// le switch des retours des messages en focntion des entrees
switch (playerChangeChoice) {
  case true :
    if (tab[1][playerChoise] === 'tesla') {
      console.log('')
      console.log(`Domage ${player}, votre permier choix etait le bon...`)
      console.log('')
    } else {
      console.log('')
      console.log(`Bravo ${player} vous avez gagné une tesla !`)
      console.log('')
    }
  break
  case false : 
    if (tab[1][playerChoise] === 'tesla') {
      console.log('')
      console.log(`Bravo ${player} vous avez gagné une tesla !`)
      console.log('')
    } else {
      console.log('')
      console.log(`Bravo ${player} vous repartez avec une belle chèvre !`)
      console.log('')
    }
  break
  default : console.log('bug bug bug')
}

} while (readline.keyInYN('Voulez-vous rejouer ?'))