```jsx
<Hero>
  <Hero.Body>
    <Container>
      <Title>
        Hero title
      </Title>
      <SubTitle>
        Hero subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

### Colors

As with buttons, you can choose one of the 7 different colors

```jsx
<Hero primary>
  <Hero.Body>
    <Container>
      <Title>
        Primary title
      </Title>
      <SubTitle>
        Primary subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero info>
  <Hero.Body>
    <Container>
      <Title>
        Info title
      </Title>
      <SubTitle>
        Info subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero success>
  <Hero.Body>
    <Container>
      <Title>
        Success title
      </Title>
      <SubTitle>
        Success subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero warning>
  <Hero.Body>
    <Container>
      <Title>
        Warning title
      </Title>
      <SubTitle>
        Warning subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero danger>
  <Hero.Body>
    <Container>
      <Title>
        Danger title
      </Title>
      <SubTitle>
        Danger subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero light>
  <Hero.Body>
    <Container>
      <Title>
        Light title
      </Title>
      <SubTitle>
        Light subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero dark>
  <Hero.Body>
    <Container>
      <Title>
        Dark title
      </Title>
      <SubTitle>
        Dark subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

### Gradients

By adding the bold modifier, you can generate a subtle gradient

```jsx
<Hero medium primary bold>
  <Hero.Body>
    <Container>
      <Title>
        Primary bold title
      </Title>
      <SubTitle>
        Primary bold subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero medium info bold>
  <Hero.Body>
    <Container>
      <Title>
        Info bold title
      </Title>
      <SubTitle>
        Info bold subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero medium success bold>
  <Hero.Body>
    <Container>
      <Title>
        Success bold title
      </Title>
      <SubTitle>
        Success bold subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero medium warning bold>
  <Hero.Body>
    <Container>
      <Title>
        Warning bold title
      </Title>
      <SubTitle>
        Warning bold subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero medium danger bold>
  <Hero.Body>
    <Container>
      <Title>
        Danger bold title
      </Title>
      <SubTitle>
        Danger bold subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero medium light bold>
  <Hero.Body>
    <Container>
      <Title>
        Light bold title
      </Title>
      <SubTitle>
        Light bold subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero medium dark bold>
  <Hero.Body>
    <Container>
      <Title>
        Dark bold title
      </Title>
      <SubTitle>
        Dark bold subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

### Sizes

You can have even more imposing banners by using one of 3 different sizes

```jsx
<Hero primary medium>
  <Hero.Body>
    <Container>
      <Title>
        Medium title
      </Title>
      <SubTitle>
        Medium subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero info large>
  <Hero.Body>
    <Container>
      <Title>
        Large title
      </Title>
      <SubTitle>
        Large subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero success fullheight>
  <Hero.Body>
    <Container>
      <Title>
        Full Height title
      </Title>
      <SubTitle>
        Full Height subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
</Hero>
```

#### Full height hero
##### And vertically centered

You can split the hero in 3 vertical parts:

- `hero`
  - `hero-head` (always at the top)
  - `hero-body` (always vertically centered)
  - `hero-foot` (always at the bottom)

```jsx
<Hero primary medium>
  <Hero.Head>
    <Nav>
      <Container>
        <Nav.Left>
          <Nav.Item>
            <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
          </Nav.Item>
        </Nav.Left>
        <Nav.Toggle/>
          
        <Nav.Right menu>
          <Nav.Item active>
            Home
          </Nav.Item>
          <Nav.Item>
            Examples
          </Nav.Item>
          <Nav.Item>
            Documentation
          </Nav.Item>
          <Nav.Item>
            <Button primary inverted>
              <Icon>
                <i className="fa fa-github"/>
              </Icon>
              <span>Download</span>
            </Button>
          </Nav.Item>
        </Nav.Right>
      </Container>
    </Nav>
  </Hero.Head>
  <Hero.Body>
    <Container hasTextCentered>
      <Title>
        Title
      </Title>
      <SubTitle>
        Subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
  <Hero.Foot>
    <Tabs>
      <Container>
        <ul>
          <li className="active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </Container>
    </Tabs>
  </Hero.Foot>
</Hero>
```

```jsx
<Hero info large>
  <Hero.Head>
    <Nav>
      <Container>
        <Nav.Left>
          <Nav.Item>
            <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo"/>
          </Nav.Item>
        </Nav.Left>
        <Nav.Toggle/>
          
        <Nav.Right menu>
          <Nav.Item active>
            Home
          </Nav.Item>
          <Nav.Item>
            Examples
          </Nav.Item>
          <Nav.Item>
            Documentation
          </Nav.Item>
          <Nav.Item>
            <Button info inverted>
              <Icon>
                <i className="fa fa-github"/>
              </Icon>
              <span>Download</span>
            </Button>
          </Nav.Item>
        </Nav.Right>
      </Container>
    </Nav>
  </Hero.Head>
  <Hero.Body>
    <Container hasTextCentered>
      <Title>
        Title
      </Title>
      <SubTitle>
        Subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
  <Hero.Foot>
    <Tabs boxed fullwidth>
      <Container>
        <ul>
          <li className="active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </Container>
    </Tabs>
  </Hero.Foot>
</Hero>
```

```jsx
<Hero success fullheight>
  <Hero.Head>
    <Nav>
      <Container>
        <Nav.Left>
          <Nav.Item>
            <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo"/>
          </Nav.Item>
        </Nav.Left>
        <Nav.Toggle/>
          
        <Nav.Right menu>
          <Nav.Item active>
            Home
          </Nav.Item>
          <Nav.Item>
            Examples
          </Nav.Item>
          <Nav.Item>
            Documentation
          </Nav.Item>
          <Nav.Item>
            <Button success inverted>
              <Icon>
                <i className="fa fa-github"/>
              </Icon>
              <span>Download</span>
            </Button>
          </Nav.Item>
        </Nav.Right>
      </Container>
    </Nav>
  </Hero.Head>
  <Hero.Body>
    <Container hasTextCentered>
      <Title>
        Title
      </Title>
      <SubTitle>
        Subtitle
      </SubTitle>
    </Container>
  </Hero.Body>
  <Hero.Foot>
    <Tabs boxed fullwidth>
      <Container>
        <ul>
          <li className="active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </Container>
    </Tabs>
  </Hero.Foot>
</Hero>
```
