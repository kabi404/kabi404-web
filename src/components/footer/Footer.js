import React from 'react';

const Footer = () => {
    return(
        <footer className="container-fluid py-5 bg-dark">
            <div className="row justify-content-around ml-auto flex-column flex-md-row align-items-center">
                <div className="col-3 justify-content-center text-center my-3">
                    <a href="mailto:kabi404@outlook.com" className="text-white h1" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                <div className="col-3 justify-content-center text-center my-3">
                    <a href="https://twitter.com/kabi404" className="text-white h1" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                <div className="col-3 justify-content-center text-center my-3">
                    <a href="https://www.linkedin.com/in/kabi404/" className="text-white h1" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <div className="col-3 justify-content-center text-center my-3">
                    <a href="https://github.com/kabi404" className="text-white h1" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;