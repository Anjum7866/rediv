/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {


    extend: {
      colors: {
        "white": "#FFFFFF",
        "black": "#000000",
        "primary": {
          "100": "#f4f4fb",
          "150": "#e5e4f6",
          "200": "#d7d4f0",
          "250": "#c8c5eb",
          "300": "#b9b5e5",
          "350": "#aba6e0",
          "400": "#9c96da",
          "450": "#8d87d5",
          "500": "#7d76cf",
          "550": "#6960c7",
          "600": "#5349bf",
          "650": "#463cac",
          "700": "#3c3495",
          "750": "#332c7e",
          "800": "#2a2467",
          "850": "#201c50",
          "900": "#171438",
          "DEFAULT": "#7d76cf"
        },
        "secondary": {
          "100": "#f1f9fe",
          "150": "#d7effb",
          "200": "#bee5f9",
          "250": "#a4dbf6",
          "300": "#8bd1f4",
          "350": "#71c6f1",
          "400": "#58bcee",
          "450": "#3eb2ec",
          "500": "#27a8e9",
          "550": "#169adc",
          "600": "#1388c2",
          "650": "#1176a8",
          "700": "#0e648f",
          "750": "#0c5275",
          "800": "#09405b",
          "850": "#062e41",
          "900": "#041c27",
          "DEFAULT": "#27a8e9"
        },
        "info": {
          "100": "#f0f8fe",
          "150": "#d4ebfd",
          "200": "#b8defc",
          "250": "#9cd2fa",
          "300": "#80c5f9",
          "350": "#64b8f8",
          "400": "#48abf6",
          "450": "#2c9ef5",
          "500": "#1091f4",
          "550": "#0b83df",
          "600": "#0974c6",
          "650": "#0865ad",
          "700": "#075794",
          "750": "#06487a",
          "800": "#053961",
          "850": "#032a48",
          "900": "#021b2f",
          "DEFAULT": "#1091f4"
        },
        "warning": {
          "100": "#fef8f1",
          "150": "#fcecd9",
          "200": "#fae0c2",
          "250": "#f8d4aa",
          "300": "#f6c892",
          "350": "#f4bc7b",
          "400": "#f2b063",
          "450": "#f0a44c",
          "500": "#ef9834",
          "550": "#ec8917",
          "600": "#d37911",
          "650": "#b7680f",
          "700": "#9a580c",
          "750": "#7d470a",
          "800": "#603708",
          "850": "#432605",
          "900": "#271603",
          "DEFAULT": "#ef9834"
        },
        "danger": {
          "100": "#fef0f1",
          "150": "#fdd7d8",
          "200": "#fbbdbf",
          "250": "#faa3a6",
          "300": "#f8898d",
          "350": "#f76f73",
          "400": "#f5555a",
          "450": "#f43b41",
          "500": "#f22128",
          "550": "#eb0e15",
          "600": "#d20c13",
          "650": "#b90b11",
          "700": "#9f090e",
          "750": "#86080c",
          "800": "#6d060a",
          "850": "#540508",
          "900": "#3b0305",
          "DEFAULT": "#f22128"
        },
        "success": {
          "100": "#eefdf3",
          "150": "#d3f9e0",
          "200": "#b8f5cd",
          "250": "#9df2b9",
          "300": "#82eea6",
          "350": "#67ea93",
          "400": "#4ce77f",
          "450": "#31e36c",
          "500": "#1dd75b",
          "550": "#1ac052",
          "600": "#17a948",
          "650": "#14923e",
          "700": "#117b34",
          "750": "#0e642a",
          "800": "#0a4d20",
          "850": "#073517",
          "900": "#041e0d",
          "DEFAULT": "#1dd75b"
        },
        "color-1": {
          "100": "#f1fbfd",
          "150": "#d6f5f8",
          "200": "#bbeef4",
          "250": "#a1e8f0",
          "300": "#86e1eb",
          "350": "#6bdbe7",
          "400": "#50d4e3",
          "450": "#36cdde",
          "500": "#23c2d3",
          "550": "#1facbc",
          "600": "#1b98a6",
          "650": "#17838f",
          "700": "#146f79",
          "750": "#105a62",
          "800": "#0c464c",
          "850": "#093135",
          "900": "#051c1f",
          "DEFAULT": "#23c2d3"
        },
        "color-2": {
          "100": "#fef8f0",
          "150": "#fdedd5",
          "200": "#fce2ba",
          "250": "#fbd6a0",
          "300": "#f9cb85",
          "350": "#f8bf6a",
          "400": "#f7b44f",
          "450": "#f5a835",
          "500": "#f49d1a",
          "550": "#e68f0b",
          "600": "#cb7d0a",
          "650": "#af6c08",
          "700": "#935b07",
          "750": "#784a06",
          "800": "#5c3904",
          "850": "#402803",
          "900": "#241602",
          "DEFAULT": "#f49d1a"
        },
        "color-3": {
          "100": "#fff0f7",
          "150": "#ffd7ea",
          "200": "#ffbedd",
          "250": "#ffa5d1",
          "300": "#ff8cc4",
          "350": "#ff73b7",
          "400": "#ff5aaa",
          "450": "#ff429d",
          "500": "#ff2b91",
          "550": "#ff0b81",
          "600": "#ec0072",
          "650": "#cf0064",
          "700": "#b10056",
          "750": "#930047",
          "800": "#760039",
          "850": "#58002b",
          "900": "#3a001c",
          "DEFAULT": "#ff2b91"
        }
      },
      "fontSize": {
        "t1": [
          "0.6875rem",
          "1.125rem"
        ],
        "t2": [
          "0.75rem",
          "1.25rem"
        ],
        "t3": [
          "0.875rem",
          "1.375rem"
        ],
        "t4": [
          "1rem",
          "1.625rem"
        ],
        "t5": [
          "1.125rem",
          "1.75rem"
        ],
        "t6": [
          "1.25rem",
          "1.875rem"
        ],
        "t7": [
          "1.5rem",
          "2.25rem"
        ],
        "t8": [
          "2rem",
          "3rem"
        ],
        "t9": [
          "2.5rem",
          "3.5rem"
        ],
        "t10": [
          "3rem",
          "4.25rem"
        ]
      },
      "spacing": {
        "s0": "0.125rem",
        "s1": "0.25rem",
        "s2": "0.375rem",
        "s3": "0.5rem",
        "s4": "0.75rem",
        "s5": "1rem",
        "s6": "1.25rem",
        "s7": "1.5rem",
        "s8": "1.75rem",
        "s9": "2rem",
        "s10": "2.25rem",
        "s11": "2.5rem",
        "s12": "2.75rem",
        "s13": "3rem",
        "s14": "3.5rem",
        "s15": "4rem",
        "s16": "6rem",
        "s17": "8rem",
        "s18": "12rem",
        "s19": "16rem",
        "s20": "24rem"
      },
      "fontFamily": {
        "heading": "Open Sans",
        "body": "Manrope"
      },
      "width": {
        "Sz_NONE": "0rem",
        "Sz0": "0.125rem",
        "Sz1": "0.25rem",
        "Sz2": "0.375rem",
        "Sz3": "0.5rem",
        "Sz4": "0.75rem",
        "Sz5": "1rem",
        "Sz6": "1.25rem",
        "Sz7": "1.5rem",
        "Sz8": "1.75rem",
        "Sz9": "2rem",
        "Sz10": "2.25rem",
        "Sz11": "2.5rem",
        "Sz12": "2.75rem",
        "Sz13": "3rem",
        "Sz14": "3.25rem",
        "Sz15": "3.5rem",
        "Sz16": "3.75rem",
        "Sz17": "4rem",
        "Sz18": "6rem",
        "Sz19": "8rem",
        "Sz20": "12rem",
        "Sz21": "16rem",
        "Sz22": "24rem",
        "Sz23": "32rem",
        "Sz24": "40rem",
        "Sz25": "48rem",
        "Sz26": "56rem",
        "Sz27": "64rem"
      },
      "height": {
        "Sz_NONE": "0rem",
        "Sz0": "0.125rem",
        "Sz1": "0.25rem",
        "Sz2": "0.375rem",
        "Sz3": "0.5rem",
        "Sz4": "0.75rem",
        "Sz5": "1rem",
        "Sz6": "1.25rem",
        "Sz7": "1.5rem",
        "Sz8": "1.75rem",
        "Sz9": "2rem",
        "Sz10": "2.25rem",
        "Sz11": "2.5rem",
        "Sz12": "2.75rem",
        "Sz13": "3rem",
        "Sz14": "3.25rem",
        "Sz15": "3.5rem",
        "Sz16": "3.75rem",
        "Sz17": "4rem",
        "Sz18": "6rem",
        "Sz19": "8rem",
        "Sz20": "12rem",
        "Sz21": "16rem",
        "Sz22": "24rem",
        "Sz23": "32rem",
        "Sz24": "40rem",
        "Sz25": "48rem",
        "Sz26": "56rem",
        "Sz27": "64rem"
      },
      "borderRadius": {
        "xs": "0.125rem",
        "s": "0.1875rem",
        "m": "0.25rem",
        "l": "0.375rem",
        "xl": "0.75rem",
        "100-percent": "100%"
      },
      "boxShadow": {
        "xs": "0px 0px 1px rgba(23, 26, 31, 0.07), 0px 0px 2px rgba(23, 26, 31, 0.12)",
        "s": "0px 2px 5px rgba(23, 26, 31, 0.09), 0px 0px 2px rgba(23, 26, 31, 0.12)",
        "m": "0px 4px 9px rgba(23, 26, 31, 0.11), 0px 0px 2px rgba(23, 26, 31, 0.12)",
        "l": "0px 8px 17px rgba(23, 26, 31, 0.15), 0px 0px 2px rgba(23, 26, 31, 0.12)",
        "xl": "0px 17px 35px rgba(23, 26, 31, 0.24), 0px 0px 2px rgba(23, 26, 31, 0.12)"
      }
    }
  }
}