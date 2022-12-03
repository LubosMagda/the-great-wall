# [The Great Wall](https://open.spotify.com/track/0SoS96IyaovKL4MF8FAet3)

The Tsort kingdom is fortified by The Great Wall (the wall is not connected to form a circle as the kingdom is protected by the Circle Sea from the northern side).
The Great Wall is enhanced by $n$ watchtowers.

The kingdom is besieged by the Quisition of Omnia that operates land forces only.
Each day an attack is launched against all watchtowers, some attacks are successful.
Each night Tsort restores the defeated watchtowers ready for the next day.
The only way for Omnia to win is for them to take down two adjacent watchtowers so they can march their troops in.

**Count the number of different ways Tsort can resist the siege for given $n$**:

- **Explorer Level:** $n = 20$

- **Coder Level:** $n = 70$

- **Pro Level:** $n = 24 * 12 * 2022$ (since resulting number has $\approx 120k$ digits, provide only $5000$ *least* significant digits, base $10$)

- **Guru Level:** $n = 15!$ (since resulting number has $\approx 10^{10}$ digits, provide only $5000$ *least* significant digits, base $10$)

- **Knuth Level:** $n = 3^{(5^8)}$ (since resulting number has $\approx 10^{100000}$ digits, provide only $5000$ *least* significant digits, base $10$) 

The goal is to design an algorithm that solves the problem for *arbitrary* $n \in \mathbb{N}, n > 1$ in the *shortest* amount of time (for output longer than $5000$ digits it is sufficient to provide only $5000$ *least* significant digits, base $10$).
In general, the implemented algorithm should run on a [reasonable box](https://www.gitpod.io/) in [reasonable amount of time](https://86400.com.au). 

### Example

**Input:** $n = 3$

**Output:** $5$

**Explanation:** There are $5$ scenarios (`000`, `001`, `010`, `100`, `101`) where the Tsort kingdom remains unconquered and
$3$ scenarios (`110`, `011`, or `111`) where the kingdom is defeated.

## Constraints

- no external libraries are allowed for implementation (except for `debug` and `cli-progress`), see [package.json](package.json)
- no external resources except for
  [js](https://developer.mozilla.org/en-US/docs/Web/JavaScript) ([ES2022](https://262.ecma-international.org/13.0/)),
  [ts](https://www.typescriptlang.org/docs/),
  [node](https://nodejs.org/dist/latest-v18.x/docs/api/) documentation and
  [wiki](https://en.wikipedia.org/wiki/Main_Page) should be used
- the input is expected to be hardcoded in the source code and does not have to be parsed as an input string, see [solution.ts](src/solution.ts)

## Next steps

1. clone this repo
2. create branch with your name, eg. `lubos-magda`
3. make sure you do not push your branch (your solution is a ✨ secret ✨ for now)
4. choose your level and implement the algorithm (higher level = more rewarding experience)
5. run `npm run start:unix` (on Mac) or `npm run start:linux` (on Linux / gitpod)
6. send the output to my company email (output from [gitpod](https://www.gitpod.io/) is preferable), eg.
   ```
   explorer 1234
           Command being timed: "ts-node src/solution.ts"
           User time (seconds): 1.79
           System time (seconds): 0.15
           Percent of CPU this job got: 151%
           Elapsed (wall clock) time (h:mm:ss or m:ss): 0:01.28
           Average shared text size (kbytes): 0
           Average unshared data size (kbytes): 0
           Average stack size (kbytes): 0
           Average total size (kbytes): 0
           Maximum resident set size (kbytes): 153604
           Average resident set size (kbytes): 0
           Major (requiring I/O) page faults: 0
           Minor (reclaiming a frame) page faults: 43016
           Voluntary context switches: 870
           Involuntary context switches: 24
           Swaps: 0
           File system inputs: 25696
           File system outputs: 0
           Socket messages sent: 0
           Socket messages received: 0
           Signals delivered: 0
           Page size (bytes): 4096
           Exit status: 0
   ```
7. I'll get in touch with you
