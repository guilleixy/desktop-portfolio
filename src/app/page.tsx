import SpotifyLayout from "@/components/Spotify/SpotifyLayout";
import VSCodeLayout from "@/components/VSCode/VSCodeLayout";
import WikipediaLayout from "@/components/Wikipedia/WikipediaLayout";

export default function Home() {
  return (
    <div className="h-[50vh] w-[50vw]">
      <WikipediaLayout />
      <VSCodeLayout />
      <SpotifyLayout />
    </div>
  );
}
