import Header from "@/components/Header";
import ConmuWindow from "@/components/Projects/ConmuWindow";
import SpotifyLayout from "@/components/Spotify/SpotifyLayout";
import Scene from "@/components/Three/Scene";
import VSCodeLayout from "@/components/VSCode/VSCodeLayout";
import WikipediaLayout from "@/components/Wikipedia/WikipediaLayout";

export default function Home() {
  return (
    <div className="">
      <div className="fixed h-screen w-screen z-[-0]">
        <Scene />
      </div>
      <Header />
      {/* 
      <ConmuWindow />
      */}
      {/* <WikipediaLayout />
      <VSCodeLayout /> */}
      {/* <SpotifyLayout /> */}
    </div>
  );
}
