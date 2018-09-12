import React from 'react';

const Nav = () => {
    return(
        <div className="justify-content-center">
            <div class="nav flex-column nav-pills my-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active text-white h3 my-3" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                    <i class="far fa-user"></i>
                </a>
                <a class="nav-link text-white h3 my-3" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                    <i class="fas fa-flask"></i>
                </a>
                <a class="nav-link text-white h3 my-3" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <i class="fas fa-glasses"></i>
                </a>
                <a class="nav-link text-white h3 my-3" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                    <i class="fas fa-camera-retro"></i>
                </a>         
            </div>
        </div>
    );
}

export default Nav;