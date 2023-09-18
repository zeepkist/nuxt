<template>
	<ContentDoc>
		<template #default="{ doc }">
			<article>
				<RouterLink :to="{ name: 'mods' }">Back to Mods</RouterLink>

				<h1>
					{{ doc.title }}
					<template v-if="doc.version">({{ doc.version }})</template>
				</h1>

				<p>
					Mod author:
					<RouterLink
						:to="{
							name: 'user-steamId',
							params: { steamId: doc.authorSteamId }
						}">
						{{ doc.author }}
					</RouterLink>
				</p>

				<div v-if="doc.supported" :class="$style.download">
					<h4>Get the Mod</h4>
					<p>
						Search for <code>{{ doc.title }}</code> on Modkist
						(Recommended) or
						<a :href="doc.modio">download mod manually</a>
						(Requires BepInEx setup)
					</p>
				</div>

				<div v-else :class="$style.unsupported">
					<h4>Unsupported Mod</h4>
					<p>
						This mod is not supported by the current version of
						Zeepkist
					</p>
				</div>

				<ContentRenderer :value="doc" />
			</article>
		</template>
		<template #empty>
			<h1>404</h1>
			<p>Mod page not found</p>
		</template>
	</ContentDoc>
</template>

<style module lang="less">
	article {
		border: 1px solid transparent;
		background: var(--card-background-colour);
		padding: 1rem;
		border-radius: 0.75rem;
	}

	.download,
	.unsupported {
		margin: 1rem 0;
		padding: 1rem;
		border-radius: 0.75rem;

		p {
			font-size: 0.875rem;
		}
	}

	.download {
		border: 1px solid var(--border-colour);
	}

	.unsupported {
		border: 1px solid var(--error-colour);
		background: var(--error-background-colour);
	}
</style>
