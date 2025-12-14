import { mergeStrings } from "./merge";
import { sharedStrings } from "./shared";
import { homepageStrings } from "./page/homePageStrings";
import mangroveStrings from "../modules/mangrove/lang";
import bookStrings from "../modules/book/lang";

export const resources = mergeStrings(
    sharedStrings,
    homepageStrings,
    mangroveStrings,
    bookStrings
);
