<script setup lang="ts">
  const authenticationStore = useAuthenticationStore()
</script>

<template>
  <p>Dashboard</p>

  <p>Authenticated: {{ authenticationStore.UserId }}</p>
</template>
