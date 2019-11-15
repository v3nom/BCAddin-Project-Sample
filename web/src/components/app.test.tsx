import * as React from "react";
import { AppComponent } from "./app";
import * as Renderer from "react-test-renderer";


describe("App Component test suite", () => {
    test("Render without success message", () => {
        const component = Renderer.create(<AppComponent></AppComponent>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("Render with success message", () => {
        const component = Renderer.create(<AppComponent message="Value accepted"></AppComponent>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});