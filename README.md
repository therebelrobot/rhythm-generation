# rhythm-generation

generates a random rhythm based on your parameters in command line, and plays them back

### install

```
npm i -g rhythm-generation
```

### usage

```
rhythm
```

### requirements

- Node 8.x+

### options

- `--beats`: the number of beats to create (default `16`)
- `--tempo`: the tempo (in BPM, default `120`);
- `--metronome`: always have the kick beat at the beginning of the beat (default: `false`)
- `--playback`: play audio of the rhythm (default: `true`)

### example
```
└─[$] rhythm --beats=16 --tempo=90
[ '______x_',
  '__x_____',
  '__x_____',
  '________',
  '__x_____',
  '______x_',
  '______x_',
  '____x___',
  'X___x_x_',
  '__x_x_x_',
  'X___x_x_',
  '________',
  'X___x_x_',
  'X_x___x_',
  '__x_x___',
  '____x___' ]
  ```

  ### roadmap

  - export to Midi
  - web interface
