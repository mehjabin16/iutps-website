import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Container from '@mui/material/Container';

import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import CircleIcon from '@mui/icons-material/Circle';


import myimg from "./assets/images/PS farewell 1.JPG";
import myimg2 from "./assets/images/PS farewell 2.JPG";

const CarouselTest = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: myimg
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: myimg2
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: myimg
    }
  ]

  return (
    <Carousel
      IndicatorIcon={<CircleIcon style={{fontSize: "15px"}}/>}
      fullHeightHover={false}     // We want the nav buttons wrapper to only be as big as the button element is
      navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: 'cornflowerblue',
          borderRadius: 0
        }
      }}
      navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
          bottom: '0',
          top: 'unset'
        }
      }}
      NextIcon='next'             // Change the "inside" of the next button to "next"
      PrevIcon='prev'   >
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}


function Item(props) {
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ height: 600 }}
          image={props.item.image}
          alt="Live from space album cover"
        />
      </Card>
    </Container>
  );
}

export default CarouselTest;