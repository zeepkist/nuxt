<template>
    <div :class="$style.container">
        <div :class="$style.left">
            <slot name="left"></slot>
        </div>
        <div :class="$style.right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style module lang="less">
    .container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .left {
        flex: 1;
    }

    .right {
        flex: 1;
    }
</style>
