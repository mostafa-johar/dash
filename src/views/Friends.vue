<template>
    <div class="friends">
        <h1 class="title">Friends</h1>
         <div class="content">
            <div class="box" v-for="friend in friends" :key="friend.name">
                <div class="contact">
                    <i class="fa-solid fa-phone"></i>
                    <i class="fa-regular fa-envelope"></i>
                </div>
                <div class="bio">
                    <img :src="getImg(friend.img)" alt="friend">
                    <h4>{{friend.name}}</h4>
                    <p>{{friend.job}}</p>
                </div>
                <div class="icons">
                    <div>
                        <i class="fa-regular fa-face-smile fa-fw"></i>
                        <span>{{friend.fcount}} Friends</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-code-commit fa-fw"></i>
                        <span>{{friend.pcount}} Projects</span>
                    </div>
                    <div>
                        <i class="fa-regular fa-newspaper fa-fw"></i>
                        <span>{{friend.Acount}} Articles</span>
                    </div>
                </div>
                <div class="info">
                    <span>joined {{friend.date}}</span>
                    <div>
                        <span>profile</span>
                        <span>Remove</span>
                    </div>
                </div>
            </div>

         </div>

    </div>
</template>

<script>
import { useDashStore } from '../stores/DashStore'
export default{
    setup(){
        const {friends} = useDashStore()
        const getImg = (name) =>{
            return new URL(`../assets/imgs/${name}`,import.meta.url).href
        }
        return {friends,getImg}
    }
}

</script>