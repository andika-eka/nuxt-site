<template>
    <ContentQuery :path="path" :where="where">
        <template #default="{ data }">
            <div id="carousel-blog">
                <span  v-for=" article in data" :key="article._path">
                    <BlogCard :article="article"/>
                </span>
                <span  v-for=" article in data" :key="article._path">
                    <BlogCard :article="article"/>
                </span>
            </div>
        </template>
    </ContentQuery>
</template>

<script setup>
const {path, where} = defineProps(["path", "where"])
</script>

