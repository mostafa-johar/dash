<template>
    <div class="courses">
        <h1 class="title">Courses</h1>
        <section class="content">
            <div class="box" v-for="course in courses" :key="course.name">
                <img :src="getImg(course.mainImg)" alt="course">
                <div class="context">
                    <img :src="getImg(course.imgTeam)" alt="course">
                    <h4>{{course.name}}</h4>
                    <p>{{ course.pargraph }}</p>
                </div>
                <div class="number">
                    <span>Course Info</span>
                    <p>
                        <i class="fa fa-user"></i>{{course.views}}
                    </p>
                    <p>$ {{ course.salary }}</p>
                </div>
            </div>
        </section>

    </div>
</template>
<script>
import { useDashStore } from '../stores/DashStore';
export default {
    setup(){
        const {courses} = useDashStore();
        const getImg = (name) =>{
            return new URL(`../assets/imgs/${name}`,import.meta.url).href
        }

        return {courses,getImg}
    }
}
</script>