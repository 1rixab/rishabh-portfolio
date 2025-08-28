import Mysignimage from "../Images/Mysignimage.png";

const Navigation = () => {
  return (
    <>
      <div className="main-nav-container w-full h-[9vh] flex justify-between items-center px-[7vw] bg-black">
        <img className="w-[8em]" src={Mysignimage} alt="logo" />
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
