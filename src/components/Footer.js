import React from 'react';

const Footer = () => {
    return(
        <footer class="container-fluid py-5 bg-dark">
            <div class="row justify-content-around ml-auto flex-column flex-md-row align-items-center">
                <div class="col-3 justify-content-center text-center my-3">
                    <a href="mailto:kabi404@outlook.com" className="text-white h2" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
                <div class="col-3 justify-content-center text-center my-3">
                    <a href="https://twitter.com/kabi404" className="text-white h2" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
                <div class="col-3 justify-content-center text-center my-3">
                    <a href="https://www.linkedin.com/in/kabi404/" className="text-white h2" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <div class="col-3 justify-content-center text-center my-3">
                    <a href="https://github.com/kabi404" className="text-white h2" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github-alt"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;