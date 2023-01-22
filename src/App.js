
// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
// import Button from './Components/Button';
import Navbar from './pages/Navbar';


function App() {



  return (

   <>
{/* <Button text="Hamza" cl="red" class="button "/> */}
<Navbar/>
<Hero
h6="Exculisive Acess"
h1="Unlimited Transation with Zero fees"
desc="Get Access to our exculusive Diamond Card which allow You to do Unlimeited Trancsation with Limited fees"
text="Get Started"
h6Color="red"
h1Color= "white"
descColor="white"
heroBg=" rgb(34, 18, 56)"
flex="flex"
dir='row'
src="images/svg-1.svg"
/>
<Hero
h6="Easy Setup"
h1="Super Fast and Simple onboarding Process"
desc="Get Ready Your Card With 10 min , Get Access to our exculusive Diamond Card which allow You to do Unlimeited Trancsation with Limited fees"
text="Start Now"
h6Color="red"
h1Color= "black"
descColor="black"
heroBg=" white"
flex="flex"
dir='row-reverse'
src="images/svg-7.svg"
/>

<Hero
h6="100% Secure"
h1="Stay protect 24/7  anywhere anytime"
desc="We Covered you no problem Where you are Located Get Access to our exculusive Diamond Card which allow You to do Unlimeited Trancsation with Limited fees"
text="Get Started"
h6Color="red"
h1Color= "white"
descColor="white"
heroBg=" rgb(34, 18, 56)"
flex="flex"
dir='row'
src="images/svg-5.svg"
/>
<Hero
h6="Easy Setup"
h1="Super Fast and Simple onboarding Process"
desc="Get Ready Your Card With 10 min , Get Access to our exculusive Diamond Card which allow You to do Unlimeited Trancsation with Limited fees"
text="Start Now"
h6Color="red"
h1Color= "black"
descColor="black"
heroBg=" white"
flex="flex"
dir='row-reverse'
src="images/svg-3.svg"
/>
<Hero
h6="100% Secure"
h1="Stay protect 24/7  anywhere anytime"
desc="We Covered you no problem Where you are Located Get Access to our exculusive Diamond Card which allow You to do Unlimeited Trancsation with Limited fees"
text="Get Started"
h6Color="red"
h1Color= "white"
descColor="white"
heroBg=" rgb(34, 18, 56)"
flex="flex"
dir='row'
src="images/svg-2.svg"
/>
<Hero
h6="Easy Setup"
h1="Super Fast and Simple onboarding Process"
desc="Get Ready Your Card With 10 min , Get Access to our exculusive Diamond Card which allow You to do Unlimeited Trancsation with Limited fees"
text="Start Now"
h6Color="red"
h1Color= "black"
descColor="black"
heroBg=" white"
flex="flex"
dir='row-reverse'
src="images/svg-4.svg"
/>
<Footer/>
{/* <Routes>
  <Route path='/'></Route>
</Routes> */}

   </>
  );
}

export default App;
