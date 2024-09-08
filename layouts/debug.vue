<template>
    <div class="container">
        <h1>container</h1>
        <div class="content">
            <h1>content</h1>
            <slot />
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .container{
        padding: 2em;
        border-style: solid;
        border-color: red;
    }
    .content{
        padding: 2em;
        border-style: solid;
        border-color: blue;
    }
    
</style>