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

You can include any other Bulma element, like inputs, textareas, icons, buttons... or even a nav bar.

```example
<Media>
  <Media.Left>
    <Image is='64x64' src='http://bulma.io/images/placeholders/128x128.png' />
  </Media.Left>
  <Media.Content>
    <Field>
      <Control>
        <Textarea placeholder="Add a comment..."/>
      </Control>
    </Field>
    <Level>
      <Level.Left>
        <Level.Item>
          <Button info>Submit</Button>
        </Level.Item>
      </Level.Left>
      <Level.Right>
        <Level.Item>
          <Checkbox>Press enter to submit</Checkbox>
        </Level.Item>
      </Level.Right>
    </Level>
  </Media.Content>
</Media>
```

### Nesting

You can nest media objects up to 3 levels deep.

```example
<div>
  <Media>
    <Media.Left>
      <Image is='64x64' src="http://bulma.io/images/placeholders/128x128.png"/>
    </Media.Left>
    <Media.Content>
      <Content>
        <p>
          <strong>Barbara Middleton</strong>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
          <br/>
          <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
        </p>
      </Content>

      <Media>
        <Media.Left>
          <Image is='48x48' src="http://bulma.io/images/placeholders/96x96.png" />
        </Media.Left>
        <Media.Content>
          <Content>
            <p>
              <strong>Sean Brown</strong>
              <br/>
              Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
              <br/>
              <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
            </p>
          </Content>

          <Media>
            Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
          </Media>

          <Media>
            Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
          </Media>
        </Media.Content>
      </Media>

      <Media>
        <Media.Left>
          <Image is='48x48' src="http://bulma.io/images/placeholders/96x96.png" />
        </Media.Left>
        <Media.Content>
          <Content>
            <p>
              <strong>Kayli Eunice </strong>
              <br/>
              Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
              <br/>
              <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
            </p>
          </Content>
        </Media.Content>
      </Media>
    </Media.Content>
  </Media>
  <Media>
    <Media.Left>
      <Image is='64x64' src="http://bulma.io/images/placeholders/128x128.png" />
    </Media.Left>
    <Media.Content>
      <Field>
        <Control>
          <Textarea placeholder="Add a comment..." />
        </Control>
      </Field>
      <Field>
        <Control>
          <Button>Post comment</Button>
        </Control>
      </Field>
    </Media.Content>
  </Media>
</div>
```
