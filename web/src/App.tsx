import "./styles/main.css";
import logonlw from "./assets/logo-nlw-esports.png";

import { GameBanner } from "./components/GameBanner";
import { AddBanner } from "./components/CreateAddBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

function App() {
  interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
      ads: number;
    };
  }

  const [allGames, setAllGames] = useState<Game[]>([]);
  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setAllGames(data);
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logonlw} />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {allGames.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <AddBanner />
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>Publique um anuncio</Dialog.Title>
            <Dialog.Content>dasdasdasda</Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
