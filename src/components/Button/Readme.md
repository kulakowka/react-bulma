```example
<div>
  <div>
    <Button>Button</Button>

    <Button white>White</Button>
    <Button light>Light</Button>
    <Button dark>Dark</Button>
    <Button black>Black</Button>
    <Button link>Link</Button>
  </div>
  <br/>
  <div>
    <Button primary>Primary</Button>
    <Button info>Info</Button>
    <Button success>Success</Button>
    <Button warning>Warning</Button>
    <Button danger>Danger</Button>
  </div>
</div>
```

### Sizes

```example 
<div>
  <Button small>Small</Button>
  <Button>Normal</Button>
  <Button medium>Medium</Button>
  <Button large>Large</Button>
</div>
```

### Styles

#### Outlined

```example
<div>
  <Button outlined>Outlined</Button>
  <Button primary outlined>Outlined</Button>
  <Button info outlined>Outlined</Button>
  <Button success outlined>Outlined</Button>
  <Button danger outlined>Outlined</Button>
</div>
```

#### Inverted (the text color becomes the background color, and vice-versa)

```example
<div style={{background:'#00d1b2', padding: 10}}>
  <Button primary inverted>Inverted</Button>
  <Button info inverted>Inverted</Button>
  <Button success inverted>Inverted</Button>
  <Button danger inverted>Inverted</Button>
</div>
```

#### Invert Outlined (the invert color becomes the text and border colors)

```example
<div style={{background:'#00d1b2', padding: 10}}>
  <Button primary inverted outlined>Inverted Outlined</Button>
  <Button info inverted outlined>Inverted Outlined</Button>
  <Button success inverted outlined>Inverted Outlined</Button>
  <Button danger inverted outlined>Inverted Outlined</Button>
</div>
```

### States

#### Normal

```example
<div>
  <Button>Normal</Button>
  <Button primary>Normal</Button>
  <Button info>Normal</Button>
  <Button success>Normal</Button>
  <Button warning>Normal</Button>
  <Button danger>Normal</Button>
</div>
```

#### Hover

```example
<div>
  <Button hovered>Hovered</Button>
  <Button primary hovered>Hovered</Button>
  <Button info hovered>Hovered</Button>
  <Button success hovered>Hovered</Button>
  <Button warning hovered>Hovered</Button>
  <Button danger hovered>Hovered</Button>
</div>
```

#### Focus

```example
<div>
  <Button focused>Focused</Button>
  <Button primary focused>Focused</Button>
  <Button info focused>Focused</Button>
  <Button success focused>Focused</Button>
  <Button warning focused>Focused</Button>
  <Button danger focused>Focused</Button>
</div>
```

#### Active

```example
<div>
  <Button active>Active</Button>
  <Button primary active>Active</Button>
  <Button info active>Active</Button>
  <Button success active>Active</Button>
  <Button warning active>Active</Button>
  <Button danger active>Active</Button>
</div>
```

#### Loading

```example
<div>
  <Button loading>Active</Button>
  <Button primary loading>Active</Button>
  <Button info loading>Active</Button>
  <Button success loading>Active</Button>
  <Button warning loading>Active</Button>
  <Button danger loading>Active</Button>
</div>
```


#### Static

You can create a non-interactive button by using the `is-static` modifier. This is useful to align a text label with an input, for example when using form addons.

```example
<Button static>Static</Button>
```

#### Disabled

```example
<div>
  <Button disabled title="Disabled button">Disabled</Button>
  <Button primary disabled title="Disabled button">Disabled</Button>
  <Button info disabled title="Disabled button">Disabled</Button>
  <Button success disabled title="Disabled button">Disabled</Button>
  <Button warning disabled title="Disabled button">Disabled</Button>
  <Button danger disabled title="Disabled button">Disabled</Button>
</div>
```

#### With Font Awesome icons

