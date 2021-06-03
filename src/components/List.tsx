import React from "react";
import VideoItem from "./Items";
import { Box, Text } from "@chakra-ui/react";
const Retrieved = ({ videos, SelectedVideo }: any) => {
  const recommendedvideos = videos.map(
    (video: { id: { videoId: any } }): any => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          SelectedVideo={SelectedVideo}
        />
      );
    }
  );

  return <Box>{recommendedvideos}</Box>;
};
export default Retrieved;
