<script>
    import Flow from './Flow.svelte'
    export let gap
</script>

<div>
    <Flow {gap}>
        <div>Spacing</div>
        <div>out</div>
        <div>child</div>
        <div>elements</div>
        <div>by</div>
        <div>specified</div>
        <div>gap</div>
        <div>size</div>
        <div>and</div>
        <div>wrapping</div>
        <div>them</div>
    </Flow>
</div>

<style>
    div {
        max-width: 45rem;
    }
</style>