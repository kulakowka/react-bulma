You simply need to attach a single `.table` CSS class on a `<table>` with the following structure:

- `table`
  - `thead`
  - `tfoot`
  - `tbody`
    - `tr`
    - `th`
    - `td`


You can set a table row as selected by appending the `is-selected` modifier on a `<tr>`

```jsx
<Table>
  <Table.Head>
    <Table.Tr>
      <Table.Th><abbr title="Position">Pos</abbr></Table.Th>
      <Table.Th>Team</Table.Th>
      <Table.Th><abbr title="Played">Pld</abbr></Table.Th>
      <Table.Th><abbr title="Won">W</abbr></Table.Th>
      <Table.Th><abbr title="Drawn">D</abbr></Table.Th>
      <Table.Th><abbr title="Lost">L</abbr></Table.Th>
      <Table.Th><abbr title="Goals for">GF</abbr></Table.Th>
      <Table.Th><abbr title="Goals against">GA</abbr></Table.Th>
      <Table.Th><abbr title="Goal difference">GD</abbr></Table.Th>
      <Table.Th><abbr title="Points">Pts</abbr></Table.Th>
      <Table.Th>Qualification or relegation</Table.Th>
    </Table.Tr>
  </Table.Head>
  <Table.Foot>
    <Table.Tr>
      <Table.Th><abbr title="Position">Pos</abbr></Table.Th>
      <Table.Th>Team</Table.Th>
      <Table.Th><abbr title="Played">Pld</abbr></Table.Th>
      <Table.Th><abbr title="Won">W</abbr></Table.Th>
      <Table.Th><abbr title="Drawn">D</abbr></Table.Th>
      <Table.Th><abbr title="Lost">L</abbr></Table.Th>
      <Table.Th><abbr title="Goals for">GF</abbr></Table.Th>
      <Table.Th><abbr title="Goals against">GA</abbr></Table.Th>
      <Table.Th><abbr title="Goal difference">GD</abbr></Table.Th>
      <Table.Th><abbr title="Points">Pts</abbr></Table.Th>
      <Table.Th>Qualification or relegation</Table.Th>
    </Table.Tr>
  </Table.Foot>
  <Table.Body>
    <Table.Tr>
      <Table.Th>1</Table.Th>
      <Table.Td>
        <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
      </Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>23</Table.Td>
      <Table.Td>12</Table.Td>
      <Table.Td>3</Table.Td>
      <Table.Td>68</Table.Td>
      <Table.Td>36</Table.Td>
      <Table.Td>+32</Table.Td>
      <Table.Td>81</Table.Td>
      <Table.Td>
        Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
      </Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>2</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>20</Table.Td>
      <Table.Td>11</Table.Td>
      <Table.Td>7</Table.Td>
      <Table.Td>65</Table.Td>
      <Table.Td>36</Table.Td>
      <Table.Td>+29</Table.Td>
      <Table.Td>71</Table.Td>
      <Table.Td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>3</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>19</Table.Td>
      <Table.Td>13</Table.Td>
      <Table.Td>6</Table.Td>
      <Table.Td>69</Table.Td>
      <Table.Td>35</Table.Td>
      <Table.Td>+34</Table.Td>
      <Table.Td>70</Table.Td>
      <Table.Td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></Table.Td>
    </Table.Tr>
    <Table.Tr selected>
      <Table.Th>4</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>19</Table.Td>
      <Table.Td>9</Table.Td>
      <Table.Td>10</Table.Td>
      <Table.Td>71</Table.Td>
      <Table.Td>41</Table.Td>
      <Table.Td>+30</Table.Td>
      <Table.Td>66</Table.Td>
      <Table.Td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>5</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>19</Table.Td>
      <Table.Td>9</Table.Td>
      <Table.Td>10</Table.Td>
      <Table.Td>49</Table.Td>
      <Table.Td>35</Table.Td>
      <Table.Td>+14</Table.Td>
      <Table.Td>66</Table.Td>
      <Table.Td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>6</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>18</Table.Td>
      <Table.Td>9</Table.Td>
      <Table.Td>11</Table.Td>
      <Table.Td>59</Table.Td>
      <Table.Td>41</Table.Td>
      <Table.Td>+18</Table.Td>
      <Table.Td>63</Table.Td>
      <Table.Td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>7</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham United</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>16</Table.Td>
      <Table.Td>14</Table.Td>
      <Table.Td>8</Table.Td>
      <Table.Td>65</Table.Td>
      <Table.Td>51</Table.Td>
      <Table.Td>+14</Table.Td>
      <Table.Td>62</Table.Td>
      <Table.Td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League">Europa League third qualifying round</a></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>8</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>16</Table.Td>
      <Table.Td>12</Table.Td>
      <Table.Td>10</Table.Td>
      <Table.Td>63</Table.Td>
      <Table.Td>50</Table.Td>
      <Table.Td>+13</Table.Td>
      <Table.Td>60</Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>9</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>14</Table.Td>
      <Table.Td>9</Table.Td>
      <Table.Td>15</Table.Td>
      <Table.Td>41</Table.Td>
      <Table.Td>55</Table.Td>
      <Table.Td>−14</Table.Td>
      <Table.Td>51</Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>10</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>12</Table.Td>
      <Table.Td>14</Table.Td>
      <Table.Td>12</Table.Td>
      <Table.Td>59</Table.Td>
      <Table.Td>53</Table.Td>
      <Table.Td>+6</Table.Td>
      <Table.Td>50</Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>11</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C.">Everton</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>11</Table.Td>
      <Table.Td>14</Table.Td>
      <Table.Td>13</Table.Td>
      <Table.Td>59</Table.Td>
      <Table.Td>55</Table.Td>
      <Table.Td>+4</Table.Td>
      <Table.Td>47</Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>12</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C.">Swansea City</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>12</Table.Td>
      <Table.Td>11</Table.Td>
      <Table.Td>15</Table.Td>
      <Table.Td>42</Table.Td>
      <Table.Td>52</Table.Td>
      <Table.Td>−10</Table.Td>
      <Table.Td>47</Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>13</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C.">Watford</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>12</Table.Td>
      <Table.Td>9</Table.Td>
      <Table.Td>17</Table.Td>
      <Table.Td>40</Table.Td>
      <Table.Td>50</Table.Td>
      <Table.Td>−10</Table.Td>
      <Table.Td>45</Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>14</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C." title="West Bromwich Albion F.C.">West Bromwich Albion</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>10</Table.Td>
      <Table.Td>13</Table.Td>
      <Table.Td>15</Table.Td>
      <Table.Td>34</Table.Td>
      <Table.Td>48</Table.Td>
      <Table.Td>−14</Table.Td>
      <Table.Td>43</Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>15</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C." title="Crystal Palace F.C.">Crystal Palace</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>11</Table.Td>
      <Table.Td>9</Table.Td>
      <Table.Td>18</Table.Td>
      <Table.Td>39</Table.Td>
      <Table.Td>51</Table.Td>
      <Table.Td>−12</Table.Td>
      <Table.Td>42</Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>16</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth" title="A.F.C. Bournemouth">AFC Bournemouth</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>11</Table.Td>
      <Table.Td>9</Table.Td>
      <Table.Td>18</Table.Td>
      <Table.Td>45</Table.Td>
      <Table.Td>67</Table.Td>
      <Table.Td>−22</Table.Td>
      <Table.Td>42</Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>17</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C." title="Sunderland A.F.C.">Sunderland</a></Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>9</Table.Td>
      <Table.Td>12</Table.Td>
      <Table.Td>17</Table.Td>
      <Table.Td>48</Table.Td>
      <Table.Td>62</Table.Td>
      <Table.Td>−14</Table.Td>
      <Table.Td>39</Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>18</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C." title="Newcastle United F.C.">Newcastle United</a> <strong>(R)</strong>
      </Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>9</Table.Td>
      <Table.Td>10</Table.Td>
      <Table.Td>19</Table.Td>
      <Table.Td>44</Table.Td>
      <Table.Td>65</Table.Td>
      <Table.Td>−21</Table.Td>
      <Table.Td>37</Table.Td>
      <Table.Td>Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a></Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Th>19</Table.Th>
      <Table.Td><a href="https://en.wikipedia.org/wiki/Norwich_City_F.C." title="Norwich City F.C.">Norwich City</a> <strong>(R)</strong>
      </Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>9</Table.Td>
      <Table.Td>7</Table.Td>
      <Table.Td>22</Table.Td>
      <Table.Td>39</Table.Td>
      <Table.Td>67</Table.Td>
      <Table.Td>−28</Table.Td>
      <Table.Td>34</Table.Td>
      <Table.Td>Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a></Table.Td>    
    </Table.Tr>
    <Table.Tr>
      <Table.Th>20</Table.Th>
      <Table.Td>
        <a href="https://en.wikipedia.org/wiki/Aston_Villa_F.C." title="Aston Villa F.C.">Aston Villa</a> <strong>(R)</strong>
      </Table.Td>
      <Table.Td>38</Table.Td>
      <Table.Td>3</Table.Td>
      <Table.Td>8</Table.Td>
      <Table.Td>27</Table.Td>
      <Table.Td>27</Table.Td>
      <Table.Td>76</Table.Td>
      <Table.Td>−49</Table.Td>
      <Table.Td>17</Table.Td>
      <Table.Td>Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a></Table.Td>
    </Table.Tr>
  </Table.Body>
</Table>
```


