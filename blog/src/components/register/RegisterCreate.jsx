// Axios
import axios from 'axios';

// React
import React, { useEffect, useState } from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// Redirect
import { useNavigate } from 'react-router-dom'

// FUNCTION CREATE
function RegisterCreate({ t, i18n, props }) {

  // REDIRECT
  let navigate = useNavigate();

  // STATE 
  const [name, setUsername] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // USE EFFECT 
  // useEffect(() => {
  //   registerCreate()
  // }, []);

  // FUNCTION

  // Persist Mock api Link
  const persistMockApiLink = () => {
    return "https://657ae453394ca9e4af12f9c6.mockapi.io/api/v1/blog/register"
  }

  // CREATE
  const registerCreate = () => {
    // axios.post(persistMockApiLink(), {
    axios.post("https://657ae453394ca9e4af12f9c6.mockapi.io/api/v1/blog/register", {
      name,
      surname,
      email,
      password,
    }).then((response) => {
      alert("Başarılı")
      navigate("/register/list")
      // if (response.status === 200) {
      //   navigate("/register/list")
      // }
    }).catch((err) => {
      console.error(err);
    });
  }

  // RETURN
  return (
    <React.Fragment>
      <h1 className="text-center text-primary display-5">{t('register_create')}</h1>
      <div className="container">
        <div className='row'>
          <div className="col-xs-12 col-md-2 col-lg-2">
          </div>

          <div className="col-xs-12 col-md-8 col-lg-8">
            <form>
              <input
                className="form-control me-2 mb-2"
                type="text"
                id="name"
                name="name"
                title={t('username')}
                placeholder={t('username')}
                onChange={(event)=>{setUsername(event.target.value)}}
              />

              <input
                className="form-control me-2 mb-2"
                type="text"
                id="surname"
                name="surname"
                title={t('surname')}
                placeholder={t('surname')}
                onChange={(event)=>{setSurname(event.target.value)}}
              />

              <input
                className="form-control me-2 mb-2"
                type="email"
                id="email"
                name="email"
                title={t('email')}
                placeholder={t('email')}
                onChange={(event)=>{setEmail(event.target.value)}}
              />
              <input
                className="form-control me-2 mb-2"
                type="password"
                id="password"
                name="password"
                title={t('password')}
                placeholder={t('password')}
                onChange={(event)=>{setPassword(event.target.value)}}
              />
              <button className="btn btn-outline-danger mt-2 me-2 mb-3" type="reset">
                {t('cleaner')}
              </button>

              <button  
              type="submit"
              className="btn btn-outline-primary mt-2 mb-3" 
              onClick={registerCreate}
              >
                {t('added')}
              </button>
            </form>
          </div>

        </div>
      </div>


    </React.Fragment>
  ) //end return
} //end RegisterCreate


// EXPORT
export default withTranslation()(RegisterCreate) 