<script>
    import CreatePollForm from "./components/CreatePollForm.svelte";
	import Footer from "./components/Footer.svelte";
	import Header from "./components/Header.svelte";
    import PollList from "./components/PollList.svelte";
    import Tabs from "./reusables/Tabs.svelte";

	//tabs
	let items = ['Current Polls', 'Add New Poll']
	let activeItem = ['Current Polls']
	const tabChange = (e) => {
		activeItem = e.detail;
	}

	let polls = [
		{
			id: 2,
			question: "Are you better on Ppython or JavaScript?",
			answerA: "Python",
			answerB: "JavaScript",
			voteA: 10,
			voteB: 12,
		}
	]

	const handleAddNewPoll = (e) => {
		polls = [...polls, e.detail]
		activeItem = ['Current Polls']
	};

	const handleVote = (e) => {
		const {option, id} = e.detail;
		let copiedPolls = [...polls];
		let upvotedPoll = copiedPolls.find((poll) => poll.id == id);

		if (option === 'a') {
			upvotedPoll.voteA++
		}
		if (option === 'b') {
			upvotedPoll.voteB++
		}

		polls = copiedPolls;
	}
</script>
<Header/>
<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange}/>
	{#if activeItem == 'Current Polls'}
		<PollList on:vote={handleVote}/>
	{:else if activeItem == 'Add New Poll'}
		<CreatePollForm on:add={handleAddNewPoll}/>
	{/if}
</main>
<Footer/>

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>