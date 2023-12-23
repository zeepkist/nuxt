<script setup lang="ts">
    import { format, formatDistanceToNowStrict } from 'date-fns'

    import { type SteamNewsItem } from '~/types/steam.js'

    const { item } = defineProps<{
        item: SteamNewsItem
    }>()

    const formattedDate = formatDistanceToNowStrict(item.date * 1000, {
        addSuffix: true,
        roundingMethod: 'round'
    })

    const formattedTitle = item.title
        .replace('Zeepkist Awesome Alpha - ', '')
        .replace('Zeepkist Super League', 'Super League')

    const isContest =
        item.title.startsWith('Level Contest - ') ||
        item.title.startsWith('Zeepkist Super League - ')

    const isNew = isContest
        ? item.date * 1000 > Date.now() - 1000 * 60 * 60 * 24 * 7 * 2.714_286 // 2w5d
        : item.date * 1000 > Date.now() - 1000 * 60 * 60 * 24 * 7 // 7d
</script>

<template>
    <a :href="item.url" :class="$style.card" :title="item.title">
        <h3>{{ formattedTitle }}</h3>
        <p :title="format(item.date * 1000, 'yyyy-MM-dd HH:mm:ss')">
            {{ formattedDate }}
            <span v-if="isNew" :class="$style.new">New</span>
        </p>
    </a>
</template>

<style module lang="less">
    .card {
        border: 1px solid var(--border-colour);
        margin: 0 -1rem;
        padding: 0.75rem 1rem;

        color: var(--text-colour);
        transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
        border-radius: 0.75rem;
        font-size: 0.75rem;
        flex: 1;
        position: relative;

        min-height: 5rem;
        max-height: 5rem;
        overflow: hidden;

        cursor: pointer;

        h3 {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 0.875rem;
        }

        &:hover {
            color: var(--accent-colour);
            border-color: var(--accent-colour);
            transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
        }
    }

    .new {
        color: var(--accent-colour);
        position: absolute;
        right: 1rem;
    }
</style>
