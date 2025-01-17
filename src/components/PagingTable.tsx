export function PagingTable({table, representation} : {table: { [key: number]: number }, representation: number}): JSX.Element {
    return (
        <table className="table table-fixed border border-collapse caption-top grow">
            <caption className="p-2 table-caption">
                Текущее распределение
            </caption>
            <thead>
                <tr>
                    <th className="border p-2">Логический адрес</th>
                    <th className="border p-2">Физический адрес</th>
                </tr>
            </thead>
            <tbody className="font-mono text-right">
                {Object.entries(table).map(([key, value]) => {
                    return (
                        <tr>
                            <td className="border p-2">{Number.parseInt(key).toString(representation)}</td>
                            <td className="border p-2">{value.toString(representation)}</td>
                        </tr>
                    )
                })} 
            </tbody>
        </table>
    );
}