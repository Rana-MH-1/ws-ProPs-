import { Carousel } from "react-bootstrap";

const Carouselle = ({user1,user2,user3}) => {
    const {name,imgUrl,Bio}= user1
    
  return ( 
    <div>
      <Carousel style={{width:"40%"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgUrl}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{name}</h3>
            <p>{Bio}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={user2.imgUrl}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{user2.name}</h3>
            <p>{user2.Bio}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={user3.imgUrl}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{user3.name}</h3>
            <p>
              {user3.Bio}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carouselle
