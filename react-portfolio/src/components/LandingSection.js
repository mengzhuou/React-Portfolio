import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myImage from "../images/myImage.jpg"; 

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar name='Mengzhu Ou' src={myImage} size='2xl'/>
    
    <Heading as='h5' size='xs' noOfLines={1}>
    Hello, I am Nina!
    </Heading>
    <Heading as='h1' size='2xl' noOfLines={1}>
      A frontend developer specialized in React
    </Heading>

  </FullScreenSection>
);

export default LandingSection;
