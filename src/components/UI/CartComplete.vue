<template lang="">
        <div class="order_code order_common_block_title">
            <h2 class="order_code--h2 common_block_h2">
            Алматы 20,02,24
            </h2>
        </div>
    <div class="order_addr order_common_block_title">
        <h2 class="order_addr--h2 common_block_h2">Kazakhstan g.Almaty ul.Nayryzbay Batyra ,h.34</h2>
    </div>
    <div class="order_date_exp order_common_block_title">
        <h2 class="order_date_exp--h2 common_block_h2">21.02.2024 09:00</h2>
        <h2 class="order_status_exp--h2 common_status_block_h2">Выполнен</h2>
    </div>
</template>
<script>
export default {
    name: 'cartComplete-components'
}
</script>
<style>

.order_addr{
    width: 280px;
    padding-top: 5px;
}
.block_order_title{
    width: 260px;
    height: 100px;
    margin-top: 5px;
}
.common_block_h2{
    font-weight: 800;
}
.common_block_p{
    font-weight: 600;
}
.order_common_block_title{
    line-height: 20px;
    font-family: "Roboto", sans-serif;
}
.order_auto_number{
    width: 250px;
} 
.common_status_block_h2{
    font-weight: 800;
    text-align: center;
    font-size: 24px;
}
</style>