document.querySelector('button').addEventListener('click',drink)
//get or fetch the data
async function drink() {
const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
const data = await response.json()
console.log(data)
document.querySelector('h2').textContent = data.drinks[0].strDrink
document.querySelector('h3').textContent = data.drinks[0].strInstructions
document.querySelector('img').src = data.drinks[0].strDrinkThumb
}

drink()




	
	

	