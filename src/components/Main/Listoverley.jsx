import { Link } from "react-scroll";

const ListOverley = (props) => {
  const listsnames = [
    "home",
    "about",
    "skills",
    "portfolio",
    "contact",
    "resume",
  ];
  const linkclickhandler = () => {
    props.linkOChandler();
  };
  return (
    <section className={`w-full z-50 ${props.className}`}>
      <ul
        className={`w-full bg-black sm:w-[12%] sm:rounded-bl-[1em] sm:rounded-br-[1em] pr-8 text-center text-[.8em] text-white`}
      >
        {/* <li className="list-group-item">An active item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li> */}

        {listsnames.map((list, index) => (
          <li key={index} className="py-2">
            <Link
              to={list}
              smooth={true}
              duration={300}
              offset={-70}
              className="cursor-pointer text-white no-underline"
              onClick={linkclickhandler}
            >
              {list}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ListOverley;
