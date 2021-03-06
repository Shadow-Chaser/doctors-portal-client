import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navigator from '../../Shared/Navigator/Navigator';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <Navigator></Navigator>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;