<script lang="ts">
	import RoundedButton from '../../components/buttons/RoundedButton.svelte';
	import SelectableRoundedButton from '../../components/buttons/SelectableRoundedButton.svelte';
	import RoleCard from '../../components/cards/RoleCard.svelte';

	let selectedRoles: string[] = [];

	let selectGroupleader: string | undefined;

	let roles = [
		{
			title: 'Skådespelare',
			text: 'Gillar du att stå på scenen och skådespela? Då är detta rollen för dig! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			selected: false
		},
		{
			title: 'Sångare',
			text: 'Sjunger du i duschen? Då är detta rollen för dig! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			selected: false
		},
		{
			title: 'Dansare',
			text: 'Vill du visa upp dina moves? Då är detta rollen för dig! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			selected: false
		},
		{
			title: 'Musiker',
			text: 'Lorem ipsum dolor sit amet co	sectetur adipisicing elit. Quisquam, voluptatum.',
			selected: false
		},
		{
			title: 'Tekniker',
			text: 'Lorem ipsum dolor sit amet co	sectetur adipisicing elit. Quisquam, voluptatum.',
			selected: false
		},
		{
			title: 'Kostymör',
			text: 'Lorem ipsum dolor sit amet co	sectetur adipisicing elit. Quisquam, voluptatum.',
			selected: false
		},
		{
			title: 'Rekvisitör',
			text: 'Lorem ipsum dolor sit amet co	sectetur adipisicing elit. Quisquam, voluptatum.',
			selected: false
		},
		{
			title: 'Skrivare',
			text: 'Lorem ipsum dolor sit amet co	sectetur adipisicing elit. Quisquam, voluptatum.',
			selected: false
		}
	];
	function handleRole(role: any) {
		if (selectedRoles.includes(role.title)) {
			// Remove selected role from array
			selectedRoles = selectedRoles.filter((selectedRole) => selectedRole !== role.title);
			role.selected = false;
		} else {
			selectedRoles = [...selectedRoles, role.title];
			role.selected = true;
		}
	}
</script>

<section class="roles-container">
	<h2>Sök till årets spex!</h2>
	<p>Vad passar dig då, ditt jävla svin?!</p>
	<div class="roles">
		{#each roles as role}
			<RoleCard cardTitle={role.title} cardText={role.text} />
		{/each}
	</div>
</section>
<section class="application-container">
	<form on:submit|preventDefault action="">
		<h2>Anmäl dig då!</h2>
		<fieldset>
			<legend>Personuppgifter</legend>
			<label for="name">Namn</label>
			<input type="text" name="name" id="name" />
			<label for="email">E-post</label>
			<input type="email" name="email" id="email" />
			<label for="phone">Telefonnummer</label>
			<input type="tel" name="phone" id="phone" />
		</fieldset>
		<fieldset class="role-buttons">
			<legend>Välj roll</legend>
			{#each roles as role}
				<SelectableRoundedButton
					buttonText={role.title}
					selected={selectedRoles.includes(role.title)}
					on:toggleSelected={() => handleRole(role)}
				/>
			{/each}
		</fieldset>
		<fieldset class="group-leader-set">
			<legend>Vill Du Vara Gruppledare?</legend>
			<div>
				<div>
					<label for="groupleader-yes">JAA!</label>
					<input
						id="groupleader-yes"
						name="groupleader-yes"
						value="yes"
						type="radio"
						bind:group={selectGroupleader}
					/>
				</div>
				<div>
					<label for="groupleader-no">Nä, jag är en fegis...</label>
					<input
						id="groupleader-no"
						name="groupleader-no"
						type="radio"
						value="no"
						bind:group={selectGroupleader}
					/>
				</div>
			</div>
		</fieldset>
		<RoundedButton buttonText={'Skicka In'} withLink={false} onForm={true} />
	</form>
</section>

<style>
	section {
		display: flex;
		padding: 3rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100vw;
	}
	.roles-container {
		background-color: var(--color-square-pink);
	}
	.application-container {
		background-color: var(--color-section-yellow);
	}
	h2 {
		font-family: var(--header-font);
		font-size: 3rem;
		text-align: center;
		color: var(--background-color-white);
		text-transform: uppercase;
		max-width: 32rem;
	}
	p {
		font-family: var(--standard-font);
		font-size: 1.25rem;
		text-align: center;
		color: var(--background-color-white);
		margin-bottom: 4rem;
	}

	.roles {
		display: grid;
		justify-items: center;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 1rem;
		align-items: center;
		width: 100vw;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		width: 50vw;
		background-color: var(--color-form-yellow);
		padding: 4rem;
		border-radius: 2rem;
	}
	form h2 {
		color: black;
	}
	.role-buttons {
		display: grid;
		justify-items: center;
		grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
		gap: 1rem;
		align-items: center;
		width: 100%;
	}
	fieldset {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		width: 100%;
		/* border: 2px solid rgba(255, 255, 255, 0.3); */
		border: none;
		padding-inline: 3rem;
		padding-block: 1.5rem;
	}
	legend {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		font-family: var(--header-font);
	}
	label {
		font-family: var(--standard-font);
	}
	input {
		width: 100%;
		height: 2rem;
		border-radius: 1rem;
		border: none;
		padding-inline: 1rem;
		padding-block: 1rem;
		margin-bottom: 1rem;
		border: 2px solid black;
	}
	.group-leader-set div div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
	}
	.group-leader-set div {
		display: flex;
		gap: 1rem;
		justify-content: space-around;
	}
	.group-leader-set label {
		font-family: var(--header-font);
		font-size: 1.5rem;
		flex: 1;
	}
	@media (max-width: 640px) {
		form {
			width: 100%;
			padding: 1rem;
			padding-bottom: 2rem;
			gap: 0.5rem;
		}
		.group-leader-set label {
			font-family: var(--header-font);
			font-size: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
		.application-container {
			padding: 1rem;
		}
		fieldset {
			padding-inline: 1.5rem;
		}
	}
</style>
