<script>
    export let gap = 'small';
    let gapSize = ''

    $: switch (gap) {
        case 'huge':
            gapSize = '--stack-gap:16rem;'
            break;
        case 'large':
            gapSize = '--stack-gap:11rem;'
            break;
        case 'medium':
            gapSize = '--stack-gap:6rem;'
            break;
        case 'small':
            gapSize = '--stack-gap:3rem;'
            break;
        case 'tiny':
            gapSize = '--stack-gap:1rem;'
            break;
        default:
            gapSize = `--stack-gap:${gap};`;
            break;
    }
</script>

<div class="stack" style={gapSize}>
    <slot />
</div>

<style>
    .stack {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--stack-gap);
    }
</style>