<template>
    
    <div>

        <button class="button p-4" :class="isToggled ? 'bg-green-500' : 'bg-red-500'" @click="toggle()">
            Click me
        </button>

    </div>

</template>

<script>

export default {
    name : "HomePage",

    mounted() {
        
        

    },

    data() {
        return{
            isToggled : false
        };
    },

    methods : {


        toggle() {
            if(this.isToggled === true) {
                this.isToggled = false;
            } else {
                this.isToggled = true;
            }

        }

    }
}
</script>

<style lang="scss" scoped>

    .button {
        color: #fff;
    }

</style>