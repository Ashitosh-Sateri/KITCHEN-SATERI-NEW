let stockObj = [
    {
        "item": "Veg Puff",
        "stock": 100,
        "orderQuantity": 280,
        "build": 180,
        "color": "yellow",
    },

    {
        "item": "Samosa",
        "stock": 57,
        "orderQuantity": 530,
        "build": 473,
        "color": "yellow",
    },
    {
        "item": "Bhakarwadi",
        "stock": 200,
        "orderQuantity": 800,
        "build": 600,
        "color": "yellow",
    },
    {
        "item": "Kachori",
        "stock": 130,
        "orderQuantity": 50,
        "build": 0,
        "color": "green",
        "text-color": "white",
    },
    {
        "item": "Surali Wadi",
        "stock": 10,
        "orderQuantity": 0,
        "build": 0,
        "color": "white",
    },
    {
        "item": "Pani Puri",
        "stock": 0,
        "orderQuantity": 10,
        "build": 10,
        "color": "red",
        "text-color": "white",
    },
    {
        "item": "Shev Puri",
        "stock": 0,
        "orderQuantity": 25,
        "build": 25,
        "color": "red",
        "text-color": "white",
    },
    {
        "item": "Lachcha Tokri",
        "stock": 0,
        "orderQuantity": 0,
        "build": 0,
        "color": "white",
    }
]

let rowElement = document.getElementById("row-element");

function createTable() {
    for (let i = 0; i < stockObj.length; i++) {
        let newElement = document.createElement("div");
        newElement.innerHTML = `
        <div class="table-content">            
            <div class="${stockObj[i].color}-card col" >
                    <p class="${stockObj[i].hasOwnProperty("text-color") ? stockObj[i]["text-color"] + "-" + "text"
                : null
            } fs-5 fw-bold p-0 mb-1">${stockObj[i].item}</p>
                <div class="table-div" >
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Stock</th>
                                <th scope="col">Order Quantity</th>
                                <th scope="col">Build</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${stockObj[i].stock}</td>
                                <td>${stockObj[i].orderQuantity}</td>
                                <td>${stockObj[i].build}</td>
                            </tr>
                        </tbody>
                    </table>
                </div >                        
            </div > 
        </div>`
        rowElement.appendChild(newElement);
    };
}
createTable();


let filterElement = document.getElementById("filters");

function setFilter(e) {
    let filter = e.target.value;
    if (filter != "all") {
        let filteredStockObj = stockObj.filter(ele => ele.item === filter);
        rowElement.innerHTML = "";
        if (!filteredStockObj.length) {
            rowElement.innerHTML = `<h1 class="d-flex justify-content-center align-tems-center" style="color:red; height:100%; width:100%; font:Inter">No products to display</h1>`;
            return;
        }
        filteredStockObj.forEach(ele => {
            let newElement = document.createElement("div");
            newElement.innerHTML = `<div class="table-content">
            <div class="${ele.color}-card col" >
                            <p class="${ele.hasOwnProperty("text-color") ? ele["text-color"] + "-" + "text"
                    : null} ">${ele.item}</p>
                <div class="table-div" >
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Stock</th>
                                <th scope="col">Order Quantity</th>
                                <th scope="col">Build</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${ele.stock}</td>
                                <td>${ele.orderQuantity}</td>
                                <td>${ele.build}</td>
                            </tr>
                        </tbody>
                    </table>
                            </div >
                        </div >
                    </div > `
            rowElement.appendChild(newElement);
        });
    }
    else {
        rowElement.innerHTML = ""
        createTable();
    }
}

filterElement.addEventListener("change", setFilter)

