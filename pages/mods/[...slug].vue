<template>
    <ContentDoc>
        <template #default="{ doc }">
            <article>
                <RouterLink :to="{ name: 'mods' }">Back to Mods</RouterLink>

                <div :class="$style.header">
                    <img :src="doc.thumbnail" :alt="doc.title" />

                    <div :class="$style.headerContent">
                        <h1>
                            {{ doc.title }}
                            <template v-if="doc.version"
                                >({{ doc.version }})</template
                            >
                        </h1>

                        <span>
                            Created by
                            <RouterLink
                                v-if="doc.authorSteamId"
                                :to="{
                                    name: 'user-steamId',
                                    params: { steamId: doc.authorSteamId }
                                }">
                                {{ doc.author }}
                            </RouterLink>
                            <span v-else>{{ doc.author }}</span>
                        </span>

                        <span v-if="doc.supported">
                            <span v-if="doc.featured">Featured</span>
                            <span v-else-if="doc.supported">Supported</span>
                            <span v-else>Unsupported</span>
                        </span>
                    </div>
                </div>

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

                <section v-if="doc.commands">
                    <h2>Chat Commands</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Command</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="{ command, description } in doc.commands"
                                :key="command">
                                <td>
                                    <code>{{ command }}</code>
                                </td>
                                <td>{{ description }}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section v-if="doc.controls">
                    <h2>Controls</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Default Keybind</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="{
                                    name,
                                    keybind,
                                    description
                                } in doc.controls"
                                :key="name">
                                <td>{{ name }}</td>
                                <td>
                                    <kbd>{{ keybind }}</kbd>
                                </td>
                                <td>{{ description }}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

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

    .header {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 1rem;
        margin: 1rem 0;

        img {
            height: 8rem;
            aspect-ratio: 16 / 9;
            object-fit: cover;
            border-radius: 0.75rem;
        }

        .headerContent {
            display: flex;
            flex-direction: column;
            flex: 1;
        }
    }
</style>
