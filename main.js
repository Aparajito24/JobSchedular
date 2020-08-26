var botui = new BotUI("help-bot");
botui.message
  .add({
    delay: 500,
    loading: true,
    content: "Hi! Welcome to my website",
  })
  .then(function () {
    return botui.message.add({
      delay: 500,
      loading: true,
      content: "How can I help?",
    });
  })
  .then(function () {
    return botui.action.button({
      action: [
        {
          text: "What are your opening hours?",
          value: "hours",
        },
        {
          text: "What do you do?",
          value: "do",
        },
      ],
    });
  })
  .then(function (res) {
    var message;
    if (res.value === "hours") {
      message = "That’s a good one! This is a website, it’s always open.";
    } else if (res.value === "do") {
      message =
        "I’m a product-focused Scrum master<br><br>I also have a keen interest in chatbots and web analytics";
    }
    return botui.message.add({
      type: "html",
      delay: 1000,
      loading: true,
      content: message,
    });
  })
  .then(function (index) {
    return botui.action.button({
      action: [
        {
          text: "Cool!",
          value: "cool",
        },
      ],
    });
  })
  .then(function (index) {
    return botui.message.add({
      delay: 1000,
      loading: true,
      content: "I know! Thanks.",
    });
  })
  .then(function () {
    return botui.action.button({
      action: [
        {
          text: "What is the eligibility criteria?",
          value: "eligible",
        },
        {
          text: "How many rounds are there in this interview session?",
          value: "interview",
        },
      ],
    });
  })
  .then(function (res) {
    var message;
    if (res.value === "eligible") {
      message =
        "Generally its 60 percentile,but please check to our official website.";
    } else if (res.value === "interview") {
      message =
        "Oohaa!! Thats great question<br><br>There will be three rounds.Please go to the website";
    }
    return botui.message.add({
      type: "html",
      delay: 1000,
      loading: true,
      content: message,
    });
  })
  .then(function () {
    return botui.action.button({
      action: [
        {
          text: "Is this interview will be virtrual?",
          value: "virtual",
        },
        {
          text: "What are the job locations?",
          value: "locations",
        },
      ],
    });
  })
  .then(function (res) {
    var message;
    if (res.value === "virtual") {
      message = "LOL!!! Covid 19 Alert /_. Interview will be purely virtual..";
    } else if (res.value === "locations") {
      message =
        "We have five branches across India.<br>Chennai,Pune,Bangalore,Kolkata,New Delhi.";
    }
    return botui.message.add({
      type: "html",
      delay: 1000,
      loading: true,
      content: message,
    });
  })
  .then(function () {
    return botui.action.button({
      action: [
        {
          text: "Is there any succes myntra to crack this exam?",
          value: "myntra",
        },
        {
          text: "Thank You",
          value: "you",
        },
      ],
    });
  })
  .then(function (res) {
    var message;
    if (res.value === "myntra") {
      message =
        "Haha.. Try to focus more on your work. There is no shortcuts.<br>Believe in yourself 🙂";
    } else if (res.value === "you") {
      message = "Welcome.. Best wishes for your future.";
    }
    return botui.message.add({
      type: "html",
      delay: 1000,
      loading: true,
      content: message,
    });
  });
