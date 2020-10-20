console.log("start");

const {table} = require('table');

let data, output;


// recuperation dans data les donnee comprise dans data.js
const fs = require ('fs')
try {
    data = fs.readFileSync('data.js', 'utf8')
    console.log(data)

} catch (err) {
    console.log(err)
}

// deserialistaion de data vers data1
let data1 = JSON.parse(data);


// initialistaiotn pour afficher demongraphie en ascii art
var figlet = require('figlet');

figlet('Démographie', function(err, data){
    if (err) {
        console.log('oupsi');
        console.dir(err);
        return;
    }
    // affcihage de demongraphie en ascii art
    console.log(data);

    // creation du tableau et affichage de celui-ci
    output = table(data1);
    console.log(output);
});







