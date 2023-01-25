"use strict";
//@ts-nocheck
function Notify(name, args = null, uuid = null, resume = false) {
    let opts = { message: null, dismissible: true, status: null, timeout: 5000, actions: null };
    const notifUUID = uuid !== null ? uuid : UUID();
    switch (name) {
        case 'createSave':
            opts.message = `Game saved.`;
            opts.status = 'green';
            opts.actions = [{
                    dismiss: true
                }];
            break;
        case 'eggReady':
            opts.message = `<div class="toast-align"><img class="toast-egg-icon" src="${dataImg.eggIcon}">Egg is ready to hatch!</div>`;
            opts.status = 'alert';
            opts.actions = [{
                    text: 'Party',
                    function: function () {
                        player.prefs.nav = nameToNav('Party');
                        renderMain(player.prefs.nav);
                        dismissNotif();
                    },
                    dismiss: true
                }];
            break;
        case 'errorMsg':
            opts.message = args;
            opts.status = 'danger';
            opts.actions = [{
                    dismiss: true
                }];
            break;
        case 'itemMissing':
            opts.message = `You are missing the ${itemData[args].name}.`;
            opts.status = 'danger';
            opts.actions = [{
                    dismiss: true
                }];
            break;
        case 'itemRecieve':
            opts.message = `<div class="toast-align">Obtained ${args[1]}x <div class="toast-item-icon"><img src="assets/items/${itemData[args[0]].src}.png"></div>${itemData[args[0]].name}.</div>`;
            opts.status = 'green';
            break;
        case 'itemUnusable':
            opts.message = `Item function is not yet implemented.`;
            opts.status = 'danger';
            opts.actions = [{
                    dismiss: true
                }];
            break;
        default:
        // code block
    }
    SnackBar(opts);
    if (!resume) {
        player.notifyTrack[notifUUID] = { name: name, args: args !== null ? args : null };
    }
    if (opts.timeout > 0) {
        setTimeout(() => {
            dismissNotif();
        }, opts.timeout);
    }
    function dismissNotif() {
        delete player.notifyTrack[notifUUID];
    }
}
function resumeNotify() {
    for (const notif in player.notifyTrack) {
        const thisNotif = player.notifyTrack[notif];
        Notify(thisNotif.name, thisNotif.args, notif, true);
    }
}
