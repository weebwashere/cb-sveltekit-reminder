<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import LoginWithGuilded from '$lib/client/components/LoginWithGuilded.svelte';
	import { page } from '$app/stores';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">CB Example</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if $page.data.user}
				<a href="/logout">
					<button class="btn variant-ghost-surface flex gap-2">
						<iconify-icon icon="fa-solid:sign-out-alt" />
						Logout
					</button>
				</a>
				{:else}
				<LoginWithGuilded />
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
