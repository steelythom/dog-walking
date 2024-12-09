import { getCities, getWalkers } from "./database.js"

const cities = getCities()
const walkers = getWalkers()

document.addEventListener (
    "click",
    (clickEvent) => {
        //const cityTarget = clickEvent.target
        if (clickEvent.target.dataset.type === "city") {
            //window.alert(`${clickEvent.target.dataset.walkername} is servicing this city`)
            let clickedCityId = parseInt(clickEvent.target.dataset.cityId)
            for (const walker of walkers) {
                if (clickedCityId === walker.cityId) {
                    window.alert(`${walker.name} is servicing this city`)
                }
            }
        }
    }
)

export const citiesList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li data-type="city" data-city-id="${city.id}">${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

