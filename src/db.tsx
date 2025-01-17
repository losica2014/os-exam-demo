import Prando from "prando";

class QuestionGroup {
    constructor({id, title, questions} : {id: number, title: string, questions: Question[]}) {
        this.id = id;
        this.title = title;
        this.questions = questions;
    }

    id: number;
    title: string;
    questions: Question[];
}

class DynamicQuestionGroup {
    constructor({id, title, questions} : {id: number, title: string, questions: DynamicQuestion[]}) {
        this.id = id;
        this.title = title;
        this.questions = questions;
    }

    id: number;
    title: string;
    questions: DynamicQuestion[];
}

class Question {
    constructor({id, text, data}: {id: number, text: string, data?: JSX.Element}) {
        this.id = id;
        this.text = text;
        this.data = data;
    }

    id: number;
    text: string;
    data?: JSX.Element;
}

class DynamicQuestion {
    constructor({create}: {create: (id: number) => Question}) {
        this.create = create;
    }
    // constructor({createText, createImage}: {createText: (id: number) => string, createImage?: (id: number) => string}) {
    //     this.createText = createText;
    //     this.createImage = createImage;
    // }

    // createText: (id: number) => string;
    // createImage?: (id: number) => string;

    create: (id: number) => Question; /* {
        return {
            id: id,
            text: this.createText(id),
            image: this.createImage ? this.createImage(id) : undefined
        }
    } */
}

