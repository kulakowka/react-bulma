The `nav` container can have 3 parts:

- `nav-left`
- `nav-center`
- `nav-right`

Each nav item needs to be wrapped in a `nav-item` element.

For responsiveness, 2 additional classes are available:

- `nav-toggle` for the hamburger menu on mobile
- `nav-menu` for menu that is collapsable on mobile (you can combine it with `nav-right`)
- toggle `is-active` on `nav-toggle` and `nav-menu` when `nav-toggle` was clicked

```example
<Nav>
  <Nav.Left>
    <Nav.Item>
      <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo"/>
    </Nav.Item>
  </Nav.Left>
  
  <Nav.Center>
    <Nav.Item>
      <Icon>
        <i className="fa fa-github"/>
      </Icon>
    </Nav.Item>
    <Nav.Item>
      <Icon>
        <i className="fa fa-twitter"/>
      </Icon>
    </Nav.Item>
  </Nav.Center>

  <Nav.Toggle/>
  <Nav.Right menu>
    <Nav.Item>
      Home
    </Nav.Item>
    <Nav.Item>
      Documentation
    </Nav.Item>
    <Nav.Item>
      Blog
    </Nav.Item>

    <Nav.Item>
      <Field grouped>
        <Control>
          <Button>
            <Icon>
              <i className="fa fa-twitter"/>
            </Icon>
            <span>Tweet</span>
          </Button>
        </Control>
        <Control>
          <Button primary>
            <Icon>
              <i className="fa fa-download"/>
            </Icon>
            <span>Download</span>
          </Button>
        </Control>
      </Field>
    </Nav.Item>
  </Nav.Right>
</Nav>
```

### Modifiers

- the `nav` container can have a shadow by adding the `has-shadow` modifier
- the `nav-item` can become active by adding the `is-active` modifier
- the `nav-item` can become a tab by adding the `is-tab` modifier

To optimise the space on desktop, but also allow the mobile view to be usable, you can duplicate nav items in both `nav-left` and `nav-right`, and show/hide them with [responsive helpers](http://bulma.io/documentation/modifiers/responsive-helpers/).

```example
<Nav hasShadow>
  <Container>
    <Nav.Left>
      <Nav.Item>
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo"/>
      </Nav.Item>
      <Nav.Item tab hiddenMobile active>Home</Nav.Item>
      <Nav.Item tab hiddenMobile>Features</Nav.Item>
      <Nav.Item tab hiddenMobile>Pricing</Nav.Item>
      <Nav.Item tab hiddenMobile>About</Nav.Item>
    </Nav.Left>
    <Nav.Toggle />
    <Nav.Right menu>
      <Nav.Item tab hiddenTablet active>Home</Nav.Item>
      <Nav.Item tab hiddenTablet>Features</Nav.Item>
      <Nav.Item tab hiddenTablet>Pricing</Nav.Item>
      <Nav.Item tab hiddenTablet>About</Nav.Item>
      <Nav.Item tab>
        <Image is="16x16" src="http://bulma.io/images/jgthms.png" style={{marginRight: '8px'}} />
        Profile
      </Nav.Item>
      <Nav.Item tab>Log out</Nav.Item>
    </Nav.Right>
  </Container>
</Nav>
```


