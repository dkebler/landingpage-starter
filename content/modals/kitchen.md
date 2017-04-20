+++
title = "More Markdown"
align = "center" # left is the default for modals
+++
### And now for the rest of the show

{{% box %}}
{{% box column %}}
* One
* Two
* Three
{{% /box %}}
```markdown
* One
* Two
* Three
```
{{% /box %}}
* * *
{{% box %}}
{{% box column %}}
1. Buy flour and salt
1. Mix together with water
1. Bake
{{% /box %}}
```markdown
1. Buy flour and salt
1. Mix together with water
1. Bake
```
{{% /box %}}
* * *
Monspaced Font Box:

```markdown
Monospaced type box primarily for showing code
Indent three or enclose in```
```

or put it `inline` like this
```markdown
or put it `inline` like this
```

* * *
a separator line    
    * * *
* * *
This is [an example](http://example.com "example") simple markdown link.

[This link](http://example.com) has no title attr.

This is [an example] [someid] reference-style link.

[someid]: http://example.com "Optional Title"

    This is [an example](http://example.com "Example") link.

    [This link](http://example.com) has no title attr.

    This is [an example] [id] reference-style link.

    [id]: http://example.com "Optional Title"

Use the link plugin shortcode for doing more fancy things.  

{{< link type="btn" icon="space-shuttle" url="https://dkebler.github.io/landingpage-guide" display="window" text="A Button Styled Link with icon opens in window" >}}
* * *
You can put images from external sources in this way

![Alt Text](http://placehold.it/200x50 "Image Title")

    ![Alt Text](http://placehold.it/200x50 "Image Title")

but it's probably better to use the plugin shortcode for your images

{{< image filename="green-landscape.jpg" title="Where I Want To Be" caption="Sure is Green" >}}
```
{{</* image filename="green-landscape.jpg" title="Where I Want To Be" caption="Sure is Green" */>}}
```
