import { Providers } from './providers';
import './layout.css';

export default function RootLayout({ children }) {
	return (
		<html
			suppressHydrationWarning
			lang='cn'
			className='light text-foreground bg-background'
		>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
