<template>
    <div class="main_block_dlyotbora">
            <div class="block_dlyotbora_header">
                <h2>ДЛЯ ОТБОРА /ПОПОЛНЕНИЕ</h2>
                <h2>(20 / 10)</h2>
            </div>
            <div class="block_dlyotbora_body">
                <div class="block_order_dlyotbora">
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
    .main_block_dlyotbora{
    width: 300px;
    height: 2160px;
    margin-left: 20px;
}
.block_dlyotbora_header{
    width: 300px;
    height: 50px;
    background-color: rgb(17, 185, 228);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: "Roboto", sans-serif;
    border-bottom-right-radius: 40px;
    gap: 10px;
}
.block_dlyotbora_body{
    width: 288px;
    height: 2160px;
    border-left: 1px dashed red;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 10px; */
}
.block_order_dlyotbora{
    width: 280px;
    height: 100px;
    margin-top: 3px;
    border-radius: 20px;
    border: 2px solid rgb(17, 185, 228);
    background-color: rgb(241, 232, 232);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>