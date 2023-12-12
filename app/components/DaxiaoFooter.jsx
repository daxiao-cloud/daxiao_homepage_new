import { Link } from '@nextui-org/react';

export function DaxiaoFooter() {
	return (
		<div className='h-16 flex flex-row gap-8 items-center justify-center text-sm'>
			<Link size='sm' href='https://beian.miit.gov.cn/'>
				沪ICP备2022022681号-3
			</Link>
			<p>Copyright © 2023 DaXiao All Rights Reserved. 大晓智能 版权所有</p>
		</div>
	);
}
