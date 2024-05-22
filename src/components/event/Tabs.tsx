'use client';
import React, { useState } from 'react';

export const Tabs = () => {
	const [openTab, setOpenTab] = useState<number>(1);

	return (
		// <div className="bg-gray-100 font-sans flex h-screen items-center justify-center">
		// 	<div className="p-8">
		<div className="w-full mx-auto">
			<div className="mb-4 flex space-x-4 bg-gray-100 p-2 rounded-lg shadow-sm">
				<button
					onClick={() => setOpenTab(1)}
					className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
						openTab === 1 ? 'bg-gray-300 text-white' : ''
					}`}
				>
					Comentarios
				</button>
				<button
					onClick={() => setOpenTab(2)}
					className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
						openTab === 2 ? 'bg-gray-300 text-white' : ''
					}`}
				>
					Conferencistas
				</button>
				<button
					onClick={() => setOpenTab(3)}
					className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
						openTab === 3 ? 'bg-gray-300 text-white' : ''
					}`}
				>
					Asistentes
				</button>
			</div>

			{openTab === 1 && (
				<div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4">
					<h2 className="text-2xl font-semibold mb-2 text-blue-600">
						Section 1 Content
					</h2>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nullam aliquam justo nec justo lacinia, vel ullamcorper
						nibh tincidunt.
					</p>
				</div>
			)}

			{openTab === 2 && (
				<div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4">
					<h2 className="text-2xl font-semibold mb-2 text-blue-600">
						Section 2 Content
					</h2>
					<p className="text-gray-700">
						Proin non velit ac purus malesuada venenatis sit amet
						eget lacus. Morbi quis purus id ipsum ultrices aliquet
						Morbi quis.
					</p>
				</div>
			)}

			{openTab === 3 && (
				<div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4">
					<h2 className="text-2xl font-semibold mb-2 text-blue-600">
						Section 3 Content
					</h2>
					<p className="text-gray-700">
						Proin non velit ac purus malesuada venenatis sit amet
						eget lacus. Morbi quis purus id ipsum ultrices aliquet
						Morbi quis.
					</p>
				</div>
			)}
		</div>
		// 	</div>
		// </div>
	);
};
