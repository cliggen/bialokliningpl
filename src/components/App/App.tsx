import React from 'react';
import './App.styles.scss';
import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import HeaderContent from "../HeaderContent/HeaderContent";
import Onas from "../Onas/Onas";
import Pracujemy from "../Pracujemy/Pracujemy";
import UslugiCeny from "../UslugiCeny/UslugiCeny";
import Udoskonalenie from "../Udoskonalenie/Udoskonalenie";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Layout>
          <Header/>
          <HeaderContent />
          <Onas />
          <Pracujemy />
          <UslugiCeny />
          <Udoskonalenie />
          <Footer />
      </Layout>
    </div>
  );
}

export default App;
