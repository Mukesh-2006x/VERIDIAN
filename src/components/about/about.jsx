import React from 'react';
import { Box, Typography, Grid, useTheme } from "@mui/material";
import Logo2 from '../../assets/logo2.png';
import Ic1 from '../../assets/ic1.png';
import Ic2 from '../../assets/ic2.png';
import Ic3 from '../../assets/ic3.png';
import Ic4 from '../../assets/ic4.png';

function About() {
  const theme = useTheme();

  return (
    <Box sx={{ marginLeft: '107px' }}>
      <Box>
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: '30px',
            padding: '10px',
            marginTop: '20px',
            [theme.breakpoints.down('xl')]: { fontSize: '28px', marginLeft: '40%' },
            [theme.breakpoints.down('lg')]: { fontSize: '26px', marginLeft: '35%' },
            [theme.breakpoints.down('md')]: { fontSize: '24px', marginLeft: '35%' },
            [theme.breakpoints.down('sm')]: { fontSize: '20px', marginLeft: '15%' },
            [theme.breakpoints.down('xs')]: { fontSize: '18px', marginLeft: '10%' },
          }}
        >
          About Us
        </Typography>

        <Box
          sx={{
            width: '90%',
            maxWidth: '1200px',
            fontFamily: "DM Sans",
            [theme.breakpoints.down('xl')]: { fontSize: '28px', marginLeft: '0%' },
            [theme.breakpoints.down('lg')]: { fontSize: '26px', marginLeft: '0%' },
            [theme.breakpoints.down('md')]: { fontSize: '24px', marginLeft: '0%' },
            [theme.breakpoints.down('sm')]: { fontSize: '20px', marginLeft: '-15%' },
            [theme.breakpoints.down('xs')]: { fontSize: '18px', marginLeft: '10%' },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ffffff",
              padding: "30px",
              borderRadius: "1px",
              marginBottom: "20px",
            }}
          >
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                <img
                  src={Logo2}
                  alt="Veridian Logo"
                  style={{ width: '100%', maxWidth: '250px' }}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: "20px",
                    fontSize: '12px',
                    fontFamily: 'DM Sans',
                    color: '#555',
                  }}
                >
                  Veridian is an investment, management, and development company
                  based in Gibraltar. We create value in our investments by
                  leveraging our own experience, using tried-and-true strategies
                  and extensive industry expertise.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: "20px",
                    fontSize: '12px',
                    fontFamily: 'DM Sans',
                    color: '#555',
                  }}
                >
                  We work with our business management team to develop and
                  implement tailored strategies focused on strong products with
                  powerful sales, to develop profit-generating growth models.
                  Value creation is fundamental to our goal, and we develop our
                  businesses with this in mind.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '12px',
                    fontFamily: 'DM Sans',
                    color: '#555',
                  }}
                >
                  Veridian's expertise is delivered with a responsible approach
                  to our business, our team, our local community, and the
                  environment.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: 'Excellence',
                description:
                  'We strive for excellence by continuously honing our skills & expanding our knowledge. Our commitment to excellence drives innovation and quality, setting us apart as leaders in our field.',
                icon: Ic1,
              },
              {
                title: 'Initiative',
                description:
                  'We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities for growth. We drive creativity and transformative solutions.',
                icon: Ic2,
              },
              {
                title: 'Sustainability',
                description:
                  'We are dedicated to sustainable practices that positively impact our community and environment. Our commitment to responsibility ensures we contribute to a better future for generations to come.',
                icon: Ic3,
              },
              {
                title: 'Integrity',
                description:
                  'We operate with honesty and uphold the highest ethical standards. Integrity is the cornerstone of our business, guiding our actions and decisions to earn the trust of our clients and partners.',
                icon: Ic4,
              },
            ].map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "1px",
                    textAlign: 'left',
                    width: '100%',
                    maxWidth: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    [theme.breakpoints.down('sm')]: {
                      flexDirection: 'column',
                      textAlign: 'center',
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: '18px',
                        marginBottom: "10px",
                        fontFamily: 'IBM Plex Serif',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '11px',
                        color: "#555",
                        fontFamily: 'DM Sans',
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{
                      width: '80px',
                      height: '80px',
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
