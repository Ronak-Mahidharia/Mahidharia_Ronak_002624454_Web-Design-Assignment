Name: Ronak Vishal Mahidharia
Website Name: Mahidharia's Bakery

1. Variables: SCSS variables, such as $button-background, $button-color, etc., are used to store and reuse values like colors and sizes.

2. Custom Properties: Custom properties, often referred to as CSS variables, allow for dynamic value assignment in CSS. They are defined using --variable-name and provide flexibility in theming and style adjustment. For instance, I have create a different file name "_root.scss" where customer properties is used.

3. Nesting: Nest selectors make the code more organized and maintainable. For example, nesting is used for .navbar, .navbar-right, and .navbar-left.

4. Interpolation: Interpolation, indicated by #{}, is used to insert variables or expressions into selector names. For instance, #{$g}-container is used to create dynamic class names.

5. Placeholder Selectors: Placeholder selectors, denoted by %, are defined and used as templates for reuse. For example, %grid-container and %grid-item serve as placeholders for grid-related styles.

6. Mixins: Mixins, like button-styles, blue-text, and black-border, are reusable blocks of CSS properties and rules. They are included using @include.

7. Functions: SCSS functions are used to perform custom calculations, like calculate-width, which calculates the width of an element based on the number of columns.

Additional Features:

* Media Queries: Media queries are used to apply styles based on screen width. For example, @media (max-width: 768px) is used to adjust the height of the .container for smaller screens.

* Inheritance (@extend): The @extend directive is used to inherit styles from one selector to another. For example, .navbar-left extends styles from .navbar-right.

* Comments: Comments in SCSS are denoted by //. They are used for documentation and explanations throughout the code.

* Colors, Typography, and Box Shadow: Various styles for colors, typography, and box shadow effects are applied to different elements.