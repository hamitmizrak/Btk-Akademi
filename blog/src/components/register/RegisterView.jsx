// Axios
import axios from 'axios';

// React
import React, { useEffect, useState } from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// Router
import { useNavigate } from 'react-router-dom';


// FUNCTION VIEW
function RegisterView({ t, i18n, props }) {

  // REDIRECT
  let navigate = useNavigate();

  // STATE  Object
  const [registerViewState, setRegisterViewState] = useState([])

  // STATE  ID
  const [viewId, setViewId] = useState(null);

  // USE EFFECT 
  useEffect(() => {
    viewFindById()
  })

  // FIND BY ID
  const viewFindById = () => {
    setViewId(localStorage.getItem('viewId'))
    axios.get(persistMockApiLink().concat(`/${viewId}`)) //${viewId}
      .then((response) => {
        console.log(response.data);
        setRegisterViewState(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  // FUNCTION
  // Persist Mock api Link
  const persistMockApiLink = () => {
    return "https://657ae453394ca9e4af12f9c6.mockapi.io/api/v1/blog/register"
  }


  // RETURN
  return (
    <React.Fragment>
      <div className='container text-center mt-5 mb-5'>
        <div className='row'>
          {/* Card */}
          <div className="card w-50">
            {/* Card image */}
            <div className="view overlay">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
                alt="Card image cap"
              />
              <a href="#!">
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body">
              {/* Title */}
              <h4 className="card-title">{registerViewState.id}</h4>
              {/* Text */}
              <p className="card-text">

                {registerViewState.username}
                <br />
                {registerViewState.surname}
                <br />
                {registerViewState.email}
                <br />
                {registerViewState.password}
              </p>
              {/* Button */}
              <a href="#" className="btn btn-primary">
                Button
              </a>

              <div className="container p-5 pb-0">
                {/* Section: Social media */}
                <section className="mb-4">
                  {/* Google */}
                  <a
                    data-mdb-ripple-init=""
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: "#dd4b39" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-google" />
                  </a>
                  {/* Linkedin */}
                  <a
                    data-mdb-ripple-init=""
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: "#0082ca" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  {/* Github */}
                  <a
                    data-mdb-ripple-init=""
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: "#333333" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-github rounded" />
                  </a>
                </section>
                {/* Section: Social media */}
              </div>
            </div>
          </div>
          {/* Card */}
        </div>
      </div>


    </React.Fragment>
  ) //end return
} //end function


// EXPORT
export default withTranslation()(RegisterView) 