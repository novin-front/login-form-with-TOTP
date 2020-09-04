import React from 'react'

export default function Dashboard() {
    return (
    <div className="col-12">
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
