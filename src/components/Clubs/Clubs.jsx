import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { clubsData } from '../../data/clubsData';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

export const Clubs = () => {
  return (
    <>
      <section className="container features" id='Clubs'>
        <div className="row">
          <div className="col-12 heading">
            <h1>Clubs</h1>
            <p>
              Clubs under ETS are
            </p>
          </div>

          <div className="col-12 content pt-4">
            <Tabs
              defaultActiveKey="TCC"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              {clubsData.map((data) => (
                <Tab
                  className="pt-4"
                  eventKey={data.key}
                  title={data.title}
                  key={data.key}
                >
                  <div className="row">
                    <div className="col-md-6 col-sm-12 image">
                      <img src={data.img} alt={data.title} className='sirs'/>
                      <p className='caption'><b>{data.vcname}<br/>{data.post}<br/>{data.title2}</b></p>
                    </div>
                    <div className="col-md-6 col-sm-12 contentBody">
                      <h3>Message from the Vice-Chairman of {data.title2}</h3>
                      <div className="container"><ReadMore>{data.details}</ReadMore></div>
                    </div>
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};
