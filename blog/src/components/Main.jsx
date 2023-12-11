import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import './main.css'

// CLASS
class Main extends Component {

    // display
    static displayName="Main"

    // constructor
    constructor(props){
        super(props);
        // STATE
        this.state={

        }
        //BIND
    }

    // CDM

    // Function

    // RENDER
    render() {
        let data= (this.props.t('about'))
        return (
            <React.Fragment >
               {/* start codes Header  */}
               <header id="header">
                <div className="jumbotron text-white">
                    <div className="container">
                        <div className="p-5 text-center">
                            <h1 className="text-uppercase display-3">Btk Akademi Frontend Eğitimine <br/> Hoş geldiniz</h1>
                       <h4>Html5, Css3, Js, React JS, Git</h4>
                       <a href="" className="btn btn-outline-primary shadow">Linkedin</a>
                       <a href="" className="btn btn-outline-danger shadow">GitHub</a>
                       <a href="" className="btn btn-outline-warning shadow">Git</a>
                        </div>
                    </div>
                </div>
               </header>
               {/* ends codes Header  */}
               </React.Fragment>
        ); //end retur
    } //end render
} //end class

// EXPORT HEADER
export default withTranslation()(Main) ;