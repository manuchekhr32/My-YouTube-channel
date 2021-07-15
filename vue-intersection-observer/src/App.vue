<template>
    <div id="app">
        <div class="h100">Container 1</div>

        <div class="intersect">
            <Intersect @enter="inters(true, 'title')" @leave="inters(false, 'title')">
                <h1 class="title" :class="{'titleActive': ins.title}">Hello world!</h1>
            </Intersect>

            <Intersect @enter="inters(true, 'box1')" @leave="inters(false, 'box1')">
            <div class="box1" :class="{'box1Act': ins.box1}">BOX1</div>
            </Intersect>
        </div>
    </div>
</template>

<script>
import Intersect from "vue-intersect";
export default {
    name: 'App',

    data() {
        return {
            ins: {
                title: false,
                box1: false
            }
        }
    },

    methods: {
        inters(enter, target) {
            if (enter) {
                this.ins[target] = true
            } else {
                this.ins[target] = false
            }
        }
    },

    components: {
        Intersect
    }
}
</script>

<style>
.h100 {
    height: 150vh;
    background-color: dodgerblue;
}

.intersect {
    margin-top: 50px;
}

.intersect .title {
    text-align: center;
    font-size: 50px;
    transition: 1s;
    transform: translateY(50px);
    opacity: 0;
}

.titleActive {
    transform: translateY(0px) !important;
    opacity: 1 !important;
}

.intersect .box1 {
    width: 200px;
    height: 200px;
    background-color: red;
    transform: scale(0);
    filter: opacity(0);
    transition: 1s;
}

.box1Act {
    filter: opacity(1) !important;
    transform: scale(1) !important;
}
</style>
