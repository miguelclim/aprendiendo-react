import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
const users = [
    {
        userName: "midudev",
        name: "Miguel Angel Duran",
        isFollowing: true
    },
    {
        userName: "pheralb",
        name: "Pablo H",
        isFollowing: false
    },
    {
        userName: "Paco Hdezs",
        name: "Paco Hdez",
        isFollowing: true
    },

]
export function App() {
    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                )
                )
            }
        </section>
    )
}
