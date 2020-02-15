<template>
    <div class="app-wrapper"> 
        
        <div class="sidebar">

            <router-link to="/home" class="item" active-class="active">
                Home
            </router-link>          

            <router-link to="/about" class="item" active-class="active">
                About
            </router-link>            
            
        </div>


        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>