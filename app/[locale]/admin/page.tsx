import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import AdminDashboard from '@/components/admin/AdminDashboard';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function AdminPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-background">
      <AdminDashboard />
    </div>
  );
}
