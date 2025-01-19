export function BankerTables({demands, allocations, numResources}: {demands: number[][], allocations: number[][], numResources: number}): JSX.Element {
    return (
        <div className='flex gap-6 flex-wrap'>
            <table className='table table-fixed border border-collapse caption-top grow'>
                <caption className="p-2 table-caption">
                    Текущее распределение
                </caption>
                <thead>
                    <tr>
                        <th className="border p-2"></th>
                        {
                            [...Array(numResources)].map((_, i) => {
                                return <th className="border p-2" key={i}>№{i + 1}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {allocations.map((allocation, process) => {
                        return (
                        <tr key={process}>
                            <td className="border p-2">P{process+1}</td>
                            {
                                allocation.map((v, i) => {
                                    return <td className="border p-2" key={i}>{v}</td>
                                })
                            }
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            <table className='table table-fixed border border-collapse caption-top grow'>
                <caption className="p-2 table-caption">
                    Максимальные требования
                </caption>
                <thead>
                    <tr>
                        <th className="border p-2"></th>
                        {
                            [...Array(numResources)].map((_, i) => {
                                return <th className="border p-2" key={i}>№{i + 1}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {demands.map((demand, process) => {
                        return (
                            <tr key={process}>
                                <td className="border p-2">P{process+1}</td>
                                {
                                    demand.map((v, i) => {
                                        return <td className="border p-2" key={i}>{v}</td>
                                    })
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}