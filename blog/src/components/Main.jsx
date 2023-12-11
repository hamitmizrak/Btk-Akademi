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

                    {/* start about_id */}
                    <section id="about_id">
                        <div className="about_service">
                            <h2 className='text-center text-white'> About Me</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                                        <i class="fa-solid fa-blog text-center"></i>
                                        <p className='line-clamp15  text-white'> About Me Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque harum amet, quo obcaecati explicabo sit consequuntur nobis eveniet quas dolorem iusto officiis ut molestias ex maxime enim dolores culpa.
                                            Delectus nostrum eligendi, adipisci molestias nihil, eos quas veniam praesentium in quae earum facere fugiat aliquid. Velit nobis laboriosam, qui tempora modi vitae. Explicabo amet voluptate at dolores asperiores quos?
                                            Mollitia asperiores, molestias minus quas quam reprehenderit placeat? Cupiditate debitis eaque, quod ipsam molestias vel officiis hic facilis sapiente consequuntur quidem ea voluptates incidunt tenetur. Consequatur eos vel ad mollitia.
                                            Esse accusantium nostrum quisquam in et facilis consequuntur, voluptatibus neque, fuga harum officiis praesentium molestiae deserunt culpa eius eveniet. At possimus sequi labore earum eos, impedit debitis animi esse sint.
                                            Sequi necessitatibus nostrum unde sapiente, labore obcaecati maxime accusantium nobis odit corporis odio excepturi vel quod quibusdam ullam omnis! Tenetur perferendis temporibus quod harum quis praesentium corporis vitae, officiis eum.
                                            Expedita impedit molestias natus adipisci, placeat ab nihil, dolorum consequuntur, neque praesentium nisi illo in perferendis voluptatum error ex unde temporibus doloremque voluptatibus voluptas sequi modi cupiditate tenetur nulla? Sed?
                                            Deleniti animi illo ut natus incidunt architecto, repellat blanditiis error necessitatibus repudiandae? Similique dolorem error tenetur itaque iure mollitia voluptatibus cum officiis aliquam nisi. Ullam libero consectetur dolorem quis amet!
                                            Dignissimos saepe, ex eos tempore quaerat provident illo aliquam, sit doloremque accusamus expedita nulla. Tempore, harum quas suscipit voluptatem aspernatur voluptas, praesentium facere quidem eligendi accusamus itaque, laborum dolorem modi?
                                            Laudantium quod quas incidunt possimus consequatur corporis qui optio tempore dolorum hic ad error molestiae at, esse exercitationem impedit ex. Laborum et beatae dolore exercitationem, illum obcaecati. Beatae, voluptates tenetur?
                                            Consequatur quia nam doloribus odit reprehenderit odio, dignissimos quibusdam autem architecto sed praesentium, temporibus nulla aspernatur ad magni deleniti. Autem laudantium totam ratione maiores unde deleniti officia aspernatur, at voluptatum! Blog page Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam ratione necessitatibus dicta eos deleniti consequatur. Nostrum corrupti, dicta, vel consequuntur error, recusandae itaque nobis ducimus neque possimus aliquid odit?</p>
                                        <button className="btn btn-outline-primary text-cente">More ...</button>
                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end about services */}
                    </section>  {/* end about services */}


                    {/* start contact_id */}
                    <section id="contact_id">
                        <div className="contact_service">
                            <h2 className='text-center  mb-4 text-dark text-uppercase'> İletişim</h2>
                            <div className="container">
                                <div className="row">
                                    {/* MAP */}
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
                                        <div className="mapouter">
                                            <div className="gmap_canvas">
                                                <iframe
                                                    className="gmap_iframe"
                                                    frameBorder={0}
                                                    scrolling="no"
                                                    marginHeight={0}
                                                    marginWidth={0}
                                                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=malatya&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                                />
                                                <a href="https://embed-googlemap.com">embed google map</a>
                                            </div>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        ".mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}"
                                                }}
                                            />
                                        </div>

                                    </div>

                                    {/* FORM */}
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
                                        <form action="#!" method="post" autoComplete='on'>
                                            {/* Username */}
                                            <div className="form-group mt-4 mb-4">
                                                <label htmlFor="uname">Username</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="uname"
                                                    placeholder="kullanıcı adınız"
                                                    title='kullanıcı adınız'
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className="form-group mb-4">
                                                <label htmlFor="uemail">Email address</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="uemail"
                                                    name="uemail"
                                                    placeholder="Email adresiniz"
                                                    title="Email adresiniz"
                                                />
                                            </div>

                                            {/* Subject */}
                                            <div className="form-group mb-4">
                                                <label htmlFor="usubject">Konu</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="usubject"
                                                    name="usubject"
                                                    placeholder="Konu"
                                                    title="Email Konusu"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="form-group mb-4">
                                                <label htmlFor="exampleFormControlTextarea1">İçerik</label>
                                                <textarea
                                                    className="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    rows={3}
                                                    defaultValue={""}
                                                />
                                            </div>

                                            <div className="form-group mt-4 mb-4">
                                                <input type="reset" id="reset" name="reset" value="Temizle" className="btn btn-danger me-3" />
                                                <button type="submit" id="submit" name="submit" className="btn btn-primary">Gönder </button>
                                            </div>

                                        </form>

                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end about services */}
                    </section>  {/* end about services */}

                    {/* start backToTop */}
                    <a href="#header" id="backToTop" className="btn btn-outline-primary">
                        <i class="fa-solid fa-arrow-up"></i>
                    </a>

                </main>
                {/* end codes Main  */}

            </React.Fragment>
        ); //end retur
    } //end render
} //end class

// EXPORT HEADER
export default withTranslation()(Main);