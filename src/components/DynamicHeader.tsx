import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function DynamicHeader() {
	const { t } = useTranslation('html');

	return (
		<>
			<Helmet>
				<html lang={t('lang')} />
				<title>{t('title')}</title>
			</Helmet>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</>
	);
}
