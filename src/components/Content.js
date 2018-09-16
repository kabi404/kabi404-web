import React from 'react';

import Home from './Home';
import Blog from './Blog';
import Projects from './Projects';
import Skills from './Skills';

const Content = () => {
    return(
        <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <Home/>
            </div>
            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <Skills/>
            </div>
            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                <Projects/>
            </div>
            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                <Blog/>
            </div>
        </div>
    );
}

export default Content;