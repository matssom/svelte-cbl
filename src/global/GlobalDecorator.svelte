<script>
    import './global.css'
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&family=Open+Sans&family=Outfit&display=swap" rel="stylesheet">
</svelte:head>

<div class="decorator">
    <slot />
</div>

<style>
    .decorator {
        font-family: 'Outfit', sans-serif;
        color: #757575;
    }
</style>