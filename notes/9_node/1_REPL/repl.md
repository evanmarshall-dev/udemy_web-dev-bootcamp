# Read Evaluate Print Loop (REPL)

- The developer JS console in the browser is a REPL.
- Unlike JS, which runs a script and is completed, REPL is continually listening, waiting and ready to evaluate.
- In the terminal it can be accessed by typing: `node`.
- Once in the REPL there are many commands, but a common one to use when stuck is: `.help`. Another is: `.save` which allows use to save our commands to a file.
- You can also type in JS types such as math: `1 + 2` or strings: `"hello" + "world"`.
- The difference between node (standalone JavaScript) and client-side JavaScript is that we do not have access to anything web specific (i.e. DOM APIs, window or document).
- Compared to the global web element of "window" in client-side JS, Node's global element is called "global".
- You can type: `global` to get a list of methods we can call on it (you do not need to call global before the method calls), for example:

```javascript
setTimeout(() => {
  console.log("HELLO!!!");
}, 3000);
```

- One thing that node does have that client-side JS does not is "modules" which help us interact with files, folders and OS.
- We do not run our code in the node REPL, the same as we do not create app code in the Chrome console. Instead, it is run in a JS file.
