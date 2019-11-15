import * as React from 'react';
import * as ReactDOM from "react-dom";
import { AppComponent } from "./components/app";

let rootElement: Element;

// Initializes root element in client add-in where content should be rendered
function initRootElement() {
    const app = document.createElement('div');
    app.id = 'app';
    document.getElementById('controlAddIn').append(app);
    return app;
}

// Renders root react component
function render(message: string) {
    ReactDOM.render(React.createElement(AppComponent, { message: message }), rootElement);
}

// Global APP object for initializing client side-code
globalThis.App = {
    Init: (message: string) => {
        rootElement = initRootElement();
        render(message);
    }
};

// Addin public function which can be called from the AL
globalThis.Message = (value: string) => {
    render(value);
};
