interface INews {
    title: string,
    desc: string,
    date: string,
    image: string
}
export const listOfNews: INews[] = [
    {
        title:"Новоакоповский вокзал построен!",
        desc: "Дорогие игроки! Сегодня, 19 ноября 2025 года на сервере Novoakopovsk Transit Railway было завершено строительство Новоакоповского вокзала, который уже принимает первых пассажиров!",
        date: "19 ноября 2025",
        image: "/images/first-news.png"
    },
    {
        title:"Движение скоростного автобуса запущено!",
        desc: "Дорогие игроки! Сегодня, 18 ноября 2025 года на сервере Novoakopovsk Transit Railway было запущено движение скоростного автобуса, призванного соединить самые отдаленные районы города!",
        date: "18 ноября 2025",
        image: "/images/second-news.png"
    },
    {
        title:"Движение скоростного трамвая запущено!",
        desc: "Дорогие игроки! Сегодня, 17 ноября 2025 года на сервере Novoakopovsk Transit Railway было запущено движение скоростного трамвая, призванного соединить самые отдаленные районы города!",
        date: "17 ноября 2025",
        image: "/images/third-news.png"
    },
]