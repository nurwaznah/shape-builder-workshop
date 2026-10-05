/* =========================================================
   BUILD & COMPARE
   ========================================================= */


/* Six missions */

const missions = [

    [
        "squarePrism",
        "pyramid"
    ],

    [
        "rectangularPrism",
        "pyramid"
    ],

    [
        "triangularPrism",
        "pyramid"
    ],

    [
        "rectangularPrism",
        "cylinder"
    ],

    [
        "squarePrism",
        "cylinder"
    ],

    [
        "cylinder",
        "sphere"
    ]

];


const missionButtons =
    document.getElementById(
        "missionButtons"
    );


const netA =
    document.getElementById("netA");

const netB =
    document.getElementById("netB");


const shapeAName =
    document.getElementById(
        "shapeAName"
    );

const shapeBName =
    document.getElementById(
        "shapeBName"
    );


const comparePanel =
    document.getElementById(
        "comparePanel"
    );


const compareText =
    document.getElementById(
        "compareText"
    );


const feedback =
    document.getElementById(
        "buildFeedback"
    );


let currentMission = 0;

let built = [
    false,
    false
];


/* =========================================================
   MISSION BUTTONS
   ========================================================= */

missions.forEach(
    (pair, index) => {

        const button =
            document.createElement(
                "button"
            );


        button.textContent =
            `${index + 1}. ${
                SHAPES[pair[0]].name
            } vs ${
                SHAPES[pair[1]].name
            }`;


        button.addEventListener(
            "click",
            () =>
                loadMission(index)
        );


        missionButtons.appendChild(
            button
        );

    }
);


/* =========================================================
   NET DRAWINGS
   ========================================================= */

function netSVG(key) {


    /* Sphere */

    if (key === "sphere") {

        return `
            <div class="no-net">

                <span style="font-size:50px;">
                    ⚪
                </span>

                <p>
                    A sphere does not have
                    a simple flat net.
                </p>

            </div>
        `;
    }


    /* Cylinder */

    if (key === "cylinder") {

        return `

        <svg
            class="net-svg"
            viewBox="0 0 260 170"
        >

            <rect
                x="65"
                y="45"
                width="130"
                height="70"
                fill="#d8eef5"
                stroke="#222"
                stroke-width="3"
            />

            <circle
                cx="65"
                cy="80"
                r="35"
                fill="#bfe8a0"
                stroke="#222"
                stroke-width="3"
            />

            <circle
                cx="195"
                cy="80"
                r="35"
                fill="#bfe8a0"
                stroke="#222"
                stroke-width="3"
            />

        </svg>

        `;
    }


    /* Pyramid */

    if (key === "pyramid") {

        return `

        <svg
            class="net-svg"
            viewBox="0 0 260 190"
        >

            <rect
                x="100"
                y="65"
                width="60"
                height="60"
                fill="#9ed8d8"
                stroke="#222"
                stroke-width="3"
            />

            <polygon
                points="100,65 130,15 160,65"
                fill="#35bfd2"
                stroke="#222"
                stroke-width="3"
            />

            <polygon
                points="160,65 210,95 160,125"
                fill="#35bfd2"
                stroke="#222"
                stroke-width="3"
            />

            <polygon
                points="160,125 130,175 100,125"
                fill="#35bfd2"
                stroke="#222"
                stroke-width="3"
            />

            <polygon
                points="100,125 50,95 100,65"
                fill="#35bfd2"
                stroke="#222"
                stroke-width="3"
            />

        </svg>

        `;
    }


    /* Triangular Prism */

    if (key === "triangularPrism") {

        return `

        <svg
            class="net-svg"
            viewBox="0 0 300 180"
        >

            <polygon
                points="70,90 115,35 160,90"
                fill="#dff8fb"
                stroke="#222"
                stroke-width="3"
            />

            <rect
                x="70"
                y="90"
                width="90"
                height="55"
                fill="#b8e8ef"
                stroke="#222"
                stroke-width="3"
            />

            <rect
                x="160"
                y="90"
                width="90"
                height="55"
                fill="#9edee8"
                stroke="#222"
                stroke-width="3"
            />

            <polygon
                points="160,90 205,35 250,90"
                fill="#dff8fb"
                stroke="#222"
                stroke-width="3"
            />

        </svg>

        `;
    }


    /* Square / Rectangular Prism */

    return `

    <svg
        class="net-svg"
        viewBox="0 0 300 180"
    >

        <rect
            x="70"
            y="55"
            width="55"
            height="55"
            fill="#9bdccf"
            stroke="#222"
            stroke-width="3"
        />

        <rect
            x="125"
            y="55"
            width="55"
            height="55"
            fill="#77c9bc"
            stroke="#222"
            stroke-width="3"
        />

        <rect
            x="180"
            y="55"
            width="55"
            height="55"
            fill="#62bcae"
            stroke="#222"
            stroke-width="3"
        />

        <rect
            x="125"
            y="0"
            width="55"
            height="55"
            fill="#9bdccf"
            stroke="#222"
            stroke-width="3"
        />

        <rect
            x="125"
            y="110"
            width="55"
            height="55"
            fill="#56a99d"
            stroke="#222"
            stroke-width="3"
        />

        <rect
            x="235"
            y="55"
            width="55"
            height="55"
            fill="#47988e"
            stroke="#222"
            stroke-width="3"
        />

    </svg>

    `;
}


