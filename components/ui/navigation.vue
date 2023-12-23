import type { relative } from 'path';
<script setup lang="ts">
    import {
        IconBrandSteam,
        IconCaretDownFilled,
        IconMenu2,
        IconUserSquareRounded
    } from '@tabler/icons-vue'

    import {
        type UiNavigationMenuChildren,
        type UiNavigationMenuInternal,
        type UiNavigationMenuRoot,
        UiNavigationMenuVisibility
    } from '~/types/ui.js'

    const { menu } = defineProps<{
        menu: UiNavigationMenuRoot[]
    }>()

    const collapsedMenu = menu.filter(item => {
        const isVisible =
            item.visibility !== UiNavigationMenuVisibility.UnCollapsed

        if (!isVisible) {
            const otherMenu = menu.at(0) as UiNavigationMenuChildren
            if (otherMenu && hasChildren(item)) {
                otherMenu.children.push(...item.children)
            } else {
                otherMenu.children.push(item)
            }
        }

        return isVisible
    })

    const uncollapsedMenu = menu.filter(
        item =>
            item.visibility === UiNavigationMenuVisibility.UnCollapsed ||
            item.visibility === UiNavigationMenuVisibility.Always
    )

    const widthThreshold = 670
    const transitionThreshold = 10
    const heightOffsets = {
        large: 4,
        small: 1
    }

    const isLoggedIn = ref(false)
    const currentTrigger = ref('')
    const isLargeHeader = ref(window.scrollY < transitionThreshold)
    const isCollapsedHeader = ref(window.innerWidth < widthThreshold)
    const heightOffset = ref(
        isLargeHeader.value ? heightOffsets.large : heightOffsets.small
    )

    function hasChildren(object: any): object is UiNavigationMenuChildren {
        return 'children' in object
    }

    function isInternalLink(object: any): object is UiNavigationMenuInternal {
        return 'name' in object
    }

    const handleScroll = () => {
        isLargeHeader.value = window.scrollY < transitionThreshold
        heightOffset.value = isLargeHeader.value
            ? heightOffsets.large
            : heightOffsets.small
    }

    window.addEventListener('scroll', handleScroll)

    window.addEventListener('resize', () => {
        isCollapsedHeader.value = window.innerWidth < widthThreshold
    })
</script>

<template>
    <NavigationMenuRoot v-model="currentTrigger" :class="$style.root">
        <div :class="[$style.listContainer, { [$style.large]: isLargeHeader }]">
            <NavigationMenuList :class="$style.list">
                <NavigationMenuItem
                    v-for="item in isCollapsedHeader
                        ? collapsedMenu
                        : uncollapsedMenu"
                    :key="item.title">
                    <NavigationMenuTrigger
                        v-if="hasChildren(item) && item.title !== 'other'"
                        :class="$style.trigger">
                        {{ item.title }}
                        <IconCaretDownFilled
                            v-if="item.children"
                            :class="$style.smallIcon"
                            aria-hidden />
                    </NavigationMenuTrigger>

                    <NavigationMenuTrigger
                        v-else-if="hasChildren(item) && item.title === 'other'"
                        :class="$style.trigger">
                        <IconMenu2 :class="$style.icon" />
                    </NavigationMenuTrigger>

                    <RouterLink
                        v-else-if="isInternalLink(item)"
                        :class="$style.link"
                        :to="{ name: item.name }">
                        {{ item.title }}
                    </RouterLink>

                    <NavigationMenuLink
                        v-else-if="!hasChildren(item) && !isInternalLink(item)"
                        :class="$style.link"
                        :href="item.path">
                        {{ item.title }}
                    </NavigationMenuLink>

                    <NavigationMenuContent
                        v-if="hasChildren(item)"
                        :class="$style.content">
                        <ul :class="$style.children">
                            <li
                                v-for="child in item.children"
                                :key="child.title">
                                <NavigationMenuLink as-child>
                                    <div>{{ child.title }}</div>
                                    <p v-if="child.subtitle">
                                        {{ child.subtitle }}
                                    </p>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem v-if="isLoggedIn" :class="$style.profile">
                    <NavigationMenuTrigger :class="$style.trigger">
                        <IconUserSquareRounded :class="$style.icon" />
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul :class="$style.children">
                            <li>
                                <NavigationMenuLink as-child>
                                    <div>Profile</div>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink as-child>
                                    <div>Settings</div>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink as-child>
                                    <div>Log out</div>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem v-else :class="$style.profile">
                    <RouterLink :class="$style.link" to="/login">
                        login <IconBrandSteam :class="$style.icon" />
                    </RouterLink>
                </NavigationMenuItem>

                <NavigationMenuIndicator :class="$style.indicator">
                    <div :class="$style.arrow" />
                </NavigationMenuIndicator>
            </NavigationMenuList>
        </div>

        <NavigationMenuViewport
            :class="[$style.viewport, { [$style.large]: isLargeHeader }]" />
    </NavigationMenuRoot>
</template>

