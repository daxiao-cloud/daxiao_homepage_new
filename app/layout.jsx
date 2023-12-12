import { Providers } from './providers';
import './layout.css';

export default function RootLayout({ children }) {
	return (
		<html
			suppressHydrationWarning
			lang='cn'
			className='bg-gradient-to-r from-cyan-300 to-sky-600'
		>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
