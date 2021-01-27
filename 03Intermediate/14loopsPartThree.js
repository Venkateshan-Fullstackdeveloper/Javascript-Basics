const names = ["Youtube","Google","Instagram","LinkedIn","Amazon"];

// for(const n of names){
//     console.log(n);
// }

const symbols = {
    yt: "Youtube",
    gg: "Google",
    ig: "Instagram",
    ln: "LinkedIn",
    aws: "Amazon"
};

for (const n in symbols){
    console.log(symbols[n]);
}