export interface IServer{
    name: string,
    description:string,
    background:string
}
export const listOfSubServers: IServer[] = [
    {
        name: "Novoakopovsk Transit Railway",
        description: "это сервер, где вас ожидают незабываемые поездки по городу Новоакоповск с модом Minecraft Transit Railway!",
        background: '/images/mtr-server-bg.png'
    },
    {
        name: "Novoakopovsk Industrial",
        description:"не придумал",
        background: '/images/create-server-bg.png'
    }
]