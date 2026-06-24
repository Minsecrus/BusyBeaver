export const MACHINES = {
  bb1: {
    label: 'BB(1)',
    states: ['A'],
    targetSteps: 1,
    targetOnes: 1,
    rules: {
      A: {
        0: ['1', 'R', 'H'],
      },
    },
  },
  bb2: {
    label: 'BB(2)',
    states: ['A', 'B'],
    targetSteps: 6,
    targetOnes: 4,
    rules: {
      A: {
        0: ['1', 'R', 'B'],
        1: ['1', 'L', 'B'],
      },
      B: {
        0: ['1', 'L', 'A'],
        1: ['1', 'R', 'H'],
      },
    },
  },
  bb3: {
    label: 'BB(3)',
    states: ['A', 'B', 'C'],
    targetSteps: 21,
    targetOnes: 5,
    rules: {
      A: {
        0: ['1', 'R', 'B'],
        1: ['1', 'R', 'H'],
      },
      B: {
        0: ['1', 'L', 'B'],
        1: ['0', 'R', 'C'],
      },
      C: {
        0: ['1', 'L', 'C'],
        1: ['1', 'L', 'A'],
      },
    },
  },
  bb4: {
    label: 'BB(4)',
    states: ['A', 'B', 'C', 'D'],
    targetSteps: 107,
    targetOnes: 13,
    rules: {
      A: {
        0: ['1', 'R', 'B'],
        1: ['1', 'L', 'B'],
      },
      B: {
        0: ['1', 'L', 'A'],
        1: ['0', 'L', 'C'],
      },
      C: {
        0: ['1', 'R', 'H'],
        1: ['1', 'L', 'D'],
      },
      D: {
        0: ['1', 'R', 'D'],
        1: ['0', 'R', 'A'],
      },
    },
  },
  bb5: {
    label: 'BB(5)',
    states: ['A', 'B', 'C', 'D', 'E'],
    targetSteps: 47176870,
    targetOnes: 4098,
    rules: {
      A: {
        0: ['1', 'R', 'B'],
        1: ['1', 'L', 'C'],
      },
      B: {
        0: ['1', 'R', 'C'],
        1: ['1', 'R', 'B'],
      },
      C: {
        0: ['1', 'R', 'D'],
        1: ['0', 'L', 'E'],
      },
      D: {
        0: ['1', 'L', 'A'],
        1: ['1', 'L', 'D'],
      },
      E: {
        0: ['1', 'R', 'H'],
        1: ['0', 'L', 'A'],
      },
    },
  },
}

export const MACHINE_KEYS = Object.keys(MACHINES)
