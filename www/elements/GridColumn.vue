<template>
  <div class="GridColumn" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
function validate({ min = 1, max = 12, exceptions = [] }) {
  return (v) => {
    if (exceptions.some(exception => exception === v)) {
      return true;
    }
    const i = parseInt(v, 10);
    return !isNaN(i) && v >= min && v <= max;
  };
}

export default {
  props: {
    xs: {
      type: String,
      default: 'fit',
      validator: validate({ min: 0, max: 12, exceptions: ['expand', 'fit'] }),
    },
    sm: {
      type: String,
      validator: validate({ min: 0, max: 12, exceptions: ['expand', 'fit'] }),
    },
    md: {
      type: String,
      validator: validate({ min: 0, max: 12, exceptions: ['expand', 'fit'] }),
    },
    lg: {
      type: String,
      validator: validate({ min: 0, max: 12, exceptions: ['expand', 'fit'] }),
    },
    offsetXs: {
      type: String,
      validator: validate({ min: 0, max: 11 }),
    },
    offsetSm: {
      type: String,
      validator: validate({ min: 0, max: 11 }),
    },
    offsetMd: {
      type: String,
      validator: validate({ min: 0, max: 11 }),
    },
    offsetLg: {
      type: String,
      validator: validate({ min: 0, max: 11 }),
    },
    moveXs: {
      type: String,
      validator(v) { return ['left', 'right', 'none'].some(pos => pos === v); },
    },
    moveSm: {
      type: String,
      validator(v) { return ['left', 'right', 'none'].some(pos => pos === v); },
    },
    moveMd: {
      type: String,
      validator(v) { return ['left', 'right', 'none'].some(pos => pos === v); },
    },
    moveLg: {
      type: String,
      validator(v) { return ['left', 'right', 'none'].some(pos => pos === v); },
    },
    align: {
      type: String,
      validator(v) { return ['top', 'middle', 'bottom'].some(pos => pos === v); },
    },
  },
  computed: {
    classes() {
      let c = '';
      c += ` GridColumn--width-${this.xs}-xs`;
      c += this.sm ? ` GridColumn--width-${this.sm}-sm` : '';
      c += this.md ? ` GridColumn--width-${this.md}-md` : '';
      c += this.lg ? ` GridColumn--width-${this.lg}-lg` : '';
      c += this.align ? ` GridColumn--col-${this.align}` : '';
      c += this.offsetXs ? ` GridColumn--offset-${this.offsetXs}-xs` : '';
      c += this.offsetSm ? ` GridColumn--offset-${this.offsetSm}-sm` : '';
      c += this.offsetMd ? ` GridColumn--offset-${this.offsetMd}-md` : '';
      c += this.offsetLg ? ` GridColumn--offset-${this.offsetLg}-lg` : '';
      c += this.moveXs ? ` GridColumn--${this.moveXs}-xs` : '';
      c += this.moveSm ? ` GridColumn--${this.moveSm}-sm` : '';
      c += this.moveMd ? ` GridColumn--${this.moveMd}-md` : '';
      c += this.moveLg ? ` GridColumn--${this.moveLg}-lg` : '';

      return c;
    },
  },
};
</script>

