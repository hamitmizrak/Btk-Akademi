import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

/* Main Css */
import './main.css'

/* Image */
import Office from '../image/office.jpg';
import Ball from '../image/ball.jpg';
import Mountains from '../image/mountains.jpg';
import SunRise from '../image/sunrise.jpg';

// CLASS
class Main extends Component {

    // display
    static displayName = "Main"

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
        let data = (this.props.t('about'))
        return (
            <React.Fragment >
                {/* start codes Header  */}
                <header id="header">
                    <div className="jumbotron text-white">
                        <div className="container">
                            <div className="p-4 text-center">
                                <h1 className="text-uppercase display-3 shadow wow bounceIn animated" data-wow-delay=".50s">Btk Akademi Frontend Eğitimine <br /> Hoş geldiniz</h1>
                                <h4>Html5, Css3, Js, React JS, Git</h4>
                                <a href="" className="btn btn-outline-primary shadow">Linkedin</a>
                                <a href="" className="btn btn-outline-danger shadow">GitHub</a>
                                <a href="" className="btn btn-outline-warning shadow">Git</a>
                            </div>
                        </div>
                    </div>
                </header>
                {/* ends codes Header  */}

                {/* start codes Main  */}
                <main>
                    {/* start services_id */}
                    <section id="services_id">
                        <div className="icon_service">
                            <h2 className='text-center'> Services</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i class="fa-solid fa-blog text-center"></i>
                                        <h4>Blog Page Design</h4>
                                        <p className='line-clamp4'>Blog page Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i class="fa-solid fa-download text-primary"></i>
                                        <h4>Blog Page Design</h4>
                                        <p className='line-clamp4'>Blog page Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i class="fa-brands fa-wordpress text-success"></i>
                                        <h4>Blog Page Design</h4>
                                        <p className='line-clamp4'>Blog page Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i class="fa-solid fa-cloud"></i>
                                        <h4>Blog Page Design</h4>
                                        <p className='line-clamp4'>Blog page Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end icon services */}
                    </section>
                    {/* end services */}

                    {/* start blog */}
                    <section id="blog_id">
                        <div className="blog_service">
                            <h2 className='text-center'>Blog</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card mb-4">
                                            <img class="card-img-top" src={Ball} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Office} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Mountains} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={SunRise} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={SunRise} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={SunRise} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={SunRise} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={SunRise} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Html5</h4>
                                                <p class="card-text line-clamp5">Html Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facilis odio esse incidunt eligendi sed nostrum error iure modi suscipit itaque at beatae voluptas optio, ipsam atque tempora corporis aut.
                                                    Eligendi, facere ex. Assumenda expedita quibusdam, distinctio corrupti possimus alias quidem ad provident vitae praesentium consectetur quisquam explicabo voluptatibus, fugit ipsa. Quas, vero? Qui, in praesentium quas repellat enim fuga.
                                                    Sequi reiciendis dolore eos perspiciatis vitae, facilis repudiandae veniam natus nulla consequatur eveniet vero explicabo ullam. Voluptates repellendus est beatae. Quisquam corrupti harum fugiat nostrum dolores omnis perferendis. Incidunt, eligendi.
                                                    Adipisci, dignissimos culpa minima asperiores qui iusto. Dicta voluptatum cupiditate quod eligendi, dignissimos vero repellat odit odio facere consequatur, maxime doloribus doloremque aspernatur omnis nihil iste modi expedita praesentium amet!</p>
                                            </div>
                                        </div>
                                    </div>

                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end icon services */}
                    </section>
                    {/* end blog */}


                </main>
                {/* end codes Main  */}

            </React.Fragment>
        ); //end retur
    } //end render
} //end class

// EXPORT HEADER
export default withTranslation()(Main);