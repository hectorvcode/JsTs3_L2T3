abstract class Character {
    constructor() {
    }

    introduce() {
        console.log(`Let me introduce myself, I am ${this.charName()}`)
    }

    fight() {
        console.log(`${this.charName()} attacks with ${this.specialAttack()}`)
    }

    abstract specialAttack(): string;
    abstract charName(): string;
}


class Wizard extends Character{
    charName(): string {
        return "Gandarlf";
    }
    specialAttack(): string {
        return "Wizard Blast";
    }
    getNewTroops(): string {
        return "Bringing Rohan's Cavalry"
    }
    newTroops() {
        console.log(`${this.charName()} the White, is ${this.getNewTroops()}`);
    }
}

class Badguy extends Character{
    charName(): string {
        return "Saruman";
    }
    specialAttack(): string {
        return "Blasting Fire";
    }
    improvingUrukhai(): string {
        return "Special warriors higher speed and motivation to kidnap and scape"
    }
    improve(){
        console.log(`${this.charName()} is giving his ${this.improvingUrukhai()}`)
    }

}

const gandarlf = new Wizard();
const saruman = new Badguy();


gandarlf.newTroops();
saruman.improve();
gandarlf.introduce();
saruman.introduce();
gandarlf.fight();
saruman.fight();
