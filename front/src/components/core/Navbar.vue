<template>
<vs-navbar center-collapsed v-model="active">
    <template #left>
        <img src="/logo2.png" alt="">
    </template>
    <vs-navbar-item :active="active == 'guide'" id="guide">
        Jobs
    </vs-navbar-item>
    <vs-navbar-item :active="active == 'docs'" id="docs">
        Performers
    </vs-navbar-item>
    <vs-navbar-item :active="active == 'components'" id="components">
        Feed
    </vs-navbar-item>
    <vs-navbar-item :active="active == 'license'" id="license">
        About
    </vs-navbar-item>
    <template #right>
        <vs-button flat >Login</vs-button>
        <vs-button flat>Register</vs-button>
    </template>
    </vs-navbar>
</template>

<script>
export default {
    data: () => {
        return {
            active: 'guide'
        }
    }
}
</script>

<style>

</style>