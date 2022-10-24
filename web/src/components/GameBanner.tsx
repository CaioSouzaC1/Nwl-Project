interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a className="relative rounded-lg overflow-hidden" href="">
      <img src={props.bannerUrl} alt="" />
      <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
        <strong className="text-white font-black block">{props.title}</strong>
        <span className="text-sm text-zinc-300 block mt-1">
          {props.adsCount}
          {props.adsCount == 1 ? " Anúncio" : " Anúncios"}
        </span>
      </div>
    </a>
  );
}
