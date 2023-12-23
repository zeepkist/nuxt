<script setup lang="ts">
    const { href, title, version, author, description } = defineProps<{
        href?: string
        title?: string
        version?: string | number
        author?: string
        description?: string
        thumbnail?: string
    }>()
</script>

<template>
    <RouterLink
        v-if="href"
        :to="{ path: href }"
        :class="$style.card"
        :style="{ '--mod-thumbnail': `url(${thumbnail}` }">
        <img v-if="thumbnail" :src="thumbnail" alt="Mod Thumbnail" />
        <h3>
            {{ title }}
            <template v-if="version"> ({{ version }}) </template>
        </h3>

        <p>
            Created by <strong>{{ author }}</strong>
        </p>

        <p>{{ description }}</p>
    </RouterLink>
</template>

<style module lang="less">
    .card {
        background: var(--card-background-colour);
        border: 1px solid var(--border-colour);
        color: var(--text-colour);
        border-radius: 0.75rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        transition: border-color 0.3s;
        cursor: pointer;

        p {
            font-size: 0.9rem;
        }

        h2 {
            transition: color 0.3s;
        }

        &:hover {
            border-color: var(--accent-colour);
            transition: border-color 0.3s;

            p {
                color: var(--text-colour);
            }
        }

        img {
            height: 8rem;
            object-fit: cover;
            margin: -1rem -1rem 0;
        }

        /*
        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        &::before {
            background-image: var(--mod-thumbnail);
        }

        &::after {
            // backdrop-filter: blur(0.25rem);
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.75),
                rgba(0, 0, 0, 0.85)
            );
        }
        */
    }
</style>
