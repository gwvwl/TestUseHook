
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';


const Form = () =>{

    state = {
        name: '',
        email: '',
        phone: '',
        photo: '',
        position: '',
        // token:''
    }


    onValueChange = (e) => {
        this.setState(({
             [e.target.name] : e.target.value
        }))
    }

    employeePost = new EmployeeTest();
    
    comDid = (e) => {
        e.preventDefault();
        this.employeePost.getToken()
        .then(res => this.reque(res.token))

    }
    reque = (token) => {
        let form = {name: this.state.name,
                    email: this.state.email,
                    phone: this.state.phone,
                    photo: this.state.photo,
                    position: this.state.position,};
        
        

        let tokenJs = {'Token' : JSON.stringify(token)};

        let requestOptions ={
        method: 'POST',
        body: JSON.stringify(form),
        headers: JSON.stringify(tokenJs)
        }

        this.comDidPost(requestOptions)
        
    }

    comDidPost= (requestOptions) => {
        // console.log(requestOptions)
        this.employeePost.formPost(requestOptions)
    }

        const {name, email, phone, photo} = this.state;

     
        return(
            <Formik className="form">
                        initialValues = {{
                        name: '',
                        email: '',
                        phone: '',
                        position: ''
                    }}
                    validationSchema = {Yup.object({
                        name: Yup.string()
                                .min(2, 'Минимум 2 символа для заполнения')
                                .required('Обязательное поле!'),
                        email: Yup.string()
                                .email('Неправильный email адрес')
                                .required('Обязательное поле!'),
                        phone: Yup.number()
                                .required('Сумма обязательна')
                                .min(5, 'Не менее 5'),

                    })}
                    onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
                <h2 >Working with POST request</h2>
                <Form>
                    <Field 
                        className="form__input" 
                        type="text" 
                        placeholder="Your name" 
                        name='name'/>
                    <ErrorMessage name='name' component='div' />

                    <Field 
                        className="form__input" 
                        type="mail" 
                        placeholder="Email" 
                        name='email'/>
                    <ErrorMessage name='email' component='div' />

                    <Field 
                        className="form__input" 
                        type="tel"  
                        placeholder="Phone" 
                        name='phone'/>
                    <ErrorMessage name='phone' component='div' />

                    <span>Select your position</span>
                    <div className="form-select">
                        <div className="custom-radio">
                            <label>
                                <Field 
                                    type="radio" 
                                    name="position" 
                                    value={'Frontend developer'}
                                />
                                <div className="custom-radio__label">
                                    <span> Frontend developer</span>
                                </div>
                            </label>
                        </div>
                        <div className="custom-radio">
                            <label>
                                <Field 
                                    type="radio" 
                                    name="position"
                                    value={'Backend developer'}
                                />
                                <div className="custom-radio__label">
                                    <span>Backend developer</span>
                                </div>
                            </label>
                        </div>
                        <div className="custom-radio">
                            <label>
                                <Field 
                                    type="radio" 
                                    name="position"
                                    value={'Designer'}
                                />
                                <div className="custom-radio__label">
                                    <span>Designer</span>
                                </div>
                            </label>
                        </div>
                        <div className="custom-radio">
                            <label>
                                <Field 
                                    type="radio" 
                                    name="position"
                                    value={'QA'}
                                />
                                <div className="custom-radio__label">
                                    <span>QA</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <label className="input-img" htmlFor="file">
                        <div className="input-img__left"><span>Upload</span></div>
                        <span className="input-img__right">Upload your photo</span>
                        <input className='form-input__none' type="file" id="file" 
                        onChange={this.onValueChange}
                        value={photo}
                        name='photo' />
                    </label>
                    <button className="form__submit buttonAndLink" type="submit" 
                    >Sign up</button>
                </Form>
            </Formik>
    )
    

}
