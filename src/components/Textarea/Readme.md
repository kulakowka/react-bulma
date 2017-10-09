The multiline textarea and its variations

```jsx
<Textarea placeholder="e.g. Hello world"/>
```

You can set the height of the textarea using the `rows` HTML attribute.

```jsx
<Textarea placeholder="10 lines of textarea" rows="10"/>
```

### Colors

```jsx
<div>
  <Field>
    <Control>
      <Textarea primary placeholder="Primary textarea"/>
    </Control>
  </Field>
  <Field>
    <Control>
      <Textarea info placeholder="Info textarea"/>
    </Control>
  </Field>
  <Field>
    <Control>
      <Textarea success placeholder="Success textarea"/>
    </Control>
  </Field>
  <Field>
    <Control>
      <Textarea warning placeholder="Warning textarea"/>
    </Control>
  </Field>
  <Field>
    <Control>
      <Textarea danger placeholder="Danger textarea"/>
    </Control>
  </Field>
</div>
```

### Sizes

```jsx
<div>
  <Field>
    <Control>
      <Textarea small placeholder="Small textarea"/>
    </Control>
  </Field>
  <Field>
    <Control>
      <Textarea placeholder="Normal textarea"/>
    </Control>
  </Field>
  <Field>
    <Control>
      <Textarea medium placeholder="Medium textarea"/>
    </Control>
  </Field>
  <Field>
    <Control>
      <Textarea large placeholder="Large textarea"/>
    </Control>
  </Field>
</div>
```

### States

Normal

```jsx
<Control>
  <Textarea placeholder="Normal textarea"/>
</Control>
```

Hover

```jsx
<Control>
  <Textarea hovered placeholder="Hovered textarea"/>
</Control>
```

Focus

```jsx
<Control>
  <Textarea focused placeholder="Focused textarea"/>
</Control>
```

Loading

```jsx
<Control loading>
  <Textarea placeholder="Normal textarea"/>
</Control>
```

You can resize the loading spinner by appending `small`, `medium` or `large` to the control container.

```jsx
<div>
  <Field>
    <Control small loading>
      <Textarea small placeholder="Small loading textarea"/>
    </Control>
  </Field>
  <Field>
    <Control loading>
      <Textarea placeholder="Normal loading textarea"/>
    </Control>
  </Field>
  <Field>
    <Control medium loading>
      <Textarea medium placeholder="Medium loading textarea"/>
    </Control>
  </Field>
  <Field>
    <Control large loading>
      <Textarea large placeholder="Large loading textarea"/>
    </Control>
  </Field>
</div>
```

### Disabled

```jsx
<Control>
  <Textarea placeholder="Disabled textarea" disabled/>
</Control>
```

### Readonly

```jsx 
<Control>
  <Textarea readOnly defaultValue="This content is readonly"/>
</Control>
```
