import { mergeStrings } from "../../../lang/merge";
import { aboutUsStrings } from "./views/aboutUs";
import { contactStrings } from "./views/contact";
import { donateStrings } from "./views/donate";
import { featuredProjectsStrings } from "./views/featuredProjects";
import { galleryStrings } from "./views/gallery";
import { heroStrings } from "./views/Hero";
import { impactStripStrings } from "./views/impactStrip";
import { projectStrings } from "./views/Projects";
import { sponsorsStrings } from "./views/sponsors";



export const homeStrings = mergeStrings(
    aboutUsStrings,
    contactStrings,
    donateStrings,
    featuredProjectsStrings,
    galleryStrings,
    heroStrings,
    impactStripStrings,
    projectStrings,
    sponsorsStrings
);

export default homeStrings;