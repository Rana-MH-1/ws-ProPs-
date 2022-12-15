import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Cardd from './Components/Card'
import Carouselle from './Components/Carouselle'

function App() {
  const user1={
    imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9cnEvZ98kadKb7ZIhW20sXOTNVlEsH1q4Q&usqp=CAU',
    name:'taher',
    Bio:' I am a Full Stack JS student'
  }
  const user2={
    imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU',
    Bio:' I am a Full Stack JS student',
    name:'aziz'
  }
  const user3 ={
    imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFh8Zavxgm9k_RJkenFopIYSb6gLv_movuhefKiZoutaReaPCvT_b2-Vqyp-MmSj4xNlU&usqp=CAU',
    Bio:' I am a Full Stack JS student',
    name:'Hajer'
  }

  return (
    <div className="App">
      <NavBar/>
      <h2>Ws Props</h2>
      <hr/>
      <Cardd name='Eya' Bio='I am a Full Stack JS Student' ImgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&usqp=CAU' age={26} func={()=> alert('My name is Eya')} />
      <Carouselle user1={user1} user2={user2} user3={user3} />
    </div>
  );
}


export default App;
