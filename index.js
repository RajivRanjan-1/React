// const content = React.createElement("h1",{id:"heading"},"Hello world");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const content = 
    React.createElement("div",{id:"heading"},
        React.createElement("div",{id:"child"},
            [ React.createElement("h1",{},"Hello world 1"),
            React.createElement("h2",{},"Hello world 2") ]
        )
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);