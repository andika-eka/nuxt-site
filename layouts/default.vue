<template>
    <div id="body">
        <div class="" id="navbar">
            <div>
                <ul class="nav" id="top-nav">
                    <li class="">
                        <NuxtLink id="logo" to="/"><NuxtImg src="/logo.png" /></NuxtLink>
                        <!-- <NuxtLink id="logo" to="/">logo</NuxtLink> -->
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
    <!-- <svg width="1000" height="1000" viewBox="0 0 512 512">
        <use xlink:href="#icomoon-ignore"/>
    </svg> -->
        <div class="default-container">
            <slot />
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
</style>