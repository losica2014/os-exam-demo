import { memo } from 'react';
import { tasks } from '../db';
import logo from '../assets/logo.svg'
import { Question } from '../types';
import { Answer } from './Answer';

export const TaskCard = memo(function TaskCard({categoryId, taskId, seed} : {categoryId: number, taskId: number, seed: number}): JSX.Element {
    // const rand = new Prando(id);

    const selectedTasks: Question[] = [];

    const task = tasks.find(t => t.id == categoryId)?.questions.find(q => q.id == taskId);

    if(task) selectedTasks.push(task.create(seed));

    return (
        <div className="p-5 rounded-sm outline outline-gray-200 font-serif container flex flex-col gap-5">
            <div className='flex justify-between items-center'>
                <h1 className="text-xl font-medium">Вопрос №{categoryId}:{taskId}#{seed}</h1>
                <img src={logo} />
            </div>
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
            <p className='text-gray-400 text-justify'>Правильность ответа не гарантирована, но предполагается.</p>
            <p className='text-gray-400 text-justify'>Билет может менять содержимое задач при обновлении сервиса. Если хотите точно сохранить его - делайте скриншот.</p>
        </div>
    );
})