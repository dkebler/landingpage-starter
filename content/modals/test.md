+++
Title = "Example Modal"
+++

Here is how you can add additional content to your page without having it take up space...use a modal!

To do that make a .md file in the `content/modals` directory.

Put any markdown content in it including shortcodes.

Then just link to it in a section markdown file using the link shortcode.

**example**  

```
{{</* link url="#modal-test" text="A test modal" type="btn" display="modal" */>}}
```

where there is a file `test.md` in the `content/modals directory`

and the url is `url="#modal-<modal file name without .md>"``
