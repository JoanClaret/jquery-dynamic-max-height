Dynamic max height plugin for jQuery with CSS animation
========================================

What is?
-----------
This is a jQuery plugin to dynamically check a layer height and compare it to a custom height value.
If layer height is higher than that custom value (data-maxheight), a "show more" button and a bottom gradient will appear.

It works with CSS3 transition to get a smooth animation.


How it works?
-----------

### Javascript initialization

```javascript
$('.dynamic-max-height').dynamicMaxHeight(
    { trigger : '.dynamic-show-more'}
);
```

### Layout

```html
<div class="dynamic-max-height" data-maxheight="70">
    <div class="dynamic-wrap">
      <p> My life fades. The vision dims. All that remains are memories. I remember a time of chaos... ruined dreams... this wasted land. But most of all, I remember The Road Warrior. The man we called "Max." To understand who he was, you have to go back to another time... when the world was powered by the black fuel... and the desert sprouted great cities of pipe and steel. Gone now... swept away. For reasons long forgotten, two mighty warrior tribes went to war, and touched off a blaze which engulfed them all. Without fuel they were nothing. They'd built a house of straw. The thundering machines sputtered and stopped. Their leaders talked and talked and talked. But nothing could stem the avalanche. Their world crumbled. The cities exploded. A whirlwind of looting, a firestorm of fear. Men began to feed on men. On the roads it was a white line nightmare. Only those mobile enough to scavenge, brutal enough to pillage would survive. The gangs took over the highways, ready to wage war for a tank of juice. And in this maelstrom of decay, ordinary men were battered and smashed... men like Max... the warrior Max. In the roar of an engine, he lost everything... and became a shell of a man... a burnt-out, desolate man, a man haunted by the demons of his past, a man who wandered out into the wasteland. And it was here, in this blighted place, that he learned to live again.</p>
    </div>
    <a class="dynamic-show-more" href="javascript:void(0);" title="Read more" data-replace-text="Show less">Read more</a>
</div>
```

### Options

* Change "data-maxheight" in each item to set a different max height value
* Change "trigger" value in the javascript initialization to set a custom "Show more / show less" button trigger
* Change "data-replace-text" to set a new text once the button is clicked


License
-------

    The MIT License (MIT)

    Copyright (c) 2015 Joan Claret

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

Thanks
-------
Many thanks to [David Panyella](https://github.com/davidpanyella) and [Òscar Casajuana](https://github.com/elboletaire) for help.