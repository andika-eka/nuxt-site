<template>
    <ul>
        <li v-for="link of value.body.toc.links" :key="link.id">
            <a :href="`#${link.id}`">{{ link.text }}</a>
            <ul>
                <li v-for="link1 of link.children" :key="link1.id">
                    <a :href="`#${link1.id}`">{{ link1.text }}</a>

                </li>
            </ul>

        </li>
    </ul>
</template>

<script setup>

defineProps({
    value: {
        type: Object,
        required: false,
        default: () => ({})
    },
})
</script>

<style lang="scss" scoped></style>