const loadSide = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => loadSide2(data))
}

const loadSide2 = man =>{
    console.log(man);
    const nameLoad = document.getElementById('name');
    nameLoad.innerHTML = man.results[0].name.last;

    const gender = document.getElementById('gender');
    gender.innerHTML = man.results[0].gender;

//    const gender = man.results[0].gender;
//     document.getElementById('gender').innerHTML = gender;
}

loadSide();