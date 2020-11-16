##### Stage 3

###### 3.1 Play a guessing game with Sally
Implement a guessing game that your bot can play with its users.

The bot should:

- [ ] hardcode a random number (e.g. randomNumber = 78)
WHILE the user did not guess the number:
- [ ] ask the user to input a number
- [ ] check if the guess is correct
- [ ] tell the user: "too large" or "too small"
After the user has guessed the number:
- [ ] tell the user: "good job"

Optional:
- [ ] count how many tries it took the user to guess and tell them: "nice job! you guessed after 5 tries"

Your bot should say something similar to this:

```
I am thinking about a number. Try to guess it!
> 7
My number is larger!
> 400
My number is smaller!
> 70
My number is larger!
...
...
...
> 78
Great job! You guessed the {randomNumber} that I thought of.
```
