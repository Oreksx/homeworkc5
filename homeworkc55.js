const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
    let numberpage = document.querySelector(".numberpage").value;
    let limit = document.querySelector(".limit").value;
    const localimage = localStorage.getItem("localimage");

    if (localimage){
        let data = JSON.parse(localimage);
        let cards = '';

                data.forEach(item => {
                    const cardBlock = `
                        <div class="card">
                        <img src="${item.download_url}" class="card-image" width="150" height="150"/>
                        </div>
                    `;
                    cards = cards + cardBlock;
                });

                let resultNode = document.querySelector(".result");
                resultNode.innerHTML = cards;
    }
    else {
        if (1 <= numberpage && numberpage <= 10){
            if (1 <= limit && limit <= 10){
                fetch(`https://picsum.photos/v2/list?page=${numberpage}&limit=${limit}`)
                    .then((response) => {
                        const result = response.json();
                        return result;
                    })
                    .then((data) => {
                    localStorage.setItem("localimage", JSON.stringify(data));
                    let cards = '';
    
                    data.forEach(item => {
                        const cardBlock = `
                            <div class="card">
                            <img src="${item.download_url}" class="card-image" width="150" height="150"/>
                            </div>
                        `;
                        cards = cards + cardBlock;
                    });
    
                    let resultNode = document.querySelector(".result");
                    resultNode.innerHTML = cards;
                    })
                    .catch(() => { console.log('error') });
        }
        else {
            let resultNode = document.querySelector(".result");
            resultNode.innerHTML = "<p>лимит вне диапазона от 1 до 10</p>";
        }
    }
    else {
        if (1 <= limit && limit <= 10){
            let resultNode = document.querySelector(".result");
            resultNode.innerHTML = "<p>номер страницы вне диапазона от 1 до 10</p>";
        }
        else {
            let resultNode = document.querySelector(".result");
            resultNode.innerHTML = "<p>номер страницы и лимит вне диапазона от 1 до 10</p>";
        }
    }}});







  
