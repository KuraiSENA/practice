import "./App.css";
import { TwitterCard } from "./TwitterCard";

const users = [
  {
    name: "Kurai",
    userName: "naruto",
    isFollowing: true,
  },
  {
    name: "flsh",
    userName: "car",
    isFollowing: false,
  },
  {
    name: "btmn",
    userName: "batman",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterCard key={name} name={name} initialIsFollowing={isFollowing}>
            {userName}
          </TwitterCard>
        );
      })}
    </section>
  );
}
