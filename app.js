var App = (function() {

  // Module's code here...
  //We need to rewrite code as to make user an object


  let module = {};
  let posts = [];
  //message constructor
  Message = function(headline, textInput, imgURL) {
    this.headline = headline;
    this.textInput = textInput;
    this.imgURL = imgURL;
    this.inHTML = function() {

      elm = document.getElementsByClassName("container-fluid")[0];
      elm.classList.remove("container-fluid");
      void elm.offsetWidth;
      elm.classList.add("container-fluid");
      document.getElementsByClassName("col-5 left")[0].innerHTML = '<h2>' + this.headline + '</h2>' +
        '<p class="lead">' + this.textInput + '</p>';
      document.getElementById("imageHolder").setAttribute("src", this.imgURL);
    }
  }
  //custom messages
  let postOne = new Message("Urban Colours and Metropolitian prefecture", "Tokyo is often referred to as a city, but is officially known and governed as a “metropolitan prefecture,” which is different from a city and combines elements of a city and a prefecture. The Tokyo metropolitan government administers the 23 Special Wards of Tokyo. These Special Wards contain the districts that have become world famous for their different characteristics. To make things even more confusing, Japanese people will refer to each district as a city. Good luck finding your way around the city…I mean district…I mean ward?", "images/tokyoimg1.jpg");
  posts.push(postOne);
  let postTwo = new Message("Augusta Antonina", "Istanbul is the largest and most populous city in Turkey. Spread across Bosporus Channel, Istanbul is one of the world’s greatest cities known for its magnificent historical monuments and scenic beauty. With an amazing cultural and architectural heritage, Istanbul is a major tourist attraction. It is not only popular locally but is also fast becoming a favorite destination for international tourist.", "images/istanbulpic.jpg");
  posts.push(postTwo);
  let postThree = new Message("New York", "New York is the third most populous state in the United States after California and Texas. Of its population of 19 million, a little over 8 million live in New York City alone. In fact, about 1 in every 38 people in the U.S. lives in New York City, and more people live in New York City than in Australia and Switzerland combined.", "images/nypic.jpg");
  posts.push(postThree);

  let rightArrow = document.getElementById("goRight");
  let leftArrow = document.getElementById("goLeft");
  let currentIndex = 0;
  rightArrow.addEventListener("click", function(event) {
    event.preventDefault();
    if (currentIndex == posts.length - 1) {
      currentIndex = 0;

    } else {
      currentIndex += 1;

    }
    posts[currentIndex].inHTML();

  });

  leftArrow.addEventListener("click", function(event) {
    event.preventDefault();
    if (currentIndex == 0) {
      currentIndex = posts.length - 1;
    } else {
      currentIndex -= 1;
    }
    posts[currentIndex].inHTML();


  });
  posts[0].inHTML();




  return module;

})()
