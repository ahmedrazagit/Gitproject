import React from 'react';
import { Translate } from 'react-jhipster';
import './header.scss';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BrandIcon = props => (
  <div {...props} className="brand-icon">
    <img style={{ width: 90, height: 50 }} src="content/images/clubping-logo.png" alt="Logo" />
  </div>
);

export const Brand = () => (
  <a href="#" className="black-button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
    <BrandIcon />
  </a>
);

export const Home = () => (
  <NavItem>
    <NavLink tag={Link} to="/" className="d-flex align-items-center">
      <FontAwesomeIcon icon="home" />
      <span>
        <Translate contentKey="global.menu.home">Home</Translate>
      </span>
    </NavLink>
  </NavItem>
);
