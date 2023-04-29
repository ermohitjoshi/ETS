import React from 'react';
import { NewsData } from '../../data/NewsData';
import border from '../../assets/images/bg-dots.svg';


export const News = () => {
  return (
    <>
      <section className="container news mt-3 mb-5"  id='News'>
        <div className="row">
          <div className="col-12 heading">
            <h1>Recent News</h1>
            <p>
            Latest news and notices
            </p>
          </div>

          <div className=" row cardContainer mt-5">
            {NewsData.map((data) => (
              <div className="col-md-4 col-sm-12 newsCard" key={data.title}>
                <img className="mt-3" src={data.img} alt={data.title} />
                <h3 className="mt-3">{data.title}</h3>
                <p className="mt-2 mb-5">{data.desc}</p>
                <img src={border} alt="cardBorder" className="cardBorder" />
                <button className="mt-4 mb-4">{data.date}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
