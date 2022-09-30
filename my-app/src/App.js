import Title from './component/Title'
import Colors from './component/Colors'
import BackGround from './component/BackGround'

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Title />
        <Colors />
      </div>
      <BackGround />
    </div>
  );
}

export default App;
