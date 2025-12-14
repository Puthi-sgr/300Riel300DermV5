import { mergeStrings } from "../../../lang/merge";

import { heroStrings } from "./views/hero";
import { missionStrings } from "./views/mission";
import { problemStrings } from "./views/problem";
import { whyUsStrings } from "./views/whyUs";
import { sponsorPackageStrings } from "./views/sponsorPackage";
import { expectedImpactStrings } from "./views/expectedImpact";
import { timelineStrings } from "./views/timeline";
import { teamStrings } from "./views/team";
import { finalCtaStrings } from "./views/finalCta";
import { projectStrings } from "./views/project";

/**
 * Book module dictionary.
 * This file only aggregates per-view dictionaries.
 */
export const bookStrings = mergeStrings(
  heroStrings,
  missionStrings,
  problemStrings,
  whyUsStrings,
  sponsorPackageStrings,
  expectedImpactStrings,
  timelineStrings,
  teamStrings,
  finalCtaStrings,
  projectStrings,
);

export default bookStrings;
