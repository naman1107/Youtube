import React, { useEffect, useState } from "react";
import {RouteComponentProps} from 'react-router';
import {
  Box,
  Center,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  InputLeftElement,
  InputRightElement,
  InputGroup,
  Stack,
  Square
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
type MyProps = {
  term: string;
};
class Search extends React.Component<any,MyProps> {
  state: MyProps = {
    term: ""
  };

  handleChange = (e: { target: { value: any; }; })=> {
    this.setState({
      term: e.target.value
    });
  };
  handleSubmit = (e: { preventDefault: () => void; }): any => {
    e.preventDefault();

    this.props.handleFormSubmit(this.state.term);
  };
  render() {
    return (
      <Box
        width="100%"
        height="80px"
        p={4}
        backgroundColor="#212121"
        borderBottom="4px"
        borderBottomColor="#0D1314"
      >
        <Center>
          <Input
            type="text"
            maxWidth="80%"
            color="#F4F0F0"
            onChange={this.handleChange}
            placeholder="Search "
            variant="flushed"
          />
          <Square bg="#FFFFFF14">
            <Button
              width="80px"
              colorScheme="#FFFFFF14"
              color="#F4F0F0"
              varient="outline"
              _hover={{ fontWeight: "bold" }}
              onClick={this.handleSubmit}
            >
              {<SearchIcon />}
            </Button>
          </Square>
        </Center>
      </Box>
    );
  }
}
export default Search;
