<template>
    <div class="footer">
        <div class="footer-div">
            <b>Lorem ipsum dolor sit.</b>
            <b>Lorem ipsum dolor sit.</b>
            <b>Lorem ipsum dolor sit.</b>
            <b>Lorem ipsum dolor sit.</b>
        </div>
        <div class="footer-div">
            <b>Lorem ipsum dolor sit.</b>
            <b>Lorem ipsum dolor sit.</b>
            <b>Lorem ipsum dolor sit.</b>
            <b>Lorem ipsum dolor sit.</b>
        </div>
        <div class="footer-div">
            <b>Lorem ipsum dolor sit.</b>
            <b>Lorem ipsum dolor sit.</b>
            <b>Lorem ipsum dolor sit.</b>
            <b>Lorem ipsum dolor sit.</b>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.footer {
    background-color: #2c3e50;
    display: flex;
    padding-left: 30px;
    padding-right: 30px;
    justify-content: space-around;
    align-items: center;
}

.footer-div {
    display: flex;
    flex-direction: column;
    margin: 75px 50px;
}

.footer-div b {
    margin: 10px 0;
    color: white;
}

</style>