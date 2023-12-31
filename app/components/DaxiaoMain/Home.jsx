import { Divider } from '@nextui-org/react';

export function Home() {
	return (
		<div
			id='home'
			className='aspect-video flex flex-col items-center justify-center bg-blue-500'
		>
			<div className='flex flex-col items-center justify-center gap-4'>
				<p className='text-6xl'>上海大晓智能科技有限公司</p>
				<Divider />
				<p className='text-2xl text-secondary'>科技服务美好生活</p>
			</div>
		</div>
	);
}
