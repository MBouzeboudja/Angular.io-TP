import {Pokemon} from './pokemon/pokemon';
import {AttackService} from './pokemon/attackService';

let pikachu = new Pokemon('pikachu', 12, 20, 10, 10, 5, 15) 
let ditto = new Pokemon('ditto', 12, 20, 10, 10, 5, 15) 

let players = [pikachu, ditto];

let attackService = new AttackService();
let i = 0;

let attackerIndice: number;
let defenderIndice: number;

while(pikachu.level > 0 && ditto.level > 0 ){
    attackerIndice = Math.floor((Math.random() * 1000) % 2);
    console.log(attackerIndice);

    console.log(`${pikachu.name} - level = ${pikachu.level} - ${i} attak\n`);
    console.log(`${ditto.name}   - level = ${ditto.level}   - ${i} attak\n`);
    attackService.attack(pikachu, ditto)
    i++;
}

