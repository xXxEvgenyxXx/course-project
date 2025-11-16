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
    }
]