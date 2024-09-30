export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Advertising.json","animation.json","animation2.json","animation3.json","assets/around_world.png","assets/blob.svg","assets/blob2.png","assets/blog.jpg","assets/circles.png","assets/circles.svg","assets/circles_variant.png","assets/doodle.jpg","assets/eya.jpg","assets/img1.jpg","assets/img1.webp","assets/img2.jpg","assets/img2.webp","assets/img3.jpg","assets/img3.webp","assets/img4.jpg","assets/img4.webp","assets/logo.png","assets/logo.svg","assets/logo_white.png","assets/logo_white_inline.png","assets/mahdi.jpg","assets/mentor.png","assets/office.png","assets/office_2.png","assets/quote.png","assets/siwar.jpg","assets/squares.svg","assets/stars.png","assets/stars.svg","assets/students_map.png","assets/students_park.jpg","assets/travel.svg","assets/video.mp4","assets/walid.jpg","favicon.ico","favicon.png","gallery/0.jpg","gallery/0.webp","gallery/1.jpg","gallery/1.webp","gallery/10.jpg","gallery/10.webp","gallery/11.jpg","gallery/11.webp","gallery/12.jpg","gallery/12.webp","gallery/13.jpg","gallery/13.webp","gallery/2.jpg","gallery/2.webp","gallery/3.jpg","gallery/3.webp","gallery/4.jpg","gallery/4.webp","gallery/5.jpg","gallery/5.webp","gallery/6.jpg","gallery/6.webp","gallery/7.jpg","gallery/7.webp","gallery/8.jpg","gallery/8.webp","gallery/9.jpg","gallery/9.webp","js/script.js","polygon.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".webp":"image/webp",".mp4":"video/mp4",".js":"text/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.BbhNmkzT.js","app":"_app/immutable/entry/app.CA0WrOHg.js","imports":["_app/immutable/entry/start.BbhNmkzT.js","_app/immutable/chunks/entry.Bkdw26U_.js","_app/immutable/chunks/scheduler.CcEuf84R.js","_app/immutable/entry/app.CA0WrOHg.js","_app/immutable/chunks/scheduler.CcEuf84R.js","_app/immutable/chunks/index.GOEOohA1.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js'))
		],
		routes: [
			{
				id: "/en",
				pattern: /^\/en\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/en/about",
				pattern: /^\/en\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/en/blog",
				pattern: /^\/en\/blog\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/en/blog/[article]",
				pattern: /^\/en\/blog\/([^/]+?)\/?$/,
				params: [{"name":"article","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/en/contact",
				pattern: /^\/en\/contact\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/en/scrolling",
				pattern: /^\/en\/scrolling\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
