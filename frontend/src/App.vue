<template>
    <div class="sidenav">
    <router-link to="home">Home</router-link>
    <router-link to="helloworld">Hello World</router-link>
    <router-link to="users">Users</router-link>
    <router-link to="aboutme">About me</router-link>
    </div>

<div class="main">
    <div class="container">
    
        <router-view></router-view>
    </div>
</div>

</template>

<script>
    export default {
        name : 'App',
        
        data(){
            return {
             
            };
        },
        methods : {
           
        }
        
    }

</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav a.router-link-active {
    font-weight: bold;
    color: white
}

.main {
  margin-left: 200px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>