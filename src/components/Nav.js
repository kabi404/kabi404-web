import React from 'react';

const Nav = () => {
    return(
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

            <p className="text-white h1 display-1 my-5 text-center">
                <i class="fab fa-firefox"></i>
            </p>

            <a class="nav-link active text-white h2" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                <i class="fab fa-fort-awesome"></i>
            </a>
            <a class="nav-link text-white h2" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                <i class="fas fa-user-circle"></i>
            </a>
            <a class="nav-link text-white h2" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                <i class="fas fa-code"></i>
            </a>
            <a class="nav-link text-white h2" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                <i class="fas fa-feather-alt"></i>
            </a>
        </div>
    );
}

export default Nav;