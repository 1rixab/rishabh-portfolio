import herologo from "../Images/herologo.png";

const Navigation = () => {
  return (
    <>
      <div className="main-nav-container w-full h-[10vh] flex justify-between items-center padding pr-[9vw] pl-[9vw] bg-black">
        <img className="w-[2.5em]" src={herologo} alt="logo" />
        <button>
          <div className="space-y-1.5 ">
            <span className="block h-1 w-7 bg-white rounded-2xl"></span>
            <span className="block h-1 w-7 bg-white rounded-2xl"></span>
            <span className="block h-1 w-7 bg-white rounded-2xl"></span>
          </div>
        </button>
      </div>
    </>
  );
};

export default Navigation;
