export default function headPage() {
  return {
    title: this.meta.title,
    meta: [
      { hid: 'description', name: 'description', content: this.meta.description },
    ],
  };
}
