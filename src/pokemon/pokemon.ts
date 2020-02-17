class Pokemon {

    constructor(
        public name: string = "anonyme",
        public speed: number = 0,
        public level: number = 0,
        public offensiveStat: number = 0,
        public defensiveStat: number = 0,
        public maxHealth: number = 0,
        public basePower: number = 0
    ){};

};

export {Pokemon}; 