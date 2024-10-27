class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 9999;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.floor((this.min  + this.max + 1) / 2);
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess();
    }
}

module.exports = GuessingGame;
