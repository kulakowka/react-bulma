Because the icons can take a few seconds to load, and because you want control over the space the icons will take, you can use the icon class as a container:

```jsx
<Icon>
  <i className="fa fa-home"/>
</Icon>
```

The `icon` container will take up exactly **1.5rem x 1.5rem**. The icon itself is sized at **21px**.

### Sizes

Font Awesome icons use a font-size of **28px** by default, and are best rendered when using **multiples of 7**.

The Bulma `icon` container is always slightly bigger than the font-size used:

```jsx
<div>
  <Icon small>
    <i className="fa fa-home"/>
  </Icon>
  <Icon>
    <i className="fa fa-home"/>
  </Icon>
  <Icon medium>
    <i className="fa fa-home"/>
  </Icon>
  <Icon large>
    <i className="fa fa-home"/>
  </Icon>
</div>
```
