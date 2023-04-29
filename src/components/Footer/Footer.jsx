import React from 'react';
import facebook from '../../assets/images/icon-facebook.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import ETSlogomobile from '../../assets/images/Stamp(Circle) final.png';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export const Footer = () => {
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));
  
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 logo">
            <a href="#"> <img src={ETSlogomobile} alt="logo" /></a> 
            </div>

            <div className="col-md-6 Links">
              <a href="#About">ABOUT ETS</a>
              <a href="#Bureaus">BUREAUS</a>
              <a href="#Clubs">CLUBS</a>
              <a href="#News">NEWS</a>
              <br />
              <br />
              
              
              <p>Other Links</p>
              <a href="https://www.gbpuat-tech.ac.in/" target="_blank">College Website</a>
              <a href="https://www.gbpuat.ac.in/" target="_blank">University Website</a>
              <a href="http://ptaa-gbpuat.com/" target="_blank">P.T.A.A</a>
              <a href="#Events"></a>
            </div>

            <div className="col-md-3 socialIcons ">
              <div className="icons">
                <img className="me-5" src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
              </div>
            </div>
          </div>

          <div className="pt-1 attribution text-center">
          © Engineering & Technology Society, Pantnagar (2023) | 
           Made by<HtmlTooltip
        title={
          <React.Fragment>
            1. <a href='linkedin.com/in/vikas-pundir-9039181b6'> Vikas Pundir</a> <br/>
            2. <a href='linkedin.com/in/mohitjoshi31'>Mohit Joshi</a>
          </React.Fragment>
        }
      ><Button>Web Team</Button>
      </HtmlTooltip>

          </div>
        </div>
      </footer>
    </>
  );
};
