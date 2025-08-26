import SpotifyPlayer from "./SpotifyPlayer";

export default function SpotifyLayout() {
  return (
    <div className="h-[80dvh] w-[70dvw] border-[#343434] mt-10 ml-10 border-1 rounded-lg p-[9px] font-spotify">
      <SpotifyPlayer />
    </div>
  );
}
