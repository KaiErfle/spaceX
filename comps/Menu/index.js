import React from 'react';
import './Menu.css'

const Menu = () => <div>
<body>
<button id="roundButton"><span class="material-icons">
        menu
        </span></button>
    <div id="container">
        <h1 id="title">Info pages:</h1>
        <ul>
            <li>Info about Mars</li>
            <li>How to live on Mars</li>
            <li>About SpaceX</li>
            <li>Mars colony concept <article></article></li>
            <li>Take the Test</li>
        </ul>
    </div>
<div className="show" id="flyoutMenu">
    <h2><a href="#">Home</a></h2>
    <h2><a class="items" href="#">Info about Mars</a></h2>
    <h2><a class="items" href="#">How to live on Mars</a></h2>
    <h2><a class="items" href="#">About SpaceX</a></h2>
    <h2><a class="items" href="#">Gallery</a></h2>
    <h2><a class="items" href="#">Take the test</a></h2>
</div>
</body>
</div>    




export default Menu;