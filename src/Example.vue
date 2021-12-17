<template>
	<div>
    <button @click="setData">Click to change</button>
  </div>
</template>

<script>
	export default {
		name: "Example",
		data() {
			return {
				changeTest: 0,
			};
		},
		methods: {
			setData() {
				this.changeTest += 1;
			},
		},
	};
</script>