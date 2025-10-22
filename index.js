import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

// const heading = React.createElement("div",{className:"title"},
//     [   React.createElement("h1",{id:'h1'},'h1'),
//         React.createElement("h2",{id:'h2'},'h2'),
//         React.createElement("h3",{id:'h3'},'h3')  ]
// );

// const nestedheading = (
//     <div className="title">
//         <h1>h1</h1>
//         <h2>h2</h2>
//         <h3>h3</h3>
//     </div>
// );

// const Nestedhead = () => (
//     <div className="head">
//         <h1>h1</h1>
//         <h2>h2</h2>
//         <h3>h3</h3>
//     </div>
// );

// const Nestedheading = () => (
//     <div className="title">
//         {/* {nestedheading}
//         <Nestedhead></Nestedhead>
//         <Nestedhead/>
//         {Nestedhead()} */}
//         <h1 className='mainheading'>h1</h1>
//         <h2>h2</h2>
//         <h3>h3</h3>
//     </div>
// );

const HeaderComponent = () => {
    return (
    <header>
      <nav>
        <img src="./icon.png" alt="Logo" className="img-logo" />
        <input type="text" className="input" placeholder="Type something..." />
        <img src="./profile.png" alt="" className="img-profile" />
      </nav>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
// root.render(nestedheading);
// root.render(<Nestedheading/>);

root.render(<HeaderComponent/>);