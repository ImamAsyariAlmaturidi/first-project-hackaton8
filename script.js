const tshirt = [
  {
    id: 1,
    title: "SENSITIVITY IS A POWER",
    description: "catharsis t-shirt",
    price: "$100",
    image: "/image/t-shirt/cat-sensitivity.webp",
  },
  {
    id: 2,
    title: "CUTE BUT ARTIST",
    description: "catharsis t-shirt",
    price: "$100",
    image: "/image/t-shirt/cat-cute.webp",
  },
  {
    id: 3,
    title: "STAY AL DENTE",
    description: "catharsis t-shirt",
    price: "$100",
    image: "/image/t-shirt/cat-aldente.webp",
  },
  {
    id: 4,
    title: "LA DOCLE VITA",
    description: "catharsis t-shirt",
    price: "$100",
    image: "/image/t-shirt/cat-dolcevita.webp",
  },
  {
    id: 5,
    title: "BREAD & BOUNDARIES",
    description: "catharsis t-shirt",
    price: "$100",
    image: "/image/t-shirt/cat-boundaries.webp",
  },
];

const hoddie = [
  {
    id: 1,
    title: "WHAT'S REALLY COOL IS BEING GRATEFUL",
    description: "catharsis hoodie",
    price: "$150",
    image: "/image/hoodie/cat-cool-hoodie.webp",
  },
  {
    id: 2,
    title: "KINDNESS IS REALLY SEXY",
    description: "catharsis hoodie",
    price: "$150",
    image: "/image/hoodie/cat-kindness.webp",
  },
  {
    id: 3,
    title: "NORMALIZE EMOTIONAL EXPRESSION",
    description: "catharsis hoodie",
    price: "$150",
    image: "/image/hoodie/cat-normalize.webp",
  },
  {
    id: 1,
    title: "FEELING A BIT OVERWHELMED",
    description: "catharsis hoodie",
    price: "$150",
    image: "/image/hoodie/cat-overwhelmed.webp",
  },
  {
    id: 5,
    title: "LOST & NOT FOUND",
    description: "catharsis hoodie",
    price: "$150",
    image: "/image/hoodie/cat-lost.webp",
  },
];

const accessories = [
  {
    id: 1,
    title: "VINTAGE CREAM CAP",
    description: "catharsis accessories",
    price: "$70",
    image: "/image/accessories/vintageCream.webp",
  },
  {
    id: 2,
    title: "VINTAGE BLACK CAP",
    description: "catharsis accessories",
    price: "$70",
    image: "/image/accessories/vintageBlack.webp",
  },
];


const user = [
  {
    role: "admin",
    username: "admin",
    password: "admin12345",
  },
  {
    role: "user",
    username: "imam",
    password: "imam12345",
  },
];

const form = document.querySelector("form");

const container = document.getElementById("content");
console.log(container);

tshirt.forEach((element) => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText = `id: ${element.id}, title: ${element.title}, description: ${element.description}, price: ${element.price}`;
    ul.appendChild(li);
    container.append(ul);
  });

const submitForm = (event, database) => {
  event.preventDefault();
  let username = event.target.username.value;
  let password = event.target.password.value;

  const user = database.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    alert(`Welcome ${user.username}`);
    window.location.href = "dashboard.html";
  } else {
    alert("invalid credentials, please invalid username or password");
  }
};

form.addEventListener("submit", (e) => {
  submitForm(e, user);
});
