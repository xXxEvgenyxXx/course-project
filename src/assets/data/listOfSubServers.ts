export interface IServer{
    name: string,
    description:string,
    background:string,
    online:number,
    cardBackground:string,
    status: "online" | "offline"
}
export const listOfSubServers: IServer[] = [
    {
        name: "Novoakopovsk Transit Railway",
        description: "это сервер, где вас ожидают незабываемые поездки по городу Новоакоповск с модом Minecraft Transit Railway!",
        background: '/images/mtr-server-bg.png',
        online: 1000,
        cardBackground: '/images/mtr-server-card-bg.png',
        status: "online"
    },
    {
        name: "Novoakopovsk Industrial",
        description:"это сервер, где вы можете воплотить любую индустрию с помощью мода Create в реальность!",
        background: '/images/create-server-bg.png',
        online:249,
        cardBackground:'/images/create-server-card-bg.png',
        status: "online"
    },
    {
        name: "Novoakopovsk 2077",
        description: "в разработке",
        online: 0,
        background:'/images/2077-server-bg.png',
        cardBackground:'/images/2077-server-card-bg.png',
        status:"offline"
    },
]