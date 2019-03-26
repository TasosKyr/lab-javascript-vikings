// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg) {
        super(healthArg, strengthArg);
        this.name = nameArg;
    }
    receiveDamage(damageArg) {
        this.health -= damageArg;
        if (this.health > 0) {
            return `${this.name} has received ${damageArg} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}
// Saxon
class Saxon extends Soldier {
    constructor(healthArg, strengthArg) {
        super(healthArg, strengthArg);
    }
    receiveDamage(damageArg) {
        this.health -= damageArg;
        if (this.health > 0) {
            return `A Saxon has received ${damageArg} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let strengthRandomViking = randomViking.attack();
        let resultSaxon = randomSaxon.receiveDamage(strengthRandomViking);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
        }
        return resultSaxon;
    }
    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let strengthRandomSaxon = randomSaxon.attack();
        let resultViking = randomViking.receiveDamage(strengthRandomSaxon);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        }
        return resultViking;
    }

    showStatus() {
        if (this.saxonArmy.length == 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length == 0) {
            return `Saxons have fought for their lives and survive another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}
