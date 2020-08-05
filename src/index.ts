type Deck = NormalCard[];
type Color = '♥' | '♠' | '♦' | '♣';
type NormalCard = {
    color: Color,
    mark: number
}

// 创建扑克牌
function createDeck():Deck {
    const deck:Deck = [];
    for (let i = 1; i <= 13; i++) {
        deck.push({
            color: '♠',
            mark: i
        });
        deck.push({
            color: '♣',
            mark: i
        });
        deck.push({
            color: '♥',
            mark: i
        });
        deck.push({
            color: '♦',
            mark: i
        });
    }
    return deck;
}

// 打印扑克牌
function printDeck(deck:Deck) {
    let result = '\n';
    deck.forEach((item, i) => {
        let str = item.color;
        if (item.mark <= 10) {
            str += item.mark;
        } else if (item.mark === 11) {
            str += "J";
        } else if (item.mark === 12) {
            str += "Q";
        } else {
            str += "K";
        }
        result += str + '\t';
        if ((i + 1) % 6 === 0) {
            result += "\n";
        }
    });
    console.log(result);
}

const deck = createDeck();
printDeck(deck);