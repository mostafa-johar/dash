<template>
    <div class="plans">
        <h1 class="title">Plans</h1>
        <section class="content">
            <div class="box" :style="`--i :${plan.colour}`" v-for="plan in plans">
                <div class="top">
                    <h2>{{ plan.name }}</h2>
                    <div class="price">
                        <span>$</span>
                        {{ plan.salary }}
                    </div>
                </div>
                <ul class="info">
                    <li v-for="(p, index) in plan.li">
                        <span>
                            <i :class="`${plan.icons[index]}`"></i>
                            {{ p }}
                        </span>
                        <i class="fa-solid fa-circle-info help"></i>

                    </li>
                </ul>
                <a class="join">join</a>
            </div>
        </section>
    </div>
</template>
<script>
import { useDashStore } from '../stores/DashStore'
export default {
    setup() {
        const { plans } = useDashStore()
        return { plans };
    }
}

</script>