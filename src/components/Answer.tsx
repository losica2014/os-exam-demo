import { useState } from "react";

export function Answer({ answer }: { answer: string }): JSX.Element {
    const [hidden, setHidden] = useState(true);

    return (
        <div className="">
            <button onClick={() => setHidden(!hidden)}>{hidden ? 'Показать ответ' : 'Скрыть ответ'}</button>
            <p className={'text-justify ' + (hidden ? ' hidden' : '')}>Ответ: {answer.split('\n').map((line, index, array) => <span key={index}>{line}{index != array.length - 1 && <br />}</span>)}</p>
        </div>
    );
}