<script>
    import { size } from '../../common/translations'
    export let gap = 'small'

    $: gapSize = size(gap, (gap) => `--flow-gap-size:${gap};`)
</script>

<div class="flow" style={gapSize}>
    <slot />
</div>

<style>
    .flow {
        display: flex;
        flex-wrap: wrap;
        gap: var(--flow-gap-size);
    }
</style>