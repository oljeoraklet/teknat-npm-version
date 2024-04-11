<script lang="ts">
	import RoleCard from '../../components/cards/RoleCard.svelte';
	import ScriptWriterCard from '../../components/cards/ScriptWriterCard.svelte';
	import StyrelseRoleCard from '../../components/cards/StyrelseRoleCard.svelte';

	type TRole = {
		name: string;
		title: string;
		email?: string;
	};

	const director: TRole = {
		name: 'Adeline Arvidsson',
		title: 'Regissör',
		email: 'regi@spexet.nu'
	};

	const chairman: TRole = {
		name: 'Erika Ansén',
		title: 'Ordförande',
		email: 'ordf@spexet.nu'
	};

	const roles: TRole[] = [
		{
			name: 'Hjalmar Lind',
			title: 'Finansmäster',
			email: 'ekonomi@spexet.nu'
		},
		{
			name: 'Johanna Zettermark Hallesjö',
			title: 'Spexmäster (producent)',
			email: 'producenten@spexet.nu'
		},
		{
			name: 'Felix Wærn',
			title: 'Marknadsmäster (Spons & PR)',
			email: 'marknad@spexet.nu'
		},
		{
			name: 'Vilhelm Månesköld',
			title: 'Middagsspexmäster'
		},
		{
			name: 'Daniel Emanuelsson',
			title: 'Suppleant'
		},
		{
			name: 'Ebba Björk',
			title: 'Suppleant'
		}
	];
</script>

<section>
	<h2>Styrelsen</h2>
	<StyrelseRoleCard roleName={chairman.name} roleTitle={chairman.title} roleMail={chairman.email} />
	<div class="role-container">
		{#each roles as role}
			<StyrelseRoleCard
				roleName={role.name}
				roleTitle={role.title}
				roleMail={role.email ? role.email : ''}
			/>
		{/each}
	</div>
</section>
<section class="produktionen">
	<h2>Produktionen</h2>
	<div class="role-container">
		<StyrelseRoleCard
			roleName={director.name}
			roleTitle={director.title}
			roleMail={director.email}
		/>
		<ScriptWriterCard writers={['Malla Grenfeldt', 'Vilhelm Månesköd', 'Felix Wærn']} />
	</div>
</section>

<style>
	section {
		width: 100vw;
		display: flex;
		gap: 1rem;
		flex-direction: column;
		border-bottom: var(--standard-border);
		justify-content: center;
		align-items: center;
		font-family: var(--header-font);
		padding: var(--standard-padding);
		font-size: 4rem;
		color: white;

		background-color: var(--color-square-pink);
	}
	.produktionen {
		background-color: var(--color-square-orange);
		color: var(--color-black);
	}
	.role-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.produktionen .role-container {
		flex-direction: column;
	}

	@media (max-width: 640px) {
		section {
			font-size: 2rem;
		}
		.role-container {
			flex-direction: column;
		}
	}
</style>
