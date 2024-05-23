<template lang="">
        <div class="main_block_Expectation">
            <div class="block_Expectation_header">
                <h2>В ОЖИДАНИИ</h2>
                <h2>(20)</h2>
            </div>
            <div class="block_Expectation_body">
                <div class="block_order">
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
 .main_block_Expectation{
    width: 300px;
    height: 2160px;
    margin-left: 20px;
}
.block_Expectation_header{
    width: 300px;
    height: 50px;
    background-color: rgb(243, 100, 18);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: "Roboto", sans-serif;
    border-bottom-right-radius: 40px;
    gap: 10px; 
}
.block_Expectation_body{
    width: 288px;
    height: 2160px;
    border-left: 1px dashed red;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.block_order{
    width: 280px;
    height: 100px;
    margin-top: 3px;
    border-radius: 20px;
    border: 2px solid rgb(243, 100, 18);
    background-color: rgb(241, 232, 232);
    display: flex;
    justify-content: center;
}
</style>