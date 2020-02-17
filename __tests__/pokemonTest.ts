import {Pokemon} from '../src/pokemon/pokemon';
import {AttackService} from '../src/pokemon/attackService'

beforeEach

const attackService = new AttackService();

describe("test constructor with no parameter", () => {
    it("should be named test", () => {
        const pokemon = new Pokemon(undefined, 1);
        expect(pokemon.name).toEqual("anonyme");
    })
    it("should be named 'name'", () => {
        const pokemon = new Pokemon("name", 1);
        expect(pokemon.name).toEqual("name");
    })
})


describe("test who should attack", () => {

    let MathRandom: () => number;
    let pikachu: Pokemon;
    let ditto: Pokemon;
    beforeEach(() => {
        pikachu = new Pokemon(
            'Pikachu',
            1,
            90,
            55,
            40,
            30,
        )

        ditto = new Pokemon(
            'Ditto',
            1,
            48,
            48,
            48,
            48,
        )
        MathRandom = Math.random;
        Math.random = () => 0.6;
    });

    it("Should Pokemon b attack", () => {

        const a: Pokemon = new Pokemon("a", 1);
        const b: Pokemon = new Pokemon("b", 2);
        expect(attackService.whoShouldAttack(a, b)).toEqual(b);
    });

    it("should Pokemon a attack", () => {
        const a: Pokemon = new Pokemon("a", 3);
        const b: Pokemon = new Pokemon("b", 1);
        expect(attackService.whoShouldAttack(a, b)).toEqual(a);
    });

    it("Test when speed is equals", () => {
        const a: Pokemon = new Pokemon("a", 1);
        const b: Pokemon = new Pokemon("b", 1);
        expect(attackService.whoShouldAttack(a, b)).toEqual(b);

    });

    afterEach(() => {
        Math.random = MathRandom;
    });

})

describe("test attack", () => {
    let pikachu: Pokemon;
    let ditto: Pokemon;
    beforeEach(() => {
        pikachu = new Pokemon(
            'Pikachu',
            1,
            90,
            55,
            40,
            30,
            30
        )

        ditto = new Pokemon(
            'Ditto',
            1,
            48,
            48,
            48,
            48,
            30  
        )
    });

    it("a should attack b", () => {
        attackService.attack(pikachu, ditto);
        expect(ditto.defensiveStat).toBe(43);
        
    })
});