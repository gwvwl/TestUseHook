
import './form.css';
import EmployeeTest from '../services/services';


import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';


const CustomForm = () => {
    
    const employeePost = new EmployeeTest();

    const comDid = (body) => {
        employeePost.getToken()
        .then(res => {


            let requestOptions ={
                method: 'POST',
                body: JSON.stringify(body),
                headers: {"Token" : res.token}
            }
    
            employeePost.formPost(requestOptions) 
        })
    }


    return (
        <Formik
        initialValues = {{
            name: '',
            email: '',
            phone: '',
            position_id: '',
            photo: ''
        }}
        validationSchema = {Yup.object({
            name: Yup.string()
                    .min(2, 'Минимум 2 символа для заполнения')
                    .required('Обязательное поле!'),
            email: Yup.string()
                    .email('Неправильный email адрес')
                    .required('Обязательное поле!'),
            phone: 
                Yup.number()
                .required('Сумма обязательна')
                .min(5, 'Не менее 5'),
            position_id: Yup.string()
                    .required('Выберите позицию'),
            photo: Yup.mixed()
                        .required('Добавьте фото')


        })}
        onSubmit = {values => comDid(values) } 
        > 
              <div className="form" id='formFocus'>
                <h2 >Working with POST request</h2>
                <Form>
                    <ErrorMessage name='name' className="error"  component='div' />
                    <Field 
                        className="form__input" 
                        type="text" 
                        placeholder="Your name" 
                        name='name'/>
                    
                    <ErrorMessage name='email' className="error"  component='div' />
                    <Field 
                        className="form__input" 
                        type="mail" 
                        placeholder="Email" 
                        name='email'/>
                    
                    <ErrorMessage name='phone' className="error"  component='div' />
                    <Field 
                        className="form__input" 
                        type="number"  
                        placeholder="Phone" 
                        name='phone'/>

                    <ErrorMessage name='position_id' className="error"  component='div' />
                    <span>Select your position</span>
                    <div className="form-select">
                        <div className="custom-radio">
                            <label>
                                <Field 
                                    type="radio" 
                                    name="position_id" 
                                    value={'1'}
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
                                    name="position_id"
                                    value={'2'}
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
                                    name="position_id"
                                    value={'3'}
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
                                    name="position_id"
                                    value={'4'}
                                />
                                <div className="custom-radio__label">
                                    <span>QA</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <ErrorMessage name='photo' className="error"  component='div' />
                    <label className="input-img" htmlFor="photo">
                        <div className="input-img__left"><span>Upload</span></div>
                        <span className="input-img__right">Upload your photo</span>
                        <Field 
                          className='form-input__none' 
                          type="file" 
                          id="photo" 
                          name='photo' />
                    </label>
                    <button className="form__submit buttonAndLink" type="submit" 
                    >Sign up</button>
                </Form>
              </div>  
        </Formik>
    )
}
export default CustomForm;


