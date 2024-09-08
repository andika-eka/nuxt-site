<template>
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos temporibus nemo modi animi, error delectus voluptates sit, quod fugiat iure explicabo? Nobis eveniet doloremque voluptate repudiandae ea vero, sunt veniam?</p>
        <p>{{ data }}</p>
    </div>
</template>

<script setup>
    const {data} = await useFetch("/api/blogs")
</script>

<style lang="scss" scoped>

</style>