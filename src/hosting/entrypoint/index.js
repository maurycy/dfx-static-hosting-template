// import the canister (using webpack to resolve the JS for you)
import canister from "ic:canisters/hosting";

// use the asset canister's retrieve method to request a file (the `index.html` file from above)
canister.retrieve('index.html').then(htmlBytes => {
  // now that you have the html, decode it and create a new element
  const html = new TextDecoder().decode(new Uint8Array(htmlBytes));
  const el = new DOMParser().parseFromString(html, "text/html");

  // insert your HTML into the bootstrap HTML under the element with id `"app"`
  document.open();
  document.write(html);
  document.close();

  // document.body.replaceChild(el.firstElementChild, document.getElementById('app'));
});
