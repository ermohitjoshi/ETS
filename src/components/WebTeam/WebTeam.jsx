import React from 'react';
import PundirSir from '../../assets/images/vikaspundirsir.jpeg';
import MohitJoshi from '../../assets/images/mohitjoshi.jpeg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const WebTeam = () => {
  return (
    <>
      <section className="container news mb-5"  id='WebTeam'>
        <div className="row">
          <div className="col-12 heading">
            <h1>Web Team</h1>
            <p>
            "Meet the Web Team for College of Technology (COT) and Pantnagar Technology Alumni Association (PTAA)"
            </p>
          </div>
<div className="webteam mt-5">
<div className="webcard">
     <img src={PundirSir} alt="" id='pundirsir'/>
  <div className="detail">
     <h4>Vikas Pundir</h4>
     <p>Web Master<br/> Final Year <br/> <a href=''><GitHubIcon/></a> <a href=''><LinkedInIcon/></a> <a href=''><InstagramIcon/></a></p>
  </div>
</div>
<div className="webcard">
     <img src={MohitJoshi} alt="" id='mohit'/>
  <div className="detail">
     <h4>Mohit Joshi</h4>
     <p>Member<br/> Third Year <br/> <a href=''><GitHubIcon/></a> <a href=''><LinkedInIcon/></a> <a href=''><InstagramIcon/></a></p>
  </div>
</div>
</div>
        </div>
      </section>
    </>
  );
};
