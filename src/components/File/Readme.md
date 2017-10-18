File upload

A custom file upload input, without JavaScript
```jsx
<File>
  <File.Label>
    <File.Input />
    <File.Cta>
      <File.Icon>
        <i class="fa fa-upload"></i>
      </File.Icon>
      <File.Label as='span'>
        Choose a file…
      </File.Label>
    </File.Cta>
  </File.Label>
</File>
```
Placeholder for the selected file name.
```jsx
<File name>
  <File.Label>
    <File.Input />
    <File.Cta>
      <File.Icon>
        <i class="fa fa-upload"></i>
      </File.Icon>
      <File.Label as='span'>
        Choose a file…
      </File.Label>
    </File.Cta>
    <File.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File.Name>
  </File.Label>
</File>
```
You can move the CTA to the right side or centered
```jsx
<div>
  <File name right>
    <File.Label>
      <File.Input />
      <File.Cta>
        <File.Icon>
          <i class="fa fa-upload"></i>
        </File.Icon>
        <File.Label as='span'>
          Choose a file…
        </File.Label>
      </File.Cta>
      <File.Name>
        Screen Shot 2017-07-29 at 15.54.25.png
      </File.Name>
    </File.Label>
  </File>

  <File name centered boxed>
    <File.Label>
      <File.Input />
      <File.Cta>
        <File.Icon>
          <i class="fa fa-upload"></i>
        </File.Icon>
        <File.Label as='span'>
          Choose a file…
        </File.Label>
      </File.Cta>
      <File.Name>
        Screen Shot 2017-07-29 at 15.54.25.png
      </File.Name>
    </File.Label>
  </File>
</div>
```

You can also expand the name to fill up the space
```jsx
<File name fullwidth>
  <File.Label>
    <File.Input />
    <File.Cta>
      <File.Icon>
        <i class="fa fa-upload"></i>
      </File.Icon>
      <File.Label as='span'>
        Choose a file…
      </File.Label>
    </File.Cta>
    <File.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File.Name>
  </File.Label>
</File>
```
You can have a boxed block
```jsx
<File name boxed>
  <File.Label>
    <File.Input />
    <File.Cta>
      <File.Icon>
        <i class="fa fa-upload"></i>
      </File.Icon>
      <File.Label as='span'>
        Choose a file…
      </File.Label>
    </File.Cta>
    <File.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File.Name>
  </File.Label>
</File>
```

## Colors

```jsx
<div>
  <Field>
    <File primary>
      <File.Label>
        <File.Input />
        <File.Cta>
          <File.Icon>
            <i class="fa fa-upload"></i>
          </File.Icon>
          <File.Label as='span'>
            Primary file…
          </File.Label>
        </File.Cta>
      </File.Label>
    </File>
  </Field>

  <Field>
    <File name info>
      <File.Label>
        <File.Input />
        <File.Cta>
          <File.Icon>
            <i class="fa fa-upload"></i>
          </File.Icon>
          <File.Label as='span'>
            Info file…
          </File.Label>
        </File.Cta>
        <File.Name>
          Screen Shot 2017-07-29 at 15.54.25.png
        </File.Name>
      </File.Label>
    </File>
  </Field>

  <Field>
    <File boxed warning>
      <File.Label>
        <File.Input />
        <File.Cta>
          <File.Icon>
            <i class="fa fa-cloud-upload"></i>
          </File.Icon>
          <File.Label as='span'>
            Warning file…
          </File.Label>
        </File.Cta>
      </File.Label>
    </File>
  </Field>

  <Field>
    <File name boxed danger>
      <File.Label>
        <File.Input />
        <File.Cta>
          <File.Icon>
            <i class="fa fa-cloud-upload"></i>
          </File.Icon>
          <File.Label as='span'>
            Danger file…
          </File.Label>
        </File.Cta>
        <File.Name>
          Screen Shot 2017-07-29 at 15.54.25.png
        </File.Name>
      </File.Label>
    </File>
  </Field>
</div>
```

## Sizes

```jsx
<div>
  <Field>
    <File small>
      <File.Label>
        <File.Input />
        <File.Cta>
          <File.Icon>
            <i class="fa fa-upload"></i>
          </File.Icon>
          <File.Label as='span'>
            Danger file…
          </File.Label>
        </File.Cta>
      </File.Label>
    </File>
  </Field>

  <Field>
    <File>
      <File.Label>
        <File.Input />
        <File.Cta>
          <File.Icon>
            <i class="fa fa-upload"></i>
          </File.Icon>
          <File.Label as='span'>
            Danger file…
          </File.Label>
        </File.Cta>
      </File.Label>
    </File>
  </Field>

  <Field>
    <File medium>
      <File.Label>
        <File.Input />
        <File.Cta>
          <File.Icon>
            <i class="fa fa-upload"></i>
          </File.Icon>
          <File.Label as='span'>
            Danger file…
          </File.Label>
        </File.Cta>
      </File.Label>
    </File>
  </Field>

  <Field>
    <File large>
      <File.Label>
        <File.Input />
        <File.Cta>
          <File.Icon>
            <i class="fa fa-upload"></i>
          </File.Icon>
          <File.Label as='span'>
            Danger file…
          </File.Label>
        </File.Cta>
      </File.Label>
    </File>
  </Field>
</div>
```
