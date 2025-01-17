import Prando from "prando";
import { DynamicQuestionGroup, QuestionGroup } from "./types";
import { BankerResult, BankerState, generateBankerState, runBanker } from "./tasks/banker";
import { BankerTables } from "./components/BankerTable";
import { PagingTable } from "./components/PagingTable";

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
                id: 1,
                create: (id: number) => {
                    const rand = new Prando(id);

                    const state = generateBankerState(id);
                    const { allocations, unmetDemands, demands, available, numProcesses, numResources } = state;

                    const chosenOne = rand.nextInt(0, numProcesses - 1);
                    let chosenResource;
                    do {
                        chosenResource = rand.nextInt(0, numResources - 1);
                    } while(unmetDemands[chosenOne][chosenResource] == 0 || available[chosenResource] < 1);
                    const amount = rand.nextInt(1, Math.min(available[chosenResource], unmetDemands[chosenOne][chosenResource]));
                    const text = `В системе имеется ${numProcesses} шт. процессов и ${numResources} шт. видов ресурсов, которые можно предоставлять процессам. Текущее распределение ресурсов и максимальное их количество, необходимое процессам, представлено в таблице. Вектор доступных ресурсов A = (${available.map((v) => v.toString()).join(",\u00A0")}). Будет ли состояние безопасным, если процессу Р${chosenOne+1} распределить ${amount} шт. экземпляра ресурса №${chosenResource+1}?`;

                    const newState: BankerState = {
                        ...state,
                        allocations: allocations.map((v, i) => i == chosenOne ? [...v.slice(0, chosenResource), v[chosenResource] + amount, ...v.slice(chosenResource + 1)] : v),
                        available: available.map((v, i) => i == chosenResource ? v - amount : v),
                    };

                    const res = runBanker(newState);
                    const { safe, safeOrder, availableAtTheEnd } = res;
                    const answer = safe
                        ? `Состояние безопасно.\nНайденный безопасный путь: ${safeOrder.map((v) => `Р${v+1}`).join(" \u279D ")}. Доступные ресурсы: (${availableAtTheEnd.map((v) => v.toString()).join(",\u00A0")}).`
                        : `Состояние небезопасно.\n${safeOrder.length > 0 ? `Найденный безопасный путь: ${safeOrder.map((v) => `Р${v+1}`).join(" \u279D ")}.` : 'Не получилось удовлетворить запросы ни одного процесса.'} Доступные ресурсы: (${availableAtTheEnd.map((v) => v.toString()).join(",\u00A0")}).\nНевозможно предоставить:\n${Object.entries(res.unsafeDemands).map(([s, v]) => `\u16EB процессу P${Number(s) + 1} \u2014 (${v.map((v) => v.toString()).join(",\u00A0")})`).join(",\n")}.`;
                    return {
                        id: id,
                        text: text,
                        data: <BankerTables allocations={allocations} demands={demands} numResources={numResources} />,
                        answer: answer
                    }
                }
            },
            {
                id: 2,
                create: (id: number) => {
                    const state = generateBankerState(id);
                    const { allocations, demands, available, numProcesses, numResources } = state;

                    const text = `В системе имеется ${numProcesses} шт. процессов и ${numResources} шт. видов ресурсов, которые можно предоставлять процессам. Текущее распределение ресурсов и максимальное их количество, необходимое процессам, представлено в таблице. Вектор доступных ресурсов A = (${available.map((v) => v.toString()).join(",\u00A0")}). Безопасно ли данное состояние?`;

                    const res = runBanker(state);
                    const { safe, safeOrder, availableAtTheEnd } = res;
                    const answer = safe
                        ? `Состояние безопасно.\nНайденный безопасный путь: ${safeOrder.map((v) => `Р${v+1}`).join(" \u279D ")}. Доступные ресурсы: (${availableAtTheEnd.map((v) => v.toString()).join(",\u00A0")}).`
                        : `Состояние небезопасно.\n${safeOrder.length > 0 ? `Найденный безопасный путь: ${safeOrder.map((v) => `Р${v+1}`).join(" \u279D ")}.` : 'Не получилось удовлетворить запросы ни одного процесса.'} Доступные ресурсы: (${availableAtTheEnd.map((v) => v.toString()).join(",\u00A0")}).\nНевозможно предоставить:\n${Object.entries(res.unsafeDemands).map(([s, v]) => `\u16EB процессу P${Number(s) + 1} \u2014 (${v.map((v) => v.toString()).join(",\u00A0")})`).join(",\n")}.`;
                    return {
                        id: id,
                        text: text,
                        data: <BankerTables allocations={allocations} demands={demands} numResources={numResources} />,
                        answer: answer
                    }
                }
            },
            {
                id: 3,
                create: (id: number) => {
                    const rand = new Prando(id);

                    const state = generateBankerState(id);
                    const { allocations, demands, numProcesses, numResources } = state;

                    // const totalUnmetDemands = [];
                    // for (let i = 0; i < numResources; i++) {
                    //     totalUnmetDemands.push(unmetDemands.reduce((total, demand) => total + demand[i], 0));
                    // }

                    const chosenResource = rand.nextInt(0, numResources - 1);
                    const available: number[] = state.available.slice();
                    let res: BankerResult;
                    available[chosenResource] = Number.POSITIVE_INFINITY;
                    let retryCount = 0;
                    do {
                        const newState: BankerState = {
                            ...state,
                            available,
                        };

                        res = runBanker(newState);
                        if(!res.safe) {
                            for(let i = 0; i < numProcesses; i++) {
                                if(i == chosenResource) continue;
                                available[i] = rand.nextInt(0, 10);
                            }
                        }
                    } while(!res.safe && retryCount++ < 500);

                    if(!res.safe) {
                        return {
                            id: id,
                            text: 'Задание не будет сгенерировано.'
                        }
                    }

                    available[chosenResource] = 0;
                    do {
                        const newState: BankerState = {
                            ...state,
                            available,
                        };

                        res = runBanker(newState);
                        if(!res.safe) {
                            available[chosenResource]++;
                        }
                    } while(!res.safe);

                    const text = `В системе имеется ${numProcesses} шт. процессов и ${numResources} шт. видов ресурсов, которые можно предоставлять процессам. Текущее распределение ресурсов и максимальное их количество, необходимое процессам, представлено в таблице. Вектор доступных ресурсов A = (${available.map((v, index) => index == chosenResource ? 'N' : v.toString()).join(",\u00A0")}). При каком минимальном количестве ресурса №${chosenResource+1} состояние будет безопасным?`;

                    const { safeOrder, availableAtTheEnd } = res;
                    const answer = `Состояние безопасно при минимальном количестве ресурса №${chosenResource+1} = ${available[chosenResource]}.\nНайденный безопасный путь: ${safeOrder.map((v) => `Р${v+1}`).join(" \u279D ")}. Доступные ресурсы: (${availableAtTheEnd.map((v) => v.toString()).join(",\u00A0")}).`;
                    return {
                        id: id,
                        text: text,
                        data: <BankerTables allocations={allocations} demands={demands} numResources={numResources} />,
                        answer: answer
                    }
                }
            },
        ]
    },
    {
        id: 2,
        title: 'Память',
        questions: [
            {
                id: 4,
                create: (id: number) => {
                    const rand = new Prando(id);
                    
                    const bits = 2**(rand.nextInt(4, 8));
                    let levels: number[] = [];
                    let bitsLeft = bits;
                    for(let i = 0; i < rand.nextInt(bits > 32 ? 4 : 2, 4) - 1; i++) {
                        const level = i == 0 ? rand.nextInt(bits > 32 ? 8 : bits - 8, bits > 32 ? 32 : bits - 8) : Math.min(rand.nextInt(2, bitsLeft), bitsLeft);
                        bitsLeft -= level;
                        levels = [level, ...levels];
                        if(bitsLeft == 0) {
                            break;
                        }
                    }
                    if(bitsLeft > 0) {
                        levels = [bitsLeft, ...levels];
                    }

                    const text = `Компьютер с ${bits}-х разрядным адресом использует ${levels.length-1}-уровневую таблицу страниц. Виртуальные адреса расщепляются на ${levels.slice(0, -1).map((level, index) => `${level}-разрядное поле ${index+1} уровня таблицы`).join(", ")} страниц и смещение. Чему равен размер страницы и сколько их в адресном пространстве?`;

                    const answer = `Размер страницы: ${2**(levels[levels.length - 1])} = 2^${levels[levels.length - 1]} байт\nКоличество страниц: ${2**(bits - levels[levels.length - 1])} = 2^${bits - levels[levels.length - 1]} страниц`;

                    return {
                        id: id,
                        text: text,
                        answer: answer
                    }
                }
            },
            {
                id: 5,
                create: (id: number) => {
                    const rand = new Prando(id);
                    
                    const pageSizeBits = rand.nextInt(8, 32);
                    const pageNumBits = rand.nextInt(8, 32);
                    // const totalBits = pageSizeBits + pageNumBits;
                    
                    const offset = rand.nextInt(0, 2**(pageSizeBits) - 1);
                    const pageNum = rand.nextInt(0, 2**(pageNumBits) - 1);

                    const representation = rand.nextArrayItem([2, 8, 10, 16]);

                    const pageMap: { [key: number]: number } = [];
                    // const state = generatePagingMemoryLayout
                    pageMap[pageNum] = rand.nextInt(0, 2**(pageNumBits) - 1);

                    for(let i = 0; i < rand.nextInt(4, 8); i++) {
                        const page = rand.nextInt(0, 2**(pageNumBits) - 1);
                        const physicalPage = rand.nextInt(0, 2**(pageNumBits) - 1);
                        pageMap[page] = physicalPage;
                    }

                    const correctLogicalAddress = pageNum * 2**(pageSizeBits) + offset;
                    const correctPhysicalAddress = pageMap[pageNum] * 2**(pageSizeBits) + offset;

                    const requirePhysical = rand.nextBoolean();

                    const text = requirePhysical ? `Пусть в некоторой программе, работающей со страничной организацией памяти, произошло обращение по виртуальному адресу ${correctLogicalAddress.toString(representation)}(${representation}). Преобразуйте этот адрес в физический, учитывая, что размер страницы равен 2^${pageSizeBits} байт. Ниже дана таблица страниц данного процесса.` : `Пусть данные некоторой программы, работающей со страничной организацией памяти, хранятся по физическому адресу ${correctPhysicalAddress.toString(representation)}(${representation}). Преобразуйте этот адрес в виртуальный, учитывая, что размер страницы равен 2^${pageSizeBits} байт. Ниже дана таблица страниц данного процесса.`;

                    const answer = requirePhysical ? `Физический адрес: ${correctPhysicalAddress.toString(representation)}(${representation})` : `Логический адрес: ${correctLogicalAddress.toString(representation)}(${representation})`;

                    return {
                        id: id,
                        text: text,
                        data: <PagingTable table={pageMap} representation={representation} />,
                        answer: answer
                    }
                }
            }
        ]
    }
]

export { questions, tasks }