```example
<div>
  <Field>
    <Button>
      <Icon small>
        <i className="fa fa-bold"/>
      </Icon>
    </Button>
    <Button>
      <Icon small>
        <i className="fa fa-italic"/>
      </Icon>
    </Button>
    <Button>
      <Icon small>
        <i className="fa fa-underline"/>
      </Icon>
    </Button>
  </Field>
  <Field>
    <Button>
      <Icon>
        <i className="fa fa-github"/>
      </Icon>
      <span>GitHub</span>
    </Button>
    <Button primary>
      <Icon>
        <i className="fa fa-twitter"/>
      </Icon>
      <span>Twitter</span>
    </Button>
    <Button success>
      <Icon small>
        <i className="fa fa-check"/>
      </Icon>
      <span>Save</span>
    </Button>
    <Button danger outlined>
      <span>Delete</span>
      <Icon small>
        <i className="fa fa-times"/>
      </Icon>
    </Button>
  </Field>
  <Field>
    <Button small>
      <Icon small>
        <i className="fa fa-github"/>
      </Icon>
      <span>GitHub</span>
    </Button>
    <Button>
      <Icon>
        <i className="fa fa-github"/>
      </Icon>
      <span>GitHub</span>
    </Button>
    <Button medium>
      <Icon>
        <i className="fa fa-github"/>
      </Icon>
      <span>GitHub</span>
    </Button>
    <Button large>
      <Icon medium>
        <i className="fa fa-github"/>
      </Icon>
      <span>GitHub</span>
    </Button>
  </Field>
</div>
```

If the button only contains an icon, Bulma will make sure the button remains square, no matter the size of the button or of the icon.

```example
<div>
  <Field>
    <Button small>
      <Icon small>
        <i className="fa fa-header"/>
      </Icon>
    </Button>
  </Field>
  <Field>
    <Button>
      <Icon small>
        <i className="fa fa-header"/>
      </Icon>
    </Button>
    <Button>
      <Icon>
        <i className="fa fa-header"/>
      </Icon>
    </Button>
  </Field>
  <Field>
    <Button medium>
      <Icon small>
        <i className="fa fa-header"/>
      </Icon>
    </Button>
    <Button medium>
      <Icon>
        <i className="fa fa-header"/>
      </Icon>
    </Button>
    <Button medium>
      <Icon medium>
        <i className="fa fa-header"/>
      </Icon>
    </Button>
  </Field>
  <Field>
    <Button large>
      <Icon small>
        <i className="fa fa-header"/>
      </Icon>
    </Button>
    <Button large>
      <Icon>
        <i className="fa fa-header"/>
      </Icon>
    </Button>
    <Button large>
      <Icon medium>
        <i className="fa fa-header"/>
      </Icon>
    </Button>
    <Button large>
      <Icon large>
        <i className="fa fa-header"/>
      </Icon>
    </Button>
  </Field>
</div>
```

### Button group

If you want to group buttons together, use the `is-grouped` modifier on the `field` container:

```example
<Field grouped>
  <Control>
    <Button primary>
      Save changes
    </Button>
  </Control>
  <Control>
    <Button>
      Cancel
    </Button>
  </Control>
  <Control>
    <Button danger>
      Delete post
    </Button>
  </Control>
</Field>
```

### Button addons

If you want to use buttons as addons, use the `has-addons` modifier on the `field` container:

```example
<Field hasAddons>
  <Control>
    <Button>
      <Icon small>
        <i className="fa fa-align-left"/>
      </Icon>
      <span>Left</span>
    </Button>
  </Control>
  <Control>
    <Button>
      <Icon small>
        <i className="fa fa-align-center"/>
      </Icon>
      <span>Center</span>
    </Button>
  </Control>
  <Control>
    <Button>
      <Icon small>
        <i className="fa fa-align-right"/>
      </Icon>
      <span>Right</span>
    </Button>
  </Control>
</Field>
```

### Button group with addons

You can group together addons as well:

```example
<div>
  <Field hasAddons>
    <Control>
      <Button>
        <Icon small>
          <i className="fa fa-bold"/>
        </Icon>
        <span>Bold</span>
      </Button>
    </Control>
    <Control>
      <Button>
        <Icon small>
          <i className="fa fa-italic"/>
        </Icon>
        <span>Italic</span>
      </Button>
    </Control>
    <Control>
      <Button>
        <Icon small>
          <i className="fa fa-underline"/>
        </Icon>
        <span>Underline</span>
      </Button>
    </Control>
  </Field>

  <Field hasAddons>
    <Control>
      <Button>
        <Icon small>
          <i className="fa fa-align-left"/>
        </Icon>
        <span>Left</span>
      </Button>
    </Control>
    <Control>
      <Button>
        <Icon small>
          <i className="fa fa-align-center"/>
        </Icon>
        <span>Center</span>
      </Button>
    </Control>
    <Control>
      <Button>
        <Icon small>
          <i className="fa fa-align-right"/>
        </Icon>
        <span>Right</span>
      </Button>
    </Control>
  </Field>
</div>
```