<style module lang="less">
    .root {
        top: 0;
        position: fixed;
        font-size: 0.75rem;
        width: 100vw;
        z-index: 1;
    }

    .listContainer {
        transition: background-color 0.15s, box-shadow 0.15s, height 0.3s;
        transform: translateZ(0);
        position: relative;
        background: var(--card-background-colour);
        box-shadow: var(--box-shadow);
        z-index: 998;

        &.large {
            background: transparent;
            box-shadow: 0 0 0 0 #0000;

            .list {
                height: var(--navigation-height-large);
            }
        }

        &:not(.large) .list {
            height: var(--navigation-height-small);
        }
    }

    .list,
    .viewport,
    .indicator,
    .listContainer > div {
        max-width: var(--page-width);
        margin: 0 auto;
    }

    .viewport,
    .listContainer > div {
        @media only screen and (max-width: 102rem) {
            margin: 0 1rem;
            max-width: calc(var(--page-width) - 2rem);
        }
    }

    .list {
        display: flex;
        list-style: none;
        width: 100%;
        place-items: center;
        transition: height 0.3s;
        position: relative;

        li:focus,
        li:focus-visible {
            outline: none;
        }
    }

    &.profile {
        display: flex;
        place-content: flex-end;
        place-items: flex-end;
        place-self: center;
        flex: 1;
        text-align: right;
    }

    .viewport {
        position: relative;
        transform-origin: top center;
        color: var(--text-colour-inverted);
        background: var(--card-background-colour-inverted);
        border-radius: var(--border-radius);
        border: 1px solid var(--border-colour-inverted);
        overflow: hidden;
        box-shadow: var(--box-shadow);
        height: var(--radix-navigation-menu-viewport-height);
        transition: width, height, 0.3s ease;
        z-index: 999;
        perspective: 200vw;

        &.large {
            margin-top: calc(-0.375rem * 3);
        }
        &[data-state='open'] {
            animation: scaleIn 0.2s ease;
        }
        &[data-state='closed'] {
            animation: scaleOut 0.2s ease;
        }
    }

    .trigger,
    .link {
        padding: 1rem 0.5rem;
        outline: none;
        user-select: none;
        font-weight: 400;
        border-radius: 4px;
        color: var(--text-colour);
        min-width: auto;
        white-space: nowrap;
        cursor: pointer;

        &:focus,
        &:focus-visible {
            outline: none;
            color: var(--accent-colour);
            //box-shadow: 0 0 0 2px var(--accent-colour);
        }

        &:focus-visible {
            outline: 1px solid var(--accent-colour);
        }

        &:hover {
            color: var(--accent-colour);
        }
    }

    .trigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.125rem;
    }

    .link {
        display: flex;
        place-items: center;
        justify-content: space-between;
        gap: 0.25rem;
    }

    .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        animation-duration: 0.2s;
        animation-timing-function: ease;

        &[data-motion='from-start'] {
            animation-name: enterFromLeft;
        }

        &[data-motion='from-end'] {
            animation-name: enterFromRight;
        }

        &[data-motion='to-start'] {
            animation-name: exitToLeft;
        }

        &[data-motion='to-end'] {
            animation-name: exitToRight;
        }
    }

    .indicator {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        height: 0.375rem;
        top: calc(100% - (0.375rem * v-bind(heightOffset)));
        z-index: -1;
        transition: width, transform 0.25s ease;
        overflow: hidden;

        &[data-state='visible'] {
            animation: fadeIn 0.2s ease;
        }

        &[data-state='hidden'] {
            animation: fadeOut 0.2s ease;
        }
    }

    .icon {
        width: 1.5rem;
        height: 1.5rem;
        stroke-width: 1.5px;
    }

    .smallIcon {
        position: relative;
        color: inherit;
        top: 1px;
        transition: transform 250ms ease;
        width: 1em;
        height: 1em;
        margin-top: -1px;
    }

    [data-state='open'] > .smallIcon {
        transform: rotate(-180deg);
    }

    .arrow {
        position: relative;
        top: 70%;
        background: var(--card-background-colour-inverted);
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        border-top-left-radius: 2px;
    }

    .children {
        place-self: center;
        place-items: center;
        place-content: center;
        display: grid;
        padding: 22px;
        margin: 0;
        column-gap: 10px;
        list-style: none;

        @media only screen and (min-width: 670px) {
            grid-auto-flow: column;
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @keyframes enterFromRight {
        from {
            opacity: 0;
            transform: translateX(12rem);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes enterFromLeft {
        from {
            opacity: 0;
            transform: translateX(-12rem);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes exitToRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(12rem);
        }
    }

    @keyframes exitToLeft {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(-12rem);
        }
    }

    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: rotateX(-5deg) scale(0.95);
        }
        to {
            opacity: 1;
            transform: rotateX(0deg) scale(1);
        }
    }

    @keyframes scaleOut {
        from {
            opacity: 1;
            transform: rotateX(0deg) scale(1);
        }
        to {
            opacity: 0;
            transform: rotateX(-5deg) scale(0.95);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>
