<script lang="ts">
	import { PUBLIC_REPORT_ERROR_FORM } from "$env/static/public"
	import { base } from "$app/paths"
	import IconExternalLink from "$lib/components/IconExternalLink.svelte"

	const season = {
		link: "https://www.ubisoft.com/en-us/game/rainbow-six/siege/news-updates/5fWCjoCU8toUJiBdMSj0UA/y11s1-designers-notes",
		name: "Y11S1",
	}
</script>

<svelte:head>
	<title>Rainbow Six Operator Filter</title>
</svelte:head>

<div class="wrapper">
	<header class="header">
		<div class="container">
			<h1>
				<img
					class="header-img"
					src="{base}/favicon.png"
					alt=""
				/>
				<span class="app-name"> Rainbow six operator filter </span>
			</h1>

			<div class="nav">
				{#if PUBLIC_REPORT_ERROR_FORM}
					<a
						href={PUBLIC_REPORT_ERROR_FORM}
						target="_blank"
						rel="noopener"
					>
						Report error
						<IconExternalLink />
					</a>
				{/if}
				<a
					href={season.link}
					target="_blank"
					rel="noopener"
					class="season"
				>
					<div class="label">Updated for</div>
					<div class="name">
						{season.name}
						<IconExternalLink />
					</div>
				</a>
			</div>
		</div>
	</header>

	<div class="container page">
		<slot />
	</div>

	<footer class="footer">
		<p>This tool is not affiliated with nor endorsed by Ubisoft.</p>
		<p>All trademarks, logos and brand names are the property of their respective owners.</p>
	</footer>
</div>

<style lang="sass">
	@import "$lib/sass/variables"

	$_color_header_bg: darken($color_bg, 10%)

	:global(*)
		box-sizing: border-box

	:global(html,body)
		min-height: 100vh

	:global(body)
		margin: 0
		overflow: hidden

		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"
		fill: $color_fg
		color: $color_fg

		background-color: $color_bg

		:global(a)
			fill: $color_link
			color: $color_link
			text-decoration: none

			&:hover
				color: lighten($color_link, 10%)
				fill: lighten($color_link, 10%)
				text-decoration: underline

			&:active
				fill: darken($color_link, 10%)
				color: darken($color_link, 10%)

	:global(svg)
		height: .75em
		vertical-align: middle

	:global(h1,h2)
		text-transform: uppercase
		font-family: $font_ubi
		font-weight: normal

	.container
		width: 100%
		max-width: 1600px
		margin: 0 auto
		padding: 0 1rem

	.wrapper
		display: flex
		flex-direction: column
		height: 100vh
		overflow-y: scroll

		.header
			flex: 0 1 content

		.page
			flex: 1

		.footer
			flex: 0 1 content

	.header
		padding: .25rem 0
		background-color: $_color_header_bg

		.container
			display: flex
			justify-content: space-between
			align-items: center

			> h1
				margin: 0
				font-size: 1.75rem
				// flex: 0 100 content
				// white-space: nowrap
				// overflow: hidden
				// text-overflow: ellipsis

			.header-img
				height: 2rem
				vertical-align: middle
				margin-right: .5rem

			.nav
				display: flex
				align-items: center
				gap: 1.5rem

				.season
					padding: .25rem .5rem
					text-align: center

					&:hover
						text-decoration: none
						background-color: lighten($_color_header_bg, 10%)

					.label
						color: lighten($color_bg, 50%)
						font-size: .7rem
						line-height: 1

					.name
						font-size: 1.15rem
						font-weight: bold
						color: $color_fg
						fill: $color_fg

	.footer
		padding: 2em
		text-align: center

		> p
			margin: .5rem 0

	@media (max-width: 500px)
		.header .app-name
			display: none

	@font-face
		font-family: $font_ubi
		src: url("/fonts/R6S-RegItalic.woff2") format("woff2"), url("/fonts/R6S-RegItalic.woff") format("woff")
		font-style: normal
		font-weight: 400
</style>
