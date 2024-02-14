import { writable } from "svelte/store"

const PollStore = writable([
    {
        id: 2,
        question: "Are you better on Ppython or JavaScript?",
        answerA: "Python",
        answerB: "JavaScript",
        voteA: 10,
        voteB: 12,
    }
]);

export default PollStore;