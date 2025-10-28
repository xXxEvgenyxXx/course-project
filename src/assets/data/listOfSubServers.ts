export interface IServer{
    name: string,
    description:string,
    background:string,
    online:number
}
export const listOfSubServers: IServer[] = [
    {
        name: "Novoakopovsk Transit Railway",
        description: "это сервер, где вас ожидают незабываемые поездки по городу Новоакоповск с модом Minecraft Transit Railway!",
        background: '/images/mtr-server-bg.png',
        online: 1000
    },
    {
        name: "Novoakopovsk Industrial",
        description:"это сервер, где вы можете воплотить любую индустрию с помощью мода Create в реальность!",
        background: '/images/create-server-bg.png',
        online:200
    }
]