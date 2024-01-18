type Item = {
    price: number;
    qty: number;
};
type Order = {
    province: "quebec" | "ontario";
    items: Item[];
    subtotal: number;
    footer: {
        line1: number;
        line2?: number;
        total: string;
    };
};

const taxes = {
    quebec: (subtotal: number) => {
        const line1 = subtotal * 0.05;
        const line2 = subtotal * 0.09975;
        return { line1, line2, total: (subtotal + line1 + line2).toFixed(2) };
    },
    ontario: (subtotal: number) => {
        const hst = subtotal * 0.13;
        return { line1: hst, total: (subtotal + hst).toFixed(2) };
    },
};

const val = Number.EPSILON;

function produceOrderTotal(province: "quebec" | "ontario", items: Item[]) {
    const subtotal = items.reduce((total, item) => {
        total += Math.round(item.price * item.qty * 100 + Number.EPSILON) / 100;
        return total;
    }, 0);

    const order: Order = {
        province,
        items,
        subtotal: Number(subtotal.toFixed(2)),
        footer: taxes[province](subtotal),
    };
    return order;
}

const orders = new Map<string, Item[]>();

const order1 = produceOrderTotal("quebec", [
    { price: 5.99, qty: 3 },
    { price: 3.99, qty: 2 },
]);

const order2 = produceOrderTotal("ontario", [
    { qty: 5, price: 0.99 },
    { qty: 3, price: 5.99 },
]);
console.log({ order1, order2 });
