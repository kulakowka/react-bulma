The structure of a level is the following:

- `level`: main container
  - `level-left` for the left side. This element is required, even if it is empty
  - `level-right` for the right side
    - `level-item` for each individual element

In a `level-item`, you can then insert almost anything you want: a title, a button, a text input, or just simple text. No matter what elements you put inside a Bulma `level`, they will always be **vertically centered**.

```jsx

<Level>
  <Level.Left>
    <Level.Item>
      <SubTitle is='5'>
        <strong>123</strong> posts
      </SubTitle>
    </Level.Item>
    <Level.Item>
      <Field hasAddons>
        <Control>
          <Input type="text" placeholder="Find a post" />
        </Control>
        <Control>
          <Button>
            Search
          </Button>
        </Control>
      </Field>
    </Level.Item>
  </Level.Left>
  <Level.Right>
    <Level.Item><strong>All</strong></Level.Item>
    <Level.Item><a>Published</a></Level.Item>
    <Level.Item><a>Drafts</a></Level.Item>
    <Level.Item><a>Deleted</a></Level.Item>
    <Level.Item><Button success>New</Button></Level.Item>
  </Level.Right>
</Level>
```

### Centered level

If you want a centered level, you can use as many `level-item` as you want, as long as they are direct children of the `level` container.

```jsx
<Level>
  <Level.Item hasTextCentered>
    <div>
      <Heading>Tweets</Heading>
      <Title>3,456</Title>
    </div>
  </Level.Item>
  <Level.Item hasTextCentered>
    <div>
      <Heading>Following</Heading>
      <Title>123</Title>
    </div>
  </Level.Item>
  <Level.Item hasTextCentered>
    <div>
      <Heading>Followers</Heading>
      <Title>456K</Title>
    </div>
  </Level.Item>
  <Level.Item hasTextCentered>
    <div>
      <Heading>Likes</Heading>
      <Title>789</Title>
    </div>
  </Level.Item>
</Level>
```

```jsx
<Level>
  <Level.Item hasTextCentered>
    <Link info href='#'>Home</Link>
  </Level.Item>
  <Level.Item hasTextCentered>
    <Link info href='#'>Menu</Link>
  </Level.Item>
  <Level.Item hasTextCentered>
    <img src="http://bulma.io/images/bulma-type.png" alt="Bulma" style={{height: '30px'}} />
  </Level.Item>
  <Level.Item hasTextCentered>
    <Link info href='#'>Reservations</Link>
  </Level.Item>
  <Level.Item hasTextCentered>
    <Link info href='#'>Contact</Link>
  </Level.Item>
</Level>
```

### Mobile level

By default, for space concerns, the level is vertical on mobile. If you want the level to be horizontal on mobile as well, add the `is-mobile` modifier on the `level` container.

```jsx
<Level mobile>
  <Level.Item hasTextCentered>
    <Link info href='#'>Home</Link>
  </Level.Item>
  <Level.Item hasTextCentered>
    <Link info href='#'>Menu</Link>
  </Level.Item>
  <Level.Item hasTextCentered>
    <img src="http://bulma.io/images/bulma-type.png" alt="Bulma" style={{height: '30px'}} />
  </Level.Item>
  <Level.Item hasTextCentered>
    <Link info href='#'>Reservations</Link>
  </Level.Item>
  <Level.Item hasTextCentered>
    <Link info href='#'>Contact</Link>
  </Level.Item>
</Level>
```
