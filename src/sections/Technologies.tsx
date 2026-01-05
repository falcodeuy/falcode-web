import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";

let technologies = [
  { icon: "devicon-react-original", name: "React" },
  { icon: "devicon-typescript-plain", name: "TypeScript" },
  { icon: "devicon-nodejs-plain", name: "Node.js" },
  { icon: "devicon-python-plain", name: "Python" },
  { icon: "devicon-django-plain", name: "Django" },
  { icon: "devicon-docker-plain", name: "Docker" },
  { icon: "devicon-amazonwebservices-plain-wordmark", name: "AWS" },
  { icon: "devicon-htmx-plain", name: "HTMX" },
  { icon: "devicon-postgresql-plain", name: "PostgreSQL" },
  { icon: "devicon-djangorest-plain-wordmark", name: "DRF" },
  { icon: "devicon-android-plain", name: "Android" },
  { icon: "devicon-flask-original", name: "Flask" },
  { icon: "devicon-portainer-plain", name: "Portainer" },
  { icon: "devicon-harbor-plain", name: "Harbor" },
  { icon: "devicon-chartjs-plain", name: "Chart.js" },
  { icon: "devicon-apple-original", name: "Apple" },
  { icon: "devicon-cloudflare-plain", name: "Cloudflare" },
  { icon: "devicon-nextjs-plain", name: "Next.js" },
  { icon: "devicon-gatsby-plain", name: "Gatsby" },
  { icon: "devicon-linux-plain", name: "Linux" },
  { icon: "devicon-astro-plain", name: "Astro" },
  { icon: "devicon-github-original", name: "GitHub" },
  { icon: "devicon-tailwindcss-plain", name: "Tailwind" },
  { icon: "devicon-html5-plain", name: "HTML5" },
  { icon: "devicon-sass-plain", name: "Sass" },
  { icon: "devicon-pytorch-original", name: "PyTorch" },
  { icon: "devicon-materialui-plain", name: "MUI" },
  { icon: "devicon-bulma-plain", name: "Bulma" },
  { icon: "devicon-bash-plain", name: "Bash" },
  { icon: "devicon-bootstrap-plain", name: "Bootstrap" },
  { icon: "devicon-jquery-plain", name: "jQuery" },
  { icon: "devicon-css3-plain", name: "CSS3" },
  { icon: "devicon-javascript-plain", name: "JavaScript" },
  { icon: "devicon-oracle-original", name: "Oracle" },
  { icon: "devicon-mysql-plain", name: "MySQL" },
  { icon: "devicon-nginx-original", name: "NGINX" },
  { icon: "devicon-git-plain", name: "Git" },
  { icon: "devicon-figma-plain", name: "Figma" },
];

technologies = technologies.concat(technologies);

const Technologies: React.FC = () => {
  const intl = useIntl();

  return (
    <section id="technologies" className="technologies-section">
      <StaticImage
        src="../images/stack-tecnologies.svg"
        alt="technologies background"
        className="technologies-background"
        layout="fullWidth"
      />
      <div className="technologies-carousel-wrapper">
        <h2 className="technologies-title" data-aos="fade-in">
          {intl.formatMessage({ id: "ourToolbox" })}
        </h2>
        <div className="technologies-carousel">
          <div className="technologies-track">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={`${tech.icon}-${index}`} className="technology-icon">
                <i className={tech.icon}></i>
                <span className="technology-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
