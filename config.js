new Vue({
	el: '#configReady',
	data: {
		title: '行空工作室',
		subtitle: 'XingKong Studio',
		info: '<p>由三名年轻人在2018.11.05成立的工作室。</p><p>E-mail [ <a href="mailto:xk.studio@yandex.com">xk.studio@yandex.com</a> ]</p>',
		infoCard: {
			name: '行空 | XK<sup style="color: #666;"> <i>[ XingKong ]</i></sup>',
			starttime: '2018.11.05',
			founder: 'LongJie / Sakari / SuQiuX',
			business: '计算机/互联网',
			otherBusiness: '综合',
			introduction: '一群活力四射的年轻人一起成立的工作室。这一开始就是为了玩的，慢慢的，它逐渐的开始开花结果。'
		},
		member: [
			{
				name: '龙介LongJie',
				badge: '室长&创始人',
				content: '一个向着全栈工程师发展的初中生',
				avatarUrl: 'https://gravatar.loli.net/avatar/2d28483c8759f5881628678444901d48?d=mp&v=1.3.10',
				website: 'http://longjie233.top'
			},{
				name: '苏秋SuQiuX',
				badge: '创始人',
				content: '',
				avatarUrl: 'https://suqiux.gitee.io/picture/suqiux.jpg',
				website: ''
			},{
				name: 'Sakari',
				badge: '创始人',
				content: '平时摸鱼的半吊子入门程序员',
				avatarUrl: 'https://portrait.gitee.com/uploads/avatars/user/2744/8232842_sakari124_1603729210.png!avatar200',
				website: ''
			}
		],
		course: [
			{
				time: '2018.11.05',
				text: '创立工作室并取名“天空”'
			},{
				time: '2019.03.09',
				text: '更换正式LOGO'
			},{
				time: '2019.09.06',
				text: '"Zilchhu"加入工作室'
			},{
				time: '2021.02.22',
				text: '"千古罪人"加入工作室 (由创始人之一Sakari，提交推荐书 introduction.py)'				
			},{
				time: '2021.03.01',
				text: '预定工作室更名为“天马”工作室 (今天我与Sakari聊了一些关于工作室的内容)'				
			},{
				time: '2021.03.29',
				text: '我与Sakari又次预定工作室名称又改为“行空”'				
			}
		],
		works: [
			{}
		]
	}
})
