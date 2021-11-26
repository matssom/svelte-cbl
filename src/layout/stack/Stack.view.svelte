<script>
    import Stack from './Stack'
    export let gap
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&family=Open+Sans&family=Outfit&display=swap" rel="stylesheet">
</svelte:head>

<Stack {gap}>
    <div>Gap to ↓ text is {gap || 'default'}</div>
    <div>Gap to ↑ and ↓ is {gap || 'default'}</div>
    <div>Gap to ↑ is {gap || 'default'}</div>
</Stack>

<style>
    div {
        font-family: 'Outfit', sans-serif;
        color: #878787;
    }
</style>