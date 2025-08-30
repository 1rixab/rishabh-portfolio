import { AiOutlineClose } from "react-icons/ai"; // cross icon
const Navigation = (props) => {
  return (
    <>
      <nav
        className={`main-nav-container sm:px-40 z-50 w-full h-[9vh] flex justify-between items-center px-[7vw] bg-black ${props.className}`}
      >
        <img
          className="w-[8em]"
          src="/Images/Mysignimage.png"
          alt="logo"
        />
        {props.Lvisible ? (
          <button onClick={props.trigeropenfunc}>
            <div className="space-y-1">
              <span className="block h-[.2em] w-7 bg-white rounded-2xl"></span>
              <span className="block h-[.2em] w-7 bg-white rounded-2xl"></span>
              <span className="block h-[.2em] w-7 bg-white rounded-2xl"></span>
            </div>
          </button>
        ) : (
          <button
            onClick={props.trigerclosefunc}
            className="rounded-full bg-transparent hover:bg-gray-700"
          >
            <AiOutlineClose className="text-white w-auto h-9" />
          </button>
        )}
      </nav>
    </>
  );
};

export default Navigation;
