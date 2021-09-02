"use strict";
// Setup
var collection = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [],
    },
    5439: {
        albumTitle: "ABBA Gold",
    },
};
// Keep a copy of the collection for Test
var collectionCopy = JSON.parse(JSON.stringify(collection));
// Only change code below this line
function updateRecords(obj, id, prop, value) {
    if (value === "") {
        delete obj[id][prop];
    }
    else if (prop === "tracks") {
        /* if (obj[id].hasOwnProperty(prop) === false) {
          obj[id][prop] = [];
        } */
        obj[id][prop] = obj[id][prop] || []; // Alternate approach
        obj[id][prop].push(value);
    }
    else {
        obj[id][prop] = value;
    }
    return obj;
}
console.log(updateRecords(collection, 5439, "artist", "ABBA"));
