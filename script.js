const jedi = [];
jedi[0] = 'Luke';


jedi.push('Obi-Wan Kenobi');


jedi.unshift('Yoda');   

console.log(jedi[1]);
jedi.splice(0,1);

jedi.splice(1,1);
console.log(jedi);

const sithLords = ["Darth Vader","Darth Sidious","Darth Maul"];
console.log(sithLords);
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
sithLords.concat(imperialOfficers);
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);
const sWVRemoved = starWarsVillains.slice(2,4);
console.log(sWVRemoved);    


const droids = {

astromech: "R2-D2",
protocol: "C-3P0",
assassin: "IG-88"

}

console.log(droids['astromech']);

console.log(droids.protocol);

droids.assassin = 'IG-11';
console.log(droids.assassin);