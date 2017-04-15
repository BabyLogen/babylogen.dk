<template>
  <div class="padding-horizontal-05" :class="classes">
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
    align: {
      type: String,
      validator(v) { return ['top', 'middle', 'bottom'].some(pos => pos === v); },
    },
  },
  computed: {
    classes() {
      let c = '';
      c += ` width-${this.xs}-xs`;
      c += this.sm ? ` width-${this.sm}-sm` : '';
      c += this.md ? ` width-${this.md}-md` : '';
      c += this.lg ? ` width-${this.lg}-lg` : '';
      c += this.align ? ` col-${this.align}` : '';

      return c;
    },
  },
};
</script>

<style>
/* Width */
.width-fit-xs { flex: 1 0 auto; }
.width-expand-xs { flex: 0 0 auto; }
.width-1-xs { flex: 0 0 8.33%; }
.width-2-xs { flex: 0 0 16.67%; }
.width-3-xs { flex: 0 0 25%; }
.width-4-xs { flex: 0 0 33.33%; }
.width-5-xs { flex: 0 0 41.67%; }
.width-6-xs { flex: 0 0 50%; }
.width-7-xs { flex: 0 0 58.33%; }
.width-8-xs { flex: 0 0 66.67%; }
.width-9-xs { flex: 0 0 75%; }
.width-10-xs { flex: 0 0 83.33%; }
.width-11-xs { flex: 0 0 91.67%; }
.width-12-xs { flex: 0 0 100%; }
.offset-0-xs { margin-left: 0%; }
.offset-1-xs { margin-left: 8.33%; }
.offset-2-xs { margin-left: 16.67%; }
.offset-3-xs { margin-left: 25%; }
.offset-4-xs { margin-left: 33.33%; }
.offset-5-xs { margin-left: 41.67%; }
.offset-6-xs { margin-left: 50%; }
.offset-7-xs { margin-left: 58.33%; }
.offset-8-xs { margin-left: 66.67%; }
.offset-9-xs { margin-left: 75%; }
.offset-10-xs { margin-left: 83.33%; }
.offset-11-xs { margin-left: 91.67%; }

@media (min-width: 768px) {
  .width-fit-sm { flex: 1 0 auto; }
  .width-expand-sm { flex: 0 0 auto; }
  .width-1-sm { flex: 0 0 8.33%; }
  .width-2-sm { flex: 0 0 16.67%; }
  .width-3-sm { flex: 0 0 25%; }
  .width-4-sm { flex: 0 0 33.33%; }
  .width-5-sm { flex: 0 0 41.67%; }
  .width-6-sm { flex: 0 0 50%; }
  .width-7-sm { flex: 0 0 58.33%; }
  .width-8-sm { flex: 0 0 66.67%; }
  .width-9-sm { flex: 0 0 75%; }
  .width-10-sm { flex: 0 0 83.33%; }
  .width-11-sm { flex: 0 0 91.67%; }
  .width-12-sm { flex: 0 0 100%; }
  .offset-0-sm { margin-left: 0%; }
  .offset-1-sm { margin-left: 8.33%; }
  .offset-2-sm { margin-left: 16.67%; }
  .offset-3-sm { margin-left: 25%; }
  .offset-4-sm { margin-left: 33.33%; }
  .offset-5-sm { margin-left: 41.67%; }
  .offset-6-sm { margin-left: 50%; }
  .offset-7-sm { margin-left: 58.33%; }
  .offset-8-sm { margin-left: 66.67%; }
  .offset-9-sm { margin-left: 75%; }
  .offset-10-sm { margin-left: 83.33%; }
  .offset-11-sm { margin-left: 91.67%; }
}

@media (min-width: 992px) {
  .width-fit-md { flex: 1 0 auto; }
  .width-expand-md { flex: 0 0 auto; }
  .width-1-md { flex: 0 0 8.33%; }
  .width-2-md { flex: 0 0 16.67%; }
  .width-3-md { flex: 0 0 25%; }
  .width-4-md { flex: 0 0 33.33%; }
  .width-5-md { flex: 0 0 41.67%; }
  .width-6-md { flex: 0 0 50%; }
  .width-7-md { flex: 0 0 58.33%; }
  .width-8-md { flex: 0 0 66.67%; }
  .width-9-md { flex: 0 0 75%; }
  .width-10-md { flex: 0 0 83.33%; }
  .width-11-md { flex: 0 0 91.67%; }
  .width-12-md { flex: 0 0 100%; }
  .offset-0-md { margin-left: 0%; }
  .offset-1-md { margin-left: 8.33%; }
  .offset-2-md { margin-left: 16.67%; }
  .offset-3-md { margin-left: 25%; }
  .offset-4-md { margin-left: 33.33%; }
  .offset-5-md { margin-left: 41.67%; }
  .offset-6-md { margin-left: 50%; }
  .offset-7-md { margin-left: 58.33%; }
  .offset-8-md { margin-left: 66.67%; }
  .offset-9-md { margin-left: 75%; }
  .offset-10-md { margin-left: 83.33%; }
  .offset-11-md { margin-left: 91.67%; }
}

@media (min-width: 1200px) {
  .width-fit-lg { flex: 1 0 auto; }
  .width-expand-lg { flex: 0 0 auto; }
  .width-1-lg { flex: 0 0 8.33%; }
  .width-2-lg { flex: 0 0 16.67%; }
  .width-3-lg { flex: 0 0 25%; }
  .width-4-lg { flex: 0 0 33.33%; }
  .width-5-lg { flex: 0 0 41.67%; }
  .width-6-lg { flex: 0 0 50%; }
  .width-7-lg { flex: 0 0 58.33%; }
  .width-8-lg { flex: 0 0 66.67%; }
  .width-9-lg { flex: 0 0 75%; }
  .width-10-lg { flex: 0 0 83.33%; }
  .width-11-lg { flex: 0 0 91.67%; }
  .width-12-lg { flex: 0 0 100%; }
  .offset-0-lg { margin-left: 0%; }
  .offset-1-lg { margin-left: 8.33%; }
  .offset-2-lg { margin-left: 16.67%; }
  .offset-3-lg { margin-left: 25%; }
  .offset-4-lg { margin-left: 33.33%; }
  .offset-5-lg { margin-left: 41.67%; }
  .offset-6-lg { margin-left: 50%; }
  .offset-7-lg { margin-left: 58.33%; }
  .offset-8-lg { margin-left: 66.67%; }
  .offset-9-lg { margin-left: 75%; }
  .offset-10-lg { margin-left: 83.33%; }
  .offset-11-lg { margin-left: 91.67%; }
}
</style>
