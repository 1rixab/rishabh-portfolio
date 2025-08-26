const Sectionbuttons = (props) => {
  return (
    <button
      className={`text-${props.color} border-l-[.19em] border-r-[.19em] w-[${props.width}] cursor-pointer ${props.className}`}
    >
      {props.title}
    </button>
  );
};

export default Sectionbuttons;
