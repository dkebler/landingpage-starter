+++
weight = 30
title = "Plugins"
# link_text = ""
# align = "left" # will force all elements to be aligned to left, default is centered
# hidden = true ## uncomment to disable/hide this section/file
# navbar = false ## uncomment to have a section that doesn't have a corresponding link the the navbar
+++
Here are some of the plugins - shortcodes available in action.  For details see the *plugins* section of the {{< link url="https://dkebler.github.io/landingpage-guide" text="Landing Page Guide" >}}

{{< image filename="dickfeynman.jpg" maxwidth="200" title="The Image Plugin" caption="A super cool dude" >}}


as an avatar
{{< avatar "dickfeynman.jpg" >}}

google map embedded
{{< embed type="google-map" title="Iceland" caption="Hot Place in A Cold Land" maxwidth="300" >}}
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1732165.9399742798!2d-21.255978827180424!3d64.9144351116168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2sIceland!5e0!3m2!1sen!2sus!4v1492742579633" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
{{< /embed >}}

Here is some normally formatted text. {{% format  red %}}Here I need a sentence to be in red{{% /format %}}.

{{< link type="btn" size="large" display="window" url="https://google.com" text="A large button that opens google in a popup window" >}}

{{< link type="btn" size="small" display="tab" url="https://google.com" text="A small button that opens google a tab" >}}

{{< link type="btn" url="https://google.com" text="A regular button that opens google normally " >}}

{{< youtube id="-Vw2CrY9Igs" start="21" end="38" title="Brawndo" caption="It's got electrolytes" >}}

a paragraph of bogus filler text (lorem) for when you need to show a protype

{{< lorem 1p >}}
