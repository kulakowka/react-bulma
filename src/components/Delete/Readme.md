The `.delete` element is a stand-alone element that can be used in different contexts.
On its own, it's a simple circle with a cross:

```example
<Delete />
```

It comes in 4 sizes:

```example
<div>
   <Delete small />
   <Delete />
   <Delete medium />
   <Delete large />
</div>
```

Bulma uses it for the tags, the notifications, and the messages:

```example
<div>
  <div>
    <Tag success>
      Hello World
      <Delete small/>
    </Tag>
  </div>
  <br/>

  <Notification danger>
    <Delete />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
  </Notification>

  <Message info>
    <Message.Header>
      Info
      <Delete />
    </Message.Header>
    <Message.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </Message.Body>
  </Message>
</div>
```
