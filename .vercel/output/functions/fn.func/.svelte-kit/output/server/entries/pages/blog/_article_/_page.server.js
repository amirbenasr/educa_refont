async function load({ params }) {
  return {
    slug: params.article
  };
}
export {
  load
};
