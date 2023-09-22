// import SEOImg from "../public/assets/images/SEO.jpg"

const SiteMeta = () => {
  return (
    <>
      <title>Domain Plug</title>
      {/* <!-- Common Metadata --> */}
      <meta name="description" content="The Everything ENS Related." />

      {/* <!-- Facebook, WhatsApp, Pinterest, LinkedIn --> */}
      <meta property="og:title" content="Domain Plug" />
      <meta property="og:description" content="The Everything ENS Related." />
      <meta
        property="og:image"
        content="https://ens-lite.vercel.app/public/assets/images/SEO.jpg"
      />
      <meta property="og:url" content="https://ens-lite.vercel.app" />
      <meta property="og:type" content="website" />

      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Domain Plug" />
      <meta name="twitter:description" content="The Everything ENS Related." />
      <meta
        name="twitter:image"
        content="https://ens-lite.vercel.app/public/assets/images/SEO.jpg"
      />
    </>
  );
};

export default SiteMeta;
