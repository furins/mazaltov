import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<header>
			<div className='container'>
				<div className='row space-between'>
					<div className='logo'>
						<Link to='/'>
							<svg
								id="mazal_tov_logo"
								xmlns="http://www.w3.org/2000/svg"

								viewBox="0 0 978 491">

								<g>
									<path d="M221.1,205.9c0,3-1.4,4.5-4.3,4.5H165c-2.8,0-4.3-1.7-4.3-5.1c0-9.9,0.4-24.7,1.1-44.4
		c0.7-19.7,1.1-34.6,1.1-44.4c0-2.8-0.4-4.3-1.3-4.5c-1.1,0.6-7.6,15.7-19.6,45.3c-7,17.4-14.1,34.8-21.1,52.1c-1,2.2-2.2,3.6-3.7,4
		c-0.5,0.1-2.4,0.1-5.9,0.1c-5.1,0-8.1-1-9.1-2.9c-5.3-10.8-12.2-26.4-20.8-46.9c-9.2-21.7-16.1-37.4-20.7-47.1
		c-0.2-0.5-0.6-1-1.3-1.6c-0.7,0.9-1,2.3-1,4.3c0,9.6,0.2,24,0.7,43.1c0.5,19.2,0.7,33.5,0.7,43.1c0,3.4-1.4,5.1-4.1,5.1h-49
		c-2,0-3.2-0.3-3.6-1c-0.4-0.6-0.7-1.7-0.7-3.3c0-10.7,0.5-26.7,1.5-48c1-21.4,1.5-37.4,1.5-48c0-11.3-0.5-32.6-1.5-63.8
		C4,38.3,3.6,26.2,2.8,10.2L2.6,7.7c-0.1-2,2-2.9,6.2-2.9c5.4,0,13.4-0.2,24.2-0.5c10.8-0.3,18.8-0.5,24.2-0.5
		c1.1,0,2.6,2.1,4.5,6.2l42.8,94c3,6.4,5.6,9.5,7.6,9.5c1.1,0,3.4-3.7,6.9-11c9.9-20.5,24.5-51.5,43.8-92.8c1.7-3.8,3.5-5.7,5.4-5.7
		c2.8,0,7.1,0.1,12.8,0.4c5.7,0.3,10,0.4,13,0.4c2.4,0,6.2-0.2,11.2-0.7c5-0.5,8.8-0.7,11.2-0.7c2.9,0,4.4,1.2,4.4,3.5
		c0,11.5-0.4,28.8-1.2,51.7c-0.8,22.9-1.2,40.2-1.2,51.7c0,10.7,0.4,26.6,1.3,47.9C220.7,179.5,221.1,195.4,221.1,205.9z"/>
									<path d="M441.8,206.8c0,1.8-1.2,3-3.7,3.7c-2.9,0.8-12,1.2-27.3,1.2c-14,0-23-0.4-27-1.2c-3.3-0.7-5.4-2.9-6.3-6.6
		c-3.3-14.1-5.9-21.6-7.8-22.6c-1.6-0.7-14.7-1-39.3-1c-16.6,0-25.5,0.4-26.5,1.3c-1.7,1.6-3.5,6.8-5.6,15.7
		c-1.9,8.1-4.1,12.5-6.7,13.2c-3.3,0.8-14.5,1.2-33.4,1.2c-15,0-22.4-1.4-22.4-4.3c0-2.5,11-33.8,33.1-93.7
		c23.9-64.8,36.9-100.4,39-106.9c1.2-3.7,2.5-5.6,4.1-5.6c2.6,0,6.7,0.2,12.2,0.7c5.5,0.5,9.7,0.7,12.4,0.7c2.6,0,6.5-0.2,11.7-0.5
		c5.1-0.3,9-0.5,11.5-0.5c1.9,0,3.6,1.6,5.1,4.8c4.8,10.3,18.8,45.5,41.9,105.6C430.2,172.6,441.8,204.2,441.8,206.8z M337.8,73.2
		c-2.1,4.3-5.5,13.6-10.4,28c-5.3,15.2-7.9,24.2-7.9,26.8c0,1.8,2.9,2.7,8.8,2.9c3,0.2,8,0.3,15,0.3c6.5,0,10-0.8,10.7-2.3
		c0.2-0.5,0.3-1.2,0.3-2.1c0-3.2-2.2-12.1-6.7-26.7C343.1,86.1,339.9,77.2,337.8,73.2z"/>
									<path d="M588.9,212.8c-5.8,0-14.4-0.3-26-0.9c-11.5-0.6-20.2-0.9-26-0.9c-8.2,0-20.5-0.1-36.8-0.3
		c-16.3-0.2-28.6-0.3-36.8-0.3c-3.5,0-5.5-1.1-6-3.4c-0.2-6.3-1.2-15.5-2.9-27.9c-1.2-4.8-1.8-7.5-1.8-8.1c0-0.5,12-19.4,35.9-56.8
		C512.5,77,524.5,56.9,524.5,54c0-1.6-1.3-2.3-3.8-2.3c-6.8,0-17.2,0.2-31,0.6c-13.8,0.4-24.2,0.6-31.2,0.6c-2.2,0-3.2-1.1-3.2-3.4
		c0-3.6,1.1-10.7,3.3-21.1c2.2-10.5,3.3-18,3.3-22.7c0-1.6,1.3-2.3,4-2.3c13.5,0,33.7,0.3,60.8,0.9c27,0.6,47.3,0.9,60.8,0.9
		c2.1,0,3.4,1.1,4,3.4c1.8,7.8,2.6,19,2.6,33.6c0,1.8-0.9,4-2.6,6.6c-6.2,8.9-19.1,28.5-38.9,58.9c-22.5,34.7-33.7,52.9-33.7,54.5
		c0,0.8,0.8,1.2,2.5,1.2c19.8,0,35.1-0.4,45.7-1.2c2.1-0.1,6.8-0.7,14.1-1.8c6.2-1,10.7-1.5,13.6-1.5c1.4,0,2.1,1,2.1,3.1
		c0,15.9-1.4,31.8-4.3,47.7C592.1,211.8,590.9,212.8,588.9,212.8z"/>
									<path d="M812.3,206.8c0,1.8-1.2,3-3.7,3.7c-2.9,0.8-12,1.2-27.3,1.2c-14,0-23-0.4-27-1.2c-3.3-0.7-5.4-2.9-6.3-6.6
		c-3.3-14.1-5.9-21.6-7.8-22.6c-1.6-0.7-14.7-1-39.3-1c-16.6,0-25.5,0.4-26.5,1.3c-1.7,1.6-3.5,6.8-5.6,15.7
		c-1.9,8.1-4.1,12.5-6.7,13.2c-3.3,0.8-14.5,1.2-33.4,1.2c-15,0-22.4-1.4-22.4-4.3c0-2.5,11-33.8,33.1-93.7
		c23.9-64.8,37-100.4,39-106.9c1.2-3.7,2.5-5.6,4.1-5.6c2.6,0,6.7,0.2,12.2,0.7c5.5,0.5,9.7,0.7,12.4,0.7c2.6,0,6.5-0.2,11.7-0.5
		c5.1-0.3,9-0.5,11.5-0.5c1.9,0,3.6,1.6,5.1,4.8c4.8,10.3,18.8,45.5,41.9,105.6C800.7,172.6,812.3,204.2,812.3,206.8z M708.4,73.2
		c-2.1,4.3-5.5,13.6-10.4,28c-5.3,15.2-7.9,24.2-7.9,26.8c0,1.8,2.9,2.7,8.8,2.9c3,0.2,8,0.3,15,0.3c6.5,0,10-0.8,10.7-2.3
		c0.2-0.5,0.3-1.2,0.3-2.1c0-3.2-2.2-12.1-6.7-26.7C713.6,86.1,710.4,77.2,708.4,73.2z"/>
									<path d="M962,213c-8.4,0-19.4-0.2-32.8-0.6c-17.6-0.4-28.5-0.6-32.8-0.7l-43.8-0.6c-4.4,0.1-10.7-0.1-18.9-0.6
		c-2.8-0.5-4.3-2-4.3-4.5c0-10.7,0.2-26.6,0.5-47.9c0.3-21.3,0.5-37.2,0.5-47.9c0-11.3-0.3-28.3-1-51c-0.7-22.6-1-39.6-1-51
		c0-2.1,1.5-3.2,4.4-3.2s7.3,0.1,13.1,0.4c5.8,0.3,10.1,0.4,13,0.4c3.2,0,8-0.2,14.4-0.5c6.4-0.3,11.1-0.5,14.4-0.5
		c1.5,0,2.1,0.9,2.1,2.8l-0.1,1.9c-1.2,18.4-2.5,46-4,82.8l-0.1,38.7c0,12.5,0,21.7,0.1,27.4c0.1,1.2,0.2,2.3,0.3,3.5
		c0.1,1.2,0.8,1.9,2.2,2.2c0.1,0,1.4,0,3.8,0c8.8,0,22-0.5,39.5-1.4c17.5-0.9,30.7-1.4,39.5-1.4c2.6,0,4,1.1,4,3.4
		c0,16.7-1.2,31.1-3.7,43.3c-0.5,2.5-1.5,4.1-3.1,4.5C967.5,212.9,965.5,213,962,213z"/>
								</g>
								<g>
									<path d="M479.9,326.2c0,2-1.1,2.9-3.2,2.9c-3.7,0-18.4-0.7-44.1-2.2c-0.6,24.7-0.9,42-0.9,51.8
		c0,11.5,0.5,28.9,1.4,52.1c0.9,23.2,1.4,40.5,1.4,52.1c0,1.9-0.4,3-1.3,3.5c-0.3,0.2-1.7,0.4-4.1,0.7c-5.9,0.8-14.5,1.2-25.8,1.2
		c-12.6,0-21.5-0.4-26.5-1.2c-2.7-0.5-4.1-2-4.1-4.5c0-11.5,0.5-28.8,1.5-51.9c1-23.1,1.5-40.4,1.5-51.9c0-7.6-0.4-24.6-1.2-51
		c-19.6,2-35.1,2.9-46.8,2.9c-1.6,0-2.3-0.5-2.3-1.5c0-1.3,0.7-5,2.1-11.3c1.6-6.8,2.4-11,2.6-12.5c0.3-4.6,0.6-9.2,1-13.8
		c0.7-7.3,1.9-11,3.5-11c0.2,0,0.9,0.1,2.1,0.1c15.8,2.1,39.2,3.1,70.2,3.1c8.8,0,25-0.9,48.7-2.8c12.7-1,19.1-1.5,19.2-1.5
		c2,0,3.1,0.1,3.4,0.4c0.3,0.2,0.5,1.2,0.6,2.9c0,2.6-0.1,6.3-0.3,11c-0.2,5.2-0.3,8.8-0.3,11c0,2.4,0.3,6,1,10.8
		C479.6,320.3,479.9,323.9,479.9,326.2z"/>
									<path d="M699.3,384.4c0,30.5-9.7,56.1-29.2,76.7c-19.8,20.9-45,31.4-75.4,31.4c-30.2,0-55.3-10.6-75.2-31.7
		c-19.6-20.6-29.3-46.1-29.3-76.4c0-30.4,9.8-56,29.3-76.7c19.9-21.2,45-31.8,75.2-31.8c30,0,55,10.6,75.1,31.8
		C689.4,328.7,699.3,354.2,699.3,384.4z M643.7,384.1c0-14.7-4.4-27.1-13.3-37.4c-9.3-10.8-21.2-16.1-35.6-16.1
		c-13.8,0-25.5,5.6-35,16.7c-9.3,10.8-13.9,23.1-13.9,37.1c0,15,4.3,27.4,13,37.4c9.2,10.5,21.2,15.7,35.9,15.7
		c13.8,0,25.5-5.5,35.2-16.6C639.1,410.4,643.7,398.1,643.7,384.1z"/>
									<path d="M804,487.7c-13.2,0-20.7-0.2-22.6-0.6c-1.9-0.4-3.4-1.8-4.7-4.3c-11.1-22-22.3-44-33.6-66.1
		c-17.7-35.5-26.5-55.6-26.5-60.3c0-7.7,0.3-19.3,0.8-34.8c0.5-15.5,0.8-27.1,0.8-34.8c0-3.6,1-5.4,2.9-5.4c5.9,0,14.8,0.2,26.7,0.7
		c11.9,0.5,20.9,0.7,26.8,0.7c2.4,0,3.7,1,3.7,3.1c0,7.9-0.6,19.8-1.7,35.7c-1.1,15.9-1.7,27.8-1.7,35.7c0,6.1,9.9,27.7,29.8,65
		c5.4-9.7,11.5-21.6,18.3-35.6c9.2-19,13.8-30.6,13.8-34.9c0-7.1-0.1-17.9-0.3-32.2c-0.2-14.3-0.3-25-0.3-32.2
		c0-2.6,0.4-4.1,1.3-4.4h4.7c5.4,0,13.5-0.3,24.4-0.8c10.9-0.5,19-0.8,24.4-0.8c2.9,0,4.4,1.2,4.4,3.5c0,7.5-0.1,18.9-0.4,34.1
		c-0.2,15.2-0.4,26.6-0.4,34.2c0,6.1-9.6,28.3-28.9,66.9c-7.6,13.9-18.6,34.8-33,62.8c-1,2.2-1.6,3.3-2,3.6
		c-0.3,0.2-1.6,0.5-3.7,0.7C822.1,487.5,814.4,487.7,804,487.7z"/>
									<path d="M974.8,316.8c0,17.8-1.6,34.5-4.8,50.1c-3.9,16-7.8,32-11.6,47.9c-0.9,3.6-4.8,5.4-11.7,5.4
		c-7.9,0-12.3-1.6-13.2-4.7c-9.2-31.4-13.8-49.2-13.8-53.5c0-4,0.2-10,0.6-17.9c0.4-7.9,0.6-13.9,0.6-17.9c0-4.4-0.1-11-0.4-19.8
		c-0.3-8.8-0.4-15.4-0.4-19.8c0-3.6,0.9-5.4,2.6-5.4c2.7,0,6.8,0.2,12.3,0.6c5.5,0.4,9.6,0.6,12.3,0.6c2.7,0,6.8-0.2,12.3-0.6
		c5.5-0.4,9.6-0.6,12.3-0.6C973.8,281.4,974.8,293.2,974.8,316.8z M974.8,462.1c0,8.2-2.5,15-7.6,20.5c-5.1,5.4-11.7,8.1-19.9,8.1
		c-8.3,0-15-2.7-20-8.1c-5-5.4-7.6-12.2-7.6-20.5c0-8.2,2.5-15,7.6-20.2c5.1-5.3,11.7-7.9,19.9-7.9c8.1,0,14.7,2.6,19.9,7.9
		S974.8,453.9,974.8,462.1z"/>
								</g>
							</svg></Link>
					</div>
					<div className='link button'>MENU</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
