const PASSWORD = 'admin123'; // à changer pour un mot de passe sécurisé

function login() {
  const pass = document.getElementById('password').value;
  if(pass === PASSWORD){
    document.getElementById('loginBox').style.display='none';
    document.getElementById('adminPanel').classList.remove('hidden');
  } else {
    alert('Mot de passe incorrect');
  }
}

function addDish(){
  const name = document.getElementById('dishName').value;
  const desc = document.getElementById('dishDesc').value;
  const price = document.getElementById('dishPrice').value;
  const imageFile = document.getElementById('dishImage').files[0];

  if(!imageFile){
    alert('Veuillez sélectionner une image');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event){
    const imageData = event.target.result;

    const dish = {name, desc, price, image:imageData};

    let menu = JSON.parse(localStorage.getItem('menu')) || [];
    menu.push(dish);
    localStorage.setItem('menu', JSON.stringify(menu));

    alert('Plat ajouté avec succès !');

    // reset formulaire
    document.getElementById('dishName').value='';
    document.getElementById('dishDesc').value='';
    document.getElementById('dishPrice').value='';
    document.getElementById('dishImage').value='';
  };
  reader.readAsDataURL(imageFile);
}