import React from 'react';
import './Layout.styles.scss';

interface IProps {
    children?: React.ReactElement | React.ReactElement[];
}

const Layout = ({children}: IProps) => {
    return (
        <div className="app-layout">
            {children}
        </div>
    );
};

export default Layout;