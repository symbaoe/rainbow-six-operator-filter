<!-- TODO FIXME: double scrollbar -->
<script lang="ts">
	import { base } from "$app/paths"
	import { createEventDispatcher, onDestroy, onMount } from "svelte"
	import { fade } from "svelte/transition"
	import { gunNotes } from "$lib/util/gun_notes"
	import { roles, sides, gunTypes, gadgets } from "$lib/data/typenames"
	import { SIDE, type Link, type Operator } from "$lib/data/types"
	import IconExternalLink from "$lib/components/IconExternalLink.svelte"

	export let operator: Operator

	const dispatch = createEventDispatcher()

	$: _gunNotes = gunNotes(operator)

	onMount(() => {
		window.addEventListener("keydown", escHandler)
	})

	onDestroy(() => {
		window.removeEventListener("keydown", escHandler)
	})

	function escHandler(e: KeyboardEvent) {
		if (e.key === "Escape") {
			dispatch("close")
		}
	}

	function generateLinks(op: Operator): Link[] {
		let links: Link[] = [
			{
				url: `https://rainbowsix.fandom.com/wiki/${op.name}`,
				domain: "fandom.com",
			},
		]

		if (op.name !== "Recruit") {
			links.push({
				url: `https://www.ubisoft.com/en-us/game/rainbow-six/siege/game-info/operators/${op.uri}`,
				domain: "ubisoft.com",
			})
			links.push({
				url: `https://r6siegecenter.com/guides/operators/${
					op.side === SIDE.defense ? "defenders" : "attackers"
				}/${op.uri}/`,
				domain: "r6siegecenter.com",
			})
		}

		return links
	}
</script>

