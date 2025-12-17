import { mergeStrings } from "./merge";
import { sharedStrings } from "./shared";
import homeStrings from "../modules/home/lang";
import mangroveStrings from "../modules/mangrove/lang";
import bookStrings from "../modules/book/lang";


export const resources = mergeStrings(
  sharedStrings,
  homeStrings,
  mangroveStrings,
  bookStrings,

);
