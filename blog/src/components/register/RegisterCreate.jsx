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

  /*
      "username": "username 4",
    "surname": "surname 4",
    "email": "email 4",
    "password": "password 4",
  */

  // STATE 
  // Dikkat: username,surname,email,password mutlaka api attributes aynı olmalıdır.
  // Dikkat: username,surname,email,password mutlaka input içindeki id ve name bu isimlerde olmalıdır.
  const [username, setUsername] = useState(null);
  const [surname, setSurname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [multipleRequest, setMultipleRequest] = useState(false);

  // USE EFFECT 
  // useEffect(() => {
  //   registerCreate()
  // }, []);

  // FUNCTION

  // Persist Mock api Link
  const persistMockApiLink = () => {
    return "https://657ae453394ca9e4af12f9c6.mockapi.io/api/v1/blog/register"
  }


  // registerNameOnChange
  const registerUsernameOnChange = (event) => {
    const { name, value } = event.target;
    setUsername(value)
  }

  // registerSurnameOnChange
  const registerSurnameOnChange = (event) => {
    const { name, value } = event.target;
    setSurname(value)
  }

  // registerEmailOnChange
  const registerEmailOnChange = (event) => {
    const { name, value } = event.target;
    setEmail(value)
  }
  // registerPasswordOnChange
  const registerPasswordOnChange = (event) => {
    const { name, value } = event.target;
    setPassword(value)
  }

  const registerCleaner = () => {
    setUsername(null)
    setSurname(null)
    setEmail(null)
    setPassword(null)
  }

  // ON SUBMIT EVENT
  const onSubmitForm = (e) => {
    e.preventDefault();
  }

  // CREATE
  const registerCreate = async (event) => {
    const registerCreateForm = {
      username,
      surname,
      email,
      password
    };

    // Çoklu isteğe izin ver
    setMultipleRequest(true);

    // API
    try {
      const response = await axios.post(persistMockApiLink(), registerCreateForm)
      console.log(response)
      if (response.status == 201) {
        // Çoklu isteğe izin ver
        setMultipleRequest(false);

        // Alert
        alert("Kayıt Eklendi.");

        // Navigate
        navigate("/register/list")
      }
    } catch (err) {
      console.error(err);

      // Çoklu isteğe izin ver
      setMultipleRequest(false);
    }
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
            <form onSubmit={onSubmitForm}>
              <input
                className="form-control me-2 mb-2"
                type="text"
                id="username"
                name="username"
                title={t('username')}
                placeholder={t('username')}
                onChange={(event) => { setUsername(event.target.value) }}
                //onChange={registerUsernameOnChange}
                required={true}
              />

              <input
                className="form-control me-2 mb-2"
                type="text"
                id="surname"
                name="surname"
                title={t('surname')}
                placeholder={t('surname')}
                // onChange={(event) => { setSurname(event.target.value) }}
                onChange={registerSurnameOnChange}
                required={true}
              />

              <input
                className="form-control me-2 mb-2"
                type="email"
                id="email"
                name="email"
                title={t('email')}
                placeholder={t('email')}
                // onChange={(event) => { setEmail(event.target.value) }}
                onChange={registerEmailOnChange}
                required={true}
              />

              <input
                className="form-control me-2 mb-2"
                type="password"
                id="password"
                name="password"
                title={t('password')}
                placeholder={t('password')}
                // onChange={(event) => { setPassword(event.target.value) }}
                onChange={registerPasswordOnChange}
                required={true}
              />
              <button
                type="reset"
                //className="btn btn-outline-danger mt-2 me-2 mb-3"
                className="btn btn-danger mt-2 me-2 mb-3"
                onClick={registerCleaner}
              >
                {t('cleaner')}
              </button>

              <button
                type="submit"
                // className="btn btn-outline-primary mt-2 mb-3"
                className="btn btn-primary mt-2 mb-3"
                onClick={registerCreate}
                disabled={multipleRequest}
              >

                <div class="spinner-border text-warning" style={{ fontSize: "0.5rem" }} role="status">
                  <span class="sr-only">Loading...</span>
                </div>

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

// spinner
// update
// view
// Alert