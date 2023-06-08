export class Character {
  constructor(damage) {
    this._damage = damage;
    this._stoned = false;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }

  get attack() {
    let damage = this._damage * (1 - (this.distanceFromTarget - 1) * 0.1);
    if (this._stoned) {
      damage -= Math.log2(this.distanceFromTarget) * 5;
    }
    this._damage = Math.round(damage);
    return this._damage;
  }

  set attack(distanceFromTarget) {
    this.distanceFromTarget = distanceFromTarget;
    if(distanceFromTarget <= 0) {
      throw new Error('Расстояние не может быть больше или равно 0');
    }
  }
}

export class Magician extends Character {
}

export class Daemon extends Character {
}

// Честно говоря, я не особо понял как работать с get и set)) Код ниже выглядит намного проще...

// class Character {
//     constructor(damage, stoned) {
//         this.damage = damage;
//         this.stoned = stoned;
//     }

//     getAttack(distanceFromTarget) {
//         let attack = this.damage * (1 - (distanceFromTarget - 1) * 0.1);
//         if(this.stoned) {
//             attack -= Math.log2(distanceFromTarget) * 5;
//         }
//         return Math.round(attack);
//     }
// }

// class Magician extends Character {
// }

// class Daemon extends Character {
// }
