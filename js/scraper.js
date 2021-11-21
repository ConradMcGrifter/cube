const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();
const zendikarRising_page1 =
    "https://gatherer.wizards.com/Pages/Search/Default.aspx?set=[%22Zendikar+Rising%22]";
const zendikarRising_page2 =
    "https://gatherer.wizards.com/Pages/Search/Default.aspx?page=1&set=[%22Zendikar+Rising%22]";
const zendikarRising_page3 =
    "https://gatherer.wizards.com/Pages/Search/Default.aspx?page=2&set=[%22Zendikar+Rising%22]";
const zendikarRising_page4 =
    "https://gatherer.wizards.com/Pages/Search/Default.aspx?page=3&set=[%22Zendikar+Rising%22]";

const adventureForgottenRealms_page1 =
    "https://gatherer.wizards.com/Pages/Search/Default.aspx?action=advanced&set=|[%22Adventures%20in%20the%20Forgotten%20Realms%22]";
const kaldheim_page1 =
    "https://gatherer.wizards.com/Pages/Search/Default.aspx?set=[%22Kaldheim%22]";

//-------- Zendikar Rising scrape --------
axios(zendikarRising_page1)
    .then((response) => {
        const html = response.data;
        const cards = [];

        const $ = cheerio.load(html);
        $(".cardItem", html).each(function () {
            const name = $(this).find("img").attr("alt");
            const img = $(this).find("img").attr("src");
            const cmc = $(this).find(".convertedManaCost").text();
            const color = $(this).find(".manaCost").find("img + img").attr("alt");
            const colorFixed = $(this).find(".manaCost").find("img").attr("alt");
            const type = $(this).find(".typeLine").text();

            const imgFixed = img.replace("../..", "https://gatherer.wizards.com");

            const fixedType = type.split(" ");

            const filtered = fixedType.filter((ele) => {
                if (ele !== " ");
                return ele;
            });

            const filteredAgain = filtered.map((word) => {
                if (word === "Creature") {
                    return "Creature";
                }

                if (word === "Enchantment") {
                    return "Enchantment";
                }

                if (word.match(/(Land)/)) {
                    return "Land";
                }

                if (word.match(/(Planeswalker)/)) {
                    return "Planeswalker";
                }

                if (word.match(/(Artifact)/)) {
                    return "Artifact";
                }

                if (word.match(/(Instant)/)) {
                    return "Instant";
                }

                if (word.match(/(Sorcery)/)) {
                    return "Sorcery";
                }
            });

            const typeFinal = filteredAgain.filter((ele) => {
                if (ele !== "") {
                    return ele;
                }
            });

            // if color is undefined it means the CMC is only 1 mana and color variable isnt working --> change color to colorFixed
            if (color === undefined) {
                cards.push({
                    ["name"]: name,
                    ["image"]: imgFixed,
                    ["cmc"]: cmc,
                    ["color"]: colorFixed,
                    ["type"]: typeFinal[0],
                });
            } else {
                cards.push({
                    ["name"]: name,
                    ["image"]: imgFixed,
                    ["cmc"]: cmc,
                    ["color"]: color,
                    ["type"]: typeFinal[0],
                });
            }
        });
        // console.log(cards);
    })
    .catch((err) => console.log("error"));

axios(zendikarRising_page2)
    .then((response) => {
        const html = response.data;
        const cards = [];

        const $ = cheerio.load(html);
        $(".cardItem", html).each(function () {
            const name = $(this).find("img").attr("alt");
            const img = $(this).find("img").attr("src");
            const cmc = $(this).find(".convertedManaCost").text();
            const color = $(this).find(".manaCost").find("img + img").attr("alt");
            const colorFixed = $(this).find(".manaCost").find("img").attr("alt");
            const type = $(this).find(".typeLine").text();

            const imgFixed = img.replace("../..", "https://gatherer.wizards.com");

            const fixedType = type.split(" ");

            const filtered = fixedType.filter((ele) => {
                if (ele !== " ");
                return ele;
            });

            const filteredAgain = filtered.map((word) => {
                if (word === "Creature") {
                    return "Creature";
                }

                if (word === "Enchantment") {
                    return "Enchantment";
                }

                if (word.match(/(Land)/)) {
                    return "Land";
                }

                if (word.match(/(Planeswalker)/)) {
                    return "Planeswalker";
                }

                if (word.match(/(Artifact)/)) {
                    return "Artifact";
                }

                if (word.match(/(Instant)/)) {
                    return "Instant";
                }

                if (word.match(/(Sorcery)/)) {
                    return "Sorcery";
                }
            });

            const typeFinal = filteredAgain.filter((ele) => {
                if (ele !== "") {
                    return ele;
                }
            });

            // if color is undefined it means the CMC is only 1 mana and color variable isnt working --> change color to colorFixed
            if (color === undefined) {
                cards.push({
                    ["name"]: name,
                    ["image"]: imgFixed,
                    ["cmc"]: cmc,
                    ["color"]: colorFixed,
                    ["type"]: typeFinal[0],
                });
            } else {
                cards.push({
                    ["name"]: name,
                    ["image"]: imgFixed,
                    ["cmc"]: cmc,
                    ["color"]: color,
                    ["type"]: typeFinal[0],
                });
            }
        });
        // console.log(cards);
    })
    .catch((err) => console.log("error"));

