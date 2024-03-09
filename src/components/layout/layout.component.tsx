import React from 'react';
import Header from "../header/header.component";
import Home from "../home/home.component";
import Footer from "../footer/footer.component";
const Layout = (props: any) => {
    return (
        <div className='layout-app'>
            <Header />
            <main className='main-container'>
                {/* children should display */}
                {props.children}
                {/* <Home /> */}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;