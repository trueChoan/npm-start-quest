const info = require('./information');
const cowsay = require('cowsay');


console.log(cowsay.say({
    text:
        `Salut ${info.information.studentName}, ton campus ${info.information.campus} est le meilleur`,
    e: 'xX',
}))