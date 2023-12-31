import { Divider, Image, Link } from '@nextui-org/react';
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export function Address() {
	return (
		<div
			id='address'
			className='aspect-video flex flex-col gap-8 p-8 bg-gradient-to-br from-lime-200 to-amber-200'
		>
			<div className='w-fit flex flex-col gap-4'>
				<p className='text-4xl'>科技服务美好生活</p>
				<Divider />
				<p className='text-xl text-secondary'>SCIENCE MAKES LIFE BEAUTIFUL</p>
			</div>
			<div className='flex flex-row justify-evenly gap-8'>
				<Image src='https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/work1.png' />
				<Image src='https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/scape.jpg' />
			</div>
			<Link href='https://surl.amap.com/3RWlpkqbKs'>
				<div className='flex flex-row gap-4 items-center'>
					<MapPinIcon className='h-6 w-6' />
					<div>
						<p className='text-xl'>上海虹桥国际中央商务区虹桥国际展汇1幢3楼</p>
						<p className='text-sm'>上海市闵行区申昆路2377号</p>
					</div>
				</div>
			</Link>
			<Link href='mailto:yunasha@daxiaogroup.com'>
				<div className='flex flex-row gap-4 items-center'>
					<EnvelopeIcon className='h-6 w-6' />
					<p>邮箱：yunasha@daxiaogroup.com</p>
				</div>
			</Link>
		</div>
	);
}
