<script setup lang="ts">
	const { href, title, version, author, description } = defineProps<{
		href?: string
		title?: string
		version?: string
		author?: string
		description?: string
	}>()
</script>

<template>
	<a :href="href" :class="$style.card">
		<h3>
			{{ title }}
			<template v-if="version"> ({{ version }}) </template>
		</h3>

		<p>
			Created by <strong>{{ author }}</strong>
		</p>

		<p>{{ description }}</p>
	</a>
</template>

<style module lang="less">
	.card {
		border: 1px solid transparent;
		background: var(--card-background-colour);
		color: var(--text-colour);
		border-radius: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 50rem;
		min-width: 25rem;
		padding: 1rem;
		transition: border-color 0.3s;

		p {
			font-size: 0.9rem;
		}

		h2 {
			transition: color 0.3s;
		}

		&:hover {
			border-color: var(--accent-colour);
			transition: border-color 0.3s;

			p {
				color: var(--text-colour);
			}
		}
	}
</style>