axios(zendikarRising_page3)
    .then((response) => {
        const html = response.data;
        const cards = [];

        const $ = cheerio.load(html);
        $(".cardItem", html).each(function () {
            const name = $(this).find("img").attr("alt");
            const img = $(this).find("img").attr("src");
            const cmc = $(this).find(".convertedManaCost").text();
            const color = $(this).find(".manaCost").find("img + img").attr("alt");
            const colorFixed = $(this).find(".manaCost").find("img").attr("alt");
            const type = $(this).find(".typeLine").text();

            const imgFixed = img.replace("../..", "https://gatherer.wizards.com");

            const fixedType = type.split(" ");

            const filtered = fixedType.filter((ele) => {
                if (ele !== " ");
                return ele;
            });

            const filteredAgain = filtered.map((word) => {
                if (word === "Creature") {
                    return "Creature";
                }

                if (word === "Enchantment") {
                    return "Enchantment";
                }

                if (word.match(/(Land)/)) {
                    return "Land";
                }

                if (word.match(/(Planeswalker)/)) {
                    return "Planeswalker";
                }

                if (word.match(/(Artifact)/)) {
                    return "Artifact";
                }

                if (word.match(/(Instant)/)) {
                    return "Instant";
                }

                if (word.match(/(Sorcery)/)) {
                    return "Sorcery";
                }
            });

            const typeFinal = filteredAgain.filter((ele) => {
                if (ele !== "") {
                    return ele;
                }
            });

            // if color is undefined it means the CMC is only 1 mana and color variable isnt working --> change color to colorFixed
            if (color === undefined) {
                cards.push({
                    ["name"]: name,
                    ["image"]: imgFixed,
                    ["cmc"]: cmc,
                    ["color"]: colorFixed,
                    ["type"]: typeFinal[0],
                });
            } else {
                cards.push({
                    ["name"]: name,
                    ["image"]: imgFixed,
                    ["cmc"]: cmc,
                    ["color"]: color,
                    ["type"]: typeFinal[0],
                });
            }
        });
        // console.log(cards);
    })
    .catch((err) => console.log("error"));

axios(zendikarRising_page4)
    .then((response) => {
        const html = response.data;
        const cards = [];

        const $ = cheerio.load(html);
        $(".cardItem", html).each(function () {
            const name = $(this).find("img").attr("alt");
            const img = $(this).find("img").attr("src");
            const cmc = $(this).find(".convertedManaCost").text();
            const color = $(this).find(".manaCost").find("img + img").attr("alt");
            const colorFixed = $(this).find(".manaCost").find("img").attr("alt");
            const type = $(this).find(".typeLine").text();

            const imgFixed = img.replace("../..", "https://gatherer.wizards.com");

            const fixedType = type.split(" ");

            const filtered = fixedType.filter((ele) => {
                if (ele !== " ");
                return ele;
            });

            const filteredAgain = filtered.map((word) => {
                if (word === "Creature") {
                    return "Creature";
                }

                if (word === "Enchantment") {
                    return "Enchantment";
                }

                if (word.match(/(Land)/)) {
                    return "Land";
                }

                if (word.match(/(Planeswalker)/)) {
                    return "Planeswalker";
                }

                if (word.match(/(Artifact)/)) {
                    return "Artifact";
                }

                if (word.match(/(Instant)/)) {
                    return "Instant";
                }

                if (word.match(/(Sorcery)/)) {
                    return "Sorcery";
                }
            });

            const typeFinal = filteredAgain.filter((ele) => {
                if (ele !== "") {
                    return ele;
                }
            });

            // if color is undefined it means the CMC is only 1 mana and color variable isnt working --> change color to colorFixed
            if (color === undefined) {
                cards.push({
                    ["name"]: name,
                    ["image"]: imgFixed,
                    ["cmc"]: cmc,
                    ["color"]: colorFixed,
                    ["type"]: typeFinal[0],
                });
            } else {
                cards.push({
                    ["name"]: name,
                    ["image"]: imgFixed,
                    ["cmc"]: cmc,
                    ["color"]: color,
                    ["type"]: typeFinal[0],
                });
            }
        });
        // console.log(cards);
    })
    .catch((err) => console.log("error"));

