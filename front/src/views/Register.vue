<template>
    <div class="wrapper">
        <div class="main">
            <register-main-component></register-main-component>
        </div>
    </div>
</template>

<script>
import RegisterMainComponent from '../components/auth/RegisterMainComponent'

export default {
    components: {
        registerMainComponent: RegisterMainComponent
    }
}
</script>

<style>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.main {
    margin: 100px 100px;
}
</style>