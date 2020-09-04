import React,{useState} from 'react'
import axios from 'axios';

export default function Login({ chengePage}) {
    const [formsData, setformsData] = useState({});
    const baseUrl = "https://localhost:5000/"
    const handleSubmit = (event)=>{
        event.preventDefault();
        let forms = event.target
        console.log("formsData", formsData);
        
        axios({
            method: 'post',
            url: baseUrl +'api/Auth/Login',
            data: formsData
        })
        .then((response)=>{
            let {data} = response;
            console.log("response ==>",response);
           
            if(data.isSuccess){

                let messageWapper = document.querySelector(".show-message");
                messageWapper.innerHTML = `<div class="alert alert-success" role="alert">
                    Loing success pless Please wait a few seconds you sign
                </div>`;

                let { ClientSecret} = data;
                
                localStorage.setItem("clintSecret", ClientSecret);

                setTimeout(() => {
                    chengePage("Dashboard");
                }, 2000);

            }else{
                let messageWapper = document.querySelector(".show-message");
                messageWapper.innerHTML = `<div class="alert alert-danger" role="alert">
                    Loing success pless Please wait a few seconds you sign
                </div>`;
            }
            
        })
        .catch((error)=>{
            console.error(error);
        });
    }
    //headers: { 'content-type': 'application/x-www-form-urlencoded' },
    const setDataInput = (event)=>{
        let inputs = event.target;
        setformsData(preState =>{
            let newobj = {
                ...preState,
            }
            newobj[`${inputs.name}`] = inputs.value;
            return newobj;
        })
    }
    //ThisIsASecretKey
    // /api/Auth/Login
    // /api/WeatherForecast
    return (
        <div className="col-12 col-md-5">
        <form className="form-login" onSubmit={handleSubmit} >
            <div className="show-message">
                
            </div>
            <div className="form-group">
                <label for="userName">User Name</label>
                <input type="text" className="form-control" id="userName" name="Username" onChange={e=>{setDataInput(e)}} />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" name="Password" onChange={e=>{setDataInput(e)}}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}
