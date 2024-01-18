# Algorithms and Big O Notation: A Quick Tutorial

## Introduction to Algorithms in Programming

**Algorithms** are a fundamental aspect of programming. They are step-by-step procedures or formulas for solving a problem. The quality of an algorithm is not only judged by the correctness of its output but also by its efficiency in terms of time and memory usage. In programming, algorithms are implemented as functions or methods in various programming languages and are used to manipulate data, perform calculations, and solve specific computational problems.

## Understanding Big O Notation

Big O Notation is a mathematical concept used in Computer Science to describe the performance or complexity of an algorithm. Specifically, it provides an upper bound on the time or space (memory) requirements of an algorithm in the worst-case scenario, which helps in understanding the scalability and efficiency of the algorithm.

### Important Concepts

- **Growth is with respect to the input:** The time complexity of an algorithm is typically expressed in terms of its growth rate as the size of the input increases. This is often represented using Big O notation. For example, an algorithm with a time complexity of O(n) grows linearly with the size of the input.

- **Constants are dropped:** When expressing time complexity, we're usually interested in the growth rate of the algorithm as the input size increases, not the exact number of operations. Therefore, constants and smaller terms are often dropped in Big O notation. For example, if an algorithm takes 2n + 10 operations, we would say it has a time complexity of O(n), not O(2n + 10).

- **Worst-case analysis:** When analyzing an algorithm's time complexity, we typically focus on the worst-case scenario. This provides an upper bound on the algorithm's runtime, helping us understand its performance under challenging conditions.

- **Average case complexity:** While worst-case complexity gives us an upper bound, average-case complexity describes how the algorithm performs on average. However, it's often more difficult to calculate because it requires knowledge about the distribution of all possible inputs.

- **Best case complexity:** This is the lower bound of the time complexity, representing the minimum amount of time the algorithm will take. However, it's generally not as useful as the worst-case and average-case complexity, because it represents an ideal scenario that may not occur often in practice.

- **Space complexity:** In addition to time complexity, it's also important to consider an algorithm's space complexity, or the amount of memory it requires. Like time complexity, space complexity is often expressed in Big O notation.

### Big O Complexity Classes

- **O(1) - Constant Time:** The algorithm takes the same amount of time to complete, regardless of the input size.

  - Popular Algorithms:
    - Array element access
    - Hash table insertion and lookup
  
- **O(log n) - Logarithmic Time:** The time complexity increases logarithmically with the input size.

  - Popular Algorithms:
    - Binary Search
    - Finding the largest/smallest element in a binary search tree
  
- **O(n) - Linear Time:** The time complexity increases linearly with the input size.

  - Popular Algorithms:
    - Linear Search
    - Finding the maximum or minimum in an unsorted array
    - Iterating through all the elements of a list
    - Reversing a linked list
    - Detecting a cycle in a linked list
    - Pre-order Tree Traversal
    - In-order Tree Traversal
    - Post-order Tree Traversal

- **O(n log n) - Linearithmic Time:** Time complexity increases linearly with the input size multiplied by its logarithm. This is more efficient than quadratic time but less efficient than linear time, often occurring in divide and conquer algorithms.
  
  - Popular Algorithms:
    - Merge Sort
    - Heap Sort
  
- **O(n + m) - Linear Time (n and m are the number of nodes and edges respectively):** The time complexity increases linearly with the sum of the number of nodes and edges in the input.

  - Popular Algorithms:
    - Depth-First Search (DFS)
    - Breadth-First Search (BFS)
  
- **O((E+V)logV) - Log-linear Time (E is the number of edges, V is the number of vertices):** The time complexity of this algorithm is log-linear, meaning it increases logarithmically with the number of edges and vertices in the input. This complexity is often seen in algorithms that involve graph traversal or sorting.

  - Popular Algorithms:
    - Dijkstra's Algorithm (with a binary heap)
  
- **O(ElogE) or O(ElogV) - Log-linear Time (E is the number of edges, V is the number of vertices):** This time complexity indicates that the algorithm's performance grows logarithmically with the number of edges (E) or vertices (V) in the input. It is commonly used in algorithms that involve sorting or searching operations.

  - Popular Algorithms:
    - Kruskal's Algorithm
  
