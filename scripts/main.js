/**
 * dragonbane-ko — Babele 번역 디렉터리 등록
 *
 * 시스템 UI 라벨은 module.json의 languages 항목(i18n/systems/dragonbane.json)이
 * 처리하므로 이 스크립트는 컴펜디움 번역(Babele)만 담당한다.
 */
Hooks.once("babele.init", (babele) => {
    babele.register({
        module: "dragonbane-ko",
        lang: "ko",
        dir: "translations"
    });
});
