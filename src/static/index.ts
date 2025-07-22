export type Subsection = {
    id: string;
    title: string;
};

export type Section = {
    id: string;
    title: string;
    subsections?: Subsection[];
};

export const INDEX: Section[] = [
    {
        id: "presentation",
        title: "Presentation",
    },
    {
        id: "experience",
        title: "Experience",
        subsections: [
            { id: "lumibit", title: "Lumibit Digital" },
            { id: "etra", title: "Etra I+D" },
            { id: "bounsel", title: "Bounsel" },
            { id: "thermohuman", title: "Thermohuman" },
            { id: "anova", title: "Anova IT Consulting" },
            { id: "narrativa", title: "Narrativa" },
        ],
    },
    {
        id: "publications",
        title: "Publications",
    },
    {
        id: "projects",
        title: "Projects",
        subsections: [
            { id: "colorSchema", title: "Color Schema" },
            { id: "labtools", title: "Lab Tools" },
            { id: "u-twin", title: "U-TWIN" },
            { id: "u-need", title: "U-NEED" },

        ],
    },
    {
        id: "about",
        title: "About",
    },
];