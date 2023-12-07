<template>
    <div class="profile">
        <h1 class="title">Profile</h1>
        <section class="content">
            <!-- box-1 -->
            <div class="box">
                <div class="about">
                    <img src="../assets/imgs/Avatar.png" alt="avatar">
                    <h3>Osama ElJohar</h3>
                    <p class="level">Level 20</p>
                    <div class="percentage"><span></span></div>
                    <div class="ratings">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <p class="ratenum">550 Rating</p>
                </div>
                <div class="geninfo"> 
                    <div class="infos">
                        <h3>General information</h3>
                        <div class="info">
                            <p>
                            <span>Full Name:</span> Mostafa Mahmoud 
                        </p>
                        <p>
                            <span>Gender:</span> Male
                        </p>
                        <p>
                            <span>Country:</span> Egypt
                        </p>
                        </div>
                        <label>
                            <input type="checkbox" class="toggleCheckbox">
                            <div class="toggleSwitch"></div>
                        </label>
                    </div>
                    <div class="infos">
                        <h3>Personal Information</h3>
                        <div class="info">
                            <p>
                            <span>Email:</span>  o@nn.sa
                        </p>
                        <p>
                            <span>Phone:</span> 019123456789
                        </p>
                        <p>
                            <span>Date Of Birth:</span> 25/10/1982
                        </p>
                        </div>
                        <label>
                            <input type="checkbox" class="toggleCheckbox" checked>
                            <div class="toggleSwitch"></div>
                        </label>
                    </div>
                    <div class="infos">
                        <h3>Job Information</h3>
                        <div class="info">
                            <p>
                            <span>Title:</span>  Full Stack Developer
                        </p>
                        <p>
                            <span>Programming Language:</span> Python
                        </p>
                        <p>
                            <span>Years Of Experience:</span> 15+
                        </p>
                        </div>
                        <label>
                            <input type="checkbox" class="toggleCheckbox">
                            <div class="toggleSwitch"></div>
                        </label>
                    </div>
                    <div class="infos">
                        <h3>Billing  Information</h3>
                        <div class="info">
                            <p>
                            <span>Payment Method:</span>  Paypal
                        </p>
                        <p>
                            <span>Email:</span>  email@website.com
                        </p>
                        <p>
                            <span>Subscription:</span> Monthly
                        </p>
                        </div>
                        <label>
                            <input type="checkbox" class="toggleCheckbox" checked>
                            <div class="toggleSwitch"></div>
                        </label>
                    </div>


                </div>
            </div>
            <!-- box-2 -->
            <div class="box">
                <h3>My Skills</h3>
                <p>Complete Skills Lists</p>
                <div class="skills">
                    <span>HTML</span>
                    <span>Pugjs</span>
                    <span>HAML</span>
                </div>
                <div class="skills">
                    <span>CSS</span>
                    <span>SASS</span>
                    <span>Stylus</span>
                </div>
                <div class="skills">
                    <span>JavaScript</span>
                    <span>TypeScript</span>
                </div>
                <div class="skills">
                    <span>Vuejs</span>
                    <span>Reactjs</span>
                </div>
                <div class="skills">
                    <span>Jest</span>
                    <span>Jasmine</span>
                </div>
                <div class="skills">
                    <span>PHP</span>
                    <span>Laravel</span>
                </div>
                <div class="skills">
                    <span>Python</span>
                    <span>Django</span>
                </div>
            </div>
            <!-- box-3 -->
            <div class="box">
                <h3>Latest Activities</h3>
                <p class="text">Latest Activities Done By The User</p>
                <section class="activities">
                    <div class="active">
                        <img src="../assets/imgs/active1.png" alt="active">
                        <div>
                            <span>Store</span>
                            <p>Bought The Mastering Python Course</p>
                        </div>
                    </div>
                    <div class="time">
                        <span>18:10</span>
                        <p>Yesterday</p>
                    </div>
                </section>
                <section class="activities">
                    <div class="active">
                        <img src="../assets/imgs/active2.png" alt="active">
                        <div>
                            <span>Academy</span>
                            <p>Bought The Mastering Python Course</p>
                        </div>
                    </div>
                    <div class="time">
                        <span>18:10</span>
                        <p>Yesterday</p>
                    </div>
                </section>
                <section class="activities">
                    <div class="active">
                        <img src="../assets/imgs/active3.png" alt="active">
                        <div>
                            <span>Badges</span>
                            <p>Bought The Mastering Python Course</p>
                        </div>
                    </div>
                    <div class="time">
                        <span>18:10</span>
                        <p>Yesterday</p>
                    </div>
                </section>
                <section class="activities">
                    <div class="active">
                        <img src="../assets/imgs/active1.png" alt="active">
                        <div>
                            <span>Store</span>
                            <p>Bought The Mastering Typescipt Course</p>
                        </div>
                    </div>
                    <div class="time">
                        <span>18:10</span>
                        <p>Yesterday</p>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>
