# ng-chocolat

**ng-chocolat** is the angular integration in a directive of the famous lightbox jQuery plugin [chocolat.js](https://github.com/nicolas-t/Chocolat)

-----------

#### Dependencies

To work it expects :
- chocolat.js (tested with 0.4.9): https://github.com/nicolas-t/Chocolat
- jQuery (required by chocolat either 1.x or 2.x): https://github.com/jquery/jquery
- angularjs (tested with 1.4.5): https://github.com/angular/angular

#### Compatibility
recent browsers such as :
IE 7+, Safari, Firefox & Chrome.

##Bower
```
> bower install ng-chocolat --save
```

## Markup
-----------
```html
<div chocolat set-title="Set title">
    <a class="chocolat-image" href="img/a.jpg" title="image caption a">
        A <!-- you can display a thumbnail here : <img src="thumb/a.jpg" /> -->
    </a>
    <a class="chocolat-image" href="img/b.jpg" title="image caption b">
        B <!-- you can display a thumbnail here : <img src="thumb/b.jpg" /> -->
    </a>
</div>
```

##Documentation
-----------

### Directive parameters

**config: '&'**  `default : {}`
*What the &@*£$ are all these parameters doing in my scope I want the old chocolat config back!*
You can use the `config` parameter and bind it to a nice chocolat-looking config from your scope.
If you do so all the other paramters will be ignored!

**container : '@'** `default:window`
Sets whether viewer will open and fill the whole page (`default`)  , or whether it should open in a particular block of the page. For example ` #container2`  in this case the height and width of the block must be defined.
values can be : window, selector, jQuery element, or a node

**image-selector: '@'** `default : '.chocolat-image'`
Selector to find images in the parent element (on which chocolat is called)

**link-images: '@'**   `default : true `
Sets whether we can switch from one image to another, within the same call, without closing the viewer (`true`) , or if the images remain independent (`false`).
Warning: if `LinkImage`: is `false` then `displayAsALink` must be worth `false` too. Otherwise we can only view the first image in the set.

**set-title: '@'**  `default : ''`
Title of the set. Can also be defined from the html, with the `data-chocolat-title` attribute

**class-name: '@'**  `default : ''`
Add a custom css class to the parent of the lightbox

**image-size: '@'**  `default : 'default'`
Can be `'default'`, `'contain'`,  `'native'`, or `'cover'`.
`default` : if the image is bigger than the window it's resized to fit, else if the image is smaller than the window it's not streched, only displayed at native dimensions
`'contain'` :  if the image is bigger than the window it's resized to fit, else if the image is smaller than the window it's streched, to fit the window
`'cover'` :  the image cover the window, no white space are displayed.
more informations & exemple about contain/cover : https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Scaling_background_images
`'native'` :  the image is never streched nor shrinked, always displayed at native dimensions

**full-screen: '@'**  `default : false`
HTML5 new feature. Hides the browser.

**loop: '@'**  `default : false`
Last image + 1 leads to first image & first image - 1 leads to last image.

**duration: '@'**  `default : 300`
Animations duration

**first-image : '@'**  `default : 0`
Index of the image that you want to start the series.

**last-image : '@'**  `default : 0`
Index of the image that you want to end the series.

**separator2: '@'**  `default : '/'`
Text between the number of the image and the number of images in the set, does not matter.

**set-index: '@'**  `default : 0`
Set index. yes.

**images: '&'**  `default : []`
Array of object representing the set images `[{src:'img1.jpg'}, {src:'img1.jpg'}, ...]`
You can also specify image title `[{src:'img1.jpg', title: 'title'}, ..]`

**instance: '='**  `default : []`
Instance of the object returned by chocolat. You will be able to call the chocolat `api()` on it. (See next)


### API

###### Syntax
Call chocolat like this :
```html
<div chocolat container="#container3" instance="instance"></div>
```

Then API calls can be made like this on your controller (open for exemple):
```js
$scope.instance.api().open();
```

###### Methods
**open :**  `param (optionnal) : i`
Open the lightbox on the image whose index is `i`.
By default on the first image (i=0).
Returns a $.Deferred object.

**close:**
Close the lightbox.
Returns a $.Deferred object.

**prev:**
Change image backward.
Returns a $.Deferred object.

**next:**
Change image forward.
Returns a $.Deferred object.

**goto:**  `param : i`
(Alias of open)  go to image whose index is `i` on an already opened ligthbox.
Returns a $.Deferred object.

**place:**
Center the image in its parent.
Returns a $.Deferred object.

**set:**   `params : property, value`
Classic setter

**get:**   `param : property`
Classic getter

**getElem:**   `param : name`
Returns a jQuery object composing the lightbox.
Ex: for the next arrow  : `instance.api().getElem('right')`

**current:**
Returns the index of the current image.

### CSS Classes

**.chocolat-open:**
Set to the container when the lightbox is open.

**.chocolat-mobile:**
Set to the container when its width is inferior to `480px` (or `mobileBreakpoint`)

**.chocolat-in-container:**
Set to the container when chocolat is open in a block (`container != window`)

**.chocolat-cover:**
Set to the container when chocolat `imageSize` is set to `'cover'`

**.chocolat-zoomable:**
Set to the container when chocolat is zoomable

**.chocolat-zoomed:**
Set to the container when chocolat is zoomed
