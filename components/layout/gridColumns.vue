<script setup lang="ts">
    const { columns = '1fr 22rem 22rem' } = defineProps<{
        columns?: string
    }>()
</script>

<template>
    <div
        :class="$style.container"
        :style="{ '--grid-template-columns': columns }">
        <div :class="$style.left">
            <slot name="left"></slot>
        </div>
        <div :class="$style.center">
            <slot name="center"></slot>
        </div>
        <div :class="$style.right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style module lang="less">
    .container {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        grid-template-areas: 'left center right';
        gap: 1rem;

        .left {
            grid-area: left;
        }

        .center {
            grid-area: center;
        }

        .right {
            grid-area: right;
        }
    }

    @media (max-width: 1300px) {
        .container {
            grid-template-columns: 1fr calc(50% - 2rem) calc(50% - 2rem);
            grid-template-areas:
                'left left left'
                'center center right';
        }
    }

    @media (max-width: 800px) {
        .container {
            grid-template-columns: 100%;
            grid-template-areas:
                'left'
                'center'
                'right';
        }
    }
</style>
