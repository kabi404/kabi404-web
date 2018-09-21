import React from 'react';

const Skills = () => {
    return(
        <div>
            <div className="row justify-content-center mb-3">
                <p className="h3 mt-5 text-center">My Skills</p>
            </div>

            <div class="row mb-4 justify-content-center">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                            <i class="far fa-file-code"></i> Programming Languages
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                            <i class="fas fa-database"></i> DataBase
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
                            <i class="fas fa-screwdriver"></i> Other Tech
                        </a>
                    </li>
                </ul>
            </div>
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="row mb-4 mx-3 my-2">
                    <div class="col-sm-3">
                        <div class="card bg-light">
                            <div class="card-body">
                                <p class="display-1 text-center">
                                    <i class="fab fa-java"></i>
                                </p>

                                <p class="card-text text-center h5">
                                    JAVA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card bg-light">
                            <div class="card-body">
                                <p class="display-1 text-center">
                                    <i class="fab fa-js-square"></i>
                                </p>

                                <p class="card-text text-center h5">
                                    JavaScript
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card bg-light">
                            <div class="card-body">
                                <p class="display-1 text-center">
                                    <i class="fab fa-php"></i>
                                </p>

                                <p class="card-text text-center h5">
                                    PHP
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card bg-light">
                            <div class="card-body">
                                <p class="display-1 text-center">
                                    <i class="fab fa-python"></i>
                                </p>

                                <p class="card-text text-center h5">
                                    Python
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    
                
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">loop</div>
            </div>
    );
}

export default Skills;