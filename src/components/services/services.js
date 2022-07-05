

class EmployeeTest {
    _baseOffset = 0;

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }
    getToken = () => {
        const res = this.getResource('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        return res;
    }
    
    getEmloyee = async (offset = this._baseOffset) => {
        const res = await this.getResource(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&offset=${offset}&count=8`);
        return res.users.map(this._transformEmployee);
    }

    formPost= async (requestOptions) => {
        console.log(requestOptions)

        let res = await fetch(``, requestOptions)
    
        let resultat = await res.json()
        return  console.log(resultat)
        
    }
    
    _transformEmployee = (emp) =>{
        return {
            id: emp.id,
            name: emp.name,
            email: emp.email,
            phone: emp.phone,
            photo: emp.photo,
            position: emp.position
        }
    }

}
export default EmployeeTest;