import React from "react";

import { Box, Image, Text, Center } from "@chakra-ui/react";
const VideoItem = ({ video, SelectedVideo }: any) => {
  return (
    <Box
      border="1px"
      maxWidth="400px"
      marginLeft="40px"
      marginRight="40px"
      marginTop="50px"
      borderColor="#F4F0F0"
      marginBottom="20px"
      backgroundColor="#161212"
    >
      <Box
        onClick={() => SelectedVideo(video)}
        marginTop="20px"
        marginLeft="10px"
        marginRight="10px"
      >
        <Image
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
        <Box marginBottom="20px" marginTop="20px">
          <Text fontWeight="bold" color="#F4F0F0">
            {video.snippet.title}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export default VideoItem;
