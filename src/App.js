import React from 'react';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import FeaturesSection from './Components/FeaturesSection';
import PopularDestinations from './Components/PopularDestinations';
import Footer from './Components/Footer'; // Import the Footer component
import BecomeProviderSection from './Components/BecomeProviderSection';
import LocalEventsFoods from './Components/LocalEventsFoods';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div class="App">
      <Header />
      <main style={{ marginTop: "70px" }}></main>
      <h1 className="highlight">Discover Sri Lanka Like Never Before</h1>
      <p>Plan trip your perfect journey with optimized routes, discover hidden gems, experience local culture, and create unforgettable memories in the Pearl of the Indian Ocean.</p>
    <HeroSection/>
    <FeaturesSection/>
    <PopularDestinations/>
    <BecomeProviderSection />
    <LocalEventsFoods />
    <Footer />
    </div>
  );
}

export default App;
