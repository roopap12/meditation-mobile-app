// import React from 'react';
// //Function to display the Footer
// const Footer = () => {
//   return (
//     <div className="footer-child">
//     <p className="child-footer"> {new Date().getFullYear()} All rights reserved.</p>
//     <p className="child-footer"> By Roopa Patel</p>
//     </div>
    
//   );
// }

// export default Footer;
import React from 'react';
import { Typography, Container, Link } from '@mui/material';
import { styled } from '@mui/system';

// Use styled function to create styles
const StyledFooter = styled('footer')({
  backgroundColor: (theme) => theme.palette.primary.main,
  color: (theme) => theme.palette.primary.contrastText,
  padding: (theme) => theme.spacing(2),
  marginTop: 'auto',
});

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} All rights reserved. By{' '}
          <Link href="#" color="inherit" underline="always">
            Roopa Patel
          </Link>
        </Typography>
      </Container>
    </StyledFooter>
  );
}

export default Footer;


