import Title from './component/Title'
import DesignerSignature from './component/DesignerSignature'
import Triangle from './component/Triangle'
import HeartIcon from './component/HeartIcon'
import Guests from './component/Guests'

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Title />
        <Guests />
      </div>
      <DesignerSignature />
      <Triangle />
      <HeartIcon />
    </div>
  );
}

export default App;
