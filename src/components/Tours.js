import React from "react";
import Title from "./Title";
import data, { tours } from '../data.js'

const Tours = () => {
  return (
    <section class="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div class="section-center featured-center">
       
       {tours.map((tour)=>{
        const{id,image,date,title,info,location,duration,cost}=tour;
        return(
          <article class="tour-card" key={id}>
          <div class="tour-img-container">
            <img src={image} class="tour-img" alt="" />
            <p class="tour-date">{date}</p>
          </div>
          <div class="tour-info">
            <h4>{title}</h4>
            <p>
             {info}
            </p>
            <div class="tour-footer">
              <p>
                <span>
                  <i class="fas fa-map"></i>
                </span>{" "}
                {location}
              </p>
              <p>{duration}</p>
              <p>{cost}</p>
            </div>
          </div>
        </article>
        )
       })}

      </div>
    </section>
  );
};

export default Tours;
