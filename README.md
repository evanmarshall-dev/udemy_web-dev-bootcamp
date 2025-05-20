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
