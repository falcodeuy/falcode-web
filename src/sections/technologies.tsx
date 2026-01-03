import React from "react";
import { StaticImage } from "gatsby-plugin-image";

let technologies = [
  "devicon-react-original",
  "devicon-typescript-plain",
  "devicon-nodejs-original",
  "devicon-python-original",
  "devicon-django-original",
  "devicon-docker-original",
  "devicon-amazonwebservices-original-wordmark",
  "devicon-postgresql-original",
  "devicon-djangorest-original",
  "devicon-graphql-plain",
  "devicon-nextjs-plain",
  "devicon-gatsby-original",
];

technologies = technologies.concat(technologies);

const Technologies: React.FC = () => {
  return (
    <section className="technologies-section">
      <StaticImage
        src="../images/stack-tecnologies.svg"
        alt="technologies background"
        className="technologies-background"
        layout="fullWidth"
      />
      <div className="technologies-carousel-wrapper">
        <div className="technologies-carousel">
          <div className="technologies-track">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={`${tech}-${index}`} className="technology-icon">
                <i className={tech}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
