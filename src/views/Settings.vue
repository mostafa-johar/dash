<template>
    <div class="settings">
        <h1 class="title">Settings</h1>
        <section class="content">
            <!-- box-1 -->
            <div class="box">
                <h3>Site control</h3>
                <p>Control The Website If There Is Maintenance</p>
                <div class="webControl">
                    <div class="openClose">
                        <span>Website Control</span>
                        <P>Open/Close Website And Type The Reason</P>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" class="toggleCheckbox">
                            <div class="toggleSwitch"></div>
                        </label>
                    </div>
                </div>
                <textarea placeholder="Close Message Content"></textarea>
            </div>
            <!-- box-2 -->
            <div class="box">
                <h3>General info</h3>
                <p>General Information About Your Account</p>
                <form>
                    <div class="input">
                        <label for="fname">First Name</label>
                        <input type="text" placeholder="First name" id="fname">
                    </div>
                    <div class="input">
                        <label for="lname">Last Name </label>
                        <input type="text" placeholder="Last name" id="lname">
                    </div>

                    <div class="input">
                        <div>
                            <label for="mail" class="mail"> Email </label>
                            <span class="inputmail">
                                <input type="text" placeholder="J@nn.sa" id="mail" disabled>
                                <span>Change</span>
                            </span>

                        </div>

                    </div>


                </form>
            </div>
            <!-- box-3 -->
            <div class="box">
                <h3>Security Info</h3>
                <p>Security Information About Your Account</p>
                <div class="info">
                    <div>
                        <span>Password</span>
                        <P>Last Change On 25/10/2021</P>
                    </div>
                    <button>Change</button>
                </div>
                <div class="info">
                    <div>
                        <span>Two-Factor Authentication</span>
                        <P>Enable/Disable The Feature</P>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" class="toggleCheckbox">
                            <div class="toggleSwitch"></div>
                        </label>
                    </div>
                </div>
                <div class="info">
                    <div>
                        <span>Devices</span>
                        <P>Check The Login Devices List</P>
                    </div>

                    <button>Devices</button>
                </div>
            </div>

            <!-- box-4 -->
            <div class="box">
                <h3>Social info</h3>
                <p>Social Media Information</p>
                <form>
                    <label>
                        <i class="fa-brands  fa-twitter"></i>
                        <input type="text" placeholder="Twitter User">
                    </label>
                    <label>
                        <i class="fa-brands  fa-facebook-f"></i>
                        <input type="text" placeholder="Facebook User">
                    </label>
                    <label>
                        <i class="fa-brands  fa-linkedin"></i>
                        <input type="text" placeholder="Linkedin User">
                    </label>
                    <label>
                        <i class="fa-brands  fa-youtube"></i>
                        <input type="text" placeholder="Youtube User">
                    </label>
                </form>
            </div>
            <!-- box-5 -->
            <div class="box">
                <h3>Widgets Control</h3>
                <p>Show/Hide Widgets</p>
                <form>
                    <label for="widget">
                        <input type="checkbox" id="widget" checked>
                        Quick Draft
                    </label>
                    <label for="widget">
                        <input type="checkbox" id="widget" checked>
                        Yealy Targets
                    </label>
                    <label for="widget">
                        <input type="checkbox" id="widget" checked>
                        Tickets Statistics
                    </label>
                    <label for="widget">
                        <input type="checkbox" id="widget" checked>
                        Latetest News
                    </label>
                    <label for="widget">
                        <input type="checkbox" id="widget">
                        Latest Tasks
                    </label>
                    <label for="widget">
                        <input type="checkbox" id="widget" checked>
                        Top Search Items
                    </label>
                </form>
            </div>
            <!-- box-6 -->
            <div class="box">
                <h3>Backup Manger</h3>
                <p>Controll Backup Time And Location</p>
                <form>
                    <div>
                        <input type="radio" id="Daily" name="daily" checked>
                        <label for="Daily">Daily</label>
                    </div>
                    <div>
                        <input type="radio" id="Weekly" name="daily">
                        <label for="Weekly">Weekly</label>
                    </div>
                    <div>
                        <input type="radio" id="Monthly" name="daily">
                        <label for="Monthly">Monthly</label>
                    </div>
                </form>
                <div class="info">
    
                        <input type="radio" name="megaman" id="Megaman" checked>
                    <div>
                        <label for="Megaman">
                            <i class="fa-solid fa-server"></i>
                            Megaman
                        </label>
                    </div>
                    <input type="radio" name="megaman" id="Sigma">
                    <div>
                        <label for="Sigma">
                            <i class="fa-solid fa-server"></i>
                            Sigma
                        </label>
                    </div>
                    <input type="radio" name="megaman" id="Zero">
                    <div>
                        <label for="Zero">
                            <i class="fa-solid fa-server"></i>
                            Zero
                        </label>
                    </div>
          

                </div>
            </div>
        </section>

    </div>
</template>
<script setup>

</script>