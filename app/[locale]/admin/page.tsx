import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';
import AdminDashboard from '@/components/admin/AdminDashboard';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
