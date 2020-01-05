const logs = [
  {
    id: 001,
    date: "JAN 1 2020",
    tags: ["meta", "shiplog", "javascript", "dom"],
    title: "The Shiplog, where I talk about random sh*t.",
    body: `
       
        Hello, welcome to the shiplog. This is a bare-bones blog where I will document my progress as a programmer.
    
        I don't use a database — all the posts are stored in an object in my website's source code. I render posts dynamically using raw JavaScript and the DOM.
    
        A post object looks like this:
    
        <div class="code">
    {
        id: 001,
        date: "JAN 1 2020",
        tags: ["meta", "shiplog", "javascript", "dom"],
        title: "The Shiplog, where I talk about random sh*t.",
        body: "..."
    }
        </div>
    
        I wanted a very simple CMS where I could write posts by editing them in an html file, then running a script that adds them to the database object. Posts support inline code snippets, <div class="code-i">e = mc^2</div>. I will automate the editing process and want to include pagination in the near future.

        This is a test post, with an image.<br>
        <img src="https://clipart4biz.com/images/transparent-clothes-animated-3.gif">
        `
  },
  {
    id: 002,
    date: "JAN 5 2020",
    tags: ["recursion", "javascript"],
    title: "Visualizing Recursion",
    medium: "https://www.medium.com",
    body: `
    
Recursion is unintuitive and challenging to understand. I think thats because
it's not easy to visualize it. In this log I will tackle a recursive problem and
try to offer a graphic representation of what's going on when we call a
function within itself.

<h2>Rock, Paper, Scissors!</h2>

The problem is pretty straightforward. We have to find out the number of
possible combinations (combos) in a n-round rock, scissors, paper game. The
following is a common recursive solution.

<div class="code">
    const rockPaperScissors = (rounds = 3) => {
      let out = [];
      const weapons = ["rock", "scissors", "paper"];
      const play = (rounds, combo = []) => {
        // exit case
        if (rounds < 1) {
          out.push(combo);
          return;
        }
        // recursive case
        for (let i = 0; i < weapons.length; i++) {
          const weapon = weapons[i];
          play(rounds - 1, combo.concat(weapon));
        }
      };
      play(rounds);
      return out;
    };
</div>

So what's happening here? Inside <div class="code-i">rockPaperScissors</div>, we define our recursive function <div class="code-i">play</div>. This function takes two parameters: a number of rounds, and an array containing the current combo. If we have no remaining rounds, we return the combo. If there are remaining rounds to play, we loop through our weapons array (starting with rock) and call <div class="code-i">play</div> with 1 less number of rounds and a combo with the added weapon. A few things are happening when we begin our recursion. Let's go step by step.

<div class="code">    
        R
      / | \\
     R  P  S

</div>

In the first iteration, the weapon we're looking at is rock (R). We call <div class="code-i">play(rounds - 1, combo.concat(weapon));</div> and begin a new <div class="code-i">play()</div>. 

In this new context, the number of rounds is <div class="code-i">2</div>. The current combo is <div class="code-i">["rock"]</div>. The stack might look something like this:

<div class="code">
        play()                      rounds: 2     combo: ["rock"]
        -----------------------------------------------------------------------
        play()                      rounds: 3     combo: []
        -----------------------------------------------------------------------
        rockPaperScissors()

</div>

We check again if <div class="code-i">rounds < 1</div>, and loop through weapons again, and start with rock again, and fire off <div class="code-i">play(rounds - 1, combo.concat(weapon))</div> again. If we follow this pattern, eventually our recursion tree will look like this:

<div class="code">
                                R
                     /          |        \\
                    R           P          S
              /     |     \\
             R      P      S
           / | \\
          R  P  S 
  
</div>

And our stack now might look like this:

<div class="code">
          play()                    rounds: 0     combo: ["rock", "rock", "rock"]
          -----------------------------------------------------------------------
          play()                    rounds: 1     combo: ["rock", "rock"]
          -----------------------------------------------------------------------
          play()                    rounds: 2     combo: ["rock"]
          -----------------------------------------------------------------------
          play()                    rounds: 3     combo: []
          -----------------------------------------------------------------------
          rockPaperScissors()

</div>

<h2>Recursion is a tree 🌲</h2>

At this point, if we check again, our exit case will be activated. <div class="code-i">rounds < 1</div>
evaluates to <div class="code-i">true</div>, and we push our current combo <div class="code-i">["rock", "rock", "rock"]</div>
into our <div class="code-i">output</div> array as a possible combination. <br> Now here's where things get interesting.
<br> 
If you have a keen eye, you might have noticed that so far we have traveled a few levels down the tree, but we haven't touched all the branches yet. We have stayed in the <div class="code-i">rock</div> branch exclusively. 
<br>
At the point where we return, however, we pop that last level off the stack, and return to the previous one, where things will change:

<div class="code">
        play()                      rounds: 1 combo: ["rock", "rock"] <--- we're here again!
        ----------------------------------------------------------------------- 
        play()                      rounds: 2 combo: ["rock"]
        ----------------------------------------------------------------------- 
        play()                      rounds: 3 combo: []
        -----------------------------------------------------------------------
        rockPaperScissors()

</div>

This is the first time we go into the second iteration of our <div class="code-i">for</div> loop, and our <div class="code-i">weapon</div>
becomes <div class="code-i">paper</div>. We then call <div class="code-i">play()</div> again and we end up in the last level again, but with a different combination:

<div class="code">
  <pre>
          play()                      rounds: 1 combo: ["rock", "rock", "paper"]
          ----------------------------------------------------------------------- 
          play()                      rounds: 1 combo: ["rock", "rock"]
          ----------------------------------------------------------------------- 
          play()                      rounds: 2 combo: ["rock"]
          ----------------------------------------------------------------------- 
          play()                      rounds: 3 combo: []
          -----------------------------------------------------------------------
          rockPaperScissors()
      </pre
  >
</div>

And we add it to
<div class="code-i">output</div>
.

The pattern is repeated and we traverse the tree until we find ourselves back at the first level, and exhaust our rounds there. 
<br>
I hope this helped you conceptualize recursion in a visual way. Just remember, recursion is a tree 🌲, and every time you call a function within itself, you are planting another. 🌱

    `
  }
  // {
  //   id: xxx,
  //   date: "xxx",
  //   tags: ["xxx", "xxx", "xxx", "xxx"],
  //   title: "xxx",
  //   body: `xxx`
  // }
];
