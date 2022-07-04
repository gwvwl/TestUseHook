import Header from '../header/header';
import Main from '../main/main';
import CustomForm from '../form/form';


import { Component } from 'react';
import './app.css';



class App extends Component{
    
    
    
    render(){
        return(
            <>
                <Header/>
                <Main/>
                <CustomForm/>
            </>
        )
    }
}
export default App;