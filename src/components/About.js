import React from 'react';
import Interest from './subcomponents/Interest';
import Skills from './subcomponents/Skills';

const About = () => {
    return(
        <div>
            <div className="row justify-content-center">
                <p className="display-4 mt-5 text-center">About me</p>
            </div>

            <div className="row justify-content-center">
                <p className="h1 display-4 ">
                    <i class="fas fa-user-astronaut"></i>
                </p>
            </div>

            
            <div className="row justify-content-center">
                <p className="h3 mt-5 text-center">Who am I</p>
            </div>

            <div className="row justify-content-center">
                <p className="text-center my-2">
                    <span role="img" aria-label="pc">💻</span> 
                        &nbsp;I am a Software Engineering student at University of Málaga, Spain.&nbsp;
                    <span role="img" aria-label="pc">💻</span><br/>
                    <span role="img" aria-label="japanese-flags">🎌</span>
                        &nbsp;日本語の学生&nbsp;
                    <span role="img" aria-label="japanese-flags">🎌</span><br/>
                    <span role="img" aria-label="fox">🦊</span>
                        &nbsp;Fox lover&nbsp;
                    <span role="img" aria-label="fox">🦊</span>
                </p>
            </div>

            <Interest/>

            <Skills/>
            

        </div>
    );
}

export default About;