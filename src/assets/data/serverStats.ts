import { listOfSubServers } from "./listOfSubServers"
let totalOnline:number = 0;
let isOnline: "online" | "offline" = "offline";
listOfSubServers.forEach(subServer => {
    totalOnline += subServer.online;
    if(subServer.status === "online"){
        isOnline = "online";
    }
});
interface IServerStats {
    statName:string,
    statNum:number,
    status: "online" | "offline"
}
export const serverStats: IServerStats[] = [
    {
        statName: "Текущий онлайн",
        statNum: totalOnline,
        status: isOnline,
    }
]