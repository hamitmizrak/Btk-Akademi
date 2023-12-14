// React
import React, { useEffect, useState } from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// Navigate
import { useNavigate } from 'react-router-dom'

//Axios
import axios from 'axios';

// Function 
function RegisterList({ t, i18n, props }) {

    // REDIRECT
    let navigate = useNavigate();

    // STATE
    let [MockApi, setMockApi] = useState([]);

    // USE EFFECT 
    useEffect(() => {
        axios.get("https://657ae453394ca9e4af12f9c6.mockapi.io/api/v1/blog/register")
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log(response.data);
                    setMockApi(response.data);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    // RETURN
    return (
        <React.Fragment>
            <h1 className='text-center text-primary display-4 mt-5 mb-5 text-uppercase shadow'>{t('register')} List</h1>
            <div
                className="table-responsive-md"
            >
                <table
                    className="table table-primary table-striped table-hover table-bordered"
                >
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">{t('username')}</th>
                            <th scope="col">{t('surname')}</th>
                            <th scope="col">{t('email')}</th>
                            <th scope="col">{t('password')}</th>
                            <th scope="col">{t('systemCreatedDate')}</th>
                            <th scope="col">{t('update')}</th>
                            <th scope="col">{t('view')}</th>
                            <th scope="col">{t('delete')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            MockApi.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.username}</td>
                                        <td>{item.surname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                        <td>{item.systemCreatedDate}</td>
                                        <td><i style={{ "cursor": "pointer" }} className="fa-solid fa-pen-nib text-primary ms-3"></i></td>
                                        <td><i style={{ "cursor": "pointer" }} className="fa-solid fa-binoculars text-success ms-3"></i></td>
                                        <td><i style={{ "cursor": "pointer" }} className="fa-solid fa-trash text-danger ms-3"></i></td>
                                    </tr>
                                )
                            }) //end map
                        }
                    </tbody>
                </table>
            </div>

        </React.Fragment>
    ) //end return
}//end function

// Export 
export default withTranslation()(RegisterList) 