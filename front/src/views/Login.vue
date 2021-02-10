<template>
    <div class="wrapper">
        <div class="main">
            <login-main-component></login-main-component>
        </div>
    </div>
</template>

<script>
import LoginMainComponent from '../components/auth/LoginMainComponent'

export default {
    components: {
        loginMainComponent: LoginMainComponent
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