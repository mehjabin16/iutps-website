import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Container from '@mui/material/Container';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import CircleIcon from '@mui/icons-material/Circle';


import myimg from "./assets/images/PS farewell 1.JPG";
import myimg2 from "./assets/images/PS farewell 2.JPG";
import myimg3 from "./assets/images/Photo1.jpg";


const CarouselTest = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      image: myimg
    },
    {
      name: "Random Name #2",
      description: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
      image: myimg2
    },
    {
      name: "Random Name #3",
      description: "Lorem ipsum dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: myimg3
    }
  ]

  return (
    <Carousel
      IndicatorIcon={<CircleIcon style={{ fontSize: "15px" }} />}
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
      <Card >
        <div class="my-img" style={{ height: 600 }}>
          <img src={props.item.image} alt="Logo" style={{ width: "100vw", height: "100vh" }} />
          <div class='text-on-image'>
            <Typography color="#86b349" component="div" variant="h6">
              {props.item.name}
            </Typography>
            <Typography color="#fff" display="block" style={{ fontSize: "12px" }}>
              {props.item.description}
            </Typography>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default CarouselTest;