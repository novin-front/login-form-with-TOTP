import React from 'react'
import axios from 'axios';
import aes from 'js-crypto-aes';
export default function Dashboard() {
    const baseUrl = "https://localhost:5000/"
    // var gfg = Date.UTC(2020, 08, 03);
    // document.write("Output : " + gfg);

    const creatUtcDateTime = ()=>{
        const currentdate = new Date(Date.now());
        let NowUtcTime = ((currentdate.getTime() * 10000) + 621355968000000000);
        return NowUtcTime;
    }

    const convertStringToByteArray = (str) => {
        String.prototype.encodeHex = function () {
            var bytes = [];
            for (var i = 0; i < this.length; ++i) {
                bytes.push(this.charCodeAt(i));
            }
            return bytes;
        };

        var byteArray = str.encodeHex();
        return byteArray
    }

    const GetList = ()=>{
        // const key = localStorage.getItem("clientSecret") // in base64 format
        // const iv = "ThisIsASecretKey"   // in base 64 format
        // const keysize = "128"
        // const msg = JSON.stringify({ "DateTimeUtcTicks": creatUtcDateTime() });
        // aes.encrypt(msg, key, { name: 'AES-CBC', iv }).then((encrypted) => {
        //     // now you get an Uint8Array of encrypted message
        //    // console.log("encrypted ==>", encrypted)
        // });

        


        const key = convertStringToByteArray(localStorage.getItem("clientSecret"))
        const iv = convertStringToByteArray("ThisIsASecretKey");
        const msg = convertStringToByteArray(JSON.stringify({ "DateTimeUtcTicks": creatUtcDateTime() }));

        console.log("key ==> ", key);
        console.log("iv ==> ", iv);
        console.log("msg ==> ", msg);


        // aes.encrypt(msg, key, { name: 'AES-CBC', iv }).then((encrypted) => {
        //     // now you get an Uint8Array of encrypted message
        // });

        
        


        // let aesCode = ""

        // axios({
        //     method: 'post',
        //     url: baseUrl + 'api/WeatherForecast',
        //     headers : {
        //         "Request-Key": aes ,
        //         "ClientSecret": localStorage.getItem("clientSecret"),
        //     }
        // })
        //     .then((response) => {
        //         let { data } = response;
        //         console.log("response ==>", response);

        //         if (data.isSuccess) {



        //         } else {
        //             let messageWapper = document.querySelector(".show-message");
        //             messageWapper.innerHTML = `<div class="alert alert-danger" role="alert">
        //             failed request error
        //         </div>`;
        //         }

        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }
    return (
    <div className="col-12">
            {GetList()}
            <div className="container-fluid">
                <div className="row content">
                    <div className="col-sm-3 sidenav">
                        <h4>Dashboard panel </h4>
                        <ul className="nav1 nav-pills nav-stacked">
                            <li className="active"><a href="#section1">Home</a></li>
                            <li><a href="#section2">user list</a></li>
                            <li><a href="#section3">product list</a></li>
                            <li><a href="#section3">orders </a></li>
                        </ul><br />
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search Blog.."/>
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">
                                        <span className="glyphicon glyphicon-search"></span>
                                    </button>
                                </span>
				</div>
                        </div>

                        <div className="col-sm-9">




                            <div className="row">


                                <div className="col-sm-10">
                                    <h4>user list </h4>
                                    <p>this is user list</p>
                                    <br />
                                    <div className="show-message">

                                    </div>
                                    <div className="row">

                                        <div className="col-xs-10">
                                            <h2>user lsit </h2>
                                            <ul>
                                            <li>1</li>
                                            <li>1</li>
                                            <li>1</li>
                                            <li>1</li>
                                            </ul>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <footer className="container-fluid">
                    <p>Footer Text</p>
                </footer>
    </div>
    )
}