/* =========================================================
   LOAD MISSION
   ========================================================= */

function loadMission(index) {

    currentMission = index;

    built = [
        false,
        false
    ];


    const pair =
        missions[index];


    /* Highlight mission */

    document
        .querySelectorAll(
            ".mission-buttons button"
        )
        .forEach(
            (button, i) => {

                button.classList.toggle(
                    "selected",
                    i === index
                );

            }
        );


    /* Names */

    shapeAName.textContent =
        SHAPES[pair[0]].name;


    shapeBName.textContent =
        SHAPES[pair[1]].name;


    /* Nets */

    netA.innerHTML =
        netSVG(pair[0]);


    netB.innerHTML =
        netSVG(pair[1]);


    netA.classList.remove(
        "built"
    );

    netB.classList.remove(
        "built"
    );


    /* Hide comparison */

    comparePanel.classList.add(
        "hidden"
    );


    feedback.textContent =
        "";

}


/* =========================================================
   BUILD BUTTON
   ========================================================= */

function buildShape(which) {

    built[which] = true;


    const area =
        which === 0
            ? netA
            : netB;


    area.classList.add(
        "built"
    );


    /* When both are built */

    if (
        built[0] &&
        built[1]
    ) {

        showComparison();

    }

}


/* =========================================================
   SHOW COMPARISON
   ========================================================= */

function showComparison() {

    const pair =
        missions[currentMission];


    comparePanel.classList.remove(
        "hidden"
    );


    compareText.innerHTML = `

        <div class="comparison-shapes">

            <div>

                ${shapeSVG(pair[0])}

                <strong>
                    ${SHAPES[pair[0]].name}
                </strong>

            </div>


            <div>

                ${shapeSVG(pair[1])}

                <strong>
                    ${SHAPES[pair[1]].name}
                </strong>

            </div>

        </div>


        <p>

            👀 Look carefully at the
            two shapes.

            Which shape has two
            matching bases?

        </p>

    `;

}


/* Buttons */

document
    .getElementById("buildA")
    .addEventListener(
        "click",
        () => buildShape(0)
    );


document
    .getElementById("buildB")
    .addEventListener(
        "click",
        () => buildShape(1)
    );


/* =========================================================
   ANSWERS
   ========================================================= */

document
    .querySelectorAll(
        ".answer-buttons button"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const pair =
                        missions[
                            currentMission
                        ];


                    const answer =
                        button.dataset.answer;


                    let correct =
                        false;


                    if (
                        answer === "A"
                    ) {

                        correct =
                            SHAPES[pair[0]]
                                .type === "prism" &&
                            SHAPES[pair[1]]
                                .type !== "prism";

                    }


                    if (
                        answer === "B"
                    ) {

                        correct =
                            SHAPES[pair[1]]
                                .type === "prism" &&
                            SHAPES[pair[0]]
                                .type !== "prism";

                    }


                    if (
                        answer === "both"
                    ) {

                        correct =
                            SHAPES[pair[0]]
                                .type === "prism" &&
                            SHAPES[pair[1]]
                                .type === "prism";

                    }


                    if (
                        answer === "neither"
                    ) {

                        correct =
                            SHAPES[pair[0]]
                                .type !== "prism" &&
                            SHAPES[pair[1]]
                                .type !== "prism";

                    }


                    if (correct) {

                        feedback.textContent =
                            "✅ Great job! Your comparison is correct.";

                        feedback.className =
                            "feedback correct";

                    } else {

                        feedback.textContent =
                            "💡 Not quite. Look again at the matching bases and curved surfaces.";

                        feedback.className =
                            "feedback wrong";

                    }

                }
            );

        }
    );


/* Start with Mission 1 */

loadMission(0);
