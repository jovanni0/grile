$(document).ready(function () {
    $("#loading").show();

    localStorage.removeItem("flashcards_data");
    localStorage.removeItem("flashcards_question_index");

    // const question_set_path = localStorage.getItem("question_set_path");
    const number_of_items = parseInt(localStorage.getItem("number_or_questions")) || 10;

    getQuestions('../../assets/flashcards/' + "CEL.json", number_of_items, gotQuestions);
});


function gotQuestions(questions) {
    if (questions == null) {
        console.log("questions array is null");
    }

    localStorage.setItem("flashcards_data", JSON.stringify(questions));
    $("#loading").hide();
    navigateToNextPage();
}


function navigateToNextPage() {
    window.location.href = "flashcard.html";
}