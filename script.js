const tshirt = [
  {
    id: 1,
    title: "SENSITIVITY IS A POWER",
    description: "catharsis t-shirt",
    price: "$100",
    image: "/image/t-shirt/cat-sensitivity.webp",
    star: "✭✭✭✭✭ (13)",
  },
  {
    id: 2,
    title: "CUTE BUT ARTIST",
    description: "catharsis t-shirt",
    price: "$100",
    image: "/image/t-shirt/cat-cute.webp",
    star: "✭✭✭✭ (8)",
  },
  {
    id: 3,
    title: "STAY AL DENTE",
    description: "catharsis t-shirt",
    price: "$100",
    image: "/image/t-shirt/cat-aldente.webp",
    star: "✭✭✭✭✭ (21)",
  },
  {
    id: 4,
    title: "LA DOCLE VITA",
    description: "catharsis t-shirt",
    price: "$100",
    image: "/image/t-shirt/cat-dolcevita.webp",
    star: "✭✭✭✭✭ (7)",
  },
  {
    id: 5,
    title: "BREAD & BOUNDARIES",
    description: "catharsis t-shirt",
    price: "$100",
    image: "/image/t-shirt/cat-boundaries.webp",
    star: "✭✭✭✭ (15)",
  },
];

const hoddie = [
  {
    id: 1,
    title: "WHAT'S REALLY COOL IS BEING GRATEFUL",
    description: "catharsis hoodie",
    price: "$150",
    image: "/image/hoodie/cat-cool-hoodie.webp",
    star: "✭✭✭ (2)",
  },
  {
    id: 2,
    title: "KINDNESS IS REALLY SEXY",
    description: "catharsis hoodie",
    price: "$150",
    image: "/image/hoodie/cat-kindness.webp",
    star: "✭✭✭✭✭ (23)",
  },
  {
    id: 3,
    title: "NORMALIZE EMOTIONAL EXPRESSION",
    description: "catharsis hoodie",
    price: "$150",
    image: "/image/hoodie/cat-normalize.webp",
    star: "✭✭✭✭ (18)",
  },
  {
    id: 1,
    title: "FEELING A BIT OVERWHELMED",
    description: "catharsis hoodie",
    price: "$150",
    image: "/image/hoodie/cat-overwhelmed.webp",
    star: "✭✭✭ (3)",
  },
  {
    id: 5,
    title: "LOST & NOT FOUND",
    description: "catharsis hoodie",
    price: "$150",
    image: "/image/hoodie/cat-lost.webp",
    star: "✭✭✭✭✭ (12)",
  },
];

const accessories = [
  {
    id: 1,
    title: "VINTAGE CREAM CAP",
    description: "catharsis accessories",
    price: "$70",
    image: "/image/accessories/vintageCream.webp",
    star: "✭✭✭ (8)",
  },
  {
    id: 2,
    title: "VINTAGE BLACK CAP",
    description: "catharsis accessories",
    price: "$70",
    image: "/image/accessories/vintageBlack.webp",
    star: "✭✭✭✭✭ (10)",
  },
];

const gallery = [
  {
    id: 1,
    image: "/image/gallery/1.jpeg",
  },
  {
    id: 2,
    image: "/image/gallery/2.jpeg",
  },
  {
    id: 3,
    image: "/image/gallery/3.jpeg",
  },
  {
    id: 4,
    image: "/image/gallery/4.jpeg",
  },
  {
    id: 5,
    image: "/image/gallery/5.jpeg",
  },
  {
    id: 6,
    image: "/image/gallery/6.jpeg",
  },
  {
    id: 7,
    image: "/image/gallery/7.jpeg",
  },
];

const form = document.querySelector("form");

tshirt.forEach((element) => {
  const container = document.getElementById("container");
  const content = document.getElementById('content')
  const star = document.createElement("span");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h1");
  const price = document.createElement("h5");
  img.classList.add('hover:-translate-y-6');
  img.src = `${element.image}`
  star.innerText = `${element.star}`;
  title.innerText = `${element.title}`;
  price.innerText = `${element.price}`;
  div.appendChild(img)
  div.appendChild(title);
  div.appendChild(star);
  div.appendChild(price);
  container.append(div);
  content.append(container)
});

hoddie.forEach((element) => {
  const container = document.getElementById("container_1");
  const star = document.createElement("span");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h1");
  const price = document.createElement("h5");
  // img.classList.add('w-1/4', 'h-1/4');
  img.src = `${element.image}`
  star.innerText = `${element.star}`;
  title.innerText = `${element.title}`;
  price.innerText = `${element.price}`;
  div.appendChild(img)
  div.appendChild(title);
  div.appendChild(star);
  div.appendChild(price);
  container.append(div);
});

accessories.forEach((element) => {
  const container = document.getElementById("container_2");
  // const container = document.getElementById("content-2");
  const star = document.createElement("span");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h1");
  const price = document.createElement("h5");
  // img.classList.add('w-1/2', 'h-1/2')
  img.src = `${element.image}`
  star.innerText = `${element.star}`;
  title.innerText = `${element.title}`;
  price.innerText = `${element.price}`;
  div.appendChild(img)
  div.appendChild(title);
  div.appendChild(star);
  div.appendChild(price);
  container.append(div);
});

gallery.forEach((element) => {
  const container = document.getElementById("container_3");
  // const container = document.getElementById("content-3");
  const div = document.createElement('div')
  const img = document.createElement('img')
  // img.classList.add('w-1/4', 'h-1/4')
  img.src = `${element.image}`
  div.appendChild(img)
  div.appendChild(img)
  container.append(div)
})
