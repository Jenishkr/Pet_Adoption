const petsData = [
    {
      name: 'Bataku',
      species: 'Duck',
      age: 1,
      image: 'https://i.pinimg.com/originals/ca/cf/c2/cacfc23a467744c147a7b3b193171178.jpg',
    },
    {
      name: 'Jojo',
      species: 'Dog',
      age: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8D-G0b8ka5kyWMioBDY98SOJCYt8Xy7kklA&usqp=CAU',
    },
    {
        name: 'Fluffy',
        species: 'Dog',
        age: 3,
        image: 'https://www.indiabullsrealestate.com/blog/wp-content/uploads/2019/09/pet.jpg',
      },
      {
        name: 'Whiskers',
        species: 'Cat',
        age: 2,
        image: 'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/pet-care/Skyword/images/the-gray-cat-with-green-eyes-lies-on-a-sofa-347812-ref.png',
      },
      {
        name: 'Tuffy',
        species: 'Dog',
        age: 4,
        image: 'https://cdn.askpetguru.com/can_i_bring_a_small_dog_to_a_open_house.jpg',
      },
      // 2nd line
      {
        name: 'Siri',
        species: 'Dog',
        age: 2,
        image: 'https://img.freepik.com/premium-photo/small-dog-breeds-pomeranian-with-brown-hairs-sitting-home-background-waiting-looking-snack-reward_49003-1441.jpg?w=2000',
      },
      {
        name: 'Leo',
        species: 'Dog',
        age: 6,
        image: 'https://images.woodenstreet.de/image/cache/data%2FSleepyCat%2Fsplash-resistant-original-pet-bed-xl-red%2FS-1-750x650.jpg',
      },
      {
        name: 'Foxy',
        species: 'Cat',
        age: 2,
        image: 'https://www.barcs.org/media/CACHE/images/post-images/110277027_1748983718591808_2409347701028044173_n/cefc57591de3b9e5898d2885b5215016.jpg',
      },
      {
        name: 'Coco',
        species: 'Dog',
        age: 1,
        image: 'https://coldwellbankercaine.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-02-at-12.29.17-PM.png',
      },
      {
        name: 'Dora',
        species: 'Cat',
        age: 2,
        image: 'https://moderncat.com/wp-content/uploads/2016/03/homecat-940x640.jpg',
      }, 
    // 3rd line
    {
      name: 'Bataku',
      species: 'Duck',
      age: 1,
      image: 'https://i.pinimg.com/originals/ca/cf/c2/cacfc23a467744c147a7b3b193171178.jpg',
    },
    {
      name: 'Jojo',
      species: 'Dog',
      age: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8D-G0b8ka5kyWMioBDY98SOJCYt8Xy7kklA&usqp=CAU',
    },
    {
        name: 'Fluffy',
        species: 'Dog',
        age: 3,
        image: 'https://www.indiabullsrealestate.com/blog/wp-content/uploads/2019/09/pet.jpg',
      },
      {
        name: 'Whiskers',
        species: 'Cat',
        age: 2,
        image: 'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/pet-care/Skyword/images/the-gray-cat-with-green-eyes-lies-on-a-sofa-347812-ref.png',
      },
      {
        name: 'Tuffy',
        species: 'Dog',
        age: 4,
        image: 'https://cdn.askpetguru.com/can_i_bring_a_small_dog_to_a_open_house.jpg',
      },
  ];
  
  function createPetCard(pet) {
    const card = document.createElement('div');
    card.classList.add('pet-card');
  
    const image = document.createElement('img');
    image.src = pet.image;
    card.appendChild(image);
  
    const name = document.createElement('h2');
    name.textContent = pet.name;
    card.appendChild(name);
  
    const species = document.createElement('p');
    species.textContent = `Species: ${pet.species}`;
    card.appendChild(species);
  
    const age = document.createElement('p');
    age.textContent = `Age: ${pet.age}`;
    card.appendChild(age);
  
    
    const adoptBtn = document.createElement('button');
    adoptBtn.textContent = 'Adopt';
    adoptBtn.addEventListener('click', () => {
      alert(`Congratulations! You've adopted ${pet.name}!`);
    });
    card.appendChild(adoptBtn);
  
    return card;
    
  }
  
  function displayPets() {
    const petsContainer = document.getElementById('pets-container');
    petsData.forEach((pet) => {
      const petCard = createPetCard(pet);
      petsContainer.appendChild(petCard);
    });
  }
  
  displayPets();
  