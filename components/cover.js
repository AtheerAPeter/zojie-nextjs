import Card from "../components/card";

const Cover = () => {
  return (
    <>
      <div className="cover-elements">
        <img src="/assets/cover.png" alt="" />

        <div className="overlay">
          <div className="container">
            <div className="text-content">
              <small>Welcome</small>
              <h1>
                Empowering your everyday transactions making payment processing
                easy
              </h1>
              <button>Get Started</button>
            </div>
            <div className="cards">
              <Card
                pic="/assets/reinventing.png"
                name="Reinventing Benin City"
                paragraph="In making payment easier we 
reinvented Nigeria's vibrant city"
              />
              <Card
                pic="/assets/the boo.png"
                name="The BOO Project"
                paragraph="The Bringing Online Open (BOO) project."
              />
              <Card
                pic="/assets/laptop.png"
                name="Improved dev enviroment"
                paragraph="Integration and use of our API has been updated (12.8)"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cover;
