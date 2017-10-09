The field container is a simple container for:

- a text label
- a form control
- an optional helptext

```jsx
  <Field>  
    <label className="label">Label</label>
    <Control>
      <Input placeholder="Text input" />
    </Control>
    <p className="help">This is a help text</p>
  </Field>
```

Field with hasAddons
```jsx
  <Field hasAddons>    
    <Control>
      <Input placeholder="Text input" />
    </Control>
    <Control>
      <Button info>
        Search
      </Button>
    </Control>
  </Field>
```

Field grouped
```jsx
  <Field grouped>      
    <Control>
      <Button primary>
        Submit
      </Button>
    </Control>
    <Control>
      <Button light>
        Cancel
      </Button>
    </Control>
  </Field>
```

Field grouped centered
```jsx
  <Field groupedCentered>      
    <Control>
      <Button primary>
        Submit
      </Button>
    </Control>
    <Control>
      <Button light>
        Cancel
      </Button>
    </Control>
  </Field>
```

Field grouped right
```jsx
  <Field groupedRight>      
    <Control>
      <Button primary>
        Submit
      </Button>
    </Control>
    <Control>
      <Button light>
        Cancel
      </Button>
    </Control>
  </Field>
```
