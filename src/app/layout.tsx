import "./globals.css";
import 'animate.css';
import "../../node_modules/@wecre8websites/strapi-page-builder-react/dist/index.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
