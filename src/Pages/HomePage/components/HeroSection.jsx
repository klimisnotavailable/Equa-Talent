import css from "./HeroSection.module.css";
import heroImage from "../../../Images/shared/mobile/hero/hero-image.png";
import heroImage_2x from "../../../Images/shared/mobile/hero/hero-image@2x.png";
import heroImageTablet from "../../../Images/shared/tablet/hero/hero-image.png";
import heroImageTablet_2x from "../../../Images/shared/tablet/hero/hero-image@2x.png";


const HeroSection = () => {
  return (
    <section className={`${css.section}`}>
      <div className="container py-11 md:flex">
        <div className="mb-10">
          <h1 className="w-full mb-9">
            Transform Talent Acquisition with{" "}
            <span className="text-orange-400">Fully Autonomous</span> Candidate
            Interviews
          </h1>
          <p className="mb-12 md:mb-16">
            Interview Candidates Around the Clock, Even When You Sleep.
            Unbiased. In Real-Time.
          </p>
          <button className={`link linkAccent`}>Book a Demo</button>
        </div>
        <div>
          <picture>
            <img
              className={css.picture}
              src={heroImage}
              srcSet={`${heroImage} 1x, ${heroImage_2x} 2x`}
              alt=""
            />
            <source media="(min-width: 768px)" srcSet={`${heroImageTablet} 1x, ${heroImageTablet_2x} 2x`} />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
