import { recentlyPlayedSongs } from "@/lib/spotify";
import { currentlyPlayingSong } from "@/lib/spotify";

export async function GET() {
  try {
    const currentlyPlayingResponse = await currentlyPlayingSong();
    if (currentlyPlayingResponse.status === 204) {
      const recentlyPlayedResponse = await recentlyPlayedSongs();
      const recentlyPlayedData = await recentlyPlayedResponse.json();

      return new Response(
        JSON.stringify({
          source: "recentlyPlayed",
          data: recentlyPlayedData.items[0].track,
          playedAt: recentlyPlayedData.items[0].played_at,
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      const currentlyPlayingData = await currentlyPlayingResponse.json();

      return new Response(
        JSON.stringify({
          source: "currentlyPlaying",
          data: currentlyPlayingData.item,
        }),
        {
          status: currentlyPlayingResponse.status,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
