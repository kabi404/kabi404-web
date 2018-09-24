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
                    <p className="h3 mt-5 text-center">My Main Skills</p>
                </div>

                <ul class="nav nav-pills mb-3 text-center justify-content-center" id="pills-tab" role="tablist">
                    <li class="nav-item mx-2">
                        <a class="nav-link h3 active" id="pills-plan-tab" data-toggle="pill" title="Programming Languages" href="#pills-plan" role="tab" aria-controls="pills-plan" aria-selected="true">
                            <i class="fas fa-code"></i>
                        </a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link h3" id="pills-profile-tab" data-toggle="pill" title="Databases" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                            <i class="fas fa-database"></i>
                        </a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link h3" id="pills-contact-tab" data-toggle="pill" title="Other" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
                            <i class="fas fa-seedling"></i>
                        </a>
                    </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-plan" role="tabpanel" aria-labelledby="pills-plan-tab">
                        <div className = "row my-4 mx-5">
                            <div className="col-4">
                                <div class="card bg-light"><div class="card-body"><p class="display-1 text-center"><i class="fab fa-java"></i></p><p class="card-text text-center h5">JAVA</p></div></div>
                            </div>
                            <div className="col-4">
                                <div class="card bg-light"><div class="card-body"><p class="display-1 text-center"><i class="fab fa-js-square"></i></p><p class="card-text text-center h5">JavaScript</p></div></div>
                            </div>
                            <div className="col-4">
                                <div class="card bg-light"><div class="card-body"><p class="display-1 text-center"><i class="fab fa-php"></i></p><p class="card-text text-center h5">PHP</p></div></div>
                            </div>                       
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className = "row my-4 mx-5">
                            <div className="col-4">
                                <div class="card bg-light"><div class="card-body"><p class="display-1 text-center"><i class="fas fa-database"></i></p><p class="card-text text-center h5">MySQL</p></div></div>
                            </div>
                            <div className="col-4">
                                <div class="card bg-light"><div class="card-body"><p class="display-1 text-center"><i class="fas fa-leaf"></i></p><p class="card-text text-center h5">MongoDB</p></div></div>
                            </div>
                            <div className="col-4">
                                <div class="card bg-light"><div class="card-body"><p class="display-1 text-center"><i class="fab fa-microsoft"></i></p><p class="card-text text-center h5">SQL Server</p></div></div>
                            </div>    
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className = "row my-4 mx-5">
                            <div className="col-4">
                                <div class="card bg-light"><div class="card-body"><p class="display-1 text-center"><i class="fab fa-node-js"></i></p><p class="card-text text-center h5">Node.js</p></div></div>
                            </div>
                            <div className="col-4">
                                <div class="card bg-light"><div class="card-body"><p class="display-1 text-center"><i class="fab fa-react"></i></p><p class="card-text text-center h5">React</p></div></div>
                            </div>
                            <div className="col-4">
                                <div class="card bg-light"><div class="card-body"><p class="display-1 text-center"><i class="fab fa-git-square"></i></p><p class="card-text text-center h5">Git</p></div></div>
                            </div>    
                        </div>
                    </div>
                </div>

            </div>
        )
    };
}

export default Skills;