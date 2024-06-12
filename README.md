# Bear blogging platform plugins

This repository hosts a collection of plugins designed to extend and enhance the functionality of the awesome [https://bearblog.dev/](https://github.com/HermanMartinus/bearblog/).

## How to use a plugin

To install a plugin on your Bear blog, follow these steps:

1. Find a plugin you like.
   See [Available plugins](#available-plugins) section below.
   
3. Copy the `<script>` tag for that plugin and paste it into the footer directive (only available for Bear subscribers).

4. You're done!

## Available plugins

### 1. Blog search
Adds search capabilities to your `/blog/` page.

**Script**:
```html
<script src="https://cdn.jsdelivr.net/gh/froodooo/bear-plugins@0.0.5/bear/blog-search.js"></script>
```

*Code credits for this one go to [Herman](https://github.com/HermanMartinus).*

### 2. Estimated reading time
Adds estimated reading time to blog posts.

**Script**:
```html
<script src="https://cdn.jsdelivr.net/gh/froodooo/bear-plugins@0.0.5/bear/reading-time.js"></script>
```

### 3. Blog post contact information
Adds contact information (email and social networks) to blog posts.

Pass email- and social media information in the `data` attribute of the script tag, in the following format:
`platform1::link1;platform2::link2` (be aware of the double colon `::`)

See an example below.

**Script**:
```html
<script src="https://cdn.jsdelivr.net/gh/froodooo/bear-plugins@0.0.9/bear/reading-time.js" data="email::blog@yordi.me;Mastodon::https://social.lol/@yordi"></script>
```

## License

This repository is licensed under the [WTFPL](http://www.wtfpl.net/) License.

Do you enjoy using these plugins on your Bear blog? [Consider buying me a coffee](https://buymeacoffee.com/yordiverkroost).
