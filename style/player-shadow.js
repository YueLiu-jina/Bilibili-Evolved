const style = `<style id="player-shadow-style">
    #bilibiliPlayer,
    #bofqi.mini-player::before
    {
        box-shadow: 0px 2px 8px 0px var(--theme-color-30) !important;
    }
    body.dark #bilibiliPlayer,
    body.dark #bofqi.mini-player::before
    {
        box-shadow: 0px 2px 8px 0px var(--theme-color-20) !important;
    }
</style>`;
resources.applyStyleFromText(style);
export default {
    reload: () => resources.applyStyleFromText(style),
    unload: () => document.getElementById("player-shadow-style").remove(),
};