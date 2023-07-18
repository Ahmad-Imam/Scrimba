


// console.log(document.getElementById("colorpicker").value.slice(1))
let colorType = ''
let seedColor = ''

const colorParent = document.getElementById("color")

const valueParent = document.getElementById("value")

// fetch("https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=5")
// .then(res => res.json())
// .then(data=> console.log(data.colors[0].hex))

document.getElementsByClassName("color-get")[0].addEventListener("click", function (){

  
    
    let colorType = document.getElementById("cars").value;
    let seedColor = document.getElementById("colorpicker").value.slice(1);

      console.log(colorType)

    console.log(seedColor)

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorType}&count=5`)
    .then(res => res.json())
    .then(function (data) {
        
            colorParent.innerHTML = ""        
            valueParent.innerHTML = "" 
                   
            data.colors.forEach((item, index)=>{
                    let colorValue = item.hex.value;

                    // colorParent.innerHTML+=
                    
                    //     `<div class="color-${index}" style="background-color:${colorValue}"></div>`
                    
                    colorParent.innerHTML+=
                        `<div class="color-${index}"></div>`

                    document.getElementsByClassName(`color-${index}`)[0].
                    setAttribute("style", `background-color:${colorValue};`)
                    
                    valueParent.innerHTML += `
                        <p class="value-${index}">${colorValue}</p>
                        `
                    
                    
            })
    
        })

})