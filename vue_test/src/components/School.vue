<template>
	<div>
		<h2 @click="showName">名称：{{name}}</h2>
		<h2>地址：{{address}}</h2>
	</div>
</template>

<script>
	//引入一个hunhe
	// import { hunhe, hunhe2 } from '../mixin'

	export default {
		name: 'School',
		data() {
			return {
				name: 'yxs',
				address: '西安',
				x: 666
			}
		}
		// mixins: [hunhe, hunhe2]
	}
</script>