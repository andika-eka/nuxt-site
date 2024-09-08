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
        <div class="card drop-shadow" id="featured-blog">
            <div class="card-thumbnail">
                <img src="/thumbnail/thumbnail-1.jpg" alt="">
            </div>
            <div class="card-content">
                <h1 class="card-title"> Tiltle of th featrued article</h1>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laborum quaerat ducimus sed debitis rerum voluptatibus accusamus itaque amet molestias reiciendis placeat accusantium voluptate officiis expedita, consequuntur quisquam cumque eligendi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ratione voluptatibus repellendus accusamus sequi quasi hic qui rerum quia quam temporibus non officiis a natus sapiente animi incidunt! Nulla, totam.
                </p>
                <div class="card-buttons">
                    <NuxtLink to="#" class ="link-text">Read more..</NuxtLink>
                </div>
            </div>
        </div>
        <div id="carousel-blog">
            <div class="card drop-shadow">
                <div class="card-thumbnail">
                    <img src="/thumbnail/thumbnail-1.jpg" alt="">
                </div>
                <div class="card-content">
                    <h1 class="card-title"> Tiltle of th featrued article</h1>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laborum quaerat ducimus sed debitis rerum voluptatibus accusamus itaque amet molestias reiciendis placeat accusantium voluptate officiis expedita, consequuntur quisquam cumque eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ratione voluptatibus repellendus accusamus sequi quasi hic qui rerum quia quam temporibus non officiis a natus sapiente animi incidunt! Nulla, totam.
                    </p>
                    <div class="card-buttons">
                        <NuxtLink to="#" class ="link-text">Read more..</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="card drop-shadow">
                <div class="card-thumbnail">
                    <img src="/thumbnail/thumbnail-1.jpg" alt="">
                </div>
                <div class="card-content">
                    <h1 class="card-title"> Tiltle of th featrued article</h1>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laborum quaerat ducimus sed debitis rerum voluptatibus accusamus itaque amet molestias reiciendis placeat accusantium voluptate officiis expedita, consequuntur quisquam cumque eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ratione voluptatibus repellendus accusamus sequi quasi hic qui rerum quia quam temporibus non officiis a natus sapiente animi incidunt! Nulla, totam.
                    </p>
                    <div class="card-buttons">
                        <NuxtLink to="#" class ="link-text">Read more..</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="card drop-shadow">
                <div class="card-thumbnail">
                    <img src="/thumbnail/thumbnail-1.jpg" alt="">
                </div>
                <div class="card-content">
                    <h1 class="card-title"> Tiltle of th featrued article</h1>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laborum quaerat ducimus sed debitis rerum voluptatibus accusamus itaque amet molestias reiciendis placeat accusantium voluptate officiis expedita, consequuntur quisquam cumque eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ratione voluptatibus repellendus accusamus sequi quasi hic qui rerum quia quam temporibus non officiis a natus sapiente animi incidunt! Nulla, totam.
                    </p>
                    <div class="card-buttons">
                        <NuxtLink to="#" class ="link-text">Read more..</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  definePageMeta({
    layout: "landing",
  })
</script>

<style lang="scss" scoped>
   
</style>