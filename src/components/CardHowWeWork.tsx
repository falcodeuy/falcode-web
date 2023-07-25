import * as React from "react";

type CardHowWeWorkProps = {
  title: string;
  content: string;
  image: any;
};

const ImagePaths = [
  "../images/lightbulb.png",
  "../images/lightbulb.png",
  "../images/lightbulb.png",
];

const CardHowWeWork: React.FC<CardHowWeWorkProps> = ({
  title,
  content,
  image,
}) => {
  return (
    <div className="column is-12-mobile is-6-tablet is-3-desktop">
      <div
        className="has-background-light"
        style={{ borderRadius: 8, position: "relative" }}
      >
        {/* <StaticImage
          src="../images/lightbulb.png"
          alt="icon"
          style={{ position: "absolute", top: -27, left: 32.66 }}
        /> */}
        {image}
        <div className="p-5">
          <div className="columns is-mobile mt-5 mb-4">
            <div className="column is-8-mobile is-8-tablet is-8-desktop py-0">
              <h1 className="title is-outfit is-4 has-text-primary">{title}</h1>
            </div>
          </div>

          <div className="columns is-mobile">
            <div className="column is-12-mobile is-12-tablet is-12-desktop">
              <p className="">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHowWeWork;
