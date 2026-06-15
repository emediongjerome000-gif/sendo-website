// Splash screen → Landing page

if(window.location.pathname.includes("index.html")){

    setTimeout(() => {

        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = "Sendo1.html";
        },500);

    },5000);

}

// Landing page → Download page

const stockUp = document.querySelector(".stock-up");

if(stockUp){

    stockUp.addEventListener("click", () => {

        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href = "Sendo2.html";

        },500);

    });

}


const orderBtn = document.querySelector(".cta-button");

if(orderBtn){

    orderBtn.addEventListener("click", () => {

        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href = "Sendo2.html";

        },500);

    });

}