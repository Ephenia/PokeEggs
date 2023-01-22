// @ts-nocheck
hotkeys('f5', async function (event, handler) {
    event.preventDefault();
    if (player.settings.onRefreshSave.state) {
        await preserveOnSave();
        await createSave();
    }
    preventSave = true;
    location.reload();
});

hotkeys('d', function (event, handler) {
    event.preventDefault();
    if (!player.prefs.debug) return;
    openModal('debugtools', 'Debug Tools');
});