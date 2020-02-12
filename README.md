# Calculator Task (React)

#### Task - https://github.com/rolling-scopes-school/tasks/blob/master/tasks/calculator.md
#### Result - https://moiseenokv.github.io/projects/calculator-react/

#### Screenshots

- [screen](https://prnt.sc/r1fxer)


#### Deadline - 12.02.2020 / 12.02.2020

### Evaluation

## Score criteria

Basic (70) + Normal (120) + Extra (40) - +230

#### Basic scope
Max - **+70**

 - Loan calculator (+20) [**DONE**]
 - Lease calculator (+20) [**DONE**]
 - Info card (+10) [**DONE**]
 - Calculation logic (monthly payment and taxes are updated properly) (+20) [**DONE**]

#### Normal scope
Max - **+120**

 - Spinner (+10)
 - Data shares between loan and lease calculator (+20) [**DONE**]
 - Data loads and calculations does asynchronously (result of the function that loads data about dealer and car is Promise. result of the function that calculates taxes and monthly payment is Promise) (+10) [**DONE**]
 - Hoc, children or render pop is used (+20) [**DONE**]
 - Validation for Down Payment and Trade-In (validation message is shown, new calculation haven't run: monthly payment remains the same) (+40) [**DONE**]
 - Inputs display their values with currency sign (if applicable. Ex.: trade-In, Down Payment) (+20) [**DONE**]

#### Extra (additional) scope
Max - **+40**

 - Keyboard support (+20) [**DONE**]
 - Session storage (data saves to storage and restores after page reload). (+20) [**DONE**]

## Cross-check requirements
 - Flow: https://github.com/rolling-scopes-school/docs/blob/master/docs/cross-check-flow.md
 
    Example 1: Validation for Down Payment and Trade-In
      - validation message is shown, new calculation haven't run - 40
      - validation message is shown && new calculation is run or validation message is not shown && new calculation haven't run - 20
      - validation hasn't implemented - 0
  
  
 - Fines:
    - -50 and more - General stage 2 requirements violation or inappropriate quality of the code (depending on the decision of the checking)
    - -10 there are errors in web console
    - -50 there are errors preventing app from normal work
    - -10 uses API key from description, not your own
    - -20 lease and loan calculators look the same
