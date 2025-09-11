import SpotifyPlayer from "./SpotifyPlayer";
import { TabsProvider } from "../tabs/TabsContext";
import { Tab, TabList, TabPanel } from "../tabs/Tabs";
import Image from "next/image";
import { SpotifyHeaderPlaylist } from "./SpotifyPlaylist";
import SpotifyTopArtistsPlaylist from "./SpotifyTopArtistsPlaylist";

export default function SpotifyLayout() {
  return (
    <div className="h-[80dvh] w-[70dvw] border-[#343434] mt-10 ml-10 border-1 rounded-lg p-[9px] font-spotify flex flex-col">
      <div></div>
      <div className="flex-grow flex gap-2 overflow-hidden">
        <TabsProvider defaultTab="top-artists">
          <TabList className="flex flex-col bg-spotify-grey-800 w-1/5 p-[5px] rounded-sm">
            <Tab
              className="cursor-pointer hover:bg-spotify-grey-700 flex items-center p-[5px] gap-1.5 rounded-sm"
              id="top-artists"
            >
              <Image
                height={40}
                width={40}
                src="/assets/images/TwentyOnePilotsBreach.webp"
                alt="Top artists playlist cover"
              />
              <div className="flex flex-col items-start">
                <p className="text-sm">My top artists</p>
                <p className="text-[0.6rem] text-spotify-grey-50">
                  Playlist · Guille
                </p>
              </div>
            </Tab>
            <Tab className="cursor-pointer hover:bg-spotify-grey-700" id="tab2">
              YouTube
            </Tab>
            <Tab className="cursor-pointer hover:bg-spotify-grey-700" id="tab3">
              GitHub
            </Tab>
          </TabList>
          <div className="flex-grow h-full">
            <TabPanel
              id="top-artists"
              className="rounded-md overflow-y-scroll h-full flex flex-col"
            >
              <SpotifyHeaderPlaylist
                src="/assets/images/TwentyOnePilotsBreach.webp"
                alt="Top artists playlist cover"
                authorImg="/assets/images/pikachu_profile_picture.png"
                pretitle="Lista pública"
                title="My top artist"
                author="Guille"
                description="A list of the artist I have been listening to the most recently"
                length="35min"
                extraInfo="10 artists"
                className="bg-gradient-to-t from-[#650000] to-[#D74838]"
              />
              <SpotifyTopArtistsPlaylist />
            </TabPanel>
            <TabPanel id="tab2">📺 YouTube Player</TabPanel>
            <TabPanel id="tab3">🐙 GitHub Repo</TabPanel>
          </div>
        </TabsProvider>
      </div>

      <SpotifyPlayer />
    </div>
  );
}
