<template >
    <div class="main_block_selected">
        <div class="block_selected_header">
            <h2>ОТОБРАН</h2>
            <h2>(20)</h2>
        </div>
    <div class="block_selected_body">
        <div class="block_order_selected">
           <cart-components/> 
        </div>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .main_block_selected{
    width: 300px;
    height: 2160px;
    margin-left: 20px;
}
.block_selected_header{
    width: 300px;
    height: 50px;
    background-color: rgb(228, 17, 210);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: "Roboto", sans-serif;
    border-bottom-right-radius: 40px;
    gap: 10px;
}
.block_selected_body{
    width: 288px;
    height: 2160px;
    border-left: 1px dashed red;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 10px; */
}
.block_order_selected{
    width: 280px;
    height: 100px;
    margin-top: 3px;
    border-radius: 20px;
    border: 2px solid rgb(228, 17, 210);
    background-color: rgb(241, 232, 232);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>