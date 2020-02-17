import {Pokemon} from './pokemon'

class AttackService {

    public whoShouldAttack(pokemon: Pokemon, otherPokemon: Pokemon ): Pokemon {
        if(pokemon.speed > otherPokemon.speed){
            return pokemon;
        } 
        else if(pokemon.speed < otherPokemon.speed){
            return otherPokemon;
        }

        const random = Math.random();

        if(random <= 0.5){
            return pokemon;
        }

        return otherPokemon;
    }

    public attack(attacker: Pokemon, defender: Pokemon): void{
        const damage = Math.floor(
            Math.floor(
                Math.floor(2 * attacker.level / 5 + 2) * attacker.offensiveStat * attacker.basePower/defender.basePower ) / 50) + 2;

        //Set damage to defender
        defender.defensiveStat = damage;
        defender.level--;
    };
}

export {AttackService}