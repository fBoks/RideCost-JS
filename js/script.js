const script = () => {
    // получение данных со страницы
    const calculateBtn = document.getElementById("calculate-btn");
    const clearBtn = document.getElementById("clear-btn");

    let distance = document.getElementById("distance-input");
    let gasConsumption = document.getElementById("gas-consumption-input");
    let gasPrice = document.getElementById("gas-price-input");

    const rideCost = document.getElementById("ride-cost__res");

    // действия при клике
    calculateBtn.addEventListener("click", () => {
        if (
            distance.value === "" ||
            gasConsumption.value === "" ||
            gasPrice.value === "")
        {
            alert("Введите данные!");
        }
        else
        {
            rideCost.innerHTML = `${((distance.value / 100) * gasConsumption.value * gasPrice.value).toFixed(2)}`;
        }
    });

    clearBtn.addEventListener("click", () => {
        distance.value = "";
        gasConsumption.value = "";
        gasPrice.value = "";
        rideCost.innerHTML = "";
    })
}

script();