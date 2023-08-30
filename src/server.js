import { createServer } from "miragejs"

export default function server (){createServer({
    routes() {
        this.get("/api/games", () => [
            { id: 1, value: "Chess", name: "Chess" },
            { id: 2, value: "Dota 2", name: "Dota 2" },
            { id: 3, value: "CS:GO", name: "CS:GO" },
            { id: 4, value: "Mortal Kombat 11", name: "Mortal Kombat 11" },
        ])
    },
})}