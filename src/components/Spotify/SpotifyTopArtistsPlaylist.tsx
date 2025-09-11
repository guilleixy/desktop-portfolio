"use client";
import { useState, useEffect } from "react";
import { SpotifyPlaylist } from "./SpotifyPlaylist";

export default function SpotifyTopArtistsPlaylist() {
  const [artists, setArtists] = useState<any[]>([]);
  const fetchCurrentTrack = async () => {
    try {
      const res = await fetch("/api/spotify/topArtists");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setArtists(data.items);
    } catch (e) {
      console.error("Error fetching last played:", e);
    }
  };

  useEffect(() => {
    fetchCurrentTrack();
  }, []);
  return <SpotifyPlaylist values={artists} />;
}
