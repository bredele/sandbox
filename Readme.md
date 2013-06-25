
# sandbox

  Emitter sandbox

## Installation

    $ component install bredele/sandbox

## API

### new Sandbox(namespace)

  Creates an Emitter sanboxed with the given namespace


### Sandbox#on(event,fn)

  Register an event handler fn.

### Sandbox#once(event,fn)

  Register a single-shot event handler fn, removed immediately after it is invoked the first time.

### Sandbox#emit(event,...)

  Emit a namespaced event with variable option args.
  
### Sandbox#debug()

  Namespace console log

## License

  MIT

## TODO
  - Test
  - Emitter control inversion