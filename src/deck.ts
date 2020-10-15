import { Color, Mark } from "./enums";
import { Deck } from "./types";

// 创建扑克牌
export function createDeck():Deck {
    const deck:Deck = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks) {
        for (const c of colors) {
            deck.push({
                color: c,
                mark: m
            })
        }
    }
    return deck;
}

// 打印扑克牌
export function printDeck(deck:Deck) {
    let result = '\n';
    deck.forEach((card, i) => {
        let str = card.color + card.mark;
        result += str + "\t";
        if ((i + 1) % 6 === 0) {
            result += "\n";
        }
    });
    console.log(result);
}