export default () => {
  return new Response(
    `<!DOCTYPE html>
<html>
<head>
  <title>A static website</title>
  <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</head>
<body>
  <div data-netlify-identity-menu></div>
  <div data-netlify-identity-button>Login with Netlify Identity</div>
</body>
</html>`,
    { headers: { "Content-Type": "text/html" } }
  );
};
