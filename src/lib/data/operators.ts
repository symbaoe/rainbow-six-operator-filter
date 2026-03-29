import { guns } from "./guns"
import type { Operator } from "./types"
import { SIDE, GADGET, SPEED, ROLE } from "./types"

function mpVsSmgNote(smg: string): string {
	return `${smg} is classified as a Machine pistol on Ubisoft's site, but here it counts as a Submachine gun.`
}

function arVsDmrNote(dmr: string): string {
	return `${dmr} is classified as an Assault rifle on Ubisoft's site, but here it counts as a Marksman rifle because it doesn't have full-auto fire.`
}

export const operators: Operator[] = [
	{
		uri: "skopos",
		roles: [ROLE.intel],
		name: "Skopós",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.pcx33 },
		],
		gunsSecondary: [
			{ gun: guns.p229 },
		],
		gadgets: [GADGET.impact, GADGET.proxalarm],
	},
	{
		uri: "solid-snake",
		roles: [ROLE.intel],
		name: "Solid Snake",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.f2 },
			{ gun: guns.pmr90a2 },
		],
		gunsSecondary: [
			{ gun: guns.tacit45 },
		],
		gadgets: [GADGET.grenade, GADGET.stun, GADGET.emp, GADGET.smoke, GADGET.sbreach],
	},
	{
		uri: "denari",
		roles: [ROLE.antientry],
		name: "Denari",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.scorpionevo3a1 },
			{ gun: guns.fmg9 },
		],
		gunsSecondary: [
			{ gun: guns.glaive12 },
			{ gun: guns.p226mk25 },
		],
		gadgets: [GADGET.obsblocker, GADGET.dshield],
	},
	{
		uri: "rauora",
		roles: [ROLE.support],
		name: "Rauora",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns._417 },
			{ gun: guns.m249 },
		],
		gunsSecondary: [
			{ gun: guns.reaperMk2 },
			{ gun: guns.gsh18 },
		],
		gadgets: [GADGET.smoke, GADGET.sbreach],
	},
	{
		uri: "striker",
		roles: [ROLE.support],
		name: "Striker",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.m4 },
			{ gun: guns.m249 },
			{ gun: guns.sr25 },
		],
		gunsSecondary: [
			{ gun: guns._57usg },
			{ gun: guns.ita12s },
		],
		gadgets: [GADGET.sbreach, GADGET.claymore, GADGET.grenade, GADGET.hbreach, GADGET.smoke, GADGET.stun, GADGET.emp],
	},
	{
		uri: "sentry",
		roles: [ROLE.support],
		name: "Sentry",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.commando9 },
			{ gun: guns.m870 },
			{ gun: guns.tcsg12 },
		],
		gunsSecondary: [
			{ gun: guns.c75auto },
			{ gun: guns.supershorty },
		],
		gadgets: [GADGET.barbwire, GADGET.bpcamera, GADGET.dshield, GADGET.obsblocker, GADGET.impact, GADGET.nitro, GADGET.proxalarm],
	},
	{
		uri: "deimos",
		roles: [ROLE.intel],
		name: "Deimos",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.ak74m },
			{ gun: guns.m590a1 },
		],
		gunsSecondary: [
			{ gun: guns._44vendetta },
		],
		gadgets: [GADGET.grenade, GADGET.hbreach],
	},
	{
		uri: "tubarao",
		roles: [ROLE.antientry, ROLE.antigadget],
		name: "Tubarão",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.mpx },
			{ gun: guns.ar1550 },
		],
		gunsSecondary: [
			{ gun: guns.p226mk25 }, //
		],
		gadgets: [GADGET.nitro, GADGET.proxalarm],
	},
	{
		uri: "ram",
		roles: [ROLE.breaching, ROLE.intel],
		name: "Ram",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.r4c },
			{ gun: guns.lmge },
		],
		gunsSecondary: [
			{ gun: guns.mk19mm }, //
		],
		gadgets: [GADGET.smoke, GADGET.stun],
	},
	{
		uri: "brava",
		roles: [ROLE.antigadget],
		name: "Brava",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.camrs },
			{ gun: guns.para308 },
		],
		gunsSecondary: [
			{ gun: guns.supershorty },
			{ gun: guns.usp40 },
		],
		gadgets: [GADGET.smoke, GADGET.claymore],
	},
	{
		uri: "grim",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Grim",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns._552commando },
			{ gun: guns.sgcqb },
		],
		gunsSecondary: [
			{ gun: guns.p229 },
			{ gun: guns.bailiff },
		],
		gadgets: [GADGET.emp, GADGET.hbreach, GADGET.claymore],
	},
	{
		uri: "sens",
		roles: [ROLE.support, ROLE.mapcontrol],
		name: "Sens",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.pof9 },
			{ gun: guns._417 },
		],
		gunsSecondary: [
			{ gun: guns.sdp9mm }, //
		],
		gadgets: [GADGET.hbreach, GADGET.claymore, GADGET.grenade],
	},
	{
		uri: "osa",
		roles: [ROLE.intel, ROLE.support],
		name: "Osa",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns._556xi },
			{ gun: guns.pdw9 },
		],
		gunsSecondary: [
			{ gun: guns.pmm }, //
		],
		gadgets: [GADGET.grenade, GADGET.claymore, GADGET.emp],
	},
	{
		uri: "flores",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Flores",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.ar33 },
			{ gun: guns.sr25 },
			{ gun: guns.t95lsw },
		],
		gunsSecondary: [
			{ gun: guns.gsh18 }, //
		],
		gadgets: [GADGET.stun, GADGET.claymore],
	},
	{
		uri: "zero",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Zero",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.sc3000k },
			{ gun: guns.mp7 },
		],
		gunsSecondary: [
			{ gun: guns._57usg },
			{ gun: guns.gonne6 },
			{ gun: guns.handcannon },
		],
		gadgets: [GADGET.hbreach, GADGET.claymore],
	},
	{
		uri: "ace",
		roles: [ROLE.antigadget, ROLE.breaching],
		name: "Ace",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.ak12 },
			{ gun: guns.m1014 },
		],
		gunsSecondary: [
			{ gun: guns.p9 }, //
		],
		gadgets: [GADGET.sbreach, GADGET.claymore],
	},
	{
		uri: "iana",
		roles: [ROLE.intel, ROLE.frontline],
		name: "Iana",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.arx200 },
			{ gun: guns.g36c },
		],
		gunsSecondary: [
			{ gun: guns.mk19mm },
			{ gun: guns.gonne6 },
			{ gun: guns.handcannon },
		],
		gadgets: [GADGET.emp, GADGET.smoke],
	},
	{
		uri: "kali",
		roles: [ROLE.antigadget, ROLE.support],
		name: "Kali",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.csrx300 }, //
		],
		gunsSecondary: [
			{ gun: guns.spsmg9 },
			{ gun: guns.p226mk25 },
			{ gun: guns.c75auto },
		],
		gadgets: [GADGET.sbreach, GADGET.claymore, GADGET.smoke],
	},
	{
		uri: "amaru",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Amaru",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.g8a1 },
			{ gun: guns.supernova },
		],
		gunsSecondary: [
			{ gun: guns.ita12s },
			{ gun: guns.gonne6 },
			{ gun: guns.smg11 },
			{ gun: guns.handcannon },
		],
		gadgets: [GADGET.stun, GADGET.hbreach],
	},
	{
		uri: "nokk",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Nøkk",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.fmg9 },
			{ gun: guns.six12sd },
			{ gun: guns.pmr90a2 },
		],
		gunsSecondary: [
			{ gun: guns.d50 },
			{ gun: guns._57usg },
		],
		gadgets: [GADGET.hbreach, GADGET.grenade, GADGET.emp],
	},
	{
		uri: "gridlock",
		roles: [ROLE.support, ROLE.mapcontrol],
		name: "Gridlock",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.f90 },
			{ gun: guns.m249saw },
		],
		gunsSecondary: [
			{ gun: guns.supershorty },
			{ gun: guns.sdp9mm },
		],
		gadgets: [GADGET.smoke, GADGET.grenade, GADGET.emp],
	},
	{
		uri: "nomad",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Nomad",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.ak74m },
			{ gun: guns.arx200 },
		],
		gunsSecondary: [
			{ gun: guns.prb92 },
			{ gun: guns._44magsemiauto },
		],
		gadgets: [GADGET.sbreach, GADGET.stun],
	},
	{
		uri: "maverick",
		roles: [ROLE.breaching, ROLE.frontline],
		name: "Maverick",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.m4 },
			{ gun: guns.ar1550 },
		],
		gunsSecondary: [
			{ gun: guns._1911tacops },
			{ gun: guns.c75auto },
			{ gun: guns.reaperMk2 },
		],
		gadgets: [GADGET.claymore, GADGET.smoke, GADGET.stun, GADGET.grenade],
	},
	{
		uri: "lion",
		roles: [ROLE.intel, ROLE.mapcontrol],
		name: "Lion",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.v308 },
			{ gun: guns._417 },
			{ gun: guns.sgcqb },
		],
		gunsSecondary: [
			{ gun: guns.lfp586 },
			{ gun: guns.p9 },
		],
		gadgets: [GADGET.stun, GADGET.claymore, GADGET.grenade],
	},
	{
		uri: "finka",
		roles: [ROLE.support, ROLE.frontline],
		name: "Finka",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.spear308 },
			{ gun: guns._6p41 },
			{ gun: guns.sasg12 },
		],
		gunsSecondary: [
			{ gun: guns.pmm },
			{ gun: guns.gsh18 },
		],
		gadgets: [GADGET.smoke, GADGET.stun, GADGET.grenade],
	},
	{
		uri: "dokkaebi",
		roles: [ROLE.intel, ROLE.mapcontrol],
		name: "Dokkaebi",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.bosg122 },
			{ gun: guns.mk14ebr },
		],
		gunsSecondary: [
			{ gun: guns.smg12 },
			{ gun: guns.c75auto },
			{ gun: guns.gonne6 },
			{ gun: guns.handcannon },
		],
		gadgets: [GADGET.smoke, GADGET.stun, GADGET.emp],
	},
	{
		uri: "zofia",
		roles: [ROLE.antigadget, ROLE.breaching],
		name: "Zofia",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.m762 },
			{ gun: guns.lmge },
		],
		gunsSecondary: [
			{ gun: guns.rg15 }, //
		],
		gadgets: [GADGET.claymore, GADGET.hbreach],
	},
	{
		uri: "ying",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Ying",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.t95lsw },
			{ gun: guns.six12 },
		],
		gunsSecondary: [
			{ gun: guns.q929 },
			{ gun: guns.reaperMk2 },
		],
		gadgets: [GADGET.hbreach, GADGET.smoke],
	},
	{
		uri: "jackal",
		roles: [ROLE.intel, ROLE.mapcontrol],
		name: "Jackal",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.c7e },
			{ gun: guns.ita12l },
			{ gun: guns.pdw9 },
		],
		gunsSecondary: [
			{ gun: guns.ita12s },
			{ gun: guns.usp40 },
		],
		gadgets: [GADGET.claymore, GADGET.smoke],
	},
	{
		uri: "hibana",
		roles: [ROLE.breaching, ROLE.frontline],
		name: "Hibana",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.supernova },
			{ gun: guns.type89 },
			{ gun: guns.pmr90a2 },
		],
		gunsSecondary: [
			{ gun: guns.bearing9 },
			{ gun: guns.p229 },
		],
		gadgets: [GADGET.sbreach, GADGET.stun, GADGET.claymore],
	},
	{
		uri: "capitao",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "CAPITÃO",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.para308 },
			{ gun: guns.m249 },
			{ gun: guns.pmr90a2 },
		],
		gunsSecondary: [
			{ gun: guns.prb92 },
			{ gun: guns.gonne6 },
			{ gun: guns.handcannon },
		],
		gadgets: [GADGET.claymore, GADGET.hbreach, GADGET.emp],
	},
	{
		uri: "blackbeard",
		roles: [ROLE.support],
		name: "Blackbeard",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.mk17cqb },
			{ gun: guns.sr25 },
		],
		gunsSecondary: [],
		gadgets: [GADGET.claymore, GADGET.grenade],
	},
	{
		uri: "buck",
		roles: [ROLE.breaching, ROLE.support],
		name: "Buck",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.c8sfw },
			{ gun: guns.camrs },
		],
		gunsSecondary: [
			{ gun: guns.mk19mm }, //
		],
		gadgets: [GADGET.stun, GADGET.claymore],
	},
	{
		uri: "sledge",
		roles: [ROLE.antigadget, ROLE.breaching],
		name: "Sledge",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.l85a2 },
			{ gun: guns.m590a1 },
		],
		gunsSecondary: [
			{ gun: guns.p226mk25 },
			{ gun: guns.reaperMk2 },
		],
		gadgets: [GADGET.grenade, GADGET.stun, GADGET.emp],
	},
	{
		uri: "thatcher",
		roles: [ROLE.antigadget, ROLE.support],
		name: "Thatcher",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.l85a2 },
			{ gun: guns.ar33 },
			{ gun: guns.m590a1 },
			{ gun: guns.pmr90a2 },
		],
		gunsSecondary: [
			{ gun: guns.p226mk25 }, //
		],
		gadgets: [GADGET.sbreach, GADGET.claymore],
	},
	{
		uri: "ash",
		roles: [ROLE.breaching, ROLE.frontline],
		name: "Ash",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.g36c },
			{ gun: guns.r4c },
		],
		gunsSecondary: [
			{ gun: guns.m45meusoc },
			{ gun: guns._57usg },
		],
		gadgets: [GADGET.sbreach, GADGET.claymore],
	},
	{
		uri: "thermite",
		roles: [ROLE.breaching, ROLE.support],
		name: "Thermite",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns._556xi },
			{ gun: guns.m1014 },
		],
		gunsSecondary: [
			{ gun: guns.m45meusoc },
			{ gun: guns._57usg },
			{ gun: guns.ita12s },
		],
		gadgets: [GADGET.smoke, GADGET.stun],
	},
	{
		uri: "montagne",
		roles: [ROLE.intel, ROLE.support],
		name: "Montagne",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.shield }, //
		],
		gunsSecondary: [
			{ gun: guns.p9 },
			{ gun: guns.lfp586 },
		],
		gadgets: [GADGET.hbreach, GADGET.smoke, GADGET.emp],
	},
	{
		uri: "twitch",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Twitch",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.f2 },
			{ gun: guns._417 },
			{ gun: guns.sgcqb },
		],
		gunsSecondary: [
			{ gun: guns.p9 },
			{ gun: guns.lfp586 },
		],
		gadgets: [GADGET.smoke, GADGET.claymore],
	},
	{
		uri: "blitz",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Blitz",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.shield }, //
		],
		gunsSecondary: [
			{ gun: guns.p12 }, //
		],
		gadgets: [GADGET.smoke, GADGET.sbreach],
	},
	{
		uri: "iq",
		roles: [ROLE.intel, ROLE.support],
		name: "IQ",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.auga2 },
			{ gun: guns._552commando },
			{ gun: guns.g8a1 },
		],
		gunsSecondary: [
			{ gun: guns.p12 }, //
		],
		gadgets: [GADGET.sbreach, GADGET.claymore, GADGET.grenade],
	},
	{
		uri: "fuze",
		roles: [ROLE.antigadget],
		name: "Fuze",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.ak12 },
			{ gun: guns._6p41 },
		],
		gunsSecondary: [
			{ gun: guns.pmm },
			{ gun: guns.gsh18 },
		],
		gadgets: [GADGET.sbreach, GADGET.hbreach, GADGET.smoke],
	},
	{
		uri: "glaz",
		roles: [ROLE.intel, ROLE.support],
		name: "Glaz",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.ots03 }, //
		],
		gunsSecondary: [
			{ gun: guns.bearing9 },
			{ gun: guns.gonne6 },
			{ gun: guns.pmm },
			{ gun: guns.handcannon },
		],
		gadgets: [GADGET.smoke, GADGET.grenade, GADGET.claymore],
	},
	{
		uri: "fenrir",
		roles: [ROLE.trapping],
		name: "Fenrir",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.mp7 },
			{ gun: guns.sasg12 },
		],
		gunsSecondary: [
			{ gun: guns._57usg }, //
		],
		gadgets: [GADGET.bpcamera, GADGET.obsblocker],
	},
	{
		uri: "solis",
		roles: [ROLE.intel, ROLE.support],
		name: "Solis",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.p90 },
			{ gun: guns.ita12l },
		],
		gunsSecondary: [
			{ gun: guns.smg11 }, //
		],
		gadgets: [GADGET.bpcamera, GADGET.proxalarm],
	},
	{
		uri: "azami",
		roles: [ROLE.antientry, ROLE.support],
		name: "Azami ",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns._9x19vsn },
			{ gun: guns.acs12 },
		],
		gunsSecondary: [
			{ gun: guns.d50 }, //
		],
		gadgets: [GADGET.impact, GADGET.barbwire],
	},
	{
		uri: "thorn",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Thorn",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.uzk50gi },
			{ gun: guns.m870 },
		],
		gunsSecondary: [
			{ gun: guns._1911tacops },
			{ gun: guns.c75auto },
		],
		gadgets: [GADGET.dshield, GADGET.barbwire],
	},
	{
		uri: "thunderbird",
		roles: [ROLE.support],
		name: "Thunderbird",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.spear308 },
			{ gun: guns.spas15 },
		],
		gunsSecondary: [
			{ gun: guns.bearing9 },
			{ gun: guns.q929 },
			{ gun: guns.ita12s },
		],
		gadgets: [GADGET.barbwire, GADGET.bpcamera, GADGET.dshield],
	},
	{
		uri: "aruni",
		roles: [ROLE.antientry, ROLE.antigadget],
		name: "Aruni",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.p10roni },
			{ gun: guns.mk14ebr },
		],
		gunsSecondary: [
			{ gun: guns.prb92 }, //
		],
		gadgets: [GADGET.bpcamera, GADGET.barbwire],
	},
	{
		uri: "melusi",
		roles: [ROLE.intel, ROLE.crowdcontrol],
		name: "Melusi",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.mp5 },
			{ gun: guns.super90 },
		],
		gunsSecondary: [
			{ gun: guns.rg15 },
			{ gun: guns.ita12s },
		],
		gadgets: [GADGET.impact, GADGET.bpcamera],
	},
	{
		uri: "oryx",
		roles: [ROLE.support],
		name: "Oryx",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.t5smg },
			{ gun: guns.spas12 },
		],
		gunsSecondary: [
			{ gun: guns.bailiff },
			{ gun: guns.usp40 },
			{ gun: guns.reaperMk2 },
		],
		gadgets: [GADGET.barbwire, GADGET.proxalarm],
	},
	{
		uri: "wamai",
		roles: [ROLE.antigadget, ROLE.trapping],
		name: "Wamai",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.auga2 },
			{ gun: guns.mp5k },
		],
		gunsSecondary: [
			{ gun: guns.keratos357 },
			{ gun: guns.p12 },
			{ gun: guns.supershorty },
		],
		gadgets: [GADGET.proxalarm, GADGET.impact],
	},
	{
		uri: "goyo",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Goyo",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.vector45acp },
			{ gun: guns.tcsg12 },
		],
		gunsSecondary: [
			{ gun: guns.p229 }, //
		],
		gadgets: [GADGET.proxalarm, GADGET.bpcamera, GADGET.impact],
	},
	{
		uri: "warden",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Warden",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.mpx },
			{ gun: guns.m590a1 },
		],
		gunsSecondary: [
			{ gun: guns.smg12 },
			{ gun: guns.p10c },
		],
		gadgets: [GADGET.dshield, GADGET.nitro, GADGET.obsblocker],
	},
	{
		uri: "mozzie",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Mozzie",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.p10roni },
			{ gun: guns.commando9 },
		],
		gunsSecondary: [
			{ gun: guns.sdp9mm },
			{ gun: guns.supershorty },
		],
		gadgets: [GADGET.barbwire, GADGET.nitro, GADGET.impact],
	},
	{
		uri: "kaid",
		roles: [ROLE.antientry, ROLE.antigadget],
		name: "Kaid",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.auga3 },
			{ gun: guns.tcsg12 },
		],
		gunsSecondary: [
			{ gun: guns._44magsemiauto },
			{ gun: guns.lfp586 },
		],
		gadgets: [GADGET.barbwire, GADGET.nitro, GADGET.obsblocker],
	},
	{
		uri: "clash",
		roles: [ROLE.intel, ROLE.crowdcontrol],
		name: "Clash",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.shield }, //
		],
		gunsSecondary: [
			{ gun: guns.supershorty },
			{ gun: guns.spsmg9 },
			{ gun: guns.p10c },
		],
		gadgets: [GADGET.barbwire, GADGET.impact],
	},
	{
		uri: "maestro",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Maestro",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.alda556 },
			{ gun: guns.acs12 },
		],
		gunsSecondary: [
			{ gun: guns.keratos357 },
			{ gun: guns.bailiff },
		],
		gadgets: [GADGET.barbwire, GADGET.impact, GADGET.obsblocker],
	},
	{
		uri: "alibi",
		roles: [ROLE.trapping, ROLE.intel],
		name: "Alibi",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.mx4storm },
			{ gun: guns.acs12 },
		],
		gunsSecondary: [
			{ gun: guns.keratos357 },
			{ gun: guns.bailiff },
		],
		gadgets: [GADGET.proxalarm, GADGET.obsblocker],
	},
	{
		uri: "vigil",
		roles: [ROLE.antigadget, ROLE.crowdcontrol],
		name: "Vigil",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.k1a },
			{ gun: guns.bosg122 },
		],
		gunsSecondary: [
			{ gun: guns.smg12 },
			{ gun: guns.c75auto },
		],
		gadgets: [GADGET.bpcamera, GADGET.impact],
	},
	{
		uri: "ela",
		roles: [ROLE.trapping, ROLE.crowdcontrol],
		name: "Ela",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.scorpionevo3a1 },
			{ gun: guns.fo12 },
		],
		gunsSecondary: [
			{ gun: guns.rg15 }, //
		],
		gadgets: [GADGET.barbwire, GADGET.dshield, GADGET.impact],
	},
	{
		uri: "lesion",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Lesion",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.t5smg },
			{ gun: guns.six12sd },
		],
		gunsSecondary: [
			{ gun: guns.supershorty },
			{ gun: guns.q929 },
		],
		gadgets: [GADGET.obsblocker, GADGET.bpcamera],
	},
	{
		uri: "mira",
		roles: [ROLE.intel, ROLE.support],
		name: "Mira",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.vector45acp },
			{ gun: guns.ita12l },
		],
		gunsSecondary: [
			{ gun: guns.ita12s },
			{ gun: guns.usp40 },
		],
		gadgets: [GADGET.proxalarm, GADGET.nitro],
	},
	{
		uri: "echo",
		roles: [ROLE.intel, ROLE.crowdcontrol],
		name: "Echo",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.mp5sd },
			{ gun: guns.supernova },
		],
		gunsSecondary: [
			{ gun: guns.bearing9 },
			{ gun: guns.p229 },
		],
		gadgets: [GADGET.impact, GADGET.dshield],
	},
	{
		uri: "caveira",
		roles: [ROLE.intel, ROLE.crowdcontrol],
		name: "Caveira",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.m12 },
			{ gun: guns.spas15 },
		],
		gunsSecondary: [
			{ gun: guns.luison }, //
		],
		gadgets: [GADGET.proxalarm, GADGET.impact, GADGET.obsblocker],
	},
	{
		uri: "valkyrie",
		roles: [ROLE.intel, ROLE.support],
		name: "Valkyrie",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.mpx },
			{ gun: guns.spas12 },
		],
		gunsSecondary: [
			{ gun: guns.d50 }, //
		],
		gadgets: [GADGET.impact, GADGET.nitro],
	},
	{
		uri: "frost",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Frost",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns._9mmc1 },
			{ gun: guns.super90 },
		],
		gunsSecondary: [
			{ gun: guns.ita12s },
			{ gun: guns.mk19mm },
		],
		gadgets: [GADGET.bpcamera, GADGET.dshield],
	},
	{
		uri: "mute",
		roles: [ROLE.antigadget, ROLE.crowdcontrol],
		name: "Mute",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.mp5k },
			{ gun: guns.m590a1 },
		],
		gunsSecondary: [
			{ gun: guns.smg11 },
			{ gun: guns.p226mk25 },
		],
		gadgets: [GADGET.bpcamera, GADGET.nitro],
	},
	{
		uri: "smoke",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Smoke",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.m590a1 },
			{ gun: guns.fmg9 },
		],
		gunsSecondary: [
			{ gun: guns.smg11 },
			{ gun: guns.p226mk25 },
		],
		gadgets: [GADGET.proxalarm, GADGET.barbwire],
	},
	{
		uri: "castle",
		roles: [ROLE.antientry, ROLE.support],
		name: "Castle",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.ump45 },
			{ gun: guns.m1014 },
		],
		gunsSecondary: [
			{ gun: guns.m45meusoc },
			{ gun: guns._57usg },
			{ gun: guns.supershorty },
		],
		gadgets: [GADGET.proxalarm, GADGET.bpcamera],
	},
	{
		uri: "pulse",
		roles: [ROLE.intel, ROLE.support],
		name: "Pulse",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.ump45 },
			{ gun: guns.m1014 },
		],
		gunsSecondary: [
			{ gun: guns.m45meusoc },
			{ gun: guns._57usg },
			{ gun: guns.reaperMk2 },
		],
		gadgets: [GADGET.dshield, GADGET.obsblocker, GADGET.nitro],
	},
	{
		uri: "doc",
		roles: [ROLE.support],
		name: "Doc",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.mp5 },
			{ gun: guns.p90 },
			{ gun: guns.sgcqb },
		],
		gunsSecondary: [
			{ gun: guns.p9 },
			{ gun: guns.lfp586 },
			{ gun: guns.bailiff },
		],
		gadgets: [GADGET.bpcamera, GADGET.barbwire],
	},
	{
		uri: "rook",
		roles: [ROLE.support],
		name: "Rook",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.mp5 },
			{ gun: guns.p90 },
			{ gun: guns.sgcqb },
		],
		gunsSecondary: [
			{ gun: guns.p9 },
			{ gun: guns.lfp586 },
			{ gun: guns.reaperMk2 },
		],
		gadgets: [GADGET.proxalarm, GADGET.impact, GADGET.obsblocker],
	},
	{
		uri: "jager",
		roles: [ROLE.antigadget, ROLE.support],
		name: "Jäger",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns._416ccarbine },
			{ gun: guns.m870 },
		],
		gunsSecondary: [
			{ gun: guns.p12 }, //
		],
		gadgets: [GADGET.obsblocker, GADGET.bpcamera],
	},
	{
		uri: "bandit",
		roles: [ROLE.antientry, ROLE.antigadget],
		name: "Bandit",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.mp7 },
			{ gun: guns.m870 },
		],
		gunsSecondary: [
			{ gun: guns.p12 }, //
		],
		gadgets: [GADGET.barbwire, GADGET.nitro],
	},
	{
		uri: "tachanka",
		roles: [ROLE.antientry, ROLE.crowdcontrol],
		name: "Tachanka",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns._9x19vsn },
			{ gun: guns.dp27 },
		],
		gunsSecondary: [
			{ gun: guns.bearing9 },
			{ gun: guns.gsh18 },
			{ gun: guns.pmm },
		],
		gadgets: [GADGET.barbwire, GADGET.proxalarm, GADGET.dshield],
	},
	{
		uri: "kapkan",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Kapkan",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.sasg12 },
			{ gun: guns._9x19vsn },
		],
		gunsSecondary: [
			{ gun: guns.pmm },
			{ gun: guns.gsh18 },
		],
		gadgets: [GADGET.barbwire, GADGET.bpcamera],
	},
]
