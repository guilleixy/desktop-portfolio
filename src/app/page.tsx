import ConmuWindow from "@/components/Projects/ConmuWindow";
import SpotifyLayout from "@/components/Spotify/SpotifyLayout";
import VSCodeLayout from "@/components/VSCode/VSCodeLayout";
import WikipediaLayout from "@/components/Wikipedia/WikipediaLayout";

export default function Home() {
  return (
    <div className="h-[50vh] w-[50vw]">
      <ConmuWindow />
      <WikipediaLayout />
      <VSCodeLayout />
      <SpotifyLayout />
    </div>
  );
}
