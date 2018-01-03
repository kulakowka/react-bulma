Building a columns layout with Bulma is very simple:

- Add a ```Columns``` container
- Add as many ```Column``` elements as you want

Each column will have an equal width, no matter the number of columns.

You can see other sizes here: [Sizes](https://bulma.io/documentation/columns/sizes/)
```jsx
<Columns>
  <Column size="is-2" className="has-text-centered">
    <Notification info>
      <code>2</code>
    </Notification>
  </Column>
  <Column size="is-1" className="has-text-centered">
    <Notification success>
      <code>1</code>
    </Notification>
  </Column>
  <Column size="is-1" className="has-text-centered">
    <Notification warning>
      <code>1</code>
    </Notification>
  </Column>
  <Column size="is-1" className="has-text-centered">
    <Notification success>
      <code>1</code>
    </Notification>
  </Column>
  <Column size="is-1" className="has-text-centered">
    <Notification warning>
      <code>1</code>
    </Notification>
  </Column>
  <Column size="is-1" className="has-text-centered">
    <Notification success>
      <code>1</code>
    </Notification>
  </Column>
  <Column size="is-1" className="has-text-centered">
    <Notification warning>
      <code>1</code>
    </Notification>
  </Column>
  <Column size="is-1" className="has-text-centered">
    <Notification success>
      <code>1</code>
    </Notification>
  </Column>
  <Column size="is-1" className="has-text-centered">
    <Notification warning>
      <code>1</code>
    </Notification>
  </Column>
  <Column size="is-1" className="has-text-centered">
    <Notification success>
      <code>1</code>
    </Notification>
  </Column>
  <Column size="is-1" className="has-text-centered">
    <Notification warning>
      <code>1</code>
    </Notification>
  </Column>
</Columns>
```
```jsx
<Columns isGapless isMultiline isMobile>
  <Column size="is-one-quarter" className="has-text-centered">
    <Notification info>
      <code>is-one-quarter</code>
    </Notification>
  </Column>
  <Column size="is-one-quarter" className="has-text-centered">
    <Notification success>
      <code>is-one-quarter</code>
    </Notification>
  </Column>
  <Column size="is-one-quarter" className="has-text-centered">
    <Notification warning>
      <code>is-one-quarter</code>
    </Notification>
  </Column>
  <Column size="is-one-quarter" className="has-text-centered">
    <Notification danger>
      <code>is-one-quarter</code>
    </Notification>
  </Column>
  <Column size="is-half" className="has-text-centered">
    <Notification info>
      <code>is-half</code>
    </Notification>
  </Column>
  <Column size="is-one-quarter" className="has-text-centered">
    <Notification success>
      <code>is-one-quarter</code>
    </Notification>
  </Column>
  <Column size="is-one-quarter" className="has-text-centered">
    <Notification warning>
      <code>is-one-quarter</code>
    </Notification>
  </Column>
</Columns>
```
