import React from "react";
import Iframe from "react-iframe";
import { Box, Text, AspectRatio, Flex } from "@chakra-ui/react";
const SelectedDetail = ({ video }: any) => {
  if (!video) {
    return (
      <Flex
        marginTop="40px"
        marginLeft="40px"
        marginRight="40px"
        border="1px"
        borderColor="#F4F0F0"
        marginBottom="20px"
      >
        <Text
          marginLeft="10px"
          fontWeight="Bold"
          fontSize="18px"
          color="#F4F0F0"
        >
          Type in the search bar and then click on the video you want to play
        </Text>
      </Flex>
    );
  }

  const link = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <Text 
    color="#F4F0F0"
    marginBottom="20px"
    >
      <Box
        marginTop="50px"
      marginLeft="30px"
        marginRight="30px"
        border="1px"
        borderColor="#F4F0F0"
        maxWidth="800px"
        backgroundColor="#FFFFFF14"
        marginBottom="20px"
      >
        <Box
          marginLeft="10px"
   
          marginRight="10px"
          marginTop="20px"
          marginBottom="20px"
        >
          <Text fontWeight="bold"
        
          >{video.snippet.title}</Text>

          <AspectRatio maxW="1000px" maxH="1000px">
            <iframe src={link} allowFullScreen title="Video player" />
          </AspectRatio>
          
            <Text fontWeight="bold">Channel Name:</Text>
            <Text>{video.snippet.channelTitle}</Text>
            <Text fontWeight="bold">Video Description:</Text>
            <Text>{video.snippet.description}</Text>
          </Box>
        </Box>
      
    </Text>
  );
};

export default SelectedDetail;
