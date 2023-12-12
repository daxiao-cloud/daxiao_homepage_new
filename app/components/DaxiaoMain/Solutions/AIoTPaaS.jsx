import { Divider } from '@nextui-org/react';

export function AIoTPaaS() {
	return (
		<div className='aspect-video flex flex-col items-center gap-8 p-8'>
			<div className='w-fit flex flex-col items-center gap-4'>
				<p className='text-4xl'>智能物联网中台</p>
				<Divider />
				<p className='text-xl text-secondary'>AIOT PAAS</p>
			</div>
			<div className='w-full grid grid-rows-[auto_auto_auto] grid-cols-[auto_1fr] gap-4 border border-divider p-4'>
				<div className='text-xl font-bold bg-cyan-400 flex flex-col items-center justify-center px-4'>
					产品方案
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<div className='flex flex-col items-center justify-center bg-rose-300 py-4'>
						<p>交旅融合</p>
					</div>
					<div className='flex flex-col items-center justify-center bg-rose-300 py-4'>
						<p>智慧农业</p>
					</div>
				</div>
				<div className='text-xl font-bold bg-cyan-400 flex flex-col justify-center px-4'>
					智能引擎层
				</div>
				<div className='grid grid-rows-3 grid-cols-3 gap-4'>
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
					<div className='bg-rose-300 flex flex-col items-center justify-center py-3'>
						金乌网络摄像机
					</div>
					<div className='bg-rose-300 flex flex-col items-center justify-center'>
						智能感知终端
					</div>
					<div className='bg-rose-300 flex flex-col items-center justify-center'>
						智能机器人
					</div>
				</div>
				<div className='text-xl font-bold bg-cyan-400 flex flex-col justify-center px-4'>
					基础设施层
				</div>
				<div className='grid grid-cols-3 gap-4'>
					<div className='bg-amber-300 flex flex-col items-center justify-center py-4'>
						智能算力中心
					</div>
					<div className='bg-amber-300 flex flex-col items-center justify-center'>
						网络通信
					</div>
					<div className='bg-amber-300 flex flex-col items-center justify-center'>
						......
					</div>
				</div>
			</div>
		</div>
	);
}
