<script>
    //import { onDestroy, onMount } from "svelte";
    import PollStore from "../stores/store"
    import PollDetail from "./PollDetail.svelte";

    // export let polls = [];

    // const unsub = PollStore.subscribe(data => {
    //     polls = data;
    // });

    // onMount(() => {
    //     //maybe get data from a db
    //     console.log("component mounted");
    //     unsub();
    // });

    // onDestroy(() => {
    //     //unsub from store
    //     console.log("Component destroyed");
    // });

</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
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