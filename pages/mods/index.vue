<template>
	<h1>Mods for Zeepkist</h1>
	<h2>Supported Mods</h2>
	<section :class="$style.articles">
		<ContentList v-slot="{ list }" path="/mods">
			<CardMod
				v-for="article in list.filter(article => article.supported)"
				:key="article._path"
				:href="article._path"
				:title="article.title"
				:version="article.version"
				:author="article.author"
				:description="article.description" />
		</ContentList>
	</section>

	<h2>Unsupported Mods</h2>
	<section :class="$style.articles">
		<ContentList v-slot="{ list }" path="/mods">
			<CardMod
				v-for="article in list.filter(article => !article.supported)"
				:key="article._path"
				:href="article._path"
				:title="article.title"
				:version="article.version"
				:author="article.author"
				:description="article.description" />
		</ContentList>
	</section>
</template>

<style module lang="less">
	.articles {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		margin: 1rem 0;
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
