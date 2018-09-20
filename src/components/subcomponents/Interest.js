import React from 'react';

const Interest = () => {
    return(
        <div>
            <div className="row justify-content-center mb-3">
                <p className="h3 mt-5 text-center">Areas of Interest</p>
            </div>

            <div class="row mb-4 mx-3 my-2">
                <div class="col-sm-3">
                    <div class="card bg-light">
                        <div class="card-body">
                            <p class="display-1 text-center">
                                <i class="fas fa-code"></i>
                            </p>

                            <p class="card-text text-center h5">
                                Code
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card bg-light">
                        <div class="card-body">
                            <p class="display-1 text-center">
                                <i class="fas fa-flask"></i>
                            </p>

                            <p class="card-text text-center h5">
                                Science
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card bg-light">
                        <div class="card-body">
                            <p class="display-1 text-center">
                                <i class="fas fa-gamepad"></i>
                            </p>

                            <p class="card-text text-center h5">
                                Videogames
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card bg-light">
                        <div class="card-body">
                            <p class="display-1 text-center">
                                <i class="fas fa-torii-gate"></i>
                            </p>

                            <p class="card-text text-center h5">
                                Japan
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interest;