There are 2 types of heading:

```example
<div>
  <Title>Title</Title>
  <SubTitle>SubTitle</SubTitle>
</div>
```

There are 6 sizes available:

```example
<div>
  <Title is='1'>Title 1</Title>
  <Title is='2'>Title 2</Title>
  <Title is='3'>Title 3</Title>
  <Title is='4'>Title 4</Title>
  <Title is='5'>Title 5</Title>
  <Title is='6'>Title 6</Title>
</div>
```

```example
<div>
  <SubTitle is='1'>SubTitle 1</SubTitle>
  <SubTitle is='2'>SubTitle 2</SubTitle>
  <SubTitle is='3'>SubTitle 3</SubTitle>
  <SubTitle is='4'>SubTitle 4</SubTitle>
  <SubTitle is='5'>SubTitle 5</SubTitle>
  <SubTitle is='6'>SubTitle 6</SubTitle>
</div>
```


When you combine a title and a subtitle, they move closer together.

As a rule of thumb, it is recommended to use a size difference of two. So if you use a `title is-1`, combine it with a `subtitle is-3`.

```example
<div>
  <Title is='1'>Title 1</Title>
  <SubTitle is='3'>SubTitle 3</SubTitle>
  
  <Title is='2'>Title 2</Title>
  <SubTitle is='4'>SubTitle 4</SubTitle>
  
  <Title is='3'>Title 3</Title>
  <SubTitle is='5'>SubTitle 5</SubTitle>
</div>
```

You can maintain the normal spacing between titles and subtitles if you use the `is-spaced` modifier on the first element.

```example
<div>
  <Title is='1' spaced>Title 1</Title>
  <SubTitle is='3'>SubTitle 3</SubTitle>
  
  <Title is='2' spaced>Title 2</Title>
  <SubTitle is='4'>SubTitle 4</SubTitle>
  
  <Title is='3' spaced>Title 3</Title>
  <SubTitle is='5'>SubTitle 5</SubTitle>
</div>

```
