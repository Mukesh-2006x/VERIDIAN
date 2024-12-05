import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import C1 from '../../assets/C1.png';
import C2 from '../../assets/C2.png';
import C3 from '../../assets/C3.png';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import './cards.css';




function Cards() {
  const cardData = [
    {
      image: C1,
      title: "Investment focus and strategy",
      description: [
        "Veridian focuses on companies across a number of different sectors, predominantly internet-based companies with long-term growth potential, with the aim of releasing the potential of businesses, sustainably improving operations and generating significant growth and profitability.",
        "Our investment strategy creates value at every stage of an investment. Utilizing the strengths of our industry-experienced team, Veridian has crafted a streamlined process from identifying potential opportunities through due diligence and deal documentation and onward to integration and transformation. Veridian’s unique combination of people and processes is market-tested to generate and release significant value and growth.",
      ],
    },
    {
      image: C2,
      title: "Portfolio",
      description: [
        "The central investment of Veridian is in the Pragmatic Play group of companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a world-leading game developer providing player-favourites to the most successful global brands in the iGaming industry.",
        "Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major regulated markets, languages, and currencies. Driven by persistence to craft immersive experiences and responsible thrills, Pragmatic Play’s professional team consistently delivers best-in-class services to its partners worldwide with a dedication to creating games that players love time and time again.",
      ],
    },
    {
      image: C3,
      title: "Corporate social responsibility",
      description: [
        "Veridian supports responsible investing and evaluates environmental, social, and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, and consideration of ESG issues improves portfolio company performance and investment results.",
      ],
    },
  ];

  const isSmallScreen = useMediaQuery('(max-width:425px)'); 
  return (
    <Box sx={{paddingBottom:'50px',marginTop:'50px'}}>
      <Typography
        className="title"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
         marginBottom:'10px',
          fontSize: { xs: '18px', sm: '22px', md: '28px', lg: '30px' },
        }}
      >
        Holistic Investment Approach
      </Typography>

      <Box
        sx={{
          width: { xs: '95%', sm: '85%', md: '80%', lg: '86%' },
          marginLeft:{ xs: '3%', sm: '7%', md: '10%', lg: '80px' },
          paddingTop:'20px'
        }}
      >
        {isSmallScreen ? (
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    backgroundColor: 'white',
                    boxShadow: 'none',
                    borderRadius: '1px',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: 150, sm: 200, md: 150, lg: 200 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: { xs: '20px', sm: '30px', md: '10px' },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={card.image}
                      alt={card.title}
                      sx={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '17px' },
                        fontWeight: 'bold',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        textAlign: 'left',
                      }}
                    >
                      {card.title}
                    </Typography>
                    {card.description.map((desc, idx) => (
                      <Typography
                      key={idx}
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        fontFamily: 'DM Sans',
                        fontSize: { xs: '12px', sm: '13px', md: '14px', lg: '11px' },
                        lineHeight: 1.5,
                        paddingTop: idx === 0 ? '10px' : '5px',
                        textAlign: 'justify',
                      }}
                    >
                      {desc}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Grid container spacing={2}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={12} md={4} lg={4} xl={3} key={index} >
              <Card
                sx={{
                  maxWidth: '100%',
                  height: '100%',
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  borderRadius: '1px',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 150, sm: 200, md: 150, lg: 200 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: { xs: '20px', sm: '30px', md: '10px' },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
                <CardContent sx={{paddingLeft:'0px' , paddingBottom:'0px',paddingRight:'0px',paddingTop:'0px'}}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: { xs: '16px', sm: '18px', md: '17px', lg: '14px' },
                      fontWeight: 'bold',
                      paddingLeft: '20px',
                      paddingRight: '20px',
                      textAlign: 'left',
                    }}
                  >
                    {card.title}
                  </Typography>
                  {card.description.map((desc, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        fontFamily: 'DM Sans',
                        fontSize: { xs: '12px', sm: '13px', md: '14px', lg: '14px' },
                        lineHeight: 1.5,
                        paddingTop: idx === 0 ? '10px' : '5px',
                        textAlign: 'justify',
                      }}
                    >
                      {desc}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  </Box>
);
}

export default Cards;

