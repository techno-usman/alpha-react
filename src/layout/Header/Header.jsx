import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.png';
import Classes from '../scss/Header.module.scss';
import {ReactComponent as SearchIcon} from '../../assets/svg/search.svg'

const navLinks = [
  {
    pageName: 'Home',
    to: '/',
  },
  {
    pageName: 'Store',
    to: '/store',
  },
  {
    pageName: 'Blog',
    to: '/blog',
  },
  {
    pageName: 'News',
    to: '/news',
  },
  {
    pageName: 'About',
    to: '/about',
  },
  {
    pageName: 'Careers',
    to: '/careers',
  },
  {
    pageName: 'Contact Us',
    to: '/contactus',
  },
];

const Header = () => {
  return (
    <header className={`${Classes.header} top-0 w-100`}>
      <nav className={Classes.navbar}>
        <Container>
          <div className='d-flex align-items-center justify-content-between  flex-wrap gap-2'>
            <div>
              <Link to='/'>
                <img src={LogoImg} alt='logo' className={Classes.logoImg} />
              </Link>
            </div>
            <ul className='list-unstyled d-flex flex-wrap align-items-center gap-2 mb-0'>
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className={`${Classes.navLinks} text-white text-decoration-none`}
                  >
                    {item.pageName}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='d-flex flex-wrap gap-2'>
                <div className={`${Classes.searchWrapper} py-2 px-3 d-flex align-items-center gap-2`}>
                    <SearchIcon />
                    <input placeholder='Search for Games'  type='search' className={`bg-transparent ${Classes.searchInput}`}/>
                </div>
                <div className={`${Classes.selectWrapper} py-2 px-3 d-flex align-items-center me-0 me-lg-2`}>
                    <select name="" id="" className={Classes.navSelect}>
                        <option>Games</option>
                    </select>
                </div>
                <div className='d-flex align-items-center gap-2 gap-md-3 flex-wrap'>
                    <Link to='/login' className='text-white text-decoration-none'>Login</Link>
                    <Link to='/signup' className={`${Classes.signupBtn} text-white text-decoration-none py-3 px-4`}>Sign up</Link>
                </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;