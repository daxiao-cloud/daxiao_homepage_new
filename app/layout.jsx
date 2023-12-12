import { Providers } from './providers';
import './layout.css';

export default function RootLayout({ children }) {
	return (
		<html
			suppressHydrationWarning
			lang='cn'
			className='bg-gradient-to-r from-cyan-200 to-blue-500'
		>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
