getAll2();
const big = document.querySelector('.big');
big.addEventListener('click', function (e) {
    big.classList.remove('bigShow');
});

function setList(data) {
    let htmlString = "";
    for (let i = 3400; i < 3500; i++) {
        let template = `
        <div class="book" id="${i}">
            <div class="sn">${i}</div>
            <div class="title">${data[i].Add}</div>
            <div class="author">${data[i].Tel}</div>
        </div>`;
        htmlString += template;

    }

    const dom = document.querySelector('.books');
    dom.innerHTML = htmlString;
    setBookClick();
}

function setBookClick() {
    const dom = document.querySelectorAll('.book');
    dom.forEach(element => {
        element.addEventListener('click', function (e) {
            const id = this.getAttribute('id');
            getOne2(id);
        });
    });
}

function getAll2() {
    let URL = `./data.json`;
    let params = {};
    params.method = 'GET';
    fetch(URL, params)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            setList(result.XML_Head.Infos.Info);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function setBig(data) {
    const bigH1 = document.querySelector('.big h1');
    const bigH2 = document.querySelector('.big h2');
    const bigH3 = document.querySelector('.big h3');
    const bigDescd = document.querySelector('.big .descd');
    const bigImg = document.querySelector('.big .img img');

    bigH1.innerHTML = data.Name;
    bigH2.innerHTML = data.Tel;
    bigH3.innerHTML = data.Add;
    bigDescd.innerHTML = data.Toldescribe;
    bigImg.src = data.Picture1;
    big.classList.add('bigShow');
}

function getOne2(id) {

    let URL = `./data.json`;
    let params = {};
    params.method = 'GET';
    // params.body = paramString;

    fetch(URL, params)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            return setBig(result.XML_Head.Infos.Info[id]);
        })
        .catch(function (error) {
            console.log(error);
        });
}
