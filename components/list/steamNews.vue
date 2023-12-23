<script setup lang="ts">
    import { type SteamNewsItem } from '~/types/steam.js'

    const { type } = defineProps<{
        type: 'patchnotes' | 'events'
    }>()

    const { data } = await useFetch<SteamNewsItem[]>(
        `/api/${type === 'patchnotes' ? 'steamNews' : 'steamContests'}`
    )
</script>

<template>
    <div :class="$style.container">
        <h2 :class="$style.header">
            {{ type === 'patchnotes' ? 'Latest Updates' : 'Official Events' }}
        </h2>
        <div :class="$style.list">
            <CardSteamNews v-for="item in data" :key="item.gid" :item="item" />
        </div>
    </div>
</template>

<style module lang="less">
    .container {
        display: flex;
        flex-direction: column;
        padding: 1rem 1rem;

        background: var(--card-background-colour);
        border: 1px solid var(--border-colour);
        border-radius: var(--border-radius);
    }

    .header {
        height: 2rem;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
</style>
