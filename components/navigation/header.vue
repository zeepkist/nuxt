<script setup lang="ts">
    const transitionThreshold = 10
    const isLargeHeader = ref(window.scrollY < transitionThreshold)

    const handleScroll = () => {
        isLargeHeader.value = window.scrollY < transitionThreshold
    }

    window.addEventListener('scroll', handleScroll)
</script>

<template>
    <div :class="[$style.header, { [$style.largeHeader]: isLargeHeader }]">
        <nav>
            <div :class="$style.left">
                <RouterLink :to="{ name: 'index' }">Home</RouterLink>
                <RouterLink :to="{ name: 'cosmetics' }">Cosmetics</RouterLink>
                <RouterLink :to="{ name: 'adventure' }"
                    >Adventure Mode</RouterLink
                >
                <RouterLink :to="{ name: 'levels' }">Levels</RouterLink>
                <RouterLink :to="{ name: 'users' }">Users</RouterLink>
                <RouterLink :to="{ name: 'super-league' }"
                    >Super League</RouterLink
                >
                <RouterLink :to="{ name: 'events' }">Events</RouterLink>
                <RouterLink :to="{ name: 'mods' }">Mods</RouterLink>
                <a href="https://toolkist.netlify.app">Toolkist</a>
            </div>
            <div :class="$style.right">
                <NavigationColourMode />
            </div>
        </nav>
    </div>
</template>

<style module lang="less">
    .header {
        background: var(--card-background-colour);
        height: 4rem;
        display: flex;
        position: sticky;
        top: 0;
        transform: translateZ(0);
        transition: height 0.3s, background-color 0.15s;
        user-select: none;
        border-bottom: 1px solid var(--border-colour);
        z-index: 999;

        &.largeHeader {
            background: transparent;
            height: 6rem;
            transform: translateZ(0);
            transition: height 0.3s, background-color 0.15s;
            border-color: transparent;
        }

        nav {
            max-width: 100rem;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0 auto;

            @media screen and (max-width: 102rem) {
                padding: 0 1rem;
            }
        }

        nav > .left {
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            gap: 1rem;
        }

        nav > .right {
            flex: 1;
            text-align: right;
        }

        a {
            font-size: 0.75rem;
            color: var(--text-colour);
            transition: color 0.3s;
            text-transform: lowercase;

            &:hover,
            &:global(.router-link-active) {
                color: var(--accent-colour);
            }

            &:global(.router-link-exact-active) {
                pointer-events: none;
            }
        }
    }
</style>
