const Sectionbuttons = (props) => {
  return (
    <button
      className={`text-${props.color} border-l-[.19em] border-r-[.19em] sm:w-[7em] cursor-pointer ${props.className}`}
    >
      {props.title}
    </button>
  );
};

export default Sectionbuttons;
