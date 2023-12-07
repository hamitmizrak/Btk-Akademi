import React, { Component } from 'react';
// I18N
// Resuability
import OtherLanguageReusability from '../internationalization/OtherLanguageReusability';
import { withTranslation } from 'react-i18next';

// Dark Mode
import './DarkMode/dark.css';
import DarkMode from './DarkMode/DarkMode';

// CLASS
class Header extends Component {

    // display
    static displayName = "Header"

    // constructor
    constructor(props) {
        super(props);
        // STATE
        this.state = {

        }
    //BIND
    }

    // CDM

    // Function

    // RENDER
    render() {
        /* JS Codes */
        const {t}=this.props;
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a 
                        className="navbar-brand" 
                        href={this.props.url}>
                        <i className={this.props.logo}></i>
                        </a>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" aria-current="page">
                                        {this.props.t('home_page')} <span className="visually-hidden">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    {this.props.t('blog')}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    {this.props.t('about')}
                                    </a>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    {this.props.t('contact')}
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="dropdownId"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {t('languages')}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <OtherLanguageReusability />
                                        {/* <a className="dropdown-item" href="#">
                                            Action 1
                                        </a> */}
                                    </div>
                                </li>
                            </ul>

                            {/* Dark Mode */}
                            <ul className="navbar-nav ms-auto me-3 mt-2 mt-lg-0">
                                <li>deneme-1</li>
                                <li>deneme-1</li>
                            <li className="nav-item">
                                    {/* dark mode */}
                                    <OtherLanguageReusability />
                                </li>
                                <li className="nav-item">
                                    {/* dark mode */}
                                    <DarkMode />
                                </li>
                            </ul>


                            <form className="d-flex my-2 my-lg-0">
                                <input
                                    className="form-control me-sm-2"
                                    type="text"
                                    // placeholder={this.props.t('search')}
                                    placeholder={t('search')}
                                />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                {t('search')}
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        ); //end retur
    } //end render
} //end class

// EXPORT HEADER
export default withTranslation()(Header) 


// Props Default Variables
Header.defaultProps = {
    url: "http://localhost:3000"
}

// Props Default Value Validation
// Header.propTypes = {
//     url: PropTypes.string.isRequired,
// }



