const Card = ({ pic, name, paragraph }) => {
  return (
    <div className="card">
      <img src={pic} alt="" />
      <div className="text">
        <p>{name}</p>
        <h5>{paragraph}</h5>
      </div>
    </div>
  );
};

export default Card;
