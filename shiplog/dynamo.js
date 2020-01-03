const shiplog = document.querySelector(".shiplog");

document.addEventListener("DOMContentLoaded", () => {
  logs.map(log => {
    const logWrapper = document.createElement("div");
    logWrapper.className = "log-wrapper";
    logWrapper.id = log.title.replace(/[^a-zA-Z]+/g, "_").toLowerCase();
    // meta
    const logDate = document.createElement("sub");
    logDate.className = "log-date";
    logDate.innerHTML = log.date;
    // title
    const logTitle = document.createElement("h1");
    logTitle.className = "log-title";
    logTitle.innerHTML = log.title;
    // tags
    const logTags = document.createElement("div");
    logTags.className = "log-tags";
    log.tags.map(tag => {
      logTag = document.createElement("a");
      logTag.className = "log-tag";
      logTag.innerHTML = "#" + tag;
      logTags.appendChild(logTag);
    });
    // body
    const logBody = document.createElement("p");
    logBody.className = "log-body";
    logBody.innerHTML = log.body;

    // append to wrapper
    logWrapper.appendChild(logDate);
    logWrapper.appendChild(logTitle);
    logWrapper.appendChild(logTags);
    logWrapper.appendChild(logBody);

    // append to shiplog
    shiplog.appendChild(logWrapper);
  });
});
