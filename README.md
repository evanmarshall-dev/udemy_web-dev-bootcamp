# Udemy: Web Developer Bootcamp

![Udemy Logo](https://www.langoly.com/wp-content/uploads/2022/09/udemy-logo.png)

![HTML](https://img.shields.io/badge/html-orange?style=plastic)
![CSS](https://img.shields.io/badge/css-blue?style=plastic)
![JAVASCRIPT](https://img.shields.io/badge/javascript-yellow?style=plastic)
![JQUERY](https://img.shields.io/badge/jquery-navy?style=plastic)
![NODE.JS](https://img.shields.io/badge/node.js-green?style=plastic)
![EXPRESS.JS](https://img.shields.io/badge/express.js-black?style=plastic)
![EJS](https://img.shields.io/badge/ejs-maroon?style=plastic)
![GIT](https://img.shields.io/badge/git-orange?style=plastic)
![API](https://img.shields.io/badge/api-brown?style=plastic)
![JSON](https://img.shields.io/badge/json-purple?style=plastic)
![POSTGRESQL](https://img.shields.io/badge/postgres-blue?style=plastic)
![REACT.JS](https://img.shields.io/badge/react.js-cyan?style=plastic)
![OAUTH](https://img.shields.io/badge/oauth-red?style=plastic)
![WEB3](https://img.shields.io/badge/web3-pink?style=plastic)

> [!IMPORTANT]
>
> [Course Page](https://www.udemy.com/course/the-complete-web-development-bootcamp)

<!--
For adding highlights to text.
> [!NOTE]
> [!TIP]
> [!IMPORTANT]
> [!WARNING]
> [!CAUTION]
> Sample text to be included in the note.
-->

## Section: Intermediate CSS

### Module: Combining CSS Selectors

**_Group_**

Grouping selectors applies the same styles to _all_ elements within the group.

```css
.selector1,
.selector2 {
  color: blueviolet;
}
```

**_Child_**

Using the greater than symbol will select a _child_ of a selector. The left side of the symbol is the parent and the right side of the symbol is the child.

```css
.parent-selector > .child-selector {
  color: firebrick;
}
```

**_Descendant_**

When you have two selectors the first one is the _ancestor_ and the second one is the _descendant_. They style will be applied to the descendant only if it has an ancestor specified. The difference between descendant and child selection is that the descendant does not have to be a child of the ancestor (direct descendant), but rather it can be many levels deep.

```css
.ancestor-selector .descendant-selector {
  color: brown;
}
```

**_Chaining_**

Apply styles to the instances where _all_ of the selectors are true. There are no spaces or punctuations between the selectors. If one of the selectors is an element that has to go _first_.

```css
h1#title.big {
  color: seagreen;
}
```

**_Combining Combiners_**

You can combine any of the above combiners. For example, ancestor/descendant with chain.

```css
.ancestor-selector h1#header {
  font-size: 2rem;
}
```

### Module: CSS Positioning

Position is outside and separate from margin in the box model.

**_Static Positioning_**:

This is the _default_ positioning of elements. Each element flows as they would in HTML. You can set the position to _static_, but it is not necessary.

**_Relative Positioning_**

Positioned relative to its _default_ position.

**_Absolute Positioning_**

Positioned relative to its _nearest positioned ancestor_ (Ancestor with position set to relative) or top left corner of _webpage_ (If no positioned ancestor). It also takes the element outside of default flow (Default z-index of 0) and places it _above_ default elements.

**_Fixed Positioning_**

Positioned to the top left corner of the _browser_. Stays in the same location even when the user scrolls.

## Section: Advanced CSS

### Module: CSS Display

**_Inline_**

Cannot control height and width and only occupies width of the content.

**_Block_**

Takes up entire full width and will not share the same row with another element. We can control its height and width.

**_Inline Block_**

We can set its height and width, but it only takes up width on a row for its content (Can position multiple elements on the same row). It combines properties of both block and inline.

### Module: CSS Float

Allows us to _wrap_ content around an element. For example, if we have an image and text and make the image `float: left` then the text will wrap around the image. This takes the image out of the normal HTML flow and makes it float around the text.

If we have, for example, an image and two different paragraphs (One is a footer) and we want only the first paragraph to wrap around the image and have the footer on the bottom then we use the `clear` property. Setting the clear to the footer makes it ignore any floating styles and it goes into the normal HTML flow.

```html
<style>
  img {
    float: left;
  }

  footer {
    clear: left;
  }
</style>

<img src="/images/sample.png" />
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book.
</p>
<footer>Copyright evanmarshall.dev All rights reserved</footer>
```

If there are two or more elements floating above the footer (One floating left and one right) then we would need to set the footer to `clear: both` in order to achieve the same results.

> [!TIP]
> There are better ways to achieve complex layouts in CSS now instead of _float_ and _clear_. Most will now use **CSS Grid** and/or **CSS Flexbox**.

## Section: Flexbox

> [!IMPORTANT]
>
> [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
>
> [Flexbox Froggy](https://appbrewery.github.io/flexboxfroggy/)

Float is mainly used now for floating an image within some text. For overall _layout_ of a web page one commonly used _display_ property is _flex_.

When you set a container to a display of flex it no longer follows the rules of the other display properties (i.e. inline-block, inline, and block). The flexbox takes over and controls how the _flex items_ are laid out.

The width of each flex item is normally based on the content size.

### Module: Flex Direction

Flex direction defaults to `row`. This is what creates the inline flow of elements in a row (x-axis). This is the _main-axis_ and when flex direction is row the main axis is the _horizontal_ from left to right.

There is also a _cross-axis_, which is perpendicular to the main-axis.

When we change the flex direction to `column` we change the main-axis to vertical or top to bottom. This also changes the cross-axis to horizontal. Also when setting flex direction to column the flex items will take up the full width of the container. In order to take up only the content width we would set the flex container to `inline-flex`.

When you set the `flex-basis` it changes the _width_ of the flex items for flex row and it changes the _height_ of the flex items for flex column. So with flex basis you are stretching flex items along the main-axis.

> [!TIP]
> The flex basis is set on the _flex items_ and not the flex container.

```html
<style>
  .container {
    color: white;
    border: 5px solid gold;
    display: inline-flex;
    flex-direction: column;

    > * {
      flex-basis: 100px;
    }
  }

  .red {
    background-color: red;
  }
  .green {
    background-color: green;
  }
  .blue {
    background-color: blue;
  }
  .yellow {
    background-color: yellow;
  }
  .purple {
    background-color: purple;
  }
  .orange {
    background-color: orange;
  }
  .pink {
    background-color: pink;
  }
  .brown {
    background-color: brown;
  }
</style>

<div class="container">
  <div class="red"></div>
  <div class="green"></div>
  <div class="blue"></div>
  <div class="yellow"></div>
  <div class="purple"></div>
  <div class="orange"></div>
  <div class="pink"></div>
  <div class="brown"></div>
</div>
```

> [!TIP]
> In order to select all children elements we would use the chile selector (`>`) followed by the universal selector (`*`).

### Module: Flex Layout

**_Flex Order_**

By default items have an order of `0`. This means that they follow how they are ordered in HTML. The number set in order has the largest order number at the end of the flex container or furthest to the right. The order value is set on the _children_ of the flex container or the flex items.

**_Flex Wrap_**

This matters when you run out of space horizontally. The default behaviour is `flex-wrap: nowrap`, which means as new items get added to the flex container they simply get pushed off the page. If you want flex items to wrap to a new line when space runs out you would set this property to `wrap`. This is set on the _parent_ or the flex container.

**_Justify Content_**

This property is set on the flex container. It sets the _distribution_ of the of items on the main-axis. The default is `flex-start` (Bunched up at the start of the axis).

**_Align Items_**

This is the position of the flex items along the cross-axis. The default is set to `flex-start` and is set on the flex container. Unless there is a height set on the flex container you will not see any differences when this property is set.

> [!TIP]
> You can also set alignment on a flex item itself by using the `align-self` property.

**_Align Content_**

Similar to align content, but it _only_ works when you have the flex wrap set to wrap. This determines how the flex items are aligned when they wrap to a new line.

### Module: Flex Sizing

Flexbox uses an algorithm to determine how flex items will shrink or grow by defaults.

It looks at (Order of priority):

1. Min/Max Width
2. Flex Basis
3. Width (Or height on flex column)
4. Content Width

The _minimum_ content width would be the width of the content that is wrapped (The longest word in the case of a paragraph). So basically as the screen shrinks the content will shrink until we hit the minimum content width. Once we hit the minimum content width the content will start getting pushed off the page and will no longer shrink. This is the default behaviour if none of the above 1-3 are set.

**_If Width is Set_**

For example, if each of the flex items has a static width set to 100px and there are 4 items then the minimum content width will be 400px before shrinking starts. Once we hit a width of 400px the flexbox will start shrinking the flex items dynamically until the same minimum content width above is met.

**_If Flex Basis is Set_**

Width will be ignored. If, for example, the flex basis is 200px for 4 flex items then the minimum content width is 800px before shrinking starts.

**_If Min/Max Width is Set_**

There is a _default_ max width set, which is all of the content lined up occupying one line. The default min width is determined by the longest word (The width of said word).

Even if you set a max-width on the flex items then that will be respected even if a flex basis which is larger than the max-width is set. Max width determines the maximum width a flex item is allowed to _grow_ to.

> [!TIP]
> If the max-width is larger than the flex basis then the flex basis will be used. The max-width property is only used when it is smaller than the flex-basis.
> If the min-width is larger than the flex basis then the min-width will be used.

If the max-width determines how much flex items can _grow_ to then the min-width determines how small a flex item can _shrink_ to.

**_Flex Grow and Flex Shrink_**

If we only have flex basis set and no `flex-grow` or `flex-shrink` then no shrinking or growing will occur.

If we set `flex-grow` to `1` and keep `flex-shrink` at `0` then the items will grow until we reach 100% of width on the main-axis. It will start at the `flex-basis` amount.

If we set `flex-shrink` to `1` and keep `flex-grow` at `0` then the items will not grow. They will shrink to the minimum content width set by `flex-basis`.

> [!TIP]
> The default behaviour in a flexbox is to allow items to shrink, but not grow (`flex-grow: 0` and `flex-shrink: 1`).
> The default `flex-basis` is `auto`. So it will look at the content in each flex item and give more basis to the items with more content and less basis to the items with less content. You can simply set flex basis to 0 if you do not want this.

When grow _and_ shrink are set to 1, the flex basis is essentially ignored and the items try to grow to take up as much width as possible and shrink to the smallest width possible (Grow to the max width and shrink to the min width described above).

**_Shorthand_**

Basis, grow and shrink can be written in shorthand `(flex: 1 1 0)`:

1. Grow
2. Shrink
3. Basis

> [!TIP]
> The above can be written even shorter as `flex: 1`.

## Section: Grid

> [!IMPORTANT]
>
> [Grid Sizing](https://appbrewery.github.io/grid-sizing/)
>
> [Grid Garden](https://appbrewery.github.io/gridgarden/)

Generally, flexbox is good for one dimensional alignment whereas grid is good for two dimensional, but they can be used in combination.

Grids strength is when we shrink a layout it will maintain its alignment and gaps, whereas with flexbox this is very difficult to achieve because it tries to expand and shrink content to fit on screen.

The default behaviour of a grid is to take up the full width, but only enough height to display content.

Example grid layout:

```html
<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }
</style>

<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

### Module: Grid Sizing

How to size our columns and rows.

You can use static sizing on `grid-template-rows` and `grid-template-columns`, but they won't be responsive. Instead it might be good to use `rem` units since it is relative to the browser default sizes.

There is a shorthand for this where we define both rows and columns: `grid-template: 100px 200px / 400px 800px`. Rows are defined first then columns.

You can also use the `auto` keyword to provide responsiveness. The following allows the 2nd column to take up the remaining space in the browser. For the row set to `auto` it will try to fit to the size of the _content_.

```css
.grid-container {
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: 200px auto;
}
```

**_The minmax Property_**

Sometimes you want to define how the grid is responsive especially on the horizontal. We can do this using the `minmax` property. The first value is the minimum width of the column and the second value is the maximum width.

For the example below, when we have enough space we can go all the way up to 800px for the second column and all the way down to 400px for the second column width.

```css
.grid-container {
  display: grid;
  grid-template-rows: 200px 400px;
  grid-template-columns: 200px minmax(400px, 800px);
}
```

**_The Repeat Property_**

Instead of writing 1fr 8 times when we want 8 columns of equal width we can use the `repeat` property. We would then write `repeat(8, 1fr)`. The _first_ value is how many times to repeat and the _second_ value is the width.

```css
.grid-container {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

/* OR */

.grid-container {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(8, 1fr);
}
```

**_Excess or Not Enough Grid Items_**

When we have _less_ grid items than what is defined in the grid template then it will simply wrap the extra grid items to a new line and leave the remaining slots empty.

If you do not define enough rows and columns in the grid template (More grid items than defined in the grid) then the added grid item will get an _auto_ height (Fit to the content) and _match_ any existing column width.

**_Grid Auto_**

If you have some code that will create more containers in the future then you can use the `grid-auto-rows` or `grid-auto-columns`. These properties will define the width or height of potential grid items.

> [!TIP]
> If you define a grid in your CSS and you select the grid in the Chrome Developer Tools (CDT) then you can click the grid button and see more guides related to CSS grid.
> Clicking _layout_ will allow more fine-tuned control over this.

### Module: Grid Placement

**_Nomenclature for Grids_**

- Grid container.
- Grid items: The children of the grid container.
- Tracks: Made up of grid rows and grid columns. Sized with `grid-template-rows` and `grid-template-columns`.
- Cells: Intersections of the row tracks and column tracks. Multiple cells can be used to create a grid item.
- Grid lines: Lines which separate the tracks. The grid lines are controlled with the `gap` property.

When you use `grid-column` and set it to `span 2` for example, it will make the grid item stretch across two columns.

The grid column property is shorthand for `grid-column-start` and `grid-column-end`. If you set grid column start to 2 it will move the item over a cell and if you set grid column end to 3 it will span two cells.

You can also use _negative_ numbers for the grid column start and end. For example using `-1` will end at the _far right_ line for grid column end and `1` will start at the _far left_ line for grid column start. This is useful if you are not sure where in the grid the item should be or if you are dynamically creating grid items.

Using `auto` for grid column start or end will place the grid item where it initially is set in the HTML.

> [!TIP]
> It is recommended to stick to using `-1` only for `grid-column-start` and `grid-column-end` and positive numbers for anything else.

All of the above principles work the same way with `grid-row` (Or `grid-row-start` and `grid-row-end`).

There is also a property called `order`. By default all items in a grid have an order of `0`. If you change the order for an item to `1` or whichever item has the highest order number in the grid will be placed _last_ (Considering the direction left to right and top to bottom).

See below example for the three ways to position `.astronaut`. Keep in mind that if you use `grid-area` then you need to have every item use grid area.

```html
<style>
  .grid-container {
    display: grid;
    grid-template-rows: 1fr 1fr 1.5fr;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cowboy {
    grid-column: span 2;
    background-color: cyan;
  }

  /* .astronaut {
    grid-column: span 2;
    background-color: green;
    order: 1;
  } */

  /* Can also be written as. */
  /* .astronaut {
    background-color: green;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  } */

  /* Can also be written shorthand. */
  .astronaut {
    background-color: orange;
    /* row-start / column-start / row-end / column-end */
    grid-area: 2 / 1 / 3 / 3;
  }

  .book {
    grid-row: span 2;
    background-color: purple;
  }
</style>

<div class="grid-container">
  <div class="grid-item cowboy">🤠</div>
  <div class="grid-item astronaut">👨‍🚀</div>
  <div class="grid-item book">📖</div>
</div>
```

One of the main differences between grid and flexbox is that grid allows you to _overlay_ items. If you are using `background-color` it is good to set the color with some transparency to demonstrate this.
