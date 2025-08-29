import Mysignimage from "../Images/Mysignimage.png";
import { AiOutlineClose } from "react-icons/ai"; // cross icon
import { useState } from "react";

const Navigation = (props) => {
  let [isVisible, setisVisible] = useState(true);
  const hmbgclickhandler = () => {
    setisVisible(!isVisible);
    props.trigeropenfunc()
  };
  const crossclickhandler = () => {
    setisVisible((isVisible = true));
    props.trigerclosefunc()
  };

  return (
    <>
      <div
        className={`main-nav-container sm:px-40 z-50 w-full h-[9vh] flex justify-between items-center px-[7vw] bg-black ${props.className}`}
      >
        <img className="w-[8em]" src={Mysignimage} alt="logo" />
        {isVisible ? (
          <button onClick={hmbgclickhandler}>
            <div className="space-y-1">
              <span className="block h-[.2em] w-7 bg-white rounded-2xl"></span>
              <span className="block h-[.2em] w-7 bg-white rounded-2xl"></span>
              <span className="block h-[.2em] w-7 bg-white rounded-2xl"></span>
            </div>
          </button>
        ) : (
          <button
            onClick={crossclickhandler}
            className="rounded-full bg-transparent hover:bg-gray-700"
          >
            <AiOutlineClose className="text-white w-auto h-9" />
          </button>
        )}
      </div>
    </>
  );
};

export default Navigation;

