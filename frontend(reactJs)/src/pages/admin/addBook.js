import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = () => {

    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
                amazonLink: '',

            }}
            validationSchema={Yup.object().shape({
                title: Yup.string()
                    .required('First Name is required'),
                description: Yup.string()
                    .required('Last Name is required'),
                amazonLink: Yup.string()
                    .required('Email is required')
            })}
            onSubmit={fields => {
                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            }}
            render={({ errors, status, touched }) => (
                <Form>
                    <div className="form-group">
                        <label htmlFor="  title">Title</label>
                        <Field name="  title" type="text" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')} />
                        <ErrorMessage name="  title" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Desc</label>
                        <Field name="description" type="text" className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')} />
                        <ErrorMessage name="description" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="   amazonLink">amazonLink</label>
                        <Field name="amazonLink" type="text" className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')} />
                        <ErrorMessage name="amazonLink" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-2" style={{background:"#009C41"}} >Register</button>
                        <button type="reset" className="btn btn-secondary">Reset</button>
                    </div>
                </Form>
            )}
        />
    )

}

export default BookForm;