const questions: QuestionGroup[] = [
    {
        id: 1,
        title: 'Основные концепции',
        questions: [
            {
                id: 1,
                text: "Определение ОС. Назначение и функции операционной системы. Место ОС в структуре вычислительной системы."
            },
            {
                id: 2,
                text: "Области применения ОС: ОС мейнфреймов, серверные ОС, ОС многопроцессорных систем, персональных компьютеров, смартфонов и планшетов, встроенные ОС, ОС сенсорных узлов, смарт-карт, ОС для IoT устройств."
            },
            {
                id: 3,
                text: "Понятие ресурса. Основные ресурсы вычислительной системы. Управление ресурсами."
            },
            {
                id: 4,
                text: "Критерии эффективности и классы ОС."
            },
            {
                id: 5,
                text: "Функциональные компоненты ОС персонального компьютера."
            },
            {
                id: 6,
                text: "Понятие интерфейса прикладного программирования."
            },
            {
                id: 7,
                text: "Пользовательский интерфейс."
            },
            {
                id: 8,
                text: "Системные вызовы."
            },
            {
                id: 9,
                text: "Прерывания (понятие, классификация, обработка прерываний)."
            },
            {
                id: 10,
                text: "Обработка аппаратных прерываний."
            },
            {
                id: 11,
                text: "Требования, предъявляемые к современным ОС."
            },
            {
                id: 12,
                text: "Виртуализация. Гипервизор 1 и 2 типа. Контейнеры."
            },
            {
                id: 13,
                text: "Классификации ОС."
            },
            {
                id: 14,
                text: "Архитектура ОС. Ядро и вспомогательные модули."
            },
            {
                id: 15,
                text: "Классическая архитектура ОС. Монолитные и многослойные ОС."
            },
            {
                id: 16,
                text: "Микроядерная архитектура ОС."
            },
        ],
    },
    {
        id: 2,
        title: 'Процессы и потоки. Планирование',
        questions: [
            {
                id: 17,
                text: "Процессы и потоки. Состояния потока."
            },
            {
                id: 18,
                text: "Функции ОС по управлению процессами."
            },
            {
                id: 19,
                text: "Планирование и диспетчеризация потоков, моменты перепланировки."
            },
            {
                id: 20,
                text: "Кооперативная и вытесняющая многозадачность, достоинства и недостатки."
            },
            {
                id: 21,
                text: "Алгоритм планирования, основанный на квантовании."
            },
            {
                id: 22,
                text: "Приоритетное планирование."
            },
            {
                id: 23,
                text: "Алгоритмы планирования в ОС пакетной обработки: «первым пришел – первым обслужен», «кратчайшая задача – первая», «наименьшее оставшееся время выполнения»."
            },
            {
                id: 24,
                text: "Алгоритмы планирования в интерактивных ОС: циклическое, приоритетное, MLFQ."
            },
            {
                id: 25,
                text: "Равномерные планировщики: гарантированное, лотерейное, справедливое планирование."
            },
            {
                id: 26,
                text: "Планирование в многопроцессорных системах."
            },
            {
                id: 27,
                text: "Планирование в системах реального времени."
            },
            {
                id: 28,
                text: "Алгоритм планирования Windows NT."
            },
            {
                id: 29,
                text: "Алгоритмы планирования Linux: О(1)"
            },
            {
                id: 30,
                text: "Алгоритмы планирования Linux: CFS"
            },
            {
                id: 31,
                text: "Планирование в ОС реального времени."
            },
        ],
    },
    {
        id: 3,
        title: 'Межпроцессное взаимодействие',
        questions: [
            {
                id: 32,
                text: "Межпроцессное взаимодействие (почему необходимы системные средства и в каких ситуациях применяются, примеры таких средств)."
            },
            {
                id: 33,
                text: "Синхронизация процессов и потоков: цели и средства синхронизации."
            },
            {
                id: 34,
                text: "Ситуация состязаний (гонки). Способы предотвращения."
            },
            {
                id: 35,
                text: "Способы реализации взаимных исключений: блокирующие переменные, критические секции, семафоры."
            },
            {
                id: 36,
                text: "Классические задачи синхронизации: «производители-потребители», «проблема обедающих философов», «проблема спящего брадобрея»."
            },
            {
                id: 37,
                text: "Взаимные блокировки. Условия, необходимые для возникновения тупика."
            },
            {
                id: 38,
                text: "Обнаружение взаимоблокировки при наличии одного ресурса каждого типа."
            },
            {
                id: 39,
                text: "Обнаружение взаимоблокировки при наличии нескольких экземпляров ресурса каждого типа."
            },
            {
                id: 40,
                text: "Предотвращение взаимоблокировки. Алгоритм банкира для одного вида ресурсов."
            },
            {
                id: 41,
                text: "Предотвращение взаимоблокировки. Алгоритм банкира для нескольких видов ресурсов."
            },
            {
                id: 42,
                text: "Синхронизирующие объекты ОС: системные семафоры, мьютексы, события, сигналы, барьеры, ждущие таймеры."
            },
            {
                id: 43,
                text: "Организация обмена данными между процессами (каналы, разделяемая память, почтовые ящики, сокеты)."
            },
        ],
    },
    {
        id: 4,
        title: 'Память',
        questions: [
            {
                id: 44,
                text: "Функции ОС по управлению памятью."
            },
            {
                id: 45,
                text: "Алгоритмы распределения памяти без использования внешних носителей (одиночное непрерывное распределение, фиксированные, динамические, перемещаемые разделы)."
            },
            {
                id: 46,
                text: "Понятие виртуальной памяти."
            },
            {
                id: 47,
                text: "Страничное распределение памяти."
            },
            {
                id: 48,
                text: "Таблицы страниц для больших объемов памяти."
            },
            {
                id: 49,
                text: "Алгоритмы замещения страниц."
            },
            {
                id: 50,
                text: "Сегментное распределение памяти."
            },
            {
                id: 51,
                text: "Сегментно-страничное распределение памяти."
            },
            {
                id: 52,
                text: "Кеш-память (понятие, принцип действия кеш-памяти)."
            },
            {
                id: 53,
                text: "Случайное отображение основной памяти на кеш."
            },
            {
                id: 54,
                text: "Детерминированное отображение основной памяти на кеш."
            },
            {
                id: 55,
                text: "Комбинированный способ отображения основной памяти на кеш."
            },
        ],
    },
    {
        id: 5,
        title: 'Файловые системы',
        questions: [
            {
                id: 56,
                text: "Задачи ОС по управлению файлами и устройствами."
            },
            {
                id: 57,
                text: "Многослойная модель подсистемы ввода-вывода."
            },
            {
                id: 58,
                text: "Физическая организация диска. HDD, SSD устройства."
            },
            {
                id: 59,
                text: "Файловая система. Определение, состав, типы файлов. Логическая организация файловой системы."
            },
            {
                id: 60,
                text: "Физическая организация и адресация файлов."
            },
            {
                id: 61,
                text: "FAT. Структура тома. Формат записи каталога. FAT12, FAT16, FAT32, exFAT."
            },
            {
                id: 62,
                text: "ext2, ext3,  ext4: структура тома, адресация файлов, каталоги, индексные дескрипторы."
            },
            {
                id: 63,
                text: "NTFS: структура тома, типы файлов, организация каталогов."
            },
            {
                id: 64,
                text: "Файловые операции. Процедура открытия файла."
            },
            {
                id: 65,
                text: "Организация контроля доступа к файлам. "
            },
            {
                id: 66,
                text: "Отказоустойчивость файловых систем."
            },
            {
                id: 67,
                text: "Процедура самовосстановления NTFS."
            },
            {
                id: 68,
                text: "Избыточные дисковые подсистемы RAID."
            },
            {
                id: 69,
                text: "Многоуровневые драйверы."
            },
            {
                id: 70,
                text: "Дисковый кеш. Ускорение выполнения дисковых операций: традиционный дисковый кеш, кеш на основе механизма виртуальной памяти."
            }            
        ]
    }
]

