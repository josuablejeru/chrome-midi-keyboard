<script>
  let keyLenth = 88;
  // each number represents a key in a octave
  const octave = [1, 4, 2, 4, 3, 1, 4];

  // key shapes
  const keyShapes = [{ points: "" }];
</script>

<style>
  .white {
    fill: white;
    stroke: black;
    stroke-width: 1;
    cursor: pointer;
    margin: 2px;
  }
  .white:hover {
    fill: #9e9e9e;
    stroke: lightblue;
    cursor: pointer;
    stroke-width: 1;
    outline: black solid 1px;
  }
  .black {
    fill: black;
    stroke-width: 1;
    cursor: pointer;
    margin: 2px;
  }
  .black:hover {
    fill: #515151;
    stroke: lightblue;
    stroke-width: 1;
    outline: black solid 1px;
  }
</style>

<svg class="piano" height="230" width="1000">
  <!-- {#each keyShapes as key}
    <polygon points={key.points} class={key.class} />
  {/each} -->
  <polygon
    points="200,10 230,10 230,100 245,100 245,220 200,220 200,10"
    class="white"
    id="c"
    data-key="65" />

  <polygon
    points="245,100 260,100 260,10 275,10 275,100 290,100 290,220 245,220
    245,100"
    class="white"
    data-key="83"
    id="d" />

  <polygon
    points="305,10 335,10 335,220 290,220 290,100 305,100 305,10"
    class="white"
    data-key="68"
    id="e" />

  <polygon
    points="335,10 365,10 365,100 380,100 380,220 335,220 335,10"
    class="white"
    data-key="70"
    id="f" />

  <polygon
    points="380,100 395,100 395,10 410,10 410,100 425,100 425,220 380,220
    380,100"
    class="white"
    data-key="71"
    id="g" />

  <polygon
    points="425,100 440,100 440,10 455,10 455,100 470,100 470,220 425,220
    425,100"
    class="white"
    data-key="72"
    id="a" />

  <polygon
    points="470,100 485,100 485,10 515,10 515,220 470,220 470,100"
    class="white"
    data-key="74"
    id="b" />

  <polygon
    points="515,10 545,10 545,100 560,100 560,220 515,220 515,10"
    class="white"
    data-key="82"
    id="key5" />

  <polygon
    points="560,100 575,100 575,10 590,10 590,100 605,100 605,220 560,220"
    class="white"
    data-key="84"
    id="key5" />

  <polygon
    points="605,100 620,100 620,10 650,10 650,220 605,220 605,100"
    class="white"
    data-key="89"
    id="key5" />

  <polygon
    points="650,10 680,10 680,100 695,100 695,220 650,220 650,10"
    class="white"
    data-key="85"
    id="key5" />

  <polygon
    points="695,100 710,100 710,10 725,10 725,100 740,100 740,220 695,220
    695,100"
    class="white"
    data-key="73"
    id="key5" />

  <polygon
    points="740,100 755,100 755,10 770,10 770,100 785,100 785,220 740,220
    740,100"
    class="white"
    data-key="79"
    id="key5" />

  <polygon
    points="785,100 800,100 800,10 830,10 830,220 785,220 785,100"
    class="white"
    data-key="80"
    id="key5" />

  <polygon
    points="230,10 260,10 260,100 230,100 230,10"
    class="black"
    data-key="49"
    id="c_sharp" />
  <polygon
    points="275,10 305,10 305,100 275,100 275,10"
    class="black"
    data-key="50"
    id="d_sharp" />
  <polygon
    points="365,10 395,10 395,100 365,100 365,10"
    class="black"
    data-key="51"
    id="f_sharp" />
  <polygon
    points="410,10 440,10 440,100 410,100 410,10"
    class="black"
    data-key="52"
    id="g_sharp" />
  <polygon
    points="455,10 485,10 485,100 455,100 455,10"
    class="black"
    data-key="53"
    id="a_sharp" />
  <polygon
    points="545,10 575,10 575,100 545,100 545,10"
    class="black"
    data-key="54"
    id="key4" />
  <polygon
    points="590,10 620,10 620,100 590,100 590,10"
    class="black"
    data-key="55"
    id="key4" />
  <polygon
    points="680,10 710,10 710,100 680,100 680,10"
    class="black"
    data-key="56"
    id="key4" />
  <polygon
    points="725,10 755,10 755,100 725,100 725,10"
    class="black"
    data-key="57"
    id="key4" />
  <polygon
    points="770,10 800,10 800,100 770,100 770,10"
    class="black"
    data-key="48"
    id="key4" />

</svg>
