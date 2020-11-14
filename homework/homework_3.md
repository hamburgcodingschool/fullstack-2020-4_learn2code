#### Practice Arrays and For Loops

1. Use a for loop to iterate through all numbers up to 100; Print each number as follows:

  - if the number is divisible by 3 (i%3 === 0), print "ping"
  - if the number is divisible by 5 (i%5 === 0), print "pong"
  - if the number is divisible by 3 AND by 5, print "pingpong"
  - else just print the number

  ```
  1
  2
  ping
  4
  pong
  ping
  7
  8
  ping
  pong
  11
  ping
  13
  14
  pingpong
  ....
  ```

2. Calculate the sum of all values in an array.
  ```
  let values = [12, 13, 14];
  let sum = 0;
  for (let i = 0; i<3; i++){
    // your code here
  }
  console.log(sum);
  // sum should be 39
  ```

3. Find the largest number in an array.

  ```
  let values = [12, 13, 14];
  let max = values[0];   // max is assigned the value 12
  for (let i = 0; i<3; i++){
    // your code here - compare each element in the array with max;
    // if larger, max takes that value;
  }
  console.log(max);
  // max should be 14
  ```

4. Find the smallest number in an array.
  ```
  let values = [12, 13, 14];
  let min = values[0];   // min is assigned the value 12
  for (let i=0; i<3; i++){
    // your code here - compare each element in the array with min;
    // if smaller, min takes that value;
  }
  console.log(min);
  // min should be 12
  ```


#### Build your own chatbot - Stage 2

###### 2.1 Play a singing game with Sally
Because it can do loops, your bot can now sing songs.

Make your bot compose a simple song for you.

The bot should:

- [ ] ask you for a number
- [ ] ask you for a word
- [ ] compose a song based on the values you gave it

Your bot should say something similar to this:

```
Hey! Tell me a number.
> 7
Great! Now give me a word.
> la
```

**Example Output**
```
lalalalalalala
```

**Hints**
  - Use a for loop
  - Create a variable outside the for loop, to store the song content
  - For each iteration in the for loop: add the word to the song content


###### 2.2 Sally wants to help you keep track of your social media consumption

Let's have Sally keep track of the following: the number of minutes that the user has spent online each day, for the last 5 days.

Sally can then compute some statistics for us.

The bot should:

  - [ ] declare an array of numbers
  - [ ] print the array of numbers
  - [ ] Print the average time spent on social media (in minutes)
  - [ ] Print the maximum time spent in a day (in minutes)
  - [ ] Print the minimum time spent in a day (in minutes)
  - [ ] Print the total amount of time spent on social media (in minutes)
  - [ ] All of the above, but in hours


  **Example Output**
  ```
  This is the time you spent on social media in the last 5 days:
  [40, 30, 20, 45, 15]

  The average time is: 35 minutes.

  The maximum time spent in a day is: 45 minutes.

  The minimum time spent in a day is: 15 minutes.

  The total time spent in the last 5 days is: 150 minutes.

  ```

  **Hints**

  - You can print all values in an array, just like you print a single variable
      ```
      console.log(values);
      // will print:
      [40, 30, 20, 45, 15]
      ```
