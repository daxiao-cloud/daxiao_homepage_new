import {
	Link,
	Image,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/react';

export function DaxiaoNav() {
	return (
		<Navbar>
			<NavbarBrand>
				<Image
					className='h-14'
					src='https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/logo.svg'
				/>
			</NavbarBrand>
			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				<NavbarItem>
					<Link color='foreground' href='#home'>
						首页
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#introduction'>
						公司介绍
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#solutions'>
						解决方案
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						研发引领
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#address'>
						联系我们
					</Link>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
