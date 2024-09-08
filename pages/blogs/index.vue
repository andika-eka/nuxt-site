<template>
    <div class="section">
        <ContentList path="/blogs/fake" v-slot="{ list }">
            <div class="blog-list" v-for=" article in list" :key="article._path">
                <BlogCard :article="article" :fake="true"/>
            </div>
        </ContentList>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>