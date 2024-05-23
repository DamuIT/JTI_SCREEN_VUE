<template>
<div class="main_title">
    <div class="main_title_body">
        <div class="main_title_logo">
                <img src="../assets/LogoWo.png" alt="">
        </div>
        <div class="main_title-text">
                <h1 class="main_title-text--h1">ОТГРУЗКА ПО КЛИЕНТУ JTI</h1>
        </div>
        <div class="main_title-time">
                <h2>Время обновления: {{time}}</h2>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
    return {
      time: new Date().toLocaleTimeString()
    };
  },
  mounted() {
    this.startClock();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    startClock() {
      this.interval = setInterval(() => {
        this.time = new Date().toLocaleTimeString();
      }, 1000);
    }
  }
}

</script>
<style scoped>

.main_title{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
}
.main_title_body{
    width: 90%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
 }
img{
    width: 245px;
    height: 60px;
}
.main_title-text{
    width: 800px;
    height: 100px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main_title-time{
    width: 250px;
    height: 100px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main_title-text--h1{
    font-family: "Roboto", sans-serif;
    font-size: 48px;
    font-weight: 900;
}
 .main_title-time{
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 900;
} 
</style>