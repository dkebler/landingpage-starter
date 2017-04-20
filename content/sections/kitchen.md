+++
weight = 20
title = "Kitchen Sink of Markdown"
link_text = "Kitchen-Sink"
# align = "left" # will force all elements to be aligned to left, default is centered
# hidden = true ## uncomment to disable/hide this section/file
# navbar = false ## uncomment to have a section that doesn't have a corresponding link the the navbar
+++
### A terse review of markdown.

Just type from left in any markdown file it will be paragraph style.  It will wrap and is left justified by default

{{< lorem 50w >}}
* * *
{{% box %}}
{{% box column %}}
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
{{% /box %}}
    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6
{{% /box %}}
* * *
{{% box %}}
{{% box column %}}
*italics* or

_italics_

**bold** or

__bold__

_**both**_
{{% /box %}}
      *italics* or

      _italics_

      **bold** or

      __bold__

      _**both**_
{{% /box %}}
* * *
When your section is getting too long consider putting the rest of the content in a modal file in the `content/modals` directory.  {{< link url="#modal-test" text="Here" display="modal" >}} is how to do that

{{< link url="#modal-kitchen" display="modal" text="so...see more markdown in action?" >}}
