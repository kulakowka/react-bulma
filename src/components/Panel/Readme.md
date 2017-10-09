The panel is container for several types:

- `panel-heading` as the first child
- `panel-tabs` for navigation
- `panel-block` which can contain other elements, like:
  - `control`
  - `input`
  - `button`
  - `panel-icon`

The panel-block can be an anchor tag `<a>` or a label `<label>` with a checkbox inside.

```jsx
<Panel>
  <Panel.Heading>
    Repositories
  </Panel.Heading>

  <Panel.Block>
    <Control hasIconsLeft>
      <Input small type="text" placeholder="Search"/>
      <Icon small left>
        <i className="fa fa-search"/>
      </Icon>
    </Control>
  </Panel.Block>
  <Panel.Tabs>
    <Panel.Tab active>All</Panel.Tab>
    <Panel.Tab>Public</Panel.Tab>
    <Panel.Tab>Private</Panel.Tab>
    <Panel.Tab>Sources</Panel.Tab>
    <Panel.Tab>Forks</Panel.Tab>
  </Panel.Tabs>
  <Panel.Block active>
    <Panel.Icon>
      <i className="fa fa-book"/>
    </Panel.Icon>
    bulma
  </Panel.Block>
  <Panel.Block>
    <Panel.Icon>
      <i className="fa fa-book"/>
    </Panel.Icon>
    marksheet
  </Panel.Block>
  <Panel.Block>
    <Panel.Icon>
      <i className="fa fa-book"/>
    </Panel.Icon>
    minireset.css
  </Panel.Block>
  <Panel.Block>
    <Panel.Icon>
      <i className="fa fa-book"/>
    </Panel.Icon>
    jgthms.github.io
  </Panel.Block>
  <Panel.Block>
    <Panel.Icon>
      <i className="fa fa-code-fork"/>
    </Panel.Icon>
    daniellowtw/infBoard
  </Panel.Block>
  <Panel.Block>
    <Panel.Icon>
      <i className="fa fa-code-fork"/>
    </Panel.Icon>
    mojs
  </Panel.Block>
  <Panel.Block label>
    <input type="checkbox"/>
    Remember me
  </Panel.Block>
  <Panel.Block>
    <Button primary outlined fullwidth>
      Reset all filters
    </Button>
  </Panel.Block>
</Panel>
```
