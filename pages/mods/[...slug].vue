<template>
	<RouterLink :to="{ name: 'mods' }">Back to Mods</RouterLink>
	<ContentDoc>
		<template #default="{ doc }">
			<article>
				<h1>{{ doc.title }}</h1>
				<ContentRenderer :value="doc" />
			</article>
		</template>
		<template #empty>
			<h1>404</h1>
			<p>Mod page not found</p>
		</template>
	</ContentDoc>
</template>
