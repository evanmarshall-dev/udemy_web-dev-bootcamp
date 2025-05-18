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
