import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const button = document.createElement("button");
  button.textContent = "Kép betöltése";


  button.addEventListener("click", async function () {
    const result = await getRandomDog();
    if (result.status === "success") {
      const img = document.getElementById("kutyaKep") as HTMLImageElement | null;
      if (img) {
        img.src = result.message;
      }
    } else {
      console.error("Hiba történt:", result.message);
    }
  });
  
  const app = document.getElementById("app");
  if (app) {
    app.appendChild(button);
  }
});

type Valasz = {
  message: string;
  status: string;
}
// https://dog.ceo/api/breeds/image/random
async function getRandomDog(): Promise<Valasz> {
  const response = await fetch("https://dog.ceo/api/breeds/image/random", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    console.error("Hiba történt a kérés során");
    return { message: "Hiba történt a kérés során", status: "error" };
  }

  return response.json();
}

