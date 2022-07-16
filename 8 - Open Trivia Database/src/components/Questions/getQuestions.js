export default function getQuestions() {
    let apiUrl = "https://opentdb.com/api.php?amount=1";

    return fetch(apiUrl)
        .then(res => res.json())
        .then(data => data.results);
}
