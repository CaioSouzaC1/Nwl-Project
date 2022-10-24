import { MagnifyingGlassPlus } from "phosphor-react";
import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export function AddBanner() {
  const [handleTradeVarValue, sethandleTradeVarValue] = useState(false);

  useEffect(() => {
    console.log(handleTradeVarValue);
  }, [handleTradeVarValue]);

  function click() {
    sethandleTradeVarValue(!handleTradeVarValue);
  }

  return (
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
        <Dialog.Trigger>
          <button
            onClick={() => click()}
            className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3"
          >
            <MagnifyingGlassPlus size={24}></MagnifyingGlassPlus>
            Publicar anúncio
          </button>
        </Dialog.Trigger>
      </div>
    </div>
  );
}
