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

    joinGreatArmy<T>(army:T):T{
        return army;
    }

    settingSpy<X>(spy:X):X{
        return spy;
    }
}

class DarkWizard extends Character{
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
const saruman = new DarkWizard();

const armyRace= gandarlf.joinGreatArmy("elf");
const armySoldiers = gandarlf.joinGreatArmy("10000");
console.log(`Let's welcome our new ${armySoldiers} ${armyRace} soldiers`)

const spyStatus = gandarlf.settingSpy("infiltrated");
const spyInfiltrated = gandarlf.settingSpy(2);
console.log(`We have ${spyInfiltrated} spies in status ${spyStatus}`)

gandarlf.newTroops();
saruman.improve();
gandarlf.introduce();
saruman.introduce();
gandarlf.fight();
saruman.fight();
