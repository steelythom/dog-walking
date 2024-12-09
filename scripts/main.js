import { walkersList } from "./Walkers.js"
import { citiesList } from "./Cities.js"
import { petsList } from "./Pets.js"
import { assignmentsList } from "./Assignments.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>DeShawns Dog Walking</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Cities with Service</h2>
        ${citiesList()}
    </section>
    <section class="detail--column list details_walkers">
        <h2>Walkers</h2>
        ${walkersList()}
    </section>
    <section class="detail--column list details_pets">
        <h2>Pets</h2>
        ${petsList()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    ${assignmentsList()}
</article>
`

mainContainer.innerHTML = applicationHTML

