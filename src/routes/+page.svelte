<script>

	import { page } from "$app/stores";
	import { Avatar } from "@skeletonlabs/skeleton";

</script>
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		{#if $page.data.user}
		<h2 class="h2">Hi {$page.data.user.name}.</h2>
		<Avatar src={$page.data.user.avatar} />
		{:else}
		<h2 class="h2">You are not logged in.</h2>
		{/if}
	</div>
</div>

<style lang="postcss">
</style>
