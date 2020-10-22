import React from 'react';

import { NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import 'styles/header.scss';
import Logo from 'content/images/logo-alignz-mono-black-removebg.png';

export const BrandIcon = (props) => (
  <div {...props} className="brand-icon">
    <img src={Logo} alt="AlignZ" />
  </div>
);

export const Brand = () => (
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandIcon />
  </NavbarBrand>
);
