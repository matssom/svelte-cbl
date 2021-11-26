<script>
    import { size } from '../../common/translations'
    export let gap = 'small';

    $: gapSize = size(gap, (gap) => `--stack-gap-size:${gap};`)
</script>

<div class="stack" style={gapSize}>
    <slot />
</div>

<style>
    .stack {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--stack-gap-size);
    }
</style>