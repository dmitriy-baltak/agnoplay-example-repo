// @ts-ignore
import { Agnoplay } from "@agnoplay/react";
import Box from "@mui/material/Box";
// import "./CustomVideoPlayer.css";

const CustomVideoPlayer = ({ videoId, videoUrl, license_key }: any) => {
  const playerOptions = {
    license_key: license_key,
    autoplay: "false",
    stream_source: "custom",
    custom_source: {
      source: videoUrl,
      title: "Testing Video",
      type: "",
    },
    keyboard_controls: true,
    language: "en",
    layout: "fill",
    picture_in_picture: "bottom-right",
    abr: "bandwidth",
    videoMetadata: {
      duration: "634",
      title: "Big Buck Bunny",
      description:
        "Big Buck Bunny is a short animated film by the Blender Foundation.",
      date_created: "2008-05-30",
      upload_date: "2008-05-30",
      format: "mp4",
      tags: "big buck bunny, animation, Blender Foundation",
      category: "Animation",
      publisher: "Blender Foundation",
    },
  };

  return (
    <Box
      className="video-player-container"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <Box
        className="video-player"
        id="video-player-container"
        sx={{
          width: "400px",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        <Agnoplay
          id="252"
          brand="binghamton-university-73082619-14d1-49d1-a50b-f95050416a6c"
          videoId={videoId}
          options={playerOptions}
        />{" "}
      </Box>{" "}
    </Box>
  );
};

export default CustomVideoPlayer;
