import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Breadcrumb from '../Breadcrumbs/Breadcrumbs';
import React, {Component} from 'react'

class Layout extends Component {
    render() {
        return (
            <div style={{paddingLeft:'15%',paddingRight:'15%',backgroundColor:'#a35454'}}>
                <Header />
                <Breadcrumb/>
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout;

