<template>
    <div id="body">
        <div class="" id="navbar">
            <div>
                <ul class="nav" id="top-nav">
                    <li class="">
                        <NuxtLink id="logo" to="/">
                            <NuxtImg src="/logo.png" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blogs">Blogs</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/projects">Project</NuxtLink>
                    </li>
                    <li class="nav-right">
                        <NuxtLink to="/about">About me</NuxtLink>
                    </li>
                    <li class="nav-right" id="search-button"></li>
                    <li class="nav-right" id="search-bar"></li>

                </ul>
            </div>
        </div>
        <div class="flex-container" id="">
            <div class="toc-article">
                <ContentDoc v-slot="{ doc }">
                    <TableOfContents :value="doc" />
                </ContentDoc>
            </div>
            <ContentDoc v-slot="{ doc }">
                <div id="article-container">
                    <article>
                        <p class="date">{{ doc.date }}</p>
                        <h1 class="title">{{ doc.title }}</h1>
                        <p class="desc">{{ doc.description }}</p>
                        <div class="render">
                            <ContentRenderer :value="doc" />
                        </div>
                    </article>
                </div>
            </ContentDoc>
            <div class="rec-article">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste culpa magnam porro
                    assumenda, blanditiis sit eum sequi dicta, veritatis deserunt possimus. Odio maiores neque, eaque
                    modi ducimus velit enim.</p>
            </div>
        </div>
        <div class="footer" id="footer">
            <ul class="social">
                <li>
                    <NuxtLink class="link-text" to="#body">Github</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="link-text" to="#service">Linked-in</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="link-text" to="#contact">Instagram</NuxtLink>
                </li>
            </ul>
            <p id="copyright">
                Copyright @ 2024
            </p>
        </div>
    </div>
</template>


<style lang="scss">
@use "~/assets/scss/main.scss";
@use "~/assets/scss/article.scss";
</style>