//-------- Adventure Forgotten Realms scrape --------
axios(adventureForgottenRealms_page1)
    .then((response) => {
        const html = response.data;
        const cards = [];

        const $ = cheerio.load(html);
        $(".cardItem", html).each(function () {
            const name = $(this).find("img").attr("alt");
            const img = $(this).find("img").attr("src");
            const cmc = $(this).find(".convertedManaCost").text();
            const color = $(this).find(".manaCost").find("img + img").attr("alt");
            const colorFixed = $(this).find(".manaCost").find("img").attr("alt");
            const type = $(this).find(".typeLine").text();

            const imgFixed = img.replace("../..", "https://gatherer.wizards.com");
            // const typeFixed = type.split(" ").filter((type) => {
            //     if (type === "Creature") {
            //         return type;
            //     }

            //     if (type.match(/(Instant)/)) {
            //         let typeArr = [...type];
            //         typeArr.splice(typeArr.length - 1, 1);

            //         return typeArr.join("");
            //     }

            //     if (type.match(/(Sorcery)/)) {
            //         return "Sorcery";
            //     }

            //     if (type.match(/(Land)/)) {
            //         return "Land";
            //     }

            //     if (type.match(/(Artifact)/)) {
            //         return "Artifact";
            //     }

            //     if (type.match(/(Enchantment)/)) {
            //         return "Enchantment";
            //     }

            //     if (type.match(/(Planeswalker)/)) {
            //         return "PlanesWalker";
            //     }
            // });

            const fixedType = type.split(" ");

            const filtered = fixedType.filter((ele) => {
                if (ele !== " ");
                return ele;
            });
            const filteredAgain = filtered.map((word) => {
                if (word === "Creature") {
                    return "Creature";
                }

                if (word === "Enchantment") {
                    return "Enchantment";
                }

                if (word.match(/(Land)/)) {
                    return "Land";
                }

                if (word.match(/(Planeswalker)/)) {
                    return "Planeswalker";
                }

                if (word.match(/(Artifact)/)) {
                    return "Artifact";
                }

                if (word.match(/(Instant)/)) {
                    return "Instant";
                }

                if (word.match(/(Sorcery)/)) {
                    return "Sorcery";
                }
            });

            const typeFinal = filteredAgain.filter((ele) => {
                if (ele !== "") {
                    return ele;
                }
            });

            // if color is undefined it means the CMC is only 1 mana and color variable isnt working --> change color to colorFixed
            if (color === undefined) {
                cards.push({
                    ["name"]: name,
                    ["image"]: imgFixed,
                    ["cmc"]: cmc,
                    ["color"]: colorFixed,
                    ["type"]: typeFinal[0],
                });
            } else {
                cards.push({
                    ["name"]: name,
                    ["image"]: imgFixed,
                    ["cmc"]: cmc,
                    ["color"]: color,
                    ["type"]: typeFinal[0],
                });
            }
        });
        // console.log(cards);
    })
    .catch((err) => console.log("error"));

//--------  Kaldheim scrape --------
axios(kaldheim_page1)
    .then((response) => {
        const html = response.data;
        const cards = [];

        const $ = cheerio.load(html);
        $(".cardItem", html).each(function () {
            const name = $(this).find("img").attr("alt");
            const img = $(this).find("img").attr("src");
            const cmc = $(this).find(".convertedManaCost").text();
            const color = $(this).find(".manaCost").find("img + img").attr("alt");
            const colorFixed = $(this).find(".manaCost").find("img").attr("alt");
            const type = $(this).find(".typeLine").text();

            const imgFixed = img.replace("../..", "https://gatherer.wizards.com");

            const fixedType = type.split(" ");

            const filtered = fixedType.filter((ele) => {
                if (ele !== " ");
                return ele;
            });
            const filteredAgain = filtered.map((word) => {
                if (word === "Creature") {
                    return "Creature";
                }

                if (word === "Enchantment") {
                    return "Enchantment";
                }

                if (word.match(/(Land)/)) {
                    return "Land";
                }

                if (word.match(/(Planeswalker)/)) {
                    return "Planeswalker";
                }

                if (word.match(/(Artifact)/)) {
                    return "Artifact";
                }

                if (word.match(/(Instant)/)) {
                    return "Instant";
                }

                if (word.match(/(Sorcery)/)) {
                    return "Sorcery";
                }
            });

            const typeFinal = filteredAgain.filter((ele) => {
                if (ele !== "") {
                    return ele;
                }
            });

            // if color is undefined it means the CMC is only 1 mana and color variable isnt working --> change color to colorFixed
            if (color === undefined) {
                cards.push({
                    ["name"]: name,
                    ["image"]: imgFixed,
                    ["cmc"]: cmc,
                    ["color"]: colorFixed,
                    ["type"]: typeFinal[0],
                });
            } else {
                cards.push({
                    ["name"]: name,
                    ["image"]: imgFixed,
                    ["cmc"]: cmc,
                    ["color"]: color,
                    ["type"]: typeFinal[0],
                });
            }
        });
        // console.log(cards);
    })
    .catch((err) => console.log("error"));

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
