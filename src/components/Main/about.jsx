const About = () => {
  return (
    <>
      <div className="bg-[#dbdbdb] w-full h-[58vh] pl-[12vw] pr-[12vw] pt-[5vh] pb-[5vh] flex flex-col justify-between items-center">
        <h3 className="text-[1.3em] font-mono border-[.3em] pl-[1.5em] pr-[1.5em] pt-[.3em] pb-[.3em] font-bold">ABOUT ME</h3>
        <p className="text-[.8em]/5 text-justify font-normal ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          itaque est ipsam, temporibus ad tempore mollitia veniam. Obcaecati
          eaque excepturi nobis, assumenda fuga nihil molestiae officiis earum
          perspiciatis numquam? Sit.<br></br>
          <br></br>Lorem Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Perspiciatis itaque est ipsam, temporibus ad tempore mollitia
          veniam. Obcaecati eaque excepturi nobis, assumenda fuga nihil
          molestiae officiis earum perspiciatis numquam? Sit.Lorem
        </p>
        <button className="text-black font-semibold border-l-[.20em] border-r-[.20em] w-[40vw] cursor-pointer h-[5vh]">
          EXPLORE
        </button>
      </div>
    </>
  );
};

export default About;