const tasks: DynamicQuestionGroup[] = [
    {
        id: 1,
        title: 'Межпроцессное взаимодействие',
        questions: [
            {
                create: (id: number) => {
                    const rand = new Prando(id);
                    const numProcesses = rand.nextInt(2, 5);
                    const numResources = rand.nextInt(2, 5);
                    const available = [];
                    for (let i = 0; i < numResources; i++) {
                        available.push(rand.nextInt(0, 10));
                    }
                    const allocations: number[][] = [];
                    const demands: number[][] = [];
                    const chosenOne = rand.nextInt(0, numProcesses - 1);
                    for (let i = 0; i < numProcesses; i++) {
                        const demand = [];
                        const allocation = [];
                        let atLeastOneSmaller = false;
                        for (let j = 0; j < numResources; j++) {
                            const jDemand = rand.nextInt(0, 10);
                            if (jDemand < available[j]) atLeastOneSmaller = true;
                            demand.push(jDemand);
                            allocation.push(rand.nextInt(0, jDemand - ((j == numResources - 1 && !atLeastOneSmaller) ? 1 : 0)));
                        }
                        demands.push(demand);
                        allocations.push(allocation);
                    }
                    const chosenResource = rand.nextInt(0, numResources - 1);
                    const amount = rand.nextInt(1, Math.min(available[chosenResource], demands[chosenOne][chosenResource]));
                    const text = `В системе имеется ${numProcesses} шт. процессов и ${numResources} шт. видов ресурсов, которые можно предоставлять процессам. Текущее распределение ресурсов и максимальное их количество, необходимое процессам, представлено в таблице. Вектор доступных ресурсов A = (${available.map((v) => v.toString()).join(",\u00A0")}). Будет ли состояние безопасным, если процессу Р${chosenOne+1} распределить ${amount} шт. экземпляра ресурса №${chosenResource+1}?`
                    return {
                        id: id,
                        text: text,
                        data: (
                            <div className='flex gap-6'>
                                <table className='table table-fixed border border-collapse caption-top grow'>
                                    <caption className="p-2 table-caption">
                                        Текущее распределение
                                    </caption>
                                    <thead>
                                        <tr>
                                            <th className="border p-2"></th>
                                            {
                                                [...Array(numResources)].map((_, i) => {
                                                    return <th className="border p-2">№{i + 1}</th>
                                                })
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allocations.map((allocation, process) => {
                                            return (
                                            <tr>
                                                <td className="border p-2">P{process+1}</td>
                                                {
                                                    allocation.map((v) => {
                                                        return <td className="border p-2">{v}</td>
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
                                                    return <th className="border p-2">№{i + 1}</th>
                                                })
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {demands.map((demand, process) => {
                                            return (
                                                <tr>
                                                    <td className="border p-2">P{process+1}</td>
                                                    {
                                                        demand.map((v) => {
                                                            return <td className="border p-2">{v}</td>
                                                        })
                                                    }
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )
                    }
                }
            }
        ]
    },
    {
        id: 2,
        title: 'Память',
        questions: [
            
        ]
    }
]

export { QuestionGroup, Question, DynamicQuestionGroup, DynamicQuestion, questions, tasks }