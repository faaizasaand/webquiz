import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Welcome from './components/Welcome';
import Offerings from './components/Offering';
import { About } from './components/About';
import { ContactUs } from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
      <div>
        <Navbar />
        <Welcome />
        <Offerings />
        <About />
        <ContactUs />
        <Footer />
      </div>
  );
}

export default App;
