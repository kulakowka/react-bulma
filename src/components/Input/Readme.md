
### Sizes
 ```jsx
 <div>
  <label htmlFor="small">small</label>
  <Input small id="small" />

  <label htmlFor="normal">normal</label>
  <Input id="normal" />

  <label htmlFor="medium">medium</label>
  <Input medium id="medium" />

  <label htmlFor="large">large</label>
  <Input large id="large" />
 </div>
 ```

### Colors
 ```jsx
 <div>
  <Control>
    <Input primary placeholder="Primary input"/>
  </Control>
  <Control>
    <Input info placeholder="Info input"/>
  </Control>
  <Control>
    <Input success placeholder="Success input"/>
  </Control>
  <Control>
    <Input warning placeholder="Warning input"/>
  </Control>
  <Control>
    <Input danger placeholder="Danger input"/>
  </Control>
 </div>
 ```

### States

Normal
 ```jsx
 <div>
  <Control>
    <Input />
  </Control>
 </div>
 ```

Hover
 ```jsx
 <div>
  <Control>
    <Input hovered />
  </Control>
 </div>
 ```

Focus
 ```jsx
 <div>
  <Control>
    <Input focused/>
  </Control>
 </div>
 ```

Loading
 ```jsx
 <div>
  <Control loading>
    <Input />
  </Control>
 </div>
 ```
