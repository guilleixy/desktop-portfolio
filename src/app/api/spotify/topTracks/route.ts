import { topTracks } from "@/lib/spotify";

export async function GET() {
  try {
    const topTracksResponse = await topTracks();
    return new Response(topTracksResponse.body, {
      status: topTracksResponse.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {}
}
