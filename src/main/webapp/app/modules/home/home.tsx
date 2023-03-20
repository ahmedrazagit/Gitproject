//import a sound button which plays metallica music:)
//import mp3File from "file:///C:/Users/xiao/Desktop/metallica.mp3";
//import mp3File from "./metallica.mp3";
import { FaCog, FaQuestionCircle, FaUser } from 'react-icons/fa';
import './home.scss';
import MySideNav from 'app/modules/components/SideBar';

import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import { FaHome, FaBullhorn, FaUniversity, FaUsers, FaEnvelope, FaComments, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

//IMP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Row, Col, Alert, Nav, NavLink } from 'reactstrap';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Translate } from 'react-jhipster';
//import { Row, Col, Alert } from 'reactstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//import MyApp from 'src/main/webapp/app/modules/components/App';

import { useAppSelector } from 'app/config/store';
import Event from 'app/modules/administration/event/event';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);
  const [value, onChange] = useState(new Date());

  function handleSettingsClick() {
    // Handle settings button click event
    console.error('Settings clicked');
  }

  function handleHelpClick() {
    // Handle help button click event
    console.error('Help clicked');
  }

  function handleUserProfileClick() {
    // Handle user profile button click event
    console.error('User profile clicked');
  }

  return (
    <main className="mt-5 pt-3">
      <div className="container" style={{ position: 'relative' }}>
        <img src="content/images/student-pic.jpg" alt="logo" style={{ width: '100%' }} />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'blue',
            fontSize: '3rem',
            fontWeight: 'bold',
            textShadow: '2px 2px #000000',
          }}
        >
          {' '}
          Welcome to Clubping
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div style={{ marginRight: '10px' }} className="col-md-3 mb-3">
            <div className="card eventcard" style={{ width: '18rem', marginRight: '10px' }}>
              {/*<img src={require('../../../content/images/elementor-placeholder-image.png')} className="card-img-top" />*/}
              <img src="content/images/elementor-placeholder-image.png" alt="Logo" />
              <div className="card-body">
                <h5 className="card-title">Card with stretched link</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary stretched-link">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginRight: '10px' }} className="col-md-3 mb-3">
            <div className="card eventcard" style={{ width: '18rem', marginRight: '10px' }}>
              {/*<img src={require('../../../content/images/elementor-placeholder-image.png')} className="card-img-top" />*/}
              <img src="content/images/elementor-placeholder-image.png" alt="Logo" />
              <div className="card-body">
                <h5 className="card-title">Card with stretched link</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary stretched-link">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginRight: '10px' }} className="col-md-3 mb-3">
            <div className="card eventcard" style={{ width: '18rem', marginRight: '10px' }}>
              {/*<img src={require('../../../content/images/elementor-placeholder-image.png')} className="card-img-top" />*/}
              <img src="content/images/elementor-placeholder-image.png" alt="Logo" />
              <div className="card-body">
                <h5 className="card-title">Card with stretched link</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary stretched-link">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginRight: '10px' }} className="col-md-3 mb-3">
            <div className="card eventcard" style={{ width: '18rem' }}>
              {/*<img src={require('../../../content/images/elementor-placeholder-image.png')} className="card-img-top" />*/}
              <img src="content/images/elementor-placeholder-image.png" alt="Logo" />
              <div className="card-body">
                <h5 className="card-title">Card with stretched link</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary stretched-link">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginRight: '10px' }} className="col-md-3 mb-3">
            <div className="card eventcard" style={{ width: '18rem' }}>
              {/*<img src={require('../../../content/images/elementor-placeholder-image.png')} className="card-img-top" />*/}
              <img src="content/images/elementor-placeholder-image.png" alt="Logo" />
              <div className="card-body">
                <h5 className="card-title">Card with stretched link</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary stretched-link">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginRight: '10px' }} className="col-md-3 mb-3">
            <div className="card eventcard" style={{ width: '18rem' }}>
              {/*<img src={require('../../../content/images/elementor-placeholder-image.png')} className="card-img-top" />*/}
              <img src="content/images/elementor-placeholder-image.png" alt="Logo" />
              <div className="card-body">
                <h5 className="card-title">Card with stretched link</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary stretched-link">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginRight: '10px' }} className="col-md-3 mb-3">
            <div className="card eventcard" style={{ width: '18rem' }}>
              {/*<img src={require('../../../content/images/elementor-placeholder-image.png')} className="card-img-top" />*/}
              <img src="content/images/elementor-placeholder-image.png" alt="Logo" />
              <div className="card-body">
                <h5 className="card-title">Card with stretched link</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary stretched-link">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
