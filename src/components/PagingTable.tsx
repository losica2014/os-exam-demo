export function PagingTable({table, representation} : {table: { [key: number]: number }, representation: number}): JSX.Element {
    return (
        <table className="table table-fixed border border-collapse caption-top grow">
            <caption className="p-2 table-caption">
                Текущее распределение страниц
            </caption>
            <thead>
                <tr>
                    <th className="border p-2">№ логической страницы</th>
                    <th className="border p-2">№ физический страницы</th>
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
export function PagingTable2({table, representation} : {table: { [key: number]: {value: string, bit1: boolean, bit2: boolean, bit3: boolean} }, representation: number}): JSX.Element {
    return (
        <table className="table table-fixed border border-collapse caption-top grow">
            <caption className="p-2 table-caption">
                Таблица страниц процесса
            </caption>
            <thead>
                <tr>
                    <th className="border p-2">№ логической стр.</th>
                    <th className="border p-2">Бит присутствия</th>
                    <th className="border p-2">Бит обращения</th>
                    <th className="border p-2">Бит модификации</th>
                    <th className="border p-2">№ физический стр.</th>
                </tr>
            </thead>
            <tbody className="font-mono text-right">
                {Object.entries(table).map(([key, value]) => {
                    return (
                        <tr>
                            <td className="border p-2">{Number.parseInt(key).toString(representation)}</td>
                            <td className="border p-2">{value.bit1.toString()}</td>
                            <td className="border p-2">{(value.bit1 && value.bit2).toString()}</td>
                            <td className="border p-2">{(value.bit1 && value.bit3).toString()}</td>
                            <td className="border p-2">{value.value}</td>
                        </tr>
                    )
                })} 
            </tbody>
        </table>
    );
}