import Hero3 from "./hero3";

const Hero2 = (props) => {
  return (
    <>
      <div className={`${props.className}`}>
        <Hero3/>
      </div>
    </>
  );
};

export default Hero2;
