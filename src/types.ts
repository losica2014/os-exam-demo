class QuestionGroup {
    constructor({id, title, questions} : {id: number, title: string, questions: Question[]}) {
        this.id = id;
        this.title = title;
        this.questions = questions;
    }

    id: number;
    title: string;
    questions: Question[];
}

class DynamicQuestionGroup {
    constructor({id, title, questions} : {id: number, title: string, questions: DynamicQuestion[]}) {
        this.id = id;
        this.title = title;
        this.questions = questions;
    }

    id: number;
    title: string;
    questions: DynamicQuestion[];
}

class Question {
    constructor({id, text, data, answer}: {id: number, text: string, data?: JSX.Element, answer?: string}) {
        this.id = id;
        this.text = text;
        this.data = data;
        this.answer = answer;
    }

    id: number;
    text: string;
    data?: JSX.Element;
    answer?: string;
}

class DynamicQuestion {
    constructor({create}: {create: (id: number) => Question}) {
        this.create = create;
    }
    // constructor({createText, createImage}: {createText: (id: number) => string, createImage?: (id: number) => string}) {
    //     this.createText = createText;
    //     this.createImage = createImage;
    // }

    // createText: (id: number) => string;
    // createImage?: (id: number) => string;

    create: (id: number) => Question; /* {
        return {
            id: id,
            text: this.createText(id),
            image: this.createImage ? this.createImage(id) : undefined
        }
    } */
}

export { QuestionGroup, Question, DynamicQuestionGroup, DynamicQuestion }