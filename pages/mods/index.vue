<template>
	<h1>Mods for Zeepkist</h1>
	<section :class="$style.articles">
		<ContentList v-slot="{ list }" path="/mods">
			<a
				v-for="article in list"
				:key="article._path"
				:class="$style.article"
				:href="article._path">
				<h2>
					{{ article.title }}
					<template v-if="article.version">
						({{ article.version }})
					</template>
				</h2>
				<p>{{ article.description }}</p>
			</a>
		</ContentList>
	</section>
</template>

<style module lang="less">
	.articles {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.article {
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
