"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Character = /** @class */ (function () {
    function Character() {
    }
    Character.prototype.introduce = function () {
        console.log("Let me introduce myself, I am " + this.charName());
    };
    Character.prototype.fight = function () {
        console.log(this.charName() + " attacks with " + this.specialAttack());
    };
    return Character;
}());
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wizard.prototype.charName = function () {
        return "Gandarlf";
    };
    Wizard.prototype.specialAttack = function () {
        return "Wizard Blast";
    };
    Wizard.prototype.getNewTroops = function () {
        return "Bringing Rohan's Cavalry";
    };
    Wizard.prototype.newTroops = function () {
        console.log(this.charName() + " the White, is " + this.getNewTroops());
    };
    Wizard.prototype.joinGreatArmy = function (army) {
        return army;
    };
    Wizard.prototype.settingSpy = function (spy) {
        return spy;
    };
    return Wizard;
}(Character));
var DarkWizard = /** @class */ (function (_super) {
    __extends(DarkWizard, _super);
    function DarkWizard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DarkWizard.prototype.charName = function () {
        return "Saruman";
    };
    DarkWizard.prototype.specialAttack = function () {
        return "Blasting Fire";
    };
    DarkWizard.prototype.improvingUrukhai = function () {
        return "Special warriors higher speed and motivation to kidnap and scape";
    };
    DarkWizard.prototype.improve = function () {
        console.log(this.charName() + " is giving his " + this.improvingUrukhai());
    };
    return DarkWizard;
}(Character));
var gandarlf = new Wizard();
var saruman = new DarkWizard();
var armyRace = gandarlf.joinGreatArmy("elf");
var armySoldiers = gandarlf.joinGreatArmy("10000");
console.log("Let's welcome our new " + armySoldiers + " " + armyRace + " soldiers");
var spyStatus = gandarlf.settingSpy("infiltrated");
var spyInfiltrated = gandarlf.settingSpy(2);
console.log("We have " + spyInfiltrated + " spies in status " + spyStatus);
gandarlf.newTroops();
saruman.improve();
gandarlf.introduce();
saruman.introduce();
gandarlf.fight();
saruman.fight();
