import React from 'react';
import aboutImg from '../../assets/images/img-about.png';
import aboutImg2 from '../../assets/images/img-about2.png';

export const AboutETS = () => {
  return (
    <>
      <section className="about container"   id='About'>
        <div className="row" style={{ flexDirection: 'row-reverse' }}>
        
        <div className="col-md col-sm content">
            <h1 className="mb-2">About</h1>
            <p className="mb-3">
            <br/>
The Engineering & Technology Society, Pantnagar strives in bringing out the
hidden talent among scintillating students. It aims at bringing students across
the country and host and extravaganza of culture, arts, and heritage. The
various fests organized by the ETS aims at maximizing the inner ability of the
students through various activities. The ETS has organized various national level
events which enhance the personality of the students along with academics.
It provides an exposure to students by creating ferocious competitive
environment thereby acting as a motivation to excel in their areas of interest.
<br/>
<br/>
It brings me immense delight in welcoming you all on behalf of the College of
Technology, Pantnagar to our youth national level festival Colosseum’23. It
celebrates and hosts the unfurling of art and culture infused with blend of
youthful excitement and enthusiasm. Colosseum’23 makes it possible to
discover and unleash the hidden flair among agglomerate of students by
participating and interconnecting. Colosseum has becoming stage for exhibition
of brilliance of artistry and innovation.
<br/>
<br/>
<b>Siddhant <br/>
Chairman, ETS</b>
            </p>
          </div>
        
        <div className="col-md col-sm aboutImg">
            <img src={aboutImg} alt="heroImg" />
            <img src={aboutImg2} alt="heroImg" />
          </div>
        </div>
      </section>
    </>
  );
};