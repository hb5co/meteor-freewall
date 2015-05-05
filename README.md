# Freewall jQuery plugin for Meteor

Creates jQuery layouts with CSS3 animation effects and call back events.

## Setup

If you need to add `<meta>` tags to the DOM, you will need to create an `index.html` file that contains this HTML:
```
<head>
  <meta content=​"text/​html;​ charset=utf-8" http-equiv=​"content-type">​
</head>

<body>
  <!-- This will not render a 2nd body. -->
</body>
```

**IMPORTANT**: Do not put this inside of a Template or above `{{> yield}}` when using [iron:router](https://atmospherejs.com/iron/router). When a Template is called it will be put inside of the `<body>` like this:

```
<body>
  <head>
    <meta content=​"text/​html;​ charset=utf-8" http-equiv=​"content-type">​
  </head>
  <!-- Template -->
</body>
```

See the [Freewall homepage](http://vnjs.net/www/project/freewall/) for documentation for more info.
