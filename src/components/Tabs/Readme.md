Tabs only require a `tabs` container and a `<ul>` list.
The default tabs style has a single border at the bottom.

```jsx
<Tabs>
  <ul>
    <li className="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</Tabs>
```

### Alignment

To align the tabs list, use the `is-centered` or `is-right` modifier on the `.tabs` container:

```jsx
<Tabs centered>
  <ul>
    <li className="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</Tabs>
```

```jsx
<Tabs right>
  <ul>
    <li className="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</Tabs>
```

### Icons

You can use any of the Font Awesome icons.

```jsx
<Tabs centered>
  <ul>
    <li className="is-active">
      <a>
        <Icon small><i className="fa fa-image"/></Icon>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-music"/></Icon>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-film"/></Icon>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-file-text-o"/></Icon>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</Tabs>
```

### Sizes

You can choose between 3 additional sizes: `is-small` `is-medium` and `is-large`.

```jsx
<Tabs small>
  <ul>
    <li className="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</Tabs>
```

```jsx
<Tabs medium>
  <ul>
    <li className="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</Tabs>
```

```jsx
<Tabs large>
  <ul>
    <li className="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</Tabs>
```


### Styles

If you want a more classic style with borders, just append the `is-boxed` modifier.

```jsx
<Tabs boxed>
  <ul>
    <li className="is-active">
      <a>
        <Icon small><i className="fa fa-image"/></Icon>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-music"/></Icon>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-film"/></Icon>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-file-text-o"/></Icon>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</Tabs>
```

If you want mutually exclusive tabs (like radio buttons where clicking one deselects all other ones), use the `is-toggle` modifier.

```jsx
<Tabs toggle>
  <ul>
    <li className="is-active">
      <a>
        <Icon small><i className="fa fa-image"/></Icon>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-music"/></Icon>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-film"/></Icon>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-file-text-o"/></Icon>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</Tabs>
```

If you want the tabs to take up the whole width available, use `is-fullwidth`.

```jsx
<Tabs fullwidth>
  <ul>
    <li>
      <a>
        <Icon><i className="fa fa-angle-left"/></Icon>
        <span>Left</span>
      </a>
    </li>
    <li>
      <a>
        <Icon><i className="fa fa-angle-up"/></Icon>
        <span>Up</span>
      </a>
    </li>
    <li>
      <a>
        <span>Right</span>
        <Icon><i className="fa fa-angle-right"/></Icon>
      </a>
    </li>
  </ul>
</Tabs>
```

### Combining

You can combine different modifiers. For example, you can have centered boxed tabs, or fullwidth toggle ones.

```jsx
<Tabs centered boxed>
  <ul>
    <li className="is-active">
      <a>
        <Icon small><i className="fa fa-image"/></Icon>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-music"/></Icon>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-film"/></Icon>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-file-text-o"/></Icon>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</Tabs>
```

```jsx
<Tabs toggle fullwidth>
  <ul>
    <li className="is-active">
      <a>
        <Icon small><i className="fa fa-image"/></Icon>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-music"/></Icon>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-film"/></Icon>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-file-text-o"/></Icon>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</Tabs>
```

```jsx
<Tabs centered boxed medium>
  <ul>
    <li className="is-active">
      <a>
        <Icon small><i className="fa fa-image"/></Icon>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-music"/></Icon>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-film"/></Icon>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-file-text-o"/></Icon>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</Tabs>
```

```jsx
<Tabs toggle fullwidth large>
  <ul>
    <li className="is-active">
      <a>
        <Icon small><i className="fa fa-image"/></Icon>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-music"/></Icon>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-film"/></Icon>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <Icon small><i className="fa fa-file-text-o"/></Icon>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</Tabs>
```
