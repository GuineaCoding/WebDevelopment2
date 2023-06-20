import { playlistStore } from "../models/playlist-store.js";

export const playlistController = {
  async index(request, response) {
    const playlist = await playlistStore.getPlaylistById(request.params.id);
    const viewData = {
      title: "Playlist",
      playlist: playlist,
    };
    response.render("playlist-view", viewData);
  },
};
