import { HStack, Image, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './Card.css';

const Card = ({ title, description, imageSrc, seeMore }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  // key={project.title}
  //           title={project.title}
  //           description={project.description}
  //           imageSrc={project.getImageSrc()}
  
  return (
    <HStack spacing={8}>
      <Flex>
        <Grid gap={4} className='gridStyle'>
          <GridItem>
            <Image src={imageSrc} className="imageItem"></Image>
          </GridItem>
          <GridItem>
            <Text className="title">{title}</Text>
            <Text mt={2} className="description">{description}</Text>
            <Text mt={2} className="seeMore">{seeMore}</Text>
          </GridItem>
        </Grid>
      </Flex>
    </HStack>
  );
};

export default Card;
