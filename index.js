import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1",{id:"heading"},"hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));

const Heading = <h1 id="heading">React (JSX Syntax)</h1>;

const HeadingComponent = () => {
    // {heading},
    return (
        <div className='container'>
            {Heading}
            <h1 id="heading">React(HeadingComponent)</h1>
        </div>
    );
};

// root.render(Heading);
root.render(<HeadingComponent/>);