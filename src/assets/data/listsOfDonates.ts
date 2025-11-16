interface IDonate {
    index: number,
    name: string,
    background:string,
    price: number,
}

export const listOfDonates: IDonate[] = [
    {
        index: 1,
        name: "вип",
        background: "/images/vip-icon.png",
        price: 99
    },
    {
        index: 1,
        name: "премиум",
        background: "/images/vip-icon.png",
        price: 299
    },
    {
        index: 1,
        name: "делюкс",
        background: "/images/vip-icon.png",
        price: 499
    },
    {
        index: 1,
        name: "ультра",
        background: "/images/vip-icon.png",
        price: 999
    },
    {
        index: 1,
        name: "легенда",
        background: "/images/vip-icon.png",
        price: 1499
    },
]