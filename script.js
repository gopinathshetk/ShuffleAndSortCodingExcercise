class ShuffleAndSort {
    cards = [];
    shuffledCards = [];
    sortedCards = [];

    getRandNum = (min = 0, max = 8) => {
       let randomNum = Math.random() * (max - min) + min;
       return Math.round(randomNum);
    }

    initCards = () => {
        let cardsContent = document.querySelector('.cardsContainer').children;
        for(let i = 0; i < cardsContent.length; i++) {
            this.cards.push(cardsContent[i].outerHTML);
        }
    };

    shuffleCards = () => {
        let shuffleOrder = [];
        let randNum = null;

        while (shuffleOrder.length < 9) {
            randNum = this.getRandNum();
            if(shuffleOrder.includes(randNum)) {
                randNum = this.getRandNum();
            } else {
                shuffleOrder.push(randNum);
            }
        }
        
        this.shuffledCards = [];
        shuffleOrder.forEach(idx => {
            this.shuffledCards.push(this.cards[idx]);
        });

        document.querySelector('.cardsContainer').innerHTML = this.shuffledCards.join(' ');
    };

    sortCards = () => {
        this.sortedCards = [...this.cards].sort();
        
        document.querySelector('.cardsContainer').innerHTML = this.sortedCards.join(' ');
    };
};

const shuffleAndSortObj = new ShuffleAndSort();