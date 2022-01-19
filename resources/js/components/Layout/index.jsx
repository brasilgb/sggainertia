import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
    return (
        <Fragment>

            <div className='flex flex-col h-screen'>
                <div>
                    <Header />
                </div>
                <div className='flex-grow bg-gray-200'>
                    <div className='container mx-auto'>
                        {children}
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>

        </Fragment>
    );
};

export default Layout;
