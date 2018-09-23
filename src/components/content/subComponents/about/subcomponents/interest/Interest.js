import React from 'react';

const Interest = () => {
    return(
        <div>
            <div className="row justify-content-center mb-3">
                <p className="h3 mt-5 text-center">Areas of Interest</p>
            </div>

            <div className="row mb-4 mx-3 my-2">
                <div className="col-sm-3">
                    <div className="card bg-light">
                        <div className="card-body">
                            <p className="display-1 text-center">
                                <i className="fas fa-code"></i>
                            </p>

                            <p className="card-text text-center h5">
                                Code
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card bg-light">
                        <div className="card-body">
                            <p className="display-1 text-center">
                                <i className="fas fa-flask"></i>
                            </p>

                            <p className="card-text text-center h5">
                                Science
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card bg-light">
                        <div className="card-body">
                            <p className="display-1 text-center">
                                <i className="fas fa-gamepad"></i>
                            </p>

                            <p className="card-text text-center h5">
                                Videogames
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card bg-light">
                        <div className="card-body">
                            <p className="display-1 text-center">
                                <i className="fas fa-torii-gate"></i>
                            </p>

                            <p className="card-text text-center h5">
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