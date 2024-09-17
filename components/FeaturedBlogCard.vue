<template>
    <ContentQuery :path="path" :where="where" :limit="1">
        <template #default="{ data }">
            <div id="featured-blog" v-for=" article in data" :key="article._path">
                <BlogCard :article="article" />
            </div>
        </template>
    </ContentQuery>
</template>

<script setup>
const {path, where} = defineProps(["path", "where"])
</script>

<style lang="scss" scoped></style>