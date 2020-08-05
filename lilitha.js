const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');
var figlet = require('figlet');
 
var msg = greet('Lilitha')
//console.log(msg);
figlet(msg, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    const styledMessage = chalk.bgWhiteBright.black(data);
console.log(styledMessage);
});
