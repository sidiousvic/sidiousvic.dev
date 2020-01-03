const logs = [
  {
    id: 001,
    date: "JAN 1 2020",
    tags: ["meta", "shiplog", "javascript", "dom"],
    title: "The Shiplog, where I talk about random sh*t.",
    body: `
       
        Hello, welcome to the shiplog. This is a bare-bones blog where I will document my progress as a programmer.
    
        I don't use a database — all the posts are stored in an object in my website's source code. <br> 
        
        I render posts dynamically using raw JavaScript and the DOM.
    
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
    
        I wanted a very simple CMS where I could write posts by editing them in an html file, then running a script that adds them to the database object. Posts support inline code snippets like these: <div class="code-i">e = mc^2</div>. I will automate the editing process and want to include pagination in the near future.

        This is a test post, with an image.<br>
        <img src="https://clipart4biz.com/images/transparent-clothes-animated-3.gif">
        `
  }
];

// <div class="code"> </div>
