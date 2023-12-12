import { Divider } from '@nextui-org/react';

export function Transport() {
	return (
		<div className='aspect-video flex flex-col items-center gap-8 p-8'>
			<div className='w-fit flex flex-col items-center gap-4'>
				<p className='text-4xl'>交旅融合</p>
				<Divider />
				<p className='text-xl text-secondary'>TRANSPORTATION AND TOURISM</p>
			</div>
			<div className='w-full grid grid-rows-[auto_auto_auto] grid-cols-[auto_1fr] gap-4 border border-divider p-4'>
				<div className='text-xl font-bold bg-cyan-400 flex flex-col justify-center px-4'>
					智能应用层
				</div>
				<div className='grid grid-cols-4 gap-4'>
					<div className='flex flex-col gap-4 items-center bg-rose-300 py-4'>
						<p className='text-xl font-semibold'>智慧管理服务</p>
						<div className='flex flex-col items-center'>
							<p>指挥调度 | AI慧眼</p>
							<p>无人环卫 | 智慧公厕</p>
						</div>
					</div>
					<div className='flex flex-col gap-4 items-center bg-rose-300 py-4'>
						<p className='text-xl font-semibold'>畅行交通</p>
						<div className='flex flex-col items-center'>
							<p>智能导航 | 智能停车</p>
							<p>自动驾驶服务 | 约车服务</p>
						</div>
					</div>
					<div className='flex flex-col gap-4 items-center bg-rose-300 py-4'>
						<p className='text-xl font-semibold'>沉浸体验</p>
						<div className='flex flex-col items-center'>
							<p>人机交互 | 数字伴游</p>
							<p>虚拟导游（AR/VR）</p>
						</div>
					</div>
					<div className='flex flex-col gap-4 items-center bg-rose-300 py-4'>
						<p className='text-xl font-semibold'>整合营销</p>
						<div className='flex flex-col items-center'>
							<p>游客画像 | 产品分销</p>
							<p>精准推送</p>
						</div>
					</div>
				</div>
				<div className='text-xl font-bold bg-cyan-400 flex flex-col justify-center px-4'>
					智能引擎层
				</div>
				<div className='grid grid-rows-2 grid-cols-3 gap-4'>
					<div className='bg-rose-300 flex flex-col items-center justify-center py-3'>
						音视频传输
					</div>
					<div className='bg-rose-300 flex flex-col items-center justify-center py-3'>
						机器视觉
					</div>
					<div className='bg-rose-300 flex flex-col items-center justify-center py-3'>
						Billing
					</div>
					<div className='bg-rose-300 flex flex-col items-center justify-center py-3'>
						MQTT（接入）
					</div>
					<div className='bg-rose-300 flex flex-col items-center justify-center'>
						LBS（位置）
					</div>
					<div className='bg-rose-300 flex flex-col items-center justify-center'>
						TSDB（存储）
					</div>
				</div>
				<div className='text-xl font-bold bg-cyan-400 flex flex-col justify-center px-4'>
					基础设施层
				</div>
				<div className='grid grid-cols-4 gap-4'>
					<div className='grid grid-rows-4 gap-4'>
						<div className='bg-amber-300 flex flex-col items-center justify-center text-xl font-semibold'>
							智能设备
						</div>
						<div className='bg-amber-300 flex flex-col items-center justify-center py-2'>
							智能视觉设备
						</div>
						<div className='bg-amber-300 flex flex-col items-center justify-center py-2'>
							智能传感器
						</div>
						<div className='bg-amber-300 flex flex-col items-center justify-center py-2'>
							自动驾驶汽车
						</div>
					</div>
					<div className='grid grid-rows-4 gap-4'>
						<div className='bg-amber-300 flex flex-col items-center justify-center text-xl font-semibold'>
							智能算力中心
						</div>
						<div className='bg-amber-300 flex flex-col items-center justify-center py-2'>
							AI计算
						</div>
						<div className='bg-amber-300 flex flex-col items-center justify-center py-2'>
							大数据计算存储
						</div>
						<div className='bg-amber-300 flex flex-col items-center justify-center py-2'>
							安全防护
						</div>
					</div>
					<div className='grid grid-rows-4 gap-4'>
						<div className='bg-amber-300 flex flex-col items-center justify-center text-xl font-semibold'>
							智能地图
						</div>
						<div className='bg-amber-300 flex flex-col items-center justify-center py-2'>
							导航地图
						</div>
						<div className='bg-amber-300 flex flex-col items-center justify-center py-2'>
							高清地图
						</div>
						<div className='bg-amber-300 flex flex-col items-center justify-center py-2'>
							手绘地图
						</div>
					</div>
					<div className='grid grid-rows-4 gap-4'>
						<div className='bg-amber-300 flex flex-col items-center justify-center text-xl font-semibold'>
							智能终端
						</div>
						<div className='bg-amber-300 flex flex-col items-center justify-center py-2'>
							AR/VR设备
						</div>
						<div className='bg-amber-300 flex flex-col items-center justify-center py-2'>
							车载交互屏
						</div>
						<div className='bg-amber-300 flex flex-col items-center justify-center py-2'>
							室外交互屏
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
