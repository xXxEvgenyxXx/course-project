interface IPrivilegeFeature {
    name: string,
    shortDesc?:string,
    availableFor:string,
}

export const listOfPrivilegeFeatures: IPrivilegeFeature[] = [
    {
        name: "Сохранение инвентаря при смерти",
        availableFor: "вип",
    },
    {
        name: "Сохранение брони при смерти",
        availableFor: "вип",
    },
    {
        name:"Команда /feed",
        shortDesc:"Восстановить сытость",
        availableFor:"вип",
    },
    {
        name:"Команда /heal",
        shortDesc:"Восстановить здоровье",
        availableFor:"вип",
    },
    {
        name:"Команда /repair",
        shortDesc:"Починить вещь в руке",
        availableFor:"вип",
    },
    {
        name:"Команда /enderchest",
        shortDesc:"Доступ к эндер-сундуку",
        availableFor:"вип",
    },
    {
        name:"Команда /fly",
        shortDesc:"Возможность летать",
        availableFor:"премиум",
    },
    {
        name:"Команда /back",
        shortDesc:"Возвращение к месту смерти",
        availableFor:"премиум",
    },
    {
        name:"Команда /repairall",
        shortDesc:"Починить все вещи",
        availableFor:"премиум",
    },
    {
        name:"Команда /xt",
        shortDesc:"Потушить себя",
        availableFor:"премиум",
    },
    {
        name:"Команда /god",
        shortDesc:"Включить бессмертие",
        availableFor:"делюкс",
    },
    {
        name:"Команда /tppos",
        shortDesc:"Телепортация по координатам",
        availableFor:"делюкс",
    },
    {
        name:"Команда /exp",
        shortDesc:"Выдать себе опыт",
        availableFor:"делюкс",
    },
    {
        name:"Команда /jump",
        shortDesc:"Телепортация на место взгляда",
        availableFor:"ультра",
    },
    {
        name:"Команда /heal [ник]",
        shortDesc:"Вылечить любого игрока",
        availableFor:"ультра",
    },
    {
        name:"Команда /feed [ник]",
        shortDesc:"Накормить любого игрока",
        availableFor:"ультра",
    },
    {
        name:"Команда /speed",
        shortDesc:"Изменить скорость",
        availableFor:"легенда",
    },
    {
        name:"Команда /vanish",
        shortDesc:"Включить полную невидимость",
        availableFor:"легенда",
    },
    {
        name:"Игнорирование анти-флудом",
        shortDesc:"Больше нет задержек в чате",
        availableFor:"легенда",
    },
    {
        name:"Возможность писать цветным в чате",
        shortDesc:"Выделяйте текст в чате и раскрашивайте!",
        availableFor:"легенда",
    },
]