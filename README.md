# github-issues-board

A front-end board that consumes from Github's api and provide better issues visualization to improve manage and team workflow.

## How to use

The board creates two artificials lanes to hold the issues that has no lane (a specific type of label) and the closeds.
To create lanes to the board, create at github labels with the format `_lane:{number to define the order}:{the lane name}`. Ex.: `_lane:0:Backlog`, `_lane:1:ToDo`, `_lane:2:InProgress`. `_lane:3:Done`.

When the issue is dropped in some lane, the labels will be update.
If dropped on no-lane, will remove all labels with the specific prefixe that identify the lanes.
If dropped on closed, will close the issue.
