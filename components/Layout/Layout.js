import React, { PropTypes } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import s from './Layout.css';

const Layout = props => (
  <div className={s.container}>
    <Header title={props.title} link={props.link} />
    <div className={s.content}>
      <h1>Cloud Computing Assignment 2</h1>
      <h2>Desire Mutenga</h2>
      <h2>Munashe Maposa</h2>
      <h2>Takudzwa Gomba</h2>
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

export default Layout;
