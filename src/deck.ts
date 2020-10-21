import { Color, Mark } from "./enums";
import { Card, Deck, Joker } from "./types";

// 创建扑克牌
export function createDeck():Deck {
    const deck:Deck = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks) {
        for (const c of colors) {
            deck.push({
                color: c,
                mark: m,
                getString() {
                    return this.color + this.mark
                }
            } as Card);
        }
    }
    let joker: Joker = {
        type: "small",
        getString() {
            return "jo"
        }
    }
    deck.push(joker);
    joker = {
        type: "big",
        getString() {
            return "JO"
        }
    }
    deck.push(joker);
    return deck;
}

// 打印扑克牌
export function printDeck(deck:Deck) {
    let result = '\n';
    deck.forEach((card, i) => {
        result += card.getString() + "\t";
        if ((i + 1) % 6 === 0) {
            result += "\n";
        }
    });
    console.log(result);
}