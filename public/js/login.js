import axios from 'axios'

export const login = async( name,username,password) => {
   
    try{
        const res = await axios.post('/api/v1/users/login', {
            name,
            username,
            password
          });
    if(res.data.status === 'success'){
        console.log('logged in');
    }else{
        console.log(res);
    }

    }catch(error){
        console.log(error);
    }
}