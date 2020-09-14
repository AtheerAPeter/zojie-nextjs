const Hamburger = ({ open, setOpen }) => {
  return (
    <>
      <div className="hamburger">
        <img
          src={open ? "/assets/close.svg" : "/assets/menu.svg"}
          alt=""
          onClick={(e) => setOpen(!open)}
        />
      </div>
    </>
  );
};

export default Hamburger;
