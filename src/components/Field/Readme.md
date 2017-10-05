The field container is a simple container for:

- a text label
- a form control
- an optional helptext

```example
  <Field>  
    <label className="label">Label</label>
    <Control>
      <Input placeholder="Text input" />
    </Control>
    <p className="help">This is a help text</p>
  </Field>
```

Field with hasAddons
```example
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
```example
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
```example
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
```example
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
