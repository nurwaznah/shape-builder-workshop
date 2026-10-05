/* =========================================================
   LEARN PAGE
   ========================================================= */

const prismKeys = [
    "squarePrism",
    "rectangularPrism",
    "triangularPrism"
];

const nonPrismKeys = [
    "sphere",
    "pyramid",
    "cylinder",
    "cone"
];


const prismGrid =
    document.getElementById("prismGrid");

const nonPrismGrid =
    document.getElementById("nonPrismGrid");


const modal =
    document.getElementById("shapeModal");

const modalShape =
    document.getElementById("modalShape");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const featureMessage =
    document.getElementById("featureMessage");


/* =========================================================
   CREATE SHAPE CARDS
   ========================================================= */

function createShapeCard(key) {

    const shape = SHAPES[key];

    const card =
        document.createElement("button");

    card.className =
        `shape-card ${
            shape.type === "prism"
                ? "prism-card"
                : "nonprism-card"
        }`;

    card.innerHTML = `

        <div class="card-shape">
            ${shapeSVG(key)}
        </div>

        <strong>
            ${shape.name}
        </strong>

        <span>
            ${
                shape.type === "prism"
                    ? "PRISM"
                    : "NON-PRISM"
            }
        </span>

    `;


    card.addEventListener(
        "click",
        () => openShape(key)
    );


    return card;
}


/* =========================================================
   DISPLAY ALL SHAPES
   ========================================================= */

prismKeys.forEach(
    key => {

        prismGrid.appendChild(
            createShapeCard(key)
        );

    }
);


nonPrismKeys.forEach(
    key => {

        nonPrismGrid.appendChild(
            createShapeCard(key)
        );

    }
);


/* =========================================================
   OPEN POPUP
   ========================================================= */

function openShape(key) {

    const shape =
        SHAPES[key];

    modal.dataset.key =
        key;


    modalShape.innerHTML =
        shapeSVG(key);


    modalTitle.textContent =
        shape.name;


    modalDescription.textContent =
        shape.description;


    featureMessage.textContent =
        "Click a feature to see it highlighted.";


    document
        .querySelectorAll(
            ".feature-buttons button"
        )
        .forEach(
            button =>
                button.classList.remove(
                    "selected"
                )
        );


    modal.classList.add("show");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );
}


/* =========================================================
   CLOSE POPUP
   ========================================================= */

function closeModal() {

    modal.classList.remove(
        "show"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );
}


document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeModal
    );


/* Click outside popup */

modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {
            closeModal();
        }

    }
);


/* =========================================================
   FEATURE BUTTONS
   ========================================================= */

document
    .querySelectorAll(
        ".feature-buttons button"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const key =
                        modal.dataset.key;

                    const feature =
                        button.dataset.feature;


                    /* Remove previous selection */

                    document
                        .querySelectorAll(
                            ".feature-buttons button"
                        )
                        .forEach(
                            b =>
                                b.classList.remove(
                                    "selected"
                                )
                        );


                    /* Highlight selected button */

                    button.classList.add(
                        "selected"
                    );


                    /* Update shape */

                    modalShape.innerHTML =
                        shapeSVG(
                            key,
                            feature
                        );


                    /* Update explanation */

                    featureMessage.textContent =
                        SHAPES[key]
                            .features[feature];

                }
            );

        }
    );


/* =========================================================
   ESC KEY CLOSES POPUP
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {

            closeModal();

        }

    }
);
