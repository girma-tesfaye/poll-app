<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let items;
    export let activeItem;

</script>

<div class="tabs">
    <ul>
        {#each items as item }
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => dispatch('tabChange', item)}>
                <div class:active={item == activeItem} >{item}</div>
            </li>
        {/each}
    </ul>
</div>
<style>
    .tabs {
        margin-bottom: 40px;
    }
    ul {
        display: flex;
        list-style-type: none;
        padding: 0;
        justify-content: center;
    }
    li {
        margin: 0 15px;
        font-size: 18px;
        font-weight: 600;
        font-family: "Trirong", serif;
        color: #555;
        cursor: pointer;
    }
    .active {
        color: #e30327;
        border-bottom: 2px solid #e30327;
        padding-bottom: 8px;
    }
    
</style>