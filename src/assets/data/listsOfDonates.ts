interface IDonate {
    index: number,
    name: string,
    background:string,
    price: number,
    color: string
}

export const listOfDonates: IDonate[] = [
    {
        index: 1,
        name: "вип",
        background: "/images/vip-icon.png",
        price: 99,
        color: "#0088CC"
    },
    {
        index: 2,
        name: "премиум",
        background: "/images/premium-icon.png",
        price: 299,
        color: "#3399FF"
    },
    {
        index: 3,
        name: "делюкс",
        background: "/images/deluxe-icon.png",
        price: 499,
        color: "#003366",
    },
    {
        index: 4,
        name: "ультра",
        background: "/images/ultra-icon.png",
        price: 999,
        color: "#8A2BE2"
    },
    {
        index: 5,
        name: "легенда",
        background: "/images/legend-icon.png",
        price: 1499,
        color: "#FF4500"
    },
]