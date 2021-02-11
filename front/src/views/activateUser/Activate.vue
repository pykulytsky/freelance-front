<template>
    <div class="main">
        Hello
    </div>
</template>

<script>
export default {
    mounted() {
        this.$http.post(
            'auth/activate/' + this.$router.query['code']
        ).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.response.data)
        })
    }
}
</script>