- **O(n^2) - Quadratic Time:** Time complexity increases quadratically with the input size. Common in algorithms with nested iterations over the data.

  - Popular Algorithms:
    - Bubble Sort
    - Insertion Sort
    - Selection Sort
    - Iterating through all pairs in a list (e.g., checking for duplicates)
  
- **O(2^n) - Exponential Time:** The time complexity doubles with each addition to the input data set.

  - Popular Algorithms:
    - Fibonacci sequence (recursive approach)
    - Power set
    - Backtracking algorithms (e.g., solving the N-Queens problem)
  
- **O(n!) - Factorial Time:** Extremely inefficient with large input sizes, common in algorithms that generate all permutations of a dataset.

  - Popular Algorithms:
    - All permutations of a given set/array
    - Solving the Traveling Salesman Problem via brute force


## Important Definitions

- **Time Complexity:** The computational complexity that describes the amount of time an algorithm takes in terms of the amount of input to the algorithm.

- **Space Complexity:** The amount of memory used by an algorithm (including the input values to the algorithm) to execute and produce the result.

- **Big O Notation:** A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, it is commonly used to describe the time or space complexity of algorithms.

- **Data Structures:** Ways of organizing and storing data so that it can be accessed and modified efficiently. They often affect an algorithm's performance.

  Here are some commonly used data structures:

  - **Array:** A collection of elements stored in contiguous memory locations. Elements can be accessed using their index.

  - **Linked List:** A collection of nodes where each node contains a value and a reference to the next node.

  - **Stack:** A data structure that follows the Last-In-First-Out (LIFO) principle. Elements can be added or removed only from the top.

  - **Queue:** A data structure that follows the First-In-First-Out (FIFO) principle. Elements can be added at the rear and removed from the front.

  - **Tree:** A hierarchical data structure consisting of nodes connected by edges. Each node can have zero or more child nodes.

  - **Graph:** A collection of nodes (vertices) connected by edges. It can be either directed or undirected.

  - **Hash Table:** A data structure that uses a hash function to map keys to values, allowing for efficient retrieval and insertion.

  - **Heap:** A complete binary tree that satisfies the heap property. It can be a min-heap (parent nodes are smaller than their children) or a max-heap (parent nodes are larger than their children).

  - **Trie:** A tree-like data structure used for efficient retrieval of keys in a dataset.

  - **Set:** A collection of unique elements with no specific order.

  - **Map:** A collection of key-value pairs, where each key is unique.

- **Memoization:** Optimization technique where you store the results of expensive function calls and reuse them when the same inputs occur again. This can significantly improve the performance of algorithms that involve repeated computations.

- **Tabulation:** Optimization technique where you solve a problem by solving smaller sub-problems in a bottom-up manner and storing the results of each sub-problem in a table (usually an array or a matrix). The solution to the original problem is then computed using the solutions to the sub-problems.

- **Recursion:** A method of solving problems where the solution to a particular instance of a problem is derived from the solution of smaller instances of the same problem. It involves a function calling itself until a base case is reached.

- **Iteration:** A process wherein a set of instructions or structures are repeatedly executed until a certain condition is met. It is typically implemented with loops.

- **Divide and Conquer:** An algorithm design paradigm based on multi-branched recursion. A divide-and-conquer algorithm works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly.

- **Greedy Algorithm:** An algorithmic paradigm that follows the problem-solving heuristic of making the locally optimal choice at each stage with the hope of finding a global optimum.

- **Dynamic Programming:** A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

- **Brute Force:** A very general problem-solving technique that consists of systematically enumerating all possible candidates for the solution and checking whether each candidate satisfies the problem's statement.

- **Sorting Algorithm:** An algorithm that puts elements of a list in a certain order. The most frequently used orders are numerical order and lexicographical order.

- **Searching Algorithm:** An algorithm that retrieves information stored within some data structure. Examples are depth-first search and breadth-first search in a tree or graph data structure.

- **Algorithm Efficiency:** A measure of the resources an algorithm requires, considering both time and space complexity.

- **Asymptotic Analysis:** Evaluating the performance of an algorithm as the input size approaches infinity.

