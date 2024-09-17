<template>
    <div class="hero">
        <h1>Technical solution to your technical problem</h1>
        <div class="hero-links">
            <NuxtLink to="/blogs">Github</NuxtLink>
            <NuxtLink to="/blogs">Linked-in</NuxtLink>
            <NuxtLink to="/blogs">Instagram</NuxtLink>
        </div>
        <button class="primary-btn" id="form-btn">Request a consultation</button>
    </div>
    <div class="section">
        <FeaturedBlogCard path="/blogs/" :where="{featured:true}"/>
        <BlogCarousel path="/blogs/" :where="{new:true}"/>
    </div>
</template>

<script setup>
  definePageMeta({
    layout: "landing",
  })
</script>

<style lang="scss" scoped>
   
</style>