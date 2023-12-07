<template>
    <div class="files">
        <h1 class="title">Files</h1>
        <section class="content">
            <!-- Right -->
            <div class="boxRight">
                <h2>Files Statistics</h2>
                <div class="statistic" v-for="(stat,index) in statistic" :key="stat.name">
                    <div class="info">
                        <i :class="`${stat.icons[index]} fa-lg`" :style="stat.style"></i>
                        <div>
                            <p>{{stat.name}}</p>
                            <span>{{stat.count}} Files</span>
                        </div>
                    </div>
                    <span class="memory">{{stat.memory}}GB</span>
                </div>
                <a class="upload">
                    <i class="fa-solid fa-angles-up"></i>
                    Upload
                </a>
            </div>
            <!-- Left -->
            <div class="boxleft">
                <div class="box" v-for="file in files" :key="file.name">
                    <i class="fa-solid fa-download"></i>
                    <div class="file-name">
                        <img :src="getImg(file.imgFile)" alt="fileImg">
                        <p>{{file.name}}</p>
                    </div>
                    <span class="job">{{ file.job }}</span>
                    <div class="info">
                        <span>{{file.date}}</span>
                        <span>{{file.memory}}MB</span>

                    </div>
                </div>

            </div> 

        </section>
    </div>
</template>
<script>
import { useDashStore } from '../stores/DashStore'
export default{
    setup(){
        const {statistic,files} = useDashStore();
        const getImg = (name) => {
            return new URL(`../assets/imgs/${name}`,import.meta.url).href;
        }

        return {statistic,files,getImg}
    }
}

</script>