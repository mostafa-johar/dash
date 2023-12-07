<template>
    <div class="dashboard">
        <h1 class="title">Dashboard</h1>
        <div class="content">
            <!-- box-1 -->
            <section class="box">
                <section class="profile">
                    <div class="txt">
                        <h2>welcome</h2>
                        <p>ELjohar</p>
                    </div>
                    <img src="../assets/imgs/welcome.png" alt="welcome">
                </section>
                <img src="../assets//imgs/Avatar.png" alt="Avatar" class="imgProfile">
                <div class="status">
                    <div>
                        <p>Mostafa Johar</p>
                        <span>Developer</span>
                    </div>
                    <div>
                        <p>80</p>
                        <span>Projects</span>
                    </div>
                    <div>
                        <p>$8500</p>
                        <span>Earned</span>
                    </div>
                </div>
                <router-link to="profile">profile</router-link>
            </section>
            <!-- box-2 -->
            <section class="box">
                <h3>Quick Draft</h3>
                <p>Write A Draft for Your Idea</p>
                <form>
                    <input type="text" name="title" placeholder="Title">
                    <textarea placeholder="Your Thought"></textarea>
                    <input type="submit" value="Save">
                </form>
            </section>
            <!-- box-3 -->
            <section class="box">
                <h3>Yearly Targets</h3>
                <p>Targets Of The Year</p>
                <div class="targets">
                    <!-- target-1 -->
                    <div class="target">
                        <div class="imgTarget">
                            <i class="fa-solid fa-dollar-sign fa-lg"></i>
                        </div>
                        <div class="progressTarget">
                            <h4>Money</h4>
                            <p>$20.000</p>
                            <div class="progress">
                                <span class="precentage">
                                    <span>80%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- target-2 -->
                    <div class="target">
                        <div class="imgTarget">
                            <i class="fa-solid fa-code fa-lg"></i>
                        </div>
                        <div class="progressTarget">
                            <h4>Projects</h4>
                            <p>24</p>
                            <div class="progress">
                                <span class="precentage">
                                    <span>55%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- target-3 -->
                    <div class="target">
                        <div class="imgTarget">
                            <i class="fa-solid fa-user fa-lg"></i>
                        </div>
                        <div class="progressTarget">
                            <h4>Team</h4>
                            <p>12</p>
                            <div class="progress">
                                <span class="precentage">
                                    <span>75%</span>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <!-- box-4 -->
            <section class="box">
                <h3>Tickets Statistics</h3>
                <p>Everything About Support Tickets</p>
                <div class="tickets">
                    <!-- ticket-1 -->
                    <div class="ticket">
                        <i class="fa-regular fa-rectangle-list fa-2x"></i>
                        <p>3000</p>
                        <span>Total</span>
                    </div>
                    <!-- ticket-2 -->
                    <div class="ticket">
                        <i class="fa-solid fa-spinner fa-2x"></i>
                        <p>500</p>
                        <span>Pending</span>
                    </div>
                    <!-- ticket-3 -->
                    <div class="ticket">
                        <i class="fa-regular fa-circle-check fa-2x"></i>
                        <p>5100</p>
                        <span>Closed</span>
                    </div>
                    <!-- ticket-4 -->
                    <div class="ticket">
                        <i class="fa-regular fa-rectangle-xmark fa-2x"></i>
                        <p>100</p>
                        <span>Deleted</span>
                    </div>
                </div>
            </section>
            <!-- box-5 -->
            <section class="box">
                <h3>Latest News</h3>
                <div class="news" v-for="news in News" :key="news.num">
                    <img :src="getImg(news.imgurl)" alt="news">
                    <div class="newstxt">
                        <div class="txt">
                            <h4>{{ news.title }}</h4>
                            <p>{{ news.pargraph }}</p>
                        </div>
                        <span class="day">{{ news.num }} Days Ago</span>

                    </div>

                </div>
            </section>
            <!-- box-6 -->
            <section class="box">
                <h3>Latest Tasks</h3>
                <div class="tasks" v-for="task in tasks" :key="task.title">
                    <div class="tasktxt">
                        <h4 :class="{ done: task.done }">{{ task.title }}</h4>
                        <p :class="{ done: task.done }">{{ task.pargraph }}</p>
                    </div>
                    <i :class="`delete  ${task.del} `" v-bind:class="{ done: task.done }"
                        @click="() => task.done = !task.done"></i>
                </div>
            </section>
            <!-- box-7 -->
            <section class="box">
                <h3>Top Search Items</h3>
                <div class="keyword">
                    <span>keyword</span>
                    <span>Search Count</span>
                </div>
                <div class="items" v-for="item in items" :key="item.item">
                    <p class="item">{{ item.item }}</p>
                    <span class="count">{{ item.count }}</span>
                </div>
            </section>
            <!-- box-8 -->
            <section class="box">
                <h3>Latest Uploads</h3>
                <div class="uploads" v-for="upload in uploads" :key="upload.name">
                    <div class="upload">
                        <img :src="getImg(upload.img)" alt="fileImg">
                        <div class="file">
                            <p>{{ upload.name }}</p>
                            <span>{{ upload.describe }}</span>
                        </div>
                    </div>
                    <span class="size">{{ upload.size }}mb</span>
                </div>
            </section>
            <!-- box-9 -->
            <section class="box">
                <h3>Last project progress</h3>
                <ul>
                    <li v-for="last in lasts" :key="last.name">{{ last.name }}</li>
                </ul>
            </section>
            <!-- box-11 -->
            <section class="box">
                <h3>Reminders</h3>
                <ul>
                    <li v-for="remind in reminds" :key="remind.pargraph" :style="`--i:${remind.color}`">
                        <p>{{ remind.pargraph }}</p>
                        <span>{{ remind.date }}</span>
                    </li>
                </ul>
            </section>
            <!-- box-11 -->
            <section class="box">
                <h3>Latest Post</h3>
                <div class="aboutme">
                    <img src="../assets//imgs/Avatar.png" alt="avatar">
                    <div class="about">
                        <p>Mostafa Johar</p>
                        <span>About 3 Hours Ago</span>
                    </div>
                </div>
                <p>
                    You can fool all of the people some of the time,
                    and some of the people all of the time,
                    but you can't fool all of the people all of the time
                </p>
                <div class="info">
                    <div class="likes">
                        <i class="fa-regular fa-heart"></i>
                        <span>1.8k</span>
                    </div>
                    <div class="comments">
                        <i class="fa-regular fa-comments"></i>
                        <span>500</span>
                    </div>
                </div>
            </section>
            <!-- box-12 -->
            <section class="box">
                <h3>Socail Media Stats</h3>
                <ul>
                    <li v-for="social in socials" :key="social.name" :style="[`--i:${social.bg}`, `--l:${social.bgL}`]">
                        <i :class="social.i"></i>
                        <div class="info">
                            <p>{{ social.pargraph }}</p>
                            <span>{{ social.btn }}</span>
                        </div>
                    </li>
                </ul>
            </section>
            <!-- box- 13 -->
            <section class="box">
                <h2>project</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Finish Date</th>
                        <th>Client</th>
                        <th>price</th>
                        <th>Team</th>
                        <th>Status</th>
                    </tr>
                    <tr v-for="(t,i) in tables" :key="t.name" :style="`--i:${t.color}`">
                        <td>{{ t.name }}</td>
                        <td>{{ t.fDate }}</td>
                        <td>{{t.client}}</td>
                        <td>{{ t.price }}</td>
                        <td>
                            <img :src="getImg(tt)" alt="team" v-for="tt in t.team">
                        </td>
                        <td>
                            <span>{{t.status}}</span>
                        </td>
                    </tr>
                </table>

            </section>
        </div>



    </div>
</template>
<script>
import { useDashStore } from '../stores/DashStore'
export default {
    setup() {
        const { News, tasks, items, uploads, lasts, reminds, socials , tables} = useDashStore();
        const getImg = (name) => {
            return new URL(`../assets/imgs/${name}`,import.meta.url).href;
        }

        return { News, tasks, items, uploads, lasts, reminds, socials ,tables,getImg }
    }
}
</script>
