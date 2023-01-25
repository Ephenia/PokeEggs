// @ts-nocheck
hotkeys('f5', async function (event, handler) {
    event.preventDefault();
    if (player.settings.onRefreshSave.state) {
        await createSave();
    }
    preventForceSave = true;
    saveStatePause = true;
    location.reload();
});

hotkeys('d', function (event, handler) {
    event.preventDefault();
    if (!player.prefs.debug) return;
    openModal('debugtools', 'Debug Tools');
});