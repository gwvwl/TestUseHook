
import { useEffect, useState} from 'react';


import './main.css';
import EmployeeTest from '../services/services';



const Main = () => {

    const [employee, setEmployee] = useState([]);
    const [offset, setOffset] = useState(0);

    

    const employeeTest= new EmployeeTest();

    useEffect(() => {
        onRequest();
    }, [])
   

    const onRequest = (offset) => {
        employeeTest.getEmloyee(offset)
            .then(onEmpList)
            .catch(res => console.log(res))
    }

    const onEmpList = (newEmp) => {
        setEmployee(employee => [...employee, ...newEmp]);
        setOffset(offset => offset + 6);
    }
    

    function renderItems (arr) {
        const items = arr.map(item => {
            return (
                <div className="employee__card" key={item.id}>
                    <div className="employee__card__item">
                        <img src={item.photo} alt="foto"/>
                        <span className="employee-name">{item.name}</span>
                        <ul className="employee-promo">
                            <li className="employee-promo__position">{item.position}</li>
                            <li className="employee-promo__mail">{item.email}</li>
                            <li className="employee-promo__number">{item.phone}</li>
                        </ul>
                    </div>
                </div>
            )
        });
        return items;
    }


    
    const items = renderItems(employee);

    return(
        <div className="main-wraper" id='users'>
            <h2>Working with GET request</h2>
            <div className="employee__card">
                {items}
            </div>
            <button className="form__submit buttonAndLink"
            onClick={() => onRequest(offset)}>Show more</button>
        </div>
    )

}

export default Main;