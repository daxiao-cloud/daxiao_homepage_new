import { Divider } from '@nextui-org/react';

export function Introduction() {
	return (
		<div
			id='introduction'
			className='aspect-video flex flex-col gap-8 p-8 bg-gradient-to-b from-zinc-100 to-zinc-300'
		>
			<div className='w-fit flex flex-col gap-4'>
				<p className='text-4xl'>公司介绍</p>
				<Divider />
				<p className='text-xl text-secondary'>ABOUT US</p>
			</div>
			<div className='flex flex-col gap-4'>
				<p className='text-xl'>
					致力于交旅融合、智慧农业、产业互联网等领域的产品研发及能力转化。面向人工智能、车联网、物联网等新一代信息技术，为用户提供全栈自主研发的
					<span className='text-secondary'>“平台+应用”</span>
					智能化解决方案，助力行业企业及最终用户产业数字化。主要产品包括智能AIoT
					PaaS平台、智能网络视觉感知设备、各类 智能传感设备、数字交互平台等。
				</p>
				<p className='text-xl'>
					我们将竭诚以高品质的智能化产品和全方位的贴身服务为您提供优质的用户体验。依托PaaS赋能行业、服务企业，着重打造交旅及农业科技应用标杆示范，目标三年内成为助力区域特色经济发展的第一科技品牌！
				</p>
				<p className='text-xl'>
					我们的使命：
					<span className='text-secondary'>科技服务美好生活！</span>
				</p>
			</div>
		</div>
	);
}
