import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About';
import HeaderContainer from './components/HeaderContainer';
import Review from './components/Review';
import Work from './components/work';
function App() {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <Work></Work>
      <About></About>
      <Review></Review>
    </>
  )
}

export default App
