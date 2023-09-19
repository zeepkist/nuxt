<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
    <select id="color-mode-select" v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select>
</template>

<script setup>
    useColorMode()
</script>

<style module lang="less">
    select {
        background: var(--card-background-colour);
        color: var(--text-colour);
        border: 1px solid var(--accent-colour);
        border-radius: 0.5rem;
        padding: 0.5rem;
    }
</style>