<style>
.GridColumn {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
/* Width */
.GridColumn--width-fit-xs { flex: 1 0 auto; }
.GridColumn--width-expand-xs { flex: 0 0 auto; }
.GridColumn--width-0-xs { display: none; }
.GridColumn--width-1-xs { flex: 0 0 8.3333%; max-width: 8.3333%; }
.GridColumn--width-2-xs { flex: 0 0 16.6666%; max-width: 16.6666%; }
.GridColumn--width-3-xs { flex: 0 0 25%; max-width: 25%; }
.GridColumn--width-4-xs { flex: 0 0 33.3333%; max-width: 33.3333%; }
.GridColumn--width-5-xs { flex: 0 0 41.6666%; max-width: 41.6666%; }
.GridColumn--width-6-xs { flex: 0 0 50%; max-width: 50%; }
.GridColumn--width-7-xs { flex: 0 0 58.3333%; max-width: 58.3333%; }
.GridColumn--width-8-xs { flex: 0 0 66.6666%; max-width: 66.6666%; }
.GridColumn--width-9-xs { flex: 0 0 75%; max-width: 75%; }
.GridColumn--width-10-xs { flex: 0 0 83.3333%; max-width: 83.3333%; }
.GridColumn--width-11-xs { flex: 0 0 91.6666%; max-width: 91.6666%; }
.GridColumn--width-12-xs { flex: 0 0 100%; max-width: 100%; }
.GridColumn--offset-0-xs { margin-left: 0%; }
.GridColumn--offset-1-xs { margin-left: 8.3333%; }
.GridColumn--offset-2-xs { margin-left: 16.6666%; }
.GridColumn--offset-3-xs { margin-left: 25%; }
.GridColumn--offset-4-xs { margin-left: 33.3333%; }
.GridColumn--offset-5-xs { margin-left: 41.6666%; }
.GridColumn--offset-6-xs { margin-left: 50%; }
.GridColumn--offset-7-xs { margin-left: 58.3333%; }
.GridColumn--offset-8-xs { margin-left: 66.6666%; }
.GridColumn--offset-9-xs { margin-left: 75%; }
.GridColumn--offset-10-xs { margin-left: 83.3333%; }
.GridColumn--offset-11-xs { margin-left: 91.6666%; }
.GridColumn--left-xs { order: -1; }
.GridColumn--right-xs { order: 1; }
.GridColumn--none-xs { order: 0; }

@media (min-width: 768px) {
  .GridColumn--width-fit-sm { flex: 1 0 auto; display: block; }
  .GridColumn--width-expand-sm { flex: 0 0 auto; display: block; }
  .GridColumn--width-0-sm { display: none; }
  .GridColumn--width-1-sm { flex: 0 0 8.3333%; max-width: 8.3333%; display: block; }
  .GridColumn--width-2-sm { flex: 0 0 16.6666%; max-width: 16.6666%; display: block; }
  .GridColumn--width-3-sm { flex: 0 0 25%; max-width: 25%; display: block; }
  .GridColumn--width-4-sm { flex: 0 0 33.3333%; max-width: 33.3333%; display: block; }
  .GridColumn--width-5-sm { flex: 0 0 41.6666%; max-width: 41.6666%; display: block; }
  .GridColumn--width-6-sm { flex: 0 0 50%; max-width: 50%; display: block; }
  .GridColumn--width-7-sm { flex: 0 0 58.3333%; max-width: 58.3333%; display: block; }
  .GridColumn--width-8-sm { flex: 0 0 66.6666%; max-width: 66.6666%; display: block; }
  .GridColumn--width-9-sm { flex: 0 0 75%; max-width: 75%; display: block; }
  .GridColumn--width-10-sm { flex: 0 0 83.3333%; max-width: 83.3333%; display: block; }
  .GridColumn--width-11-sm { flex: 0 0 91.6666%; max-width: 91.6666%; display: block; }
  .GridColumn--width-12-sm { flex: 0 0 100%; max-width: 100%; display: block; }
  .GridColumn--offset-0-sm { margin-left: 0%; }
  .GridColumn--offset-1-sm { margin-left: 8.3333%; }
  .GridColumn--offset-2-sm { margin-left: 16.6666%; }
  .GridColumn--offset-3-sm { margin-left: 25%; }
  .GridColumn--offset-4-sm { margin-left: 33.3333%; }
  .GridColumn--offset-5-sm { margin-left: 41.6666%; }
  .GridColumn--offset-6-sm { margin-left: 50%; }
  .GridColumn--offset-7-sm { margin-left: 58.3333%; }
  .GridColumn--offset-8-sm { margin-left: 66.6666%; }
  .GridColumn--offset-9-sm { margin-left: 75%; }
  .GridColumn--offset-10-sm { margin-left: 83.3333%; }
  .GridColumn--offset-11-sm { margin-left: 91.6666%; }
  .GridColumn--left-sm { order: -1; }
  .GridColumn--right-sm { order: 1; }
  .GridColumn--none-sm { order: 0; }
}

@media (min-width: 992px) {
  .GridColumn--width-fit-md { flex: 1 0 auto; display: block; }
  .GridColumn--width-expand-md { flex: 0 0 auto; max-width: auto; display: block; }
  .GridColumn--width-0-md { display: none; display: block; }
  .GridColumn--width-1-md { flex: 0 0 8.3333%; max-width: 8.3333%; display: block; }
  .GridColumn--width-2-md { flex: 0 0 16.6666%; max-width: 16.6666%; display: block; }
  .GridColumn--width-3-md { flex: 0 0 25%; max-width: 25%; display: block; }
  .GridColumn--width-4-md { flex: 0 0 33.3333%; max-width: 33.3333%; display: block; }
  .GridColumn--width-5-md { flex: 0 0 41.6666%; max-width: 41.6666%; display: block; }
  .GridColumn--width-6-md { flex: 0 0 50%; max-width: 50%; display: block; }
  .GridColumn--width-7-md { flex: 0 0 58.3333%; max-width: 58.3333%; display: block; }
  .GridColumn--width-8-md { flex: 0 0 66.6666%; max-width: 66.6666%; display: block; }
  .GridColumn--width-9-md { flex: 0 0 75%; max-width: 75%; display: block; }
  .GridColumn--width-10-md { flex: 0 0 83.3333%; max-width: 83.3333%; display: block; }
  .GridColumn--width-11-md { flex: 0 0 91.6666%; max-width: 91.6666%; display: block; }
  .GridColumn--width-12-md { flex: 0 0 100%; max-width: 100%; display: block; }
  .GridColumn--offset-0-md { margin-left: 0%; }
  .GridColumn--offset-1-md { margin-left: 8.3333%; }
  .GridColumn--offset-2-md { margin-left: 16.6666%; }
  .GridColumn--offset-3-md { margin-left: 25%; }
  .GridColumn--offset-4-md { margin-left: 33.3333%; }
  .GridColumn--offset-5-md { margin-left: 41.6666%; }
  .GridColumn--offset-6-md { margin-left: 50%; }
  .GridColumn--offset-7-md { margin-left: 58.3333%; }
  .GridColumn--offset-8-md { margin-left: 66.6666%; }
  .GridColumn--offset-9-md { margin-left: 75%; }
  .GridColumn--offset-10-md { margin-left: 83.3333%; }
  .GridColumn--offset-11-md { margin-left: 91.6666%; }
  .GridColumn--left-md { order: -1; }
  .GridColumn--right-md { order: 1; }
  .GridColumn--none-md { order: 0; }
}

@media (min-width: 1200px) {
  .GridColumn--width-fit-lg { flex: 1 0 auto; display: block; }
  .GridColumn--width-expand-lg { flex: 0 0 auto; max-width: auto; display: block; }
  .GridColumn--width-0-lg { display: none; }
  .GridColumn--width-1-lg { flex: 0 0 8.3333%; max-width: 8.3333%; display: block; }
  .GridColumn--width-2-lg { flex: 0 0 16.6666%; max-width: 16.6666%; display: block; }
  .GridColumn--width-3-lg { flex: 0 0 25%; max-width: 25%; display: block; }
  .GridColumn--width-4-lg { flex: 0 0 33.3333%; max-width: 33.3333%; display: block; }
  .GridColumn--width-5-lg { flex: 0 0 41.6666%; max-width: 41.6666%; display: block; }
  .GridColumn--width-6-lg { flex: 0 0 50%; max-width: 50%; display: block; }
  .GridColumn--width-7-lg { flex: 0 0 58.3333%; max-width: 58.3333%; display: block; }
  .GridColumn--width-8-lg { flex: 0 0 66.6666%; max-width: 66.6666%; display: block; }
  .GridColumn--width-9-lg { flex: 0 0 75%; max-width: 75%; display: block; }
  .GridColumn--width-10-lg { flex: 0 0 83.3333%; max-width: 83.3333%; display: block; }
  .GridColumn--width-11-lg { flex: 0 0 91.6666%; max-width: 91.6666%; display: block; }
  .GridColumn--width-12-lg { flex: 0 0 100%; max-width: 100%; display: block; }
  .GridColumn--offset-0-lg { margin-left: 0%; }
  .GridColumn--offset-1-lg { margin-left: 8.3333%; }
  .GridColumn--offset-2-lg { margin-left: 16.6666%; }
  .GridColumn--offset-3-lg { margin-left: 25%; }
  .GridColumn--offset-4-lg { margin-left: 33.3333%; }
  .GridColumn--offset-5-lg { margin-left: 41.6666%; }
  .GridColumn--offset-6-lg { margin-left: 50%; }
  .GridColumn--offset-7-lg { margin-left: 58.3333%; }
  .GridColumn--offset-8-lg { margin-left: 66.6666%; }
  .GridColumn--offset-9-lg { margin-left: 75%; }
  .GridColumn--offset-10-lg { margin-left: 83.3333%; }
  .GridColumn--offset-11-lg { margin-left: 91.6666%; }
  .GridColumn--left-lg { order: -1; }
  .GridColumn--right-lg { order: 1; }
  .GridColumn--none-lg { order: 0; }
}
</style>
