<script setup lang="ts">
    import { gtr } from '@zeepkist/graphql'
    // import { enumLevelsOrderBy } from '@zeepkist/graphql/dist/zworpshop/schema.js'

    const stats = await gtr.query({
        allStats: {
            __args: {
                first: 1
                // orderBy: [enumLevelsOrderBy.ID_DESC]
            },
            nodes: {
                distanceOnRegular: true,
                distanceOnGrass: true,
                distanceOnIce: true,
                distanceInAir: true,
                distanceArmsUp: true,
                distanceBraking: true,
                distanceRagdoll: true
            }
        }
    })

    const formatter = Intl.NumberFormat('en-GB', {
        maximumFractionDigits: 0
    })

    const getDistance = (metres: number) => {
        const unit = metres > 100_000 ? 'km' : 'm'

        return {
            unit,
            value: formatter.format(unit === 'km' ? metres / 1000 : metres)
        }
    }

    const distanceOnRegular = getDistance(
        stats.allStats?.nodes[0]?.distanceOnRegular ?? 0
    )

    const distanceOnGrass = getDistance(
        stats.allStats?.nodes[0]?.distanceOnGrass ?? 0
    )

    const distanceOnIce = getDistance(
        stats.allStats?.nodes[0]?.distanceOnIce ?? 0
    )

    const distanceInAir = getDistance(
        stats.allStats?.nodes[0]?.distanceInAir ?? 0
    )

    const distanceArmsUp = getDistance(
        stats.allStats?.nodes[0]?.distanceArmsUp ?? 0
    )

    const distanceBraking = getDistance(
        stats.allStats?.nodes[0]?.distanceBraking ?? 0
    )

    console.log(stats)
</script>

<template>
    <h2 :class="$style.header">Distance Travelled</h2>

    <div :class="$style.statContainer">
        <div :class="$style.stat">
            <span :class="$style.value">
                {{ distanceOnRegular.value
                }}<span :class="$style.unit">{{ distanceOnRegular.unit }}</span>
            </span>
            <p>on normal surfaces</p>
        </div>

        <div :class="$style.stat">
            <span :class="$style.value">
                {{ distanceOnGrass.value
                }}<span :class="$style.unit">{{ distanceOnGrass.unit }} </span>
            </span>
            <p>on grass surfaces</p>
        </div>

        <div :class="$style.stat">
            <span :class="$style.value">
                {{ distanceOnIce.value
                }}<span :class="$style.unit">{{ distanceOnIce.unit }} </span>
            </span>
            <p>on ice surfaces</p>
        </div>

        <div :class="$style.stat">
            <span :class="$style.value">
                {{ distanceInAir.value
                }}<span :class="$style.unit">{{ distanceInAir.unit }} </span>
            </span>
            <p>in the air</p>
        </div>

        <div :class="$style.stat">
            <span :class="$style.value">
                {{ distanceArmsUp.value
                }}<span :class="$style.unit">{{ distanceArmsUp.unit }} </span>
            </span>
            <p>arms up</p>
        </div>

        <div :class="$style.stat">
            <span :class="$style.value">
                {{ distanceBraking.value
                }}<span :class="$style.unit">{{ distanceBraking.unit }} </span>
            </span>
            <p>braking</p>
        </div>
    </div>
</template>

<style module lang="less">
    .header {
        margin: -2rem 0 1rem;
    }

    .statContainer {
        display: flex;
        justify-content: space-around;
        gap: 1rem;
        flex-wrap: wrap;
    }
    .stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        min-width: 12rem;

        p {
            font-size: 0.9rem;
            font-weight: 300;
            margin-top: -1rem;
        }
    }
    .value {
        font-size: 2rem;
        font-weight: 900;
    }
    .unit {
        font-size: 1.25rem;
        font-weight: 900;
        padding-left: 0.25rem;
    }
</style>
