* What is flex ?
The flex box is flexible box designed to build one-dimensional layouts in css. One dimensional means flexbox can build layout in one dimension at one time.

--> Parrent Properties:
    display: flex;
    flex-direction: row | row-reverse | column | column-reverse;
    flex-wrap: nowrap | wrap | wrap-reverse;
    flex-flow: column wrap;
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right;
    align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start;
    align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline;
    row-gap: 10px;
    column-gap: 20px;

--> Children Properties:
    flex-grow: 4;
    order: 5;
    flex-shrink: 3;
    flex-basis:  | auto;
    align-self: auto | flex-start | flex-end | center | baseline | stretch;

* What is Grid ?
CSS Grid is a two-dimensional layout that you can use for creating responsive items on the web. The Grid items are arranged in columns, and you can easily position rows without having to mess around with the HTML code.

--> Parrent Properties:
    display: grid | inline-grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
     grid-template-areas: 
    "<grid-area-name> | . | none | ..."
    "...";
    grid-gap: <grid-row-gap> <grid-column-gap>;
    justify-items: start | end | center | stretch;
    align-items: start | end | center | stretch;
    justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
    align-content: start | end | center | stretch | space-around | space-between | space-evenly;          

--> Childreen Properties:
    grid-column: <start-line> / <end-line> | <start-line> / span <value>;
    grid-row: <start-line> / <end-line> | <start-line> / span <value>;
    grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
    justify-self: start | end | center | stretch;
    align-self: start | end | center | stretch;

* When to use what ?
Bascically there are two factors which tells us that when to use grid and when to use flex.
1-How the component child items are displayed? Inline or as columns and rows?
2-How the component is expected to work on various screen sizes?

--> Most of the time, if the component you are viewing has all of its child items displayed inline, then most probably flexbox is the best solution here.However, if you see columns and rows, then CSS grid is the solution for your case.