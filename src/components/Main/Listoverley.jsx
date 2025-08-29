const ListOverley = (props) => {
  const listsnames = [
    "About Me",
    "Skills",
    "Portfolio",
    "Contact Me",
    "My Resume",
  ];
  return (
    <section className={`w-full ${props.className}`}>
      <ul
        className={`w-full bg-black sm:w-[12%] sm:rounded-bl-[1em] sm:rounded-br-[1em] z-50 pr-8 text-center text-[.8em] text-white`}
      >
        {/* <li className="list-group-item">An active item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li> */}

        {listsnames.map((list, index) => (
          <li key={index} className="py-2">
            {list}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ListOverley;
