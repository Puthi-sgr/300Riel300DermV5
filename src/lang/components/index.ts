import { mergeStrings } from "../merge";
import { loadingStrings } from "./loading";
import { navigationStrings } from "./navigation";

export const componentStrings = mergeStrings(navigationStrings, loadingStrings);

export default componentStrings;
