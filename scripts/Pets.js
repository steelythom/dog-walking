import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const pets = getPets()

document.addEventListener( 

    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickEvent.target.dataset.type === "pet") {
            const walkerId = clickTarget.dataset.walkerforeignkey
            const walkers = getWalkers()
            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId))
                    window.alert(`This pet is walked by ${walker.name}`)
            }
        }
    }
)

export const petsList = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-type="pet" data-walkerForeignKey="${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

