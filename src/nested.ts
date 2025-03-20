import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
<<<<<<< HEAD
import { duplicateQuestion, makeBlankQuestion } from "./objects";
=======
>>>>>>> origin/task-forms

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
<<<<<<< HEAD
    return questions.filter((question) => question.published);
=======
    return [];
>>>>>>> origin/task-forms
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
<<<<<<< HEAD
    return questions.filter(
        (question) =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length > 0
    );
=======
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
<<<<<<< HEAD
    return questions.find((question) => question.id === id) || null;
=======
    return null;
>>>>>>> origin/task-forms
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
<<<<<<< HEAD
    return questions.filter((question) => question.id !== id);
=======
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
<<<<<<< HEAD
    return questions.map((question) => question.name);
=======
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
<<<<<<< HEAD
    return questions.reduce(
        (currentSum: number, question) => question.points + currentSum,
        0
    );
=======
    return 0;
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
<<<<<<< HEAD
    return questions.reduce(
        (currentSum: number, question) =>
            question.published ? currentSum + question.points : currentSum,
        0
    );
=======
    return 0;
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
<<<<<<< HEAD
    const header = "id,name,options,points,published";
    const rows = questions.map(
        (question) =>
            `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
    );
    return [header, ...rows].join("\n");
=======
    return "";
>>>>>>> origin/task-forms
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
<<<<<<< HEAD
    return questions.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false
    }));
=======
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
<<<<<<< HEAD
    return questions.map((question) => ({ ...question, published: true }));
=======
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
<<<<<<< HEAD
    if (questions.length === 0) {
        return true;
    }
    const same = questions[0].type;
    return questions.every((question) => question.type === same);
=======
    return false;
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
<<<<<<< HEAD
    const blank = makeBlankQuestion(id, name, type);
    return [...questions, blank];
=======
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
<<<<<<< HEAD
    return questions.map((question) =>
        question.id === targetId ? { ...question, name: newName } : question
    );
=======
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
<<<<<<< HEAD
    return questions.map((question) =>
        question.id === targetId
            ? {
                  ...question,
                  type: newQuestionType,
                  options:
                      newQuestionType === "multiple_choice_question"
                          ? question.options
                          : []
              }
            : question
    );
=======
    return [];
>>>>>>> origin/task-forms
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
<<<<<<< HEAD
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            const edit = { ...question };
            if (targetOptionIndex === -1) {
                edit.options = [...question.options, newOption];
            } else {
                edit.options = [
                    ...question.options.slice(0, targetOptionIndex),
                    newOption,
                    ...question.options.slice(targetOptionIndex + 1)
                ];
            }
            return edit;
        }
        return question;
    });
=======
) {
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
<<<<<<< HEAD
    const target = questions.findIndex(
        (questions) => questions.id === targetId
    );
    if (target !== -1) {
        const double = questions[target];
        const duplicated = duplicateQuestion(newId, double);
        return [
            ...questions.slice(0, target + 1),
            duplicated,
            ...questions.slice(target + 1)
        ];
    }
    return questions;
=======
    return [];
>>>>>>> origin/task-forms
}
