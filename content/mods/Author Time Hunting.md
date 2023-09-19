---
title: Author Time Hunting
description: A race against time! How many author times can you get?
author: HiImYolo
authorSteamId:
version: 0.0.2
supported: true
modio: https://mod.io/g/zeepkist/m/author-time-hunting
thumbnail: https://thumb.modcdn.io/mods/ca10/3330554/thumb_1020x2000/at_target.png
controls:
commands:
	- 'Start'
		command: /ath start [duration in seconds]
		description: Start the author time hunting challenge, with a total length of [duration in seconds]
	- 'Skip'
		command: /skip
		description: Skip the current level. A time penalty will be applied.
	- 'Skip Broken'
		command: /broken
		description: Skip the current broken level. No time penalty will be applied.
	- 'Stop'
		command: /ath stop
		description: Stop the challenge.
featured: false
dependency: false
dependencies: ZeepSDK
---
