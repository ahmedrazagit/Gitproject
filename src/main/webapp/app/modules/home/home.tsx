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
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: '18rem' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: '18rem' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: '18rem' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: '18rem' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
      <div style={{ position: 'absolute', top: '5px', right: '5px' }}>
        <button onClick={handleSettingsClick}>
          <FaCog />
        </button>
        <button onClick={handleHelpClick}>
          <FaQuestionCircle />
        </button>
        <button onClick={handleUserProfileClick}>
          <FaUser />
        </button>
      </div> */}

      {/*<h2>
          <Translate contentKey="home.title">Welcome to ClubPing Dashboard!</Translate>
        </h2>*/}
      {/*<p className="lead">
          <Translate contentKey="home.subtitle">Welcome to ClubPing</Translate>
        </p>*/}
      {/*<div id=".react-calendar">
          <Calendar onChange={onChange} value={value} />
        </div>*/}

      {/*<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">
          Button with data-bs-target
        </button>
        */}

      {/*<p>Click the link below to go to the Events page:</p>
        <Link to="/event" onClick={() => window.location.reload()}>Go to Events</Link>*/}

      {/* account?.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div>
            <Alert color="warning">
              <Translate contentKey="global.messages.info.authenticated.prefix">If you want to </Translate>

              <Link to="/login" className="alert-link">
                <Translate contentKey="global.messages.info.authenticated.link"> sign in</Translate>
              </Link>
              <Translate contentKey="global.messages.info.authenticated.suffix">
                , you can try the default accounts:
                <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;)
                <br />- User (login=&quot;user&quot; and password=&quot;user&quot;).
              </Translate>
            </Alert>

            <Alert color="warning">
              <Translate contentKey="global.messages.info.register.noaccount">You do not have an account yet?</Translate>&nbsp;
              <Link to="/account/register" className="alert-link">
                <Translate contentKey="global.messages.info.register.link">Register a new account</Translate>
              </Link>
            </Alert>
          </div>
        ) */}

      {/*
        <p>
          <Translate contentKey="home.question">If you have any question on JHipster:</Translate>
        </p>

        <ul>
          <li>
            <a href="https://www.jhipster.tech/" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.homepage">JHipster homepage</Translate>
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/tags/jhipster/info" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.stackoverflow">JHipster on Stack Overflow</Translate>
            </a>
          </li>
          <li>
            <a href="https://github.com/jhipster/generator-jhipster/issues?state=open" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.bugtracker">JHipster bug tracker</Translate>
            </a>
          </li>
          <li>
            <a href="https://gitter.im/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.chat">JHipster public chat room</Translate>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jhipster" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.follow">follow @jhipster on Twitter</Translate>
            </a>
          </li>
        </ul>
        */}
      {/*
        <p>
          <Translate contentKey="home.like">If you like JHipster, do not forget to give us a star on</Translate>{' '}
          <a href="https://github.com/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          !
        </p>
        */}
    </main>
  );
};

export default Home;
