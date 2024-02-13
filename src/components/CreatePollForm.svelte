<script>
    import Button from "../reusables/Button.svelte";

    let fields = {
        question: '',
        answerA: '',
        answerB: ''
    };
    const handleAddPoll = () => {
        console.log(fields)
    };
</script>

<form on:submit|preventDefault={handleAddPoll}>
    <div class="forms-field">
        <label for="question">Poll question</label>
        <input id="question" type="text" bind:value={fields.question}/>
    </div>
    <div class="forms-field">
        <label for="answer-a">Answer A</label>
        <input id="answer-a" type="text" bind:value={fields.answerA}/>
    </div>
    <div class="forms-field">
        <label for="answe-b">Answer B</label>
        <input id="answer-b" type="text" bind:value={fields.answerB}/>
    </div>
    <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
    form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .forms-field{
        margin: 18px auto;
    }
    input{
        width: 100%;
        border-radius: 6px;
    }
    label{
        margin: 10px auto;
        text-align: left;
    }
</style>