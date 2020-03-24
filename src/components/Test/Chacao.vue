<template>
	<div>
		<slot name="headerContent"></slot>
		<div>
			duanzhiwei
		</div>
		<slot>
			<router-view ref="content" />
		</slot>
	</div>
</template>

<script>
    export default {
        name: "Chacao"
    }
</script>
