import { Card } from '../components/Card'
import { Link, useSearchParams } from 'react-router'
import { Helmet } from 'react-helmet'

function Main() {
  const [searchParams, setSearchParams] = useSearchParams();

  const cardId = Number(searchParams.get('id'))
  const setCardId = (id: number) => setSearchParams({ id: String(id) });

  const generateCard = () => {
    setCardId(Math.floor(Math.random() * 10000) + 1)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        {cardId > 0 && <>
            {/* @ts-expect-error @types/react-helmet */}
            <Helmet>
                <title>{`Билет №${cardId}`}</title>
            </Helmet>
            <Card id={cardId} />
        </>}
        <div className="flex gap-4 p-5">
            <button onClick={generateCard}>Новый билет</button>
            {cardId > 0 && <button onClick={() => navigator.clipboard.writeText(window.location.href)}>Скопировать ссылку</button>}
        </div>
        <Link className='m-5 text-gray-400 hover:text-gray-700 duration-75' to="/about">Справочная информация</Link>
    </div>
  )
}

export default Main
