##### Refactor the chatbot code you already have

We now know enough to make the communication with the bot much nicer. Using while loops and functions, we can refactor the code we have so far.

The [starting code](https://github.com/hamburgcodingschool/fullstack-2020-4_learn2code/blob/main/code/lesson%206/hw_6.js) makes the bot display a number of options. After we select an option, we can call a function that implements that action.


Copy the code you have into different functions. Ask yourself the following:

- [ ] What should this function do?
- [ ] What parameters does this function need?
- [ ] What does this function return?
- [ ] Is there something that you need to remove from your code to make it work?

Refactor the following functionalities into separate functions:

- [ ] Sally greets the user (hw 2)
- [ ] Sally guesses your number (hw 2)
- [ ] Sally sings a song  (hw 3)
- [ ] Sally does statistics on an array of numbers (hw 3)
- [ ] Sally makes you guess a number   (hw 4)


### Sally - Stage 4

#### 4.1 Sentence Analysis

Sally is turning into a sophisticated bot. It can now analyze your sentences and tell you some fun information about them.

The bot should:

- [ ] ask you for a sentence
- [ ] count the characters in the sentence and tell you if you went over 140 characters
- [ ] print the longest word in your sentence
- [ ] print the average length of the words in your sentence
- [ ] mess up your sentence: replace every 'a' with 'z' and print it back to you
- [ ] find cursing words in your sentence and replace them with "****" - for this you need to define a hardcoded list of curse words


**Hint 1:** Don't forget strings also have the *.length* property
**Hint 2:** Built-in functions are your best friend
**Hint 3:** Ignore non-characters

**Example Output**
```
Hey! Tell me a sentence, I'll do a grammar check for you.

> I think dogs are super nice but cats are super bad and annoying.

Your sentence is 64 characters long.
The longest word in your sentence is: annoying
The average length of the words in your sentence is: ...
I thing dogs zre super nice but czts zre super bzd znd znnoying.
I think dogs are super nice but cats are super *** and ********.
```


##### 4.2 Cipher

Make Sally encode some messages for you. The bot should:

- [ ] take some text as input from the console;
- [ ] parse the text letter by letter;
- [ ] convert each letter to another letter according to the Cipher Rule;
- [ ] print out the encrypted text;

#### The Cipher Rule

Each letter gets shifted to the right by 3 places. As a result, 'a' becomes 'd', 'e' becomes 'h'. The last three letters in the alphabet are wrapped around to the beginning: 'x' becomes 'a', 'y' becomes 'b' and 'z' becomes 'c'. Non-letter characters are not modified.



**Example Input**

```
> hi i am paul
```

**Example Output**

```
kl l dp sdxo
```

**Hint 1:** you can use a string that contains all alphabet letters:

      alphabet='abcdefghijklmnopqrstuvwxyz'

**Hint 2:** you can treat the string alphabet as an array:

      alphabet[0] - will be the letter 'a'

      alphabet[1] - will be the letter 'b'

**Hint 3:** You can get started with the following concepts:

- for Loops
- building a string letter by letter
- array operations
- Builtin function: IndexOf() may be helpful :)
