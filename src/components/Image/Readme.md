
Because images can take a few seconds to load (or not at all), use the `.image` container to specify a precisely sized container so that your layout isn't broken because of image loading or image errors.

```jsx
<Image is="128x128" src="http://bulma.io/images/placeholders/128x128.png" />
```

### Fixed square images

There are 7 dimensions to choose from, useful for avatars:

```jsx
<div>
  <Image is="16x16" src="http://bulma.io/images/placeholders/16x16.png" />
  <br/>
  <Image is="24x24" src="http://bulma.io/images/placeholders/24x24.png" />
  <br/>
  <Image is="32x32" src="http://bulma.io/images/placeholders/32x32.png" />
  <br/>
  <Image is="48x48" src="http://bulma.io/images/placeholders/48x48.png" />
  <br/>
  <Image is="64x64" src="http://bulma.io/images/placeholders/64x64.png" />
  <br/>
  <Image is="96x96" src="http://bulma.io/images/placeholders/96x96.png" />
  <br/>
  <Image is="128x128" src="http://bulma.io/images/placeholders/128x128.png" />
</div>
```

### Retina images

Because the image is fixed in size, you can use an image that is twice as big. So for example, in a `128x128` container, you can use a `256x256` image, but resized to `128x128` pixels.

```jsx
<Image is='128x128' src='http://bulma.io/images/placeholders/256x256.png' />
```

### Responsive images with ratios

If you don't know the exact dimensions but know the ratio instead, you can use one of the 5 ratio modifers:

```jsx
<div style={{width:200}}>
  <Image square src="http://bulma.io/images/placeholders/480x480.png" />
  <br/>
  <Image ratio="4by3" src="http://bulma.io/images/placeholders/640x480.png" />
  <br/>
  <Image ratio="3by2" src="http://bulma.io/images/placeholders/480x320.png" />
  <br/>
  <Image ratio="16by9" src="http://bulma.io/images/placeholders/640x360.png" />
  <br/>
  <Image ratio="2by1" src="http://bulma.io/images/placeholders/480x320.png" />
  <br/>
  <Image ratio="3by4" src="http://bulma.io/images/placeholders/480x640.png" />
  <br/>
  <Image ratio="2by3" src="http://bulma.io/images/placeholders/320x480.png" />
  <br/>
  <Image ratio="9by16" src="http://bulma.io/images/placeholders/360x640.png" />
  <br/>
  <Image ratio="1by2" src="http://bulma.io/images/placeholders/320x640.png" />
  <br/>
  <Image ratio="1by3" src="http://bulma.io/images/placeholders/240x720.png" />
  <br/>
  <Image ratio="3by5" src="http://bulma.io/images/placeholders/480x800.png" />
</div>
```

The `.image` container will take up the whole width while maintaining the perfect ratio.
