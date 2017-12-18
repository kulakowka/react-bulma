Building a columns layout with Bulma is very simple:

- Add a ```Columns``` container
- Add as many ```Column``` elements as you want

Each column will have an equal width, no matter the number of columns.

You can see other sizes here: [Sizes](https://bulma.io/documentation/columns/sizes/)
```jsx
<Columns>
  <Column size="is-2" hasTextCentered>
    <Notification info>
      2
    </Notification>
  </Column>
  <Column size="is-1" hasTextCentered>
    <Notification success>
      1
    </Notification>
  </Column>
  <Column size="is-1" hasTextCentered>
    <Notification warning>
      1
    </Notification>
  </Column>
  <Column size="is-1" hasTextCentered>
    <Notification success>
      1
    </Notification>
  </Column>
  <Column size="is-1" hasTextCentered>
    <Notification warning>
      1
    </Notification>
  </Column>
  <Column size="is-1" hasTextCentered>
    <Notification success>
      1
    </Notification>
  </Column>
  <Column size="is-1" hasTextCentered>
    <Notification warning>
      1
    </Notification>
  </Column>
  <Column size="is-1" hasTextCentered>
    <Notification success>
      1
    </Notification>
  </Column>
  <Column size="is-1" hasTextCentered>
    <Notification warning>
      1
    </Notification>
  </Column>
  <Column size="is-1" hasTextCentered>
    <Notification success>
      1
    </Notification>
  </Column>
  <Column size="is-1" hasTextCentered>
    <Notification warning>
      1
    </Notification>
  </Column>
</Columns>
```
```jsx
<Columns>
  <Column size="is-11" hasTextCentered>
    <Notification info>
      11
    </Notification>
  </Column>
  <Column size="is-1" hasTextCentered>
    <Notification success>
      1
    </Notification>
  </Column>
</Columns>
```
