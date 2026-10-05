/* =========================================================
   SHAPE BUILDER WORKSHOP
   Shape Information
   ========================================================= */

const SHAPES = {

    squarePrism: {
        name: "Square Prism",
        type: "prism",

        description:
            "A prism with two matching square bases.",

        features: {
            base:
                "The two matching bases are square.",

            flat:
                "It has 6 flat faces.",

            curved:
                "It has no curved surface.",

            edge:
                "It has 12 edges.",

            vertex:
                "It has 8 vertices."
        },

        stats: {
            bases: 2,
            flat: 6,
            curved: 0,
            edges: 12,
            vertices: 8
        }
    },


    rectangularPrism: {
        name: "Rectangular Prism",
        type: "prism",

        description:
            "A prism with two matching rectangular bases.",

        features: {
            base:
                "The two matching bases are rectangles.",

            flat:
                "It has 6 flat faces.",

            curved:
                "It has no curved surface.",

            edge:
                "It has 12 edges.",

            vertex:
                "It has 8 vertices."
        },

        stats: {
            bases: 2,
            flat: 6,
            curved: 0,
            edges: 12,
            vertices: 8
        }
    },


    triangularPrism: {
        name: "Triangular Prism",
        type: "prism",

        description:
            "A prism with two matching triangular bases.",

        features: {
            base:
                "The two matching bases are triangles.",

            flat:
                "It has 5 flat faces.",

            curved:
                "It has no curved surface.",

            edge:
                "It has 9 edges.",

            vertex:
                "It has 6 vertices."
        },

        stats: {
            bases: 2,
            flat: 5,
            curved: 0,
            edges: 9,
            vertices: 6
        }
    },


    sphere: {
        name: "Sphere",
        type: "non-prism",

        description:
            "A round shape with no flat base.",

        features: {
            base:
                "It has no flat base.",

            flat:
                "It has no flat surface.",

            curved:
                "It has 1 curved surface.",

            edge:
                "It has no edge.",

            vertex:
                "It has 0 vertices."
        },

        stats: {
            bases: 0,
            flat: 0,
            curved: 1,
            edges: 0,
            vertices: 0
        }
    },


    pyramid: {
        name: "Pyramid",
        type: "non-prism",

        description:
            "A solid with one base and triangular side faces meeting at a point.",

        features: {
            base:
                "It has 1 square base.",

            flat:
                "It has 5 flat faces.",

            curved:
                "It has no curved surface.",

            edge:
                "It has 8 edges.",

            vertex:
                "It has 5 vertices."
        },

        stats: {
            bases: 1,
            flat: 5,
            curved: 0,
            edges: 8,
            vertices: 5
        }
    },


    cylinder: {
        name: "Cylinder",
        type: "non-prism",

        description:
            "A solid with two circular bases and a curved surface.",

        features: {
            base:
                "It has 2 circular bases.",

            flat:
                "It has 2 flat surfaces.",

            curved:
                "It has 1 curved surface.",

            edge:
                "It has 2 circular edges.",

            vertex:
                "It has no vertices."
        },

        stats: {
            bases: 2,
            flat: 2,
            curved: 1,
            edges: 2,
            vertices: 0
        }
    },


    cone: {
        name: "Cone",
        type: "non-prism",

        description:
            "A solid with one circular base and one curved surface.",

        features: {
            base:
                "It has 1 circular base.",

            flat:
                "It has 1 flat surface.",

            curved:
                "It has 1 curved surface.",

            edge:
                "It has 1 circular edge.",

            vertex:
                "It has 1 vertex."
        },

        stats: {
            bases: 1,
            flat: 1,
            curved: 1,
            edges: 1,
            vertices: 1
        }
    }

};


/* =========================================================
   CREATE 3D SHAPES USING SVG
   ========================================================= */

