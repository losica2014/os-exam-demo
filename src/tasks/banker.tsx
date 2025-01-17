import Prando from "prando";

function runBanker({ allocations, unmetDemands, available, numProcesses, numResources } : BankerState): BankerResult {
    const safe: boolean[] = Array(numProcesses).fill(false);
    const availableLocal: number[] = available.slice();
    const safeOrder: number[] = [];
    let metSomeDemand;
    do {
        metSomeDemand = false;
        for (let i = 0; i < numProcesses; i++) {
            if (safe[i]) continue;
            let canMeetDemand = true;
            for (let j = 0; j < numResources; j++) {
                if (unmetDemands[i][j] > availableLocal[j]) {
                    canMeetDemand = false;
                    break;
                }
            }
            if (canMeetDemand) {
                safe[i] = true;
                metSomeDemand = true;
                for (let j = 0; j < numResources; j++) {
                    availableLocal[j] += allocations[i][j];
                }
                safeOrder.push(i);
            }
        }
    } while (metSomeDemand);
    if(!safe.every((v) => v)) {
        // Unsafe
        const unsafeDemands: { [i: number]: number[] } = {};
        for (let i = 0; i < numProcesses; i++) {
            if (!safe[i]) {
                unsafeDemands[i] = unmetDemands[i];
            }
        }
        return {
            safe: false,
            unsafeDemands,
            availableAtTheEnd: availableLocal,
            safeOrder
        }
    } else {
        // Safe
        return {
            safe: true,
            availableAtTheEnd: availableLocal,
            safeOrder
        }
    }
}

type BankerState = {
    allocations: number[][];
    unmetDemands: number[][];
    demands: number[][];
    available: number[];
    numProcesses: number;
    numResources: number;
};

type BankerResult = ({
    safe: true;
} | {
    safe: false;
    unsafeDemands: { [i: number]: number[] };
}) & {
    safeOrder: number[];
    availableAtTheEnd: number[];
};

function generateBankerState(seed: number): BankerState {
    const rand = new Prando(seed);
    const numProcesses = rand.nextInt(2, 5);
    const numResources = rand.nextInt(2, 5);
    const available = [];
    for (let i = 0; i < numResources; i++) {
        available.push(rand.nextInt(0, 10));
    }
    const allocations: number[][] = [];
    const demands: number[][] = [];
    const unmetDemands: number[][] = [];
    const totalResources = available.slice();
    for (let i = 0; i < numProcesses; i++) {
        const demand = [];
        const allocation = [];
        const unmetDemand = [];
        let atLeastOneSmaller = false;
        for (let j = 0; j < numResources; j++) {
            const jDemand = rand.nextInt(0, 10);
            if (jDemand < available[j]) atLeastOneSmaller = true;
            demand.push(jDemand);
            const jAllocation = rand.nextInt(0, jDemand - ((j == numResources - 1 && !atLeastOneSmaller) ? 1 : 0));
            allocation.push(jAllocation);
            unmetDemand.push(jDemand - jAllocation);

            totalResources[j] += jAllocation;
        }
        demands.push(demand);
        allocations.push(allocation);
        unmetDemands.push(unmetDemand);
    }

    const state: BankerState = { allocations, unmetDemands, demands, available, numProcesses, numResources };

    return state;
}

export {generateBankerState, runBanker};
export type {BankerState, BankerResult};