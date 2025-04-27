import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import HeaderContainer from './components/HeaderContainer';
import ResumeBuilding from './components/ResumeBuilding';
import Review from './components/Review';
import Work from './components/work';
function App() {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <Work></Work>
      <About></About>
      <Review></Review>
      <ResumeBuilding></ResumeBuilding>
      <Footer></Footer>
    </>
  )
}

export default App
