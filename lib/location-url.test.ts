import test from "node:test"; import assert from "node:assert/strict"; import { normalizeLocation,withLocationParam } from "./location-url";
test("adds one contextual location parameter",()=>assert.equal(withLocationParam("/map?destination=beach","reception"),"/map?destination=beach&location=reception"));
test("replaces rather than duplicates an existing location",()=>assert.equal(withLocationParam("/map?location=pool&destination=beach","reception"),"/map?location=reception&destination=beach"));
test("repairs malformed nested location values",()=>assert.equal(normalizeLocation("location=reception"),"reception"));
