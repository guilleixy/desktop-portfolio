import ConmuWindow from "@/components/Projects/ConmuWindow";
import SpotifyLayout from "@/components/Spotify/SpotifyLayout";
import VSCodeLayout from "@/components/VSCode/VSCodeLayout";
import WikipediaLayout from "@/components/Wikipedia/WikipediaLayout";

export default function Home() {
  return (
    <div className="">
      <ConmuWindow />
      <WikipediaLayout />
      <VSCodeLayout />
      <SpotifyLayout />
    </div>
  );
}
