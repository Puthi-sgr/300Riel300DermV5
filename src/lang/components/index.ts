import { mergeStrings } from "../merge";
import { loadingStrings } from "./loading";
import { navigationStrings } from "./navigation";
import { footerStrings } from "./footer";

export const componentStrings = mergeStrings(navigationStrings, loadingStrings, footerStrings);

export default componentStrings;
