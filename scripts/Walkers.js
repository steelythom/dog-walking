import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener( 

    "click",
    (clickEvent) => {
        if (clickEvent.target.dataset.type==="walker") {
                window.alert(`This walker works in ${clickEvent.target.dataset.city}`)
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
                            data-city="${walker.city}"
                            data-type="walker"
                            >${walker.name}
                        </li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

