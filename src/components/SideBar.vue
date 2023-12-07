<template>
    <aside class="sidebar">
        <h3>ELjohar</h3>
        <ul>
            <router-link :to="link.linkName == 'Dashboard' ? '/' : link.linkName " v-for="link in links" :key="link.linkName">
                <i :class= "link.iconName"></i>
                <span>{{link.linkName }}</span>
            </router-link>
        </ul>
    </aside>
</template>
<script>
import {useDashStore} from '../stores/DashStore.js';
export default{
    setup(){
        const {links} = useDashStore()

        return {links}
    }
}


</script>
<style lang="scss" scoped>

    @mixin prefix($pro,$val){
        -webkit-#{$pro}:$val ;
        -ms-#{$pro}:$val ;
        -moz-#{$pro}:$val ;
        -o-#{$pro}:$val ;
        $pro : $val;
    }
.sidebar{
    width: 220px;
    min-height: 100vh;
    background-color: var(--white);
    padding: 15px;
    @include prefix(box-shadow,var(--shadow-sm));
    @media (max-width: 767px) {
        width: 80px;
        padding: 0;
    }
    h3{
        text-align: center;
        margin-top: 30px;
        margin-bottom: 50px;
        position: relative;
        @media (max-width: 767px) {
            font-size: 16px;
    }
    &:before{
        position: absolute;
        content: '';
        bottom: -18px;
        left: 50%;
        width: 50%;
        height: 2px;
        transform: translateX(-50%);
        @include prefix(border-radius,6px);
        background-color: var(--black);
        @media (max-width: 767px) {
            display: none;
        }
    }
    &::after{
        position: absolute;
        content: '';
        bottom: -28px;
        left: 50%;
        width: 15px;
        height: 15px;
        transform: translateX(-50%);
        @include prefix(border-radius,50%);
        background-color: var(--black);
        border: 3px solid var(--white);
        @media (max-width: 767px) {
            display: none;
        }

    }
    }
    ul{
        display :flex;
        flex-direction: column;
        margin: 15px;
        i{
            margin-right: 10px;
        }
        a{
            padding: 15px;
            color: var(--black);
            margin-bottom: 3px;
            &:hover{
                background-color: #f6f6f6;
            }

        }
        .router-link-active {
            background-color: #f6f6f6;
        }
    }
    span{
        @media (max-width: 767px) {
            display: none;
        }
    }
}

</style>