function shapeSVG(key, highlight = "") {

    /* =========================
       SPHERE
       ========================= */

    if (key === "sphere") {

        return `
        <svg
            class="shape-svg"
            viewBox="0 0 220 220"
            aria-label="Sphere"
        >

            <ellipse
                cx="110"
                cy="110"
                rx="70"
                ry="78"
                fill="#ffe45e"
                stroke="#222"
                stroke-width="4"
            />

            <ellipse
                cx="110"
                cy="110"
                rx="70"
                ry="30"
                fill="none"
                stroke="#222"
                stroke-width="3"
                stroke-dasharray="8 7"
            />

        </svg>
        `;
    }


    /* =========================
       CYLINDER
       ========================= */

    if (key === "cylinder") {

        return `
        <svg
            class="shape-svg"
            viewBox="0 0 220 220"
            aria-label="Cylinder"
        >

            <ellipse
                cx="110"
                cy="52"
                rx="58"
                ry="24"
                class="${highlight === "base" ||
                        highlight === "flat"
                        ? "hl"
                        : ""}"
                fill="#bfe8a0"
                stroke="#222"
                stroke-width="4"
            />

            <path
                d="M52 52 V165
                   C52 178 168 178 168 165
                   V52"
                fill="#ddd"
                stroke="#222"
                stroke-width="4"
            />

            <ellipse
                cx="110"
                cy="165"
                rx="58"
                ry="24"
                class="${highlight === "base" ||
                        highlight === "flat"
                        ? "hl"
                        : ""}"
                fill="#ddd"
                stroke="#222"
                stroke-width="4"
                stroke-dasharray="8 6"
            />

        </svg>
        `;
    }


    /* =========================
       CONE
       ========================= */

    if (key === "cone") {

        return `
        <svg
            class="shape-svg"
            viewBox="0 0 220 220"
            aria-label="Cone"
        >

            <path
                d="M110 28
                   L52 165
                   Q110 194 168 165 Z"
                fill="#f3b0c7"
                stroke="#222"
                stroke-width="4"
            />

            <ellipse
                cx="110"
                cy="165"
                rx="58"
                ry="25"
                class="${highlight === "base" ||
                        highlight === "flat"
                        ? "hl"
                        : ""}"
                fill="#f3b0c7"
                stroke="#222"
                stroke-width="4"
            />

            ${
                highlight === "vertex"
                ? `
                <circle
                    cx="110"
                    cy="28"
                    r="9"
                    class="vertex-hl"
                />
                `
                : ""
            }

        </svg>
        `;
    }


    /* =========================
       PYRAMID
       ========================= */

    if (key === "pyramid") {

        return `
        <svg
            class="shape-svg"
            viewBox="0 0 220 220"
            aria-label="Pyramid"
        >

            <polygon
                points="110,25 48,165 110,184"
                fill="#55cbd9"
                stroke="#222"
                stroke-width="4"
            />

            <polygon
                points="110,25 172,165 110,184"
                fill="#25aec2"
                stroke="#222"
                stroke-width="4"
            />

            <polygon
                points="48,165 110,145 172,165 110,184"
                class="${highlight === "base" ||
                        highlight === "flat"
                        ? "hl-fill"
                        : ""}"
                fill="#9ed8d8"
                stroke="#222"
                stroke-width="4"
            />

            <path
                d="M110 25 V145"
                stroke="#222"
                stroke-width="3"
                stroke-dasharray="8 6"
            />

            ${
                highlight === "vertex"
                ? `
                <circle
                    cx="110"
                    cy="25"
                    r="9"
                    class="vertex-hl"
                />
                `
                : ""
            }

        </svg>
        `;
    }


    /* =========================
       TRIANGULAR PRISM
       ========================= */

    if (key === "triangularPrism") {

        return `
        <svg
            class="shape-svg"
            viewBox="0 0 220 220"
            aria-label="Triangular Prism"
        >

            <polygon
                points="55,165 110,35 110,165"
                fill="#eefbff"
                stroke="#222"
                stroke-width="4"
            />

            <polygon
                points="110,35 165,165 110,165"
                fill="#d6f4f8"
                stroke="#222"
                stroke-width="4"
            />

            <polygon
                points="55,165 110,165 165,165"
                fill="#b8e8ef"
                stroke="#222"
                stroke-width="4"
            />

            <line
                x1="110"
                y1="35"
                x2="165"
                y2="165"
            />

            <line
                x1="55"
                y1="165"
                x2="110"
                y2="35"
            />

            <line
                x1="55"
                y1="165"
                x2="110"
                y2="165"
            />

            <line
                x1="110"
                y1="35"
                x2="110"
                y2="165"
                stroke="#222"
                stroke-width="3"
                stroke-dasharray="8 6"
            />

        </svg>
        `;
    }


    /* =========================
       SQUARE / RECTANGULAR PRISM
       ========================= */

    return `
    <svg
        class="shape-svg"
        viewBox="0 0 220 220"
        aria-label="${SHAPES[key].name}"
    >

        <!-- Top -->
        <polygon
            points="55,55 130,55 160,80 85,80"
            class="${highlight === "base" ? "hl-fill" : ""}"
            fill="#9bdccf"
            stroke="#222"
            stroke-width="4"
        />

        <!-- Left -->
        <polygon
            points="55,55 85,80 85,170 55,145"
            fill="#62bcae"
            stroke="#222"
            stroke-width="4"
        />

        <!-- Front -->
        <polygon
            points="85,80 160,80 160,170 85,170"
            class="${highlight === "flat" ? "hl-fill" : ""}"
            fill="#77c9bc"
            stroke="#222"
            stroke-width="4"
        />

        <!-- Bottom -->
        <polygon
            points="85,170 160,170 130,145 55,145"
            class="${highlight === "base" ? "hl-fill" : ""}"
            fill="#56a99d"
            stroke="#222"
            stroke-width="4"
        />

        <!-- Right -->
        <polygon
            points="130,55 160,80 160,170 130,145"
            fill="#47988e"
            stroke="#222"
            stroke-width="4"
        />

        <!-- Hidden edges -->
        <path
            d="M55 55 L55 145
               M85 80 L85 170
               M130 55 L130 145"
            stroke="#222"
            stroke-width="3"
            stroke-dasharray="8 6"
        />

        ${
            highlight === "vertex"
            ? `
            <g class="vertex-hl">

                <circle cx="55" cy="55" r="7"/>
                <circle cx="130" cy="55" r="7"/>
                <circle cx="160" cy="80" r="7"/>
                <circle cx="85" cy="80" r="7"/>

                <circle cx="55" cy="145" r="7"/>
                <circle cx="130" cy="145" r="7"/>
                <circle cx="160" cy="170" r="7"/>
                <circle cx="85" cy="170" r="7"/>

            </g>
            `
            : ""
        }

    </svg>
    `;
}
