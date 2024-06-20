let tshirt = [
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
        title: "KINDNESS IS REALLY SEXY",
        description: "catharsis hoodie",
        price: "$150",
        image: "/image/hoodie/cat-kindness.webp",
        star: "✭✭✭✭✭ (23)",
      },
    {
        id: 3,
        title: "VINTAGE BLACK CAP",
        description: "catharsis accessories",
        price: "$70",
        image: "/image/accessories/vintageBlack.webp",
        star: "✭✭✭✭✭ (10)",
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


  function generateTshirtRows() {
    const tableBody = document.getElementById('tshirt-table-body');
    let html = '';

    tshirt.forEach(item => {
      html += `
        <tr>
          <td class="table-cell px-6 py-3">${item.id}</td>
          <td class="table-cell px-6 py-3">${item.title}</td>
          <td class="table-cell px-6 py-3">${item.description}</td>
          <td class="table-cell px-6 py-3">${item.price}</td>
          <td class="table-cell px-6 py-3"><img src="${item.image}" alt="${item.title}" class="h-12"></td>
          <td class="table-cell px-6 py-3"><button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onclick="deleteTshirt(${item.id})">Delete</button></td>
        </tr>
      `;
    });

    tableBody.innerHTML = html;
  }

  function addTshirt(event) {
    event.preventDefault();


    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    const newTshirt = {
      id: tshirt.length + 1, 
      title: title,
      description: description,
      price: price,
      image: image,
      star: "New (0)", 
    };

    tshirt.push(newTshirt);


    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('price').value = '';
    document.getElementById('image').value = '';
    generateTshirtRows();
  }
  function deleteTshirt(id) {
    tshirt = tshirt.filter(item => item.id !== id); 
    generateTshirtRows();
  }
  window.addEventListener('load', generateTshirtRows);
  document.getElementById('add-tshirt-form').addEventListener('submit', addTshirt);
