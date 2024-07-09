let data = {
  productImage:
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
  heading: "Lorem ipsum dolor sit amet",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
  author: {
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
    name: "John Doe",
  },
  date: "Oct 08, 2023",
};

let placeholder = document.querySelector(".cont");
let boxHead = document.querySelector(".box-head");
let heading = document.querySelector(".heading");
let desc = document.querySelector(".desc");
let photo = document.querySelector(".photo");
let authorName = document.querySelector(".name");
let date = document.querySelector(".date");

setTimeout(loadcontent, 2500);

function loadcontent() {
  placeholder.classList.remove("placeholder");

  heading.innerText = data.heading;
  desc.innerText = data.desc;
  authorName.innerText = data.author.name;
  date.innerText = data.date;

  boxHead.style.backgroundImage = `url("${data.productImage}")`;
  photo.style.backgroundImage = `url("${data.author.image}")`;
}
