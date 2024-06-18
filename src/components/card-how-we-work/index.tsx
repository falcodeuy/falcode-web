import * as React from "react";
import * as T from "./types";

const CardHowWeWork: React.FC<T.CardHowWeWorkProps> = ({
  title,
  content,
  image,
}) => {
  return (
    <div className='column is-12-mobile is-6-tablet is-3-desktop'>
      <div className='has-background-light'>
        {image}
        <div className='p-5'>
          <div className='columns is-mobile mt-5 mb-4 container-title-card'>
            <div className='column is-8-mobile is-8-tablet is-12-desktop is-11-widescreen is-12-fullhd py-0'>
              <h1 className='title is-outfit has-text-primary title-cards-size'>
                {title}
              </h1>
            </div>
          </div>

          <div className='columns is-mobile'>
            <div className='column is-12-mobile is-12-tablet is-12-desktop'>
              <p className=''>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHowWeWork;
