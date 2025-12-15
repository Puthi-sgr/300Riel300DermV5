import { mergeStrings } from "./merge";
import { sharedStrings } from "./shared";
import { heroStrings } from "./page/Hero";
import { projectStrings } from "./page/Projects";
import { featuredProjectsStrings } from "./page/featuredProjects";
import { aboutUsStrings } from "./page/aboutUs";
import { contactStrings } from "./page/contact";
import { sponsorsStrings } from "./page/sponsors";
import { impactStripStrings } from "./page/impactStrip";
import { footerStrings } from "./components/footer";
import { galleryStrings } from "./page/gallery";
import { donateStrings } from "./page/donate";
import mangroveStrings from "../modules/mangrove/lang";
import bookStrings from "../modules/book/lang";


export const resources = mergeStrings(
  sharedStrings,
  heroStrings,
  projectStrings,
  featuredProjectsStrings,
  aboutUsStrings,
  mangroveStrings,
  bookStrings,
  contactStrings,
  sponsorsStrings,
  impactStripStrings,
  footerStrings,
  galleryStrings,
  donateStrings
);
