The media object is a UI element perfect for repeatable and nestable content.

```example
<Media>
  <Media.Left>
    <Image is='64x64' src='http://bulma.io/images/placeholders/128x128.png' />
  </Media.Left>
  <Media.Content>
    <Content>
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </Content>
    <Level mobile>
      <Level.Left>
        <Level.Item>
          <Icon small>
            <i className="fa fa-reply" />
          </Icon>
        </Level.Item>
        <Level.Item>
          <Icon small>
            <i className="fa fa-retweet" />
          </Icon>
        </Level.Item>
        <Level.Item>
          <Icon small>
            <i className="fa fa-heart" />
          </Icon>
        </Level.Item>
      </Level.Left>
    </Level>
  </Media.Content>
  <Media.Right>
    <Delete />
  </Media.Right>
</Media>
```