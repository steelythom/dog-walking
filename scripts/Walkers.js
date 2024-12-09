import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener( 

    "click",
    (clickEvent) => {
        let clickedDs = clickEvent.target.dataset
        if (clickedDs.type==="walker") {
            for (const city of cities) {
                if (city.id === parseInt(clickedDs.cityId)) {
                    window.alert(`This walker works in ${city.name}`)
                }
            }
        }
        // switch clickEvent.target.dataset.type {
        //     case "walker":
        //         window.alert(`This walker works in ${clickEvent.target.dataset.city}`)
        //         break
        //     case "city":
        //         break
        //     default:
        // }
    }
)

export const walkersList = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                            data-city-id="${walker.cityId}"
                            data-type="walker"
                            >${walker.name}
                        </li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

