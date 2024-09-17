<template>
    <div class="section">
        <ContentList path="/blogs" v-slot="{ list }">
            <div class="blog-list" v-for=" article in list" :key="article._path">
                <BlogCard :article="article" :fake="true" :display-date="true" />
            </div>
        </ContentList>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>