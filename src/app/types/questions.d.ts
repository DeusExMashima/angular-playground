//interface for Question object
interface QuestionType {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

//interface for response receieved from the API
interface ResponseObject {
    response_code: number,
    results: QuestionType[]
}