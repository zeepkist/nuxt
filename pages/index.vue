<script setup lang="ts">
    const authenticationStore = useAuthenticationStore()
</script>

<template>
    <LayoutGridColumns>
        <template #left>
            <CardSteamGameDetails />
            <LayoutGridColumns>
                <template #left>
                    <CardDownloadGTR />
                </template>
                <template #right>
                    <div>
                        <h2>Random Levels</h2>
                        <div>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                        </div>
                    </div>
                </template>
            </LayoutGridColumns>
        </template>

        <template #center>
            <ListSteamNews type="patchnotes" />
        </template>

        <template #right>
            <ListSteamNews type="events" />
        </template>
    </LayoutGridColumns>

    <div :class="$style.divider">
        <div :class="$style.container">
            <CardStats />
        </div>
    </div>

    <p>Authenticated: {{ authenticationStore.UserId }}</p>
</template>

<style module lang="less">
    .divider {
        background: var(--card-background-colour);

        height: auto;
        box-sizing: border-box;
        padding: 30px;

        margin: 4rem 0;

        position: relative;
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;

        &::before,
        &::after {
            position: absolute;
            width: 100%;
            content: '';
            background: inherit;
            z-index: -1;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            height: 100%;
        }

        &::after {
            transform-origin: bottom right;
            transform: skewY(-1deg);
        }

        &::before {
            transform-origin: top right;
            transform: skewY(1deg);
        }
    }

    .container {
        max-width: var(--page-width);
        width: 100%;
        margin: 0 auto;
    }
</style>
