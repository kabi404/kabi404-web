import React, {Component} from 'react';
class Skills extends Component {

    /*constructor(props) {
        super(props);

        this.state = {
            skills : {}
        }
    }

    loadSkills = () => {
        fetch('/data/skills.json')
            .then( (response) => {
                return response.json()
            })
            .then( (data) => {
                this.setState({
                    skills: data
                })
        });
    }*/
    
    render(){
        //this.loadSkills();

        return(
            <div>
                <div className="row justify-content-center mb-3">
                    <p className="h3 mt-5 text-center">My Skills</p>
                </div>

                <div className="row mb-4 justify-content-center">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                <i className="far fa-file-code"></i> Programming Languages
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                                <i className="fas fa-database"></i> DataBase
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
                                <i className="fas fa-screwdriver"></i> Other Technologies
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="row mb-4 mx-3 my-2">
                        <div className="col-sm-3">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <p className="display-1 text-center">
                                        <i className="fab fa-java"></i>
                                    </p>

                                    <p className="card-text text-center h5">
                                        JAVA
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <p className="display-1 text-center">
                                        <i className="fab fa-js-square"></i>
                                    </p>

                                    <p className="card-text text-center h5">
                                        JavaScript
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <p className="display-1 text-center">
                                        <i className="fab fa-php"></i>
                                    </p>

                                    <p className="card-text text-center h5">
                                        PHP
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <p className="display-1 text-center">
                                        <i className="fab fa-python"></i>
                                    </p>

                                    <p className="card-text text-center h5">
                                        Python
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row mb-4 mx-3 my-2">
                        <div className="col-sm-3">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <p className="display-1 text-center">
                                        <i className="fab fa-java"></i>
                                    </p>

                                    <p className="card-text text-center h5">
                                        JAVA
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <p className="display-1 text-center">
                                        <i className="fab fa-js-square"></i>
                                    </p>

                                    <p className="card-text text-center h5">
                                        JavaScript
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <p className="display-1 text-center">
                                        <i className="fab fa-php"></i>
                                    </p>

                                    <p className="card-text text-center h5">
                                        PHP
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <p className="display-1 text-center">
                                        <i className="fab fa-python"></i>
                                    </p>

                                    <p className="card-text text-center h5">
                                        Python
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">loop</div>

            </div>
        )
    };
}

export default Skills;