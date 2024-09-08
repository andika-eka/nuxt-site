<template>
    <div class="feature-img">
        <img class="drop-shadow" :src="src" alt="">
        <div class="image-subtext">
            <div class="image-source">
                <p>
                    {{credit }}
                </p>
            </div>
            <div class="image-desc">
                <p>
                    {{ desc }}
                </p>

            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    src: {
        type: String
    },
    desc: {
        type: String
    },
    credit: {
        type: String
    }
})
</script>

<style lang="scss" scoped></style>