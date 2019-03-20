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
  }