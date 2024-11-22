import '@/styles/globals.scss';
import '@/styles/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Explore India Tours',
  description: 'Discover the best travel experiences in India',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
