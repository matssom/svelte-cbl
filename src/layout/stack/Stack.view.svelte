<script>
    import Stack from './Stack'
    export let gap
</script>

<Stack {gap}>
    <div>Gap to ↓ text is {gap || 'default'}</div>
    <div>Gap to ↑ and ↓ is {gap || 'default'}</div>
    <div>Gap to ↑ is {gap || 'default'}</div>
</Stack>