{#key operator.name}
	<div
		class="operator-showcase"
		in:fade={{ duration: 300 }}
	>
		<div class="container">
			<div class="wrapper">
				<div class="pic">
					<img
						src="{base}/operators/{operator.uri}-pic.png"
						alt=""
					/>
				</div>

				<div class="details">
					<header class="header">
						<div class="op-icon">
							<img
								src="{base}/operators/{operator.uri}-icon.png"
								alt=""
							/>
						</div>

						<div class="op-summary">
							<h1 class="name">
								{operator.name}
							</h1>
							<div class="side">
								{sides[operator.side]}
							</div>
							<div class="roles">
								<ul>
									{#each operator.roles as role}
										<li>{roles[role]}</li>
									{/each}
								</ul>
							</div>
						</div>
					</header>

					<section class="info info--speed">
						<div class="label">Speed / Armor</div>
						<!-- TODO: maybe get rid of the SPEED type, and have the `speed` prop be
					just a number -->
						<div class="value">
							<div class="speed-armor">
								<div class="speed">
									<div class="title">{operator.speed + 1}-speed</div>
									<div class="indicators indicators--{operator.speed + 1}">
										<span class="indicator" />
										<span class="indicator" />
										<span class="indicator" />
									</div>
								</div>
								<div class="armor">
									<div class="title">{3 - operator.speed}-armor</div>
									<div class="indicators indicators--{3 - operator.speed}">
										<span class="indicator" />
										<span class="indicator" />
										<span class="indicator" />
									</div>
								</div>
							</div>
						</div>
					</section>

					{#each [{ label: "Primary guns", data: operator.gunsPrimary }, { label: "Secondary guns", data: operator.gunsSecondary }] as placement}
						<section class="info info--guns">
							<div class="label">{placement.label}</div>
							<div class="value">
								<div class="weapons">
									{#each placement.data as gun}
										<div class="weapon">
											<div class="weapon-type">{gunTypes[gun.gun.type]}</div>
											<div class="weapon-name">{gun.gun.name}</div>
											{#if gun.gun.note}
											<div class="weapon-scope">
												<span
													class="weapon-note"
													title={gun.gun.note}
												>
													<span class="asterisk">*</span>
												</span>
											</div>
										{/if}
										</div>
									{/each}
								</div>
							</div>
						</section>
					{/each}

					{#if _gunNotes}
						<div class="info info--note">
							<div class="label-offset" />
							<div class="value">
								{#each _gunNotes as note}
									<div class="weapon-note">
										<span class="asterisk">*</span>
										{note}
									</div>
								{/each}
							</div>
						</div>
					{/if}

					<section class="info info--gadgets">
						<div class="label">Gadgets</div>
						<div class="value">
							<div class="weapons">
								{#each operator.gadgets as gadget}
									<div class="weapon">
										<div class="weapon-name">{gadgets[gadget]}</div>
									</div>
								{/each}
							</div>
						</div>
					</section>

					<section class="info">
						<div class="label">Links</div>
						<div class="value">
							<ul>
								{#each generateLinks(operator) as link}
									<li>
										<a
											href={link.url}
											target="_blank"
											rel="noopener"
										>
											{link.domain}
											<IconExternalLink />
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
{/key}

<style lang="sass">
	@import "$lib/sass/variables"

	.operator-showcase
		display: flex
		justify-content: center
		align-items: center

		position: relative
		width: 100%

		&::before
			content: " "
			margin-top: auto

		&::after
			content: " "
			margin-bottom: auto

	.container
		margin: auto
		width: 100%

	.wrapper
		display: flex
		gap: 2rem

		> .pic
			flex: 0 1 18.75rem

			> img
				width: 100%

		> .details
			flex: 100

	.name
		margin: 1rem 0
		font-size: 4rem

	.info
		display: flex
		align-items: start
		margin-bottom: 3rem

		.label,
		.label-offset
			flex: 0 0 10rem
			display: flex
			align-items: center
			text-transform: uppercase
			font-family: $font_ubi
			font-size: 1.5rem

			&.label::after
				flex: 1
				content: " "
				margin: 0 1rem
				height: 1px
				background-color: $color_accent

		.value
			flex: 1
			font-size: 1.2rem

	.indicators
		.indicator
			display: inline-block
			margin-right: .25rem
			width: 1.5rem
			height: 1.5rem
			border: 1px solid transparentize($color_fg, .75)

		&.indicators--1 .indicator:nth-child(1),
		&.indicators--2 .indicator:nth-child(1),
		&.indicators--2 .indicator:nth-child(2),
		&.indicators--3 .indicator:nth-child(1),
		&.indicators--3 .indicator:nth-child(2),
		&.indicators--3 .indicator:nth-child(3)
			background-color: $color_fg
			border-color: $color_fg

	.speed-armor
		display: flex
		justify-self: start
		gap: 2rem

		.title
			margin-bottom: .5rem
			text-align: center

		.speed,
		.armor
			flex: 0 0 content

	ul
		margin: 0

	.header
		display: flex
		align-items: center
		margin-bottom: 2rem

		.op-icon
			flex: 0 0 10rem
			display: flex
			justify-content: center
			align-items: center

			img
				height: 8rem

		.op-summary
			display: flex
			flex-direction: column

			.name
				margin: 0

			.side
				font-weight: bold
				font-size: 1.1em
				text-transform: uppercase

			.roles
				ul
					padding: 0
					list-style: none

					li
						display: inline-block

						&:not(:last-child)::after
							margin-right: .25rem
							content: ","

	.weapons
		.weapon
			display: flex
			margin-bottom: .5rem

			> div
				display: flex
				align-items: center
				justify-content: center
				padding: .5rem .25rem
				text-align: center
				fill: black
				color: black
				background-color: darken($color_fg, 7%)

			.weapon-type
				flex: 1 1 40%

			.weapon-name
				flex: 1 1 40%
				font-family: $font_ubi
				font-size: 1.75rem
				background-color: darken($color_fg, 0%)
				border-left: 2px solid $color_bg
				border-right: 2px solid $color_bg

			.weapon-scope
				flex: 0 1 20%
				white-space: nowrap

				:global(svg)
					margin-right: .25rem

	.weapon-note
		font-size: .7rem
		font-style: italic
		opacity: .5

		.asterisk
			display: inline-block
			color: red
			font-weight: bold
			font-size: 1.5rem
			cursor: help

	@media (max-width: 1000px)
		.pic
			display: none

	@media (max-width: 600px)
		.info
			flex-direction: column

			.label,
			.value
				flex: 1 1 0
				width: 100%

			.label
				margin-bottom: 1rem
</style>
