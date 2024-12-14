'use client'
import axios from 'axios';

export class Data {

  

    async Contact(formdata){
        try {
            const res = await axios.post("https://codedev-siql.onrender.com/api/v1/contect" , formdata); 
            return res.data;
          } catch (err) {
            return err.message;
          }
    }

    


   
}

const sendData = new Data();

export default sendData;