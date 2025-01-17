import Prando from 'prando';
import { memo } from 'react';
import { questions, tasks } from '../db';
import logo from '../assets/logo.svg'
import { Question } from '../types';
import { Answer } from './Answer';

export const Card = memo(function Card({id} : {id: number}): JSX.Element {
    const rand = new Prando(id);

    const numQuestions = 2;
    const numTasks = 1;

    const selectedQuestions: Question[] = [];
    const usedCategories: number[] = [];

    for(let i = 0; i < numQuestions; i++) {
        let questionCategory = rand.nextInt(0, questions.length - 1);
        while(usedCategories.includes(questionCategory) && numTasks < selectedQuestions.length) {
            questionCategory = rand.nextInt(0, questions.length - 1);
        }
        usedCategories.push(questionCategory);

        const question = questions[questionCategory].questions[rand.nextInt(0, questions[questionCategory].questions.length - 1)];

        if(!question) continue;

        selectedQuestions.push(question);
    }

    const selectedTasks: Question[] = [];
    const usedTaskCategories: number[] = [];
    for(let i = 0; i < numTasks; i++) {
        let taskCategory = rand.nextInt(0, tasks.length - 1);
        while(usedTaskCategories.includes(taskCategory) && numTasks < selectedTasks.length) {
            taskCategory = rand.nextInt(0, tasks.length - 1);
        }
        usedTaskCategories.push(taskCategory);

        const task = tasks[taskCategory].questions[rand.nextInt(0, tasks[taskCategory].questions.length - 1)];

        if(!task) continue;

        selectedTasks.push(task.create(rand.nextInt()));
    }

    return (
        <div className="p-5 rounded-sm outline outline-gray-200 font-serif container flex flex-col gap-5">
            <div className='flex justify-between items-center'>
                <h1 className="text-xl font-medium">Билет №{id}</h1>
                <img src={logo} />
            </div>
            <h3>Вопросы</h3>
            {selectedQuestions.map((question, index) => {
                return (
                    <div className="" key={question.id}>
                        <p className='text-justify'>{index + 1}. {question.text}</p>
                        {question.data}
                    </div>
                )
            })}
            {
                selectedQuestions.length == 0 && (
                    <p className="italic">Нет вопросов. Мы не знаем, почему, но это так.</p>
                )
            }
            <h3>Задачи</h3>
            {selectedTasks.map((task, index) => {
                return (
                    <div className="flex flex-col gap-2" key={task.id}>
                        <p className='text-justify'>{index + 1}. {task.text}</p>
                        {task.data}
                        {task.answer && <Answer answer={task.answer} />}
                    </div>
                )
            })}
            {
                selectedTasks.length == 0 && (
                    <p className="italic">Нет задач. Мы не знаем, почему, но это так.</p>
                )
            }
            <p className='text-gray-400 text-justify'>Билет может менять содержимое задач при обновлении сервиса. Если хотите точно сохранить его - делайте скриншот.</p>
        </div>
    );
})