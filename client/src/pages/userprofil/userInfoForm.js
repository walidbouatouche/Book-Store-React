import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import  ShowImage from'../../compenents/imgTobase64'

const BookForm = ({ _editUser, _user }) => {

    const [imgUrl, setImgUrl] = useState(_user.imgUrl)

    function showImagEvent(uri){

        // convert selected image to base and assigment to uri 
        setImgUrl(uri)

    }
    return (

        <Formik
            initialValues={{
                fullName: _user?.fullName || '',
                dateOfBirth: _user?.dateOfBirth || '',
                adresse: _user?.adresse || '',
                aubouteMe: _user?.aubouteMe || '',
                phone: _user?.phone || '',

            }}
            validationSchema={Yup.object().shape({
                fullName: Yup.string()
                    .required('Full Name is required').max(50, "max 50!"),
                dateOfBirth: Yup.string()
                    .required('Date Name is required').max(50, "max 50!"),
                adresse: Yup.string()
                    .required('Adresse is required').max(100),
                aubouteMe: Yup.string()
                    .required('aboute me required').max(250),
                phone: Yup.number()
                    .required('phone').max(250)
            })}
            onSubmit={fields => {

                _editUser({ ...fields, imgUrl })
            }}
            render={({ errors, status, touched }) => (
                <Form>
                    {/* E-mail: {_user.email} */}
                    <div className="text-center">

                   { imgUrl && <img    src={imgUrl} style={{height:'150px', width:'150px',borderRadius:"50%"}}  />}
                  
                   <ShowImage   showImagEvent={showImagEvent}  />
                   </div>
                  
                    <div className="form-group">
                        <label htmlFor="fullName">fullName</label>
                        <Field name="fullName" type="text" className={'form-control' + (errors.fullName && touched.fullName ? ' is-invalid' : '')} />
                        <ErrorMessage name="fullName" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">dateOfBirth</label>
                        <Field name="dateOfBirth" type="date" className={'form-control' + (errors.dateOfBirth && touched.dateOfBirth ? ' is-invalid' : '')} />
                        <ErrorMessage name="dateOfBirth" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adresse">adresse</label>
                        <Field name="adresse" as="textarea" className={'form-control' + (errors.adresse && touched.adresse ? ' is-invalid' : '')} />
                        <ErrorMessage name="adresse" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="aubouteMe"> aubouteMe</label>
                        <Field name="aubouteMe" as="textarea" className={'form-control' + (errors.adresse && touched.adresse ? ' is-invalid' : '')} />
                        <ErrorMessage name="aubouteMe" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone"> phone</label>
                        <Field name="phone" type="number" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                        <ErrorMessage name=" phone" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-2" style={{ background: "#009C41" }} >Save</button>
                        <button type="reset" className="btn btn-secondary">Reset</button>
                    </div>
                </Form>
            )}
        />
    )

}

export default BookForm;