import "./styles/main.css";
import logonlw from "./assets/logo-nlw-esports.png";
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
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
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/src/assets/game-1.png" alt="" />
          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="text-white font-black block">
              Nome do jogo
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/src/assets/game-2.png" alt="" />
          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="text-white font-black block">
              Nome do jogo
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/src/assets/game-3.png" alt="" />
          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="text-white font-black block">
              Nome do jogo
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/src/assets/game-4.png" alt="" />
          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="text-white font-black block">
              Nome do jogo
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/src/assets/game-5.png" alt="" />
          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="text-white font-black block">
              Nome do jogo
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/src/assets/game-6.png" alt="" />
          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="text-white font-black block">
              Nome do jogo
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className=" pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="block text-xl font-black text-white">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24}></MagnifyingGlassPlus>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
