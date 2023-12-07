<template>
    <div class="projects">
        <h1 class="title">Projects</h1>
        <section class="content">
            <div class="box" v-for="project in projects" :key="project.title">
                <div class="headtitle">
                    <h3>{{project.title}}</h3>
                    <span>{{project.date}}</span>
                </div>
                <p>{{project.pargraph}}</p>
                <div class="imgs">
                    <img :src="getImg(img)" alt="team" v-for="img in project.imgs">
                </div>
                <div class="skills">
                    <span v-for="skill in project.skills">{{skill}}</span>
                </div>
                <div class="progress">
                    <div><span :style="project.style" ></span></div>
                    <span class="salary">$ {{project.salary}}</span>
                </div>


            </div>
        </section>
    </div>
</template>
<script>
    import { useDashStore } from '../stores/DashStore';
export default{
    setup(){
        const {projects} = useDashStore();
        const getImg = (name) =>{
            return new URL(`../assets/imgs/${name}`,import.meta.url).href
        }

        
        return {projects,getImg};
    }

}


</script>