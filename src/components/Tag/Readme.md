By default, a tag is a 1.5rem high label.

```jsx
<Tag>
  Tag label
</Tag>
```

Like with buttons, there are 9 different colors available.

```jsx
<div>
  <Tag black>Black</Tag>
  <Tag dark>Dark</Tag>
  <Tag light>Light</Tag>
  <Tag white>White</Tag>
  <Tag primary>Primary</Tag>
  <Tag info>Info</Tag>
  <Tag success>Success</Tag>
  <Tag warning>Warning</Tag>
  <Tag danger>Danger</Tag>
</div>
```

And 2 additional sizes.

```jsx
<div>
  <Tag primary medium>Medium</Tag>
  <Tag info large>Large</Tag>
</div>
```

You can also append a delete button.

```jsx
<div>
  <Tag success>
    Bar
    <Delete small/>
  </Tag>
  <Tag warning medium>
    Hello
    <Delete small/>
  </Tag>
  <Tag danger large>
    World
    <Delete/>
  </Tag>
</div>
```