### Modifiers

Add borders to all the cells. `table is-bordered`

```jsx
<Table bordered>
  <Table.Body>
    <Table.Tr>
      <Table.Th>One</Table.Th>
      <Table.Th>Two</Table.Th>
    </Table.Tr>
    <Table.Tr>
      <Table.Td>One</Table.Td>
      <Table.Td>Two</Table.Td>
    </Table.Tr>
  </Table.Body>
</Table>
```

Add stripes to the table. `table is-striped`

```jsx
<Table striped>
  <Table.Body>
    <Table.Tr>
      <Table.Th>One</Table.Th>
      <Table.Th>Two</Table.Th>
    </Table.Tr>
    <Table.Tr>
      <Table.Td>One</Table.Td>
      <Table.Td>Two</Table.Td>
    </Table.Tr>
  </Table.Body>
</Table>
```

Make the cells narrower. `table is-narrow`

```jsx
<Table narrow>
  <Table.Body>
    <Table.Tr>
      <Table.Th>One</Table.Th>
      <Table.Th>Two</Table.Th>
    </Table.Tr>
    <Table.Tr>
      <Table.Td>One</Table.Td>
      <Table.Td>Two</Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Td>One</Table.Td>
      <Table.Td>Two</Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Td>One</Table.Td>
      <Table.Td>Two</Table.Td>
    </Table.Tr>
  </Table.Body>
</Table>
```

You can combine all three modifiers. `table is-bordered is-striped is-narrow`

```jsx
<Table narrow bordered striped>
  <Table.Body>
    <Table.Tr>
      <Table.Th>One</Table.Th>
      <Table.Th>Two</Table.Th>
    </Table.Tr>
    <Table.Tr>
      <Table.Td>One</Table.Td>
      <Table.Td>Two</Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Td>One</Table.Td>
      <Table.Td>Two</Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Td>One</Table.Td>
      <Table.Td>Two</Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Td>One</Table.Td>
      <Table.Td>Two</Table.Td>
    </Table.Tr>
  </Table.Body>
</Table>
```
