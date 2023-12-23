<script setup lang="ts">
    import {
        type UiNavigationMenuRoot,
        UiNavigationMenuVisibility
    } from '~/types/ui.js'

    const navigation: UiNavigationMenuRoot[] = [
        {
            title: 'other',
            visibility: UiNavigationMenuVisibility.Collapsed,

            children: []
        },
        {
            title: 'home',
            name: 'index',
            visibility: UiNavigationMenuVisibility.Always
        },
        {
            title: 'cosmetics',
            visibility: UiNavigationMenuVisibility.UnCollapsed,
            children: [
                {
                    title: 'Hats',
                    subtitle: 'Unlockable Hats',
                    name: 'cosmetics-hats'
                },
                {
                    title: 'Soapboxes',
                    subtitle: 'Unlockable Soapboxes',
                    name: 'cosmetics-soapboxes'
                },
                {
                    title: 'Skins',
                    subtitle: 'Unlockable Skins',
                    name: 'cosmetics-skins'
                }
            ]
        },
        {
            title: 'levels',
            visibility: UiNavigationMenuVisibility.UnCollapsed,

            children: [
                {
                    title: 'Adventure Mode Levels',
                    subtitle: 'Built-in levels',
                    name: 'adventure'
                },
                {
                    title: 'Workshop Levels',
                    subtitle: 'Community created levels',
                    name: 'levels'
                }
            ]
        },
        {
            title: 'users',
            name: 'users',
            visibility: UiNavigationMenuVisibility.UnCollapsed
        },
        {
            title: 'super League',
            name: 'super-league',
            visibility: UiNavigationMenuVisibility.Always
        },
        {
            title: 'events',
            visibility: UiNavigationMenuVisibility.UnCollapsed,

            children: [
                {
                    title: 'Cup of the Day',
                    subtitle: 'Weekly community-run knock-out tournaments',
                    name: 'events-cotd'
                },
                {
                    title: 'Other Events',
                    subtitle: 'Community-run events',
                    name: 'events-other'
                }
            ]
        },
        {
            title: 'mods',
            name: 'mods',
            visibility: UiNavigationMenuVisibility.UnCollapsed
        },
        {
            title: 'toolkist',
            path: 'https://toolkist.netlify.app',
            visibility: UiNavigationMenuVisibility.UnCollapsed
        }
    ]
</script>

<template>
    <UiNavigation :menu="navigation" />
</template>
