import { mergeStrings } from "../../../lang/merge";

import { projectStrings } from "./views/project";
import { highlightsStrings } from "./views/highlights";
import { galleryStrings } from "./views/gallery";
import { sponsorsStrings } from "./views/sponsors";
import { mangrovesStrings } from "./views/mangroves";
import { phasesStrings } from "./views/phases";
import { campaignStrings } from "./views/campaign";
import { impactStrings } from "./views/impact";

/**
 * Mangrove module dictionary.
 * Keep this file as a pure aggregator that merges per-view dictionaries.
 */
export const mangroveStrings = mergeStrings(
    projectStrings,
    highlightsStrings,
    galleryStrings,
    sponsorsStrings,
    mangrovesStrings,
    phasesStrings,
    campaignStrings,
    impactStrings
);

export default mangroveStrings;
