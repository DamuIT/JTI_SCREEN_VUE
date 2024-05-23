<template >
<div class="main_block_complete">
    <div class="block_complete_header">
        <h2>Выполнен</h2>
        <h2>(10)</h2>
    </div>
    <div class="block_complete_body">
        <div class="block_order_complete">
            <div class="block_order_title">
                <cartComplete-components/> 
            </div>
        </div>
    </div>
</div> 
</template>
<script>
export default {
    
}
</script>
<style>
    .main_block_complete{
    width: 300px;
    height: 2160px;
    margin-left: 20px;
}
.block_complete_header{
    width: 300px;
    height: 50px;
    background-color: rgb(63, 233, 11);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: "Roboto", sans-serif;
    border-bottom-right-radius: 40px;
    gap: 10px;
}
.block_complete_body{
    width: 288px;
    height: 2160px;
    border-left: 1px dashed red;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 10px; */
}
.block_order_complete{
    width: 280px;
    height: 130px;
    margin-top: 3px;
    border-radius: 20px;
    border: 2px solid rgb(63, 233, 11);
    background-color: rgb(241, 232, 232);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>