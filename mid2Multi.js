var mid2MultiQuestion = {
    q1:{
      description : 'Which of the following statements are generally true?',
      choices: {
        'Memory hierarchies take advantage of temporal locality': {
          result: 'F',
          color: 'black'
        },
        'On a read, the value returned depends on which blocks are in the cache.': {
          result: 'F',
          color: 'black'
        },
        'Most of the cost of the memory hierarchy is at the highest level.': {
          result: 'F',
          color: 'black'
        },
        'Most of the cost of the memory hierarchy is at the lowest level.': {
          result: 'T',
          color: 'black'
        },
      },
    },
    q2:{
      description : '64KB cache with 16-byte block size and a 32-bit address. What type of a cache would require 16 bits for Tag information?',
      choices: {
        'Fully associative cache': {
          result: 'F',
          color: 'black'
        },
        'Directed-mapped cache': {
          result: 'T',
          color: 'black'
        },
        ' 2-way associative cache': {
          result: 'F',
          color: 'black'
        },
        '4-way associative cache': {
          result: 'F',
          color: 'black'
        },
      },
    },
    q3:{
      description : '64KB cache with four-word block size (a word is 4 bytes) and a 32-bit address. If a block has 28 tag bits, what is the type of this cache?',
      choices: {
        '2-way set associative': {
          result: 'F',
          color: 'black'
        },
        'Direct mapped': {
          result: 'F',
          color: 'black'
        },
        'Fully associative': {
          result: 'T',
          color: 'black'
        },
        '4-way set associative': {
          result: 'F',
          color: 'black'
        },
      },
    },
    q4:{
      description : 'Which one of the following processors has the highest possible MIPS rate, assuming full compiler optimization and no cache misses?',
      choices: {
        'A 4-issue processor driven by a 300 MHz clock.': {
          result: 'F',
          color: 'black'
        },
        'A single-issue processor driven by a 1.2 GHz clock': {
          result: 'F',
          color: 'black'
        },
        'A 2-issue processor with a 600 MHz clock.': {
          result: 'F',
          color: 'black'
        },
        'A 8-issue VLIW processor driven by a 200 MHz clock.': {
          result: 'T',
          color: 'black'
        },
      },
    },
    q5:{
      description : 'GPU hardware handles: ',
      choices: {
        'thread management': {
          result: 'T',
          color: 'black'
        },
        'OS': {
          result: 'F',
          color: 'black'
        },
        'applications': {
          result: 'F',
          color: 'black'
        },
        'none': {
          result: 'F',
          color: 'black'
        },
      },
    },
    q6:{
      description : 'Which of the following statement is NOT true on the Centralized Shared-Memory Architectures?',
      choices: {
        'The use of large multilevel caches can substantially reduce memory bandwidth demands of a processor.': {
          result: 'F',
          color: 'black'
        },
        'Bandwidth of the centralized memory system grows as the number of processors in machines increases.': {
          result: 'T',
          color: 'black'
        },
        'It is possible for several (micro)processors to share the same memory through a shared bus.': {
          result: 'F',
          color: 'black'
        },
      },
    },
    q7:{
      description : 'Symmetric multiprocessors architectures, are sometimes known as:',
      choices: {
        'Variable memory access': {
          result: 'F',
          color: 'black'
        },
        'Static memory access': {
          result: 'F',
          color: 'black'
        },
        'Uniform memory access': {
          result: 'T',
          color: 'black'
        },
      },
    },
    q8:{
      description : 'Which of the following systems is the least scalable with respect to its number of processors?',
      choices: {
        'Cache-coherent NUMA systems': {
          result: 'F',
          color: 'black'
        },
        'None': {
          result: 'F',
          color: 'black'
        },
        'Symmetric multiprocessors': {
          result: 'T',
          color: 'black'
        },
        'Noncache-coherent NUMA systems': {
          result: 'F',
          color: 'black'
        },
      },
    },
    q9:{
      description : 'When a register X1 is the destination register in both instruction I and instruction J, this is an',
      choices: {
        'Exception': {
          result: 'F',
          color: 'black'
        },
        'Input dependence': {
          result: 'F',
          color: 'black'
        },
        'Output	dependence': {
          result: 'T',
          color: 'black'
        },
        'Interruption': {
          result: 'F',
          color: 'black'
        },
      },
    },
    q10:{
      description : 'A hazard that is raised due to a branch misprediction is known as a',
      choices: {
        'Control hazard': {
          result: 'T',
          color: 'black'
        },
        'Data hazard': {
          result: 'F',
          color: 'black'
        },
        'Branch hazard': {
          result: 'F',
          color: 'black'
        },
        'Structural hazard': {
          result: 'F',
          color: 'black'
        },
      },
    },
    q11:{
        description : 'Which of the following statements is false?',
        choices: {
          'A scalar processor processes one data item at a time.': {
            result: 'F',
            color: 'black'
          },
          'Superscalar architectures with speculative executions are suitable for embedded processors': {
            result: 'T',
            color: 'black'
          },
          'In a vector processor, a single instruction operates simultaneously on multiple data items.': {
            result: 'F',
            color: 'black'
          },
          'VLIW architectures execute instructions in parallel based on a fixed schedule determined when the code is compiled.': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q12:{
        description : 'Dependencies between iterations of a loop are called',
        choices: {
          'Loop-control	dependences': {
            result: 'F',
            color: 'black'
          },
          'Control dependences': {
            result: 'F',
            color: 'black'
          },
          'Loop-carried dependences': {
            result: 'T',
            color: 'black'
          },
          'Anti-dependences': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q13:{
        description : 'Goal of software and hardware techniques, is to exploit',
        choices: {
          'Compatibility': {
            result: 'F',
            color: 'black'
          },
          'Parallelism': {
            result: 'T',
            color: 'black'
          },
          'Scalability': {
            result: 'F',
            color: 'black'
          },
          'Supervision': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q14:{
        description : 'To be gathered in a single register, distance separating elements are called',
        choices: {
          'Grid': {
            result: 'F',
            color: 'black'
          },
          'Stride': {
            result: 'T',
            color: 'black'
          },
          'String': {
            result: 'F',
            color: 'black'
          },
          'Warp': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q15:{
        description : 'Unifying	theme\' of every form of parallelism in the NVIDIA systems is the',
        choices: {
          'NVIDIA thread': {
            result: 'F',
            color: 'black'
          },
          'CUDA thread': {
            result: 'T',
            color: 'black'
          },
          'ETA thread': {
            result: 'F',
            color: 'black'
          },
          'CRUDE thread': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q16:{
        description : 'Vector instructions which can be potentially executed altogether, is known as',
        choices: {
          'Pipelining': {
            result: 'F',
            color: 'black'
          },
          'Speculation': {
            result: 'F',
            color: 'black'
          },
          'Convoy': {
            result: 'T',
            color: 'black'
          },
          'Commit': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q17:{
        description : 'A special hardware buffer that temporarily holds instruction results during speculative execution is known as',
        choices: {
          'Write-through buffer': {
            result: 'F',
            color: 'black'
          },
          'Ordered buffer': {
            result: 'F',
            color: 'black'
          },
          'Reorder buffer': {
            result: 'T',
            color: 'black'
          },
          'Control buffer': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q18:{
        description : 'Hardware-based speculation method for executing programs is necessarily a',
        choices: {
          'Data flow speculation': {
            result: 'T',
            color: 'black'
          },
          'Control speculation': {
            result: 'F',
            color: 'black'
          },
          'Anti-speculation': {
            result: 'F',
            color: 'black'
          },
          'All above': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q19:{
        description : 'GPUs can be considered as',
        choices: {
          'Multicores': {
            result: 'F',
            color: 'black'
          },
          'Multiprocessors': {
            result: 'F',
            color: 'black'
          },
          'Both': {
            result: 'T',
            color: 'black'
          },
        },
      },
      q20:{
        description : 'Which one of the following processors has the highest possible MIPS rate, assuming full compiler optimization and no cache misses?',
        choices: {
          'A 8-issue VLIW processor driven by a 200 MHz clock.': {
            result: 'T',
            color: 'black'
          },
          'A single-issue processor driven by a 1.2 GHz clock.': {
            result: 'F',
            color: 'black'
          },
          'A 2-issue processor with a 600 MHz clock.': {
            result: 'F',
            color: 'black'
          },
          'A 4-issue processor driven by a 300 MHz clock.': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q21:{
        description : 'Each bank register of fixed-length maintaining a single vector, is referred to as',
        choices: {
          'Vector register': {
            result: 'T',
            color: 'black'
          },
          'Bank register': {
            result: 'F',
            color: 'black'
          },
          'Accumulator': {
            result: 'F',
            color: 'black'
          },
          'Commit': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q22:{
        description : 'CUDA groups 32 parallel CUDA threads into a',
        choices: {
          'Unit': {
            result: 'F',
            color: 'black'
          },
          'Warp': {
            result: 'T',
            color: 'black'
          },
          'Stream': {
            result: 'F',
            color: 'black'
          },
          'Process': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q23:{
        description : 'A sufficient test for loop-carried dependence\'s absence in the analysis of loops is the',
        choices: {
          'Litmus test': {
            result: 'F',
            color: 'black'
          },
          'GCD test': {
            result: 'T',
            color: 'black'
          },
          'Warp test': {
            result: 'F',
            color: 'black'
          },
          'Flight test': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q24:{
        description : 'A branch-prediction cache which is used to store predicted address for upcoming instruction after branch, is called a',
        choices: {
          'Reservation station buffer': {
            result: 'F',
            color: 'black'
          },
          'Branch-target buffer': {
            result: 'T',
            color: 'black'
          },
          'Table-Lookaside Buffer': {
            result: 'F',
            color: 'black'
          },
          'Reorder buffer': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q25:{
        description : 'Allowing the issuance of multiple instructions in a clock cycle is a goal of',
        choices: {
          'Single-issue processors': {
            result: 'F',
            color: 'black'
          },
          'Vector processors': {
            result: 'F',
            color: 'black'
          },
          'Multiple-issue processors': {
            result: 'T',
            color: 'black'
          },
          'VLIW processors': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q26:{
        description : 'Which architecture is the least efficient in exploiting data level parallelism?',
        choices: {
          'VLIW': {
            result: 'F',
            color: 'black'
          },
          'SIMD': {
            result: 'F',
            color: 'black'
          },
          'Superscalar': {
            result: 'T',
            color: 'black'
          },
          'GPU': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q27:{
        description : 'Which of the following statements is false regarding GPU threads and blocks?',
        choices: {
          'Threads are organized into blocks.': {
            result: 'F',
            color: 'black'
          },
          'Thread management is handled by OS.': {
            result: 'T',
            color: 'black'
          },
          'Blocks are organized into a grid': {
            result: 'F',
            color: 'black'
          },
          'A thread is associated with each data element.': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q28:{
        description : 'GPUs use _____ model',
        choices: {
          'SISD': {
            result: 'F',
            color: 'black'
          },
          'SPMD': {
            result: 'F',
            color: 'black'
          },
          'SIMT': {
            result: 'T',
            color: 'black'
          },
          'MIMD': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q29:{
        description : 'Which of the following statements is false?',
        choices: {
          'A scalar processor can process multiple data items at a time.': {
            result: 'T',
            color: 'black'
          },
          'VLIW can exploit both instruction and data level parallelisms': {
            result: 'F',
            color: 'black'
          },
          'In a vector processor, a single instruction operates simultaneously on multiple data items.': {
            result: 'T',
            color: 'black'
          },
          'VLIW architectures execute instructions in parallel based on a fixed schedule determined code is compiled.': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q30:{
        description : 'Which of the following statement is false regarding GPU threads and blocks?',
        choices: {
          'Threads are organized into blocks': {
            result: 'F',
            color: 'black'
          },
          'Thread management is handled by OS': {
            result: 'T',
            color: 'black'
          },
          'Blocks are organized into a grid': {
            result: 'F',
            color: 'black'
          },
          'A thread is associated with each data element': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q31:{
        description : 'Vector instruction which can be potentially executed altogether, is known as',
        choices: {
          'Pipelining': {
            result: 'F',
            color: 'black'
          },
          'Speculation': {
            result: 'F',
            color: 'black'
          },
          'Convoy': {
            result: 'T',
            color: 'black'
          },
          'Commit': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q32:{
        description : 'Dependences between iterations of a loop are called',
        choices: {
          'Loop-control dependences': {
            result: 'F',
            color: 'black'
          },
          'Control dependences': {
            result: 'F',
            color: 'black'
          },
          'Loop-carried dependences': {
            result: 'T',
            color: 'black'
          },
          'Anti-dependences': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q33:{
        description : 'CUDA groups 32 parallele threads into a',
        choices: {
          'Unit': {
            result: 'F',
            color: 'black'
          },
          'Warp': {
            result: 'T',
            color: 'black'
          },
          'Convoy': {
            result: 'F',
            color: 'black'
          },
          'Process': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q34:{
        description : 'A sufficient test for loop-carried dependence’s absence in the analysis of loops is the',
        choices: {
          'Litmus test': {
            result: 'F',
            color: 'black'
          },
          'GCD test': {
            result: 'T',
            color: 'black'
          },
          'Warp test': {
            result: 'F',
            color: 'black'
          },
          'Flight test': {
            result: 'F',
            color: 'black'
          },
        },
      },
      q35:{
        description : 'A sufficient test for loop-carried dependence’s absence in the analysis of loops is the',
        choices: {
          'Litmus test': {
            result: 'F',
            color: 'black'
          },
          'GCD test': {
            result: 'T',
            color: 'black'
          },
          'Warp test': {
            result: 'F',
            color: 'black'
          },
          'Flight test': {
            result: 'F',
            color: 'black'
          },
        },
      },
  }