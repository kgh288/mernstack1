export const pie = 3.141; //named export

import {pie} from "./exportImportModules"; // named import


export default function DefaultFunction(){ // default export - only one is allowed

}

import DefaultFunction from "./exportImportModules"; // default import - without curly brackets


export const coefVisscocity  = 9.18;
export const gravity  = 9.18;
export const classFunc = {};

import {pie, coefVisscocity, gravity, classFunc} from "./exportImportModules"; // named import

import {pie as pieNew} from "./exportImportModules2"; // alias import - in case of duplicate imports change the one to 

import * as AllModules from "./exportImportModules"; // alias import
AllModules.pie;