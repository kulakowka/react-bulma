The card component comprises several elements that you can mix and match:

- `card`: the main container
  - `card-header`: a horizontal bar with a shadow
    - `card-header-title`: a left-aligned bold text
    - `card-header-icon`: a placeholder for an icon
  - `card-image`: a fullwidth container for a reponsive image
  - `card-content`: a multi-purpose container for any other element
  - `card-footer`: a horizontal list of controls
    - `card-footer-item`: a repeatable list item

```jsx
<Card>
  <Card.Image src='http://bulma.io/images/placeholders/1280x960.png' square='4by3' />
  <Card.Content>
    <Media>
      <Media.Left>
        <Image is='48x48' src="http://bulma.io/images/placeholders/96x96.png" alt="Image" />
      </Media.Left>
      <Media.Content>
        <Title is='4'>John Smith</Title>
        <SubTitle is='6'>@johnsmith</SubTitle>
      </Media.Content>
    </Media>
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a>#css</a> <a>#responsive</a>
      <br/>
      <small>11:09 PM - 1 Jan 2016</small>
    </Content>
  </Card.Content>
</Card>
```

```jsx
<Card>
  <Card.Header>
    <Card.Header.Title>
      Component
    </Card.Header.Title>
    <Card.Header.Icon>
      <i className="fa fa-angle-down"></i>
    </Card.Header.Icon>
  </Card.Header>
  <Card.Content>
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
      <br/>
      <small>11:09 PM - 1 Jan 2016</small>
    </Content>
  </Card.Content>
  <Card.Footer>
    <Card.Footer.Item>Save</Card.Footer.Item>
    <Card.Footer.Item>Edit</Card.Footer.Item>
    <Card.Footer.Item>Delete</Card.Footer.Item>
  </Card.Footer>
</Card>
```

```jsx
<Card>
  <Card.Content>
    <Title>
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
    </Title>
    <SubTitle>
      Jeff Atwood
    </SubTitle>
  </Card.Content>
  <Card.Footer>
    <Card.Footer.Item>
      View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
    </Card.Footer.Item>
    <Card.Footer.Item>
      Share on <a href="#">Facebook</a>
    </Card.Footer.Item>
  </Card.Footer>
</Card>
```
