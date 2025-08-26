import Itberriesimage from "../Images/Itberries.png";
import Sectionbuttons from "../usableCom/Sectionsbuttons";

const Itberries = () => {
  return (
    <>
      <div
        className="bg-[#0f0e0e] flex flex-col pl-[12vw] pr-[12vw] pt-[5vh] pb-[5vh] justify-between items-center h-[57vh] w-full bg-[length:80vw_45vh] bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${Itberriesimage})` }}
      >
        <h3 className="text-white text-[1.5em] font-semibold font-mono">
          IT BERRIES
        </h3>
        <p className="text-white text-[.9em] text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          voluptas, assumenda quod, animi iste officia sequi sunt nisi odit,
          doloribus provident explicabo quia magnam laborum illo ratione
          voluptates qui esse. Lorem ipsum dolor sit amet, consectetur doloribus
          provident explicabo quia magnam laborum illo ratione voluptates qui
          esse. doloribus provident explicabo.
        </p>
        <Sectionbuttons color="white" width="30vw" title='MORE' className='w-[30vw]' />
      </div>
    </>
  );
};

export default Itberries;
