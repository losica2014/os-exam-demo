import { Link } from "react-router"
import { questions, tasks } from "../db"

export default function About() {
    return (
        <div className="flex flex-col justify-center container max-w-2xl mx-auto h-screen gap-5">
            <h1 className="text-xl font-medium">Справочная информация</h1>
            <h3 className="font-bold">В базе содержатся:</h3>
            <p>Категорий вопросов: {questions.length} (Всего вопросов: {questions.reduce((a, b) => a + b.questions.length, 0)})</p>
            <p className="italic">Источник вопросов: официальный перечень вопросов</p>
            <div>
                {questions.map((q) => (
                    <div key={q.id}>
                        <h4 className="font-medium">[{q.id}] {q.title}</h4>
                    </div>
                ))}
            </div>
            <p>Категорий задач: {tasks.length} (Всего задач: {tasks.reduce((a, b) => a + b.questions.length, 0)})</p>
            <p className="italic">Задачи генерируются автоматически по определённым алгоритмам.</p>
            <div>
                {tasks.map((q) => (
                    <div key={q.id}>
                        <h4 className="font-medium">[{q.id}] {q.title}</h4>
                    </div>
                ))}
            </div>
            <Link className='m-5 self-center text-gray-400 hover:text-gray-700 duration-75' to="/">На главную</Link>
        </div>
    )
}