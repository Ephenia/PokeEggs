// @ts-nocheck
hotkeys('f5', async function (event, handler) {
    event.preventDefault();
    await preserveOnSave();
    await createSave();
    preventSave = true;
    location.reload();
});

hotkeys('d', function (event, handler) {
    event.preventDefault();
    if (!player.prefs.debug) return;
    setModalTitle('Debug Tools');
    openModal('debugtools');
});