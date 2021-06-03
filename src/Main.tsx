import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import youtube from "./api/youtube";
import SelectedDetail from "./components/Details";
import Retrieved from "./components/List";
import {
  Box,

  SimpleGrid
} from "@chakra-ui/react";
type MyComponents = {
  videos: Array<Object>;
  selectedVideo: any;
};
class Main extends React.Component<any,MyComponents> {
  state: MyComponents = {
    videos: [],
    selectedVideo: null
  };

  handleSubmit = async (input: string) => {
    const res = await youtube.get("/search", {
      params: {
        q: input
      }
    });

    this.setState({
      videos: res.data.items
    });
  };
  SelectedVideo = (video: object) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <>
        <Search handleFormSubmit={this.handleSubmit} />
        <Box backgroundColor="#161212" width="100%" height="100vh">
          <SimpleGrid
            backgroundColor="#161212"
            columns={2}
          spacingX="100px"
            minChildWidth="200px"
          >
            <Box>
              <SelectedDetail video={this.state.selectedVideo} />
            </Box>
            <Box backgroundColor="#161212">
              <Retrieved
                SelectedVideo={this.SelectedVideo}
                videos={this.state.videos}
              />
            </Box>
          </SimpleGrid>
        </Box>
      </>
    );
  }
}

export default Main;
