const sentence = "Hello there!";
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 1000 * (i + 1));
}

setTimeout(() => {
  console.log(); // output a newline character // it basically moves the cursor to the next line
}, delay);