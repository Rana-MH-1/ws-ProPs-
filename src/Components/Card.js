import { Button, Card } from "react-bootstrap"
import  propTypes  from "prop-types"

const Cardd = ({name,age,Bio,ImgUrl,func})=>{
    
    return(
        <div>
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ImgUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {Bio} 
        </Card.Text>
        <Card.Text>
          {age} 
        </Card.Text>
        <Button onClick={func} variant="primary">show who I am</Button>
      </Card.Body>
    </Card>
        </div>
    )
}

Cardd.propTypes ={
  name : propTypes.string.isRequired,
  age: propTypes.number,
  Bio: propTypes.string,
  ImgUrl : propTypes.string,
  func : propTypes.func
}

Cardd.defaultProps = {
  name:'user'
}

/* when we convert the type of name from String into Number
==>Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `Cardd`, expected `string`.
<hen we don't respect the type fixed to a key besh tjina warning */

/* when we deleted the name key as a props key 
==> Warning: Failed prop type: The prop `name` is marked as required in `Cardd`, but its value is `undefined`. */

/* props is immutable ==> on ne peut pas le changer dans le composant enfant */
export default Cardd