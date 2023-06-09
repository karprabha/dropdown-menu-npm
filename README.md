# Dropdown Menu

## Description

The Dropdown Menu is a simple and lightweight JavaScript module that allows you to create interactive dropdown menus on your web pages. It provides an easy-to-use interface for adding dropdown functionality to your website's navigation or other elements.

## Installation

You can install Dropdown Menu using npm:

```bash
npm i @karprabha/dropdown-menu
```

## Usage

### Script Tag:

Include the Dropdown Menu script in your HTML file using a script tag:

```html
<script src="{root dir}/node_modules/@karprabha/dropdown-menu/dist/dropdown-menu.js"></script>
<script>
    dropDownMenu();
</script>
```

Make sure to adjust the {root dir} placeholder with the appropriate path to your project's root directory.

### JavaScript File:

Alternatively, you can import and use Dropdown Menu in your JavaScript file:

```javascript
import dropDownMenu from "@karprabha/dropdown-menu";
dropDownMenu();
```

## CSS Classes

To make the menu items functional, apply the following CSS classes to your menu structure:

```html
<h3 class="menu-toggle">Menu</h3>
<div class="menu-container">
    <ul class="menu-items">
        <!-- Add your menu items here -->
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Pricing</li>
    </ul>
</div>
```
