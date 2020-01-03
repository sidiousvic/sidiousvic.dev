const logs = [
  {
    id: 001,
    date: "JAN 1 2020",
    tags: ["meta", "shiplog", "javascript", "dom"],
    title: "The Shiplog, where I talk about random sh*t.",
    body: `
       
        Hello, welcome to the shiplog. This is a bare-bones blog where I will document my progress as a programmer.
    
        I don't use a database — all the posts are stored in a master object in my website's source code. I render posts dynamically using raw JavaScript and the DOM API.
    
        A post object looks like this:
    
        <div class="code">
    010220: {
        title: "This is the title of the post.",
        body: "This is the body of the post."
    }
        </div>
    
        I wanted a very simple CMS where I could write posts by adding them to an object.
    
        I want to include pagination in the near future.
        `
  },
  {
    id: 002,
    date: "JAN 3 2020",
    tags: ["test", "code"],
    title: "A test post.",
    body: `

          This is a test post.

          <div class="code">
    tests.map(test => "This is a test code block");
          </div>
          `
  },
  {
    id: 003,
    date: "JAN 3 2020",
    tags: ["test", "img"],
    title: "Another test post.",
    body: `

          This is a test post, with an image.

          <img src="https://clipart4biz.com/images/transparent-clothes-animated-3.gif">
          `
  }
];

// <div class="code"> </div>
