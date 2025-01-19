export function SegmentTable({table, representation} : {table: { [key: number]: {size: number, start: number} }, representation: number}): JSX.Element {
    return (
        <table className="table table-fixed border border-collapse caption-top grow">
            <caption className="p-2 table-caption">
                Текущее распределение сегментов
            </caption>
            <thead>
                <tr>
                    <th className="border p-2">№ сегмента</th>
                    <th className="border p-2">Начало сегмента</th>
                    <th className="border p-2">Длина сегмента</th>
                </tr>
            </thead>
            <tbody className="font-mono text-right">
                {Object.entries(table).map(([key, value]) => {
                    return (
                        <tr key={key}>
                            <td className="border p-2">{Number.parseInt(key).toString(representation)}</td>
                            <td className="border p-2">{value.start.toString(representation)}</td>
                            <td className="border p-2">{value.size.toString(representation)}</td>
                        </tr>
                    )
                })} 
            </tbody>
        </table>
    );
}