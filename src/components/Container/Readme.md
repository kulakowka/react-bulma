The `.container` class can be used in any context, but mostly as a direct child of either:

- `.nav`
- `.hero`
- `.section`
- `.footer`

This is how the container will behave:

- on mobile and tablet, it will have a margin of 20px on both the left and right sides.
- on desktop (>= 1000px), it will have a maximum width of 960px and will be horizontally centered.
- on widescreen (>= 1192px), it will have a maximum width of 1152px.
- on fullhd (>= 1384px), it will have a maximum width of 1344px.
The values 960, 1152 and 1344 have been chosen because they are divisible by both 12 and 16.

```example
<Container>
  <Notification>
    This container is <strong>centered</strong> on desktop.
  </Notification>
</Container>
```

### Fluid container

If you don't want to have a maximum width but want to keep the 20px margin on the left and right sides, add the `is-fluid` modifier:

```example
<Container fluid>
  <Notification>
    This container is <strong>fluid</strong>: it will have a 20px gap on either side, on any viewport size.
  </Notification>
</Container>
```
