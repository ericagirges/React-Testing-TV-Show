import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./Episodes";

const episodesData = [];

test("Renders without errors", () => {
    render(<Episodes episodes={[]}/>);
})

test("Rerenders with new props", () => {
    const { rerender } = render(<Episodes episodes={[]}/>);   

    rerender(<Episodes episodes={episodesData}/>)
})