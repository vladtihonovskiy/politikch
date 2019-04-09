function fetchRequest(data = "", sort = false) {
    const url = "http://ws-old.parlament.ch/councillors" + data;
    let fetchData = [];
    fetch('http://localhost:3001/api/getData',  {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        fetchData = data;
        let  div = document.createElement('table');

        if(sort && sort !== 'unset' ) {
            if(sort === "up") {
                fetchData.sort((a, b) => a.id - b.id);
            } else {
                fetchData.sort((a, b) => b.id - a.id);
            }
        }

        fetchData.map(item => {
            div.innerHTML += `<tr>
                <td>
                    <a href='/councillors/${item.id}'>Details</a>
                </td>
                <td>
                    ${item.id}
                </td>
                <td>
                ${item.number ? item.number: 0}
                </td>
                <td>
                    ${item.firstName}
                </td>
                <td>
                    ${item.lastName}
                </td>
            </tr>`
        });
        var element = document.getElementById("tableValue");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        element.appendChild(div);

    });

}

function inputChange() {
    let idValue = "";
    let rad = document.myForm.myRadios;
    let prev = null;
    for (let i = 0; i < rad.length; i++) {
        rad[i].addEventListener('change', function() {
            (prev) ? console.log(prev.value): null;
            if (this !== prev) {
                prev = this;
            }
            idValue = this.value;

            fetchRequest(`?collectionFilter=${inputName.value}`, idValue);
        });
    }


    let  inputName = document.getElementById('nameInput');
    inputName.oninput = function() {
        fetchRequest(`?collectionFilter=${inputName.value}`);
    };
}

fetchRequest();
inputChange();

