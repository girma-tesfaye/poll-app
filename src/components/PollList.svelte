<script>
    import PollDetail from "./PollDetail.svelte";

    export let polls = [];
</script>

<div class="poll-list">
    {#each polls as poll (poll.id)}
        <PollDetail {poll} on:vote/>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>