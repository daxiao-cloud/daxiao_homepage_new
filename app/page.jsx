import { Image } from '@nextui-org/react';
import { DaxiaoNav } from './components/DaxiaoNav';
import { DaxiaoMain } from './components/DaxiaoMain';
import { DaxiaoFooter } from './components/DaxiaoFooter';

export default function Page() {
	return (
		<div className='max-w-screen-xl mx-auto'>
			<DaxiaoNav />
			<DaxiaoMain />
			<DaxiaoFooter />
		</div>
	);
}
