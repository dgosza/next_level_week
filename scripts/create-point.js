
function populateUfs() {
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("http://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {

            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}"> ${state.nome} </option>`

            }

        })
}

populateUfs()

function getCities(event) {
    const citieSelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `http://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citieSelect.innerHTML = ''
    citieSelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citieSelect.innerHTML += `<option value="${city.id}"> ${city.nome} </option>`
            }
            citieSelect.disabled = false


        })
}


document.querySelector("select[name=uf]").addEventListener("change", getCities)

//Itens de Coleta
//pegar todo os li

const itensToCollect = document.querySelectorAll(".items-grid li");

for(const item of itensToCollect){
    item.addEventListener("click", handleSelectedItem)
}

function handleSelectedItem(event) {
    const itemLi = event.target;
    //add or remove uma classe com js
    
    itemLi.classList.toggle("selected")

    const itemId = event.target.dataset.id;

}