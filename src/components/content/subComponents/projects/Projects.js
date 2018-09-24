import React from 'react';

const Projects = () => {
    return(
        <div>
            <div className="row justify-content-center">
                <p className="display-4 mt-5 text-center">My Projects</p>
            </div>

            <div className="row justify-content-center mb-5">
                <p className="h1 display-4 ">
                    <i className="fas fa-drafting-compass"></i>
                </p>
            </div>

            <div className = "row justify-content-center mx-2 mb-5">
                <div className="col-4">
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Own projects
                                    </button>
                                </h5>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>
                                        These are my own projects.
                                    </p>
                                    <li className="ml-5">
                                        <a>My Home</a>
                                    </li>
                                    <li className="ml-5">
                                        <a>Light Kana</a>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        ArtichokeCore
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>
                                        These are my ArtichokeCore projects.
                                    </p>
                                    <li className="ml-5">
                                        <a>My Role Dices</a>
                                    </li>
                                    <li className="ml-5">
                                        <a>Artichoke web</a>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Happy Nuts
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                <p>
                                        These are my Rainy Nuts projects.
                                    </p>
                                    <li className="ml-5">
                                        <a>Save Karin</a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-8">
                    <div class="card text-center">
                        <div class="card-header">
                            Project category
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Project Name</h5>
                            <p class="card-text">This is the project description. This is the project description. This is the project description. This is the project description. This is the project description. This is the project description. </p>
                            <a href="#" class="h3"><i class="fab fa-github"></i></a>
                        </div>
                        <div class="card-footer text-muted">
                            state
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Projects;