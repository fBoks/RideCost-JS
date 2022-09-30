const script = () => {
    // получение данных со страницы
    const calculateBtn = document.getElementById("calculate-btn");
    const clearBtn = document.getElementById("clear-btn");

    let inputData = document.getElementById("input");

    const faceAreaRes = document.getElementById("face-area__res");
    const surfaceAreaRes = document.getElementById("surface-area__res");
    const cubeVolumeRes = document.getElementById("cube-volume__res");

    // действия при клике
    calculateBtn.addEventListener("click", () => {
        if (inputData.value === "")
        {
            alert("Введите данные!");
        }
        else
        {
            faceAreaRes.innerHTML = `${(inputData.value ** 2).toFixed(2)}`;
            surfaceAreaRes.innerHTML = `${(inputData.value ** 2 * 6).toFixed(2)}`;
            cubeVolumeRes.innerHTML = `${(inputData.value ** 3).toFixed(2)}`;
        }
    });

    clearBtn.addEventListener("click", () => {
        inputData.value = "";
        faceAreaRes.innerHTML = "";
        surfaceAreaRes.innerHTML = "";
        cubeVolumeRes.innerHTML = "";
    })
}

script();