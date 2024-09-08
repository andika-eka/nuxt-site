<template>
    <div class="card drop-shadow">
        <div class="card-thumbnail">
            <img :src="article.thumbnail" alt="">
        </div>
        <div class="card-content">
            <p class="card-top-text">
                {{ article.date }}
            </p>
            <a :href="article._path" class="link-text">
                <h1 class="card-title" v-if="fake"> {{ article.title }} [AI-generated]</h1>
                <h1 class="card-title"v-else> {{ article.title }}</h1>
            </a>
            <p class="card-text">{{ article.description }}
            </p>
        </div>
    </div>
</template>

<script setup>
const { article, fake } = defineProps(["article", "fake"])
</script>

<style lang="scss" scoped></style>