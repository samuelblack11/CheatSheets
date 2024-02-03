
/* Basic Syntax */
selector {
	property: value;
}

/*Selectors: Specify the HTML elements to style.*/
Type selector: targets HTML elements by their tag name. E.g., p { }.
Class selector: targets elements by their class attribute. E.g., .classname { }.
ID selector: targets elements by their ID attribute. E.g., #idname { }.
Attribute selector: targets elements with a specific attribute. E.g., [attr=value] { }.

/*Properties and Values: Define what aspect of the element's style you want to change and how.*/
Text Properties: color, font-family, font-size, text-align.
Box Model Properties: margin, border, padding, width, height.
Layout Properties: display, position, top, left, float, clear.
Flexbox and Grid: For advanced layout models - display: flex;, display: grid;.

/*Specificity Hierarchy*/
Inline styles > IDs > Classes, Attributes, Pseudo-classes > Elements and Pseudo-elements.
When selectors have equal specificity, the last one takes precedence.
The !important rule overrides all other declarations, but its use is discouraged unless absolutely necessary.

/*Common CSS Properties*/
Color and Typography: Control the text appearance (color, font-family, font-size).
Margin and Padding: Control spacing around and inside elements.
Borders: Define the border around elements (border-width, border-color).
Background: Set background colors or images (background-color, background-image).
Positioning: Determine element positioning (position, top, left, z-index).

CSS Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference