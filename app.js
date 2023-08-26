// const heading = React.createElement("h1", { className: "goodColor" }, "Hello world from React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading) //object

// root.render(heading);

const outerDiv = React.createElement("div", {},
[ 
    React.createElement("span",{}, "This is the outer div"),

    React.createElement("div", {},
    [
        React.createElement("h2", {}, ["This is the h2 tag"]),
        React.createElement("h1", {}, ["This is the h1 tag"])
    ] 
 )
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(outerDiv)
