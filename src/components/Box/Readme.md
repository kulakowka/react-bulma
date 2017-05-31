The `.box` element is simply a container with a shadow, a border, a radius, and some padding. 
For example, you can include a media object:

```example
<Box>
  <Media>
    <Media.Left>
      <Image is='64x64' src="http://bulma.io/images/placeholders/128x128.png" alt="Image"/>
    </Media.Left>
    <Media.Content>
      <Content>
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </Content>
      <Level mobile>
        <Level.Left>
          <Level.Item>
            <Icon small><i className="fa fa-reply"/></Icon>
          </Level.Item>
          <Level.Item>
            <Icon small><i className="fa fa-retweet"/></Icon>
          </Level.Item>
          <Level.Item>
            <Icon small><i className="fa fa-heart"/></Icon>
          </Level.Item>
        </Level.Left>
      </Level>
    </Media.Content>
  </Media>
</Box>
```
