import React from 'react';

import Home from './subComponents/home/Home';
import Blog from './subComponents/blog/Blog';
import Projects from './subComponents/projects/Projects';
import About from './subComponents/about/About';

const Content = () => {
    return(
        <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <Home/>
            </div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <About/>
            </div>
            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                <Projects/>
            </div>
            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                <Blog/>
            </div>
        </div>
    );
}

export default Content;