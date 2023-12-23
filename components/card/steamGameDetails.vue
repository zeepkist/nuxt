<script setup lang="ts">
    interface Data {
        name: string
        short_description: string
        background: string
        price_overview: {
            final_formatted: string
        }
    }

    const { data } = await useFetch<Data>('/api/steamGameDetails')

    console.debug('app details', data)
</script>

<template>
    <div
        v-if="data"
        :class="$style.callToAction"
        :style="{ '--background-image': `url(${data?.background})` }">
        <h1>Get {{ data?.name }} on Steam</h1>
        <p>{{ data?.short_description }}</p>
        <div :class="$style.buyGame">
            <p :class="$style.cost">
                {{ data?.price_overview?.final_formatted }}
            </p>
            <a
                href="https://steamcommunity.com/app/1440670/"
                target="_blank"
                rel="noopener noreferrer">
                Buy
            </a>
        </div>
    </div>
</template>

<style module lang="less">
    .callToAction {
        display: flex;
        flex-direction: column;
        place-content: center;
        background-image: var(--background-image);
        background-size: cover;
        background-size: 150%;
        background-position: center;
        background-repeat: no-repeat;
        height: 15rem;
        border: 1px solid var(--border-colour);
        border-radius: var(--border-radius);
        text-align: center;
        padding: 1rem;
        gap: 1rem;

        [data-theme='dark'] & {
            background-color: #0002;
        }

        .buyGame {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin: 1rem 1rem 0 0;
        }

        .cost {
            margin-right: 1rem;
            font-weight: 800;
            opacity: 0.75;
        }

        a {
            color: var(--text-colour);
            border: 1px solid var(--accent-colour);
            border-radius: calc(var(--border-radius) / 1.5);
            padding: 0.25rem 2rem;
            font-weight: 800;
        }
    }
</style>
