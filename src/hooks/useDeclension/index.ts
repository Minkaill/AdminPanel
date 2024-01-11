export const declineTovar = (amount: number) => {
    const cases = [2, 0, 1, 1, 1, 2];
    const titles = ['товар', 'товара', 'товаров'];

    let index;
    if (amount % 100 > 4 && amount % 100 < 20) {
        index = 2;
    } else {
        index = cases[Math.min(amount % 10, 5)];
    }

    return `${amount} ${titles[index]}`;
}
