const fs = require('fs')
const chalk = require('chalk');

exports.welcome = () => {
  const lineCmd = fs.readFileSync('./welcome.txt', 'utf-8') // lit le fichier usage-node.txt
  console.clear() // Clear affichage
  console.log(chalk.yellow(lineCmd)) // affichage du fichier 
}