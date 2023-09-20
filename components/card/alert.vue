<template>
    <div :class="$style.alert">
        <strong>
            <slot name="title" />
        </strong>
        <slot />
    </div>
</template>

<style module lang="less">
    .alert {
        background: var(--card-background-colour);
        color: var(--text-colour);
        border-radius: 0.75rem;
        padding: 1rem;
    }
</style>
