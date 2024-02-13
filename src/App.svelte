<script>
    import Footer from "./components/Footer.svelte";
	import Header from "./components/Header.svelte";
    import Tabs from "./reusable/Tabs.svelte";

	//tabs
	let items = ['Current Polls', 'Add New Poll']
	let activeItem = ['Current Polls']
	const tabChange = (e) => {
		activeItem = e.detail;
	}
	
</script>
<Header/>
<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange}/>
	{#if activeItem === 'Current Polls'}
		<p>List of polls component comes here</p>
	{:else if activeItem === 'Add New Poll'}
		<p>New poll form component comes here</p>
	{/if}
</main>
<Footer/>

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>