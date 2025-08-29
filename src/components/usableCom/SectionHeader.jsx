const Sectionheader = (props) => {
  return (
    <div
      className={`inline-block border-[.4em] sm:border-[.3em] px-[2em] py-[.3em] ${props.className} `}
    >
      <h3 className="font-bold text-[1.3em] font-mono">{props.title}</h3>
    </div>
  );
};

export default Sectionheader;
