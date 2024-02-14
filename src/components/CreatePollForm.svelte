<script>
    import Button from "../reusables/Button.svelte";

    let fields = {
        question: '',
        answerA: '',
        answerB: ''
    };
    let errors = {
        question: '',
        answerA: '',
        answerB: ''
    };
    let valid = false;

    const handleAddPoll = () => {
        valid = true;

        //Question validation
        if (fields.question.trim().length < 5) {
            errors.question = "Question must be at least five characters long";
            valid = false;
        } else {
            errors.question = "";
        }
        //Answer A validation
        if (fields.answerA.trim().length < 1) {
            errors.answerA = "Answer A can not be empty";
            valid = false;
        } else {
            errors.answerA = "";
        }
        //Answer B validation
        if (fields.answerB.trim().length < 1) {
            errors.answerB = "Answer B can not be empty";
            valid = false;
        } else {
            errors.answerB = "";
        }

        if (valid) {
            console.log("valid", fields)
        }
    };
</script>

<form on:submit|preventDefault={handleAddPoll}>
    <div class="forms-field">
        <label for="question">Poll question</label>
        <input id="question" type="text" bind:value={fields.question}/>
        <p class="error">{errors.question}</p>
    </div>
    <div class="forms-field">
        <label for="answer-a">Answer A</label>
        <input id="answer-a" type="text" bind:value={fields.answerA}/>
        <p class="error">{errors.answerA}</p>
    </div>
    <div class="forms-field">
        <label for="answe-b">Answer B</label>
        <input id="answer-b" type="text" bind:value={fields.answerB}/>
        <p class="error">{errors.answerB}</p>
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
    .error{
        color: #d91b42;
        font-size: 12px;
        text-align: left;
        font-weight: 600;
    }
</style>