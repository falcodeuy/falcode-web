import * as React from "react";
import * as T from "./types";

const CardHowWeWork: React.FC<T.CardHowWeWorkProps> = ({
  title,
  content,
  image,
  ...rest
}) => {
  return (
    <div className='column is-12-mobile is-4-tablet is-4-desktop' {...rest}>
      <div className='has-background-light is-relative is-rounded-small'>
        <div className='badge-card-position'>
          {image}
        </div>
        <div className='p-5'>
          <h3 className='title is-outfit has-text-primary title-cards-size mt-5 mb-4'>
            {title}
          </h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardHowWeWork;
