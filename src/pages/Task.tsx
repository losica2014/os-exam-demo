import { TaskCard } from '../components/TaskCard'
import { Link, useSearchParams } from 'react-router'
import { Helmet } from 'react-helmet'

function Task() {
  const [searchParams] = useSearchParams();

  const categoryId = Number(searchParams.get('categoryId'))
  const taskId = Number(searchParams.get('taskId'))
  const seed = Number(searchParams.get('seed'))

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
        {taskId > 0 && <>
            {/* @ts-expect-error @types/react-helmet */}
            <Helmet>
                <title>{`Задача №${categoryId}:${taskId}#${seed}`}</title>
            </Helmet>
            <TaskCard categoryId={categoryId} taskId={taskId} seed={seed} />
        </>}
        <div className="flex gap-4 p-5 items-center">
            <Link className='text-gray-400 hover:text-gray-700 duration-75' to="/">На главную</Link>
            {taskId > 0 && <button onClick={() => navigator.clipboard.writeText(window.location.href)}>Скопировать ссылку</button>}
        </div>
        <Link className='m-5 text-gray-400 hover:text-gray-700 duration-75' to="/about">Справочная информация</Link>
    </div>
  )
}

export default Task
