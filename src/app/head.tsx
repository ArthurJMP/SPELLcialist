export default function Head() {
  return [
    <link key="manifest" rel="manifest" href="/manifest.json" />,
    <meta key="theme-color" name="theme-color" content="#16121a" />,
    <link key="preconnect-fonts" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link
      key="preconnect-gstatic"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="fonts"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..700;1,400..700&family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
    />,
  ];
}