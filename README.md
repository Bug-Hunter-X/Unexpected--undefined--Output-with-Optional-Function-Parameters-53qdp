# TypeScript Optional Parameter Bug

This example demonstrates a common point of confusion regarding optional parameters in TypeScript.  When a function has an optional parameter and that parameter is explicitly passed as 'undefined', it's treated differently than if the parameter is simply omitted.

The issue is that 'undefined' is still a value, so the function receives it instead of treating the parameter as absent. This can lead to unexpected 'undefined' output, especially when the function doesn't explicitly check for 'undefined'.

The solution involves checking for 'undefined' within the function or using a different approach to manage optional parameters.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory using your terminal.
3. Run `tsc bug.ts` to compile the TypeScript file.
4. Run `node bug.js` to see the output. Note the 'undefined' output in both cases.

## Solution

The provided `bugSolution.ts` file demonstrates how to handle the optional parameter to avoid the unintended 'undefined' output.