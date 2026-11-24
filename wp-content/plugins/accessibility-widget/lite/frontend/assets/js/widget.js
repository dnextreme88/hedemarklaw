/*!
      * WebYes Accessibility Widget v1.0.0
      * (c) 2026 webyes
      */
"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __glob = (map) => (path) => {
    var fn = map[path];
    if (fn) return fn();
    throw new Error("Module not found in bundle: " + path);
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/locales/am.json
  var require_am = __commonJS({
    "src/locales/am.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u12E8\u1270\u12F0\u122B\u123D\u1290\u1275 \u121D\u1293\u120C",
        Close: "\u12DD\u130B",
        "Text and Reading": "\u133D\u1211\u134D \u12A5\u1293 \u1295\u1263\u1265",
        "Navigation and Interaction": "\u12A0\u1230\u1233 \u12A5\u1293 \u1218\u1235\u1270\u130B\u1265\u122D",
        "Text Align": "\u12E8\u133D\u1211\u134D \u12A0\u1230\u120B\u1208\u134D",
        "Align Left": "\u130D\u122B \u12A0\u1230\u120D\u134D",
        "Align Center": "\u1218\u1203\u120D \u12A0\u1230\u120D\u134D",
        "Align Right": "\u12C8\u12F0 \u1240\u129D \u12A0\u1230\u120D\u134D",
        "Adjust Font Size": "\u12E8\u134A\u12F0\u120D \u1218\u1320\u1295 \u12A0\u1235\u1270\u12AB\u12AD\u120D",
        "Highlight Title": "\u122D\u12D5\u1235 \u12A0\u1309\u120D\u1270\u12CD \u12A0\u1233\u12ED",
        "Highlight Links": "\u12A0\u1308\u1293\u129E\u127D\u1295 \u12A0\u1309\u120D\u1270\u12CD \u12A0\u1233\u12ED",
        "Readable Font": "\u1208\u121B\u1295\u1260\u1265 \u1240\u120B\u120D \u134A\u12F0\u120D",
        "Color and Contrast": "\u1240\u1208\u121D \u12A5\u1293 \u1295\u1345\u1345\u122D",
        "Dark Contrast": "\u1328\u1208\u121B \u1295\u133D\u133D\u122D",
        "Light Contrast": "\u1265\u122D\u1203\u1293\u12CA \u1295\u133D\u133D\u122D",
        "High Contrast": "\u12A8\u134D\u1270\u129B \u1295\u133D\u133D\u122D",
        "High Saturation": "\u12A8\u134D\u1270\u129B \u1219\u120C\u1275",
        "Low Saturation": "\u12DD\u1245\u1270\u129B \u1219\u120C\u1275",
        Monochrome: "\u1290\u1320\u120B \u1240\u1208\u121D",
        Tools: "\u1218\u1233\u122A\u12EB\u12CE\u127D",
        "Reading Guide": "\u12E8\u1295\u1263\u1265 \u1218\u1218\u122A\u12EB",
        "Big Cursor": "\u1275\u120D\u1245 \u1320\u124B\u121A",
        "Increase Font Size": "\u12E8\u134A\u12F0\u120D \u1218\u1320\u1295 \u1328\u121D\u122D",
        "Decrease Font Size": "\u12E8\u134A\u12F0\u120D \u1218\u1320\u1295 \u12A0\u1233\u1295\u1235",
        "Letter Spacing": "\u12E8\u134A\u12F0\u120D \u12AD\u134D\u1270\u1275",
        "Line Height": "\u12E8\u1218\u1235\u1218\u122D \u1241\u1218\u1275",
        "Font Weight": "\u12E8\u134A\u12F0\u120D \u12CD\u134D\u1228\u1275",
        "Dyslexia Font": "\u12E8\u12F2\u1235\u120C\u12AD\u1232\u12EB \u134A\u12F0\u120D",
        Language: "\u124B\u1295\u124B",
        "Accessibility widget": "\u12E8\u1270\u12F0\u122B\u123D\u1290\u1275 \u121D\u1293\u120C\u1295 \u12AD\u1348\u1275",
        "Accessibility Profiles": "\u12E8\u1270\u12F0\u122B\u123D\u1290\u1275 \u1218\u1308\u1208\u132B\u12CE\u127D",
        "Cognitive Disability": "\u12E8\u130D\u1295\u12DB\u1264 \u1309\u12F5\u1208\u1275",
        "Seizure Safe": "\u12A8\u1218\u1295\u1240\u1325\u1240\u1325 \u12F0\u1205\u1293",
        "Accessibility statement": "\u12E8\u1270\u12F0\u122B\u123D\u1290\u1275 \u1218\u130D\u1208\u132B",
        ADHD: "ADHD",
        "Low Vision": "\u12DD\u1245\u1270\u129B \u12A5\u12ED\u1273",
        "Pause Animations": "\u12A0\u1292\u121C\u123D\u1296\u127D\u1295 \u12A0\u1241\u121D",
        "Animation paused": "\u12A5\u1290\u121B \u1246\u121F\u120D",
        "Reset all settings": "\u1245\u1295\u1265\u122E\u127D\u1295 \u12F3\u130D\u121D \u12A0\u1235\u1300\u121D\u122D",
        "Shortcut:": "\u12A0\u124B\u122B\u132D:",
        "Epilepsy Safe Mode": "\u12A8\u121A\u1325\u120D \u1260\u123D\u1273 \u12F0\u1205\u1293 \u1201\u1290\u1273",
        "Mute sounds": "\u12F5\u121D\u1346\u127D\u1295 \u12A0\u1325\u134B",
        "Page read": "\u1308\u133D \u121B\u1295\u1260\u1265",
        "Page read controls": "\u12E8\u1308\u133D \u1295\u1263\u1265 \u1218\u1246\u1323\u1320\u122A\u12EB\u12CE\u127D",
        Pause: "\u1208\u12A0\u134D\u1273 \u12A0\u1241\u121D",
        Resume: "\u1240\u1325\u120D",
        Stop: "\u12A0\u1241\u121D",
        Settings: "\u1245\u1295\u1265\u122E\u127D",
        Speed: "\u134D\u1325\u1290\u1275",
        Voice: "\u12F5\u121D\u1345",
        "Close accessibility menu": "\u12E8\u1270\u12F0\u122B\u123D\u1290\u1275 \u121D\u1293\u120C\u1295 \u12DD\u130B",
        "Back to accessibility menu": "\u12C8\u12F0 \u1270\u12F0\u122B\u123D\u1290\u1275 \u121D\u1293\u120C \u1270\u1218\u1208\u1235",
        "Search languages": "\u124B\u1295\u124B\u12CE\u127D\u1295 \u1348\u120D\u130D",
        "Selected language": "\u12E8\u1270\u1218\u1228\u1320 \u124B\u1295\u124B",
        "View accessibility statement (opens in new window)": "\u12E8\u1270\u12F0\u122B\u123D\u1290\u1275 \u1218\u130D\u1208\u132B\u1295 \u12ED\u1218\u120D\u12A8\u1271 (\u1260\u12A0\u12F2\u1235 \u1218\u1235\u12AE\u1275 \u12ED\u12A8\u1348\u1273\u120D)",
        "Visit CookieYes website (opens in new window)": "\u12E8CookieYes \u12F5\u1228-\u1308\u133D\u1295 \u12ED\u130E\u1265\u1299 (\u1260\u12A0\u12F2\u1235 \u1218\u1235\u12AE\u1275 \u12ED\u12A8\u1348\u1273\u120D)",
        "Reset all accessibility settings to default": "\u1201\u1209\u1295\u121D \u12E8\u1270\u12F0\u122B\u123D\u1290\u1275 \u1245\u1295\u1265\u122E\u127D \u12C8\u12F0 \u1290\u1263\u122A \u12F3\u130D\u121D \u12A0\u1235\u1300\u121D\u122D"
      };
    }
  });

  // src/locales/ar.json
  var require_ar = __commonJS({
    "src/locales/ar.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0642\u0627\u0626\u0645\u0629 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
        Close: "\u0625\u063A\u0644\u0627\u0642",
        "Text and Reading": "\u0627\u0644\u0646\u0635 \u0648\u0627\u0644\u0642\u0631\u0627\u0621\u0629",
        "Navigation and Interaction": "\u0627\u0644\u062A\u0646\u0642\u0644 \u0648\u0627\u0644\u062A\u0641\u0627\u0639\u0644",
        "Text Align": "\u0645\u062D\u0627\u0630\u0627\u0629 \u0627\u0644\u0646\u0635",
        "Align Left": "\u0645\u062D\u0627\u0630\u0627\u0629 \u0644\u0644\u064A\u0633\u0627\u0631",
        "Align Center": "\u062A\u0648\u0633\u064A\u0637",
        "Align Right": "\u0645\u062D\u0627\u0630\u0627\u0629 \u0644\u0644\u064A\u0645\u064A\u0646",
        "Adjust Font Size": "\u0636\u0628\u0637 \u062D\u062C\u0645 \u0627\u0644\u062E\u0637",
        "Highlight Title": "\u062A\u0645\u064A\u064A\u0632 \u0627\u0644\u0639\u0646\u0648\u0627\u0646",
        "Highlight Links": "\u062A\u0645\u064A\u064A\u0632 \u0627\u0644\u0631\u0648\u0627\u0628\u0637",
        "Readable Font": "\u062E\u0637 \u0645\u0642\u0631\u0648\u0621",
        "Color and Contrast": "\u0627\u0644\u0644\u0648\u0646 \u0648\u0627\u0644\u062A\u0628\u0627\u064A\u0646",
        "Dark Contrast": "\u062A\u0628\u0627\u064A\u0646 \u062F\u0627\u0643\u0646",
        "Light Contrast": "\u062A\u0628\u0627\u064A\u0646 \u0641\u0627\u062A\u062D",
        "High Contrast": "\u062A\u0628\u0627\u064A\u0646 \u0639\u0627\u0644\u064A",
        "High Saturation": "\u062A\u0634\u0628\u0639 \u0639\u0627\u0644\u064A",
        "Low Saturation": "\u062A\u0634\u0628\u0639 \u0645\u0646\u062E\u0641\u0636",
        Monochrome: "\u0623\u062D\u0627\u062F\u064A \u0627\u0644\u0644\u0648\u0646",
        Tools: "\u0627\u0644\u0623\u062F\u0648\u0627\u062A",
        "Reading Guide": "\u062F\u0644\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0621\u0629",
        "Big Cursor": "\u0645\u0624\u0634\u0631 \u0643\u0628\u064A\u0631",
        "Increase Font Size": "\u0632\u064A\u0627\u062F\u0629 \u062D\u062C\u0645 \u0627\u0644\u062E\u0637",
        "Decrease Font Size": "\u062A\u0642\u0644\u064A\u0644 \u062D\u062C\u0645 \u0627\u0644\u062E\u0637",
        "Letter Spacing": "\u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0628\u064A\u0646 \u0627\u0644\u062D\u0631\u0648\u0641",
        "Line Height": "\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u0633\u0637\u0631",
        "Font Weight": "\u0633\u0645\u0643 \u0627\u0644\u062E\u0637",
        "Dyslexia Font": "\u062E\u0637 \u0639\u0633\u0631 \u0627\u0644\u0642\u0631\u0627\u0621\u0629",
        Language: "\u0627\u0644\u0644\u063A\u0629",
        "Accessibility widget": "\u0641\u062A\u062D \u0642\u0627\u0626\u0645\u0629 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
        "Accessibility Profiles": "\u0645\u0644\u0641\u0627\u062A \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
        "Cognitive Disability": "\u0627\u0644\u0625\u0639\u0627\u0642\u0629 \u0627\u0644\u0645\u0639\u0631\u0641\u064A\u0629",
        "Seizure Safe": "\u0622\u0645\u0646 \u0645\u0646 \u0627\u0644\u0646\u0648\u0628\u0627\u062A",
        "Accessibility statement": "\u0628\u064A\u0627\u0646 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
        ADHD: "\u0641\u0631\u0637 \u0627\u0644\u062D\u0631\u0643\u0629 \u0648\u0646\u0642\u0635 \u0627\u0644\u0627\u0646\u062A\u0628\u0627\u0647",
        "Low Vision": "\u0636\u0639\u0641 \u0627\u0644\u0628\u0635\u0631",
        "Pause Animations": "\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0645\u062A\u062D\u0631\u0643\u0629",
        "Animation paused": "\u062A\u0645 \u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u062D\u0631\u0643\u0629 \u0645\u0624\u0642\u062A\u064B\u0627",
        "Reset all settings": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
        "Shortcut:": "\u0627\u062E\u062A\u0635\u0627\u0631:",
        "Epilepsy Safe Mode": "\u0648\u0636\u0639 \u0622\u0645\u0646 \u0644\u0644\u0635\u0631\u0639",
        "Mute sounds": "\u0643\u062A\u0645 \u0627\u0644\u0623\u0635\u0648\u0627\u062A",
        "Page read": "\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0635\u0641\u062D\u0629",
        "Page read controls": "\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062A\u062D\u0643\u0645 \u0641\u064A \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0635\u0641\u062D\u0629",
        Pause: "\u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A",
        Resume: "\u0627\u0633\u062A\u0626\u0646\u0627\u0641",
        Stop: "\u0625\u064A\u0642\u0627\u0641",
        Settings: "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
        Speed: "\u0627\u0644\u0633\u0631\u0639\u0629",
        Voice: "\u0627\u0644\u0635\u0648\u062A",
        "Close accessibility menu": "\u0625\u063A\u0644\u0627\u0642 \u0642\u0627\u0626\u0645\u0629 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
        "Back to accessibility menu": "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0642\u0627\u0626\u0645\u0629 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
        "Search languages": "\u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0644\u063A\u0627\u062A",
        "Selected language": "\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629",
        "View accessibility statement (opens in new window)": "\u0639\u0631\u0636 \u0628\u064A\u0627\u0646 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 (\u064A\u0641\u062A\u062D \u0641\u064A \u0646\u0627\u0641\u0630\u0629 \u062C\u062F\u064A\u062F\u0629)",
        "Visit CookieYes website (opens in new window)": "\u0632\u064A\u0627\u0631\u0629 \u0645\u0648\u0642\u0639 CookieYes (\u064A\u0641\u062A\u062D \u0641\u064A \u0646\u0627\u0641\u0630\u0629 \u062C\u062F\u064A\u062F\u0629)",
        "Reset all accessibility settings to default": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u062C\u0645\u064A\u0639 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A"
      };
    }
  });

  // src/locales/bg.json
  var require_bg = __commonJS({
    "src/locales/bg.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u041C\u0435\u043D\u044E \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E\u0441\u0442",
        Close: "\u0417\u0430\u0442\u0432\u043E\u0440\u0438",
        "Text and Reading": "\u0422\u0435\u043A\u0441\u0442 \u0438 \u0447\u0435\u0442\u0435\u043D\u0435",
        "Navigation and Interaction": "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0438 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",
        "Text Align": "\u041F\u043E\u0434\u0440\u0430\u0432\u043D\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0442\u0435\u043A\u0441\u0442\u0430",
        "Align Left": "\u041F\u043E\u0434\u0440\u0430\u0432\u043D\u0438 \u0432\u043B\u044F\u0432\u043E",
        "Align Center": "\u041F\u043E\u0434\u0440\u0430\u0432\u043D\u0438 \u0432 \u0446\u0435\u043D\u0442\u044A\u0440\u0430",
        "Align Right": "\u041F\u043E\u0434\u0440\u0430\u0432\u043D\u0438 \u0432\u0434\u044F\u0441\u043D\u043E",
        "Adjust Font Size": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043D\u0430 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043D\u0430 \u0448\u0440\u0438\u0444\u0442\u0430",
        "Highlight Title": "\u041E\u0442\u043A\u0440\u043E\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435\u0442\u043E",
        "Highlight Links": "\u041E\u0442\u043A\u0440\u043E\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0440\u044A\u0437\u043A\u0438\u0442\u0435",
        "Readable Font": "\u0427\u0435\u0442\u0438\u043C \u0448\u0440\u0438\u0444\u0442",
        "Color and Contrast": "\u0426\u0432\u044F\u0442 \u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "Dark Contrast": "\u0422\u044A\u043C\u0435\u043D \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "Light Contrast": "\u0421\u0432\u0435\u0442\u044A\u043B \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "High Contrast": "\u0412\u0438\u0441\u043E\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "High Saturation": "\u0412\u0438\u0441\u043E\u043A\u0430 \u043D\u0430\u0441\u0438\u0442\u0435\u043D\u043E\u0441\u0442",
        "Low Saturation": "\u041D\u0438\u0441\u043A\u0430 \u043D\u0430\u0441\u0438\u0442\u0435\u043D\u043E\u0441\u0442",
        Monochrome: "\u041C\u043E\u043D\u043E\u0445\u0440\u043E\u043C\u0435\u043D",
        Tools: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438",
        "Reading Guide": "\u0420\u044A\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0437\u0430 \u0447\u0435\u0442\u0435\u043D\u0435",
        "Big Cursor": "\u0413\u043E\u043B\u044F\u043C \u043A\u0443\u0440\u0441\u043E\u0440",
        "Increase Font Size": "\u0423\u0432\u0435\u043B\u0438\u0447\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043D\u0430 \u0448\u0440\u0438\u0444\u0442\u0430",
        "Decrease Font Size": "\u041D\u0430\u043C\u0430\u043B\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043D\u0430 \u0448\u0440\u0438\u0444\u0442\u0430",
        "Letter Spacing": "\u0420\u0430\u0437\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0431\u0443\u043A\u0432\u0438\u0442\u0435",
        "Line Height": "\u0412\u0438\u0441\u043E\u0447\u0438\u043D\u0430 \u043D\u0430 \u0440\u0435\u0434\u0430",
        "Font Weight": "\u0414\u0435\u0431\u0435\u043B\u0438\u043D\u0430 \u043D\u0430 \u0448\u0440\u0438\u0444\u0442\u0430",
        "Dyslexia Font": "\u0428\u0440\u0438\u0444\u0442 \u0437\u0430 \u0434\u0438\u0441\u043B\u0435\u043A\u0441\u0438\u044F",
        Language: "\u0415\u0437\u0438\u043A",
        "Accessibility widget": "\u041E\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u044E \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E\u0441\u0442",
        "Accessibility Profiles": "\u041F\u0440\u043E\u0444\u0438\u043B\u0438 \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E\u0441\u0442",
        "Cognitive Disability": "\u041A\u043E\u0433\u043D\u0438\u0442\u0438\u0432\u043D\u0430 \u0443\u0432\u0440\u0435\u0434\u0435\u043D\u043E\u0441\u0442",
        "Seizure Safe": "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E \u0437\u0430 \u0435\u043F\u0438\u043B\u0435\u043F\u0441\u0438\u044F",
        "Accessibility statement": "\u0414\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u044F \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E\u0441\u0442",
        ADHD: "ADHD",
        "Low Vision": "\u0421\u043B\u0430\u0431\u043E \u0437\u0440\u0435\u043D\u0438\u0435",
        "Pause Animations": "\u0421\u043F\u0440\u0438 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438\u0442\u0435",
        "Animation paused": "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F\u0442\u0430 \u0435 \u0441\u043F\u0440\u044F\u043D\u0430",
        "Reset all settings": "\u041D\u0443\u043B\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438\u0442\u0435",
        "Shortcut:": "\u041F\u0440\u044F\u043A \u043F\u044A\u0442:",
        "Epilepsy Safe Mode": "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u0435\u043D \u0440\u0435\u0436\u0438\u043C \u043F\u0440\u0438 \u0435\u043F\u0438\u043B\u0435\u043F\u0441\u0438\u044F",
        "Mute sounds": "\u0417\u0430\u0433\u043B\u0443\u0448\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0437\u0432\u0443\u0446\u0438\u0442\u0435",
        "Page read": "\u0427\u0435\u0442\u0435\u043D\u0435 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0442\u0430",
        "Page read controls": "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0438 \u0437\u0430 \u0447\u0435\u0442\u0435\u043D\u0435 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0442\u0430",
        Pause: "\u041F\u0430\u0443\u0437\u0430",
        Resume: "\u041F\u0440\u043E\u0434\u044A\u043B\u0436\u0438",
        Stop: "\u0421\u043F\u0440\u0438",
        Settings: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
        Speed: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442",
        Voice: "\u0413\u043B\u0430\u0441",
        "Close accessibility menu": "\u0417\u0430\u0442\u0432\u0430\u0440\u044F\u043D\u0435 \u043D\u0430 \u043C\u0435\u043D\u044E\u0442\u043E \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E\u0441\u0442",
        "Back to accessibility menu": "\u041D\u0430\u0437\u0430\u0434 \u043A\u044A\u043C \u043C\u0435\u043D\u044E\u0442\u043E \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E\u0441\u0442",
        "Search languages": "\u0422\u044A\u0440\u0441\u0435\u043D\u0435 \u043D\u0430 \u0435\u0437\u0438\u0446\u0438",
        "Selected language": "\u0418\u0437\u0431\u0440\u0430\u043D \u0435\u0437\u0438\u043A",
        "View accessibility statement (opens in new window)": "\u041F\u0440\u0435\u0433\u043B\u0435\u0434 \u043D\u0430 \u0434\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u044F\u0442\u0430 \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E\u0441\u0442 (\u043E\u0442\u0432\u0430\u0440\u044F \u0441\u0435 \u0432 \u043D\u043E\u0432 \u043F\u0440\u043E\u0437\u043E\u0440\u0435\u0446)",
        "Visit CookieYes website (opens in new window)": "\u041F\u043E\u0441\u0435\u0442\u0435\u0442\u0435 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u0430 \u043D\u0430 CookieYes (\u043E\u0442\u0432\u0430\u0440\u044F \u0441\u0435 \u0432 \u043D\u043E\u0432 \u043F\u0440\u043E\u0437\u043E\u0440\u0435\u0446)",
        "Reset all accessibility settings to default": "\u0412\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E\u0441\u0442 \u043F\u043E \u043F\u043E\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043D\u0435"
      };
    }
  });

  // src/locales/bn.json
  var require_bn = __commonJS({
    "src/locales/bn.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0985\u09AD\u09BF\u0997\u09AE\u09CD\u09AF\u09A4\u09BE \u09AE\u09C7\u09A8\u09C1",
        Close: "\u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8",
        "Text and Reading": "\u099F\u09C7\u0995\u09CD\u09B8\u099F \u098F\u09AC\u0982 \u09AA\u09A1\u09BC\u09BE",
        "Navigation and Interaction": "\u09A8\u09C7\u09AD\u09BF\u0997\u09C7\u09B6\u09A8 \u098F\u09AC\u0982 \u09AE\u09BF\u09A5\u09B8\u09CD\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE",
        "Text Align": "\u099F\u09C7\u0995\u09CD\u09B8\u099F \u09AA\u09CD\u09B0\u09BE\u09A8\u09CD\u09A4\u09BF\u0995\u0995\u09B0\u09A3",
        "Align Left": "\u09AC\u09BE\u09AE \u09A6\u09BF\u0995\u09C7 \u09B8\u09BE\u09B0\u09BF\u09AC\u09A6\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8",
        "Align Center": "\u09AE\u09BE\u099D\u09C7 \u09B8\u09BE\u09B0\u09BF\u09AC\u09A6\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8",
        "Align Right": "\u09A1\u09BE\u09A8\u09C7 \u09B8\u09BE\u09B0\u09BF\u09AC\u09A6\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8",
        "Adjust Font Size": "\u09AB\u09A8\u09CD\u099F \u09B8\u09BE\u0987\u099C \u09B8\u09BE\u09AE\u099E\u09CD\u099C\u09B8\u09CD\u09AF \u0995\u09B0\u09C1\u09A8",
        "Highlight Title": "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE \u0989\u099C\u09CD\u099C\u09CD\u09AC\u09B2 \u0995\u09B0\u09C1\u09A8",
        "Highlight Links": "\u09B2\u09BF\u0999\u09CD\u0995\u0997\u09C1\u09B2\u09BF \u0989\u099C\u09CD\u099C\u09CD\u09AC\u09B2 \u0995\u09B0\u09C1\u09A8",
        "Readable Font": "\u09AA\u09A0\u09A8\u09C0\u09AF\u09BC \u09AB\u09A8\u09CD\u099F",
        "Color and Contrast": "\u09B0\u0982 \u098F\u09AC\u0982 \u0995\u09A8\u099F\u09CD\u09B0\u09BE\u09B8\u09CD\u099F",
        "Dark Contrast": "\u0997\u09BE\u09A2\u09BC \u09AC\u09C8\u09B8\u09BE\u09A6\u09C3\u09B6\u09CD\u09AF",
        "Light Contrast": "\u09B9\u09BE\u09B2\u0995\u09BE \u09AC\u09C8\u09B8\u09BE\u09A6\u09C3\u09B6\u09CD\u09AF",
        "High Contrast": "\u0989\u099A\u09CD\u099A \u09AC\u09C8\u09B8\u09BE\u09A6\u09C3\u09B6\u09CD\u09AF",
        "High Saturation": "\u0989\u099A\u09CD\u099A \u09B8\u09AE\u09CD\u09AA\u09C3\u0995\u09CD\u09A4\u09BF",
        "Low Saturation": "\u09A8\u09BF\u09AE\u09CD\u09A8 \u09B8\u09AE\u09CD\u09AA\u09C3\u0995\u09CD\u09A4\u09BF",
        Monochrome: "\u098F\u0995\u09B0\u0999\u09BE",
        Tools: "\u09B8\u09B0\u099E\u09CD\u099C\u09BE\u09AE",
        "Reading Guide": "\u09AA\u09A1\u09BC\u09BE\u09B0 \u0997\u09BE\u0987\u09A1",
        "Big Cursor": "\u09AC\u09A1\u09BC \u0995\u09BE\u09B0\u09CD\u09B8\u09B0",
        "Increase Font Size": "\u09AB\u09A8\u09CD\u099F \u09B8\u09BE\u0987\u099C \u09AC\u09BE\u09A1\u09BC\u09BE\u09A8",
        "Decrease Font Size": "\u09AB\u09A8\u09CD\u099F \u09B8\u09BE\u0987\u099C \u0995\u09AE\u09BE\u09A8",
        "Letter Spacing": "\u0985\u0995\u09CD\u09B7\u09B0 \u09AC\u09CD\u09AF\u09AC\u09A7\u09BE\u09A8",
        "Line Height": "\u09B2\u09BE\u0987\u09A8 \u0989\u099A\u09CD\u099A\u09A4\u09BE",
        "Font Weight": "\u09AB\u09A8\u09CD\u099F \u09AA\u09C1\u09B0\u09C1\u09A4\u09CD\u09AC",
        "Dyslexia Font": "\u09A1\u09BE\u0987\u09B8\u09B2\u09C7\u0995\u09CD\u09B8\u09BF\u09AF\u09BC\u09BE \u09AB\u09A8\u09CD\u099F",
        Language: "\u09AD\u09BE\u09B7\u09BE",
        "Accessibility widget": "\u0985\u09AD\u09BF\u0997\u09AE\u09CD\u09AF\u09A4\u09BE \u09AE\u09C7\u09A8\u09C1 \u0996\u09CB\u09B2\u09C1\u09A8",
        "Accessibility Profiles": "\u0985\u09AD\u09BF\u0997\u09AE\u09CD\u09AF\u09A4\u09BE \u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2",
        "Cognitive Disability": "\u099C\u09CD\u099E\u09BE\u09A8\u09C0\u09AF\u09BC \u0985\u0995\u09CD\u09B7\u09AE\u09A4\u09BE",
        "Seizure Safe": "\u09AE\u09C3\u0997\u09C0\u09B0\u09CB\u0997\u09C0\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09A8\u09BF\u09B0\u09BE\u09AA\u09A6",
        "Accessibility statement": "\u0985\u09AD\u09BF\u0997\u09AE\u09CD\u09AF\u09A4\u09BE \u09AC\u09BF\u09AC\u09C3\u09A4\u09BF",
        ADHD: "ADHD",
        "Low Vision": "\u09B8\u09CD\u09AC\u09B2\u09CD\u09AA \u09A6\u09C3\u09B7\u09CD\u099F\u09BF",
        "Pause Animations": "\u0985\u09CD\u09AF\u09BE\u09A8\u09BF\u09AE\u09C7\u09B6\u09A8 \u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8",
        "Animation paused": "\u0985\u09CD\u09AF\u09BE\u09A8\u09BF\u09AE\u09C7\u09B6\u09A8 \u09A5\u09BE\u09AE\u09BE\u09A8\u09CB \u09B9\u09AF\u09BC\u09C7\u099B\u09C7",
        "Reset all settings": "\u09B8\u09AC \u09B8\u09C7\u099F\u09BF\u0982\u09B8 \u09B0\u09BF\u09B8\u09C7\u099F \u0995\u09B0\u09C1\u09A8",
        "Shortcut:": "\u09B6\u09B0\u09CD\u099F\u0995\u09BE\u099F:",
        "Epilepsy Safe Mode": "\u09AE\u09C3\u0997\u09C0\u09B0\u09CB\u0997 \u09A8\u09BF\u09B0\u09BE\u09AA\u09A6 \u09AE\u09CB\u09A1",
        "Mute sounds": "\u09B6\u09AC\u09CD\u09A6 \u09A8\u09BF\u0983\u09B6\u09AC\u09CD\u09A6 \u0995\u09B0\u09C1\u09A8",
        "Page read": "\u09AA\u09C3\u09B7\u09CD\u09A0\u09BE \u09AA\u09A1\u09BC\u09C1\u09A8",
        "Page read controls": "\u09AA\u09C3\u09B7\u09CD\u09A0\u09BE \u09AA\u09A1\u09BC\u09BE\u09B0 \u09A8\u09BF\u09AF\u09BC\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3",
        Pause: "\u09AC\u09BF\u09B0\u09A4\u09BF",
        Resume: "\u09AA\u09C1\u09A8\u09B0\u09BE\u09AF\u09BC \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8",
        Stop: "\u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8",
        Settings: "\u09B8\u09C7\u099F\u09BF\u0982\u09B8",
        Speed: "\u0997\u09A4\u09BF",
        Voice: "\u0995\u09A3\u09CD\u09A0\u09B8\u09CD\u09AC\u09B0",
        "Close accessibility menu": "\u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8\u09BF\u09AC\u09BF\u09B2\u09BF\u099F\u09BF \u09AE\u09C7\u09A8\u09C1 \u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8",
        "Back to accessibility menu": "\u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8\u09BF\u09AC\u09BF\u09B2\u09BF\u099F\u09BF \u09AE\u09C7\u09A8\u09C1\u09A4\u09C7 \u09AB\u09BF\u09B0\u09C7 \u09AF\u09BE\u09A8",
        "Search languages": "\u09AD\u09BE\u09B7\u09BE \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8",
        "Selected language": "\u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09BF\u09A4 \u09AD\u09BE\u09B7\u09BE",
        "View accessibility statement (opens in new window)": "\u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8\u09BF\u09AC\u09BF\u09B2\u09BF\u099F\u09BF \u09AC\u09BF\u09AC\u09C3\u09A4\u09BF \u09A6\u09C7\u0996\u09C1\u09A8 (\u09A8\u09A4\u09C1\u09A8 \u0989\u0987\u09A8\u09CD\u09A1\u09CB\u09A4\u09C7 \u0996\u09CB\u09B2\u09C7)",
        "Visit CookieYes website (opens in new window)": "CookieYes \u0993\u09AF\u09BC\u09C7\u09AC\u09B8\u09BE\u0987\u099F \u09A6\u09C7\u0996\u09C1\u09A8 (\u09A8\u09A4\u09C1\u09A8 \u0989\u0987\u09A8\u09CD\u09A1\u09CB\u09A4\u09C7 \u0996\u09CB\u09B2\u09C7)",
        "Reset all accessibility settings to default": "\u09B8\u09AE\u09B8\u09CD\u09A4 \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8\u09BF\u09AC\u09BF\u09B2\u09BF\u099F\u09BF \u09B8\u09C7\u099F\u09BF\u0982\u09B8 \u09A1\u09BF\u09AB\u09B2\u09CD\u099F\u09C7 \u09B0\u09BF\u09B8\u09C7\u099F \u0995\u09B0\u09C1\u09A8"
      };
    }
  });

  // src/locales/ca.json
  var require_ca = __commonJS({
    "src/locales/ca.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Men\xFA d'accessibilitat",
        Close: "Tancar",
        "Text and Reading": "Text i lectura",
        "Navigation and Interaction": "Navegaci\xF3 i interacci\xF3",
        "Text Align": "Alineaci\xF3 del text",
        "Align Left": "Alinear a l'esquerra",
        "Align Center": "Centrar",
        "Align Right": "Alinear a la dreta",
        "Adjust Font Size": "Ajustar la mida de la font",
        "Highlight Title": "Destacar t\xEDtol",
        "Highlight Links": "Destacar enlla\xE7os",
        "Readable Font": "Font llegible",
        "Color and Contrast": "Color i contrast",
        "Dark Contrast": "Contrast fosc",
        "Light Contrast": "Contrast clar",
        "High Contrast": "Alt contrast",
        "High Saturation": "Alta saturaci\xF3",
        "Low Saturation": "Baixa saturaci\xF3",
        Monochrome: "Monocrom",
        Tools: "Eines",
        "Reading Guide": "Guia de lectura",
        "Big Cursor": "Cursor gran",
        "Increase Font Size": "Augmentar mida de la font",
        "Decrease Font Size": "Reduir mida de la font",
        "Letter Spacing": "Espaiat entre lletres",
        "Line Height": "Al\xE7ada de l\xEDnia",
        "Font Weight": "Gruix de la font",
        "Dyslexia Font": "Font per a disl\xE8xia",
        Language: "Idioma",
        "Accessibility widget": "Obrir men\xFA d'accessibilitat",
        "Accessibility Profiles": "Perfils d'accessibilitat",
        "Cognitive Disability": "Discapacitat cognitiva",
        "Seizure Safe": "Segur per a epil\xE8psia",
        "Accessibility statement": "Declaraci\xF3 d'accessibilitat",
        ADHD: "TDAH",
        "Low Vision": "Baixa visi\xF3",
        "Pause Animations": "Aturar animacions",
        "Animation paused": "Animaci\xF3 en pausa",
        "Reset all settings": "Restablir configuraci\xF3",
        "Shortcut:": "Drecera:",
        "Epilepsy Safe Mode": "Mode segur per a l'epil\xE8psia",
        "Mute sounds": "Silenciar els sons",
        "Page read": "Lectura de la p\xE0gina",
        "Page read controls": "Controls de lectura",
        Pause: "Pausa",
        Resume: "Reprendre",
        Stop: "Aturar",
        Settings: "Configuraci\xF3",
        Speed: "Velocitat",
        Voice: "Veu",
        "Close accessibility menu": "Tancar el men\xFA d'accessibilitat",
        "Back to accessibility menu": "Tornar al men\xFA d'accessibilitat",
        "Search languages": "Cercar idiomes",
        "Selected language": "Idioma seleccionat",
        "View accessibility statement (opens in new window)": "Veure la declaraci\xF3 d'accessibilitat (s'obre en una finestra nova)",
        "Visit CookieYes website (opens in new window)": "Visitar el lloc web de CookieYes (s'obre en una finestra nova)",
        "Reset all accessibility settings to default": "Restablir tota la configuraci\xF3 d'accessibilitat"
      };
    }
  });

  // src/locales/cs.json
  var require_cs = __commonJS({
    "src/locales/cs.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "P\u0159\xEDstupnostn\xED menu",
        Close: "Zav\u0159\xEDt",
        "Text and Reading": "Text a \u010Dten\xED",
        "Navigation and Interaction": "Navigace a interakce",
        "Text Align": "Zarovn\xE1n\xED textu",
        "Align Left": "Zarovnat vlevo",
        "Align Center": "Zarovnat na st\u0159ed",
        "Align Right": "Zarovnat vpravo",
        "Adjust Font Size": "Nastavit velikost p\xEDsma",
        "Highlight Title": "Zv\xFDraznit nadpis",
        "Highlight Links": "Zv\xFDraznit odkazy",
        "Readable Font": "\u010Citeln\xFD font",
        "Color and Contrast": "Barva a kontrast",
        "Dark Contrast": "Tmav\xFD kontrast",
        "Light Contrast": "Sv\u011Btl\xFD kontrast",
        "High Contrast": "Vysok\xFD kontrast",
        "High Saturation": "Vysok\xE1 saturace",
        "Low Saturation": "N\xEDzk\xE1 saturace",
        Monochrome: "Monochromatick\xFD",
        Tools: "N\xE1stroje",
        "Reading Guide": "Pr\u016Fvodce \u010Dten\xEDm",
        "Big Cursor": "Velk\xFD kurzor",
        "Increase Font Size": "Zv\u011Bt\u0161it velikost p\xEDsma",
        "Decrease Font Size": "Zmen\u0161it velikost p\xEDsma",
        "Letter Spacing": "Mezery mezi p\xEDsmeny",
        "Line Height": "V\xFD\u0161ka \u0159\xE1dku",
        "Font Weight": "Tlou\u0161\u0165ka p\xEDsma",
        "Dyslexia Font": "Dyslexick\xFD font",
        Language: "Jazyk",
        "Accessibility widget": "Otev\u0159\xEDt p\u0159\xEDstupnostn\xED menu",
        "Accessibility Profiles": "P\u0159\xEDstupnostn\xED profily",
        "Cognitive Disability": "Kognitivn\xED posti\u017Een\xED",
        "Seizure Safe": "Bezpe\u010Dn\xE9 pro epilepsii",
        "Accessibility statement": "Prohl\xE1\u0161en\xED o p\u0159\xEDstupnosti",
        ADHD: "ADHD",
        "Low Vision": "Slab\xFD zrak",
        "Pause Animations": "Zastavit animace",
        "Animation paused": "Animace pozastavena",
        "Reset all settings": "Obnovit nastaven\xED",
        "Shortcut:": "Zkratka:",
        "Epilepsy Safe Mode": "Re\u017Eim bezpe\u010Dn\xFD pro epilepsii",
        "Mute sounds": "Ztlumit zvuky",
        "Page read": "\u010C\xEDst str\xE1nku",
        "Page read controls": "Ovl\xE1d\xE1n\xED \u010Dten\xED str\xE1nky",
        Pause: "Pozastavit",
        Resume: "Pokra\u010Dovat",
        Stop: "Zastavit",
        Settings: "Nastaven\xED",
        Speed: "Rychlost",
        Voice: "Hlas",
        "Close accessibility menu": "Zav\u0159\xEDt nab\xEDdku p\u0159\xEDstupnosti",
        "Back to accessibility menu": "Zp\u011Bt do nab\xEDdky p\u0159\xEDstupnosti",
        "Search languages": "Hledat jazyky",
        "Selected language": "Vybran\xFD jazyk",
        "View accessibility statement (opens in new window)": "Zobrazit prohl\xE1\u0161en\xED o p\u0159\xEDstupnosti (otev\u0159e se v nov\xE9m okn\u011B)",
        "Visit CookieYes website (opens in new window)": "Nav\u0161t\xEDvit web CookieYes (otev\u0159e se v nov\xE9m okn\u011B)",
        "Reset all accessibility settings to default": "Obnovit v\u0161echna nastaven\xED p\u0159\xEDstupnosti na v\xFDchoz\xED"
      };
    }
  });

  // src/locales/da.json
  var require_da = __commonJS({
    "src/locales/da.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Tilg\xE6ngelighedsmenu",
        Close: "Luk",
        "Text and Reading": "Tekst og l\xE6sning",
        "Navigation and Interaction": "Navigation og interaktion",
        "Text Align": "Tekstjustering",
        "Align Left": "Venstrejuster",
        "Align Center": "Centrer",
        "Align Right": "H\xF8jrejuster",
        "Adjust Font Size": "Juster skriftst\xF8rrelse",
        "Highlight Title": "Fremh\xE6v titel",
        "Highlight Links": "Fremh\xE6v links",
        "Readable Font": "L\xE6sbar skrifttype",
        "Color and Contrast": "Farve og kontrast",
        "Dark Contrast": "M\xF8rk kontrast",
        "Light Contrast": "Lys kontrast",
        "High Contrast": "H\xF8j kontrast",
        "High Saturation": "H\xF8j m\xE6tning",
        "Low Saturation": "Lav m\xE6tning",
        Monochrome: "Monokrom",
        Tools: "V\xE6rkt\xF8jer",
        "Reading Guide": "L\xE6seguide",
        "Big Cursor": "Stor mark\xF8r",
        "Increase Font Size": "For\xF8g skriftst\xF8rrelse",
        "Decrease Font Size": "Formindsk skriftst\xF8rrelse",
        "Letter Spacing": "Bogstavafstand",
        "Line Height": "Linjeh\xF8jde",
        "Font Weight": "Skrifttykkelse",
        "Dyslexia Font": "Skrifttype til ordblindhed",
        Language: "Sprog",
        "Accessibility widget": "\xC5bn tilg\xE6ngelighedsmenu",
        "Accessibility Profiles": "Tilg\xE6ngelighedsprofiler",
        "Cognitive Disability": "Kognitivt handicap",
        "Seizure Safe": "Anfaldsikker",
        "Accessibility statement": "Tilg\xE6ngelighedserkl\xE6ring",
        ADHD: "ADHD",
        "Low Vision": "Nedsat syn",
        "Pause Animations": "S\xE6t animationer p\xE5 pause",
        "Animation paused": "Animation sat p\xE5 pause",
        "Reset all settings": "Nulstil indstillinger",
        "Shortcut:": "Genvej:",
        "Epilepsy Safe Mode": "Epilepsisikker tilstand",
        "Mute sounds": "Sl\xE5 lyd fra",
        "Page read": "L\xE6s siden op",
        "Page read controls": "Opl\xE6sningsstyring",
        Pause: "Pause",
        Resume: "Forts\xE6t",
        Stop: "Stop",
        Settings: "Indstillinger",
        Speed: "Hastighed",
        Voice: "Stemme",
        "Close accessibility menu": "Luk tilg\xE6ngelighedsmenu",
        "Back to accessibility menu": "Tilbage til tilg\xE6ngelighedsmenu",
        "Search languages": "S\xF8g efter sprog",
        "Selected language": "Valgt sprog",
        "View accessibility statement (opens in new window)": "Se tilg\xE6ngelighedserkl\xE6ring (\xE5bner i nyt vindue)",
        "Visit CookieYes website (opens in new window)": "Bes\xF8g CookieYes-webstedet (\xE5bner i nyt vindue)",
        "Reset all accessibility settings to default": "Nulstil alle tilg\xE6ngelighedsindstillinger"
      };
    }
  });

  // src/locales/de.json
  var require_de = __commonJS({
    "src/locales/de.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Barrierefreiheits-Men\xFC",
        Close: "Schlie\xDFen",
        "Text and Reading": "Text und Lesen",
        "Navigation and Interaction": "Navigation und Interaktion",
        "Text Align": "Textausrichtung",
        "Align Left": "Links ausrichten",
        "Align Center": "Zentrieren",
        "Align Right": "Rechts ausrichten",
        "Adjust Font Size": "Schriftgr\xF6\xDFe anpassen",
        "Highlight Title": "Titel hervorheben",
        "Highlight Links": "Links hervorheben",
        "Readable Font": "Lesbare Schriftart",
        "Color and Contrast": "Farbe und Kontrast",
        "Dark Contrast": "Dunkler Kontrast",
        "Light Contrast": "Heller Kontrast",
        "High Contrast": "Hoher Kontrast",
        "High Saturation": "Hohe S\xE4ttigung",
        "Low Saturation": "Niedrige S\xE4ttigung",
        Monochrome: "Monochrom",
        Tools: "Werkzeuge",
        "Reading Guide": "Lesef\xFChrung",
        "Big Cursor": "Gro\xDFer Cursor",
        "Increase Font Size": "Schriftgr\xF6\xDFe vergr\xF6\xDFern",
        "Decrease Font Size": "Schriftgr\xF6\xDFe verkleinern",
        "Letter Spacing": "Buchstabenabstand",
        "Line Height": "Zeilenh\xF6he",
        "Font Weight": "Schriftst\xE4rke",
        "Dyslexia Font": "Legasthenie-Schriftart",
        Language: "Sprache",
        "Accessibility widget": "Barrierefreiheits-Men\xFC \xF6ffnen",
        "Accessibility Profiles": "Barrierefreiheits-Profile",
        "Cognitive Disability": "Kognitive Beeintr\xE4chtigung",
        "Seizure Safe": "Anfallssicher",
        "Accessibility statement": "Barrierefreiheits-Erkl\xE4rung",
        ADHD: "ADHS",
        "Low Vision": "Sehschw\xE4che",
        "Pause Animations": "Animationen pausieren",
        "Animation paused": "Animation pausiert",
        "Reset all settings": "Einstellungen zur\xFCcksetzen",
        "Shortcut:": "Tastenk\xFCrzel:",
        "Epilepsy Safe Mode": "Epilepsie-sicherer Modus",
        "Mute sounds": "T\xF6ne stummschalten",
        "Page read": "Seite vorlesen",
        "Page read controls": "Vorlese-Steuerung",
        Pause: "Pause",
        Resume: "Fortsetzen",
        Stop: "Stopp",
        Settings: "Einstellungen",
        Speed: "Geschwindigkeit",
        Voice: "Stimme",
        "Close accessibility menu": "Barrierefreiheitsmen\xFC schlie\xDFen",
        "Back to accessibility menu": "Zur\xFCck zum Barrierefreiheitsmen\xFC",
        "Search languages": "Sprachen suchen",
        "Selected language": "Ausgew\xE4hlte Sprache",
        "View accessibility statement (opens in new window)": "Barrierefreiheitserkl\xE4rung ansehen (\xF6ffnet in neuem Fenster)",
        "Visit CookieYes website (opens in new window)": "CookieYes-Website besuchen (\xF6ffnet in neuem Fenster)",
        "Reset all accessibility settings to default": "Alle Barrierefreiheitseinstellungen zur\xFCcksetzen"
      };
    }
  });

  // src/locales/el.json
  var require_el = __commonJS({
    "src/locales/el.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u039C\u03B5\u03BD\u03BF\u03CD \u03A0\u03C1\u03BF\u03C3\u03B2\u03B1\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2",
        Close: "\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF",
        "Text and Reading": "\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF \u03BA\u03B1\u03B9 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7",
        "Navigation and Interaction": "\u03A0\u03BB\u03BF\u03AE\u03B3\u03B7\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B1\u03BB\u03BB\u03B7\u03BB\u03B5\u03C0\u03AF\u03B4\u03C1\u03B1\u03C3\u03B7",
        "Text Align": "\u03A3\u03C4\u03BF\u03AF\u03C7\u03B9\u03C3\u03B7 \u03BA\u03B5\u03B9\u03BC\u03AD\u03BD\u03BF\u03C5",
        "Align Left": "\u03A3\u03C4\u03BF\u03AF\u03C7\u03B9\u03C3\u03B7 \u0391\u03C1\u03B9\u03C3\u03C4\u03B5\u03C1\u03AC",
        "Align Center": "\u03A3\u03C4\u03BF\u03AF\u03C7\u03B9\u03C3\u03B7 \u03C3\u03C4\u03BF \u03BA\u03AD\u03BD\u03C4\u03C1\u03BF",
        "Align Right": "\u03A3\u03C4\u03BF\u03AF\u03C7\u03B9\u03C3\u03B7 \u03B4\u03B5\u03BE\u03B9\u03AC",
        "Adjust Font Size": "\u03A0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE \u039C\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2 \u0393\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",
        "Highlight Title": "\u0395\u03C0\u03B9\u03C3\u03AE\u03BC\u03B1\u03BD\u03C3\u03B7 \u03A4\u03AF\u03C4\u03BB\u03BF\u03C5",
        "Highlight Links": "\u0395\u03C0\u03B9\u03C3\u03AE\u03BC\u03B1\u03BD\u03C3\u03B7 \u03A3\u03C5\u03BD\u03B4\u03AD\u03C3\u03BC\u03C9\u03BD",
        "Readable Font": "\u0391\u03BD\u03B1\u03B3\u03BD\u03CE\u03C3\u03B9\u03BC\u03B7 \u0393\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC",
        "Color and Contrast": "\u03A7\u03C1\u03CE\u03BC\u03B1 \u03BA\u03B1\u03B9 \u03B1\u03BD\u03C4\u03AF\u03B8\u03B5\u03C3\u03B7",
        "Dark Contrast": "\u03A3\u03BA\u03BF\u03CD\u03C1\u03B7 \u0391\u03BD\u03C4\u03AF\u03B8\u03B5\u03C3\u03B7",
        "Light Contrast": "\u0391\u03BD\u03BF\u03B9\u03C7\u03C4\u03AE \u0391\u03BD\u03C4\u03AF\u03B8\u03B5\u03C3\u03B7",
        "High Contrast": "\u03A5\u03C8\u03B7\u03BB\u03AE \u0391\u03BD\u03C4\u03AF\u03B8\u03B5\u03C3\u03B7",
        "High Saturation": "\u03A5\u03C8\u03B7\u03BB\u03CC\u03C2 \u039A\u03BF\u03C1\u03B5\u03C3\u03BC\u03CC\u03C2",
        "Low Saturation": "\u03A7\u03B1\u03BC\u03B7\u03BB\u03CC\u03C2 \u039A\u03BF\u03C1\u03B5\u03C3\u03BC\u03CC\u03C2",
        Monochrome: "\u039C\u03BF\u03BD\u03CC\u03C7\u03C1\u03C9\u03BC\u03BF",
        Tools: "\u0395\u03C1\u03B3\u03B1\u03BB\u03B5\u03AF\u03B1",
        "Reading Guide": "\u039F\u03B4\u03B7\u03B3\u03CC\u03C2 \u0391\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7\u03C2",
        "Big Cursor": "\u039C\u03B5\u03B3\u03AC\u03BB\u03BF\u03C2 \u0394\u03C1\u03BF\u03BC\u03AD\u03B1\u03C2",
        "Increase Font Size": "\u0391\u03CD\u03BE\u03B7\u03C3\u03B7 \u039C\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2 \u0393\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",
        "Decrease Font Size": "\u039C\u03B5\u03AF\u03C9\u03C3\u03B7 \u039C\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2 \u0393\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",
        "Letter Spacing": "\u0394\u03B9\u03AC\u03C3\u03C4\u03B7\u03BC\u03B1 \u0393\u03C1\u03B1\u03BC\u03BC\u03AC\u03C4\u03C9\u03BD",
        "Line Height": "\u038E\u03C8\u03BF\u03C2 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE\u03C2",
        "Font Weight": "\u03A0\u03AC\u03C7\u03BF\u03C2 \u0393\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",
        "Dyslexia Font": "\u0393\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03B3\u03B9\u03B1 \u0394\u03C5\u03C3\u03BB\u03B5\u03BE\u03AF\u03B1",
        Language: "\u0393\u03BB\u03CE\u03C3\u03C3\u03B1",
        "Accessibility widget": "\u0386\u03BD\u03BF\u03B9\u03B3\u03BC\u03B1 \u039C\u03B5\u03BD\u03BF\u03CD \u03A0\u03C1\u03BF\u03C3\u03B2\u03B1\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2",
        "Accessibility Profiles": "\u03A0\u03C1\u03BF\u03C6\u03AF\u03BB \u03A0\u03C1\u03BF\u03C3\u03B2\u03B1\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2",
        "Cognitive Disability": "\u0393\u03BD\u03C9\u03C3\u03C4\u03B9\u03BA\u03AE \u0391\u03BD\u03B1\u03C0\u03B7\u03C1\u03AF\u03B1",
        "Seizure Safe": "\u0391\u03C3\u03C6\u03B1\u03BB\u03AD\u03C2 \u03B3\u03B9\u03B1 \u0395\u03C0\u03B9\u03BB\u03B7\u03C8\u03AF\u03B1",
        "Accessibility statement": "\u0394\u03AE\u03BB\u03C9\u03C3\u03B7 \u03A0\u03C1\u03BF\u03C3\u03B2\u03B1\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2",
        ADHD: "\u0394\u0395\u03A0\u03A5",
        "Low Vision": "\u03A7\u03B1\u03BC\u03B7\u03BB\u03AE \u03CC\u03C1\u03B1\u03C3\u03B7",
        "Pause Animations": "\u0394\u03B9\u03B1\u03BA\u03BF\u03C0\u03AE \u039A\u03B9\u03BD\u03BF\u03CD\u03BC\u03B5\u03BD\u03C9\u03BD \u0395\u03B9\u03BA\u03CC\u03BD\u03C9\u03BD",
        "Animation paused": "\u039A\u03B9\u03BD\u03BF\u03CD\u03BC\u03B5\u03BD\u03B7 \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1 \u03C3\u03B5 \u03C0\u03B1\u03CD\u03C3\u03B7",
        "Reset all settings": "\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03C9\u03BD",
        "Shortcut:": "\u03A3\u03C5\u03BD\u03C4\u03CC\u03BC\u03B5\u03C5\u03C3\u03B7:",
        "Epilepsy Safe Mode": "\u039B\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03B1\u03C3\u03C6\u03B1\u03BB\u03AE\u03C2 \u03B3\u03B9\u03B1 \u03B5\u03C0\u03B9\u03BB\u03B7\u03C8\u03AF\u03B1",
        "Mute sounds": "\u03A3\u03AF\u03B3\u03B1\u03C3\u03B7 \u03AE\u03C7\u03C9\u03BD",
        "Page read": "\u0391\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1\u03C2",
        "Page read controls": "\u03A3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7\u03C2 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1\u03C2",
        Pause: "\u03A0\u03B1\u03CD\u03C3\u03B7",
        Resume: "\u03A3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1",
        Stop: "\u0394\u03B9\u03B1\u03BA\u03BF\u03C0\u03AE",
        Settings: "\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2",
        Speed: "\u03A4\u03B1\u03C7\u03CD\u03C4\u03B7\u03C4\u03B1",
        Voice: "\u03A6\u03C9\u03BD\u03AE",
        "Close accessibility menu": "\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF \u03BC\u03B5\u03BD\u03BF\u03CD \u03C0\u03C1\u03BF\u03C3\u03B2\u03B1\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2",
        "Back to accessibility menu": "\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE \u03C3\u03C4\u03BF \u03BC\u03B5\u03BD\u03BF\u03CD \u03C0\u03C1\u03BF\u03C3\u03B2\u03B1\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2",
        "Search languages": "\u0391\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7 \u03B3\u03BB\u03C9\u03C3\u03C3\u03CE\u03BD",
        "Selected language": "\u0395\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B7 \u03B3\u03BB\u03CE\u03C3\u03C3\u03B1",
        "View accessibility statement (opens in new window)": "\u03A0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE \u03B4\u03AE\u03BB\u03C9\u03C3\u03B7\u03C2 \u03C0\u03C1\u03BF\u03C3\u03B2\u03B1\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2 (\u03B1\u03BD\u03BF\u03AF\u03B3\u03B5\u03B9 \u03C3\u03B5 \u03BD\u03AD\u03BF \u03C0\u03B1\u03C1\u03AC\u03B8\u03C5\u03C1\u03BF)",
        "Visit CookieYes website (opens in new window)": "\u0395\u03C0\u03AF\u03C3\u03BA\u03B5\u03C8\u03B7 \u03C3\u03C4\u03BF\u03BD \u03B9\u03C3\u03C4\u03CC\u03C4\u03BF\u03C0\u03BF CookieYes (\u03B1\u03BD\u03BF\u03AF\u03B3\u03B5\u03B9 \u03C3\u03B5 \u03BD\u03AD\u03BF \u03C0\u03B1\u03C1\u03AC\u03B8\u03C5\u03C1\u03BF)",
        "Reset all accessibility settings to default": "\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03CC\u03BB\u03C9\u03BD \u03C4\u03C9\u03BD \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03C9\u03BD \u03C0\u03C1\u03BF\u03C3\u03B2\u03B1\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2 \u03C3\u03C4\u03B9\u03C2 \u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AD\u03C2"
      };
    }
  });

  // src/locales/en.json
  var require_en = __commonJS({
    "src/locales/en.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Accessibility menu",
        Close: "Close",
        "Text and Reading": "Text and Reading",
        "Navigation and Interaction": "Navigation and Interaction",
        "Text Align": "Text Align",
        "Align Left": "Align Left",
        "Align Center": "Align Center",
        "Align Right": "Align Right",
        "Adjust Font Size": "Adjust Font Size",
        "Highlight Title": "Highlight Title",
        "Highlight Links": "Highlight Links",
        "Readable Font": "Readable Font",
        "Color and Contrast": "Color and Contrast",
        "Dark Contrast": "Dark Contrast",
        "Light Contrast": "Light Contrast",
        "High Contrast": "High Contrast",
        "High Saturation": "High Saturation",
        "Low Saturation": "Low Saturation",
        Monochrome: "Monochrome",
        Tools: "Tools",
        "Reading Guide": "Reading Guide",
        "Big Cursor": "Big Cursor",
        "Increase Font Size": "Increase Font Size",
        "Decrease Font Size": "Decrease Font Size",
        "Letter Spacing": "Letter Spacing",
        "Line Height": "Line Height",
        "Font Weight": "Font Weight",
        "Dyslexia Font": "Dyslexia Font",
        Language: "Language",
        "Accessibility widget": "Accessibility widget",
        "Accessibility Profiles": "Accessibility Profiles",
        "Cognitive Disability": "Cognitive Disability",
        "Seizure Safe": "Seizure Safe",
        "Accessibility statement": "Accessibility statement",
        ADHD: "ADHD",
        "Low Vision": "Low Vision",
        "Pause Animations": "Pause Animations",
        "Animation paused": "Animation paused",
        "Reset all settings": "Reset all settings",
        "Shortcut:": "Shortcut:",
        "Epilepsy Safe Mode": "Epilepsy Safe Mode",
        "Mute sounds": "Mute sounds",
        "Page read": "Page read",
        "Page read controls": "Page read controls",
        Pause: "Pause",
        Resume: "Resume",
        Stop: "Stop",
        Settings: "Settings",
        Speed: "Speed",
        Voice: "Voice",
        "Close accessibility menu": "Close accessibility menu",
        "Back to accessibility menu": "Back to accessibility menu",
        "Search languages": "Search languages",
        "Selected language": "Selected language",
        "View accessibility statement (opens in new window)": "View accessibility statement (opens in new window)",
        "Visit CookieYes website (opens in new window)": "Visit CookieYes website (opens in new window)",
        "Reset all accessibility settings to default": "Reset all accessibility settings to default"
      };
    }
  });

  // src/locales/es.json
  var require_es = __commonJS({
    "src/locales/es.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Men\xFA de accesibilidad",
        Close: "Cerrar",
        "Text and Reading": "Texto y lectura",
        "Navigation and Interaction": "Navegaci\xF3n e interacci\xF3n",
        "Text Align": "Alineaci\xF3n del texto",
        "Align Left": "Alinear a la izquierda",
        "Align Center": "Centrar",
        "Align Right": "Alinear a la derecha",
        "Adjust Font Size": "Ajustar Tama\xF1o de Fuente",
        "Highlight Title": "Resaltar T\xEDtulo",
        "Highlight Links": "Resaltar Enlaces",
        "Readable Font": "Fuente Legible",
        "Color and Contrast": "Color y contraste",
        "Dark Contrast": "Contraste Oscuro",
        "Light Contrast": "Contraste Claro",
        "High Contrast": "Alto Contraste",
        "High Saturation": "Alta Saturaci\xF3n",
        "Low Saturation": "Baja Saturaci\xF3n",
        Monochrome: "Monocromo",
        Tools: "Herramientas",
        "Reading Guide": "Gu\xEDa de Lectura",
        "Big Cursor": "Cursor Grande",
        "Increase Font Size": "Aumentar Tama\xF1o de Fuente",
        "Decrease Font Size": "Disminuir Tama\xF1o de Fuente",
        "Letter Spacing": "Espaciado entre Letras",
        "Line Height": "Altura de L\xEDnea",
        "Font Weight": "Peso de Fuente",
        "Dyslexia Font": "Fuente para Dislexia",
        Language: "Idioma",
        "Accessibility widget": "Abrir men\xFA de accesibilidad",
        "Accessibility Profiles": "Perfiles de Accesibilidad",
        "Cognitive Disability": "Discapacidad Cognitiva",
        "Seizure Safe": "Seguro para Epilepsia",
        "Accessibility statement": "Declaraci\xF3n de Accesibilidad",
        ADHD: "TDAH",
        "Low Vision": "Baja visi\xF3n",
        "Pause Animations": "Detener Animaciones",
        "Animation paused": "Animaci\xF3n en pausa",
        "Reset all settings": "Restablecer Configuraci\xF3n",
        "Shortcut:": "Atajo:",
        "Epilepsy Safe Mode": "Modo seguro para epilepsia",
        "Mute sounds": "Silenciar sonidos",
        "Page read": "Lectura de la p\xE1gina",
        "Page read controls": "Controles de lectura",
        Pause: "Pausar",
        Resume: "Reanudar",
        Stop: "Detener",
        Settings: "Ajustes",
        Speed: "Velocidad",
        Voice: "Voz",
        "Close accessibility menu": "Cerrar el men\xFA de accesibilidad",
        "Back to accessibility menu": "Volver al men\xFA de accesibilidad",
        "Search languages": "Buscar idiomas",
        "Selected language": "Idioma seleccionado",
        "View accessibility statement (opens in new window)": "Ver la declaraci\xF3n de accesibilidad (se abre en una nueva ventana)",
        "Visit CookieYes website (opens in new window)": "Visitar el sitio web de CookieYes (se abre en una nueva ventana)",
        "Reset all accessibility settings to default": "Restablecer todos los ajustes de accesibilidad"
      };
    }
  });

  // src/locales/fa.json
  var require_fa = __commonJS({
    "src/locales/fa.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0645\u0646\u0648\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC",
        Close: "\u0628\u0633\u062A\u0646",
        "Text and Reading": "\u0645\u062A\u0646 \u0648 \u062E\u0648\u0627\u0646\u062F\u0646",
        "Navigation and Interaction": "\u067E\u06CC\u0645\u0627\u06CC\u0634 \u0648 \u062A\u0639\u0627\u0645\u0644",
        "Text Align": "\u062A\u0631\u0627\u0632 \u0645\u062A\u0646",
        "Align Left": "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0686\u067E",
        "Align Center": "\u062A\u0631\u0627\u0632 \u0648\u0633\u0637",
        "Align Right": "\u062A\u0631\u0627\u0632 \u0631\u0627\u0633\u062A",
        "Adjust Font Size": "\u062A\u0646\u0638\u06CC\u0645 \u0627\u0646\u062F\u0627\u0632\u0647 \u0641\u0648\u0646\u062A",
        "Highlight Title": "\u0628\u0631\u062C\u0633\u062A\u0647 \u06A9\u0631\u062F\u0646 \u0639\u0646\u0648\u0627\u0646",
        "Highlight Links": "\u0628\u0631\u062C\u0633\u062A\u0647 \u06A9\u0631\u062F\u0646 \u0644\u06CC\u0646\u06A9\u200C\u0647\u0627",
        "Readable Font": "\u0641\u0648\u0646\u062A \u062E\u0648\u0627\u0646\u0627",
        "Color and Contrast": "\u0631\u0646\u06AF \u0648 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A",
        "Dark Contrast": "\u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u062A\u06CC\u0631\u0647",
        "Light Contrast": "\u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0631\u0648\u0634\u0646",
        "High Contrast": "\u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0628\u0627\u0644\u0627",
        "High Saturation": "\u0627\u0634\u0628\u0627\u0639 \u0628\u0627\u0644\u0627",
        "Low Saturation": "\u0627\u0634\u0628\u0627\u0639 \u067E\u0627\u06CC\u06CC\u0646",
        Monochrome: "\u062A\u06A9\u200C\u0631\u0646\u06AF",
        Tools: "\u0627\u0628\u0632\u0627\u0631\u0647\u0627",
        "Reading Guide": "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u062E\u0648\u0627\u0646\u062F\u0646",
        "Big Cursor": "\u0646\u0634\u0627\u0646\u06AF\u0631 \u0628\u0632\u0631\u06AF",
        "Increase Font Size": "\u0627\u0641\u0632\u0627\u06CC\u0634 \u0627\u0646\u062F\u0627\u0632\u0647 \u0641\u0648\u0646\u062A",
        "Decrease Font Size": "\u06A9\u0627\u0647\u0634 \u0627\u0646\u062F\u0627\u0632\u0647 \u0641\u0648\u0646\u062A",
        "Letter Spacing": "\u0641\u0627\u0635\u0644\u0647 \u0628\u06CC\u0646 \u062D\u0631\u0648\u0641",
        "Line Height": "\u0627\u0631\u062A\u0641\u0627\u0639 \u062E\u0637",
        "Font Weight": "\u0648\u0632\u0646 \u0641\u0648\u0646\u062A",
        "Dyslexia Font": "\u0641\u0648\u0646\u062A \u062F\u06CC\u0633\u0644\u06A9\u0633\u06CC\u0627",
        Language: "\u0632\u0628\u0627\u0646",
        "Accessibility widget": "\u0628\u0627\u0632\u06A9\u0631\u062F\u0646 \u0645\u0646\u0648\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC",
        "Accessibility Profiles": "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC",
        "Cognitive Disability": "\u0646\u0627\u062A\u0648\u0627\u0646\u06CC \u0634\u0646\u0627\u062E\u062A\u06CC",
        "Seizure Safe": "\u0627\u06CC\u0645\u0646 \u0628\u0631\u0627\u06CC \u0635\u0631\u0639",
        "Accessibility statement": "\u0628\u06CC\u0627\u0646\u06CC\u0647 \u062F\u0633\u062A\u0631\u0633\u06CC",
        ADHD: "\u0628\u06CC\u0634\u200C\u0641\u0639\u0627\u0644\u06CC \u0648 \u06A9\u0645\u200C\u062A\u0648\u062C\u0647\u06CC",
        "Low Vision": "\u06A9\u0645\u200C\u0628\u06CC\u0646\u0627\u06CC\u06CC",
        "Pause Animations": "\u062A\u0648\u0642\u0641 \u0627\u0646\u06CC\u0645\u06CC\u0634\u0646\u200C\u0647\u0627",
        "Animation paused": "\u0627\u0646\u06CC\u0645\u06CC\u0634\u0646 \u0645\u062A\u0648\u0642\u0641 \u0634\u062F",
        "Reset all settings": "\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
        "Shortcut:": "\u0645\u06CC\u0627\u0646\u200C\u0628\u0631:",
        "Epilepsy Safe Mode": "\u062D\u0627\u0644\u062A \u0627\u06CC\u0645\u0646 \u0628\u0631\u0627\u06CC \u0635\u0631\u0639",
        "Mute sounds": "\u0628\u06CC\u200C\u0635\u062F\u0627 \u06A9\u0631\u062F\u0646 \u0635\u062F\u0627\u0647\u0627",
        "Page read": "\u062E\u0648\u0627\u0646\u062F\u0646 \u0635\u0641\u062D\u0647",
        "Page read controls": "\u06A9\u0646\u062A\u0631\u0644\u200C\u0647\u0627\u06CC \u062E\u0648\u0627\u0646\u062F\u0646 \u0635\u0641\u062D\u0647",
        Pause: "\u062A\u0648\u0642\u0641 \u0645\u0648\u0642\u062A",
        Resume: "\u0627\u062F\u0627\u0645\u0647",
        Stop: "\u062A\u0648\u0642\u0641",
        Settings: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
        Speed: "\u0633\u0631\u0639\u062A",
        Voice: "\u0635\u062F\u0627",
        "Close accessibility menu": "\u0628\u0633\u062A\u0646 \u0645\u0646\u0648\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC",
        "Back to accessibility menu": "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0645\u0646\u0648\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC",
        "Search languages": "\u062C\u0633\u062A\u062C\u0648\u06CC \u0632\u0628\u0627\u0646\u200C\u0647\u0627",
        "Selected language": "\u0632\u0628\u0627\u0646 \u0627\u0646\u062A\u062E\u0627\u0628\u200C\u0634\u062F\u0647",
        "View accessibility statement (opens in new window)": "\u0645\u0634\u0627\u0647\u062F\u0647 \u0628\u06CC\u0627\u0646\u06CC\u0647 \u062F\u0633\u062A\u0631\u0633\u06CC (\u062F\u0631 \u067E\u0646\u062C\u0631\u0647 \u062C\u062F\u06CC\u062F \u0628\u0627\u0632 \u0645\u06CC\u200C\u0634\u0648\u062F)",
        "Visit CookieYes website (opens in new window)": "\u0628\u0627\u0632\u062F\u06CC\u062F \u0627\u0632 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A CookieYes (\u062F\u0631 \u067E\u0646\u062C\u0631\u0647 \u062C\u062F\u06CC\u062F \u0628\u0627\u0632 \u0645\u06CC\u200C\u0634\u0648\u062F)",
        "Reset all accessibility settings to default": "\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u0647\u0645\u0647 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u062D\u0627\u0644\u062A \u067E\u06CC\u0634\u200C\u0641\u0631\u0636"
      };
    }
  });

  // src/locales/fi.json
  var require_fi = __commonJS({
    "src/locales/fi.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Saavutettavuusvalikko",
        Close: "Sulje",
        "Text and Reading": "Teksti ja lukeminen",
        "Navigation and Interaction": "Navigointi ja vuorovaikutus",
        "Text Align": "Tekstin tasaus",
        "Align Left": "Tasaa vasemmalle",
        "Align Center": "Tasaa keskelle",
        "Align Right": "Tasaa oikealle",
        "Adjust Font Size": "S\xE4\xE4d\xE4 fonttikokoa",
        "Highlight Title": "Korosta otsikko",
        "Highlight Links": "Korosta linkit",
        "Readable Font": "Helposti luettava fontti",
        "Color and Contrast": "V\xE4ri ja kontrasti",
        "Dark Contrast": "Tumma kontrasti",
        "Light Contrast": "Vaalea kontrasti",
        "High Contrast": "Korkea kontrasti",
        "High Saturation": "Korkea kyll\xE4isyys",
        "Low Saturation": "Matala kyll\xE4isyys",
        Monochrome: "Yksiv\xE4rinen",
        Tools: "Ty\xF6kalut",
        "Reading Guide": "Lukemisopas",
        "Big Cursor": "Iso kohdistin",
        "Increase Font Size": "Suurenna fonttikokoa",
        "Decrease Font Size": "Pienenn\xE4 fonttikokoa",
        "Letter Spacing": "Kirjainten v\xE4listys",
        "Line Height": "Rivin korkeus",
        "Font Weight": "Fontin paksuus",
        "Dyslexia Font": "Dysleksiafontti",
        Language: "Kieli",
        "Accessibility widget": "Avaa saavutettavuusvalikko",
        "Accessibility Profiles": "Saavutettavuusprofiilit",
        "Cognitive Disability": "Kognitiivinen vamma",
        "Seizure Safe": "Turvallinen epilepsialle",
        "Accessibility statement": "Saavutettavuusseloste",
        ADHD: "ADHD",
        "Low Vision": "Heikkon\xE4k\xF6isyys",
        "Pause Animations": "Pys\xE4yt\xE4 animaatiot",
        "Animation paused": "Animaatio keskeytetty",
        "Reset all settings": "Palauta asetukset",
        "Shortcut:": "Pikan\xE4pp\xE4in:",
        "Epilepsy Safe Mode": "Epilepsiaturvallinen tila",
        "Mute sounds": "Mykist\xE4 \xE4\xE4net",
        "Page read": "Lue sivu",
        "Page read controls": "Sivun lukemisen hallinta",
        Pause: "Keskeyt\xE4",
        Resume: "Jatka",
        Stop: "Pys\xE4yt\xE4",
        Settings: "Asetukset",
        Speed: "Nopeus",
        Voice: "\xC4\xE4ni",
        "Close accessibility menu": "Sulje saavutettavuusvalikko",
        "Back to accessibility menu": "Takaisin saavutettavuusvalikkoon",
        "Search languages": "Hae kieli\xE4",
        "Selected language": "Valittu kieli",
        "View accessibility statement (opens in new window)": "N\xE4yt\xE4 saavutettavuusseloste (avautuu uuteen ikkunaan)",
        "Visit CookieYes website (opens in new window)": "K\xE4y CookieYes-sivustolla (avautuu uuteen ikkunaan)",
        "Reset all accessibility settings to default": "Palauta kaikki saavutettavuusasetukset oletusarvoihin"
      };
    }
  });

  // src/locales/fil.json
  var require_fil = __commonJS({
    "src/locales/fil.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menu ng Accessibility",
        Close: "Isara",
        "Text and Reading": "Teksto at pagbabasa",
        "Navigation and Interaction": "Nabigasyon at interaksyon",
        "Text Align": "Pag-align ng Teksto",
        "Align Left": "I-align sa Kaliwa",
        "Align Center": "I-align sa Gitna",
        "Align Right": "I-align sa Kanan",
        "Adjust Font Size": "I-adjust ang Laki ng Font",
        "Highlight Title": "I-highlight ang Pamagat",
        "Highlight Links": "I-highlight ang mga Link",
        "Readable Font": "Madaling Basahing Font",
        "Color and Contrast": "Kulay at kontrast",
        "Dark Contrast": "Madilim na Kontrast",
        "Light Contrast": "Maliwanag na Kontrast",
        "High Contrast": "Mataas na Kontrast",
        "High Saturation": "Mataas na Saturation",
        "Low Saturation": "Mababang Saturation",
        Monochrome: "Monokrom",
        Tools: "Mga Kasangkapan",
        "Reading Guide": "Gabay sa Pagbabasa",
        "Big Cursor": "Malaking Cursor",
        "Increase Font Size": "Palakihin ang Laki ng Font",
        "Decrease Font Size": "Bawasan ang Laki ng Font",
        "Letter Spacing": "Espasyo ng mga Titik",
        "Line Height": "Taas ng Linya",
        "Font Weight": "Bigat ng Font",
        "Dyslexia Font": "Font para sa Dyslexia",
        Language: "Wika",
        "Accessibility widget": "Buksan ang Menu ng Accessibility",
        "Accessibility Profiles": "Mga Profile ng Accessibility",
        "Cognitive Disability": "Kapansanan sa Kognitibo",
        "Seizure Safe": "Ligtas sa Seizure",
        "Accessibility statement": "Pahayag ng Accessibility",
        ADHD: "ADHD",
        "Low Vision": "Mahinang Paningin",
        "Pause Animations": "Itigil ang Mga Animasyon",
        "Animation paused": "Naka-pause ang animation",
        "Reset all settings": "I-reset ang mga setting",
        "Shortcut:": "Shortcut:",
        "Epilepsy Safe Mode": "Ligtas sa Epilepsy na Mode",
        "Mute sounds": "I-mute ang mga tunog",
        "Page read": "Basahin ang pahina",
        "Page read controls": "Mga kontrol sa pagbasa ng pahina",
        Pause: "I-pause",
        Resume: "Ipagpatuloy",
        Stop: "Itigil",
        Settings: "Mga Setting",
        Speed: "Bilis",
        Voice: "Boses",
        "Close accessibility menu": "Isara ang menu ng accessibility",
        "Back to accessibility menu": "Bumalik sa menu ng accessibility",
        "Search languages": "Maghanap ng mga wika",
        "Selected language": "Napiling wika",
        "View accessibility statement (opens in new window)": "Tingnan ang pahayag sa accessibility (bubukas sa bagong window)",
        "Visit CookieYes website (opens in new window)": "Bisitahin ang website ng CookieYes (bubukas sa bagong window)",
        "Reset all accessibility settings to default": "I-reset ang lahat ng setting ng accessibility sa default"
      };
    }
  });

  // src/locales/fr.json
  var require_fr = __commonJS({
    "src/locales/fr.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menu d'accessibilit\xE9",
        Close: "Fermer",
        "Text and Reading": "Texte et lecture",
        "Navigation and Interaction": "Navigation et interaction",
        "Text Align": "Alignement du texte",
        "Align Left": "Aligner \xE0 gauche",
        "Align Center": "Centrer",
        "Align Right": "Aligner \xE0 droite",
        "Adjust Font Size": "Ajuster la Taille de Police",
        "Highlight Title": "Mettre en \xC9vidence le Titre",
        "Highlight Links": "Mettre en \xC9vidence les Liens",
        "Readable Font": "Police Lisible",
        "Color and Contrast": "Couleur et contraste",
        "Dark Contrast": "Contraste Sombre",
        "Light Contrast": "Contraste Clair",
        "High Contrast": "Contraste \xC9lev\xE9",
        "High Saturation": "Saturation \xC9lev\xE9e",
        "Low Saturation": "Saturation Faible",
        Monochrome: "Monochrome",
        Tools: "Outils",
        "Reading Guide": "Guide de Lecture",
        "Big Cursor": "Curseur Agrandi",
        "Increase Font Size": "Augmenter la Taille de Police",
        "Decrease Font Size": "Diminuer la Taille de Police",
        "Letter Spacing": "Espacement des Lettres",
        "Line Height": "Hauteur de Ligne",
        "Font Weight": "\xC9paisseur de Police",
        "Dyslexia Font": "Police pour Dyslexie",
        Language: "Langue",
        "Accessibility widget": "Ouvrir le menu d'accessibilit\xE9",
        "Accessibility Profiles": "Profils d'Accessibilit\xE9",
        "Cognitive Disability": "Handicap Cognitif",
        "Seizure Safe": "S\xFBr pour l'\xE9pilepsie",
        "Accessibility statement": "D\xE9claration d'Accessibilit\xE9",
        ADHD: "TDAH",
        "Low Vision": "Basse vision",
        "Pause Animations": "Arr\xEAter les Animations",
        "Animation paused": "Animation en pause",
        "Reset all settings": "R\xE9initialiser les Param\xE8tres",
        "Shortcut:": "Raccourci :",
        "Epilepsy Safe Mode": "Mode sans \xE9pilepsie",
        "Mute sounds": "Couper les sons",
        "Page read": "Lecture de la page",
        "Page read controls": "Commandes de lecture",
        Pause: "Pause",
        Resume: "Reprendre",
        Stop: "Arr\xEAter",
        Settings: "Param\xE8tres",
        Speed: "Vitesse",
        Voice: "Voix",
        "Close accessibility menu": "Fermer le menu d'accessibilit\xE9",
        "Back to accessibility menu": "Retour au menu d'accessibilit\xE9",
        "Search languages": "Rechercher une langue",
        "Selected language": "Langue s\xE9lectionn\xE9e",
        "View accessibility statement (opens in new window)": "Voir la d\xE9claration d'accessibilit\xE9 (ouvre une nouvelle fen\xEAtre)",
        "Visit CookieYes website (opens in new window)": "Visiter le site CookieYes (ouvre une nouvelle fen\xEAtre)",
        "Reset all accessibility settings to default": "R\xE9initialiser tous les param\xE8tres d'accessibilit\xE9"
      };
    }
  });

  // src/locales/gl.json
  var require_gl = __commonJS({
    "src/locales/gl.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Men\xFA de accesibilidade",
        Close: "Pechar",
        "Text and Reading": "Texto e lectura",
        "Navigation and Interaction": "Navegaci\xF3n e interacci\xF3n",
        "Text Align": "Ali\xF1amento do Texto",
        "Align Left": "Ali\xF1ar \xE1 Esquerda",
        "Align Center": "Centrar",
        "Align Right": "Ali\xF1ar \xE1 Dereita",
        "Adjust Font Size": "Axustar o Tama\xF1o da Fonte",
        "Highlight Title": "Destacar T\xEDtulo",
        "Highlight Links": "Destacar Ligaz\xF3ns",
        "Readable Font": "Fonte Lexible",
        "Color and Contrast": "Cor e contraste",
        "Dark Contrast": "Contraste Escuro",
        "Light Contrast": "Contraste Claro",
        "High Contrast": "Alto Contraste",
        "High Saturation": "Alta Saturaci\xF3n",
        "Low Saturation": "Baixa Saturaci\xF3n",
        Monochrome: "Monocromo",
        Tools: "Ferramentas",
        "Reading Guide": "Gu\xEDa de Lectura",
        "Big Cursor": "Cursor Grande",
        "Increase Font Size": "Aumentar o Tama\xF1o da Fonte",
        "Decrease Font Size": "Diminu\xEDr o Tama\xF1o da Fonte",
        "Letter Spacing": "Espazamento entre Letras",
        "Line Height": "Altura da Li\xF1a",
        "Font Weight": "Grosor da Fonte",
        "Dyslexia Font": "Fonte para a Dislexia",
        Language: "Idioma",
        "Accessibility widget": "Abrir o men\xFA de accesibilidade",
        "Accessibility Profiles": "Perf\xEDs de Accesibilidade",
        "Cognitive Disability": "Discapacidade Cognitiva",
        "Seizure Safe": "Protecci\xF3n Contra Crises Epil\xE9pticas",
        "Accessibility statement": "Declaraci\xF3n de accesibilidade",
        ADHD: "TDAH",
        "Low Vision": "Baixa Visi\xF3n",
        "Pause Animations": "Pausar Animaci\xF3ns",
        "Animation paused": "Animaci\xF3n en pausa",
        "Reset all settings": "Restablecer todos os axustes",
        "Shortcut:": "Atallo:",
        "Epilepsy Safe Mode": "Modo de Protecci\xF3n Contra Crises Epil\xE9pticas",
        "Mute sounds": "Silenciar sons",
        "Page read": "Lectura da p\xE1xina",
        "Page read controls": "Controis de lectura da p\xE1xina",
        Pause: "Pausar",
        Resume: "Retomar",
        Stop: "Deter",
        Settings: "Axustes",
        Speed: "Velocidade",
        Voice: "Voz",
        "Close accessibility menu": "Pechar o men\xFA de accesibilidade",
        "Back to accessibility menu": "Volver ao men\xFA de accesibilidade",
        "Search languages": "Buscar idiomas",
        "Selected language": "Idioma seleccionado",
        "View accessibility statement (opens in new window)": "Ver a declaraci\xF3n de accesibilidade (\xE1brese nunha nova xanela)",
        "Visit CookieYes website (opens in new window)": "Visitar o sitio web de CookieYes (\xE1brese nunha nova xanela)",
        "Reset all accessibility settings to default": "Restablecer todos os axustes de accesibilidade aos valores predeterminados"
      };
    }
  });

  // src/locales/he.json
  var require_he = __commonJS({
    "src/locales/he.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
        Close: "\u05E1\u05D2\u05D5\u05E8",
        "Text and Reading": "\u05D8\u05E7\u05E1\u05D8 \u05D5\u05E7\u05E8\u05D9\u05D0\u05D4",
        "Navigation and Interaction": "\u05E0\u05D9\u05D5\u05D5\u05D8 \u05D5\u05D0\u05D9\u05E0\u05D8\u05E8\u05D0\u05E7\u05E6\u05D9\u05D4",
        "Text Align": "\u05D9\u05D9\u05E9\u05D5\u05E8 \u05D8\u05E7\u05E1\u05D8",
        "Align Left": "\u05D9\u05D9\u05E9\u05D5\u05E8 \u05DC\u05E9\u05DE\u05D0\u05DC",
        "Align Center": "\u05D9\u05D9\u05E9\u05D5\u05E8 \u05DC\u05DE\u05E8\u05DB\u05D6",
        "Align Right": "\u05D9\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D9\u05DE\u05D9\u05DF",
        "Adjust Font Size": "\u05D4\u05EA\u05D0\u05DD \u05D2\u05D5\u05D3\u05DC \u05E4\u05D5\u05E0\u05D8",
        "Highlight Title": "\u05D4\u05D3\u05D2\u05E9 \u05DB\u05D5\u05EA\u05E8\u05EA",
        "Highlight Links": "\u05D4\u05D3\u05D2\u05E9 \u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD",
        "Readable Font": "\u05E4\u05D5\u05E0\u05D8 \u05E7\u05E8\u05D9\u05D0",
        "Color and Contrast": "\u05E6\u05D1\u05E2 \u05D5\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA",
        "Dark Contrast": "\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05DB\u05D4\u05D4",
        "Light Contrast": "\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05D1\u05D4\u05D9\u05E8\u05D4",
        "High Contrast": "\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4",
        "High Saturation": "\u05E8\u05D5\u05D5\u05D9\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4",
        "Low Saturation": "\u05E8\u05D5\u05D5\u05D9\u05D4 \u05E0\u05DE\u05D5\u05DB\u05D4",
        Monochrome: "\u05DE\u05D5\u05E0\u05D5\u05DB\u05E8\u05D5\u05DD",
        Tools: "\u05DB\u05DC\u05D9\u05DD",
        "Reading Guide": "\u05DE\u05D3\u05E8\u05D9\u05DA \u05E7\u05E8\u05D9\u05D0\u05D4",
        "Big Cursor": "\u05E1\u05DE\u05DF \u05D2\u05D3\u05D5\u05DC",
        "Increase Font Size": "\u05D4\u05D2\u05D3\u05DC \u05D2\u05D5\u05D3\u05DC \u05E4\u05D5\u05E0\u05D8",
        "Decrease Font Size": "\u05D4\u05E7\u05D8\u05DF \u05D2\u05D5\u05D3\u05DC \u05E4\u05D5\u05E0\u05D8",
        "Letter Spacing": "\u05DE\u05E8\u05D5\u05D5\u05D7 \u05D1\u05D9\u05DF \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA",
        "Line Height": "\u05D2\u05D5\u05D1\u05D4 \u05E9\u05D5\u05E8\u05D4",
        "Font Weight": "\u05DE\u05E9\u05E7\u05DC \u05D4\u05E4\u05D5\u05E0\u05D8",
        "Dyslexia Font": "\u05E4\u05D5\u05E0\u05D8 \u05DC\u05D3\u05D9\u05E1\u05DC\u05E7\u05D8\u05D9\u05DD",
        Language: "\u05E9\u05E4\u05D4",
        "Accessibility widget": "\u05E4\u05EA\u05D7 \u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
        "Accessibility Profiles": "\u05E4\u05E8\u05D5\u05E4\u05D9\u05DC\u05D9 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
        "Cognitive Disability": "\u05DE\u05D5\u05D2\u05D1\u05DC\u05D5\u05EA \u05E7\u05D5\u05D2\u05E0\u05D9\u05D8\u05D9\u05D1\u05D9\u05EA",
        "Seizure Safe": "\u05D1\u05D8\u05D5\u05D7 \u05DE\u05E4\u05E0\u05D9 \u05D4\u05EA\u05E7\u05E4\u05D9\u05DD",
        "Accessibility statement": "\u05D4\u05E6\u05D4\u05E8\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
        ADHD: "\u05D4\u05E4\u05E8\u05E2\u05EA \u05E7\u05E9\u05D1 \u05D5\u05E8\u05D9\u05DB\u05D5\u05D6",
        "Low Vision": "\u05E8\u05D0\u05D9\u05D9\u05D4 \u05DC\u05E7\u05D5\u05D9\u05D4",
        "Pause Animations": "\u05E2\u05E6\u05D9\u05E8\u05EA \u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D5\u05EA",
        "Animation paused": "\u05D4\u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D4 \u05D4\u05D5\u05E9\u05D4\u05EA\u05D4",
        "Reset all settings": "\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA",
        "Shortcut:": "\u05E7\u05D9\u05E6\u05D5\u05E8 \u05DE\u05E7\u05DC\u05D3\u05EA:",
        "Epilepsy Safe Mode": "\u05DE\u05E6\u05D1 \u05D1\u05D8\u05D5\u05D7 \u05DC\u05D0\u05E4\u05D9\u05DC\u05E4\u05E1\u05D9\u05D4",
        "Mute sounds": "\u05D4\u05E9\u05EA\u05E7\u05EA \u05E6\u05DC\u05D9\u05DC\u05D9\u05DD",
        "Page read": "\u05D4\u05E7\u05E8\u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3",
        "Page read controls": "\u05E4\u05E7\u05D3\u05D9 \u05D4\u05E7\u05E8\u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3",
        Pause: "\u05D4\u05E9\u05D4\u05D9\u05D4",
        Resume: "\u05D4\u05DE\u05E9\u05DA",
        Stop: "\u05E2\u05E6\u05D9\u05E8\u05D4",
        Settings: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA",
        Speed: "\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA",
        Voice: "\u05E7\u05D5\u05DC",
        "Close accessibility menu": "\u05E1\u05D2\u05D9\u05E8\u05EA \u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
        "Back to accessibility menu": "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
        "Search languages": "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05E4\u05D5\u05EA",
        "Selected language": "\u05D4\u05E9\u05E4\u05D4 \u05D4\u05E0\u05D1\u05D7\u05E8\u05EA",
        "View accessibility statement (opens in new window)": "\u05D4\u05E6\u05D2\u05EA \u05D4\u05E6\u05D4\u05E8\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA (\u05E0\u05E4\u05EA\u05D7 \u05D1\u05D7\u05DC\u05D5\u05DF \u05D7\u05D3\u05E9)",
        "Visit CookieYes website (opens in new window)": "\u05DE\u05E2\u05D1\u05E8 \u05DC\u05D0\u05EA\u05E8 CookieYes (\u05E0\u05E4\u05EA\u05D7 \u05D1\u05D7\u05DC\u05D5\u05DF \u05D7\u05D3\u05E9)",
        "Reset all accessibility settings to default": "\u05D0\u05D9\u05E4\u05D5\u05E1 \u05DB\u05DC \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05DC\u05D1\u05E8\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D3\u05DC"
      };
    }
  });

  // src/locales/hi.json
  var require_hi = __commonJS({
    "src/locales/hi.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0938\u0941\u0932\u092D\u0924\u093E \u092E\u0947\u0928\u0942",
        Close: "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
        "Text and Reading": "\u091F\u0947\u0915\u094D\u0938\u094D\u091F \u0914\u0930 \u092A\u0922\u093C\u0928\u093E",
        "Navigation and Interaction": "\u0928\u0947\u0935\u093F\u0917\u0947\u0936\u0928 \u0914\u0930 \u0907\u0902\u091F\u0930\u0948\u0915\u094D\u0936\u0928",
        "Text Align": "\u091F\u0947\u0915\u094D\u0938\u094D\u091F \u0938\u0902\u0930\u0947\u0916\u0923",
        "Align Left": "\u092C\u093E\u0908\u0902 \u0913\u0930 \u0938\u0902\u0930\u0947\u0916\u093F\u0924 \u0915\u0930\u0947\u0902",
        "Align Center": "\u0915\u0947\u0902\u0926\u094D\u0930 \u092E\u0947\u0902 \u0938\u0902\u0930\u0947\u0916\u093F\u0924 \u0915\u0930\u0947\u0902",
        "Align Right": "\u0926\u093E\u090F\u0902 \u0938\u0902\u0930\u0947\u0916\u093F\u0924 \u0915\u0930\u0947\u0902",
        "Adjust Font Size": "\u092B\u0949\u0928\u094D\u091F \u0906\u0915\u093E\u0930 \u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u0915\u0930\u0947\u0902",
        "Highlight Title": "\u0936\u0940\u0930\u094D\u0937\u0915 \u0939\u093E\u0907\u0932\u093E\u0907\u091F \u0915\u0930\u0947\u0902",
        "Highlight Links": "\u0932\u093F\u0902\u0915 \u0939\u093E\u0907\u0932\u093E\u0907\u091F \u0915\u0930\u0947\u0902",
        "Readable Font": "\u092A\u0920\u0928\u0940\u092F \u092B\u0949\u0928\u094D\u091F",
        "Color and Contrast": "\u0930\u0902\u0917 \u0914\u0930 \u0915\u0902\u091F\u094D\u0930\u093E\u0938\u094D\u091F",
        "Dark Contrast": "\u0917\u0939\u0930\u093E \u0915\u0902\u091F\u094D\u0930\u093E\u0938\u094D\u091F",
        "Light Contrast": "\u0939\u0932\u094D\u0915\u093E \u0915\u0902\u091F\u094D\u0930\u093E\u0938\u094D\u091F",
        "High Contrast": "\u0909\u091A\u094D\u091A \u0915\u0902\u091F\u094D\u0930\u093E\u0938\u094D\u091F",
        "High Saturation": "\u0909\u091A\u094D\u091A \u0938\u0902\u0924\u0943\u092A\u094D\u0924\u093F",
        "Low Saturation": "\u0915\u092E \u0938\u0902\u0924\u0943\u092A\u094D\u0924\u093F",
        Monochrome: "\u092E\u094B\u0928\u094B\u0915\u094D\u0930\u094B\u092E",
        Tools: "\u0909\u092A\u0915\u0930\u0923",
        "Reading Guide": "\u092A\u0920\u0928 \u092E\u093E\u0930\u094D\u0917\u0926\u0930\u094D\u0936\u093F\u0915\u093E",
        "Big Cursor": "\u092C\u0921\u093C\u093E \u0915\u0930\u094D\u0938\u0930",
        "Increase Font Size": "\u092B\u0949\u0928\u094D\u091F \u0906\u0915\u093E\u0930 \u092C\u0922\u093C\u093E\u090F\u0902",
        "Decrease Font Size": "\u092B\u0949\u0928\u094D\u091F \u0906\u0915\u093E\u0930 \u0918\u091F\u093E\u090F\u0902",
        "Letter Spacing": "\u0905\u0915\u094D\u0937\u0930 \u0930\u093F\u0915\u094D\u0924\u093F",
        "Line Height": "\u092A\u0902\u0915\u094D\u0924\u093F \u090A\u0902\u091A\u093E\u0908",
        "Font Weight": "\u092B\u093C\u0949\u0928\u094D\u091F \u092E\u094B\u091F\u093E\u0908",
        "Dyslexia Font": "\u0921\u093F\u0938\u094D\u0932\u0947\u0915\u094D\u0938\u093F\u092F\u093E \u092B\u0949\u0928\u094D\u091F",
        Language: "\u092D\u093E\u0937\u093E",
        "Accessibility widget": "\u0938\u0941\u0932\u092D\u0924\u093E \u092E\u0947\u0928\u0942 \u0916\u094B\u0932\u0947\u0902",
        "Accessibility Profiles": "\u0938\u0941\u0932\u092D\u0924\u093E \u092A\u094D\u0930\u094B\u092B\u093C\u093E\u0907\u0932",
        "Cognitive Disability": "\u0938\u0902\u091C\u094D\u091E\u093E\u0928\u093E\u0924\u094D\u092E\u0915 \u0935\u093F\u0915\u0932\u093E\u0902\u0917\u0924\u093E",
        "Seizure Safe": "\u0926\u094C\u0930\u093E \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924",
        "Accessibility statement": "\u0938\u0941\u0932\u092D\u0924\u093E \u0935\u093F\u0935\u0930\u0923",
        ADHD: "ADHD",
        "Low Vision": "\u0915\u092E \u0926\u0943\u0937\u094D\u091F\u093F",
        "Pause Animations": "\u090F\u0928\u093F\u092E\u0947\u0936\u0928 \u0930\u094B\u0915\u0947\u0902",
        "Animation paused": "\u090F\u0928\u093F\u092E\u0947\u0936\u0928 \u0930\u094B\u0915\u093E \u0917\u092F\u093E",
        "Reset all settings": "\u0938\u0947\u091F\u093F\u0902\u0917\u094D\u0938 \u0930\u0940\u0938\u0947\u091F \u0915\u0930\u0947\u0902",
        "Shortcut:": "\u0936\u0949\u0930\u094D\u091F\u0915\u091F:",
        "Epilepsy Safe Mode": "\u092E\u093F\u0930\u094D\u0917\u0940 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u092E\u094B\u0921",
        "Mute sounds": "\u0927\u094D\u0935\u0928\u093F \u092E\u094D\u092F\u0942\u091F \u0915\u0930\u0947\u0902",
        "Page read": "\u092A\u0947\u091C \u092A\u0922\u093C\u0947\u0902",
        "Page read controls": "\u092A\u0947\u091C \u092A\u0922\u093C\u0928\u0947 \u0915\u0947 \u0928\u093F\u092F\u0902\u0924\u094D\u0930\u0923",
        Pause: "\u0930\u094B\u0915\u0947\u0902",
        Resume: "\u092B\u093F\u0930 \u0938\u0947 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902",
        Stop: "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
        Settings: "\u0938\u0947\u091F\u093F\u0902\u0917\u094D\u0938",
        Speed: "\u0917\u0924\u093F",
        Voice: "\u0906\u0935\u093E\u091C\u093C",
        "Close accessibility menu": "\u0938\u0941\u0932\u092D\u0924\u093E \u092E\u0947\u0928\u0942 \u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
        "Back to accessibility menu": "\u0938\u0941\u0932\u092D\u0924\u093E \u092E\u0947\u0928\u0942 \u092A\u0930 \u0935\u093E\u092A\u0938 \u091C\u093E\u090F\u0902",
        "Search languages": "\u092D\u093E\u0937\u093E\u090F\u0902 \u0916\u094B\u091C\u0947\u0902",
        "Selected language": "\u091A\u092F\u0928\u093F\u0924 \u092D\u093E\u0937\u093E",
        "View accessibility statement (opens in new window)": "\u0938\u0941\u0932\u092D\u0924\u093E \u0935\u093F\u0935\u0930\u0923 \u0926\u0947\u0916\u0947\u0902 (\u0928\u0908 \u0935\u093F\u0902\u0921\u094B \u092E\u0947\u0902 \u0916\u0941\u0932\u0924\u093E \u0939\u0948)",
        "Visit CookieYes website (opens in new window)": "CookieYes \u0935\u0947\u092C\u0938\u093E\u0907\u091F \u092A\u0930 \u091C\u093E\u090F\u0902 (\u0928\u0908 \u0935\u093F\u0902\u0921\u094B \u092E\u0947\u0902 \u0916\u0941\u0932\u0924\u093E \u0939\u0948)",
        "Reset all accessibility settings to default": "\u0938\u092D\u0940 \u0938\u0941\u0932\u092D\u0924\u093E \u0938\u0947\u091F\u093F\u0902\u0917\u094D\u0938 \u0915\u094B \u0921\u093F\u092B\u093C\u0949\u0932\u094D\u091F \u092A\u0930 \u0930\u0940\u0938\u0947\u091F \u0915\u0930\u0947\u0902"
      };
    }
  });

  // src/locales/hr.json
  var require_hr = __commonJS({
    "src/locales/hr.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Izbornik pristupa\u010Dnosti",
        Close: "Zatvori",
        "Text and Reading": "Tekst i \u010Ditanje",
        "Navigation and Interaction": "Navigacija i interakcija",
        "Text Align": "Poravnanje teksta",
        "Align Left": "Poravnaj lijevo",
        "Align Center": "Poravnaj na sredinu",
        "Align Right": "Poravnaj desno",
        "Adjust Font Size": "Prilagodi veli\u010Dinu fonta",
        "Highlight Title": "Istakni naslov",
        "Highlight Links": "Istakni poveznice",
        "Readable Font": "\u010Citljiv font",
        "Color and Contrast": "Boja i kontrast",
        "Dark Contrast": "Tamni kontrast",
        "Light Contrast": "Svijetli kontrast",
        "High Contrast": "Visoki kontrast",
        "High Saturation": "Visoka zasi\u0107enost",
        "Low Saturation": "Niska zasi\u0107enost",
        Monochrome: "Jednobojno",
        Tools: "Alati",
        "Reading Guide": "Vodi\u010D za \u010Ditanje",
        "Big Cursor": "Veliki kursor",
        "Increase Font Size": "Pove\u0107aj veli\u010Dinu fonta",
        "Decrease Font Size": "Smanji veli\u010Dinu fonta",
        "Letter Spacing": "Razmak izme\u0111u slova",
        "Line Height": "Visina linije",
        "Font Weight": "Debljina fonta",
        "Dyslexia Font": "Font za disleksiju",
        Language: "Jezik",
        "Accessibility widget": "Otvori izbornik pristupa\u010Dnosti",
        "Accessibility Profiles": "Profili pristupa\u010Dnosti",
        "Cognitive Disability": "Kognitivni invaliditet",
        "Seizure Safe": "Sigurno za epilepsiju",
        "Accessibility statement": "Izjava o pristupa\u010Dnosti",
        ADHD: "ADHD",
        "Low Vision": "Slabovidnost",
        "Pause Animations": "Zaustavi animacije",
        "Animation paused": "Animacija pauzirana",
        "Reset all settings": "Resetiraj postavke",
        "Shortcut:": "Pre\u010Dac:",
        "Epilepsy Safe Mode": "Na\u010Din siguran za epilepsiju",
        "Mute sounds": "Isklju\u010Di zvukove",
        "Page read": "\u010Citanje stranice",
        "Page read controls": "Kontrole \u010Ditanja stranice",
        Pause: "Pauziraj",
        Resume: "Nastavi",
        Stop: "Zaustavi",
        Settings: "Postavke",
        Speed: "Brzina",
        Voice: "Glas",
        "Close accessibility menu": "Zatvori izbornik pristupa\u010Dnosti",
        "Back to accessibility menu": "Natrag na izbornik pristupa\u010Dnosti",
        "Search languages": "Pretra\u017Ei jezike",
        "Selected language": "Odabrani jezik",
        "View accessibility statement (opens in new window)": "Prika\u017Ei izjavu o pristupa\u010Dnosti (otvara se u novom prozoru)",
        "Visit CookieYes website (opens in new window)": "Posjeti web-stranicu CookieYes (otvara se u novom prozoru)",
        "Reset all accessibility settings to default": "Vrati sve postavke pristupa\u010Dnosti na zadano"
      };
    }
  });

  // src/locales/hu.json
  var require_hu = __commonJS({
    "src/locales/hu.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Hozz\xE1f\xE9rhet\u0151s\xE9gi men\xFC",
        Close: "Bez\xE1r\xE1s",
        "Text and Reading": "Sz\xF6veg \xE9s olvas\xE1s",
        "Navigation and Interaction": "Navig\xE1ci\xF3 \xE9s interakci\xF3",
        "Text Align": "Sz\xF6veg igaz\xEDt\xE1sa",
        "Align Left": "Balra igaz\xEDt\xE1s",
        "Align Center": "K\xF6z\xE9pre igaz\xEDt\xE1s",
        "Align Right": "Jobbra igaz\xEDt\xE1s",
        "Adjust Font Size": "Bet\u0171m\xE9ret be\xE1ll\xEDt\xE1sa",
        "Highlight Title": "C\xEDm kiemel\xE9se",
        "Highlight Links": "Linkek kiemel\xE9se",
        "Readable Font": "Olvashat\xF3 bet\u0171t\xEDpus",
        "Color and Contrast": "Sz\xEDn \xE9s kontraszt",
        "Dark Contrast": "S\xF6t\xE9t kontraszt",
        "Light Contrast": "Vil\xE1gos kontraszt",
        "High Contrast": "Magas kontraszt",
        "High Saturation": "Magas tel\xEDtetts\xE9g",
        "Low Saturation": "Alacsony tel\xEDtetts\xE9g",
        Monochrome: "Monokr\xF3m",
        Tools: "Eszk\xF6z\xF6k",
        "Reading Guide": "Olvas\xE1si \xFAtmutat\xF3",
        "Big Cursor": "Nagy kurzor",
        "Increase Font Size": "Bet\u0171m\xE9ret n\xF6vel\xE9se",
        "Decrease Font Size": "Bet\u0171m\xE9ret cs\xF6kkent\xE9se",
        "Letter Spacing": "Bet\u0171t\xE1vols\xE1g",
        "Line Height": "Sormagass\xE1g",
        "Font Weight": "Bet\u0171t\xEDpus vastags\xE1ga",
        "Dyslexia Font": "Diszlexia bet\u0171t\xEDpus",
        Language: "Nyelv",
        "Accessibility widget": "Hozz\xE1f\xE9rhet\u0151s\xE9gi men\xFC megnyit\xE1sa",
        "Accessibility Profiles": "Hozz\xE1f\xE9rhet\u0151s\xE9gi profilok",
        "Cognitive Disability": "Kognit\xEDv fogyat\xE9koss\xE1g",
        "Seizure Safe": "Epilepszi\xE1s rohamokra biztons\xE1gos",
        "Accessibility statement": "Hozz\xE1f\xE9rhet\u0151s\xE9gi nyilatkozat",
        ADHD: "ADHD",
        "Low Vision": "Gyeng\xE9nl\xE1t\xE1s",
        "Pause Animations": "Anim\xE1ci\xF3k le\xE1ll\xEDt\xE1sa",
        "Animation paused": "Anim\xE1ci\xF3 sz\xFCneteltetve",
        "Reset all settings": "Be\xE1ll\xEDt\xE1sok vissza\xE1ll\xEDt\xE1sa",
        "Shortcut:": "Gyorsbillenty\u0171:",
        "Epilepsy Safe Mode": "Epilepszia-biztos m\xF3d",
        "Mute sounds": "Hangok n\xE9m\xEDt\xE1sa",
        "Page read": "Oldal felolvas\xE1sa",
        "Page read controls": "Felolvas\xE1s vez\xE9rl\u0151i",
        Pause: "Sz\xFCnet",
        Resume: "Folytat\xE1s",
        Stop: "Le\xE1ll\xEDt\xE1s",
        Settings: "Be\xE1ll\xEDt\xE1sok",
        Speed: "Sebess\xE9g",
        Voice: "Hang",
        "Close accessibility menu": "Hozz\xE1f\xE9rhet\u0151s\xE9gi men\xFC bez\xE1r\xE1sa",
        "Back to accessibility menu": "Vissza a hozz\xE1f\xE9rhet\u0151s\xE9gi men\xFCbe",
        "Search languages": "Nyelvek keres\xE9se",
        "Selected language": "Kiv\xE1lasztott nyelv",
        "View accessibility statement (opens in new window)": "Hozz\xE1f\xE9rhet\u0151s\xE9gi nyilatkozat megtekint\xE9se (\xFAj ablakban ny\xEDlik meg)",
        "Visit CookieYes website (opens in new window)": "A CookieYes webhely felkeres\xE9se (\xFAj ablakban ny\xEDlik meg)",
        "Reset all accessibility settings to default": "Minden hozz\xE1f\xE9rhet\u0151s\xE9gi be\xE1ll\xEDt\xE1s vissza\xE1ll\xEDt\xE1sa alap\xE9rtelmezettre"
      };
    }
  });

  // src/locales/id.json
  var require_id = __commonJS({
    "src/locales/id.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menu Aksesibilitas",
        Close: "Tutup",
        "Text and Reading": "Teks dan membaca",
        "Navigation and Interaction": "Navigasi dan interaksi",
        "Text Align": "Perataan Teks",
        "Align Left": "Rata Kiri",
        "Align Center": "Rata Tengah",
        "Align Right": "Rata Kanan",
        "Adjust Font Size": "Sesuaikan Ukuran Font",
        "Highlight Title": "Sorot Judul",
        "Highlight Links": "Sorot Tautan",
        "Readable Font": "Font Mudah Dibaca",
        "Color and Contrast": "Warna dan kontras",
        "Dark Contrast": "Kontras Gelap",
        "Light Contrast": "Kontras Terang",
        "High Contrast": "Kontras Tinggi",
        "High Saturation": "Saturasi Tinggi",
        "Low Saturation": "Saturasi Rendah",
        Monochrome: "Monokrom",
        Tools: "Alat",
        "Reading Guide": "Panduan Membaca",
        "Big Cursor": "Kursor Besar",
        "Increase Font Size": "Perbesar Ukuran Font",
        "Decrease Font Size": "Perkecil Ukuran Font",
        "Letter Spacing": "Jarak Huruf",
        "Line Height": "Tinggi Baris",
        "Font Weight": "Ketebalan Font",
        "Dyslexia Font": "Font Disleksia",
        Language: "Bahasa",
        "Accessibility widget": "Buka menu aksesibilitas",
        "Accessibility Profiles": "Profil Aksesibilitas",
        "Cognitive Disability": "Disabilitas Kognitif",
        "Seizure Safe": "Aman untuk Epilepsi",
        "Accessibility statement": "Pernyataan Aksesibilitas",
        ADHD: "ADHD",
        "Low Vision": "Penglihatan Rendah",
        "Pause Animations": "Hentikan Animasi",
        "Animation paused": "Animasi dijeda",
        "Reset all settings": "Atur Ulang Pengaturan",
        "Shortcut:": "Pintasan:",
        "Epilepsy Safe Mode": "Mode Aman Epilepsi",
        "Mute sounds": "Bisukan suara",
        "Page read": "Baca halaman",
        "Page read controls": "Kontrol baca halaman",
        Pause: "Jeda",
        Resume: "Lanjutkan",
        Stop: "Berhenti",
        Settings: "Pengaturan",
        Speed: "Kecepatan",
        Voice: "Suara",
        "Close accessibility menu": "Tutup menu aksesibilitas",
        "Back to accessibility menu": "Kembali ke menu aksesibilitas",
        "Search languages": "Cari bahasa",
        "Selected language": "Bahasa yang dipilih",
        "View accessibility statement (opens in new window)": "Lihat pernyataan aksesibilitas (terbuka di jendela baru)",
        "Visit CookieYes website (opens in new window)": "Kunjungi situs web CookieYes (terbuka di jendela baru)",
        "Reset all accessibility settings to default": "Setel ulang semua pengaturan aksesibilitas ke default"
      };
    }
  });

  // src/locales/it.json
  var require_it = __commonJS({
    "src/locales/it.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menu accessibilit\xE0",
        Close: "Chiudi",
        "Text and Reading": "Testo e lettura",
        "Navigation and Interaction": "Navigazione e interazione",
        "Text Align": "Allineamento del testo",
        "Align Left": "Allinea a sinistra",
        "Align Center": "Centra",
        "Align Right": "Allinea a destra",
        "Adjust Font Size": "Regola Dimensione Carattere",
        "Highlight Title": "Evidenzia Titolo",
        "Highlight Links": "Evidenzia Collegamenti",
        "Readable Font": "Carattere Leggibile",
        "Color and Contrast": "Colore e contrasto",
        "Dark Contrast": "Contrasto Scuro",
        "Light Contrast": "Contrasto Chiaro",
        "High Contrast": "Alto Contrasto",
        "High Saturation": "Alta Saturazione",
        "Low Saturation": "Bassa Saturazione",
        Monochrome: "Monocromatico",
        Tools: "Strumenti",
        "Reading Guide": "Guida alla Lettura",
        "Big Cursor": "Cursore Grande",
        "Increase Font Size": "Aumenta Dimensione Carattere",
        "Decrease Font Size": "Diminuisci Dimensione Carattere",
        "Letter Spacing": "Spaziatura Lettere",
        "Line Height": "Altezza Riga",
        "Font Weight": "Spessore Carattere",
        "Dyslexia Font": "Carattere per Dislessia",
        Language: "Lingua",
        "Accessibility widget": "Apri menu accessibilit\xE0",
        "Accessibility Profiles": "Profili di Accessibilit\xE0",
        "Cognitive Disability": "Disabilit\xE0 Cognitiva",
        "Seizure Safe": "Sicuro per Epilessia",
        "Accessibility statement": "Dichiarazione di Accessibilit\xE0",
        ADHD: "ADHD",
        "Low Vision": "Ipovisione",
        "Pause Animations": "Ferma Animazioni",
        "Animation paused": "Animazione in pausa",
        "Reset all settings": "Ripristina impostazioni",
        "Shortcut:": "Scorciatoia:",
        "Epilepsy Safe Mode": "Modalit\xE0 sicura per l'epilessia",
        "Mute sounds": "Disattiva l'audio",
        "Page read": "Lettura della pagina",
        "Page read controls": "Controlli di lettura",
        Pause: "Pausa",
        Resume: "Riprendi",
        Stop: "Ferma",
        Settings: "Impostazioni",
        Speed: "Velocit\xE0",
        Voice: "Voce",
        "Close accessibility menu": "Chiudi il menu di accessibilit\xE0",
        "Back to accessibility menu": "Torna al menu di accessibilit\xE0",
        "Search languages": "Cerca lingue",
        "Selected language": "Lingua selezionata",
        "View accessibility statement (opens in new window)": "Visualizza la dichiarazione di accessibilit\xE0 (si apre in una nuova finestra)",
        "Visit CookieYes website (opens in new window)": "Visita il sito web di CookieYes (si apre in una nuova finestra)",
        "Reset all accessibility settings to default": "Ripristina tutte le impostazioni di accessibilit\xE0"
      };
    }
  });

  // src/locales/ja.json
  var require_ja = __commonJS({
    "src/locales/ja.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u30E1\u30CB\u30E5\u30FC",
        Close: "\u9589\u3058\u308B",
        "Text and Reading": "\u30C6\u30AD\u30B9\u30C8\u3068\u8AAD\u307F\u3084\u3059\u3055",
        "Navigation and Interaction": "\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u3068\u64CD\u4F5C",
        "Text Align": "\u30C6\u30AD\u30B9\u30C8\u306E\u914D\u7F6E",
        "Align Left": "\u5DE6\u63C3\u3048",
        "Align Center": "\u4E2D\u592E\u63C3\u3048",
        "Align Right": "\u53F3\u63C3\u3048",
        "Adjust Font Size": "\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u8ABF\u6574",
        "Highlight Title": "\u30BF\u30A4\u30C8\u30EB\u3092\u5F37\u8ABF",
        "Highlight Links": "\u30EA\u30F3\u30AF\u3092\u5F37\u8ABF",
        "Readable Font": "\u8AAD\u307F\u3084\u3059\u3044\u30D5\u30A9\u30F3\u30C8",
        "Color and Contrast": "\u8272\u3068\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8",
        "Dark Contrast": "\u6697\u3044\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8",
        "Light Contrast": "\u660E\u308B\u3044\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8",
        "High Contrast": "\u9AD8\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8",
        "High Saturation": "\u9AD8\u5F69\u5EA6",
        "Low Saturation": "\u4F4E\u5F69\u5EA6",
        Monochrome: "\u30E2\u30CE\u30AF\u30ED",
        Tools: "\u30C4\u30FC\u30EB",
        "Reading Guide": "\u30EA\u30FC\u30C7\u30A3\u30F3\u30B0\u30AC\u30A4\u30C9",
        "Big Cursor": "\u5927\u304D\u306A\u30AB\u30FC\u30BD\u30EB",
        "Increase Font Size": "\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u62E1\u5927",
        "Decrease Font Size": "\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u7E2E\u5C0F",
        "Letter Spacing": "\u6587\u5B57\u9593\u9694",
        "Line Height": "\u884C\u306E\u9AD8\u3055",
        "Font Weight": "\u30D5\u30A9\u30F3\u30C8\u306E\u592A\u3055",
        "Dyslexia Font": "\u30C7\u30A3\u30B9\u30EC\u30AF\u30B7\u30A2\u7528\u30D5\u30A9\u30F3\u30C8",
        Language: "\u8A00\u8A9E",
        "Accessibility widget": "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F",
        "Accessibility Profiles": "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB",
        "Cognitive Disability": "\u8A8D\u77E5\u969C\u5BB3",
        "Seizure Safe": "\u767A\u4F5C\u5B89\u5168",
        "Accessibility statement": "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8",
        ADHD: "ADHD",
        "Low Vision": "\u30ED\u30FC\u30D3\u30B8\u30E7\u30F3",
        "Pause Animations": "\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u505C\u6B62",
        "Animation paused": "\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u4E00\u6642\u505C\u6B62\u3057\u307E\u3057\u305F",
        "Reset all settings": "\u8A2D\u5B9A\u3092\u30EA\u30BB\u30C3\u30C8",
        "Shortcut:": "\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8:",
        "Epilepsy Safe Mode": "\u3066\u3093\u304B\u3093\u5B89\u5168\u30E2\u30FC\u30C9",
        "Mute sounds": "\u97F3\u58F0\u3092\u30DF\u30E5\u30FC\u30C8",
        "Page read": "\u30DA\u30FC\u30B8\u8AAD\u307F\u4E0A\u3052",
        "Page read controls": "\u8AAD\u307F\u4E0A\u3052\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB",
        Pause: "\u4E00\u6642\u505C\u6B62",
        Resume: "\u518D\u958B",
        Stop: "\u505C\u6B62",
        Settings: "\u8A2D\u5B9A",
        Speed: "\u901F\u5EA6",
        Voice: "\u97F3\u58F0",
        "Close accessibility menu": "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u30E1\u30CB\u30E5\u30FC\u3092\u9589\u3058\u308B",
        "Back to accessibility menu": "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B",
        "Search languages": "\u8A00\u8A9E\u3092\u691C\u7D22",
        "Selected language": "\u9078\u629E\u4E2D\u306E\u8A00\u8A9E",
        "View accessibility statement (opens in new window)": "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u306B\u95A2\u3059\u308B\u58F0\u660E\u3092\u8868\u793A\uFF08\u65B0\u3057\u3044\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u958B\u304D\u307E\u3059\uFF09",
        "Visit CookieYes website (opens in new window)": "CookieYes \u306E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306B\u30A2\u30AF\u30BB\u30B9\uFF08\u65B0\u3057\u3044\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u958B\u304D\u307E\u3059\uFF09",
        "Reset all accessibility settings to default": "\u3059\u3079\u3066\u306E\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u8A2D\u5B9A\u3092\u521D\u671F\u72B6\u614B\u306B\u623B\u3059"
      };
    }
  });

  // src/locales/ka.json
  var require_ka = __commonJS({
    "src/locales/ka.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u10D0\u10D3\u10D0\u10DE\u10E2\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10DB\u10D4\u10DC\u10D8\u10E3",
        Close: "\u10D3\u10D0\u10EE\u10E3\u10E0\u10D5\u10D0",
        "Text and Reading": "\u10E2\u10D4\u10E5\u10E1\u10E2\u10D8 \u10D3\u10D0 \u10D9\u10D8\u10D7\u10EE\u10D5\u10D0",
        "Navigation and Interaction": "\u10DC\u10D0\u10D5\u10D8\u10D2\u10D0\u10EA\u10D8\u10D0 \u10D3\u10D0 \u10D8\u10DC\u10E2\u10D4\u10E0\u10D0\u10E5\u10EA\u10D8\u10D0",
        "Text Align": "\u10E2\u10D4\u10E5\u10E1\u10E2\u10D8\u10E1 \u10E1\u10EC\u10DD\u10E0\u10D4\u10D1\u10D0",
        "Align Left": "\u10DB\u10D0\u10E0\u10EA\u10EE\u10DC\u10D8\u10D5 \u10D2\u10D0\u10E1\u10EC\u10DD\u10E0\u10D4\u10D1\u10D0",
        "Align Center": "\u10EA\u10D4\u10DC\u10E2\u10E0\u10E8\u10D8 \u10E1\u10EC\u10DD\u10E0\u10D4\u10D1\u10D0",
        "Align Right": "\u10DB\u10D0\u10E0\u10EF\u10D5\u10DC\u10D8\u10D5 \u10E1\u10EC\u10DD\u10E0\u10D4\u10D1\u10D0",
        "Adjust Font Size": "\u10E4\u10DD\u10DC\u10E2\u10D8\u10E1 \u10D6\u10DD\u10DB\u10D8\u10E1 \u10DB\u10DD\u10E0\u10D2\u10D4\u10D1\u10D0",
        "Highlight Title": "\u10E1\u10D0\u10D7\u10D0\u10E3\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10DB\u10DD\u10E7\u10DD\u10E4\u10D0",
        "Highlight Links": "\u10D1\u10DB\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10DB\u10DD\u10E7\u10DD\u10E4\u10D0",
        "Readable Font": "\u10EC\u10D0\u10D9\u10D8\u10D7\u10EE\u10D5\u10D0\u10D3\u10D8 \u10E4\u10DD\u10DC\u10E2\u10D8",
        "Color and Contrast": "\u10E4\u10D4\u10E0\u10D8 \u10D3\u10D0 \u10D9\u10DD\u10DC\u10E2\u10E0\u10D0\u10E1\u10E2\u10D8",
        "Dark Contrast": "\u10DB\u10E3\u10E5\u10D8 \u10D9\u10DD\u10DC\u10E2\u10E0\u10D0\u10E1\u10E2\u10D8",
        "Light Contrast": "\u10E6\u10D8\u10D0 \u10D9\u10DD\u10DC\u10E2\u10E0\u10D0\u10E1\u10E2\u10D8",
        "High Contrast": "\u10DB\u10D0\u10E6\u10D0\u10DA\u10D8 \u10D9\u10DD\u10DC\u10E2\u10E0\u10D0\u10E1\u10E2\u10D8",
        "High Saturation": "\u10DB\u10D0\u10E6\u10D0\u10DA\u10D8 \u10D2\u10D0\u10EF\u10D4\u10E0\u10D4\u10D1\u10D0",
        "Low Saturation": "\u10D3\u10D0\u10D1\u10D0\u10DA\u10D8 \u10D2\u10D0\u10EF\u10D4\u10E0\u10D4\u10D1\u10D0",
        Monochrome: "\u10D4\u10E0\u10D7\u10E4\u10D4\u10E0\u10DD\u10D5\u10D0\u10DC\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E1\u10D0\u10EE\u10E3\u10DA\u10D4\u10D1\u10D0",
        Tools: "\u10EE\u10D4\u10DA\u10E1\u10D0\u10EC\u10E7\u10DD\u10D4\u10D1\u10D8",
        "Reading Guide": "\u10D9\u10D8\u10D7\u10EE\u10D5\u10D8\u10E1 \u10D2\u10D0\u10DB\u10E7\u10DD\u10DA\u10D8 \u10D6\u10DD\u10DA\u10D8",
        "Big Cursor": "\u10D3\u10D8\u10D3\u10D8 \u10D9\u10E3\u10E0\u10E1\u10DD\u10E0\u10D8",
        "Increase Font Size": "\u10E4\u10DD\u10DC\u10E2\u10D8\u10E1 \u10D6\u10DD\u10DB\u10D8\u10E1 \u10D2\u10D0\u10D6\u10E0\u10D3\u10D0",
        "Decrease Font Size": "\u10E4\u10DD\u10DC\u10E2\u10D8\u10E1 \u10D6\u10DD\u10DB\u10D8\u10E1 \u10E8\u10D4\u10DB\u10EA\u10D8\u10E0\u10D4\u10D1\u10D0",
        "Letter Spacing": "\u10D0\u10E1\u10DD\u10D4\u10D1\u10E1 \u10E8\u10DD\u10E0\u10D8\u10E1 \u10D3\u10D0\u10E8\u10DD\u10E0\u10D4\u10D1\u10D0",
        "Line Height": "\u10EE\u10D0\u10D6\u10D8\u10E1 \u10E1\u10D8\u10DB\u10D0\u10E6\u10DA\u10D4",
        "Font Weight": "\u10E4\u10DD\u10DC\u10E2\u10D8\u10E1 \u10EC\u10DD\u10DC\u10D0",
        "Dyslexia Font": "\u10D3\u10D8\u10E1\u10DA\u10D4\u10E5\u10E1\u10D8\u10E3\u10E0\u10D8 \u10E4\u10DD\u10DC\u10E2\u10D8",
        Language: "\u10D4\u10DC\u10D0",
        "Accessibility widget": "\u10D2\u10D0\u10EE\u10E1\u10D4\u10DC\u10D8 \u10D0\u10D3\u10D0\u10DE\u10E2\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10DB\u10D4\u10DC\u10D8\u10E3",
        "Accessibility Profiles": "\u10D0\u10D3\u10D0\u10DE\u10E2\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10DE\u10E0\u10DD\u10E4\u10D8\u10DA\u10D4\u10D1\u10D8",
        "Cognitive Disability": "\u10D9\u10DD\u10D2\u10DC\u10D8\u10E2\u10D8\u10E3\u10E0\u10D8 \u10E8\u10D4\u10D6\u10E6\u10E3\u10D3\u10D5\u10D0",
        "Seizure Safe": "\u10E3\u10E1\u10D0\u10E4\u10E0\u10D7\u10EE\u10DD \u10D4\u10DE\u10D8\u10DA\u10D4\u10E4\u10E1\u10D8\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1",
        "Accessibility statement": "\u10D0\u10D3\u10D0\u10DE\u10E2\u10D8\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D3\u10D4\u10D9\u10DA\u10D0\u10E0\u10D0\u10EA\u10D8\u10D0",
        ADHD: "ADHD",
        "Low Vision": "\u10D3\u10D0\u10E5\u10D5\u10D4\u10D8\u10D7\u10D4\u10D1\u10E3\u10DA\u10D8 \u10DB\u10EE\u10D4\u10D3\u10D5\u10D4\u10DA\u10DD\u10D1\u10D0",
        "Pause Animations": "\u10D0\u10DC\u10D8\u10DB\u10D0\u10EA\u10D8\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E9\u10D4\u10E0\u10D4\u10D1\u10D0",
        "Animation paused": "\u10D0\u10DC\u10D8\u10DB\u10D0\u10EA\u10D8\u10D0 \u10E8\u10D4\u10E9\u10D4\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0",
        "Reset all settings": "\u10DE\u10D0\u10E0\u10D0\u10DB\u10D4\u10E2\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D3\u10D0\u10D1\u10E0\u10E3\u10DC\u10D4\u10D1\u10D0",
        "Shortcut:": "\u10DB\u10D0\u10DA\u10E1\u10D0\u10EE\u10DB\u10DD\u10D1\u10D8:",
        "Epilepsy Safe Mode": "\u10D4\u10DE\u10D8\u10DA\u10D4\u10E4\u10E1\u10D8\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1 \u10E3\u10E1\u10D0\u10E4\u10E0\u10D7\u10EE\u10DD \u10E0\u10D4\u10DF\u10D8\u10DB\u10D8",
        "Mute sounds": "\u10EE\u10DB\u10D8\u10E1 \u10D3\u10D0\u10D3\u10E3\u10DB\u10D4\u10D1\u10D0",
        "Page read": "\u10D2\u10D5\u10D4\u10E0\u10D3\u10D8\u10E1 \u10EC\u10D0\u10D9\u10D8\u10D7\u10EE\u10D5\u10D0",
        "Page read controls": "\u10D2\u10D5\u10D4\u10E0\u10D3\u10D8\u10E1 \u10EC\u10D0\u10D9\u10D8\u10D7\u10EE\u10D5\u10D8\u10E1 \u10DB\u10D0\u10E0\u10D7\u10D5\u10D0",
        Pause: "\u10DE\u10D0\u10E3\u10D6\u10D0",
        Resume: "\u10D2\u10D0\u10D2\u10E0\u10EB\u10D4\u10DA\u10D4\u10D1\u10D0",
        Stop: "\u10E8\u10D4\u10E9\u10D4\u10E0\u10D4\u10D1\u10D0",
        Settings: "\u10DE\u10D0\u10E0\u10D0\u10DB\u10D4\u10E2\u10E0\u10D4\u10D1\u10D8",
        Speed: "\u10E1\u10D8\u10E9\u10E5\u10D0\u10E0\u10D4",
        Voice: "\u10EE\u10DB\u10D0",
        "Close accessibility menu": "\u10EE\u10D4\u10DA\u10DB\u10D8\u10E1\u10D0\u10EC\u10D5\u10D3\u10DD\u10DB\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D4\u10DC\u10D8\u10E3\u10E1 \u10D3\u10D0\u10EE\u10E3\u10E0\u10D5\u10D0",
        "Back to accessibility menu": "\u10EE\u10D4\u10DA\u10DB\u10D8\u10E1\u10D0\u10EC\u10D5\u10D3\u10DD\u10DB\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D4\u10DC\u10D8\u10E3\u10E8\u10D8 \u10D3\u10D0\u10D1\u10E0\u10E3\u10DC\u10D4\u10D1\u10D0",
        "Search languages": "\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1 \u10EB\u10D8\u10D4\u10D1\u10D0",
        "Selected language": "\u10D0\u10E0\u10E9\u10D4\u10E3\u10DA\u10D8 \u10D4\u10DC\u10D0",
        "View accessibility statement (opens in new window)": "\u10EE\u10D4\u10DA\u10DB\u10D8\u10E1\u10D0\u10EC\u10D5\u10D3\u10DD\u10DB\u10DD\u10D1\u10D8\u10E1 \u10D2\u10D0\u10DC\u10EA\u10EE\u10D0\u10D3\u10D4\u10D1\u10D8\u10E1 \u10DC\u10D0\u10EE\u10D5\u10D0 (\u10D8\u10EE\u10E1\u10DC\u10D4\u10D1\u10D0 \u10D0\u10EE\u10D0\u10DA \u10E4\u10D0\u10DC\u10EF\u10D0\u10E0\u10D0\u10E8\u10D8)",
        "Visit CookieYes website (opens in new window)": "CookieYes-\u10D8\u10E1 \u10D5\u10D4\u10D1\u10E1\u10D0\u10D8\u10E2\u10D8\u10E1 \u10DB\u10DD\u10DC\u10D0\u10EE\u10E3\u10DA\u10D4\u10D1\u10D0 (\u10D8\u10EE\u10E1\u10DC\u10D4\u10D1\u10D0 \u10D0\u10EE\u10D0\u10DA \u10E4\u10D0\u10DC\u10EF\u10D0\u10E0\u10D0\u10E8\u10D8)",
        "Reset all accessibility settings to default": "\u10EE\u10D4\u10DA\u10DB\u10D8\u10E1\u10D0\u10EC\u10D5\u10D3\u10DD\u10DB\u10DD\u10D1\u10D8\u10E1 \u10E7\u10D5\u10D4\u10DA\u10D0 \u10DE\u10D0\u10E0\u10D0\u10DB\u10D4\u10E2\u10E0\u10D8\u10E1 \u10DC\u10D0\u10D2\u10E3\u10DA\u10D8\u10E1\u10EE\u10DB\u10D4\u10D5\u10D6\u10D4 \u10D3\u10D0\u10D1\u10E0\u10E3\u10DC\u10D4\u10D1\u10D0"
      };
    }
  });

  // src/locales/kn.json
  var require_kn = __commonJS({
    "src/locales/kn.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CAE\u0CBE\u0CA1\u0CC1\u0CB5\u0CBF\u0C95\u0CC6 \u0CAE\u0CC6\u0CA8\u0CC1",
        Close: "\u0CAE\u0CC1\u0C9A\u0CCD\u0C9A\u0CBF",
        "Text and Reading": "\u0CAA\u0CA0\u0CCD\u0CAF \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0C93\u0CA6\u0CC1\u0CB5\u0CBF\u0C95\u0CC6",
        "Navigation and Interaction": "\u0CA8\u0CCD\u0CAF\u0CBE\u0CB5\u0CBF\u0C97\u0CC7\u0CB6\u0CA8\u0CCD \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0CB8\u0C82\u0CB5\u0CB9\u0CA8",
        "Text Align": "\u0CAA\u0CA0\u0CCD\u0CAF \u0C9C\u0CCB\u0CA1\u0CA3\u0CC6",
        "Align Left": "\u0C8E\u0CA1\u0C95\u0CCD\u0C95\u0CC6 \u0C9C\u0CCB\u0CA1\u0CBF\u0CB8\u0CBF",
        "Align Center": "\u0CAE\u0CA7\u0CCD\u0CAF\u0C95\u0CCD\u0C95\u0CC6 \u0C9C\u0CCB\u0CA1\u0CBF\u0CB8\u0CBF",
        "Align Right": "\u0CAC\u0CB2\u0C95\u0CCD\u0C95\u0CC6 \u0C9C\u0CCB\u0CA1\u0CBF\u0CB8\u0CBF",
        "Adjust Font Size": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CA6 \u0C97\u0CBE\u0CA4\u0CCD\u0CB0\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0CCA\u0C82\u0CA6\u0CBF\u0CB8\u0CBF",
        "Highlight Title": "\u0CB6\u0CC0\u0CB0\u0CCD\u0CB7\u0CBF\u0C95\u0CC6\u0CAF\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0CC8\u0CB2\u0CC8\u0C9F\u0CCD \u0CAE\u0CBE\u0CA1\u0CBF",
        "Highlight Links": "\u0CB2\u0CBF\u0C82\u0C95\u0CCD\u200C\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0CC8\u0CB2\u0CC8\u0C9F\u0CCD \u0CAE\u0CBE\u0CA1\u0CBF",
        "Readable Font": "\u0C93\u0CA6\u0CB2\u0CC1 \u0CB8\u0CC1\u0CB2\u0CAD\u0CB5\u0CBE\u0CA6 \u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CB6\u0CC8\u0CB2\u0CBF",
        "Color and Contrast": "\u0CAC\u0CA3\u0CCD\u0CA3 \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0C95\u0CBE\u0C82\u0C9F\u0CCD\u0CB0\u0CBE\u0CB8\u0CCD\u0C9F\u0CCD",
        "Dark Contrast": "\u0C97\u0CBE\u0CA2 \u0CB5\u0CCD\u0CAF\u0CA4\u0CCD\u0CAF\u0CBE\u0CB8",
        "Light Contrast": "\u0CA4\u0CBF\u0CB3\u0CBF \u0CB5\u0CCD\u0CAF\u0CA4\u0CCD\u0CAF\u0CBE\u0CB8",
        "High Contrast": "\u0CB9\u0CC6\u0C9A\u0CCD\u0C9A\u0CC1 \u0CB5\u0CCD\u0CAF\u0CA4\u0CCD\u0CAF\u0CBE\u0CB8",
        "High Saturation": "\u0CB9\u0CC6\u0C9A\u0CCD\u0C9A\u0CC1 \u0CB8\u0CCD\u0CAF\u0CBE\u0C9A\u0CC1\u0CB0\u0CC7\u0CB6\u0CA8\u0CCD",
        "Low Saturation": "\u0C95\u0CA1\u0CBF\u0CAE\u0CC6 \u0CB8\u0CCD\u0CAF\u0CBE\u0C9A\u0CC1\u0CB0\u0CC7\u0CB6\u0CA8\u0CCD",
        Monochrome: "\u0C8F\u0C95\u0CB5\u0CB0\u0CCD\u0CA3",
        Tools: "\u0C89\u0CAA\u0C95\u0CB0\u0CA3\u0C97\u0CB3\u0CC1",
        "Reading Guide": "\u0C93\u0CA6\u0CC1\u0CB5 \u0CAE\u0CBE\u0CB0\u0CCD\u0C97\u0CA6\u0CB0\u0CCD\u0CB6\u0CBF",
        "Big Cursor": "\u0CA6\u0CCA\u0CA1\u0CCD\u0CA1 \u0C95\u0CB0\u0CCD\u0CB8\u0CB0\u0CCD",
        "Increase Font Size": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CA6 \u0C97\u0CBE\u0CA4\u0CCD\u0CB0\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0CC6\u0C9A\u0CCD\u0C9A\u0CBF\u0CB8\u0CBF",
        "Decrease Font Size": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CA6 \u0C97\u0CBE\u0CA4\u0CCD\u0CB0\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6 \u0CAE\u0CBE\u0CA1\u0CBF",
        "Letter Spacing": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0C97\u0CB3 \u0CA8\u0CA1\u0CC1\u0CB5\u0CBF\u0CA8 \u0C85\u0C82\u0CA4\u0CB0",
        "Line Height": "\u0CB8\u0CBE\u0CB2\u0CBF\u0CA8 \u0C8E\u0CA4\u0CCD\u0CA4\u0CB0",
        "Font Weight": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CA6 \u0CA4\u0CC2\u0C95",
        "Dyslexia Font": "\u0CA1\u0CBF\u0CB8\u0CCD\u0CB2\u0CC6\u0C95\u0CCD\u0CB8\u0CBF\u0CAF\u0CBE \u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CB6\u0CC8\u0CB2\u0CBF",
        Language: "\u0CAD\u0CBE\u0CB7\u0CC6",
        "Accessibility widget": "\u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CAE\u0CBE\u0CA1\u0CC1\u0CB5\u0CBF\u0C95\u0CC6 \u0CAE\u0CC6\u0CA8\u0CC1 \u0C85\u0CA8\u0CCD\u0CA8\u0CC1 \u0CA4\u0CC6\u0CB0\u0CC6\u0CAF\u0CBF\u0CB0\u0CBF",
        "Accessibility Profiles": "\u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CAE\u0CBE\u0CA1\u0CC1\u0CB5\u0CBF\u0C95\u0CC6 \u0CAA\u0CCD\u0CB0\u0CCA\u0CAB\u0CC8\u0CB2\u0CCD\u200C\u0C97\u0CB3\u0CC1",
        "Cognitive Disability": "\u0C9C\u0CCD\u0C9E\u0CBE\u0CA8\u0CBE\u0CA4\u0CCD\u0CAE\u0C95 \u0C85\u0C82\u0C97\u0CB5\u0CC8\u0C95\u0CB2\u0CCD\u0CAF",
        "Seizure Safe": "\u0C85\u0CAA\u0CB8\u0CCD\u0CAE\u0CBE\u0CB0\u0C95\u0CCD\u0C95\u0CC6 \u0CB8\u0CC1\u0CB0\u0C95\u0CCD\u0CB7\u0CBF\u0CA4",
        "Accessibility statement": "\u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CAE\u0CBE\u0CA1\u0CC1\u0CB5\u0CBF\u0C95\u0CC6 \u0CB9\u0CC7\u0CB3\u0CBF\u0C95\u0CC6",
        ADHD: "ADHD",
        "Low Vision": "\u0C95\u0CA1\u0CBF\u0CAE\u0CC6 \u0CA6\u0CC3\u0CB7\u0CCD\u0C9F\u0CBF",
        "Pause Animations": "\u0C85\u0CA8\u0CBF\u0CAE\u0CC7\u0CB6\u0CA8\u0CCD\u200C\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CA8\u0CBF\u0CB2\u0CCD\u0CB2\u0CBF\u0CB8\u0CBF",
        "Animation paused": "\u0C85\u0CA8\u0CBF\u0CAE\u0CC7\u0CB6\u0CA8\u0CCD \u0CB5\u0CBF\u0CB0\u0CBE\u0CAE\u0C97\u0CCA\u0CB3\u0CBF\u0CB8\u0CB2\u0CBE\u0C97\u0CBF\u0CA6\u0CC6",
        "Reset all settings": "\u0CB8\u0CC6\u0C9F\u0CCD\u0C9F\u0CBF\u0C82\u0C97\u0CCD\u200C\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CAE\u0CB0\u0CC1\u0CB9\u0CCA\u0C82\u0CA6\u0CBF\u0CB8\u0CBF",
        "Shortcut:": "\u0CB6\u0CBE\u0CB0\u0CCD\u0C9F\u0CCD\u200C\u0C95\u0C9F\u0CCD:",
        "Epilepsy Safe Mode": "\u0C85\u0CAA\u0CB8\u0CCD\u0CAE\u0CBE\u0CB0 \u0CB8\u0CC1\u0CB0\u0C95\u0CCD\u0CB7\u0CBF\u0CA4 \u0CAE\u0CCB\u0CA1\u0CCD",
        "Mute sounds": "\u0CB6\u0CAC\u0CCD\u0CA6\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CAE\u0CCD\u0CAF\u0CC2\u0C9F\u0CCD \u0CAE\u0CBE\u0CA1\u0CBF",
        "Page read": "\u0CAA\u0CC1\u0C9F\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0C93\u0CA6\u0CBF",
        "Page read controls": "\u0CAA\u0CC1\u0C9F \u0C93\u0CA6\u0CC1\u0CB5 \u0CA8\u0CBF\u0CAF\u0C82\u0CA4\u0CCD\u0CB0\u0CA3\u0C97\u0CB3\u0CC1",
        Pause: "\u0CB5\u0CBF\u0CB0\u0CBE\u0CAE",
        Resume: "\u0CAE\u0CC1\u0C82\u0CA6\u0CC1\u0CB5\u0CB0\u0CBF\u0CB8\u0CBF",
        Stop: "\u0CA8\u0CBF\u0CB2\u0CCD\u0CB2\u0CBF\u0CB8\u0CBF",
        Settings: "\u0CB8\u0CC6\u0C9F\u0CCD\u0C9F\u0CBF\u0C82\u0C97\u0CCD\u200C\u0C97\u0CB3\u0CC1",
        Speed: "\u0CB5\u0CC7\u0C97",
        Voice: "\u0CA7\u0CCD\u0CB5\u0CA8\u0CBF",
        "Close accessibility menu": "\u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CBF\u0CB8\u0CC1\u0CB5\u0CBF\u0C95\u0CC6 \u0CAE\u0CC6\u0CA8\u0CC1\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0CAE\u0CC1\u0C9A\u0CCD\u0C9A\u0CBF",
        "Back to accessibility menu": "\u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CBF\u0CB8\u0CC1\u0CB5\u0CBF\u0C95\u0CC6 \u0CAE\u0CC6\u0CA8\u0CC1\u0C97\u0CC6 \u0CB9\u0CBF\u0C82\u0CA4\u0CBF\u0CB0\u0CC1\u0C97\u0CBF",
        "Search languages": "\u0CAD\u0CBE\u0CB7\u0CC6\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0CC1\u0CA1\u0CC1\u0C95\u0CBF",
        "Selected language": "\u0C86\u0CAF\u0CCD\u0C95\u0CC6 \u0CAE\u0CBE\u0CA1\u0CBF\u0CA6 \u0CAD\u0CBE\u0CB7\u0CC6",
        "View accessibility statement (opens in new window)": "\u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CBF\u0CB8\u0CC1\u0CB5\u0CBF\u0C95\u0CC6 \u0CB9\u0CC7\u0CB3\u0CBF\u0C95\u0CC6\u0CAF\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB5\u0CC0\u0C95\u0CCD\u0CB7\u0CBF\u0CB8\u0CBF (\u0CB9\u0CCA\u0CB8 \u0CB5\u0CBF\u0C82\u0CA1\u0CCB\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF \u0CA4\u0CC6\u0CB0\u0CC6\u0CAF\u0CC1\u0CA4\u0CCD\u0CA4\u0CA6\u0CC6)",
        "Visit CookieYes website (opens in new window)": "CookieYes \u0CB5\u0CC6\u0CAC\u0CCD\u200C\u0CB8\u0CC8\u0C9F\u0CCD\u200C\u0C97\u0CC6 \u0CAD\u0CC7\u0C9F\u0CBF \u0CA8\u0CC0\u0CA1\u0CBF (\u0CB9\u0CCA\u0CB8 \u0CB5\u0CBF\u0C82\u0CA1\u0CCB\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF \u0CA4\u0CC6\u0CB0\u0CC6\u0CAF\u0CC1\u0CA4\u0CCD\u0CA4\u0CA6\u0CC6)",
        "Reset all accessibility settings to default": "\u0C8E\u0CB2\u0CCD\u0CB2\u0CBE \u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CBF\u0CB8\u0CC1\u0CB5\u0CBF\u0C95\u0CC6 \u0CB8\u0CC6\u0C9F\u0CCD\u0C9F\u0CBF\u0C82\u0C97\u0CCD\u200C\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CA1\u0CC0\u0CAB\u0CBE\u0CB2\u0CCD\u0C9F\u0CCD\u200C\u0C97\u0CC6 \u0CAE\u0CB0\u0CC1\u0CB9\u0CCA\u0C82\u0CA6\u0CBF\u0CB8\u0CBF"
      };
    }
  });

  // src/locales/ko.json
  var require_ko = __commonJS({
    "src/locales/ko.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\uC811\uADFC\uC131 \uBA54\uB274",
        Close: "\uB2EB\uAE30",
        "Text and Reading": "\uD14D\uC2A4\uD2B8 \uBC0F \uC77D\uAE30",
        "Navigation and Interaction": "\uD0D0\uC0C9 \uBC0F \uC0C1\uD638\uC791\uC6A9",
        "Text Align": "\uD14D\uC2A4\uD2B8 \uC815\uB82C",
        "Align Left": "\uC67C\uCABD \uC815\uB82C",
        "Align Center": "\uAC00\uC6B4\uB370 \uC815\uB82C",
        "Align Right": "\uC624\uB978\uCABD \uC815\uB82C",
        "Adjust Font Size": "\uAE00\uAF34 \uD06C\uAE30 \uC870\uC815",
        "Highlight Title": "\uC81C\uBAA9 \uAC15\uC870",
        "Highlight Links": "\uB9C1\uD06C \uAC15\uC870",
        "Readable Font": "\uAC00\uB3C5\uC131 \uC88B\uC740 \uAE00\uAF34",
        "Color and Contrast": "\uC0C9\uC0C1 \uBC0F \uB300\uBE44",
        "Dark Contrast": "\uC5B4\uB450\uC6B4 \uB300\uBE44",
        "Light Contrast": "\uBC1D\uC740 \uB300\uBE44",
        "High Contrast": "\uB192\uC740 \uB300\uBE44",
        "High Saturation": "\uB192\uC740 \uCC44\uB3C4",
        "Low Saturation": "\uB0AE\uC740 \uCC44\uB3C4",
        Monochrome: "\uB2E8\uC0C9",
        Tools: "\uB3C4\uAD6C",
        "Reading Guide": "\uC77D\uAE30 \uAC00\uC774\uB4DC",
        "Big Cursor": "\uD070 \uCEE4\uC11C",
        "Increase Font Size": "\uAE00\uAF34 \uD06C\uAE30 \uC99D\uAC00",
        "Decrease Font Size": "\uAE00\uAF34 \uD06C\uAE30 \uAC10\uC18C",
        "Letter Spacing": "\uC790\uAC04",
        "Line Height": "\uC904 \uAC04\uACA9",
        "Font Weight": "\uAE00\uAF34 \uB450\uAED8",
        "Dyslexia Font": "\uB09C\uB3C5\uC99D\uC6A9 \uAE00\uAF34",
        Language: "\uC5B8\uC5B4",
        "Accessibility widget": "\uC811\uADFC\uC131 \uBA54\uB274 \uC5F4\uAE30",
        "Accessibility Profiles": "\uC811\uADFC\uC131 \uD504\uB85C\uD544",
        "Cognitive Disability": "\uC778\uC9C0 \uC7A5\uC560",
        "Seizure Safe": "\uBC1C\uC791 \uC548\uC804",
        "Accessibility statement": "\uC811\uADFC\uC131 \uC815\uCC45",
        ADHD: "ADHD",
        "Low Vision": "\uC800\uC2DC\uB825",
        "Pause Animations": "\uC560\uB2C8\uBA54\uC774\uC158 \uC911\uC9C0",
        "Animation paused": "\uC560\uB2C8\uBA54\uC774\uC158 \uC77C\uC2DC\uC815\uC9C0\uB428",
        "Reset all settings": "\uC124\uC815 \uCD08\uAE30\uD654",
        "Shortcut:": "\uB2E8\uCD95\uD0A4:",
        "Epilepsy Safe Mode": "\uB1CC\uC804\uC99D \uC548\uC804 \uBAA8\uB4DC",
        "Mute sounds": "\uC18C\uB9AC \uC74C\uC18C\uAC70",
        "Page read": "\uD398\uC774\uC9C0 \uC77D\uAE30",
        "Page read controls": "\uD398\uC774\uC9C0 \uC77D\uAE30 \uC81C\uC5B4",
        Pause: "\uC77C\uC2DC\uC815\uC9C0",
        Resume: "\uB2E4\uC2DC \uC2DC\uC791",
        Stop: "\uC815\uC9C0",
        Settings: "\uC124\uC815",
        Speed: "\uC18D\uB3C4",
        Voice: "\uC74C\uC131",
        "Close accessibility menu": "\uC811\uADFC\uC131 \uBA54\uB274 \uB2EB\uAE30",
        "Back to accessibility menu": "\uC811\uADFC\uC131 \uBA54\uB274\uB85C \uB3CC\uC544\uAC00\uAE30",
        "Search languages": "\uC5B8\uC5B4 \uAC80\uC0C9",
        "Selected language": "\uC120\uD0DD\uB41C \uC5B8\uC5B4",
        "View accessibility statement (opens in new window)": "\uC811\uADFC\uC131 \uC815\uCC45 \uBCF4\uAE30(\uC0C8 \uCC3D\uC5D0\uC11C \uC5F4\uB9BC)",
        "Visit CookieYes website (opens in new window)": "CookieYes \uC6F9\uC0AC\uC774\uD2B8 \uBC29\uBB38(\uC0C8 \uCC3D\uC5D0\uC11C \uC5F4\uB9BC)",
        "Reset all accessibility settings to default": "\uBAA8\uB4E0 \uC811\uADFC\uC131 \uC124\uC815\uC744 \uAE30\uBCF8\uAC12\uC73C\uB85C \uC7AC\uC124\uC815"
      };
    }
  });

  // src/locales/ku.json
  var require_ku = __commonJS({
    "src/locales/ku.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menuya Gih\xEE\u015Ftin\xEA",
        Close: "Bigire",
        "Text and Reading": "Niv\xEEs \xFB xwendin",
        "Navigation and Interaction": "R\xEAve\xE7\xFBn \xFB t\xEAkil\xEE",
        "Text Align": "H\xEEzakirina niv\xEEs\xEA",
        "Align Left": "H\xEEzakirina \xE7ep\xEA",
        "Align Center": "H\xEEzakirina navend\xEA",
        "Align Right": "H\xEEzakirina rast\xEA",
        "Adjust Font Size": "Mezinahiya Font\xEA biguher\xEEne",
        "Highlight Title": "Sernav\xEA n\xEE\u015Fan bide",
        "Highlight Links": "Gir\xEAdan\xEAn n\xEE\u015Fan bide",
        "Readable Font": "Fonta Xwendbar",
        "Color and Contrast": "Reng \xFB tezad",
        "Dark Contrast": "Kontrasta Tar\xEE",
        "Light Contrast": "Kontrasta Ronah\xEE",
        "High Contrast": "Kontrasta Bilind",
        "High Saturation": "Saturasyona Bilind",
        "Low Saturation": "Saturasyona Nizm",
        Monochrome: "Reng\xEA Yekane",
        Tools: "Am\xFBr",
        "Reading Guide": "R\xEAbera Xwendin\xEA",
        "Big Cursor": "Kursor\xEA Mezin",
        "Increase Font Size": "Mezinahiya Font\xEA Z\xEAde Bike",
        "Decrease Font Size": "Mezinahiya Font\xEA K\xEAm Bike",
        "Letter Spacing": "D\xFBrahiya T\xEEpan",
        "Line Height": "Bilindahiya R\xEAz\xEA",
        "Font Weight": "Giraniya Font\xEA",
        "Dyslexia Font": "Fonta Disleksiya",
        Language: "Ziman",
        "Accessibility widget": "Menuya Gih\xEE\u015Ftin\xEA Veke",
        "Accessibility Profiles": "Prof\xEEl\xEAn Gih\xEE\u015Ftin\xEA",
        "Cognitive Disability": "Seqetiya Zan\xEEn\xEE",
        "Seizure Safe": "Ji bo Epileps\xEE Ewle",
        "Accessibility statement": "Daxuyaniya Gih\xEE\u015Ftin\xEA",
        ADHD: "ADHD",
        "Low Vision": "D\xEEtina lawaz",
        "Pause Animations": "An\xEEmasyonan Rawest\xEEne",
        "Animation paused": "An\xEEmasyon hat rawestandin",
        "Reset all settings": "Hem\xEE M\xEEhengan Veger\xEEne",
        "Shortcut:": "Kurtebir:",
        "Epilepsy Safe Mode": "Moda ewle ji bo ep\xEElepsiy\xEA",
        "Mute sounds": "Dengan b\xEAdeng bike",
        "Page read": "Xwendina r\xFBpel\xEA",
        "Page read controls": "Kontrol\xEAn xwendina r\xFBpel\xEA",
        Pause: "Rawestandin",
        Resume: "Berdewamkirin",
        Stop: "Bisekine",
        Settings: "M\xEEheng",
        Speed: "Lez",
        Voice: "Deng",
        "Close accessibility menu": "Menuya gih\xEE\u015Ftin\xEA bigire",
        "Back to accessibility menu": "Vegere menuya gih\xEE\u015Ftin\xEA",
        "Search languages": "Li zimanan bigere",
        "Selected language": "Ziman\xEA hilbijart\xEE",
        "View accessibility statement (opens in new window)": "Daxuyaniya gih\xEE\u015Ftin\xEA bib\xEEne (di pencereyeke n\xFB de vedibe)",
        "Visit CookieYes website (opens in new window)": "Serdana malpera CookieYes bike (di pencereyeke n\xFB de vedibe)",
        "Reset all accessibility settings to default": "Hem\xEE m\xEEheng\xEAn gih\xEE\u015Ftin\xEA veger\xEEne bo standard"
      };
    }
  });

  // src/locales/lb.json
  var require_lb = __commonJS({
    "src/locales/lb.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Accessibilit\xE9itsmen\xFC",
        Close: "Zoumaachen",
        "Text and Reading": "Text a Liesen",
        "Navigation and Interaction": "Navigatioun an Interaktioun",
        "Text Align": "Textausriichtung",
        "Align Left": "L\xE9nks ausriichten",
        "Align Center": "Zentr\xE9ieren",
        "Align Right": "Riets ausriichten",
        "Adjust Font Size": "Schr\xEBftgr\xE9isst unpassen",
        "Highlight Title": "Titel mark\xE9ieren",
        "Highlight Links": "Links mark\xE9ieren",
        "Readable Font": "Liesbar Schr\xEBft",
        "Color and Contrast": "Faarf a Kontrast",
        "Dark Contrast": "D\xE4ischteren Kontrast",
        "Light Contrast": "Hellen Kontrast",
        "High Contrast": "H\xE9ijen Kontrast",
        "High Saturation": "H\xE9ich Saturatioun",
        "Low Saturation": "Niddreg Saturatioun",
        Monochrome: "Monochrom",
        Tools: "Tools",
        "Reading Guide": "Guide fir ze liesen",
        "Big Cursor": "Groussen Cursor",
        "Increase Font Size": "Schr\xEBftgr\xE9isst erh\xE9ijen",
        "Decrease Font Size": "Schr\xEBftgr\xE9isst ernidderegen",
        "Letter Spacing": "Zeechenofstand",
        "Line Height": "Linnenh\xE9icht",
        "Font Weight": "Schr\xEBftgewiicht",
        "Dyslexia Font": "Schr\xEBft fir Dyslexie",
        Language: "Sprooch",
        "Accessibility widget": "Accessibilit\xE9itsmen\xFC opmaachen",
        "Accessibility Profiles": "Accessibilit\xE9its-Profiler",
        "Cognitive Disability": "Kognitiv Beh\xEBnnerung",
        "Seizure Safe": "S\xE9cher fir Epilepsie",
        "Accessibility statement": "Accessibilit\xE9itserkl\xE4rung",
        ADHD: "ADHS",
        "Low Vision": "Schwaach Vue",
        "Pause Animations": "Animatiounen stoppen",
        "Animation paused": "Animatioun paus\xE9iert",
        "Reset all settings": "Astellungen zr\xE9cksetzen",
        "Shortcut:": "Tastekierzel:",
        "Epilepsy Safe Mode": "Epilepsie-s\xE9chere Modus",
        "Mute sounds": "T\xE9in ausschalten",
        "Page read": "S\xE4it virliesen",
        "Page read controls": "Virlies-Steierung",
        Pause: "Paus",
        Resume: "Weiderfueren",
        Stop: "Stop",
        Settings: "Astellungen",
        Speed: "Vitesse",
        Voice: "St\xEBmm",
        "Close accessibility menu": "Accessibilit\xE9itsmen\xFC zoumaachen",
        "Back to accessibility menu": "Zr\xE9ck zum Accessibilit\xE9itsmen\xFC",
        "Search languages": "Sproochen sichen",
        "Selected language": "Ausgewielte Sprooch",
        "View accessibility statement (opens in new window)": "Accessibilit\xE9itserkl\xE4rung weisen (geet an engem neie F\xEBnster op)",
        "Visit CookieYes website (opens in new window)": "CookieYes-Webs\xE4it besichen (geet an engem neie F\xEBnster op)",
        "Reset all accessibility settings to default": "All Accessibilit\xE9itsastellungen zr\xE9cksetzen"
      };
    }
  });

  // src/locales/lt.json
  var require_lt = __commonJS({
    "src/locales/lt.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Prieinamumo meniu",
        Close: "U\u017Edaryti",
        "Text and Reading": "Tekstas ir skaitymas",
        "Navigation and Interaction": "Navigacija ir s\u0105veika",
        "Text Align": "Teksto lygiavimas",
        "Align Left": "Lygiuoti kair\u0117je",
        "Align Center": "Lygiuoti centre",
        "Align Right": "Lygiuoti de\u0161in\u0117je",
        "Adjust Font Size": "Koreguoti \u0161rifto dyd\u012F",
        "Highlight Title": "Pary\u0161kinti antra\u0161t\u0119",
        "Highlight Links": "Pary\u0161kinti nuorodas",
        "Readable Font": "\u012Eskaitomas \u0161riftas",
        "Color and Contrast": "Spalva ir kontrastas",
        "Dark Contrast": "Tamsus kontrastas",
        "Light Contrast": "\u0160viesus kontrastas",
        "High Contrast": "Auk\u0161tas kontrastas",
        "High Saturation": "Auk\u0161tas prisotinimas",
        "Low Saturation": "\u017Demas prisotinimas",
        Monochrome: "Vienspalvis",
        Tools: "\u012Erankiai",
        "Reading Guide": "Skaitymo gidas",
        "Big Cursor": "Didelis \u017Eymeklis",
        "Increase Font Size": "Padidinti \u0161rifto dyd\u012F",
        "Decrease Font Size": "Suma\u017Einti \u0161rifto dyd\u012F",
        "Letter Spacing": "Raid\u017Ei\u0173 tarpai",
        "Line Height": "Eilu\u010Di\u0173 auk\u0161tis",
        "Font Weight": "\u0160rifto storis",
        "Dyslexia Font": "Disleksijos \u0161riftas",
        Language: "Kalba",
        "Accessibility widget": "Prieinamumo valdiklis",
        "Accessibility Profiles": "Prieinamumo profiliai",
        "Cognitive Disability": "Kognityvin\u0117 negalia",
        "Seizure Safe": "Saugus nuo priepuoli\u0173",
        "Accessibility statement": "Prieinamumo parei\u0161kimas",
        ADHD: "ADHD",
        "Low Vision": "Silpnaregyst\u0117",
        "Pause Animations": "Sustabdyti animacijas",
        "Animation paused": "Animacija pristabdyta",
        "Reset all settings": "Atkurti nustatymus",
        "Shortcut:": "Spartusis klavi\u0161as:",
        "Epilepsy Safe Mode": "Epilepsijai saugus re\u017Eimas",
        "Mute sounds": "Nutildyti garsus",
        "Page read": "Skaityti puslap\u012F",
        "Page read controls": "Puslapio skaitymo valdikliai",
        Pause: "Pristabdyti",
        Resume: "T\u0119sti",
        Stop: "Sustabdyti",
        Settings: "Nustatymai",
        Speed: "Greitis",
        Voice: "Balsas",
        "Close accessibility menu": "U\u017Edaryti prieinamumo meniu",
        "Back to accessibility menu": "Atgal \u012F prieinamumo meniu",
        "Search languages": "Ie\u0161koti kalb\u0173",
        "Selected language": "Pasirinkta kalba",
        "View accessibility statement (opens in new window)": "Per\u017Ei\u016Br\u0117ti prieinamumo parei\u0161kim\u0105 (atsidaro naujame lange)",
        "Visit CookieYes website (opens in new window)": "Apsilankyti CookieYes svetain\u0117je (atsidaro naujame lange)",
        "Reset all accessibility settings to default": "Atkurti visus prieinamumo nustatymus \u012F numatytuosius"
      };
    }
  });

  // src/locales/lv.json
  var require_lv = __commonJS({
    "src/locales/lv.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Pieejam\u012Bbas izv\u0113lne",
        Close: "Aizv\u0113rt",
        "Text and Reading": "Teksts un las\u012B\u0161ana",
        "Navigation and Interaction": "Navig\u0101cija un mijiedarb\u012Bba",
        "Text Align": "Teksta l\u012Bdzin\u0101\u0161ana",
        "Align Left": "Izl\u012Bdzin\u0101t pa kreisi",
        "Align Center": "L\u012Bdzin\u0101t centr\u0101",
        "Align Right": "L\u012Bdzin\u0101t pa labi",
        "Adjust Font Size": "Piel\u0101got fonta izm\u0113ru",
        "Highlight Title": "Izcelt virsrakstu",
        "Highlight Links": "Izcelt saites",
        "Readable Font": "Las\u0101ms fonts",
        "Color and Contrast": "Kr\u0101sa un kontrasts",
        "Dark Contrast": "Tum\u0161s kontrasts",
        "Light Contrast": "Gai\u0161s kontrasts",
        "High Contrast": "Augsts kontrasts",
        "High Saturation": "Augsts pies\u0101tin\u0101jums",
        "Low Saturation": "Zems pies\u0101tin\u0101jums",
        Monochrome: "Vienkr\u0101sains",
        Tools: "R\u012Bki",
        "Reading Guide": "Las\u012B\u0161anas l\u012Bnija",
        "Big Cursor": "Liels kursors",
        "Increase Font Size": "Palielin\u0101t fonta izm\u0113ru",
        "Decrease Font Size": "Samazin\u0101t fonta izm\u0113ru",
        "Letter Spacing": "Burtu atstarpes",
        "Line Height": "Rindas augstums",
        "Font Weight": "Fonta biezums",
        "Dyslexia Font": "Fonts disleksijai",
        Language: "Valoda",
        "Accessibility widget": "Pieejam\u012Bbas logr\u012Bks",
        "Accessibility Profiles": "Pieejam\u012Bbas profili",
        "Cognitive Disability": "Kognit\u012Bvie trauc\u0113jumi",
        "Seizure Safe": "Dro\u0161s pret l\u0113km\u0113m",
        "Accessibility statement": "Pieejam\u012Bbas pazi\u0146ojums",
        ADHD: "UDHS",
        "Low Vision": "V\u0101jredz\u012Bba",
        "Pause Animations": "Aptur\u0113t anim\u0101cijas",
        "Animation paused": "Anim\u0101cija aptur\u0113ta",
        "Reset all settings": "Atiestat\u012Bt iestat\u012Bjumus",
        "Shortcut:": "\u012Asin\u0101jumtausti\u0146\u0161:",
        "Epilepsy Safe Mode": "Epilepsijai dro\u0161s re\u017E\u012Bms",
        "Mute sounds": "Izsl\u0113gt ska\u0146u",
        "Page read": "Las\u012Bt lapu",
        "Page read controls": "Lapas las\u012B\u0161anas vad\u012Bklas",
        Pause: "Pauz\u0113t",
        Resume: "Turpin\u0101t",
        Stop: "Aptur\u0113t",
        Settings: "Iestat\u012Bjumi",
        Speed: "\u0100trums",
        Voice: "Balss",
        "Close accessibility menu": "Aizv\u0113rt pieejam\u012Bbas izv\u0113lni",
        "Back to accessibility menu": "Atpaka\u013C uz pieejam\u012Bbas izv\u0113lni",
        "Search languages": "Mekl\u0113t valodas",
        "Selected language": "Izv\u0113l\u0113t\u0101 valoda",
        "View accessibility statement (opens in new window)": "Skat\u012Bt pieejam\u012Bbas pazi\u0146ojumu (atveras jaun\u0101 log\u0101)",
        "Visit CookieYes website (opens in new window)": "Apmekl\u0113t CookieYes vietni (atveras jaun\u0101 log\u0101)",
        "Reset all accessibility settings to default": "Atiestat\u012Bt visus pieejam\u012Bbas iestat\u012Bjumus uz noklus\u0113juma v\u0113rt\u012Bb\u0101m"
      };
    }
  });

  // src/locales/ml.json
  var require_ml = __commonJS({
    "src/locales/ml.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0D2A\u0D4D\u0D30\u0D35\u0D47\u0D36\u0D2F\u0D4B\u0D17\u0D4D\u0D2F\u0D24 \u0D2E\u0D46\u0D28\u0D41",
        Close: "\u0D05\u0D1F\u0D2F\u0D4D\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Text and Reading": "\u0D1F\u0D46\u0D15\u0D4D\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D41\u0D02 \u0D35\u0D3E\u0D2F\u0D28\u0D2F\u0D41\u0D02",
        "Navigation and Interaction": "\u0D28\u0D3E\u0D35\u0D3F\u0D17\u0D47\u0D37\u0D28\u0D41\u0D02 \u0D07\u0D1F\u0D2A\u0D46\u0D1F\u0D32\u0D41\u0D02",
        "Text Align": "\u0D1F\u0D46\u0D15\u0D4D\u200C\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D \u0D35\u0D3F\u0D28\u0D4D\u0D2F\u0D3E\u0D38\u0D02",
        "Align Left": "\u0D07\u0D1F\u0D24\u0D4D \u0D35\u0D3F\u0D28\u0D4D\u0D2F\u0D38\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Align Center": "\u0D2E\u0D27\u0D4D\u0D2F\u0D24\u0D4D\u0D24\u0D3F\u0D7D \u0D35\u0D3F\u0D28\u0D4D\u0D2F\u0D38\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Align Right": "\u0D35\u0D32\u0D24\u0D4D\u0D24\u0D47\u0D15\u0D4D\u0D15\u0D4D \u0D35\u0D3F\u0D28\u0D4D\u0D2F\u0D38\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Adjust Font Size": "\u0D05\u0D15\u0D4D\u0D37\u0D30\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D4D\u0D31\u0D46 \u0D35\u0D32\u0D41\u0D2A\u0D4D\u0D2A\u0D02 \u0D15\u0D4D\u0D30\u0D2E\u0D40\u0D15\u0D30\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Highlight Title": "\u0D36\u0D40\u0D7C\u0D37\u0D15\u0D02 \u0D39\u0D48\u0D32\u0D48\u0D31\u0D4D\u0D31\u0D4D \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D15",
        "Highlight Links": "\u0D32\u0D3F\u0D19\u0D4D\u0D15\u0D41\u0D15\u0D7E \u0D39\u0D48\u0D32\u0D48\u0D31\u0D4D\u0D31\u0D4D \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D15",
        "Readable Font": "\u0D35\u0D3E\u0D2F\u0D3F\u0D15\u0D4D\u0D15\u0D3E\u0D7B \u0D0E\u0D33\u0D41\u0D2A\u0D4D\u0D2A\u0D2E\u0D41\u0D33\u0D4D\u0D33 \u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D",
        "Color and Contrast": "\u0D28\u0D3F\u0D31\u0D35\u0D41\u0D02 \u0D15\u0D4B\u0D7A\u0D1F\u0D4D\u0D30\u0D3E\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D41\u0D02",
        "Dark Contrast": "\u0D07\u0D30\u0D41\u0D23\u0D4D\u0D1F \u0D15\u0D4B\u0D7A\u0D1F\u0D4D\u0D30\u0D3E\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D",
        "Light Contrast": "\u0D07\u0D33\u0D02 \u0D15\u0D4B\u0D7A\u0D1F\u0D4D\u0D30\u0D3E\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D",
        "High Contrast": "\u0D09\u0D2F\u0D7C\u0D28\u0D4D\u0D28 \u0D15\u0D4B\u0D7A\u0D1F\u0D4D\u0D30\u0D3E\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D",
        "High Saturation": "\u0D09\u0D2F\u0D7C\u0D28\u0D4D\u0D28 \u0D38\u0D3E\u0D1A\u0D4D\u0D1A\u0D41\u0D31\u0D47\u0D37\u0D7B",
        "Low Saturation": "\u0D15\u0D41\u0D31\u0D1E\u0D4D\u0D1E \u0D38\u0D3E\u0D1A\u0D4D\u0D1A\u0D41\u0D31\u0D47\u0D37\u0D7B",
        Monochrome: "\u0D2E\u0D4B\u0D28\u0D4B\u0D15\u0D4D\u0D30\u0D4B\u0D02",
        Tools: "\u0D09\u0D2A\u0D15\u0D30\u0D23\u0D19\u0D4D\u0D19\u0D7E",
        "Reading Guide": "\u0D35\u0D3E\u0D2F\u0D28\u0D3E \u0D17\u0D48\u0D21\u0D4D",
        "Big Cursor": "\u0D35\u0D32\u0D3F\u0D2F \u0D15\u0D7C\u0D38\u0D7C",
        "Increase Font Size": "\u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D \u0D35\u0D32\u0D41\u0D2A\u0D4D\u0D2A\u0D02 \u0D35\u0D7C\u0D26\u0D4D\u0D27\u0D3F\u0D2A\u0D4D\u0D2A\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Decrease Font Size": "\u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D \u0D35\u0D32\u0D41\u0D2A\u0D4D\u0D2A\u0D02 \u0D15\u0D41\u0D31\u0D2F\u0D4D\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Letter Spacing": "\u0D05\u0D15\u0D4D\u0D37\u0D30\u0D19\u0D4D\u0D19\u0D7E\u0D15\u0D4D\u0D15\u0D3F\u0D1F\u0D2F\u0D3F\u0D32\u0D46 \u0D07\u0D1F\u0D35\u0D4D",
        "Line Height": "\u0D32\u0D48\u0D7B \u0D09\u0D2F\u0D30\u0D02",
        "Font Weight": "\u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D \u0D2D\u0D3E\u0D30\u0D02",
        "Dyslexia Font": "\u0D21\u0D3F\u0D38\u0D4D\u0D32\u0D46\u0D15\u0D4D\u0D38\u0D3F\u0D2F \u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D",
        Language: "\u0D2D\u0D3E\u0D37",
        "Accessibility widget": "\u0D2A\u0D4D\u0D30\u0D35\u0D47\u0D36\u0D2F\u0D4B\u0D17\u0D4D\u0D2F\u0D24 \u0D2E\u0D46\u0D28\u0D41 \u0D24\u0D41\u0D31\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Accessibility Profiles": "\u0D2A\u0D4D\u0D30\u0D35\u0D47\u0D36\u0D2F\u0D4B\u0D17\u0D4D\u0D2F\u0D24 \u0D2A\u0D4D\u0D30\u0D4A\u0D2B\u0D48\u0D32\u0D41\u0D15\u0D7E",
        "Cognitive Disability": "\u0D1C\u0D4D\u0D1E\u0D3E\u0D28\u0D2A\u0D30\u0D2E\u0D3E\u0D2F \u0D35\u0D48\u0D15\u0D32\u0D4D\u0D2F\u0D02",
        "Seizure Safe": "\u0D05\u0D2A\u0D38\u0D4D\u0D2E\u0D3E\u0D30\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D4D \u0D38\u0D41\u0D30\u0D15\u0D4D\u0D37\u0D3F\u0D24\u0D02",
        "Accessibility statement": "\u0D2A\u0D4D\u0D30\u0D35\u0D47\u0D36\u0D2F\u0D4B\u0D17\u0D4D\u0D2F\u0D24 \u0D2A\u0D4D\u0D30\u0D38\u0D4D\u0D24\u0D3E\u0D35\u0D28",
        ADHD: "ADHD",
        "Low Vision": "\u0D15\u0D41\u0D31\u0D1E\u0D4D\u0D1E \u0D15\u0D3E\u0D34\u0D4D\u0D1A",
        "Pause Animations": "\u0D06\u0D28\u0D3F\u0D2E\u0D47\u0D37\u0D28\u0D41\u0D15\u0D7E \u0D28\u0D3F\u0D7C\u0D24\u0D4D\u0D24\u0D41\u0D15",
        "Animation paused": "\u0D06\u0D28\u0D3F\u0D2E\u0D47\u0D37\u0D7B \u0D24\u0D3E\u0D7D\u0D15\u0D4D\u0D15\u0D3E\u0D32\u0D3F\u0D15\u0D2E\u0D3E\u0D2F\u0D3F \u0D28\u0D3F\u0D7C\u0D24\u0D4D\u0D24\u0D3F",
        "Reset all settings": "\u0D15\u0D4D\u0D30\u0D2E\u0D40\u0D15\u0D30\u0D23\u0D19\u0D4D\u0D19\u0D7E \u0D2A\u0D41\u0D28\u0D03\u0D38\u0D1C\u0D4D\u0D1C\u0D2E\u0D3E\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Shortcut:": "\u0D15\u0D41\u0D31\u0D41\u0D15\u0D4D\u0D15\u0D41\u0D35\u0D34\u0D3F:",
        "Epilepsy Safe Mode": "\u0D05\u0D2A\u0D38\u0D4D\u0D2E\u0D3E\u0D30 \u0D38\u0D41\u0D30\u0D15\u0D4D\u0D37\u0D3F\u0D24 \u0D2E\u0D4B\u0D21\u0D4D",
        "Mute sounds": "\u0D36\u0D2C\u0D4D\u0D26\u0D19\u0D4D\u0D19\u0D7E \u0D28\u0D3F\u0D36\u0D4D\u0D36\u0D2C\u0D4D\u0D26\u0D2E\u0D3E\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Page read": "\u0D2A\u0D47\u0D1C\u0D4D \u0D35\u0D3E\u0D2F\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Page read controls": "\u0D2A\u0D47\u0D1C\u0D4D \u0D35\u0D3E\u0D2F\u0D28 \u0D28\u0D3F\u0D2F\u0D28\u0D4D\u0D24\u0D4D\u0D30\u0D23\u0D19\u0D4D\u0D19\u0D7E",
        Pause: "\u0D24\u0D3E\u0D7D\u0D15\u0D4D\u0D15\u0D3E\u0D32\u0D3F\u0D15\u0D2E\u0D3E\u0D2F\u0D3F \u0D28\u0D3F\u0D7C\u0D24\u0D4D\u0D24\u0D41\u0D15",
        Resume: "\u0D2A\u0D41\u0D28\u0D30\u0D3E\u0D30\u0D02\u0D2D\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
        Stop: "\u0D28\u0D3F\u0D7C\u0D24\u0D4D\u0D24\u0D41\u0D15",
        Settings: "\u0D15\u0D4D\u0D30\u0D2E\u0D40\u0D15\u0D30\u0D23\u0D19\u0D4D\u0D19\u0D7E",
        Speed: "\u0D35\u0D47\u0D17\u0D24",
        Voice: "\u0D36\u0D2C\u0D4D\u0D26\u0D02",
        "Close accessibility menu": "\u0D2A\u0D4D\u0D30\u0D35\u0D47\u0D36\u0D28\u0D15\u0D4D\u0D37\u0D2E\u0D24 \u0D2E\u0D46\u0D28\u0D41 \u0D05\u0D1F\u0D2F\u0D4D\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Back to accessibility menu": "\u0D2A\u0D4D\u0D30\u0D35\u0D47\u0D36\u0D28\u0D15\u0D4D\u0D37\u0D2E\u0D24 \u0D2E\u0D46\u0D28\u0D41\u0D35\u0D3F\u0D32\u0D47\u0D15\u0D4D\u0D15\u0D4D \u0D2E\u0D1F\u0D19\u0D4D\u0D19\u0D41\u0D15",
        "Search languages": "\u0D2D\u0D3E\u0D37\u0D15\u0D7E \u0D24\u0D3F\u0D30\u0D2F\u0D41\u0D15",
        "Selected language": "\u0D24\u0D3F\u0D30\u0D1E\u0D4D\u0D1E\u0D46\u0D1F\u0D41\u0D24\u0D4D\u0D24 \u0D2D\u0D3E\u0D37",
        "View accessibility statement (opens in new window)": "\u0D2A\u0D4D\u0D30\u0D35\u0D47\u0D36\u0D28\u0D15\u0D4D\u0D37\u0D2E\u0D24 \u0D2A\u0D4D\u0D30\u0D38\u0D4D\u0D24\u0D3E\u0D35\u0D28 \u0D15\u0D3E\u0D23\u0D41\u0D15 (\u0D2A\u0D41\u0D24\u0D3F\u0D2F \u0D35\u0D3F\u0D7B\u0D21\u0D4B\u0D2F\u0D3F\u0D7D \u0D24\u0D41\u0D31\u0D15\u0D4D\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D41)",
        "Visit CookieYes website (opens in new window)": "CookieYes \u0D35\u0D46\u0D2C\u0D4D\u200C\u0D38\u0D48\u0D31\u0D4D\u0D31\u0D4D \u0D38\u0D28\u0D4D\u0D26\u0D7C\u0D36\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15 (\u0D2A\u0D41\u0D24\u0D3F\u0D2F \u0D35\u0D3F\u0D7B\u0D21\u0D4B\u0D2F\u0D3F\u0D7D \u0D24\u0D41\u0D31\u0D15\u0D4D\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D41)",
        "Reset all accessibility settings to default": "\u0D0E\u0D32\u0D4D\u0D32\u0D3E \u0D2A\u0D4D\u0D30\u0D35\u0D47\u0D36\u0D28\u0D15\u0D4D\u0D37\u0D2E\u0D24 \u0D15\u0D4D\u0D30\u0D2E\u0D40\u0D15\u0D30\u0D23\u0D19\u0D4D\u0D19\u0D33\u0D41\u0D02 \u0D21\u0D3F\u0D2B\u0D4B\u0D7E\u0D1F\u0D4D\u0D1F\u0D3F\u0D32\u0D47\u0D15\u0D4D\u0D15\u0D4D \u0D2A\u0D41\u0D28\u0D03\u0D38\u0D1C\u0D4D\u0D1C\u0D2E\u0D3E\u0D15\u0D4D\u0D15\u0D41\u0D15"
      };
    }
  });

  // src/locales/mn.json
  var require_mn = __commonJS({
    "src/locales/mn.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0425\u04AF\u0440\u0442\u044D\u044D\u043C\u0436\u0438\u0439\u043D \u0446\u044D\u0441",
        Close: "\u0425\u0430\u0430\u0445",
        "Text and Reading": "\u0422\u0435\u043A\u0441\u0442 \u0431\u0430 \u0443\u043D\u0448\u0438\u0445",
        "Navigation and Interaction": "\u041D\u0430\u0432\u0438\u0433\u0430\u0446 \u0431\u0430 \u0445\u0430\u0440\u0438\u043B\u0446\u0430\u043D \u04AF\u0439\u043B\u0434\u044D\u043B",
        "Text Align": "\u0422\u0435\u043A\u0441\u0442\u0438\u0439\u043D \u0437\u044D\u0440\u044D\u0433\u0446\u04AF\u04AF\u043B\u044D\u043B\u0442",
        "Align Left": "\u0417\u04AF\u04AF\u043D \u0442\u0430\u043B\u0434 \u0437\u044D\u0440\u044D\u0433\u0446\u04AF\u04AF\u043B\u044D\u0445",
        "Align Center": "\u0413\u043E\u043B\u0434 \u0431\u0430\u0439\u0440\u043B\u0443\u0443\u043B\u0430\u0445",
        "Align Right": "\u0411\u0430\u0440\u0443\u0443\u043D \u0442\u0430\u043B\u0434 \u0431\u0430\u0439\u0440\u043B\u0443\u0443\u043B\u0430\u0445",
        "Adjust Font Size": "\u0424\u043E\u043D\u0442\u044B\u043D \u0445\u044D\u043C\u0436\u044D\u044D\u0433 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445",
        "Highlight Title": "\u0413\u0430\u0440\u0447\u0433\u0438\u0439\u0433 \u043E\u043D\u0446\u043B\u043E\u0445",
        "Highlight Links": "\u0425\u043E\u043B\u0431\u043E\u043E\u0441\u0443\u0443\u0434\u044B\u0433 \u043E\u043D\u0446\u043B\u043E\u0445",
        "Readable Font": "\u0423\u043D\u0448\u0438\u0445\u0430\u0434 \u0445\u044F\u043B\u0431\u0430\u0440 \u0444\u043E\u043D\u0442",
        "Color and Contrast": "\u04E8\u043D\u0433\u04E9 \u0431\u0430 \u044F\u043B\u0433\u0430\u0440\u0430\u043B",
        "Dark Contrast": "\u0425\u0430\u0440\u0430\u043D\u0445\u0443\u0439 \u044F\u043B\u0433\u0430\u0440\u0430\u043B",
        "Light Contrast": "\u0413\u044D\u0440\u044D\u043B\u0442\u044D\u0439 \u044F\u043B\u0433\u0430\u0440\u0430\u043B",
        "High Contrast": "\u04E8\u043D\u0434\u04E9\u0440 \u044F\u043B\u0433\u0430\u0440\u0430\u043B",
        "High Saturation": "\u04E8\u043D\u0434\u04E9\u0440 \u0445\u0430\u043D\u0430\u043B\u0442",
        "Low Saturation": "\u0411\u0430\u0433\u0430 \u0445\u0430\u043D\u0430\u043B\u0442",
        Monochrome: "\u041D\u044D\u0433 \u04E9\u043D\u0433\u04E9",
        Tools: "\u0425\u044D\u0440\u044D\u0433\u0441\u043B\u04AF\u04AF\u0434",
        "Reading Guide": "\u0423\u043D\u0448\u043B\u0430\u0433\u044B\u043D \u0437\u0430\u0430\u0433\u0447",
        "Big Cursor": "\u0422\u043E\u043C \u043A\u0443\u0440\u0441\u043E\u0440",
        "Increase Font Size": "\u0424\u043E\u043D\u0442\u044B\u043D \u0445\u044D\u043C\u0436\u044D\u044D\u0433 \u043D\u044D\u043C\u044D\u0433\u0434\u04AF\u04AF\u043B\u044D\u0445",
        "Decrease Font Size": "\u0424\u043E\u043D\u0442\u044B\u043D \u0445\u044D\u043C\u0436\u044D\u044D\u0433 \u0431\u0430\u0433\u0430\u0441\u0433\u0430\u0445",
        "Letter Spacing": "\u04AE\u0441\u0433\u0438\u0439\u043D \u0445\u043E\u043E\u0440\u043E\u043D\u0434\u044B\u043D \u0437\u0430\u0439",
        "Line Height": "\u041C\u04E9\u0440\u0438\u0439\u043D \u04E9\u043D\u0434\u04E9\u0440",
        "Font Weight": "\u0424\u043E\u043D\u0442\u044B\u043D \u0436\u0438\u043D",
        "Dyslexia Font": "\u0414\u0438\u0441\u043B\u0435\u043A\u0441\u0438 \u0444\u043E\u043D\u0442",
        Language: "\u0425\u044D\u043B",
        "Accessibility widget": "\u0425\u04AF\u0440\u0442\u044D\u044D\u043C\u0436\u0438\u0439\u043D \u0446\u044D\u0441\u0438\u0439\u0433 \u043D\u044D\u044D\u0445",
        "Accessibility Profiles": "\u0425\u04AF\u0440\u0442\u044D\u044D\u043C\u0436\u0438\u0439\u043D \u043F\u0440\u043E\u0444\u0430\u0439\u043B\u0443\u0443\u0434",
        "Cognitive Disability": "\u0422\u0430\u043D\u0438\u043D \u043C\u044D\u0434\u044D\u0445\u04AF\u0439\u043D \u0445\u04E9\u0433\u0436\u043B\u0438\u0439\u043D \u0431\u044D\u0440\u0445\u0448\u044D\u044D\u043B",
        "Seizure Safe": "\u0422\u0430\u0440\u0445\u0438\u043D\u044B \u0446\u043E\u0447\u0440\u043E\u043B\u0434 \u0430\u044E\u0443\u043B\u0433\u04AF\u0439",
        "Accessibility statement": "\u0425\u04AF\u0440\u0442\u044D\u044D\u043C\u0436\u0438\u0439\u043D \u043C\u044D\u0434\u044D\u0433\u0434\u044D\u043B",
        ADHD: "\u0410\u043D\u0445\u0430\u0430\u0440\u0430\u043B \u0441\u0443\u043B\u0440\u0430\u043B",
        "Low Vision": "\u0425\u0430\u0440\u0430\u0430 \u0441\u0443\u043B",
        "Pause Animations": "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u0439\u0433 \u0437\u043E\u0433\u0441\u043E\u043E\u0445",
        "Animation paused": "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u0439\u0433 \u0442\u04AF\u0440 \u0437\u043E\u0433\u0441\u043E\u043E\u0441\u043E\u043D",
        "Reset all settings": "\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E\u0433 \u0434\u0430\u0445\u0438\u043D \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445",
        "Shortcut:": "\u0422\u043E\u0432\u0447\u043B\u043E\u043B:",
        "Epilepsy Safe Mode": "\u0423\u043D\u0430\u043B\u0442 \u04E9\u0432\u0447\u0438\u043D\u0434 \u0430\u044E\u0443\u043B\u0433\u04AF\u0439 \u0433\u043E\u0440\u0438\u043C",
        "Mute sounds": "\u0414\u0443\u0443\u0433 \u0445\u0430\u0430\u0445",
        "Page read": "\u0425\u0443\u0443\u0434\u0441\u044B\u0433 \u0443\u043D\u0448\u0438\u0445",
        "Page read controls": "\u0425\u0443\u0443\u0434\u0430\u0441 \u0443\u043D\u0448\u0438\u0445 \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u0430",
        Pause: "\u0422\u04AF\u0440 \u0437\u043E\u0433\u0441\u043E\u043E\u0445",
        Resume: "\u04AE\u0440\u0433\u044D\u043B\u0436\u043B\u04AF\u04AF\u043B\u044D\u0445",
        Stop: "\u0417\u043E\u0433\u0441\u043E\u043E\u0445",
        Settings: "\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E",
        Speed: "\u0425\u0443\u0440\u0434",
        Voice: "\u0414\u0443\u0443 \u0445\u043E\u043E\u043B\u043E\u0439",
        "Close accessibility menu": "\u0425\u04AF\u0440\u0442\u044D\u044D\u043C\u0436\u0438\u0439\u043D \u0446\u044D\u0441\u0438\u0439\u0433 \u0445\u0430\u0430\u0445",
        "Back to accessibility menu": "\u0425\u04AF\u0440\u0442\u044D\u044D\u043C\u0436\u0438\u0439\u043D \u0446\u044D\u0441 \u0440\u04AF\u04AF \u0431\u0443\u0446\u0430\u0445",
        "Search languages": "\u0425\u044D\u043B \u0445\u0430\u0439\u0445",
        "Selected language": "\u0421\u043E\u043D\u0433\u043E\u0441\u043E\u043D \u0445\u044D\u043B",
        "View accessibility statement (opens in new window)": "\u0425\u04AF\u0440\u0442\u044D\u044D\u043C\u0436\u0438\u0439\u043D \u043C\u044D\u0434\u044D\u0433\u0434\u043B\u0438\u0439\u0433 \u04AF\u0437\u044D\u0445 (\u0448\u0438\u043D\u044D \u0446\u043E\u043D\u0445\u043E\u043D\u0434 \u043D\u044D\u044D\u0433\u0434\u044D\u043D\u044D)",
        "Visit CookieYes website (opens in new window)": "CookieYes \u0432\u044D\u0431\u0441\u0430\u0439\u0442\u0430\u0434 \u0437\u043E\u0447\u043B\u043E\u0445 (\u0448\u0438\u043D\u044D \u0446\u043E\u043D\u0445\u043E\u043D\u0434 \u043D\u044D\u044D\u0433\u0434\u044D\u043D\u044D)",
        "Reset all accessibility settings to default": "\u0411\u04AF\u0445 \u0445\u04AF\u0440\u0442\u044D\u044D\u043C\u0436\u0438\u0439\u043D \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E\u0433 \u0430\u043D\u0445\u043D\u044B \u0443\u0442\u0433\u0430\u0434 \u043D\u044C \u0441\u044D\u0440\u0433\u044D\u044D\u0445"
      };
    }
  });

  // src/locales/ms.json
  var require_ms = __commonJS({
    "src/locales/ms.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menu Aksesibiliti",
        Close: "Tutup",
        "Text and Reading": "Teks dan pembacaan",
        "Navigation and Interaction": "Navigasi dan interaksi",
        "Text Align": "Penjajaran Teks",
        "Align Left": "Jajar ke Kiri",
        "Align Center": "Jajar Tengah",
        "Align Right": "Jajar Kanan",
        "Adjust Font Size": "Laraskan Saiz Fon",
        "Highlight Title": "Serlahkan Tajuk",
        "Highlight Links": "Serlahkan Pautan",
        "Readable Font": "Fon Mudah Baca",
        "Color and Contrast": "Warna dan kontras",
        "Dark Contrast": "Kontras Gelap",
        "Light Contrast": "Kontras Terang",
        "High Contrast": "Kontras Tinggi",
        "High Saturation": "Saturasi Tinggi",
        "Low Saturation": "Saturasi Rendah",
        Monochrome: "Monokrom",
        Tools: "Peralatan",
        "Reading Guide": "Panduan Membaca",
        "Big Cursor": "Kursor Besar",
        "Increase Font Size": "Besarkan Saiz Fon",
        "Decrease Font Size": "Kecilkan Saiz Fon",
        "Letter Spacing": "Jarak Huruf",
        "Line Height": "Ketinggian Baris",
        "Font Weight": "Ketebalan Fon",
        "Dyslexia Font": "Fon Disleksia",
        Language: "Bahasa",
        "Accessibility widget": "Buka menu kebolehcapaian",
        "Accessibility Profiles": "Profil Kebolehcapaian",
        "Cognitive Disability": "Kecacatan Kognitif",
        "Seizure Safe": "Selamat untuk Epilepsi",
        "Accessibility statement": "Pernyataan Kebolehcapaian",
        ADHD: "ADHD",
        "Low Vision": "Penglihatan Rendah",
        "Pause Animations": "Hentikan Animasi",
        "Animation paused": "Animasi dijeda",
        "Reset all settings": "Tetapkan semula tetapan",
        "Shortcut:": "Pintasan:",
        "Epilepsy Safe Mode": "Mod Selamat Epilepsi",
        "Mute sounds": "Bisukan bunyi",
        "Page read": "Baca halaman",
        "Page read controls": "Kawalan baca halaman",
        Pause: "Jeda",
        Resume: "Sambung semula",
        Stop: "Henti",
        Settings: "Tetapan",
        Speed: "Kelajuan",
        Voice: "Suara",
        "Close accessibility menu": "Tutup menu kebolehcapaian",
        "Back to accessibility menu": "Kembali ke menu kebolehcapaian",
        "Search languages": "Cari bahasa",
        "Selected language": "Bahasa yang dipilih",
        "View accessibility statement (opens in new window)": "Lihat pernyataan kebolehcapaian (dibuka dalam tetingkap baharu)",
        "Visit CookieYes website (opens in new window)": "Lawati laman web CookieYes (dibuka dalam tetingkap baharu)",
        "Reset all accessibility settings to default": "Tetapkan semula semua tetapan kebolehcapaian kepada lalai"
      };
    }
  });

  // src/locales/my.json
  var require_my = __commonJS({
    "src/locales/my.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u1019\u100A\u103A\u101E\u1030\u1019\u1006\u102D\u102F \u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1014\u102D\u102F\u1004\u103A\u101E\u1031\u102C \u1019\u102E\u1014\u1030\u1038",
        Close: "\u1015\u102D\u1010\u103A\u1015\u102B",
        "Text and Reading": "\u1005\u102C\u101E\u102C\u1038\u1014\u103E\u1004\u1037\u103A \u1016\u1010\u103A\u101B\u103E\u102F\u1001\u103C\u1004\u103A\u1038",
        "Navigation and Interaction": "\u101C\u1019\u103A\u1038\u100A\u103D\u103E\u1014\u103A\u1019\u103E\u102F\u1014\u103E\u1004\u1037\u103A \u1021\u1015\u103C\u1014\u103A\u1021\u101C\u103E\u1014\u103A\u1006\u1000\u103A\u101E\u103D\u101A\u103A\u1019\u103E\u102F",
        "Text Align": "\u1005\u102C\u101E\u102C\u1038\u1014\u1031\u101B\u102C\u1001\u103B",
        "Align Left": "\u1018\u101A\u103A\u1018\u1000\u103A\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u1015\u102B",
        "Align Center": "\u1021\u101C\u101A\u103A\u1010\u103D\u1004\u103A \u1001\u103B\u102D\u1014\u103A\u100A\u103E\u102D",
        "Align Right": "\u100A\u102C\u1018\u1000\u103A\u101E\u102D\u102F\u1037 \u1001\u103B\u102D\u1014\u103A\u100A\u103E\u102D",
        "Adjust Font Size": "\u1016\u1031\u102C\u1004\u1037\u103A\u1021\u101B\u103D\u101A\u103A\u1021\u1005\u102C\u1038\u1000\u102D\u102F \u1001\u103B\u102D\u1014\u103A\u100A\u103E\u102D\u1015\u102B",
        "Highlight Title": "\u1001\u1031\u102B\u1004\u103A\u1038\u1005\u1009\u103A\u1000\u102D\u102F \u1021\u1011\u1030\u1038\u1015\u103C\u102F\u1015\u102B",
        "Highlight Links": "\u101C\u1004\u1037\u103A\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1021\u1011\u1030\u1038\u1015\u103C\u102F\u1015\u102B",
        "Readable Font": "\u1016\u1010\u103A\u101B\u1014\u103A\u101C\u103D\u101A\u103A\u1000\u1030\u101E\u1031\u102C \u1016\u1031\u102C\u1004\u1037\u103A",
        "Color and Contrast": "\u1021\u101B\u1031\u102C\u1004\u103A\u1014\u103E\u1004\u1037\u103A \u1000\u103D\u102C\u1001\u103C\u102C\u1038\u1019\u103E\u102F",
        "Dark Contrast": "\u1019\u103E\u1031\u102C\u1004\u103A\u1019\u102D\u102F\u1000\u103A\u101E\u1031\u102C \u1000\u103D\u102C\u1001\u103C\u102C\u1038\u1019\u103E\u102F",
        "Light Contrast": "\u1021\u101C\u1004\u103A\u1038\u101B\u1031\u102C\u1004\u103A \u1000\u103D\u102C\u1001\u103C\u102C\u1038\u1019\u103E\u102F",
        "High Contrast": "\u1019\u103C\u1004\u1037\u103A\u1019\u102C\u1038\u101E\u1031\u102C \u1000\u103D\u102C\u1001\u103C\u102C\u1038\u1019\u103E\u102F",
        "High Saturation": "\u1019\u103C\u1004\u1037\u103A\u1019\u102C\u1038\u101E\u1031\u102C \u1021\u101B\u1031\u102C\u1004\u103A\u1005\u103D\u1032\u1019\u103E\u102F",
        "Low Saturation": "\u1014\u102D\u1019\u1037\u103A\u101E\u1031\u102C \u1021\u101B\u1031\u102C\u1004\u103A\u1005\u103D\u1032\u1019\u103E\u102F",
        Monochrome: "\u1010\u1005\u103A\u101B\u1031\u102C\u1004\u103A\u1010\u100A\u103A\u1038",
        Tools: "\u1000\u102D\u101B\u102D\u101A\u102C\u1019\u103B\u102C\u1038",
        "Reading Guide": "\u1016\u1010\u103A\u101B\u103E\u102F\u101B\u1014\u103A \u101C\u1019\u103A\u1038\u100A\u103D\u103E\u1014\u103A",
        "Big Cursor": "\u1000\u103C\u102E\u1038\u1019\u102C\u1038\u101E\u1031\u102C \u1000\u102C\u1006\u102C",
        "Increase Font Size": "\u1016\u1031\u102C\u1004\u1037\u103A\u1021\u101B\u103D\u101A\u103A\u1021\u1005\u102C\u1038\u1000\u102D\u102F \u1010\u102D\u102F\u1038\u1001\u103B\u1032\u1037\u1015\u102B",
        "Decrease Font Size": "\u1016\u1031\u102C\u1004\u1037\u103A\u1021\u101B\u103D\u101A\u103A\u1021\u1005\u102C\u1038\u1000\u102D\u102F \u101C\u103B\u103E\u1031\u102C\u1037\u1001\u103B\u1015\u102B",
        "Letter Spacing": "\u1021\u1000\u1039\u1001\u101B\u102C\u1021\u1000\u103C\u102C\u1038 \u1021\u1000\u103D\u102C\u1021\u101D\u1031\u1038",
        "Line Height": "\u1005\u102C\u1000\u103C\u1031\u102C\u1004\u103A\u1038\u1021\u1019\u103C\u1004\u1037\u103A",
        "Font Weight": "\u1016\u1031\u102C\u1004\u1037\u103A\u1021\u101C\u1031\u1038\u1001\u103B\u102D\u1014\u103A",
        "Dyslexia Font": "Dyslexia \u1016\u1031\u102C\u1004\u1037\u103A",
        Language: "\u1018\u102C\u101E\u102C\u1005\u1000\u102C\u1038",
        "Accessibility widget": "\u1019\u100A\u103A\u101E\u1030\u1019\u1006\u102D\u102F \u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1014\u102D\u102F\u1004\u103A\u101E\u1031\u102C \u1019\u102E\u1014\u1030\u1038\u1000\u102D\u102F \u1016\u103D\u1004\u1037\u103A\u1015\u102B",
        "Accessibility Profiles": "\u1019\u100A\u103A\u101E\u1030\u1019\u1006\u102D\u102F \u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1014\u102D\u102F\u1004\u103A\u101E\u1031\u102C \u1015\u101B\u102D\u102F\u1016\u102D\u102F\u1004\u103A\u1019\u103B\u102C\u1038",
        "Cognitive Disability": "\u101E\u102D\u1019\u103C\u1004\u103A\u1019\u103E\u102F\u1006\u102D\u102F\u1004\u103A\u101B\u102C \u1019\u101E\u1014\u103A\u1005\u103D\u1019\u103A\u1038\u1019\u103E\u102F",
        "Seizure Safe": "\u1021\u1010\u1000\u103A\u101B\u1031\u102C\u1002\u102B\u1021\u1010\u103D\u1000\u103A \u1018\u1031\u1038\u1000\u1004\u103A\u1038\u101C\u102F\u1036\u1001\u103C\u102F\u1036\u101E\u1031\u102C",
        "Accessibility statement": "\u1019\u100A\u103A\u101E\u1030\u1019\u1006\u102D\u102F \u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1014\u102D\u102F\u1004\u103A\u101E\u1031\u102C \u1000\u103C\u1031\u100A\u102C\u1001\u103B\u1000\u103A",
        ADHD: "ADHD",
        "Low Vision": "\u1021\u1019\u103C\u1004\u103A\u1021\u102C\u101B\u102F\u1036\u1014\u100A\u103A\u1038",
        "Pause Animations": "\u1021\u1014\u103A\u1014\u102E\u1019\u1031\u1038\u101B\u103E\u1004\u103A\u1038\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u101B\u1015\u103A\u1015\u102B",
        "Animation paused": "\u101E\u1000\u103A\u101D\u1004\u103A\u101C\u103E\u102F\u1015\u103A\u101B\u103E\u102C\u1038\u1019\u103E\u102F \u1001\u1031\u1010\u1039\u1010\u101B\u1015\u103A\u1011\u102C\u1038\u101E\u100A\u103A",
        "Reset all settings": "\u1006\u1000\u103A\u1010\u1004\u103A\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1015\u103C\u1014\u103A\u101C\u100A\u103A\u101E\u1010\u103A\u1019\u103E\u1010\u103A\u1015\u102B",
        "Shortcut:": "\u1016\u103C\u1010\u103A\u101C\u1019\u103A\u1038:",
        "Epilepsy Safe Mode": "\u101D\u1000\u103A\u101B\u1030\u1038\u1015\u103C\u1014\u103A\u101B\u1031\u102C\u1002\u102B \u101C\u102F\u1036\u1001\u103C\u102F\u1036\u1019\u102F\u1012\u103A",
        "Mute sounds": "\u1021\u101E\u1036\u1015\u102D\u1010\u103A\u101B\u1014\u103A",
        "Page read": "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C \u1016\u1010\u103A\u1015\u103C\u1001\u103C\u1004\u103A\u1038",
        "Page read controls": "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C \u1016\u1010\u103A\u1015\u103C\u1001\u103C\u1004\u103A\u1038 \u1011\u102D\u1014\u103A\u1038\u1001\u103B\u102F\u1015\u103A\u1019\u103E\u102F\u1019\u103B\u102C\u1038",
        Pause: "\u1001\u100F\u101B\u1015\u103A\u101B\u1014\u103A",
        Resume: "\u1015\u103C\u1014\u103A\u1005\u101B\u1014\u103A",
        Stop: "\u101B\u1015\u103A\u101B\u1014\u103A",
        Settings: "\u1006\u1000\u103A\u1010\u1004\u103A\u1019\u103B\u102C\u1038",
        Speed: "\u1021\u1019\u103C\u1014\u103A\u1014\u103E\u102F\u1014\u103A\u1038",
        Voice: "\u1021\u101E\u1036",
        "Close accessibility menu": "\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1014\u102D\u102F\u1004\u103A\u1005\u103D\u1019\u103A\u1038 \u1019\u102E\u1014\u1030\u1038\u1000\u102D\u102F \u1015\u102D\u1010\u103A\u101B\u1014\u103A",
        "Back to accessibility menu": "\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1014\u102D\u102F\u1004\u103A\u1005\u103D\u1019\u103A\u1038 \u1019\u102E\u1014\u1030\u1038\u101E\u102D\u102F\u1037 \u1015\u103C\u1014\u103A\u101E\u103D\u102C\u1038\u101B\u1014\u103A",
        "Search languages": "\u1018\u102C\u101E\u102C\u1005\u1000\u102C\u1038\u1019\u103B\u102C\u1038 \u101B\u103E\u102C\u1016\u103D\u1031\u101B\u1014\u103A",
        "Selected language": "\u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1011\u102C\u1038\u101E\u1031\u102C \u1018\u102C\u101E\u102C\u1005\u1000\u102C\u1038",
        "View accessibility statement (opens in new window)": "\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1014\u102D\u102F\u1004\u103A\u1005\u103D\u1019\u103A\u1038 \u1000\u103C\u1031\u100A\u102C\u1001\u103B\u1000\u103A\u1000\u102D\u102F \u1000\u103C\u100A\u1037\u103A\u101B\u1014\u103A (\u101D\u1004\u103A\u1038\u1012\u102D\u102F\u1038\u1021\u101E\u1005\u103A\u1010\u103D\u1004\u103A \u1016\u103D\u1004\u1037\u103A\u101E\u100A\u103A)",
        "Visit CookieYes website (opens in new window)": "CookieYes \u101D\u1018\u103A\u1006\u102D\u102F\u1000\u103A\u101E\u102D\u102F\u1037 \u101E\u103D\u102C\u1038\u101B\u1031\u102C\u1000\u103A\u101B\u1014\u103A (\u101D\u1004\u103A\u1038\u1012\u102D\u102F\u1038\u1021\u101E\u1005\u103A\u1010\u103D\u1004\u103A \u1016\u103D\u1004\u1037\u103A\u101E\u100A\u103A)",
        "Reset all accessibility settings to default": "\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1014\u102D\u102F\u1004\u103A\u1005\u103D\u1019\u103A\u1038 \u1006\u1000\u103A\u1010\u1004\u103A\u1021\u102C\u1038\u101C\u102F\u1036\u1038\u1000\u102D\u102F \u1019\u1030\u101C\u1021\u1010\u102D\u102F\u1004\u103A\u1038 \u1015\u103C\u1014\u103A\u101C\u100A\u103A\u101E\u1010\u103A\u1019\u103E\u1010\u103A\u101B\u1014\u103A"
      };
    }
  });

  // src/locales/nb.json
  var require_nb = __commonJS({
    "src/locales/nb.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Tilgjengelighetsmeny",
        Close: "Lukk",
        "Text and Reading": "Tekst og lesing",
        "Navigation and Interaction": "Navigasjon og interaksjon",
        "Text Align": "Tekstjustering",
        "Align Left": "Venstrejuster",
        "Align Center": "Midtstill",
        "Align Right": "H\xF8yrejuster",
        "Adjust Font Size": "Juster skriftst\xF8rrelse",
        "Highlight Title": "Fremhev tittel",
        "Highlight Links": "Fremhev lenker",
        "Readable Font": "Lesbar skrift",
        "Color and Contrast": "Farge og kontrast",
        "Dark Contrast": "M\xF8rk kontrast",
        "Light Contrast": "Lys kontrast",
        "High Contrast": "H\xF8y kontrast",
        "High Saturation": "H\xF8y metning",
        "Low Saturation": "Lav metning",
        Monochrome: "Monokrom",
        Tools: "Verkt\xF8y",
        "Reading Guide": "Leseguide",
        "Big Cursor": "Stor mark\xF8r",
        "Increase Font Size": "\xD8k skriftst\xF8rrelse",
        "Decrease Font Size": "Reduser skriftst\xF8rrelse",
        "Letter Spacing": "Bokstavavstand",
        "Line Height": "Linjeh\xF8yde",
        "Font Weight": "Skrifttykkelse",
        "Dyslexia Font": "Dysleksi-skrift",
        Language: "Spr\xE5k",
        "Accessibility widget": "\xC5pne tilgjengelighetsmeny",
        "Accessibility Profiles": "Tilgjengelighetsprofiler",
        "Cognitive Disability": "Kognitiv funksjonshemming",
        "Seizure Safe": "Anfallssikker",
        "Accessibility statement": "Tilgjengelighetserkl\xE6ring",
        ADHD: "ADHD",
        "Low Vision": "Svaksynt",
        "Pause Animations": "Sett animasjoner p\xE5 pause",
        "Animation paused": "Animasjon satt p\xE5 pause",
        "Reset all settings": "Tilbakestill innstillinger",
        "Shortcut:": "Snarvei:",
        "Epilepsy Safe Mode": "Epilepsisikker modus",
        "Mute sounds": "Demp lyder",
        "Page read": "Les opp siden",
        "Page read controls": "Opplesingskontroller",
        Pause: "Pause",
        Resume: "Fortsett",
        Stop: "Stopp",
        Settings: "Innstillinger",
        Speed: "Hastighet",
        Voice: "Stemme",
        "Close accessibility menu": "Lukk tilgjengelighetsmeny",
        "Back to accessibility menu": "Tilbake til tilgjengelighetsmeny",
        "Search languages": "S\xF8k etter spr\xE5k",
        "Selected language": "Valgt spr\xE5k",
        "View accessibility statement (opens in new window)": "Vis tilgjengelighetserkl\xE6ring (\xE5pnes i nytt vindu)",
        "Visit CookieYes website (opens in new window)": "Bes\xF8k CookieYes-nettstedet (\xE5pnes i nytt vindu)",
        "Reset all accessibility settings to default": "Tilbakestill alle tilgjengelighetsinnstillinger"
      };
    }
  });

  // src/locales/nl.json
  var require_nl = __commonJS({
    "src/locales/nl.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Toegankelijkheidsmenu",
        Close: "Sluiten",
        "Text and Reading": "Tekst en lezen",
        "Navigation and Interaction": "Navigatie en interactie",
        "Text Align": "Tekstuitlijning",
        "Align Left": "Links uitlijnen",
        "Align Center": "Centreren",
        "Align Right": "Rechts uitlijnen",
        "Adjust Font Size": "Lettergrootte aanpassen",
        "Highlight Title": "Titel markeren",
        "Highlight Links": "Links markeren",
        "Readable Font": "Leesbaar lettertype",
        "Color and Contrast": "Kleur en contrast",
        "Dark Contrast": "Donker contrast",
        "Light Contrast": "Licht contrast",
        "High Contrast": "Hoog contrast",
        "High Saturation": "Hoge verzadiging",
        "Low Saturation": "Lage verzadiging",
        Monochrome: "Monochroom",
        Tools: "Hulpmiddelen",
        "Reading Guide": "Leeslijn",
        "Big Cursor": "Grote cursor",
        "Increase Font Size": "Lettergrootte vergroten",
        "Decrease Font Size": "Lettergrootte verkleinen",
        "Letter Spacing": "Letterafstand",
        "Line Height": "Regelhoogte",
        "Font Weight": "Letterdikte",
        "Dyslexia Font": "Dyslexie-lettertype",
        Language: "Taal",
        "Accessibility widget": "Toegankelijkheidsmenu openen",
        "Accessibility Profiles": "Toegankelijkheidsprofielen",
        "Cognitive Disability": "Cognitieve beperking",
        "Seizure Safe": "Epilepsieveilig",
        "Accessibility statement": "Toegankelijkheidsverklaring",
        ADHD: "ADHD",
        "Low Vision": "Slechtziend",
        "Pause Animations": "Animaties pauzeren",
        "Animation paused": "Animatie gepauzeerd",
        "Reset all settings": "Instellingen resetten",
        "Shortcut:": "Sneltoets:",
        "Epilepsy Safe Mode": "Epilepsieveilige modus",
        "Mute sounds": "Geluiden dempen",
        "Page read": "Pagina voorlezen",
        "Page read controls": "Voorleesbediening",
        Pause: "Pauzeren",
        Resume: "Hervatten",
        Stop: "Stoppen",
        Settings: "Instellingen",
        Speed: "Snelheid",
        Voice: "Stem",
        "Close accessibility menu": "Toegankelijkheidsmenu sluiten",
        "Back to accessibility menu": "Terug naar toegankelijkheidsmenu",
        "Search languages": "Talen zoeken",
        "Selected language": "Geselecteerde taal",
        "View accessibility statement (opens in new window)": "Toegankelijkheidsverklaring bekijken (opent in nieuw venster)",
        "Visit CookieYes website (opens in new window)": "CookieYes-website bezoeken (opent in nieuw venster)",
        "Reset all accessibility settings to default": "Alle toegankelijkheidsinstellingen herstellen"
      };
    }
  });

  // src/locales/no.json
  var require_no = __commonJS({
    "src/locales/no.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Tilgjengelighetsmeny",
        Close: "Lukk",
        "Text and Reading": "Tekst og lesing",
        "Navigation and Interaction": "Navigasjon og interaksjon",
        "Text Align": "Tekstjustering",
        "Align Left": "Venstrejuster",
        "Align Center": "Midtstill",
        "Align Right": "H\xF8yrejuster",
        "Adjust Font Size": "Juster tekstst\xF8rrelse",
        "Highlight Title": "Fremhev tittel",
        "Highlight Links": "Fremhev lenker",
        "Readable Font": "Lesbar skrift",
        "Color and Contrast": "Farge og kontrast",
        "Dark Contrast": "M\xF8rk kontrast",
        "Light Contrast": "Lys kontrast",
        "High Contrast": "H\xF8y kontrast",
        "High Saturation": "H\xF8y metning",
        "Low Saturation": "Lav metning",
        Monochrome: "Monokrom",
        Tools: "Verkt\xF8y",
        "Reading Guide": "Leseguide",
        "Big Cursor": "Stor mark\xF8r",
        "Increase Font Size": "\xD8k tekstst\xF8rrelse",
        "Decrease Font Size": "Reduser tekstst\xF8rrelse",
        "Letter Spacing": "Bokstavavstand",
        "Line Height": "Linjeh\xF8yde",
        "Font Weight": "Skriftvekt",
        "Dyslexia Font": "Dysleksiskrift",
        Language: "Spr\xE5k",
        "Accessibility widget": "\xC5pne tilgjengelighetsmeny",
        "Accessibility Profiles": "Tilgjengelighetsprofiler",
        "Cognitive Disability": "Kognitiv funksjonshemming",
        "Seizure Safe": "Anfallssikker",
        "Accessibility statement": "Tilgjengelighetserkl\xE6ring",
        ADHD: "ADHD",
        "Low Vision": "Svaksynt",
        "Pause Animations": "Sett animasjoner p\xE5 pause",
        "Animation paused": "Animasjon satt p\xE5 pause",
        "Reset all settings": "Tilbakestill innstillinger",
        "Shortcut:": "Snarvei:",
        "Epilepsy Safe Mode": "Epilepsisikker modus",
        "Mute sounds": "Demp lyder",
        "Page read": "Les opp siden",
        "Page read controls": "Opplesingskontroller",
        Pause: "Pause",
        Resume: "Fortsett",
        Stop: "Stopp",
        Settings: "Innstillinger",
        Speed: "Hastighet",
        Voice: "Stemme",
        "Close accessibility menu": "Lukk tilgjengelighetsmeny",
        "Back to accessibility menu": "Tilbake til tilgjengelighetsmeny",
        "Search languages": "S\xF8k etter spr\xE5k",
        "Selected language": "Valgt spr\xE5k",
        "View accessibility statement (opens in new window)": "Vis tilgjengelighetserkl\xE6ring (\xE5pnes i nytt vindu)",
        "Visit CookieYes website (opens in new window)": "Bes\xF8k CookieYes-nettstedet (\xE5pnes i nytt vindu)",
        "Reset all accessibility settings to default": "Tilbakestill alle tilgjengelighetsinnstillinger"
      };
    }
  });

  // src/locales/pa.json
  var require_pa = __commonJS({
    "src/locales/pa.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0A2A\u0A39\u0A41\u0A70\u0A1A \u0A2E\u0A47\u0A28\u0A42",
        Close: "\u0A2C\u0A70\u0A26 \u0A15\u0A30\u0A4B",
        "Text and Reading": "\u0A1F\u0A48\u0A15\u0A38\u0A1F \u0A05\u0A24\u0A47 \u0A2A\u0A5C\u0A4D\u0A39\u0A28\u0A3E",
        "Navigation and Interaction": "\u0A28\u0A48\u0A35\u0A40\u0A17\u0A47\u0A38\u0A3C\u0A28 \u0A05\u0A24\u0A47 \u0A07\u0A70\u0A1F\u0A30\u0A48\u0A15\u0A38\u0A3C\u0A28",
        "Text Align": "\u0A1F\u0A48\u0A15\u0A38\u0A1F \u0A07\u0A15\u0A38\u0A3E\u0A30\u0A24\u0A3E",
        "Align Left": "\u0A16\u0A71\u0A2C\u0A47 \u0A2A\u0A3E\u0A38\u0A47 \u0A07\u0A15\u0A38\u0A3E\u0A30 \u0A15\u0A30\u0A4B",
        "Align Center": "\u0A15\u0A47\u0A02\u0A26\u0A30 \u0A35\u0A3F\u0A71\u0A1A \u0A07\u0A15\u0A38\u0A3E\u0A30 \u0A15\u0A30\u0A4B",
        "Align Right": "\u0A38\u0A71\u0A1C\u0A47 \u0A07\u0A15\u0A38\u0A3E\u0A30 \u0A15\u0A30\u0A4B",
        "Adjust Font Size": "\u0A2B\u0A4B\u0A02\u0A1F \u0A06\u0A15\u0A3E\u0A30 \u0A05\u0A28\u0A41\u0A15\u0A42\u0A32\u0A3F\u0A24 \u0A15\u0A30\u0A4B",
        "Highlight Title": "\u0A38\u0A3F\u0A30\u0A32\u0A47\u0A16 \u0A39\u0A3E\u0A08\u0A32\u0A3E\u0A08\u0A1F \u0A15\u0A30\u0A4B",
        "Highlight Links": "\u0A32\u0A3F\u0A70\u0A15 \u0A39\u0A3E\u0A08\u0A32\u0A3E\u0A08\u0A1F \u0A15\u0A30\u0A4B",
        "Readable Font": "\u0A2A\u0A5C\u0A4D\u0A39\u0A28\u0A2F\u0A4B\u0A17 \u0A2B\u0A4B\u0A02\u0A1F",
        "Color and Contrast": "\u0A30\u0A70\u0A17 \u0A05\u0A24\u0A47 \u0A15\u0A70\u0A1F\u0A4D\u0A30\u0A3E\u0A38\u0A1F",
        "Dark Contrast": "\u0A17\u0A42\u0A5C\u0A4D\u0A39\u0A3E \u0A15\u0A70\u0A1F\u0A4D\u0A30\u0A3E\u0A38\u0A1F",
        "Light Contrast": "\u0A39\u0A32\u0A15\u0A3E \u0A15\u0A70\u0A1F\u0A4D\u0A30\u0A3E\u0A38\u0A1F",
        "High Contrast": "\u0A09\u0A71\u0A1A\u0A3E \u0A15\u0A70\u0A1F\u0A4D\u0A30\u0A3E\u0A38\u0A1F",
        "High Saturation": "\u0A09\u0A71\u0A1A\u0A40 \u0A38\u0A70\u0A24\u0A4D\u0A30\u0A3F\u0A2A\u0A24\u0A40",
        "Low Saturation": "\u0A18\u0A71\u0A1F \u0A38\u0A70\u0A24\u0A4D\u0A30\u0A3F\u0A2A\u0A24\u0A40",
        Monochrome: "\u0A07\u0A15 \u0A30\u0A70\u0A17\u0A40",
        Tools: "\u0A09\u0A2A\u0A15\u0A30\u0A28",
        "Reading Guide": "\u0A2A\u0A5C\u0A4D\u0A39\u0A28 \u0A17\u0A3E\u0A08\u0A21",
        "Big Cursor": "\u0A35\u0A71\u0A21\u0A3E \u0A15\u0A30\u0A38\u0A30",
        "Increase Font Size": "\u0A2B\u0A4B\u0A02\u0A1F \u0A06\u0A15\u0A3E\u0A30 \u0A35\u0A27\u0A3E\u0A13",
        "Decrease Font Size": "\u0A2B\u0A4B\u0A02\u0A1F \u0A06\u0A15\u0A3E\u0A30 \u0A18\u0A1F\u0A3E\u0A13",
        "Letter Spacing": "\u0A05\u0A71\u0A16\u0A30\u0A3E\u0A02 \u0A26\u0A40 \u0A26\u0A42\u0A30\u0A40",
        "Line Height": "\u0A32\u0A3E\u0A08\u0A28 \u0A26\u0A40 \u0A09\u0A1A\u0A3E\u0A08",
        "Font Weight": "\u0A2B\u0A4B\u0A02\u0A1F \u0A2D\u0A3E\u0A30",
        "Dyslexia Font": "\u0A21\u0A3F\u0A38\u0A32\u0A48\u0A15\u0A38\u0A40\u0A06 \u0A2B\u0A4B\u0A02\u0A1F",
        Language: "\u0A2D\u0A3E\u0A38\u0A3C\u0A3E",
        "Accessibility widget": "\u0A2A\u0A39\u0A41\u0A70\u0A1A \u0A2E\u0A47\u0A28\u0A42 \u0A16\u0A4B\u0A32\u0A4D\u0A39\u0A4B",
        "Accessibility Profiles": "\u0A2A\u0A39\u0A41\u0A70\u0A1A \u0A2A\u0A4D\u0A30\u0A4B\u0A2B\u0A3E\u0A08\u0A32",
        "Cognitive Disability": "\u0A2C\u0A4B\u0A27\u0A3E\u0A24\u0A2E\u0A15 \u0A05\u0A38\u0A2E\u0A30\u0A71\u0A25\u0A3E",
        "Seizure Safe": "\u0A26\u0A4C\u0A30\u0A3E \u0A38\u0A41\u0A30\u0A71\u0A16\u0A3F\u0A05\u0A24",
        "Accessibility statement": "\u0A2A\u0A39\u0A41\u0A70\u0A1A \u0A2C\u0A3F\u0A06\u0A28",
        ADHD: "ADHD",
        "Low Vision": "\u0A18\u0A71\u0A1F \u0A28\u0A1C\u0A3C\u0A30",
        "Pause Animations": "\u0A10\u0A28\u0A40\u0A2E\u0A47\u0A38\u0A3C\u0A28 \u0A30\u0A4B\u0A15\u0A4B",
        "Animation paused": "\u0A10\u0A28\u0A40\u0A2E\u0A47\u0A38\u0A3C\u0A28 \u0A30\u0A4B\u0A15\u0A40 \u0A17\u0A08",
        "Reset all settings": "\u0A38\u0A48\u0A1F\u0A3F\u0A70\u0A17\u0A3E\u0A02 \u0A30\u0A40\u0A38\u0A48\u0A1F \u0A15\u0A30\u0A4B",
        "Shortcut:": "\u0A38\u0A3C\u0A3E\u0A30\u0A1F\u0A15\u0A71\u0A1F:",
        "Epilepsy Safe Mode": "\u0A2E\u0A3F\u0A30\u0A17\u0A40 \u0A38\u0A41\u0A30\u0A71\u0A16\u0A3F\u0A05\u0A24 \u0A2E\u0A4B\u0A21",
        "Mute sounds": "\u0A06\u0A35\u0A3E\u0A1C\u0A3C\u0A3E\u0A02 \u0A2C\u0A70\u0A26 \u0A15\u0A30\u0A4B",
        "Page read": "\u0A2A\u0A70\u0A28\u0A3E \u0A2A\u0A5C\u0A4D\u0A39\u0A4B",
        "Page read controls": "\u0A2A\u0A70\u0A28\u0A3E \u0A2A\u0A5C\u0A4D\u0A39\u0A28 \u0A26\u0A47 \u0A15\u0A70\u0A1F\u0A30\u0A4B\u0A32",
        Pause: "\u0A30\u0A4B\u0A15\u0A4B",
        Resume: "\u0A2E\u0A41\u0A5C \u0A38\u0A3C\u0A41\u0A30\u0A42 \u0A15\u0A30\u0A4B",
        Stop: "\u0A2C\u0A70\u0A26 \u0A15\u0A30\u0A4B",
        Settings: "\u0A38\u0A48\u0A1F\u0A3F\u0A70\u0A17\u0A3E\u0A02",
        Speed: "\u0A17\u0A24\u0A40",
        Voice: "\u0A06\u0A35\u0A3E\u0A1C\u0A3C",
        "Close accessibility menu": "\u0A2A\u0A39\u0A41\u0A70\u0A1A\u0A2F\u0A4B\u0A17\u0A24\u0A3E \u0A2E\u0A40\u0A28\u0A42 \u0A2C\u0A70\u0A26 \u0A15\u0A30\u0A4B",
        "Back to accessibility menu": "\u0A2A\u0A39\u0A41\u0A70\u0A1A\u0A2F\u0A4B\u0A17\u0A24\u0A3E \u0A2E\u0A40\u0A28\u0A42 '\u0A24\u0A47 \u0A35\u0A3E\u0A2A\u0A38 \u0A1C\u0A3E\u0A13",
        "Search languages": "\u0A2D\u0A3E\u0A38\u0A3C\u0A3E\u0A35\u0A3E\u0A02 \u0A16\u0A4B\u0A1C\u0A4B",
        "Selected language": "\u0A1A\u0A41\u0A23\u0A40 \u0A17\u0A08 \u0A2D\u0A3E\u0A38\u0A3C\u0A3E",
        "View accessibility statement (opens in new window)": "\u0A2A\u0A39\u0A41\u0A70\u0A1A\u0A2F\u0A4B\u0A17\u0A24\u0A3E \u0A2C\u0A3F\u0A06\u0A28 \u0A35\u0A47\u0A16\u0A4B (\u0A28\u0A35\u0A40\u0A02 \u0A35\u0A3F\u0A70\u0A21\u0A4B \u0A35\u0A3F\u0A71\u0A1A \u0A16\u0A41\u0A71\u0A32\u0A4D\u0A39\u0A26\u0A3E \u0A39\u0A48)",
        "Visit CookieYes website (opens in new window)": "CookieYes \u0A35\u0A48\u0A71\u0A2C\u0A38\u0A3E\u0A08\u0A1F '\u0A24\u0A47 \u0A1C\u0A3E\u0A13 (\u0A28\u0A35\u0A40\u0A02 \u0A35\u0A3F\u0A70\u0A21\u0A4B \u0A35\u0A3F\u0A71\u0A1A \u0A16\u0A41\u0A71\u0A32\u0A4D\u0A39\u0A26\u0A3E \u0A39\u0A48)",
        "Reset all accessibility settings to default": "\u0A38\u0A3E\u0A30\u0A40\u0A06\u0A02 \u0A2A\u0A39\u0A41\u0A70\u0A1A\u0A2F\u0A4B\u0A17\u0A24\u0A3E \u0A38\u0A48\u0A1F\u0A3F\u0A70\u0A17\u0A3E\u0A02 \u0A28\u0A42\u0A70 \u0A21\u0A3F\u0A2B\u0A4C\u0A32\u0A1F '\u0A24\u0A47 \u0A30\u0A40\u0A38\u0A48\u0A1F \u0A15\u0A30\u0A4B"
      };
    }
  });

  // src/locales/pl.json
  var require_pl = __commonJS({
    "src/locales/pl.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menu dost\u0119pno\u015Bci",
        Close: "Zamknij",
        "Text and Reading": "Tekst i czytanie",
        "Navigation and Interaction": "Nawigacja i interakcja",
        "Text Align": "Wyr\xF3wnanie tekstu",
        "Align Left": "Wyr\xF3wnaj do lewej",
        "Align Center": "Wy\u015Brodkuj",
        "Align Right": "Wyr\xF3wnaj do prawej",
        "Adjust Font Size": "Dostosuj rozmiar czcionki",
        "Highlight Title": "Pod\u015Bwietl tytu\u0142",
        "Highlight Links": "Pod\u015Bwietl linki",
        "Readable Font": "Czytelna czcionka",
        "Color and Contrast": "Kolor i kontrast",
        "Dark Contrast": "Ciemny kontrast",
        "Light Contrast": "Jasny kontrast",
        "High Contrast": "Wysoki kontrast",
        "High Saturation": "Wysokie nasycenie",
        "Low Saturation": "Niskie nasycenie",
        Monochrome: "Monochromatyczny",
        Tools: "Narz\u0119dzia",
        "Reading Guide": "Obszar czytania",
        "Big Cursor": "Du\u017Cy kursor",
        "Increase Font Size": "Zwi\u0119ksz rozmiar czcionki",
        "Decrease Font Size": "Zmniejsz rozmiar czcionki",
        "Letter Spacing": "Odst\u0119p liter",
        "Line Height": "Wysoko\u015B\u0107 linii",
        "Font Weight": "Grubo\u015B\u0107 czcionki",
        "Dyslexia Font": "Czcionka dla dysleksji",
        Language: "J\u0119zyk",
        "Accessibility widget": "Otw\xF3rz menu dost\u0119pno\u015Bci",
        "Accessibility Profiles": "Profile dost\u0119pno\u015Bci",
        "Cognitive Disability": "Niepe\u0142nosprawno\u015B\u0107 poznawcza",
        "Seizure Safe": "Tryb ograniczaj\u0105cy ryzyko napad\xF3w",
        "Accessibility statement": "O\u015Bwiadczenie o dost\u0119pno\u015Bci",
        ADHD: "ADHD",
        "Low Vision": "S\u0142abowzroczno\u015B\u0107",
        "Pause Animations": "Zatrzymaj animacje",
        "Animation paused": "Animacja wstrzymana",
        "Reset all settings": "Resetuj ustawienia",
        "Shortcut:": "Skr\xF3t:",
        "Epilepsy Safe Mode": "Tryb bezpieczny dla os\xF3b z padaczk\u0105",
        "Mute sounds": "Wycisz d\u017Awi\u0119ki",
        "Page read": "Odczyt strony",
        "Page read controls": "Sterowanie czytaniem strony",
        Pause: "Wstrzymaj",
        Resume: "Wzn\xF3w",
        Stop: "Zatrzymaj",
        Settings: "Ustawienia",
        Speed: "Pr\u0119dko\u015B\u0107",
        Voice: "G\u0142os",
        "Close accessibility menu": "Zamknij menu dost\u0119pno\u015Bci",
        "Back to accessibility menu": "Powr\xF3t do menu dost\u0119pno\u015Bci",
        "Search languages": "Szukaj j\u0119zyk\xF3w",
        "Selected language": "Wybrany j\u0119zyk",
        "View accessibility statement (opens in new window)": "Zobacz o\u015Bwiadczenie o dost\u0119pno\u015Bci (otwiera si\u0119 w nowym oknie)",
        "Visit CookieYes website (opens in new window)": "Odwied\u017A stron\u0119 CookieYes (otwiera si\u0119 w nowym oknie)",
        "Reset all accessibility settings to default": "Przywr\xF3\u0107 domy\u015Blne ustawienia dost\u0119pno\u015Bci"
      };
    }
  });

  // src/locales/pt.json
  var require_pt = __commonJS({
    "src/locales/pt.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menu de acessibilidade",
        Close: "Fechar",
        "Text and Reading": "Texto e leitura",
        "Navigation and Interaction": "Navega\xE7\xE3o e intera\xE7\xE3o",
        "Text Align": "Alinhamento do texto",
        "Align Left": "Alinhar \xE0 esquerda",
        "Align Center": "Centralizar",
        "Align Right": "Alinhar \xE0 direita",
        "Adjust Font Size": "Ajustar Tamanho da Fonte",
        "Highlight Title": "Destacar T\xEDtulo",
        "Highlight Links": "Destacar Links",
        "Readable Font": "Fonte Leg\xEDvel",
        "Color and Contrast": "Cor e contraste",
        "Dark Contrast": "Contraste Escuro",
        "Light Contrast": "Contraste Claro",
        "High Contrast": "Alto Contraste",
        "High Saturation": "Alta Satura\xE7\xE3o",
        "Low Saturation": "Baixa Satura\xE7\xE3o",
        Monochrome: "Monocrom\xE1tico",
        Tools: "Ferramentas",
        "Reading Guide": "Guia de Leitura",
        "Big Cursor": "Cursor Grande",
        "Increase Font Size": "Aumentar Tamanho da Fonte",
        "Decrease Font Size": "Diminuir Tamanho da Fonte",
        "Letter Spacing": "Espa\xE7amento entre Letras",
        "Line Height": "Altura da Linha",
        "Font Weight": "Peso da Fonte",
        "Dyslexia Font": "Fonte para Dislexia",
        Language: "Idioma",
        "Accessibility widget": "Abrir menu de acessibilidade",
        "Accessibility Profiles": "Perfis de Acessibilidade",
        "Cognitive Disability": "Defici\xEAncia Cognitiva",
        "Seizure Safe": "Seguro para Epilepsia",
        "Accessibility statement": "Declara\xE7\xE3o de Acessibilidade",
        ADHD: "TDAH",
        "Low Vision": "Baixa vis\xE3o",
        "Pause Animations": "Parar Anima\xE7\xF5es",
        "Animation paused": "Anima\xE7\xE3o pausada",
        "Reset all settings": "Redefinir configura\xE7\xF5es",
        "Shortcut:": "Atalho:",
        "Epilepsy Safe Mode": "Modo seguro para epilepsia",
        "Mute sounds": "Silenciar sons",
        "Page read": "Leitura da p\xE1gina",
        "Page read controls": "Controles de leitura",
        Pause: "Pausar",
        Resume: "Retomar",
        Stop: "Parar",
        Settings: "Configura\xE7\xF5es",
        Speed: "Velocidade",
        Voice: "Voz",
        "Close accessibility menu": "Fechar o menu de acessibilidade",
        "Back to accessibility menu": "Voltar ao menu de acessibilidade",
        "Search languages": "Pesquisar idiomas",
        "Selected language": "Idioma selecionado",
        "View accessibility statement (opens in new window)": "Ver a declara\xE7\xE3o de acessibilidade (abre em uma nova janela)",
        "Visit CookieYes website (opens in new window)": "Visitar o site da CookieYes (abre em uma nova janela)",
        "Reset all accessibility settings to default": "Redefinir todas as configura\xE7\xF5es de acessibilidade"
      };
    }
  });

  // src/locales/ro.json
  var require_ro = __commonJS({
    "src/locales/ro.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Meniu Accesibilitate",
        Close: "\xCEnchide",
        "Text and Reading": "Text \u0219i citire",
        "Navigation and Interaction": "Navigare \u0219i interac\u021Biune",
        "Text Align": "Aliniere text",
        "Align Left": "Aliniere la st\xE2nga",
        "Align Center": "Aliniere la centru",
        "Align Right": "Aliniere la dreapta",
        "Adjust Font Size": "Ajusteaz\u0103 Dimensiunea Fontului",
        "Highlight Title": "Eviden\u021Biaz\u0103 Titlul",
        "Highlight Links": "Eviden\u021Biaz\u0103 Link-urile",
        "Readable Font": "Font Lizibil",
        "Color and Contrast": "Culoare \u0219i contrast",
        "Dark Contrast": "Contrast \xCEntunecat",
        "Light Contrast": "Contrast Deschis",
        "High Contrast": "Contrast Ridicat",
        "High Saturation": "Satura\u021Bie Ridicat\u0103",
        "Low Saturation": "Satura\u021Bie Sc\u0103zut\u0103",
        Monochrome: "Monocrom",
        Tools: "Instrumente",
        "Reading Guide": "Ghid de Citire",
        "Big Cursor": "Cursor Mare",
        "Increase Font Size": "M\u0103re\u0219te Dimensiunea Fontului",
        "Decrease Font Size": "Mic\u0219oreaz\u0103 Dimensiunea Fontului",
        "Letter Spacing": "Spa\u021Biere Litere",
        "Line Height": "\xCEn\u0103l\u021Bime Linie",
        "Font Weight": "Grosime Font",
        "Dyslexia Font": "Font pentru Dislexie",
        Language: "Limb\u0103",
        "Accessibility widget": "Deschide Meniul de Accesibilitate",
        "Accessibility Profiles": "Profiluri de Accesibilitate",
        "Cognitive Disability": "Dizabilitate Cognitiv\u0103",
        "Seizure Safe": "Sigur pentru Epilepsie",
        "Accessibility statement": "Declara\u021Bie de Accesibilitate",
        ADHD: "ADHD",
        "Low Vision": "Vedere slab\u0103",
        "Pause Animations": "Opre\u0219te Anima\u021Biile",
        "Animation paused": "Anima\u021Bie \xEEntrerupt\u0103",
        "Reset all settings": "Reseteaz\u0103 set\u0103rile",
        "Shortcut:": "Scurt\u0103tur\u0103:",
        "Epilepsy Safe Mode": "Mod sigur pentru epilepsie",
        "Mute sounds": "Dezactiveaz\u0103 sunetele",
        "Page read": "Citirea paginii",
        "Page read controls": "Comenzi de citire",
        Pause: "Pauz\u0103",
        Resume: "Reluare",
        Stop: "Oprire",
        Settings: "Set\u0103ri",
        Speed: "Vitez\u0103",
        Voice: "Voce",
        "Close accessibility menu": "\xCEnchide meniul de accesibilitate",
        "Back to accessibility menu": "\xCEnapoi la meniul de accesibilitate",
        "Search languages": "Caut\u0103 limbi",
        "Selected language": "Limba selectat\u0103",
        "View accessibility statement (opens in new window)": "Vezi declara\u021Bia de accesibilitate (se deschide \xEEntr-o fereastr\u0103 nou\u0103)",
        "Visit CookieYes website (opens in new window)": "Viziteaz\u0103 site-ul CookieYes (se deschide \xEEntr-o fereastr\u0103 nou\u0103)",
        "Reset all accessibility settings to default": "Reseteaz\u0103 toate set\u0103rile de accesibilitate"
      };
    }
  });

  // src/locales/ru.json
  var require_ru = __commonJS({
    "src/locales/ru.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u041C\u0435\u043D\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438",
        Close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        "Text and Reading": "\u0422\u0435\u043A\u0441\u0442 \u0438 \u0447\u0442\u0435\u043D\u0438\u0435",
        "Navigation and Interaction": "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0438 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",
        "Text Align": "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430",
        "Align Left": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043B\u0435\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
        "Align Center": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
        "Align Right": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043F\u0440\u0430\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
        "Adjust Font Size": "\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",
        "Highlight Title": "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        "Highlight Links": "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0438",
        "Readable Font": "\u0427\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0448\u0440\u0438\u0444\u0442",
        "Color and Contrast": "\u0426\u0432\u0435\u0442 \u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "Dark Contrast": "\u0422\u0435\u043C\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "Light Contrast": "\u0421\u0432\u0435\u0442\u043B\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "High Contrast": "\u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "High Saturation": "\u0412\u044B\u0441\u043E\u043A\u0430\u044F \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C",
        "Low Saturation": "\u041D\u0438\u0437\u043A\u0430\u044F \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C",
        Monochrome: "\u041C\u043E\u043D\u043E\u0445\u0440\u043E\u043C\u043D\u044B\u0439",
        Tools: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
        "Reading Guide": "\u041B\u0438\u043D\u0435\u0439\u043A\u0430 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F",
        "Big Cursor": "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043A\u0443\u0440\u0441\u043E\u0440",
        "Increase Font Size": "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",
        "Decrease Font Size": "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",
        "Letter Spacing": "\u041C\u0435\u0436\u0431\u0443\u043A\u0432\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B",
        "Line Height": "\u0412\u044B\u0441\u043E\u0442\u0430 \u0441\u0442\u0440\u043E\u043A\u0438",
        "Font Weight": "\u041D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0448\u0440\u0438\u0444\u0442\u0430",
        "Dyslexia Font": "\u0428\u0440\u0438\u0444\u0442 \u0434\u043B\u044F \u0434\u0438\u0441\u043B\u0435\u043A\u0441\u0438\u0438",
        Language: "\u042F\u0437\u044B\u043A",
        "Accessibility widget": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438",
        "Accessibility Profiles": "\u041F\u0440\u043E\u0444\u0438\u043B\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438",
        "Cognitive Disability": "\u041A\u043E\u0433\u043D\u0438\u0442\u0438\u0432\u043D\u044B\u0435 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F",
        "Seizure Safe": "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E \u043F\u0440\u0438 \u044D\u043F\u0438\u043B\u0435\u043F\u0441\u0438\u0438",
        "Accessibility statement": "\u0417\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438",
        ADHD: "\u0421\u0414\u0412\u0413",
        "Low Vision": "\u0421\u043B\u0430\u0431\u043E\u0435 \u0437\u0440\u0435\u043D\u0438\u0435",
        "Pause Animations": "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438",
        "Animation paused": "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430",
        "Reset all settings": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
        "Shortcut:": "\u0421\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448:",
        "Epilepsy Safe Mode": "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u043F\u0440\u0438 \u044D\u043F\u0438\u043B\u0435\u043F\u0441\u0438\u0438",
        "Mute sounds": "\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A\u0438",
        "Page read": "\u0427\u0442\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
        "Page read controls": "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0447\u0442\u0435\u043D\u0438\u0435\u043C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
        Pause: "\u041F\u0430\u0443\u0437\u0430",
        Resume: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
        Stop: "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",
        Settings: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
        Speed: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",
        Voice: "\u0413\u043E\u043B\u043E\u0441",
        "Close accessibility menu": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438",
        "Back to accessibility menu": "\u041D\u0430\u0437\u0430\u0434 \u0432 \u043C\u0435\u043D\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438",
        "Search languages": "\u041F\u043E\u0438\u0441\u043A \u044F\u0437\u044B\u043A\u043E\u0432",
        "Selected language": "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u044F\u0437\u044B\u043A",
        "View accessibility statement (opens in new window)": "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438 (\u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435)",
        "Visit CookieYes website (opens in new window)": "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 CookieYes (\u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435)",
        "Reset all accessibility settings to default": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438 \u0434\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"
      };
    }
  });

  // src/locales/si.json
  var require_si = __commonJS({
    "src/locales/si.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1\u0DB1\u0DD3\u0DBA \u0DB8\u0DD9\u0DB1\u0DD4\u0DC0",
        Close: "\u0DC0\u0DC3\u0DB1\u0DCA\u0DB1",
        "Text and Reading": "\u0DB4\u0DD9\u0DC5 \u0DC3\u0DC4 \u0D9A\u0DD2\u0DBA\u0DC0\u0DD3\u0DB8",
        "Navigation and Interaction": "\u0DC3\u0D82\u0DA0\u0DBD\u0DB1\u0DBA \u0DC3\u0DC4 \u0D85\u0DB1\u0DCA\u0DAD\u0DBB\u0DCA\u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF",
        "Text Align": "\u0DB4\u0DD9\u0DC5 \u0DB4\u0DD9\u0DC5\u0D9C\u0DD0\u0DC3\u0DCA\u0DB8",
        "Align Left": "\u0DC0\u0DB8\u0DA7 \u0DC3\u0DB8\u0DB4\u0DCF\u0DAD \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Align Center": "\u0DB8\u0DB0\u0DCA\u200D\u0DBA\u0DBA\u0DA7 \u0DB4\u0DD9\u0DC5\u0D9C\u0DC3\u0DCA\u0DC0\u0DB1\u0DCA\u0DB1",
        "Align Right": "\u0DAF\u0D9A\u0DD4\u0DAB\u0DA7 \u0DB4\u0DD9\u0DC5\u0D9C\u0DC3\u0DCA\u0DC0\u0DB1\u0DCA\u0DB1",
        "Adjust Font Size": "\u0D85\u0D9A\u0DD4\u0DBB\u0DD4 \u0DB4\u0DCA\u200D\u0DBB\u0DB8\u0DCF\u0DAB\u0DBA \u0DC3\u0D9A\u0DC3\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Highlight Title": "\u0DC1\u0DD3\u0DBB\u0DCA\u0DC2\u0DBA \u0D8B\u0DAF\u0DCA\u0DAF\u0DD3\u0DB4\u0DB1\u0DBA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Highlight Links": "\u0DC3\u0DB6\u0DD0\u0DB3\u0DD2 \u0D8B\u0DAF\u0DCA\u0DAF\u0DD3\u0DB4\u0DB1\u0DBA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Readable Font": "\u0D9A\u0DD2\u0DBA\u0DC0\u0DD2\u0DBA \u0DC4\u0DD0\u0D9A\u0DD2 \u0D85\u0D9A\u0DD4\u0DBB\u0DD4",
        "Color and Contrast": "\u0DC0\u0DBB\u0DCA\u0DAB\u0DBA \u0DC3\u0DC4 \u0DC0\u0DD2\u0DC2\u0DB8\u0DAD\u0DCF\u0DC0",
        "Dark Contrast": "\u0D85\u0DB3\u0DD4\u0DBB\u0DD4 \u0D9A\u0DB1\u0DCA\u0DA7\u0DCA\u200D\u0DBB\u0DCF\u0DC3\u0DCA\u0DA7\u0DCA",
        "Light Contrast": "\u0DBD\u0DCF \u0D9A\u0DB1\u0DCA\u0DA7\u0DCA\u200D\u0DBB\u0DCF\u0DC3\u0DCA\u0DA7\u0DCA",
        "High Contrast": "\u0D89\u0DC4\u0DC5 \u0D9A\u0DB1\u0DCA\u0DA7\u0DCA\u200D\u0DBB\u0DCF\u0DC3\u0DCA\u0DA7\u0DCA",
        "High Saturation": "\u0D89\u0DC4\u0DC5 \u0DC3\u0D82\u0DAD\u0DD8\u0DB4\u0DCA\u0DAD\u0DAD\u0DCF\u0DC0\u0DBA",
        "Low Saturation": "\u0D85\u0DA9\u0DD4 \u0DC3\u0D82\u0DAD\u0DD8\u0DB4\u0DCA\u0DAD\u0DAD\u0DCF\u0DC0\u0DBA",
        Monochrome: "\u0D92\u0D9A\u0DC0\u0DBB\u0DCA\u0DAB",
        Tools: "\u0DB8\u0DD9\u0DC0\u0DBD\u0DB8\u0DCA",
        "Reading Guide": "\u0D9A\u0DD2\u0DBA\u0DC0\u0DD3\u0DB8\u0DDA \u0DB8\u0DCF\u0DBB\u0DCA\u0D9C\u0DDD\u0DB4\u0DAF\u0DDA\u0DC1\u0D9A\u0DBA",
        "Big Cursor": "\u0DC0\u0DD2\u0DC1\u0DCF\u0DBD \u0D9A\u0DBB\u0DCA\u0DC3\u0DBB\u0DBA",
        "Increase Font Size": "\u0D85\u0D9A\u0DD4\u0DBB\u0DD4 \u0DB4\u0DCA\u200D\u0DBB\u0DB8\u0DCF\u0DAB\u0DBA \u0DC0\u0DD0\u0DA9\u0DD2 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Decrease Font Size": "\u0D85\u0D9A\u0DD4\u0DBB\u0DD4 \u0DB4\u0DCA\u200D\u0DBB\u0DB8\u0DCF\u0DAB\u0DBA \u0D85\u0DA9\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Letter Spacing": "\u0D85\u0D9A\u0DD4\u0DBB\u0DD4 \u0D85\u0DAD\u0DBB \u0D85\u0DC0\u0D9A\u0DCF\u0DC1\u0DBA",
        "Line Height": "\u0DB4\u0DDA\u0DC5\u0DD2 \u0D8B\u0DC3",
        "Font Weight": "\u0D85\u0D9A\u0DD4\u0DBB\u0DD4 \u0DB6\u0DBB",
        "Dyslexia Font": "\u0DA9\u0DD2\u0DC3\u0DCA\u0DBD\u0DD9\u0D9A\u0DCA\u0DC3\u0DD2\u0DBA\u0DCF \u0D85\u0D9A\u0DD4\u0DBB\u0DD4",
        Language: "\u0DB7\u0DCF\u0DC2\u0DCF\u0DC0",
        "Accessibility widget": "\u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1\u0DB1\u0DD3\u0DBA \u0DB8\u0DD9\u0DB1\u0DD4\u0DC0 \u0DC0\u0DD2\u0DC0\u0DD8\u0DAD \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Accessibility Profiles": "\u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1\u0DB1\u0DD3\u0DBA \u0DB4\u0DD0\u0DAD\u0DD2\u0D9A\u0DA9",
        "Cognitive Disability": "\u0DA5\u0DCF\u0DB1\u0DCF\u0DAD\u0DCA\u0DB8\u0D9A \u0D86\u0DB6\u0DCF\u0DB0\u0DBA",
        "Seizure Safe": "\u0D85\u0DB4\u0DC3\u0DCA\u0DB8\u0DCF\u0DBB \u0D86\u0DBB\u0D9A\u0DCA\u0DC2\u0DD2\u0DAD",
        "Accessibility statement": "\u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1\u0DB1\u0DD3\u0DBA \u0DB4\u0DCA\u200D\u0DBB\u0D9A\u0DCF\u0DC1\u0DB1\u0DBA",
        ADHD: "ADHD",
        "Low Vision": "\u0D85\u0DA9\u0DD4 \u0DB4\u0DD9\u0DB1\u0DD3\u0DB8",
        "Pause Animations": "\u0DC3\u0DA2\u0DD3\u0DC0\u0DD2\u0D9A\u0DBB\u0DAB \u0DB1\u0DC0\u0DAD\u0DCA\u0DC0\u0DB1\u0DCA\u0DB1",
        "Animation paused": "\u0DC3\u0DA2\u0DD3\u0DC0\u0DD2\u0D9A\u0DBB\u0DAB\u0DBA \u0DC0\u0DD2\u0DBB\u0DCF\u0DB8 \u0D9A\u0DBB \u0D87\u0DAD",
        "Reset all settings": "\u0DC3\u0DD0\u0D9A\u0DC3\u0DD4\u0DB8\u0DCA \u0DBA\u0DC5\u0DD2 \u0DB4\u0DD2\u0DC4\u0DD2\u0DA7\u0DD4\u0DC0\u0DB1\u0DCA\u0DB1",
        "Shortcut:": "\u0D9A\u0DD9\u0DA7\u0DD2\u0DB8\u0D9F:",
        "Epilepsy Safe Mode": "\u0D85\u0DB4\u0DC3\u0DCA\u0DB8\u0DCF\u0DBB \u0D86\u0DBB\u0D9A\u0DCA\u0DC2\u0DD2\u0DAD \u0DB4\u0DCA\u200D\u0DBB\u0D9A\u0DCF\u0DBB\u0DBA",
        "Mute sounds": "\u0DC1\u0DB6\u0DCA\u0DAF \u0DB1\u0DD2\u0DC4\u0DAC \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Page read": "\u0DB4\u0DD2\u0DA7\u0DD4\u0DC0 \u0D9A\u0DD2\u0DBA\u0DC0\u0DB1\u0DCA\u0DB1",
        "Page read controls": "\u0DB4\u0DD2\u0DA7\u0DD4\u0DC0 \u0D9A\u0DD2\u0DBA\u0DC0\u0DD3\u0DB8\u0DDA \u0DB4\u0DCF\u0DBD\u0DB1",
        Pause: "\u0DC0\u0DD2\u0DBB\u0DCF\u0DB8\u0DBA",
        Resume: "\u0DB1\u0DD0\u0DC0\u0DAD \u0D86\u0DBB\u0DB8\u0DCA\u0DB7 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        Stop: "\u0DB1\u0DC0\u0DAD\u0DCA\u0DC0\u0DB1\u0DCA\u0DB1",
        Settings: "\u0DC3\u0DD0\u0D9A\u0DC3\u0DD4\u0DB8\u0DCA",
        Speed: "\u0DC0\u0DDA\u0D9C\u0DBA",
        Voice: "\u0DC4\u0DAC",
        "Close accessibility menu": "\u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1\u0DCA\u200D\u0DBA\u0DAD\u0DCF \u0DB8\u0DD9\u0DB1\u0DD4\u0DC0 \u0DC0\u0DC3\u0DB1\u0DCA\u0DB1",
        "Back to accessibility menu": "\u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1\u0DCA\u200D\u0DBA\u0DAD\u0DCF \u0DB8\u0DD9\u0DB1\u0DD4\u0DC0\u0DA7 \u0D86\u0DB4\u0DC3\u0DD4",
        "Search languages": "\u0DB7\u0DCF\u0DC2\u0DCF \u0DC3\u0DDC\u0DBA\u0DB1\u0DCA\u0DB1",
        "Selected language": "\u0DAD\u0DDD\u0DBB\u0DCF\u0D9C\u0DAD\u0DCA \u0DB7\u0DCF\u0DC2\u0DCF\u0DC0",
        "View accessibility statement (opens in new window)": "\u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1\u0DCA\u200D\u0DBA\u0DAD\u0DCF \u0DB4\u0DCA\u200D\u0DBB\u0D9A\u0DCF\u0DC1\u0DBA \u0DB6\u0DBD\u0DB1\u0DCA\u0DB1 (\u0DB1\u0DC0 \u0D9A\u0DC0\u0DD4\u0DC5\u0DD4\u0DC0\u0D9A \u0DC0\u0DD2\u0DC0\u0DD8\u0DAD \u0DC0\u0DDA)",
        "Visit CookieYes website (opens in new window)": "CookieYes \u0DC0\u0DD9\u0DB6\u0DCA \u0D85\u0DA9\u0DC0\u0DD2\u0DBA\u0DA7 \u0DB4\u0DD2\u0DC0\u0DD2\u0DC3\u0DD9\u0DB1\u0DCA\u0DB1 (\u0DB1\u0DC0 \u0D9A\u0DC0\u0DD4\u0DC5\u0DD4\u0DC0\u0D9A \u0DC0\u0DD2\u0DC0\u0DD8\u0DAD \u0DC0\u0DDA)",
        "Reset all accessibility settings to default": "\u0DC3\u0DD2\u0DBA\u0DBD\u0DD4\u0DB8 \u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1\u0DCA\u200D\u0DBA\u0DAD\u0DCF \u0DC3\u0DD0\u0D9A\u0DC3\u0DD4\u0DB8\u0DCA \u0DB4\u0DD9\u0DBB\u0DB1\u0DD2\u0DB8\u0DD2\u0DBA\u0DA7 \u0DBA\u0DC5\u0DD2 \u0DC3\u0D9A\u0DC3\u0DB1\u0DCA\u0DB1"
      };
    }
  });

  // src/locales/sk.json
  var require_sk = __commonJS({
    "src/locales/sk.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menu pr\xEDstupnosti",
        Close: "Zavrie\u0165",
        "Text and Reading": "Text a \u010D\xEDtanie",
        "Navigation and Interaction": "Navig\xE1cia a interakcia",
        "Text Align": "Zarovnanie textu",
        "Align Left": "Zarovna\u0165 do\u013Eava",
        "Align Center": "Zarovna\u0165 na stred",
        "Align Right": "Zarovna\u0165 vpravo",
        "Adjust Font Size": "Upravi\u0165 ve\u013Ekos\u0165 p\xEDsma",
        "Highlight Title": "Zv\xFDrazni\u0165 nadpis",
        "Highlight Links": "Zv\xFDrazni\u0165 odkazy",
        "Readable Font": "\u010Citate\u013En\xE9 p\xEDsmo",
        "Color and Contrast": "Farba a kontrast",
        "Dark Contrast": "Tmav\xFD kontrast",
        "Light Contrast": "Svetl\xFD kontrast",
        "High Contrast": "Vysok\xFD kontrast",
        "High Saturation": "Vysok\xE1 s\xFDtos\u0165",
        "Low Saturation": "N\xEDzka s\xFDtos\u0165",
        Monochrome: "Monochr\xF3m",
        Tools: "N\xE1stroje",
        "Reading Guide": "Sprievodca \u010D\xEDtan\xEDm",
        "Big Cursor": "Ve\u013Ek\xFD kurzor",
        "Increase Font Size": "Zv\xE4\u010D\u0161i\u0165 p\xEDsmo",
        "Decrease Font Size": "Zmen\u0161i\u0165 p\xEDsmo",
        "Letter Spacing": "Medzera medzi p\xEDsmenami",
        "Line Height": "V\xFD\u0161ka riadku",
        "Font Weight": "Hr\xFAbka p\xEDsma",
        "Dyslexia Font": "P\xEDsmo pre dyslexiu",
        Language: "Jazyk",
        "Accessibility widget": "Otvori\u0165 menu pr\xEDstupnosti",
        "Accessibility Profiles": "Profily pr\xEDstupnosti",
        "Cognitive Disability": "Kognit\xEDvne postihnutie",
        "Seizure Safe": "Bezpe\u010Dn\xE9 pri z\xE1chvatoch",
        "Accessibility statement": "Vyhl\xE1senie o pr\xEDstupnosti",
        ADHD: "ADHD",
        "Low Vision": "Slab\xFD zrak",
        "Pause Animations": "Zastavi\u0165 anim\xE1cie",
        "Animation paused": "Anim\xE1cia pozastaven\xE1",
        "Reset all settings": "Obnovi\u0165 nastavenia",
        "Shortcut:": "Skratka:",
        "Epilepsy Safe Mode": "Re\u017Eim bezpe\u010Dn\xFD pri epilepsii",
        "Mute sounds": "Stlmi\u0165 zvuky",
        "Page read": "\u010C\xEDta\u0165 str\xE1nku",
        "Page read controls": "Ovl\xE1danie \u010D\xEDtania str\xE1nky",
        Pause: "Pozastavi\u0165",
        Resume: "Pokra\u010Dova\u0165",
        Stop: "Zastavi\u0165",
        Settings: "Nastavenia",
        Speed: "R\xFDchlos\u0165",
        Voice: "Hlas",
        "Close accessibility menu": "Zavrie\u0165 ponuku pr\xEDstupnosti",
        "Back to accessibility menu": "Sp\xE4\u0165 do ponuky pr\xEDstupnosti",
        "Search languages": "H\u013Eada\u0165 jazyky",
        "Selected language": "Vybran\xFD jazyk",
        "View accessibility statement (opens in new window)": "Zobrazi\u0165 vyhl\xE1senie o pr\xEDstupnosti (otvor\xED sa v novom okne)",
        "Visit CookieYes website (opens in new window)": "Nav\u0161t\xEDvi\u0165 webov\xFA str\xE1nku CookieYes (otvor\xED sa v novom okne)",
        "Reset all accessibility settings to default": "Obnovi\u0165 v\u0161etky nastavenia pr\xEDstupnosti na predvolen\xE9"
      };
    }
  });

  // src/locales/sl.json
  var require_sl = __commonJS({
    "src/locales/sl.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Meni dostopnosti",
        Close: "Zapri",
        "Text and Reading": "Besedilo in branje",
        "Navigation and Interaction": "Navigacija in interakcija",
        "Text Align": "Poravnava besedila",
        "Align Left": "Poravnaj levo",
        "Align Center": "Sredinska poravnava",
        "Align Right": "Poravnaj desno",
        "Adjust Font Size": "Prilagodi velikost pisave",
        "Highlight Title": "Ozna\u010Di naslov",
        "Highlight Links": "Ozna\u010Di povezave",
        "Readable Font": "Bralna pisava",
        "Color and Contrast": "Barva in kontrast",
        "Dark Contrast": "Temni kontrast",
        "Light Contrast": "Svetli kontrast",
        "High Contrast": "Visoki kontrast",
        "High Saturation": "Visoka nasi\u010Denost",
        "Low Saturation": "Nizka nasi\u010Denost",
        Monochrome: "Monokromno",
        Tools: "Orodja",
        "Reading Guide": "Bralni vodnik",
        "Big Cursor": "Velik kazalec",
        "Increase Font Size": "Pove\u010Daj velikost pisave",
        "Decrease Font Size": "Zmanj\u0161aj velikost pisave",
        "Letter Spacing": "Razmik med \u010Drkami",
        "Line Height": "Vi\u0161ina vrstice",
        "Font Weight": "Debelina pisave",
        "Dyslexia Font": "Pisava za disleksijo",
        Language: "Jezik",
        "Accessibility widget": "Odpri meni dostopnosti",
        "Accessibility Profiles": "Profili dostopnosti",
        "Cognitive Disability": "Kognitivna oviranost",
        "Seizure Safe": "Varno za napade",
        "Accessibility statement": "Izjava o dostopnosti",
        ADHD: "ADHD",
        "Low Vision": "Slabovidnost",
        "Pause Animations": "Ustavi animacije",
        "Animation paused": "Animacija zaustavljena",
        "Reset all settings": "Ponastavi vse nastavitve",
        "Shortcut:": "Bli\u017Enjica:",
        "Epilepsy Safe Mode": "Na\u010Din, varen za epilepsijo",
        "Mute sounds": "Uti\u0161aj zvoke",
        "Page read": "Branje strani",
        "Page read controls": "Nadzor branja strani",
        Pause: "Premor",
        Resume: "Nadaljuj",
        Stop: "Ustavi",
        Settings: "Nastavitve",
        Speed: "Hitrost",
        Voice: "Glas",
        "Close accessibility menu": "Zapri meni dostopnosti",
        "Back to accessibility menu": "Nazaj na meni dostopnosti",
        "Search languages": "Iskanje jezikov",
        "Selected language": "Izbrani jezik",
        "View accessibility statement (opens in new window)": "Poglej izjavo o dostopnosti (odpre se v novem oknu)",
        "Visit CookieYes website (opens in new window)": "Obi\u0161\u010Di spletno mesto CookieYes (odpre se v novem oknu)",
        "Reset all accessibility settings to default": "Ponastavi vse nastavitve dostopnosti na privzeto"
      };
    }
  });

  // src/locales/sr-SP.json
  var require_sr_SP = __commonJS({
    "src/locales/sr-SP.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u041C\u0435\u043D\u0438 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0447\u043D\u043E\u0441\u0442\u0438",
        Close: "\u0417\u0430\u0442\u0432\u043E\u0440\u0438",
        "Text and Reading": "\u0422\u0435\u043A\u0441\u0442 \u0438 \u0447\u0438\u0442\u0430\u045A\u0435",
        "Navigation and Interaction": "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0458\u0430 \u0438 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0446\u0438\u0458\u0430",
        "Text Align": "\u041F\u043E\u0440\u0430\u0432\u043D\u0430\u045A\u0435 \u0442\u0435\u043A\u0441\u0442\u0430",
        "Align Left": "\u041F\u043E\u0440\u0430\u0432\u043D\u0430\u0458 \u043B\u0435\u0432\u043E",
        "Align Center": "\u041F\u043E\u0440\u0430\u0432\u043D\u0430\u0458 \u043F\u043E \u0441\u0440\u0435\u0434\u0438\u043D\u0438",
        "Align Right": "\u041F\u043E\u0440\u0430\u0432\u043D\u0430\u0458 \u0434\u0435\u0441\u043D\u043E",
        "Adjust Font Size": "\u041F\u043E\u0434\u0435\u0441\u0438 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u0443 \u0444\u043E\u043D\u0442\u0430",
        "Highlight Title": "\u0418\u0441\u0442\u0430\u043A\u043D\u0438 \u043D\u0430\u0441\u043B\u043E\u0432",
        "Highlight Links": "\u0418\u0441\u0442\u0430\u043A\u043D\u0438 \u043B\u0438\u043D\u043A\u043E\u0432\u0435",
        "Readable Font": "\u0427\u0438\u0442\u0459\u0438\u0432 \u0444\u043E\u043D\u0442",
        "Color and Contrast": "\u0411\u043E\u0458\u0430 \u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "Dark Contrast": "\u0422\u0430\u043C\u043D\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "Light Contrast": "\u0421\u0432\u0435\u0442\u043B\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "High Contrast": "\u0412\u0438\u0441\u043E\u043A\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "High Saturation": "\u0412\u0438\u0441\u043E\u043A\u0430 \u0437\u0430\u0441\u0438\u045B\u0435\u043D\u043E\u0441\u0442",
        "Low Saturation": "\u041D\u0438\u0441\u043A\u0430 \u0437\u0430\u0441\u0438\u045B\u0435\u043D\u043E\u0441\u0442",
        Monochrome: "\u041C\u043E\u043D\u043E\u0445\u0440\u043E\u043C\u0430\u0442\u0441\u043A\u0438",
        Tools: "\u0410\u043B\u0430\u0442\u0438",
        "Reading Guide": "\u0412\u043E\u0434\u0438\u0447 \u0437\u0430 \u0447\u0438\u0442\u0430\u045A\u0435",
        "Big Cursor": "\u0412\u0435\u043B\u0438\u043A\u0438 \u043A\u0443\u0440\u0441\u043E\u0440",
        "Increase Font Size": "\u041F\u043E\u0432\u0435\u045B\u0430\u0458 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u0443 \u0444\u043E\u043D\u0442\u0430",
        "Decrease Font Size": "\u0421\u043C\u0430\u045A\u0438 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u0443 \u0444\u043E\u043D\u0442\u0430",
        "Letter Spacing": "\u0420\u0430\u0437\u043C\u0430\u043A \u0438\u0437\u043C\u0435\u0452\u0443 \u0441\u043B\u043E\u0432\u0430",
        "Line Height": "\u0412\u0438\u0441\u0438\u043D\u0430 \u043B\u0438\u043D\u0438\u0458\u0435",
        "Font Weight": "\u0414\u0435\u0431\u0459\u0438\u043D\u0430 \u0444\u043E\u043D\u0442\u0430",
        "Dyslexia Font": "\u0424\u043E\u043D\u0442 \u0437\u0430 \u0434\u0438\u0441\u043B\u0435\u043A\u0441\u0438\u0458\u0443",
        Language: "\u0408\u0435\u0437\u0438\u043A",
        "Accessibility widget": "\u041E\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u0438 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0447\u043D\u043E\u0441\u0442\u0438",
        "Accessibility Profiles": "\u041F\u0440\u043E\u0444\u0438\u043B\u0438 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0447\u043D\u043E\u0441\u0442\u0438",
        "Cognitive Disability": "\u041A\u043E\u0433\u043D\u0438\u0442\u0438\u0432\u043D\u0430 \u0438\u043D\u0432\u0430\u043B\u0438\u0434\u043D\u043E\u0441\u0442",
        "Seizure Safe": "\u0411\u0435\u0437\u0431\u0435\u0434\u043D\u043E \u0437\u0430 \u043D\u0430\u043F\u0430\u0434\u0435",
        "Accessibility statement": "\u0418\u0437\u0458\u0430\u0432\u0430 \u043E \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0447\u043D\u043E\u0441\u0442\u0438",
        ADHD: "ADHD",
        "Low Vision": "\u0421\u043B\u0430\u0431 \u0432\u0438\u0434",
        "Pause Animations": "\u0417\u0430\u0443\u0441\u0442\u0430\u0432\u0438 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0458\u0435",
        "Animation paused": "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u0458\u0430 \u0458\u0435 \u043F\u0430\u0443\u0437\u0438\u0440\u0430\u043D\u0430",
        "Reset all settings": "\u0420\u0435\u0441\u0435\u0442\u0443\u0458 \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430",
        "Shortcut:": "\u041F\u0440\u0435\u0447\u0438\u0446\u0430:",
        "Epilepsy Safe Mode": "\u0420\u0435\u0436\u0438\u043C \u0431\u0435\u0437\u0431\u0435\u0434\u0430\u043D \u0437\u0430 \u0435\u043F\u0438\u043B\u0435\u043F\u0441\u0438\u0458\u0443",
        "Mute sounds": "\u0418\u0441\u043A\u0459\u0443\u0447\u0438 \u0437\u0432\u0443\u043A\u043E\u0432\u0435",
        "Page read": "\u0427\u0438\u0442\u0430\u045A\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",
        "Page read controls": "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0435 \u0447\u0438\u0442\u0430\u045A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",
        Pause: "\u041F\u0430\u0443\u0437\u0438\u0440\u0430\u0458",
        Resume: "\u041D\u0430\u0441\u0442\u0430\u0432\u0438",
        Stop: "\u0417\u0430\u0443\u0441\u0442\u0430\u0432\u0438",
        Settings: "\u041F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430",
        Speed: "\u0411\u0440\u0437\u0438\u043D\u0430",
        Voice: "\u0413\u043B\u0430\u0441",
        "Close accessibility menu": "\u0417\u0430\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u0438 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0447\u043D\u043E\u0441\u0442\u0438",
        "Back to accessibility menu": "\u041D\u0430\u0437\u0430\u0434 \u043D\u0430 \u043C\u0435\u043D\u0438 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0447\u043D\u043E\u0441\u0442\u0438",
        "Search languages": "\u041F\u0440\u0435\u0442\u0440\u0430\u0436\u0438 \u0458\u0435\u0437\u0438\u043A\u0435",
        "Selected language": "\u0418\u0437\u0430\u0431\u0440\u0430\u043D\u0438 \u0458\u0435\u0437\u0438\u043A",
        "View accessibility statement (opens in new window)": "\u041F\u0440\u0438\u043A\u0430\u0436\u0438 \u0438\u0437\u0458\u0430\u0432\u0443 \u043E \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0447\u043D\u043E\u0441\u0442\u0438 (\u043E\u0442\u0432\u0430\u0440\u0430 \u0441\u0435 \u0443 \u043D\u043E\u0432\u043E\u043C \u043F\u0440\u043E\u0437\u043E\u0440\u0443)",
        "Visit CookieYes website (opens in new window)": "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435 \u0432\u0435\u0431-\u0441\u0430\u0458\u0442 CookieYes (\u043E\u0442\u0432\u0430\u0440\u0430 \u0441\u0435 \u0443 \u043D\u043E\u0432\u043E\u043C \u043F\u0440\u043E\u0437\u043E\u0440\u0443)",
        "Reset all accessibility settings to default": "\u0412\u0440\u0430\u0442\u0438 \u0441\u0432\u0430 \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0447\u043D\u043E\u0441\u0442\u0438 \u043D\u0430 \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u043D\u0430"
      };
    }
  });

  // src/locales/sr.json
  var require_sr = __commonJS({
    "src/locales/sr.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Meni pristupa\u010Dnosti",
        Close: "Zatvori",
        "Text and Reading": "Tekst i \u010Ditanje",
        "Navigation and Interaction": "Navigacija i interakcija",
        "Text Align": "Poravnanje teksta",
        "Align Left": "Poravnaj levo",
        "Align Center": "Poravnaj po sredini",
        "Align Right": "Poravnaj desno",
        "Adjust Font Size": "Podesi veli\u010Dinu fonta",
        "Highlight Title": "Istakni naslov",
        "Highlight Links": "Istakni linkove",
        "Readable Font": "\u010Citljiv font",
        "Color and Contrast": "Boja i kontrast",
        "Dark Contrast": "Tamni kontrast",
        "Light Contrast": "Svetli kontrast",
        "High Contrast": "Visoki kontrast",
        "High Saturation": "Visoka zasi\u0107enost",
        "Low Saturation": "Niska zasi\u0107enost",
        Monochrome: "Monohromatski",
        Tools: "Alati",
        "Reading Guide": "Vodi\u010D za \u010Ditanje",
        "Big Cursor": "Veliki kursor",
        "Increase Font Size": "Pove\u0107aj veli\u010Dinu fonta",
        "Decrease Font Size": "Smanji veli\u010Dinu fonta",
        "Letter Spacing": "Razmak izme\u0111u slova",
        "Line Height": "Visina linije",
        "Font Weight": "Debljina fonta",
        "Dyslexia Font": "Font za disleksiju",
        Language: "Jezik",
        "Accessibility widget": "Otvori meni pristupa\u010Dnosti",
        "Accessibility Profiles": "Profili pristupa\u010Dnosti",
        "Cognitive Disability": "Kognitivna invalidnost",
        "Seizure Safe": "Bezbedno za napade",
        "Accessibility statement": "Izjava o pristupa\u010Dnosti",
        ADHD: "ADHD",
        "Low Vision": "Slab vid",
        "Pause Animations": "Zaustavi animacije",
        "Animation paused": "Animacija je pauzirana",
        "Reset all settings": "Resetuj pode\u0161avanja",
        "Shortcut:": "Pre\u010Dica:",
        "Epilepsy Safe Mode": "Re\u017Eim bezbedan za epilepsiju",
        "Mute sounds": "Isklju\u010Di zvukove",
        "Page read": "\u010Citanje stranice",
        "Page read controls": "Kontrole \u010Ditanja stranice",
        Pause: "Pauziraj",
        Resume: "Nastavi",
        Stop: "Zaustavi",
        Settings: "Pode\u0161avanja",
        Speed: "Brzina",
        Voice: "Glas",
        "Close accessibility menu": "Zatvori meni pristupa\u010Dnosti",
        "Back to accessibility menu": "Nazad na meni pristupa\u010Dnosti",
        "Search languages": "Pretra\u017Ei jezike",
        "Selected language": "Izabrani jezik",
        "View accessibility statement (opens in new window)": "Prika\u017Ei izjavu o pristupa\u010Dnosti (otvara se u novom prozoru)",
        "Visit CookieYes website (opens in new window)": "Posetite veb-sajt CookieYes (otvara se u novom prozoru)",
        "Reset all accessibility settings to default": "Vrati sva pode\u0161avanja pristupa\u010Dnosti na podrazumevana"
      };
    }
  });

  // src/locales/sv.json
  var require_sv = __commonJS({
    "src/locales/sv.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Tillg\xE4nglighetsmeny",
        Close: "St\xE4ng",
        "Text and Reading": "Text och l\xE4sning",
        "Navigation and Interaction": "Navigering och interaktion",
        "Text Align": "Textjustering",
        "Align Left": "V\xE4nsterjustera",
        "Align Center": "Centrera",
        "Align Right": "H\xF6gerjustera",
        "Adjust Font Size": "Justera textstorlek",
        "Highlight Title": "Framh\xE4v titel",
        "Highlight Links": "Framh\xE4v l\xE4nkar",
        "Readable Font": "L\xE4sbart teckensnitt",
        "Color and Contrast": "F\xE4rg och kontrast",
        "Dark Contrast": "M\xF6rk kontrast",
        "Light Contrast": "Ljus kontrast",
        "High Contrast": "H\xF6g kontrast",
        "High Saturation": "H\xF6g m\xE4ttnad",
        "Low Saturation": "L\xE5g m\xE4ttnad",
        Monochrome: "Monokrom",
        Tools: "Verktyg",
        "Reading Guide": "L\xE4slinjal",
        "Big Cursor": "Stor muspekare",
        "Increase Font Size": "\xD6ka textstorlek",
        "Decrease Font Size": "Minska textstorlek",
        "Letter Spacing": "Teckenavst\xE5nd",
        "Line Height": "Radh\xF6jd",
        "Font Weight": "Teckentjocklek",
        "Dyslexia Font": "Teckensnitt f\xF6r dyslexi",
        Language: "Spr\xE5k",
        "Accessibility widget": "\xD6ppna tillg\xE4nglighetsmeny",
        "Accessibility Profiles": "Tillg\xE4nglighetsprofiler",
        "Cognitive Disability": "Kognitiv funktionsneds\xE4ttning",
        "Seizure Safe": "Anfallss\xE4ker",
        "Accessibility statement": "Tillg\xE4nglighetsredog\xF6relse",
        ADHD: "ADHD",
        "Low Vision": "Nedsatt syn",
        "Pause Animations": "Pausa animationer",
        "Animation paused": "Animering pausad",
        "Reset all settings": "Nollst\xE4ll inst\xE4llningar",
        "Shortcut:": "Genv\xE4g:",
        "Epilepsy Safe Mode": "Epilepsis\xE4kert l\xE4ge",
        "Mute sounds": "St\xE4ng av ljud",
        "Page read": "L\xE4s upp sidan",
        "Page read controls": "Uppl\xE4sningskontroller",
        Pause: "Pausa",
        Resume: "\xC5teruppta",
        Stop: "Stoppa",
        Settings: "Inst\xE4llningar",
        Speed: "Hastighet",
        Voice: "R\xF6st",
        "Close accessibility menu": "St\xE4ng tillg\xE4nglighetsmeny",
        "Back to accessibility menu": "Tillbaka till tillg\xE4nglighetsmeny",
        "Search languages": "S\xF6k spr\xE5k",
        "Selected language": "Valt spr\xE5k",
        "View accessibility statement (opens in new window)": "Visa tillg\xE4nglighetsredog\xF6relse (\xF6ppnas i nytt f\xF6nster)",
        "Visit CookieYes website (opens in new window)": "Bes\xF6k CookieYes webbplats (\xF6ppnas i nytt f\xF6nster)",
        "Reset all accessibility settings to default": "\xC5terst\xE4ll alla tillg\xE4nglighetsinst\xE4llningar"
      };
    }
  });

  // src/locales/sw.json
  var require_sw = __commonJS({
    "src/locales/sw.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menyu ya Ufikivu",
        Close: "Funga",
        "Text and Reading": "Maandishi na usomaji",
        "Navigation and Interaction": "Usogezaji na mwingiliano",
        "Text Align": "Mpangilio wa Maandishi",
        "Align Left": "Panga Kushoto",
        "Align Center": "Pangilia Katikati",
        "Align Right": "Pangilia Kulia",
        "Adjust Font Size": "Rekebisha Ukubwa wa Herufi",
        "Highlight Title": "Angazia Kichwa",
        "Highlight Links": "Angazia Viungo",
        "Readable Font": "Herufi Zinazosomeka",
        "Color and Contrast": "Rangi na utofautishaji",
        "Dark Contrast": "Tofauti ya Giza",
        "Light Contrast": "Tofauti ya Mwangaza",
        "High Contrast": "Tofauti ya Juu",
        "High Saturation": "Ujazaji wa Juu",
        "Low Saturation": "Ujazaji wa Chini",
        Monochrome: "Rangi Moja",
        Tools: "Zana",
        "Reading Guide": "Mwongozo wa Kusoma",
        "Big Cursor": "Mshale Mkubwa",
        "Increase Font Size": "Ongeza Ukubwa wa Herufi",
        "Decrease Font Size": "Punguza Ukubwa wa Herufi",
        "Letter Spacing": "Nafasi ya Herufi",
        "Line Height": "Urefu wa Mstari",
        "Font Weight": "Uzito wa Herufi",
        "Dyslexia Font": "Herufi za Dyslexia",
        Language: "Lugha",
        "Accessibility widget": "Fungua Menyu ya Ufikivu",
        "Accessibility Profiles": "Wasifu wa Ufikivu",
        "Cognitive Disability": "Ulemavu wa Akili",
        "Seizure Safe": "Salama dhidi ya Mshtuko",
        "Accessibility statement": "Taarifa ya Ufikivu",
        ADHD: "ADHD",
        "Low Vision": "Uoni Hafifu",
        "Pause Animations": "Simamisha Animations",
        "Animation paused": "Mwendo umesimamishwa",
        "Reset all settings": "Weka upya mipangilio",
        "Shortcut:": "Njia ya mkato:",
        "Epilepsy Safe Mode": "Hali Salama kwa Kifafa",
        "Mute sounds": "Zima sauti",
        "Page read": "Soma ukurasa",
        "Page read controls": "Vidhibiti vya kusoma ukurasa",
        Pause: "Sitisha",
        Resume: "Endelea",
        Stop: "Simamisha",
        Settings: "Mipangilio",
        Speed: "Kasi",
        Voice: "Sauti",
        "Close accessibility menu": "Funga menyu ya ufikivu",
        "Back to accessibility menu": "Rudi kwenye menyu ya ufikivu",
        "Search languages": "Tafuta lugha",
        "Selected language": "Lugha iliyochaguliwa",
        "View accessibility statement (opens in new window)": "Tazama taarifa ya ufikivu (hufunguka katika dirisha jipya)",
        "Visit CookieYes website (opens in new window)": "Tembelea tovuti ya CookieYes (hufunguka katika dirisha jipya)",
        "Reset all accessibility settings to default": "Weka upya mipangilio yote ya ufikivu kuwa chaguo-msingi"
      };
    }
  });

  // src/locales/ta.json
  var require_ta = __commonJS({
    "src/locales/ta.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD \u0BAE\u0BC6\u0BA9\u0BC1",
        Close: "\u0BAE\u0BC2\u0B9F\u0BC1",
        "Text and Reading": "\u0B89\u0BB0\u0BC8 \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BB5\u0BBE\u0B9A\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1",
        "Navigation and Interaction": "\u0BB5\u0BB4\u0BBF\u0B9A\u0BC6\u0BB2\u0BC1\u0BA4\u0BCD\u0BA4\u0BB2\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B8A\u0B9F\u0BBE\u0B9F\u0BB2\u0BCD",
        "Text Align": "\u0B89\u0BB0\u0BC8 \u0B9A\u0BC0\u0BB0\u0BAE\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1",
        "Align Left": "\u0B87\u0B9F\u0BA4\u0BC1 \u0B9A\u0BC0\u0BB0\u0BAE\u0BC8",
        "Align Center": "\u0BA8\u0B9F\u0BC1\u0BB5\u0BBF\u0BB2\u0BCD \u0B9A\u0BC0\u0BB0\u0BAE\u0BC8",
        "Align Right": "\u0BB5\u0BB2\u0BA4\u0BC1\u0BAA\u0BC1\u0BB1\u0BAE\u0BCD \u0B9A\u0BC0\u0BB0\u0BAE\u0BC8",
        "Adjust Font Size": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0B85\u0BB3\u0BB5\u0BC8 \u0B9A\u0BB0\u0BBF\u0B9A\u0BC6\u0BAF\u0BCD",
        "Highlight Title": "\u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8 \u0BAE\u0BC1\u0BA9\u0BCD\u0BA9\u0BBF\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
        "Highlight Links": "\u0B87\u0BA3\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BC8 \u0BAE\u0BC1\u0BA9\u0BCD\u0BA9\u0BBF\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
        "Readable Font": "\u0BAA\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0B95\u0BCD\u0B95\u0BC2\u0B9F\u0BBF\u0BAF \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
        "Color and Contrast": "\u0BA8\u0BBF\u0BB1\u0BAE\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BAE\u0BBE\u0BB1\u0BC1\u0BAA\u0BBE\u0B9F\u0BC1",
        "Dark Contrast": "\u0B95\u0BB0\u0BC1\u0BAE\u0BC8 \u0BB5\u0BC7\u0BB1\u0BC1\u0BAA\u0BBE\u0B9F\u0BC1",
        "Light Contrast": "\u0BB5\u0BC6\u0BB3\u0BBF\u0B9A\u0BCD\u0B9A \u0BB5\u0BC7\u0BB1\u0BC1\u0BAA\u0BBE\u0B9F\u0BC1",
        "High Contrast": "\u0B89\u0BAF\u0BB0\u0BCD \u0BB5\u0BC7\u0BB1\u0BC1\u0BAA\u0BBE\u0B9F\u0BC1",
        "High Saturation": "\u0B89\u0BAF\u0BB0\u0BCD \u0B9A\u0BC6\u0BB1\u0BBF\u0BB5\u0BC1",
        "Low Saturation": "\u0B95\u0BC1\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4 \u0B9A\u0BC6\u0BB1\u0BBF\u0BB5\u0BC1",
        Monochrome: "\u0B92\u0BB1\u0BCD\u0BB1\u0BC8 \u0BA8\u0BBF\u0BB1\u0BAE\u0BCD",
        Tools: "\u0B95\u0BB0\u0BC1\u0BB5\u0BBF\u0B95\u0BB3\u0BCD",
        "Reading Guide": "\u0BAA\u0B9F\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0BB5\u0BB4\u0BBF\u0B95\u0BBE\u0B9F\u0BCD\u0B9F\u0BBF",
        "Big Cursor": "\u0BAA\u0BC6\u0BB0\u0BBF\u0BAF \u0B95\u0BB0\u0BCD\u0B9A\u0BB0\u0BCD",
        "Increase Font Size": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0B85\u0BB3\u0BB5\u0BC8 \u0B85\u0BA4\u0BBF\u0B95\u0BB0\u0BBF",
        "Decrease Font Size": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0B85\u0BB3\u0BB5\u0BC8 \u0B95\u0BC1\u0BB1\u0BC8",
        "Letter Spacing": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0B87\u0B9F\u0BC8\u0BB5\u0BC6\u0BB3\u0BBF",
        "Line Height": "\u0BB5\u0BB0\u0BBF \u0B89\u0BAF\u0BB0\u0BAE\u0BCD",
        "Font Weight": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0BA4\u0B9F\u0BBF\u0BAE\u0BA9\u0BCD",
        "Dyslexia Font": "\u0B9F\u0BBF\u0BB8\u0BCD\u0BB2\u0BC6\u0B95\u0BCD\u0BB8\u0BBF\u0BAF\u0BBE \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
        Language: "\u0BAE\u0BCA\u0BB4\u0BBF",
        "Accessibility widget": "\u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD \u0BAE\u0BC6\u0BA9\u0BC1\u0BB5\u0BC8 \u0BA4\u0BBF\u0BB1",
        "Accessibility Profiles": "\u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD \u0B9A\u0BC1\u0BAF\u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
        "Cognitive Disability": "\u0B85\u0BB1\u0BBF\u0BB5\u0BBE\u0BB1\u0BCD\u0BB1\u0BB2\u0BCD \u0B95\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BC1",
        "Seizure Safe": "\u0BB5\u0BB2\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0BAA\u0BBE\u0BA4\u0BC1\u0B95\u0BBE\u0BAA\u0BCD\u0BAA\u0BC1",
        "Accessibility statement": "\u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD \u0B85\u0BB1\u0BBF\u0B95\u0BCD\u0B95\u0BC8",
        ADHD: "ADHD",
        "Low Vision": "\u0B95\u0BC1\u0BB1\u0BC8 \u0BAA\u0BBE\u0BB0\u0BCD\u0BB5\u0BC8",
        "Pause Animations": "\u0B85\u0BA9\u0BBF\u0BAE\u0BC7\u0BB7\u0BA9\u0BCD\u0B95\u0BB3\u0BC8 \u0BA8\u0BBF\u0BB1\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
        "Animation paused": "\u0B85\u0BA9\u0BBF\u0BAE\u0BC7\u0BB7\u0BA9\u0BCD \u0B87\u0B9F\u0BC8\u0BA8\u0BBF\u0BB1\u0BC1\u0BA4\u0BCD\u0BA4\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
        "Reset all settings": "\u0B85\u0BAE\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BC8 \u0BAE\u0BC0\u0B9F\u0BCD\u0B9F\u0BAE\u0BC8",
        "Shortcut:": "\u0B95\u0BC1\u0BB1\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BB5\u0BB4\u0BBF:",
        "Epilepsy Safe Mode": "\u0BB5\u0BB2\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0BAA\u0BBE\u0BA4\u0BC1\u0B95\u0BBE\u0BAA\u0BCD\u0BAA\u0BC1 \u0BAA\u0BAF\u0BA9\u0BCD\u0BAE\u0BC1\u0BB1\u0BC8",
        "Mute sounds": "\u0B92\u0BB2\u0BBF\u0B95\u0BB3\u0BC8 \u0BAE\u0BC1\u0B9F\u0B95\u0BCD\u0B95\u0BC1",
        "Page read": "\u0BAA\u0B95\u0BCD\u0B95\u0BA4\u0BCD\u0BA4\u0BC8\u0BAA\u0BCD \u0BAA\u0B9F\u0BBF",
        "Page read controls": "\u0BAA\u0B95\u0BCD\u0B95\u0BAE\u0BCD \u0BAA\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0B95\u0B9F\u0BCD\u0B9F\u0BC1\u0BAA\u0BCD\u0BAA\u0BBE\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
        Pause: "\u0B87\u0B9F\u0BC8\u0BA8\u0BBF\u0BB1\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
        Resume: "\u0BA4\u0BCA\u0B9F\u0BB0\u0BCD",
        Stop: "\u0BA8\u0BBF\u0BB1\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
        Settings: "\u0B85\u0BAE\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
        Speed: "\u0BB5\u0BC7\u0B95\u0BAE\u0BCD",
        Voice: "\u0B95\u0BC1\u0BB0\u0BB2\u0BCD",
        "Close accessibility menu": "\u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD \u0BAE\u0BC6\u0BA9\u0BC1\u0BB5\u0BC8 \u0BAE\u0BC2\u0B9F\u0BC1",
        "Back to accessibility menu": "\u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD \u0BAE\u0BC6\u0BA9\u0BC1\u0BB5\u0BBF\u0BB1\u0BCD\u0B95\u0BC1\u0BA4\u0BCD \u0BA4\u0BBF\u0BB0\u0BC1\u0BAE\u0BCD\u0BAA\u0BC1",
        "Search languages": "\u0BAE\u0BCA\u0BB4\u0BBF\u0B95\u0BB3\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1",
        "Selected language": "\u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BAE\u0BCA\u0BB4\u0BBF",
        "View accessibility statement (opens in new window)": "\u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD \u0B85\u0BB1\u0BBF\u0B95\u0BCD\u0B95\u0BC8\u0BAF\u0BC8\u0BAA\u0BCD \u0BAA\u0BBE\u0BB0\u0BCD (\u0BAA\u0BC1\u0BA4\u0BBF\u0BAF \u0B9A\u0BBE\u0BB3\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0BA4\u0BBF\u0BB1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD)",
        "Visit CookieYes website (opens in new window)": "CookieYes \u0B87\u0BA3\u0BC8\u0BAF\u0BA4\u0BB3\u0BA4\u0BCD\u0BA4\u0BC8\u0BAA\u0BCD \u0BAA\u0BBE\u0BB0\u0BCD\u0BB5\u0BC8\u0BAF\u0BBF\u0B9F\u0BC1 (\u0BAA\u0BC1\u0BA4\u0BBF\u0BAF \u0B9A\u0BBE\u0BB3\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0BA4\u0BBF\u0BB1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD)",
        "Reset all accessibility settings to default": "\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1 \u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD \u0B85\u0BAE\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BC8\u0BAF\u0BC1\u0BAE\u0BCD \u0B87\u0BAF\u0BB2\u0BCD\u0BAA\u0BC1\u0BA8\u0BBF\u0BB2\u0BC8\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC0\u0B9F\u0BCD\u0B9F\u0BAE\u0BC8"
      };
    }
  });

  // src/locales/te.json
  var require_te = __commonJS({
    "src/locales/te.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0C05\u0C02\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41 \u0C2E\u0C46\u0C28\u0C42",
        Close: "\u0C2E\u0C42\u0C38\u0C3F\u0C35\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        "Text and Reading": "\u0C35\u0C1A\u0C28\u0C02 \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C1A\u0C26\u0C35\u0C21\u0C02",
        "Navigation and Interaction": "\u0C28\u0C3E\u0C35\u0C3F\u0C17\u0C47\u0C37\u0C28\u0C4D \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C2A\u0C30\u0C38\u0C4D\u0C2A\u0C30 \u0C1A\u0C30\u0C4D\u0C2F",
        "Text Align": "\u0C1F\u0C46\u0C15\u0C4D\u0C38\u0C4D\u0C1F\u0C4D \u0C05\u0C2E\u0C30\u0C3F\u0C15",
        "Align Left": "\u0C0E\u0C21\u0C2E\u0C35\u0C48\u0C2A\u0C41 \u0C38\u0C2E\u0C32\u0C47\u0C16\u0C28\u0C02 \u0C1A\u0C47\u0C2F\u0C3F",
        "Align Center": "\u0C2E\u0C27\u0C4D\u0C2F\u0C32\u0C4B \u0C38\u0C2E\u0C32\u0C47\u0C16\u0C28\u0C02 \u0C1A\u0C47\u0C2F\u0C3F",
        "Align Right": "\u0C15\u0C41\u0C21\u0C3F\u0C35\u0C48\u0C2A\u0C41 \u0C38\u0C2E\u0C32\u0C47\u0C16\u0C28\u0C02 \u0C1A\u0C47\u0C2F\u0C3F",
        "Adjust Font Size": "\u0C2B\u0C3E\u0C02\u0C1F\u0C4D \u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C38\u0C30\u0C4D\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        "Highlight Title": "\u0C36\u0C40\u0C30\u0C4D\u0C37\u0C3F\u0C15\u0C28\u0C41 \u0C39\u0C48\u0C32\u0C48\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        "Highlight Links": "\u0C32\u0C3F\u0C02\u0C15\u0C4D\u200C\u0C32\u0C28\u0C41 \u0C39\u0C48\u0C32\u0C48\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        "Readable Font": "\u0C1A\u0C26\u0C35\u0C17\u0C32\u0C3F\u0C17\u0C47 \u0C2B\u0C3E\u0C02\u0C1F\u0C4D",
        "Color and Contrast": "\u0C30\u0C02\u0C17\u0C41 \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C15\u0C3E\u0C02\u0C1F\u0C4D\u0C30\u0C3E\u0C38\u0C4D\u0C1F\u0C4D",
        "Dark Contrast": "\u0C1A\u0C40\u0C15\u0C1F\u0C3F \u0C35\u0C4D\u0C2F\u0C24\u0C4D\u0C2F\u0C3E\u0C38\u0C02",
        "Light Contrast": "\u0C24\u0C47\u0C32\u0C3F\u0C15 \u0C35\u0C4D\u0C2F\u0C24\u0C4D\u0C2F\u0C3E\u0C38\u0C02",
        "High Contrast": "\u0C0E\u0C15\u0C4D\u0C15\u0C41\u0C35 \u0C35\u0C4D\u0C2F\u0C24\u0C4D\u0C2F\u0C3E\u0C38\u0C02",
        "High Saturation": "\u0C0E\u0C15\u0C4D\u0C15\u0C41\u0C35 \u0C38\u0C02\u0C24\u0C43\u0C2A\u0C4D\u0C24\u0C3F",
        "Low Saturation": "\u0C24\u0C15\u0C4D\u0C15\u0C41\u0C35 \u0C38\u0C02\u0C24\u0C43\u0C2A\u0C4D\u0C24\u0C3F",
        Monochrome: "\u0C0F\u0C15\u0C30\u0C02\u0C17\u0C41",
        Tools: "\u0C38\u0C3E\u0C27\u0C28\u0C3E\u0C32\u0C41",
        "Reading Guide": "\u0C2A\u0C20\u0C28 \u0C2E\u0C3E\u0C30\u0C4D\u0C17\u0C26\u0C30\u0C4D\u0C36\u0C3F",
        "Big Cursor": "\u0C2A\u0C46\u0C26\u0C4D\u0C26 \u0C15\u0C30\u0C4D\u0C38\u0C30\u0C4D",
        "Increase Font Size": "\u0C2B\u0C3E\u0C02\u0C1F\u0C4D \u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C2A\u0C46\u0C02\u0C1A\u0C02\u0C21\u0C3F",
        "Decrease Font Size": "\u0C2B\u0C3E\u0C02\u0C1F\u0C4D \u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C24\u0C17\u0C4D\u0C17\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
        "Letter Spacing": "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C3E\u0C32 \u0C2E\u0C27\u0C4D\u0C2F \u0C16\u0C3E\u0C33\u0C40",
        "Line Height": "\u0C2A\u0C02\u0C15\u0C4D\u0C24\u0C3F \u0C0E\u0C24\u0C4D\u0C24\u0C41",
        "Font Weight": "\u0C2B\u0C3E\u0C02\u0C1F\u0C4D \u0C2C\u0C30\u0C41\u0C35\u0C41",
        "Dyslexia Font": "\u0C21\u0C3F\u0C38\u0C4D\u0C32\u0C46\u0C15\u0C4D\u0C38\u0C3F\u0C2F\u0C3E \u0C2B\u0C3E\u0C02\u0C1F\u0C4D",
        Language: "\u0C2D\u0C3E\u0C37",
        "Accessibility widget": "\u0C05\u0C02\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41 \u0C2E\u0C46\u0C28\u0C42\u0C28\u0C3F \u0C24\u0C46\u0C30\u0C35\u0C02\u0C21\u0C3F",
        "Accessibility Profiles": "\u0C05\u0C02\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41 \u0C2A\u0C4D\u0C30\u0C4A\u0C2B\u0C48\u0C32\u0C4D\u200C\u0C32\u0C41",
        "Cognitive Disability": "\u0C1C\u0C4D\u0C1E\u0C3E\u0C28 \u0C38\u0C02\u0C2C\u0C02\u0C27\u0C3F\u0C24 \u0C35\u0C48\u0C15\u0C32\u0C4D\u0C2F\u0C02",
        "Seizure Safe": "\u0C2A\u0C1F\u0C4D\u0C1F\u0C41 \u0C38\u0C41\u0C30\u0C15\u0C4D\u0C37\u0C3F\u0C24\u0C02",
        "Accessibility statement": "\u0C05\u0C02\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41 \u0C2A\u0C4D\u0C30\u0C15\u0C1F\u0C28",
        ADHD: "ADHD",
        "Low Vision": "\u0C24\u0C15\u0C4D\u0C15\u0C41\u0C35 \u0C26\u0C43\u0C37\u0C4D\u0C1F\u0C3F",
        "Pause Animations": "\u0C2F\u0C3E\u0C28\u0C3F\u0C2E\u0C47\u0C37\u0C28\u0C4D\u200C\u0C32\u0C28\u0C41 \u0C06\u0C2A\u0C02\u0C21\u0C3F",
        "Animation paused": "\u0C2F\u0C3E\u0C28\u0C3F\u0C2E\u0C47\u0C37\u0C28\u0C4D \u0C2A\u0C3E\u0C1C\u0C4D \u0C1A\u0C47\u0C2F\u0C2C\u0C21\u0C3F\u0C02\u0C26\u0C3F",
        "Reset all settings": "\u0C38\u0C46\u0C1F\u0C4D\u0C1F\u0C3F\u0C02\u0C17\u0C4D\u200C\u0C32\u0C28\u0C41 \u0C30\u0C40\u0C38\u0C46\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        "Shortcut:": "\u0C37\u0C3E\u0C30\u0C4D\u0C1F\u0C4D\u200C\u0C15\u0C1F\u0C4D:",
        "Epilepsy Safe Mode": "\u0C2E\u0C42\u0C30\u0C4D\u0C1B \u0C38\u0C41\u0C30\u0C15\u0C4D\u0C37\u0C3F\u0C24 \u0C2E\u0C4B\u0C21\u0C4D",
        "Mute sounds": "\u0C36\u0C2C\u0C4D\u0C26\u0C3E\u0C32\u0C28\u0C41 \u0C2E\u0C4D\u0C2F\u0C42\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C3F",
        "Page read": "\u0C2A\u0C47\u0C1C\u0C40\u0C28\u0C3F \u0C1A\u0C26\u0C35\u0C02\u0C21\u0C3F",
        "Page read controls": "\u0C2A\u0C47\u0C1C\u0C40 \u0C1A\u0C26\u0C3F\u0C35\u0C47 \u0C28\u0C3F\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C23\u0C32\u0C41",
        Pause: "\u0C28\u0C3F\u0C32\u0C3F\u0C2A\u0C3F\u0C35\u0C47\u0C2F\u0C3F",
        Resume: "\u0C24\u0C3F\u0C30\u0C3F\u0C17\u0C3F \u0C2A\u0C4D\u0C30\u0C3E\u0C30\u0C02\u0C2D\u0C3F\u0C02\u0C1A\u0C41",
        Stop: "\u0C06\u0C2A\u0C41",
        Settings: "\u0C38\u0C46\u0C1F\u0C4D\u0C1F\u0C3F\u0C02\u0C17\u0C4D\u200C\u0C32\u0C41",
        Speed: "\u0C35\u0C47\u0C17\u0C02",
        Voice: "\u0C35\u0C3E\u0C2F\u0C3F\u0C38\u0C4D",
        "Close accessibility menu": "\u0C2F\u0C3E\u0C15\u0C4D\u0C38\u0C46\u0C38\u0C3F\u0C2C\u0C3F\u0C32\u0C3F\u0C1F\u0C40 \u0C2E\u0C46\u0C28\u0C42\u0C28\u0C41 \u0C2E\u0C42\u0C38\u0C3F\u0C35\u0C47\u0C2F\u0C3F",
        "Back to accessibility menu": "\u0C2F\u0C3E\u0C15\u0C4D\u0C38\u0C46\u0C38\u0C3F\u0C2C\u0C3F\u0C32\u0C3F\u0C1F\u0C40 \u0C2E\u0C46\u0C28\u0C42\u0C15\u0C41 \u0C24\u0C3F\u0C30\u0C3F\u0C17\u0C3F \u0C35\u0C46\u0C33\u0C4D\u0C32\u0C41",
        "Search languages": "\u0C2D\u0C3E\u0C37\u0C32\u0C28\u0C41 \u0C36\u0C4B\u0C27\u0C3F\u0C02\u0C1A\u0C41",
        "Selected language": "\u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C41\u0C28\u0C4D\u0C28 \u0C2D\u0C3E\u0C37",
        "View accessibility statement (opens in new window)": "\u0C2F\u0C3E\u0C15\u0C4D\u0C38\u0C46\u0C38\u0C3F\u0C2C\u0C3F\u0C32\u0C3F\u0C1F\u0C40 \u0C2A\u0C4D\u0C30\u0C15\u0C1F\u0C28\u0C28\u0C41 \u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F (\u0C15\u0C4A\u0C24\u0C4D\u0C24 \u0C35\u0C3F\u0C02\u0C21\u0C4B\u0C32\u0C4B \u0C24\u0C46\u0C30\u0C41\u0C1A\u0C41\u0C15\u0C41\u0C02\u0C1F\u0C41\u0C02\u0C26\u0C3F)",
        "Visit CookieYes website (opens in new window)": "CookieYes \u0C35\u0C46\u0C2C\u0C4D\u200C\u0C38\u0C48\u0C1F\u0C4D\u200C\u0C28\u0C41 \u0C38\u0C02\u0C26\u0C30\u0C4D\u0C36\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F (\u0C15\u0C4A\u0C24\u0C4D\u0C24 \u0C35\u0C3F\u0C02\u0C21\u0C4B\u0C32\u0C4B \u0C24\u0C46\u0C30\u0C41\u0C1A\u0C41\u0C15\u0C41\u0C02\u0C1F\u0C41\u0C02\u0C26\u0C3F)",
        "Reset all accessibility settings to default": "\u0C05\u0C28\u0C4D\u0C28\u0C3F \u0C2F\u0C3E\u0C15\u0C4D\u0C38\u0C46\u0C38\u0C3F\u0C2C\u0C3F\u0C32\u0C3F\u0C1F\u0C40 \u0C38\u0C46\u0C1F\u0C4D\u0C1F\u0C3F\u0C02\u0C17\u0C4D\u200C\u0C32\u0C28\u0C41 \u0C21\u0C3F\u0C2B\u0C3E\u0C32\u0C4D\u0C1F\u0C4D\u200C\u0C15\u0C41 \u0C30\u0C40\u0C38\u0C46\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C3F"
      };
    }
  });

  // src/locales/th.json
  var require_th = __commonJS({
    "src/locales/th.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0E40\u0E21\u0E19\u0E39\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07",
        Close: "\u0E1B\u0E34\u0E14",
        "Text and Reading": "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19",
        "Navigation and Interaction": "\u0E01\u0E32\u0E23\u0E19\u0E33\u0E17\u0E32\u0E07\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E42\u0E15\u0E49\u0E15\u0E2D\u0E1A",
        "Text Align": "\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E41\u0E19\u0E27\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21",
        "Align Left": "\u0E08\u0E31\u0E14\u0E0A\u0E34\u0E14\u0E0B\u0E49\u0E32\u0E22",
        "Align Center": "\u0E08\u0E31\u0E14\u0E01\u0E36\u0E48\u0E07\u0E01\u0E25\u0E32\u0E07",
        "Align Right": "\u0E08\u0E31\u0E14\u0E0A\u0E34\u0E14\u0E02\u0E27\u0E32",
        "Adjust Font Size": "\u0E1B\u0E23\u0E31\u0E1A\u0E02\u0E19\u0E32\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
        "Highlight Title": "\u0E40\u0E19\u0E49\u0E19\u0E2B\u0E31\u0E27\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07",
        "Highlight Links": "\u0E40\u0E19\u0E49\u0E19\u0E25\u0E34\u0E07\u0E01\u0E4C",
        "Readable Font": "\u0E41\u0E1A\u0E1A\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E17\u0E35\u0E48\u0E2D\u0E48\u0E32\u0E19\u0E07\u0E48\u0E32\u0E22",
        "Color and Contrast": "\u0E2A\u0E35\u0E41\u0E25\u0E30\u0E04\u0E2D\u0E19\u0E17\u0E23\u0E32\u0E2A\u0E15\u0E4C",
        "Dark Contrast": "\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E15\u0E48\u0E32\u0E07\u0E40\u0E02\u0E49\u0E21",
        "Light Contrast": "\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E15\u0E48\u0E32\u0E07\u0E2A\u0E27\u0E48\u0E32\u0E07",
        "High Contrast": "\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E15\u0E48\u0E32\u0E07\u0E2A\u0E39\u0E07",
        "High Saturation": "\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E34\u0E48\u0E21\u0E15\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E2A\u0E35\u0E2A\u0E39\u0E07",
        "Low Saturation": "\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E34\u0E48\u0E21\u0E15\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E2A\u0E35\u0E15\u0E48\u0E33",
        Monochrome: "\u0E42\u0E21\u0E42\u0E19\u0E42\u0E04\u0E23\u0E21",
        Tools: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D",
        "Reading Guide": "\u0E41\u0E16\u0E1A\u0E0A\u0E48\u0E27\u0E22\u0E2D\u0E48\u0E32\u0E19",
        "Big Cursor": "\u0E40\u0E04\u0E2D\u0E23\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E02\u0E19\u0E32\u0E14\u0E43\u0E2B\u0E0D\u0E48",
        "Increase Font Size": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E19\u0E32\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
        "Decrease Font Size": "\u0E25\u0E14\u0E02\u0E19\u0E32\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
        "Letter Spacing": "\u0E23\u0E30\u0E22\u0E30\u0E2B\u0E48\u0E32\u0E07\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
        "Line Height": "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E02\u0E2D\u0E07\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14",
        "Font Weight": "\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
        "Dyslexia Font": "\u0E41\u0E1A\u0E1A\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E14\u0E34\u0E2A\u0E40\u0E25\u0E47\u0E01\u0E40\u0E0B\u0E35\u0E22",
        Language: "\u0E20\u0E32\u0E29\u0E32",
        "Accessibility widget": "\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E19\u0E39\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07",
        "Accessibility Profiles": "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07",
        "Cognitive Disability": "\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E01\u0E1E\u0E23\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E23\u0E39\u0E49",
        "Seizure Safe": "\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E42\u0E23\u0E04\u0E25\u0E21\u0E0A\u0E31\u0E01",
        "Accessibility statement": "\u0E04\u0E33\u0E41\u0E16\u0E25\u0E07\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07",
        ADHD: "\u0E2A\u0E21\u0E32\u0E18\u0E34\u0E2A\u0E31\u0E49\u0E19",
        "Low Vision": "\u0E2A\u0E32\u0E22\u0E15\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E19\u0E23\u0E32\u0E07",
        "Pause Animations": "\u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27",
        "Animation paused": "\u0E2B\u0E22\u0E38\u0E14\u0E41\u0E2D\u0E19\u0E34\u0E40\u0E21\u0E0A\u0E31\u0E19\u0E0A\u0E31\u0E48\u0E27\u0E04\u0E23\u0E32\u0E27",
        "Reset all settings": "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
        "Shortcut:": "\u0E17\u0E32\u0E07\u0E25\u0E31\u0E14:",
        "Epilepsy Safe Mode": "\u0E42\u0E2B\u0E21\u0E14\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E25\u0E21\u0E0A\u0E31\u0E01",
        "Mute sounds": "\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07",
        "Page read": "\u0E2D\u0E48\u0E32\u0E19\u0E2D\u0E2D\u0E01\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A",
        "Page read controls": "\u0E15\u0E31\u0E27\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E2D\u0E2D\u0E01\u0E40\u0E2A\u0E35\u0E22\u0E07",
        Pause: "\u0E2B\u0E22\u0E38\u0E14\u0E0A\u0E31\u0E48\u0E27\u0E04\u0E23\u0E32\u0E27",
        Resume: "\u0E40\u0E25\u0E48\u0E19\u0E15\u0E48\u0E2D",
        Stop: "\u0E2B\u0E22\u0E38\u0E14",
        Settings: "\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
        Speed: "\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27",
        Voice: "\u0E40\u0E2A\u0E35\u0E22\u0E07",
        "Close accessibility menu": "\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E19\u0E39\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07",
        "Back to accessibility menu": "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E40\u0E21\u0E19\u0E39\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07",
        "Search languages": "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E20\u0E32\u0E29\u0E32",
        "Selected language": "\u0E20\u0E32\u0E29\u0E32\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01",
        "View accessibility statement (opens in new window)": "\u0E14\u0E39\u0E04\u0E33\u0E0A\u0E35\u0E49\u0E41\u0E08\u0E07\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07 (\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E15\u0E48\u0E32\u0E07\u0E43\u0E2B\u0E21\u0E48)",
        "Visit CookieYes website (opens in new window)": "\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21\u0E0A\u0E21\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C CookieYes (\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E15\u0E48\u0E32\u0E07\u0E43\u0E2B\u0E21\u0E48)",
        "Reset all accessibility settings to default": "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19"
      };
    }
  });

  // src/locales/tr.json
  var require_tr = __commonJS({
    "src/locales/tr.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Eri\u015Filebilirlik Men\xFCs\xFC",
        Close: "Kapat",
        "Text and Reading": "Metin ve okuma",
        "Navigation and Interaction": "Gezinme ve etkile\u015Fim",
        "Text Align": "Metin Hizalama",
        "Align Left": "Sola Hizala",
        "Align Center": "Ortala",
        "Align Right": "Sa\u011Fa Hizala",
        "Adjust Font Size": "Yaz\u0131 Tipi Boyutunu Ayarla",
        "Highlight Title": "Ba\u015Fl\u0131\u011F\u0131 Vurgula",
        "Highlight Links": "Ba\u011Flant\u0131lar\u0131 Vurgula",
        "Readable Font": "Okunakl\u0131 Yaz\u0131 Tipi",
        "Color and Contrast": "Renk ve kontrast",
        "Dark Contrast": "Koyu Kontrast",
        "Light Contrast": "A\xE7\u0131k Kontrast",
        "High Contrast": "Y\xFCksek Kontrast",
        "High Saturation": "Y\xFCksek Doygunluk",
        "Low Saturation": "D\xFC\u015F\xFCk Doygunluk",
        Monochrome: "Tek Renkli",
        Tools: "Ara\xE7lar",
        "Reading Guide": "Okuma Rehberi",
        "Big Cursor": "B\xFCy\xFCk \u0130mle\xE7",
        "Increase Font Size": "Yaz\u0131 Tipi Boyutunu Art\u0131r",
        "Decrease Font Size": "Yaz\u0131 Tipi Boyutunu Azalt",
        "Letter Spacing": "Harf Aral\u0131\u011F\u0131",
        "Line Height": "Sat\u0131r Y\xFCksekli\u011Fi",
        "Font Weight": "Yaz\u0131 Tipi Kal\u0131nl\u0131\u011F\u0131",
        "Dyslexia Font": "Disleksi Yaz\u0131 Tipi",
        Language: "Dil",
        "Accessibility widget": "Eri\u015Filebilirlik men\xFCs\xFCn\xFC a\xE7",
        "Accessibility Profiles": "Eri\u015Filebilirlik Profilleri",
        "Cognitive Disability": "Bili\u015Fsel Engellilik",
        "Seizure Safe": "N\xF6bet G\xFCvenli",
        "Accessibility statement": "Eri\u015Filebilirlik Beyan\u0131",
        ADHD: "DEHB",
        "Low Vision": "Az G\xF6rme",
        "Pause Animations": "Animasyonlar\u0131 Durdur",
        "Animation paused": "Animasyon duraklat\u0131ld\u0131",
        "Reset all settings": "Ayarlar\u0131 S\u0131f\u0131rla",
        "Shortcut:": "K\u0131sayol:",
        "Epilepsy Safe Mode": "Epilepsi G\xFCvenli Modu",
        "Mute sounds": "Sesleri kapat",
        "Page read": "Sayfa okuma",
        "Page read controls": "Sayfa okuma kontrolleri",
        Pause: "Duraklat",
        Resume: "Devam et",
        Stop: "Durdur",
        Settings: "Ayarlar",
        Speed: "H\u0131z",
        Voice: "Ses",
        "Close accessibility menu": "Eri\u015Filebilirlik men\xFCs\xFCn\xFC kapat",
        "Back to accessibility menu": "Eri\u015Filebilirlik men\xFCs\xFCne d\xF6n",
        "Search languages": "Dilleri ara",
        "Selected language": "Se\xE7ili dil",
        "View accessibility statement (opens in new window)": "Eri\u015Filebilirlik bildirimini g\xF6r\xFCnt\xFCle (yeni pencerede a\xE7\u0131l\u0131r)",
        "Visit CookieYes website (opens in new window)": "CookieYes web sitesini ziyaret et (yeni pencerede a\xE7\u0131l\u0131r)",
        "Reset all accessibility settings to default": "T\xFCm eri\u015Filebilirlik ayarlar\u0131n\u0131 varsay\u0131lana s\u0131f\u0131rla"
      };
    }
  });

  // src/locales/uk.json
  var require_uk = __commonJS({
    "src/locales/uk.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u041C\u0435\u043D\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0456",
        Close: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
        "Text and Reading": "\u0422\u0435\u043A\u0441\u0442 \u0456 \u0447\u0438\u0442\u0430\u043D\u043D\u044F",
        "Navigation and Interaction": "\u041D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u044F \u0442\u0430 \u0432\u0437\u0430\u0454\u043C\u043E\u0434\u0456\u044F",
        "Text Align": "\u0412\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0442\u0435\u043A\u0441\u0442\u0443",
        "Align Left": "\u0412\u0438\u0440\u0456\u0432\u043D\u044F\u0442\u0438 \u043B\u0456\u0432\u043E\u0440\u0443\u0447",
        "Align Center": "\u0412\u0438\u0440\u0456\u0432\u043D\u044F\u0442\u0438 \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
        "Align Right": "\u0412\u0438\u0440\u0456\u0432\u043D\u044F\u0442\u0438 \u043F\u0440\u0430\u0432\u043E\u0440\u0443\u0447",
        "Adjust Font Size": "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0440\u043E\u0437\u043C\u0456\u0440 \u0448\u0440\u0438\u0444\u0442\u0443",
        "Highlight Title": "\u041F\u0456\u0434\u0441\u0432\u0456\u0442\u0438\u0442\u0438 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        "Highlight Links": "\u041F\u0456\u0434\u0441\u0432\u0456\u0442\u0438\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
        "Readable Font": "\u041B\u0435\u0433\u043A\u043E\u0447\u0438\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u0438\u0439 \u0448\u0440\u0438\u0444\u0442",
        "Color and Contrast": "\u041A\u043E\u043B\u0456\u0440 \u0456 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "Dark Contrast": "\u0422\u0435\u043C\u043D\u0430 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u043D\u0456\u0441\u0442\u044C",
        "Light Contrast": "\u0421\u0432\u0456\u0442\u043B\u0430 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u043D\u0456\u0441\u0442\u044C",
        "High Contrast": "\u0412\u0438\u0441\u043E\u043A\u0430 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u043D\u0456\u0441\u0442\u044C",
        "High Saturation": "\u0412\u0438\u0441\u043E\u043A\u0430 \u043D\u0430\u0441\u0438\u0447\u0435\u043D\u0456\u0441\u0442\u044C",
        "Low Saturation": "\u041D\u0438\u0437\u044C\u043A\u0430 \u043D\u0430\u0441\u0438\u0447\u0435\u043D\u0456\u0441\u0442\u044C",
        Monochrome: "\u041C\u043E\u043D\u043E\u0445\u0440\u043E\u043C\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",
        Tools: "\u0406\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438",
        "Reading Guide": "\u041B\u0456\u043D\u0456\u0439\u043A\u0430 \u0434\u043B\u044F \u0447\u0438\u0442\u0430\u043D\u043D\u044F",
        "Big Cursor": "\u0412\u0435\u043B\u0438\u043A\u0438\u0439 \u043A\u0443\u0440\u0441\u043E\u0440",
        "Increase Font Size": "\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438 \u0448\u0440\u0438\u0444\u0442",
        "Decrease Font Size": "\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438 \u0448\u0440\u0438\u0444\u0442",
        "Letter Spacing": "\u041C\u0456\u0436\u043B\u0456\u0442\u0435\u0440\u043D\u0438\u0439 \u0456\u043D\u0442\u0435\u0440\u0432\u0430\u043B",
        "Line Height": "\u041C\u0456\u0436\u0440\u044F\u0434\u043A\u043E\u0432\u0438\u0439 \u0456\u043D\u0442\u0435\u0440\u0432\u0430\u043B",
        "Font Weight": "\u0422\u043E\u0432\u0449\u0438\u043D\u0430 \u0448\u0440\u0438\u0444\u0442\u0443",
        "Dyslexia Font": "\u0428\u0440\u0438\u0444\u0442 \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439 \u0456\u0437 \u0434\u0438\u0441\u043B\u0435\u043A\u0441\u0456\u0454\u044E",
        Language: "\u041C\u043E\u0432\u0430",
        "Accessibility widget": "\u0412\u0456\u0434\u0436\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0456",
        "Accessibility Profiles": "\u041F\u0440\u043E\u0444\u0456\u043B\u0456 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0456",
        "Cognitive Disability": "\u041A\u043E\u0433\u043D\u0456\u0442\u0438\u0432\u043D\u0456 \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u043D\u044F",
        "Seizure Safe": "\u0411\u0435\u0437\u043F\u0435\u0447\u043D\u043E \u043F\u0440\u0438 \u0435\u043F\u0456\u043B\u0435\u043F\u0441\u0456\u0457",
        "Accessibility statement": "\u0417\u0430\u044F\u0432\u0430 \u043F\u0440\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456\u0441\u0442\u044C",
        ADHD: "\u0421\u0414\u0423\u0413",
        "Low Vision": "\u0421\u043B\u0430\u0431\u043A\u0438\u0439 \u0437\u0456\u0440",
        "Pause Animations": "\u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438 \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0457",
        "Animation paused": "\u0410\u043D\u0456\u043C\u0430\u0446\u0456\u044E \u043F\u0440\u0438\u0437\u0443\u043F\u0438\u043D\u0435\u043D\u043E",
        "Reset all settings": "\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
        "Shortcut:": "\u041A\u043E\u043C\u0431\u0456\u043D\u0430\u0446\u0456\u044F \u043A\u043B\u0430\u0432\u0456\u0448:",
        "Epilepsy Safe Mode": "\u0411\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C \u043F\u0440\u0438 \u0435\u043F\u0456\u043B\u0435\u043F\u0441\u0456\u0457",
        "Mute sounds": "\u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u0437\u0432\u0443\u043A\u0438",
        "Page read": "\u0427\u0438\u0442\u0430\u043D\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438",
        "Page read controls": "\u041A\u0435\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0447\u0438\u0442\u0430\u043D\u043D\u044F\u043C \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438",
        Pause: "\u041F\u0430\u0443\u0437\u0430",
        Resume: "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438",
        Stop: "\u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438",
        Settings: "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
        Speed: "\u0428\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C",
        Voice: "\u0413\u043E\u043B\u043E\u0441",
        "Close accessibility menu": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u043C\u0435\u043D\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0456",
        "Back to accessibility menu": "\u041D\u0430\u0437\u0430\u0434 \u0434\u043E \u043C\u0435\u043D\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0456",
        "Search languages": "\u041F\u043E\u0448\u0443\u043A \u043C\u043E\u0432",
        "Selected language": "\u0412\u0438\u0431\u0440\u0430\u043D\u0430 \u043C\u043E\u0432\u0430",
        "View accessibility statement (opens in new window)": "\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u0437\u0430\u044F\u0432\u0443 \u043F\u0440\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456\u0441\u0442\u044C (\u0432\u0456\u0434\u043A\u0440\u0438\u0454\u0442\u044C\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u043C\u0443 \u0432\u0456\u043A\u043D\u0456)",
        "Visit CookieYes website (opens in new window)": "\u0412\u0456\u0434\u0432\u0456\u0434\u0430\u0442\u0438 \u0432\u0435\u0431\u0441\u0430\u0439\u0442 CookieYes (\u0432\u0456\u0434\u043A\u0440\u0438\u0454\u0442\u044C\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u043C\u0443 \u0432\u0456\u043A\u043D\u0456)",
        "Reset all accessibility settings to default": "\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0432\u0441\u0456 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0456 \u0434\u043E \u0442\u0438\u043F\u043E\u0432\u0438\u0445"
      };
    }
  });

  // src/locales/ur.json
  var require_ur = __commonJS({
    "src/locales/ur.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0631\u0633\u0627\u0626\u06CC \u0645\u06CC\u0646\u0648",
        Close: "\u0628\u0646\u062F \u06A9\u0631\u06CC\u06BA",
        "Text and Reading": "\u0645\u062A\u0646 \u0627\u0648\u0631 \u067E\u0691\u06BE\u0646\u0627",
        "Navigation and Interaction": "\u0646\u06CC\u0648\u06CC\u06AF\u06CC\u0634\u0646 \u0627\u0648\u0631 \u062A\u0639\u0627\u0645\u0644",
        "Text Align": "\u0645\u062A\u0646 \u06A9\u06CC \u0633\u06CC\u062F\u06BE",
        "Align Left": "\u0628\u0627\u0626\u06CC\u06BA \u0633\u06CC\u062F\u06BE \u06A9\u0631\u06CC\u06BA",
        "Align Center": "\u062F\u0631\u0645\u06CC\u0627\u0646 \u0645\u06CC\u06BA \u0633\u06CC\u062F\u06BE \u06A9\u0631\u06CC\u06BA",
        "Align Right": "\u062F\u0627\u0626\u06CC\u06BA \u0633\u06CC\u062F\u06BE \u06A9\u0631\u06CC\u06BA",
        "Adjust Font Size": "\u0641\u0648\u0646\u0679 \u0633\u0627\u0626\u0632 \u0627\u06CC\u0688\u062C\u0633\u0679 \u06A9\u0631\u06CC\u06BA",
        "Highlight Title": "\u0639\u0646\u0648\u0627\u0646 \u06A9\u0648 \u0646\u0645\u0627\u06CC\u0627\u06BA \u06A9\u0631\u06CC\u06BA",
        "Highlight Links": "\u0644\u0646\u06A9\u0633 \u06A9\u0648 \u0646\u0645\u0627\u06CC\u0627\u06BA \u06A9\u0631\u06CC\u06BA",
        "Readable Font": "\u0642\u0627\u0628\u0644\u0650 \u0645\u0637\u0627\u0644\u0639\u06C1 \u0641\u0648\u0646\u0679",
        "Color and Contrast": "\u0631\u0646\u06AF \u0627\u0648\u0631 \u062A\u0636\u0627\u062F",
        "Dark Contrast": "\u06AF\u06C1\u0631\u0627 \u062A\u0636\u0627\u062F",
        "Light Contrast": "\u06C1\u0644\u06A9\u0627 \u062A\u0636\u0627\u062F",
        "High Contrast": "\u0632\u06CC\u0627\u062F\u06C1 \u062A\u0636\u0627\u062F",
        "High Saturation": "\u0632\u06CC\u0627\u062F\u06C1 \u0633\u06CC\u0686\u0648\u0631\u06CC\u0634\u0646",
        "Low Saturation": "\u06A9\u0645 \u0633\u06CC\u0686\u0648\u0631\u06CC\u0634\u0646",
        Monochrome: "\u0645\u0648\u0646\u0648\u06A9\u0631\u0648\u0645",
        Tools: "\u0627\u0648\u0632\u0627\u0631",
        "Reading Guide": "\u0645\u0637\u0627\u0644\u0639\u06C1 \u06AF\u0627\u0626\u06CC\u0688",
        "Big Cursor": "\u0628\u0691\u0627 \u06A9\u0631\u0633\u0631",
        "Increase Font Size": "\u0641\u0648\u0646\u0679 \u0633\u0627\u0626\u0632 \u0628\u0691\u06BE\u0627\u0626\u06CC\u06BA",
        "Decrease Font Size": "\u0641\u0648\u0646\u0679 \u0633\u0627\u0626\u0632 \u06A9\u0645 \u06A9\u0631\u06CC\u06BA",
        "Letter Spacing": "\u062D\u0631\u0648\u0641 \u06A9\u0627 \u0641\u0627\u0635\u0644\u06C1",
        "Line Height": "\u0644\u0627\u0626\u0646 \u06A9\u06CC \u0627\u0648\u0646\u0686\u0627\u0626\u06CC",
        "Font Weight": "\u0641\u0648\u0646\u0679 \u06A9\u0627 \u0648\u0632\u0646",
        "Dyslexia Font": "\u0688\u0633\u0644\u06CC\u06A9\u0633\u06CC\u0627 \u0641\u0648\u0646\u0679",
        Language: "\u0632\u0628\u0627\u0646",
        "Accessibility widget": "\u0631\u0633\u0627\u0626\u06CC \u0645\u06CC\u0646\u0648 \u06A9\u06BE\u0648\u0644\u06CC\u06BA",
        "Accessibility Profiles": "\u0631\u0633\u0627\u0626\u06CC \u067E\u0631\u0648\u0641\u0627\u0626\u0644\u0632",
        "Cognitive Disability": "\u0627\u062F\u0631\u0627\u06A9\u06CC \u0645\u0639\u0630\u0648\u0631\u06CC",
        "Seizure Safe": "\u062F\u0648\u0631\u06D2 \u0633\u06D2 \u0645\u062D\u0641\u0648\u0638",
        "Accessibility statement": "\u0631\u0633\u0627\u0626\u06CC \u06A9\u0627 \u0628\u06CC\u0627\u0646",
        ADHD: "\u0627\u06D2 \u0688\u06CC \u0627\u06CC\u0686 \u0688\u06CC",
        "Low Vision": "\u06A9\u0645\u0632\u0648\u0631 \u0628\u06CC\u0646\u0627\u0626\u06CC",
        "Pause Animations": "\u062D\u0631\u06A9\u0627\u062A \u0631\u0648\u06A9\u06CC\u06BA",
        "Animation paused": "\u0627\u06CC\u0646\u06CC\u0645\u06CC\u0634\u0646 \u0631\u0648\u06A9 \u062F\u06CC \u06AF\u0626\u06CC",
        "Reset all settings": "\u062A\u0631\u062A\u06CC\u0628\u0627\u062A \u0631\u06CC \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA",
        "Shortcut:": "\u0634\u0627\u0631\u0679 \u06A9\u0679:",
        "Epilepsy Safe Mode": "\u0645\u0631\u06AF\u06CC \u06A9\u06D2 \u0644\u06CC\u06D2 \u0645\u062D\u0641\u0648\u0638 \u0645\u0648\u0688",
        "Mute sounds": "\u0622\u0648\u0627\u0632\u06CC\u06BA \u062E\u0627\u0645\u0648\u0634 \u06A9\u0631\u06CC\u06BA",
        "Page read": "\u0635\u0641\u062D\u06C1 \u067E\u0691\u06BE\u06CC\u06BA",
        "Page read controls": "\u0635\u0641\u062D\u06C1 \u067E\u0691\u06BE\u0646\u06D2 \u06A9\u06D2 \u06A9\u0646\u0679\u0631\u0648\u0644",
        Pause: "\u0648\u0642\u0641\u06C1",
        Resume: "\u062F\u0648\u0628\u0627\u0631\u06C1 \u0634\u0631\u0648\u0639 \u06A9\u0631\u06CC\u06BA",
        Stop: "\u0631\u0648\u06A9\u06CC\u06BA",
        Settings: "\u062A\u0631\u062A\u06CC\u0628\u0627\u062A",
        Speed: "\u0631\u0641\u062A\u0627\u0631",
        Voice: "\u0622\u0648\u0627\u0632",
        "Close accessibility menu": "\u0631\u0633\u0627\u0626\u06CC \u06A9\u0627 \u0645\u06CC\u0646\u0648 \u0628\u0646\u062F \u06A9\u0631\u06CC\u06BA",
        "Back to accessibility menu": "\u0631\u0633\u0627\u0626\u06CC \u06A9\u06D2 \u0645\u06CC\u0646\u0648 \u067E\u0631 \u0648\u0627\u067E\u0633 \u062C\u0627\u0626\u06CC\u06BA",
        "Search languages": "\u0632\u0628\u0627\u0646\u06CC\u06BA \u062A\u0644\u0627\u0634 \u06A9\u0631\u06CC\u06BA",
        "Selected language": "\u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u062F\u06C1 \u0632\u0628\u0627\u0646",
        "View accessibility statement (opens in new window)": "\u0631\u0633\u0627\u0626\u06CC \u06A9\u0627 \u0628\u06CC\u0627\u0646 \u062F\u06CC\u06A9\u06BE\u06CC\u06BA (\u0646\u0626\u06CC \u0648\u0646\u0688\u0648 \u0645\u06CC\u06BA \u06A9\u06BE\u0644\u062A\u0627 \u06C1\u06D2)",
        "Visit CookieYes website (opens in new window)": "CookieYes \u0648\u06CC\u0628 \u0633\u0627\u0626\u0679 \u0645\u0644\u0627\u062D\u0638\u06C1 \u06A9\u0631\u06CC\u06BA (\u0646\u0626\u06CC \u0648\u0646\u0688\u0648 \u0645\u06CC\u06BA \u06A9\u06BE\u0644\u062A\u0627 \u06C1\u06D2)",
        "Reset all accessibility settings to default": "\u0631\u0633\u0627\u0626\u06CC \u06A9\u06CC \u062A\u0645\u0627\u0645 \u062A\u0631\u062A\u06CC\u0628\u0627\u062A \u06A9\u0648 \u0688\u06CC\u0641\u0627\u0644\u0679 \u067E\u0631 \u0628\u062D\u0627\u0644 \u06A9\u0631\u06CC\u06BA"
      };
    }
  });

  // src/locales/vi.json
  var require_vi = __commonJS({
    "src/locales/vi.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menu Tr\u1EE3 N\u0103ng",
        Close: "\u0110\xF3ng",
        "Text and Reading": "V\u0103n b\u1EA3n v\xE0 \u0111\u1ECDc",
        "Navigation and Interaction": "\u0110i\u1EC1u h\u01B0\u1EDBng v\xE0 t\u01B0\u01A1ng t\xE1c",
        "Text Align": "C\u0103n ch\u1EC9nh v\u0103n b\u1EA3n",
        "Align Left": "C\u0103n Tr\xE1i",
        "Align Center": "C\u0103n gi\u1EEFa",
        "Align Right": "C\u0103n ph\u1EA3i",
        "Adjust Font Size": "\u0110i\u1EC1u Ch\u1EC9nh C\u1EE1 Ch\u1EEF",
        "Highlight Title": "L\xE0m N\u1ED5i B\u1EADt Ti\xEAu \u0110\u1EC1",
        "Highlight Links": "L\xE0m N\u1ED5i B\u1EADt Li\xEAn K\u1EBFt",
        "Readable Font": "Ph\xF4ng Ch\u1EEF D\u1EC5 \u0110\u1ECDc",
        "Color and Contrast": "M\xE0u s\u1EAFc v\xE0 \u0111\u1ED9 t\u01B0\u01A1ng ph\u1EA3n",
        "Dark Contrast": "T\u01B0\u01A1ng Ph\u1EA3n T\u1ED1i",
        "Light Contrast": "T\u01B0\u01A1ng Ph\u1EA3n S\xE1ng",
        "High Contrast": "T\u01B0\u01A1ng Ph\u1EA3n Cao",
        "High Saturation": "B\xE3o H\xF2a Cao",
        "Low Saturation": "B\xE3o H\xF2a Th\u1EA5p",
        Monochrome: "\u0110\u01A1n S\u1EAFc",
        Tools: "C\xF4ng C\u1EE5",
        "Reading Guide": "H\u01B0\u1EDBng D\u1EABn \u0110\u1ECDc",
        "Big Cursor": "Con Tr\u1ECF L\u1EDBn",
        "Increase Font Size": "T\u0103ng C\u1EE1 Ch\u1EEF",
        "Decrease Font Size": "Gi\u1EA3m C\u1EE1 Ch\u1EEF",
        "Letter Spacing": "Kho\u1EA3ng C\xE1ch Ch\u1EEF",
        "Line Height": "Chi\u1EC1u Cao D\xF2ng",
        "Font Weight": "\u0110\u1ED9 \u0110\u1EADm Ch\u1EEF",
        "Dyslexia Font": "Ph\xF4ng Ch\u1EEF Cho Ch\u1EE9ng Kh\xF3 \u0110\u1ECDc",
        Language: "Ng\xF4n Ng\u1EEF",
        "Accessibility widget": "M\u1EDF Menu Tr\u1EE3 N\u0103ng",
        "Accessibility Profiles": "H\u1ED3 S\u01A1 Tr\u1EE3 N\u0103ng",
        "Cognitive Disability": "Khuy\u1EBFt T\u1EADt Nh\u1EADn Th\u1EE9c",
        "Seizure Safe": "An To\xE0n Cho \u0110\u1ED9ng Kinh",
        "Accessibility statement": "Tuy\xEAn B\u1ED1 Tr\u1EE3 N\u0103ng",
        ADHD: "ADHD",
        "Low Vision": "Th\u1ECB l\u1EF1c k\xE9m",
        "Pause Animations": "D\u1EEBng Ho\u1EA1t \u1EA2nh",
        "Animation paused": "\u0110\xE3 t\u1EA1m d\u1EEBng \u1EA3nh \u0111\u1ED9ng",
        "Reset all settings": "\u0110\u1EB7t l\u1EA1i c\xE0i \u0111\u1EB7t",
        "Shortcut:": "Ph\xEDm t\u1EAFt:",
        "Epilepsy Safe Mode": "Ch\u1EBF \u0111\u1ED9 an to\xE0n cho ng\u01B0\u1EDDi \u0111\u1ED9ng kinh",
        "Mute sounds": "T\u1EAFt \xE2m thanh",
        "Page read": "\u0110\u1ECDc trang",
        "Page read controls": "\u0110i\u1EC1u khi\u1EC3n \u0111\u1ECDc trang",
        Pause: "T\u1EA1m d\u1EEBng",
        Resume: "Ti\u1EBFp t\u1EE5c",
        Stop: "D\u1EEBng",
        Settings: "C\xE0i \u0111\u1EB7t",
        Speed: "T\u1ED1c \u0111\u1ED9",
        Voice: "Gi\u1ECDng \u0111\u1ECDc",
        "Close accessibility menu": "\u0110\xF3ng menu tr\u1EE3 n\u0103ng",
        "Back to accessibility menu": "Quay l\u1EA1i menu tr\u1EE3 n\u0103ng",
        "Search languages": "T\xECm ki\u1EBFm ng\xF4n ng\u1EEF",
        "Selected language": "Ng\xF4n ng\u1EEF \u0111\xE3 ch\u1ECDn",
        "View accessibility statement (opens in new window)": "Xem tuy\xEAn b\u1ED1 v\u1EC1 tr\u1EE3 n\u0103ng (m\u1EDF trong c\u1EEDa s\u1ED5 m\u1EDBi)",
        "Visit CookieYes website (opens in new window)": "Truy c\u1EADp trang web CookieYes (m\u1EDF trong c\u1EEDa s\u1ED5 m\u1EDBi)",
        "Reset all accessibility settings to default": "\u0110\u1EB7t l\u1EA1i t\u1EA5t c\u1EA3 c\xE0i \u0111\u1EB7t tr\u1EE3 n\u0103ng v\u1EC1 m\u1EB7c \u0111\u1ECBnh"
      };
    }
  });

  // src/locales/zh-Hans.json
  var require_zh_Hans = __commonJS({
    "src/locales/zh-Hans.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u65E0\u969C\u788D\u83DC\u5355",
        Close: "\u5173\u95ED",
        "Text and Reading": "\u6587\u672C\u4E0E\u9605\u8BFB",
        "Navigation and Interaction": "\u5BFC\u822A\u4E0E\u4EA4\u4E92",
        "Text Align": "\u6587\u672C\u5BF9\u9F50",
        "Align Left": "\u5DE6\u5BF9\u9F50",
        "Align Center": "\u5C45\u4E2D\u5BF9\u9F50",
        "Align Right": "\u53F3\u5BF9\u9F50",
        "Adjust Font Size": "\u8C03\u6574\u5B57\u4F53\u5927\u5C0F",
        "Highlight Title": "\u7A81\u51FA\u663E\u793A\u6807\u9898",
        "Highlight Links": "\u7A81\u51FA\u663E\u793A\u94FE\u63A5",
        "Readable Font": "\u6613\u8BFB\u5B57\u4F53",
        "Color and Contrast": "\u989C\u8272\u4E0E\u5BF9\u6BD4\u5EA6",
        "Dark Contrast": "\u6DF1\u8272\u5BF9\u6BD4\u5EA6",
        "Light Contrast": "\u6D45\u8272\u5BF9\u6BD4\u5EA6",
        "High Contrast": "\u9AD8\u5BF9\u6BD4\u5EA6",
        "High Saturation": "\u9AD8\u9971\u548C\u5EA6",
        "Low Saturation": "\u4F4E\u9971\u548C\u5EA6",
        Monochrome: "\u5355\u8272",
        Tools: "\u5DE5\u5177",
        "Reading Guide": "\u9605\u8BFB\u6307\u5357",
        "Big Cursor": "\u5927\u5149\u6807",
        "Increase Font Size": "\u589E\u5927\u5B57\u4F53",
        "Decrease Font Size": "\u51CF\u5C0F\u5B57\u4F53",
        "Letter Spacing": "\u5B57\u95F4\u8DDD",
        "Line Height": "\u884C\u9AD8",
        "Font Weight": "\u5B57\u4F53\u7C97\u7EC6",
        "Dyslexia Font": "\u9605\u8BFB\u969C\u788D\u5B57\u4F53",
        Language: "\u8BED\u8A00",
        "Accessibility widget": "\u6253\u5F00\u65E0\u969C\u788D\u83DC\u5355",
        "Accessibility Profiles": "\u65E0\u969C\u788D\u914D\u7F6E\u6587\u4EF6",
        "Cognitive Disability": "\u8BA4\u77E5\u969C\u788D",
        "Seizure Safe": "\u766B\u75EB\u5B89\u5168",
        "Accessibility statement": "\u65E0\u969C\u788D\u58F0\u660E",
        ADHD: "\u6CE8\u610F\u7F3A\u9677\u591A\u52A8\u969C\u788D",
        "Low Vision": "\u5F31\u89C6",
        "Pause Animations": "\u6682\u505C\u52A8\u753B",
        "Animation paused": "\u52A8\u753B\u5DF2\u6682\u505C",
        "Reset all settings": "\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E",
        "Shortcut:": "\u5FEB\u6377\u952E\uFF1A",
        "Epilepsy Safe Mode": "\u766B\u75EB\u5B89\u5168\u6A21\u5F0F",
        "Mute sounds": "\u9759\u97F3",
        "Page read": "\u6717\u8BFB\u9875\u9762",
        "Page read controls": "\u6717\u8BFB\u63A7\u5236",
        Pause: "\u6682\u505C",
        Resume: "\u7EE7\u7EED",
        Stop: "\u505C\u6B62",
        Settings: "\u8BBE\u7F6E",
        Speed: "\u8BED\u901F",
        Voice: "\u8BED\u97F3",
        "Close accessibility menu": "\u5173\u95ED\u65E0\u969C\u788D\u83DC\u5355",
        "Back to accessibility menu": "\u8FD4\u56DE\u65E0\u969C\u788D\u83DC\u5355",
        "Search languages": "\u641C\u7D22\u8BED\u8A00",
        "Selected language": "\u5DF2\u9009\u62E9\u7684\u8BED\u8A00",
        "View accessibility statement (opens in new window)": "\u67E5\u770B\u65E0\u969C\u788D\u58F0\u660E\uFF08\u5728\u65B0\u7A97\u53E3\u4E2D\u6253\u5F00\uFF09",
        "Visit CookieYes website (opens in new window)": "\u8BBF\u95EE CookieYes \u7F51\u7AD9\uFF08\u5728\u65B0\u7A97\u53E3\u4E2D\u6253\u5F00\uFF09",
        "Reset all accessibility settings to default": "\u5C06\u6240\u6709\u65E0\u969C\u788D\u8BBE\u7F6E\u91CD\u7F6E\u4E3A\u9ED8\u8BA4"
      };
    }
  });

  // src/locales/zh-Hant.json
  var require_zh_Hant = __commonJS({
    "src/locales/zh-Hant.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u7121\u969C\u7919\u9078\u55AE",
        Close: "\u95DC\u9589",
        "Text and Reading": "\u6587\u5B57\u8207\u95B1\u8B80",
        "Navigation and Interaction": "\u5C0E\u822A\u8207\u4E92\u52D5",
        "Text Align": "\u6587\u5B57\u5C0D\u9F4A",
        "Align Left": "\u9760\u5DE6\u5C0D\u9F4A",
        "Align Center": "\u7F6E\u4E2D\u5C0D\u9F4A",
        "Align Right": "\u9760\u53F3\u5C0D\u9F4A",
        "Adjust Font Size": "\u8ABF\u6574\u5B57\u578B\u5927\u5C0F",
        "Highlight Title": "\u7A81\u986F\u6A19\u984C",
        "Highlight Links": "\u7A81\u986F\u9023\u7D50",
        "Readable Font": "\u6613\u8B80\u5B57\u578B",
        "Color and Contrast": "\u984F\u8272\u8207\u5C0D\u6BD4\u5EA6",
        "Dark Contrast": "\u6DF1\u8272\u5C0D\u6BD4",
        "Light Contrast": "\u6DFA\u8272\u5C0D\u6BD4",
        "High Contrast": "\u9AD8\u5C0D\u6BD4",
        "High Saturation": "\u9AD8\u98FD\u548C\u5EA6",
        "Low Saturation": "\u4F4E\u98FD\u548C\u5EA6",
        Monochrome: "\u55AE\u8272",
        Tools: "\u5DE5\u5177",
        "Reading Guide": "\u95B1\u8B80\u6307\u5357",
        "Big Cursor": "\u5927\u6E38\u6A19",
        "Increase Font Size": "\u653E\u5927\u5B57\u578B",
        "Decrease Font Size": "\u7E2E\u5C0F\u5B57\u578B",
        "Letter Spacing": "\u5B57\u5143\u9593\u8DDD",
        "Line Height": "\u884C\u9AD8",
        "Font Weight": "\u5B57\u578B\u7C97\u7D30",
        "Dyslexia Font": "\u95B1\u8B80\u969C\u7919\u5B57\u578B",
        Language: "\u8A9E\u8A00",
        "Accessibility widget": "\u958B\u555F\u7121\u969C\u7919\u9078\u55AE",
        "Accessibility Profiles": "\u7121\u969C\u7919\u8A2D\u5B9A\u6A94",
        "Cognitive Disability": "\u8A8D\u77E5\u969C\u7919",
        "Seizure Safe": "\u7672\u7647\u5B89\u5168",
        "Accessibility statement": "\u7121\u969C\u7919\u8072\u660E",
        ADHD: "\u6CE8\u610F\u529B\u4E0D\u8DB3\u904E\u52D5\u75C7",
        "Low Vision": "\u5F31\u8996",
        "Pause Animations": "\u66AB\u505C\u52D5\u756B",
        "Animation paused": "\u52D5\u756B\u5DF2\u66AB\u505C",
        "Reset all settings": "\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A",
        "Shortcut:": "\u5FEB\u6377\u9375\uFF1A",
        "Epilepsy Safe Mode": "\u7672\u7647\u5B89\u5168\u6A21\u5F0F",
        "Mute sounds": "\u975C\u97F3",
        "Page read": "\u6717\u8B80\u9801\u9762",
        "Page read controls": "\u6717\u8B80\u63A7\u5236\u9805",
        Pause: "\u66AB\u505C",
        Resume: "\u7E7C\u7E8C",
        Stop: "\u505C\u6B62",
        Settings: "\u8A2D\u5B9A",
        Speed: "\u8A9E\u901F",
        Voice: "\u8A9E\u97F3",
        "Close accessibility menu": "\u95DC\u9589\u7121\u969C\u7919\u9078\u55AE",
        "Back to accessibility menu": "\u8FD4\u56DE\u7121\u969C\u7919\u9078\u55AE",
        "Search languages": "\u641C\u5C0B\u8A9E\u8A00",
        "Selected language": "\u5DF2\u9078\u64C7\u7684\u8A9E\u8A00",
        "View accessibility statement (opens in new window)": "\u6AA2\u8996\u7121\u969C\u7919\u8072\u660E\uFF08\u5728\u65B0\u8996\u7A97\u958B\u555F\uFF09",
        "Visit CookieYes website (opens in new window)": "\u9020\u8A2A CookieYes \u7DB2\u7AD9\uFF08\u5728\u65B0\u8996\u7A97\u958B\u555F\uFF09",
        "Reset all accessibility settings to default": "\u5C07\u6240\u6709\u7121\u969C\u7919\u8A2D\u5B9A\u91CD\u8A2D\u70BA\u9810\u8A2D"
      };
    }
  });

  // src/utils/cookies.ts
  function getCookie(cookieName) {
    const name = `${cookieName}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) == " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }
  function setCookie(cookieName, cookieValue, expirationDays) {
    const date = /* @__PURE__ */ new Date();
    if (expirationDays) {
      date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1e3);
    }
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
  }

  // src/storage.ts
  function saveStorageData(key, value) {
    const jsonValue = JSON.stringify(value);
    try {
      localStorage.setItem(key, jsonValue);
      window.dispatchEvent(new CustomEvent("cya11y:widgetStateChanged", {
        detail: { key, value: jsonValue }
      }));
    } catch (error) {
      console.warn("localStorage not available, falling back to cookies:", error);
      setCookie(key, jsonValue);
    }
  }
  function getStorageData(key) {
    let data = null;
    try {
      data = localStorage.getItem(key);
    } catch (error) {
      console.warn("localStorage not available, falling back to cookies:", error);
      data = getCookie(key);
    }
    try {
      return data ? JSON.parse(data) : {};
    } catch (error) {
      console.error("Failed to parse stored data:", error);
      return {};
    }
  }

  // src/globals/userSettings.ts
  var DEFAULT_USER_SETTINGS = {
    lang: void 0,
    position: void 0,
    states: {}
  };
  var userSettings = { ...DEFAULT_USER_SETTINGS };
  var STORAGE_KEY = "cya11y-user-settings";
  function saveUserSettings() {
    try {
      saveStorageData(STORAGE_KEY, userSettings);
    } catch (error) {
      console.error("Failed to save user settings:", error);
    }
  }
  function getSavedUserSettings() {
    try {
      const savedSettings = getStorageData(STORAGE_KEY);
      if (savedSettings && typeof savedSettings === "object") {
        return {
          ...DEFAULT_USER_SETTINGS,
          ...savedSettings,
          states: {
            ...DEFAULT_USER_SETTINGS.states,
            ...savedSettings.states
          }
        };
      }
    } catch (error) {
      console.error("Failed to load saved user settings:", error);
    }
    return { ...DEFAULT_USER_SETTINGS };
  }

  // src/enum/Selectors.ts
  var ICON_SELECTOR = [
    "material-icons",
    // Google Material Icons
    "fa",
    // Font Awesome (general)
    "fa-solid",
    // Font Awesome solid icons
    "fa-regular",
    // Font Awesome regular icons
    "fa-brands",
    // Font Awesome brand icons
    "glyphicon",
    // Bootstrap Glyphicons
    "icon",
    // Common class for older icon sets
    "mdi",
    // Material Design Icons
    "ion",
    // Ionicons
    "svg-icon",
    // Custom SVG icons
    "iconfont",
    // Icon fonts from other libraries
    "emoji-icon",
    // Emoji icon class
    "bi",
    // Bootstrap Icons
    "octicon",
    // GitHub Octicons
    "feather",
    // Feather Icons
    "heroicon",
    // Heroicons
    "bx",
    // Boxicons
    "ri"
    // Remix Icon
  ];
  var NOT_ICON_SELECTORS = `*:not(${ICON_SELECTOR.map((s) => `.${s}`).join(",")})`;
  var ALL_ELEMENT_SELECTORS = ["", NOT_ICON_SELECTORS];
  var LINKS_SELECTORS = ["a[href]"];
  var HEADER_SELECTORS = ["h1", "h2", "h3", "h4", "h5", "h6"];
  var TEXT_SELECTORS = [
    ...HEADER_SELECTORS,
    "img",
    "p",
    "i",
    "a",
    "button:not(.cya11y-btn)",
    "label",
    "li",
    "ol"
  ];
  var INLINE_TEXT_SELECTORS = [
    "a",
    "span",
    "i",
    "b",
    "em",
    "strong",
    "u",
    "s",
    "small",
    "sub",
    "sup",
    "code",
    "kbd",
    "samp",
    "mark",
    "cite",
    "q",
    "time",
    "abbr",
    "del",
    "ins"
  ];

  // src/tools/adjustFontSize.ts
  var FONT_SIZE_SELECTOR = "h1,h2,h3,h4,h5,h6,p,a,dl,dt,li,ol,th,td,span,blockquote,.cya11y-text,div,button";
  var ICON_SELECTOR_SET = new Set(ICON_SELECTOR);
  var ORIGINAL_FONT_SIZE_ATTR = "cya11yOrgFontSize";
  var ORIGINAL_INLINE_FONT_SIZE_ATTR = "cya11yOrgInlineFontSize";
  function adjustFontSize(multiply = 1) {
    try {
      if (typeof multiply !== "number" || multiply <= 0) {
        console.warn("Invalid font size multiplier:", multiply);
        return;
      }
      const elements = document.querySelectorAll(FONT_SIZE_SELECTOR);
      elements.forEach((element) => {
        try {
          if (Array.from(element.classList).some((cls) => ICON_SELECTOR_SET.has(cls))) {
            return;
          }
          if (element.dataset[ORIGINAL_FONT_SIZE_ATTR]) {
            return;
          }
          const originalInlineStyle = element.style.fontSize;
          const computedFontSize = parseInt(window.getComputedStyle(element).fontSize);
          if (isNaN(computedFontSize)) {
            console.warn("Invalid original font size for element:", element);
            return;
          }
          if (computedFontSize <= 0) {
            element.dataset[ORIGINAL_FONT_SIZE_ATTR] = "0";
            return;
          }
          element.dataset[ORIGINAL_FONT_SIZE_ATTR] = String(computedFontSize);
          if (originalInlineStyle) {
            element.dataset[ORIGINAL_INLINE_FONT_SIZE_ATTR] = originalInlineStyle;
          }
        } catch (captureError) {
          console.warn("Failed to capture original font size for element:", element, captureError);
        }
      });
      elements.forEach((element) => {
        try {
          if (Array.from(element.classList).some((cls) => ICON_SELECTOR_SET.has(cls))) {
            return;
          }
          const originalFontSize = Number(element.dataset[ORIGINAL_FONT_SIZE_ATTR]);
          if (isNaN(originalFontSize) || originalFontSize <= 0) {
            return;
          }
          if (multiply === 1) {
            if (element.dataset[ORIGINAL_INLINE_FONT_SIZE_ATTR]) {
              element.style.fontSize = element.dataset[ORIGINAL_INLINE_FONT_SIZE_ATTR];
            } else {
              element.style.fontSize = "";
            }
            return;
          }
          const newFontSize = originalFontSize * multiply;
          element.style.fontSize = `${newFontSize.toFixed(0)}px`;
        } catch (applyError) {
          console.warn("Failed to apply font size for element:", element, applyError);
        }
      });
    } catch (error) {
      console.error("Failed to adjust font size:", error);
    }
  }

  // src/utils/addStylesheet.ts
  function addStylesheet({
    id,
    css
  }) {
    try {
      if (!css || typeof css !== "string") {
        console.warn("Invalid CSS provided to addStylesheet");
        return;
      }
      if (!id || typeof id !== "string") {
        console.warn("Invalid ID provided to addStylesheet");
        return;
      }
      let styleElement = document.getElementById(id);
      if (!styleElement) {
        styleElement = document.createElement("style");
        styleElement.id = id;
        document.head.appendChild(styleElement);
      }
      styleElement.innerHTML = css;
    } catch (error) {
      console.error("Failed to add stylesheet:", error);
    }
  }

  // src/utils/cssGenerator.ts
  var BROWSER_PREFIXES = ["-o-", "-ms-", "-moz-", "-webkit-", ""];
  var PROPERTIES_NEEDING_PREFIX = ["filter"];
  function generateCSS(styles) {
    if (!styles || typeof styles !== "object") {
      return "";
    }
    let css = "";
    for (const [property, value] of Object.entries(styles)) {
      const prefixes = PROPERTIES_NEEDING_PREFIX.includes(property) ? BROWSER_PREFIXES : [""];
      prefixes.forEach((prefix) => {
        css += `${prefix}${property}:${value} !important;`;
      });
    }
    return css;
  }
  function wrapCSSToSelector({
    selector,
    childrenSelector = [""],
    css
  }) {
    if (!selector || !css) {
      return "";
    }
    let output = "";
    childrenSelector.forEach((childSelector) => {
      output += `${selector} ${childSelector}{${css}}`;
    });
    return output;
  }
  function generateCSSFromConfig(config) {
    if (!config) {
      return "";
    }
    let output = "";
    output += generateCSS(config.styles || {});
    if (output.length && config.selector) {
      output = wrapCSSToSelector({
        selector: config.selector,
        childrenSelector: config.childrenSelector,
        css: output
      });
    }
    if (config.css) {
      output += config.css;
    }
    return output;
  }
  function injectToolCSS(config) {
    if (!config) {
      console.warn("No configuration provided to injectToolCSS");
      return;
    }
    const { id = "", enable = false } = config;
    const toolId = `cya11y-${id}`;
    if (enable) {
      try {
        let css = generateCSSFromConfig({ ...config, selector: `*:not(#cya11y-container):not(#cya11y-container *)` });
        if (css) {
          addStylesheet({
            css,
            id: toolId
          });
        }
      } catch (error) {
        console.error(`Failed to inject CSS for tool ${id}:`, error);
      }
    } else {
      const existingStylesheet = document.getElementById(toolId);
      if (existingStylesheet) {
        existingStylesheet.remove();
      }
    }
    document.documentElement.classList.toggle(toolId, enable);
  }

  // import("../locales/**/*.json") in src/i18n/Languages.ts
  var globImport_locales_json = __glob({
    "../locales/am.json": () => Promise.resolve().then(() => __toESM(require_am())),
    "../locales/ar.json": () => Promise.resolve().then(() => __toESM(require_ar())),
    "../locales/bg.json": () => Promise.resolve().then(() => __toESM(require_bg())),
    "../locales/bn.json": () => Promise.resolve().then(() => __toESM(require_bn())),
    "../locales/ca.json": () => Promise.resolve().then(() => __toESM(require_ca())),
    "../locales/cs.json": () => Promise.resolve().then(() => __toESM(require_cs())),
    "../locales/da.json": () => Promise.resolve().then(() => __toESM(require_da())),
    "../locales/de.json": () => Promise.resolve().then(() => __toESM(require_de())),
    "../locales/el.json": () => Promise.resolve().then(() => __toESM(require_el())),
    "../locales/en.json": () => Promise.resolve().then(() => __toESM(require_en())),
    "../locales/es.json": () => Promise.resolve().then(() => __toESM(require_es())),
    "../locales/fa.json": () => Promise.resolve().then(() => __toESM(require_fa())),
    "../locales/fi.json": () => Promise.resolve().then(() => __toESM(require_fi())),
    "../locales/fil.json": () => Promise.resolve().then(() => __toESM(require_fil())),
    "../locales/fr.json": () => Promise.resolve().then(() => __toESM(require_fr())),
    "../locales/gl.json": () => Promise.resolve().then(() => __toESM(require_gl())),
    "../locales/he.json": () => Promise.resolve().then(() => __toESM(require_he())),
    "../locales/hi.json": () => Promise.resolve().then(() => __toESM(require_hi())),
    "../locales/hr.json": () => Promise.resolve().then(() => __toESM(require_hr())),
    "../locales/hu.json": () => Promise.resolve().then(() => __toESM(require_hu())),
    "../locales/id.json": () => Promise.resolve().then(() => __toESM(require_id())),
    "../locales/it.json": () => Promise.resolve().then(() => __toESM(require_it())),
    "../locales/ja.json": () => Promise.resolve().then(() => __toESM(require_ja())),
    "../locales/ka.json": () => Promise.resolve().then(() => __toESM(require_ka())),
    "../locales/kn.json": () => Promise.resolve().then(() => __toESM(require_kn())),
    "../locales/ko.json": () => Promise.resolve().then(() => __toESM(require_ko())),
    "../locales/ku.json": () => Promise.resolve().then(() => __toESM(require_ku())),
    "../locales/lb.json": () => Promise.resolve().then(() => __toESM(require_lb())),
    "../locales/lt.json": () => Promise.resolve().then(() => __toESM(require_lt())),
    "../locales/lv.json": () => Promise.resolve().then(() => __toESM(require_lv())),
    "../locales/ml.json": () => Promise.resolve().then(() => __toESM(require_ml())),
    "../locales/mn.json": () => Promise.resolve().then(() => __toESM(require_mn())),
    "../locales/ms.json": () => Promise.resolve().then(() => __toESM(require_ms())),
    "../locales/my.json": () => Promise.resolve().then(() => __toESM(require_my())),
    "../locales/nb.json": () => Promise.resolve().then(() => __toESM(require_nb())),
    "../locales/nl.json": () => Promise.resolve().then(() => __toESM(require_nl())),
    "../locales/no.json": () => Promise.resolve().then(() => __toESM(require_no())),
    "../locales/pa.json": () => Promise.resolve().then(() => __toESM(require_pa())),
    "../locales/pl.json": () => Promise.resolve().then(() => __toESM(require_pl())),
    "../locales/pt.json": () => Promise.resolve().then(() => __toESM(require_pt())),
    "../locales/ro.json": () => Promise.resolve().then(() => __toESM(require_ro())),
    "../locales/ru.json": () => Promise.resolve().then(() => __toESM(require_ru())),
    "../locales/si.json": () => Promise.resolve().then(() => __toESM(require_si())),
    "../locales/sk.json": () => Promise.resolve().then(() => __toESM(require_sk())),
    "../locales/sl.json": () => Promise.resolve().then(() => __toESM(require_sl())),
    "../locales/sr-SP.json": () => Promise.resolve().then(() => __toESM(require_sr_SP())),
    "../locales/sr.json": () => Promise.resolve().then(() => __toESM(require_sr())),
    "../locales/sv.json": () => Promise.resolve().then(() => __toESM(require_sv())),
    "../locales/sw.json": () => Promise.resolve().then(() => __toESM(require_sw())),
    "../locales/ta.json": () => Promise.resolve().then(() => __toESM(require_ta())),
    "../locales/te.json": () => Promise.resolve().then(() => __toESM(require_te())),
    "../locales/th.json": () => Promise.resolve().then(() => __toESM(require_th())),
    "../locales/tr.json": () => Promise.resolve().then(() => __toESM(require_tr())),
    "../locales/uk.json": () => Promise.resolve().then(() => __toESM(require_uk())),
    "../locales/ur.json": () => Promise.resolve().then(() => __toESM(require_ur())),
    "../locales/vi.json": () => Promise.resolve().then(() => __toESM(require_vi())),
    "../locales/zh-Hans.json": () => Promise.resolve().then(() => __toESM(require_zh_Hans())),
    "../locales/zh-Hant.json": () => Promise.resolve().then(() => __toESM(require_zh_Hant()))
  });

  // src/i18n/Languages.ts
  var LANGUAGES = [
    { code: "am", label: "\u12A0\u121B\u122D\u129B (Amharic)" },
    { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (Arabic)" },
    { code: "bg", label: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 (Bulgarian)" },
    { code: "bn", label: "\u09AC\u09BE\u0982\u09B2\u09BE (Bengali)" },
    { code: "ca", label: "Catal\xE0 (Catalan)" },
    { code: "cs", label: "\u010De\u0161tina (Czech)" },
    { code: "da", label: "Danish (Denmark)" },
    { code: "de", label: "Deutsch (German)" },
    { code: "el", label: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC (Greek)" },
    { code: "en", label: "English (English)" },
    { code: "es", label: "Espa\xF1ol (Spanish)" },
    { code: "fa", label: "\u0641\u0627\u0631\u0633\u06CC (Persian)" },
    { code: "fi", label: "suomi (Finnish)" },
    { code: "fil", label: "Tagalog (Filipno)" },
    { code: "fr", label: "Fran\xE7ais (French)" },
    { code: "gl", label: "Galego (Galician)" },
    { code: "he", label: "\u05E2\u05D1\u05E8\u05D9\u05EA (Hebrew)" },
    { code: "hi", label: "\u0939\u093F\u0928\u094D\u0926\u0940 (Hindi)" },
    { code: "hr", label: "Hrvatski (Croatian)" },
    { code: "hu", label: "Magyar (Hungarian)" },
    { code: "id", label: "Bahasa Indonesia (Indonesian)" },
    { code: "it", label: "Italiano (Italian)" },
    { code: "ja", label: "\u65E5\u672C\u8A9E (Japanese)" },
    { code: "ka", label: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8 (Georgian)" },
    { code: "kn", label: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1 (Kannada)" },
    { code: "ko", label: "\uD55C\uAD6D\uC5B4 (Korean)" },
    { code: "ku", label: "Kurd\xEE (Kurdish)" },
    { code: "lt", label: "Lietuvi\u0173 (Lithuanian)" },
    { code: "lv", label: "Latvie\u0161u (Latvian)" },
    { code: "lb", label: "L\xEBtzebuergesch (Luxembourgish)" },
    { code: "ml", label: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02 (Malayalam)" },
    { code: "mn", label: "\u041C\u043E\u043D\u0433\u043E\u043B (Mongolian)" },
    { code: "ms", label: "Bahasa Malaysia (Malay)" },
    { code: "my", label: "\u1019\u103C\u1014\u103A\u1019\u102C (Burmese)" },
    { code: "nb", label: "Norsk bokm\xE5l (Norwegian Bokm\xE5l)" },
    { code: "nl", label: "Nederlands (Dutch)" },
    { code: "no", label: "Norsk (Norwegian)" },
    { code: "pa", label: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40 (Punjabi)" },
    { code: "pl", label: "Polski (Polish)" },
    { code: "pt", label: "Portugu\xEAs (Portuguese)" },
    { code: "ro", label: "Rom\xE2n\u0103 (Romanian)" },
    { code: "ru", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (Russian)" },
    { code: "si", label: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD (Sinhala)" },
    { code: "sk", label: "sloven\u010Dina (Slovak)" },
    { code: "sl", label: "sloven\u0161\u010Dina (Slovenian)" },
    { code: "sr", label: "Srpski (Serbian)" },
    { code: "sr-SP", label: "\u0421\u0440\u043F\u0441\u043A\u0438 (Serbian Cyrillic)" },
    { code: "sv", label: "Svenska (Swedish)" },
    { code: "sw", label: "Kiswahili (Swahili)" },
    { code: "ta", label: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD (Tamil)" },
    { code: "te", label: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 (Telugu)" },
    { code: "th", label: "\u0E44\u0E17\u0E22 (Thai)" },
    { code: "tr", label: "T\xFCrk\xE7e (Turkish)" },
    { code: "uk", label: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 (Ukrainian)" },
    { code: "ur", label: "\u0627\u0631\u062F\u0648 (Urdu)" },
    { code: "vi", label: "Ti\u1EBFng Vi\u1EC7t (Vietnamese)" },
    { code: "zh-Hans", label: "\u7B80\u4F53\u4E2D\u6587 (Simplified Chinese)" },
    { code: "zh-Hant", label: "\u7E41\u9AD4\u4E2D\u6587 (Traditional Chinese)" }
  ];
  var locales = LANGUAGES.map((lang) => lang.code);
  var LANGUAGE_DICTIONARY = {};
  var languagesLoaded = false;
  var languagesLoadingPromise = null;
  async function loadLanguages() {
    if (languagesLoaded) {
      return;
    }
    if (languagesLoadingPromise) {
      return languagesLoadingPromise;
    }
    languagesLoadingPromise = (async () => {
      try {
        for (const locale of locales) {
          LANGUAGE_DICTIONARY[locale] = (await globImport_locales_json(`../locales/${locale}.json`)).default;
        }
        languagesLoaded = true;
      } catch (error) {
        console.error("Failed to load languages:", error);
        throw error;
      }
    })();
    return languagesLoadingPromise;
  }
  loadLanguages();

  // src/globals/defaultConfig.ts
  var defaultConfig = {
    status: {
      mobile: true,
      desktop: true
    },
    iconId: "default",
    iconSize: 48,
    label: "Accessibility widget",
    heading: "Accessibility menu",
    position: {
      mobile: "bottom-right",
      desktop: "bottom-right"
    },
    language: {
      default: "en",
      selected: [],
      showSelector: true
    },
    margins: {
      desktop: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
      },
      mobile: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
      }
    },
    primaryColor: "#1863DC",
    keyboard: {
      enabled: false,
      shortcut: "alt+a"
    },
    modules: {
      color: {
        darkContrast: { enabled: true },
        lightContrast: { enabled: true },
        highContrast: { enabled: true },
        highSaturation: { enabled: true },
        lowSaturation: { enabled: true },
        monochrome: { enabled: true }
      },
      content: {
        adjustFontSizing: { enabled: true },
        highlightTitle: { enabled: true },
        highlightLinks: { enabled: true },
        dyslexicFont: { enabled: true },
        letterSpacing: { enabled: true },
        lineHeight: { enabled: true },
        fontWeight: { enabled: true },
        textAlign: { enabled: true }
      },
      navigation: {
        readingGuide: { enabled: true },
        pauseAnimations: { enabled: true },
        bigCursor: { enabled: true }
      },
      statement: {
        enabled: false,
        url: ""
      },
      profiles: {
        enabled: true,
        lowVision: { enabled: true },
        adhd: { enabled: true },
        seizureSafe: { enabled: true },
        epilepsySafe: { enabled: true }
      },
      pageRead: {
        enabled: true
      },
      muteSounds: {
        enabled: true
      }
    }
  };

  // src/globals/pluginConfig.ts
  var _remote = window._cyA11yConfig;
  var pluginConfig = {
    ...defaultConfig,
    ..._remote,
    keyboard: {
      ...defaultConfig.keyboard,
      ..._remote?.keyboard || {}
    },
    modules: {
      color: {
        ...defaultConfig.modules.color,
        ..._remote?.modules?.color || {}
      },
      content: {
        ...defaultConfig.modules.content,
        ..._remote?.modules?.content || {}
      },
      navigation: {
        ...defaultConfig.modules.navigation,
        ..._remote?.modules?.navigation || {}
      },
      statement: {
        ...defaultConfig.modules.statement,
        ..._remote?.modules?.statement || {}
      },
      profiles: {
        ...defaultConfig.modules.profiles,
        ..._remote?.modules?.profiles || {}
      },
      pageRead: {
        ...defaultConfig.modules.pageRead,
        ..._remote?.modules?.pageRead || {}
      },
      muteSounds: {
        ...defaultConfig.modules.muteSounds,
        ..._remote?.modules?.muteSounds || {}
      }
    }
  };

  // src/i18n/translate.ts
  function t(label) {
    const dictionary = LANGUAGE_DICTIONARY[userSettings.lang] ?? LANGUAGE_DICTIONARY[pluginConfig.language.default];
    return dictionary[label] ?? label;
  }

  // src/tools/disableAnimatedImages.ts
  var GIF_RE = /\.gif(\?|#|$)/i;
  function isGif(img) {
    return GIF_RE.test(img.currentSrc || img.src || "");
  }
  function effectiveBgRgb(el) {
    let node = el.parentElement;
    while (node) {
      const m = getComputedStyle(node).backgroundColor.match(
        /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/
      );
      if (m && (m[4] === void 0 || parseFloat(m[4]) > 0)) {
        return [Number(m[1]), Number(m[2]), Number(m[3])];
      }
      node = node.parentElement;
    }
    return [255, 255, 255];
  }
  function isLightBg([r, g, b]) {
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.5;
  }
  function placeholderTheme(img) {
    return isLightBg(effectiveBgRgb(img)) ? { base: "#000000", tintOpacity: 0.2, iconOpacity: 0.55, textOpacity: 0.6 } : { base: "#ffffff", tintOpacity: 0.12, iconOpacity: 0.7, textOpacity: 0.75 };
  }
  function buildPlaceholder(width, height, label, theme) {
    const w = Math.max(1, Math.round(width));
    const h = Math.max(1, Math.round(height));
    const cx = w / 2;
    const cy = h / 2;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="100%" height="100%" fill="${theme.base}" fill-opacity="${theme.tintOpacity}"/><g fill="${theme.base}" fill-opacity="${theme.iconOpacity}"><rect x="${cx - 14}" y="${cy - 28}" width="9" height="34" rx="2"/><rect x="${cx + 5}" y="${cy - 28}" width="9" height="34" rx="2"/></g><text x="50%" y="${cy + 34}" font-family="sans-serif" font-size="14" fill="${theme.base}" fill-opacity="${theme.textOpacity}" text-anchor="middle">${label}</text></svg>`;
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }
  function freezeGif(img, label) {
    if (img.dataset.cya11yOrgSrc !== void 0) return;
    const renderW = img.clientWidth || img.naturalWidth || 0;
    const renderH = img.clientHeight || img.naturalHeight || 0;
    img.dataset.cya11yOrgSrc = img.src;
    try {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth || renderW || 1;
      canvas.height = img.naturalHeight || renderH || 1;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("no 2d context");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      img.src = canvas.toDataURL("image/png");
    } catch {
      img.src = buildPlaceholder(renderW || 200, renderH || 150, label, placeholderTheme(img));
    }
  }
  function restoreGif(img) {
    const orig = img.dataset.cya11yOrgSrc;
    if (orig === void 0) return;
    img.src = orig;
    delete img.dataset.cya11yOrgSrc;
  }
  function pauseVideo(video) {
    if (video.dataset.cya11yVideoPaused !== void 0) return;
    video.dataset.cya11yVideoPaused = "1";
    video.dataset.cya11yWasPlaying = video.paused ? "0" : "1";
    video.dataset.cya11yWasAutoplay = video.autoplay ? "1" : "0";
    video.dataset.cya11yWasLoop = video.loop ? "1" : "0";
    video.autoplay = false;
    video.loop = false;
    video.pause();
  }
  function restoreVideo(video) {
    if (video.dataset.cya11yVideoPaused === void 0) return;
    video.autoplay = video.dataset.cya11yWasAutoplay === "1";
    video.loop = video.dataset.cya11yWasLoop === "1";
    const wasPlaying = video.dataset.cya11yWasPlaying === "1";
    delete video.dataset.cya11yVideoPaused;
    delete video.dataset.cya11yWasPlaying;
    delete video.dataset.cya11yWasAutoplay;
    delete video.dataset.cya11yWasLoop;
    if (wasPlaying) {
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => {
      });
    }
  }
  function disableAnimatedImages(enable = false) {
    const label = t("Animation paused");
    document.querySelectorAll("img").forEach((img) => {
      if (img.closest("#cya11y-container")) return;
      if (enable) {
        if (isGif(img)) freezeGif(img, label);
      } else {
        restoreGif(img);
      }
    });
    document.querySelectorAll("video").forEach((video) => {
      if (video.closest("#cya11y-container")) return;
      if (enable) pauseVideo(video);
      else restoreVideo(video);
    });
  }

  // src/tools/stopAnimations.ts
  var stopAnimationsConfig = {
    id: "stop-animations",
    selector: `html`,
    childrenSelector: ["*"],
    styles: {
      "transition": "none",
      "animation-fill-mode": "forwards",
      "animation-iteration-count": "1",
      "animation-duration": ".01s"
    }
  };
  function stopAnimations(enable = false) {
    injectToolCSS({
      ...stopAnimationsConfig,
      enable
    });
    disableAnimatedImages(enable);
  }

  // src/tools/readableFont.ts
  var FONTS_BASE_FALLBACK = "https://cdn-cookieyes.com/widgets/fonts/";
  var fontsBase = window._cyA11yAssets?.fonts ?? FONTS_BASE_FALLBACK;
  var readableFontConfig = {
    id: "readable-font",
    selector: `html`,
    childrenSelector: [...ALL_ELEMENT_SELECTORS, ...TEXT_SELECTORS],
    styles: {
      "font-family": "OpenDyslexic3,Comic Sans MS,Arial,Helvetica,sans-serif"
    },
    css: `@font-face {font-family: OpenDyslexic3;src: url("${fontsBase}OpenDyslexic3-Regular.woff") format("woff"), url("${fontsBase}OpenDyslexic3-Regular.ttf") format("truetype");}`
  };
  function readableFont(enable = false) {
    injectToolCSS({
      ...readableFontConfig,
      enable
    });
  }

  // src/tools/bigCursor.ts
  var bigCursorConfig = {
    id: "big-cursor",
    selector: `body`,
    childrenSelector: ["*"],
    styles: {
      "cursor": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='98px' height='98px' viewBox='0 0 48 48'%3E%3Cpath fill='%23E0E0E0' d='M27.8 39.7c-.1 0-.2 0-.4-.1s-.4-.3-.6-.5l-3.7-8.6-4.5 4.2c-.1.2-.3.3-.6.3-.1 0-.3 0-.4-.1-.3-.1-.6-.5-.6-.9V12c0-.4.2-.8.6-.9.1-.1.3-.1.4-.1.2 0 .5.1.7.3l16 15c.3.3.4.7.3 1.1-.1.4-.5.6-.9.7l-6.3.6 3.9 8.5c.1.2.1.5 0 .8-.1.2-.3.5-.5.6l-2.9 1.3c-.2-.2-.4-.2-.5-.2z'/%3E%3Cpath fill='%23212121' d='m18 12 16 15-7.7.7 4.5 9.8-2.9 1.3-4.3-9.9L18 34V12m0-2c-.3 0-.5.1-.8.2-.7.3-1.2 1-1.2 1.8v22c0 .8.5 1.5 1.2 1.8.3.2.6.2.8.2.5 0 1-.2 1.4-.5l3.4-3.2 3.1 7.3c.2.5.6.9 1.1 1.1.2.1.5.1.7.1.3 0 .5-.1.8-.2l2.9-1.3c.5-.2.9-.6 1.1-1.1.2-.5.2-1.1 0-1.5l-3.3-7.2 4.9-.4c.8-.1 1.5-.6 1.7-1.3.3-.7.1-1.6-.5-2.1l-16-15c-.3-.5-.8-.7-1.3-.7z'/%3E%3C/svg%3E") 40 15, auto`
    }
  };
  function bigCursor(enable = false) {
    injectToolCSS({
      ...bigCursorConfig,
      enable
    });
  }

  // src/tools/highlightTitle.ts
  var highlightTitleConfig = {
    id: "highlight-title",
    selector: `html`,
    childrenSelector: HEADER_SELECTORS,
    styles: {
      "outline": "2px solid #0048ff",
      "outline-offset": "2px"
    }
  };
  function highlightTitle(enable = false) {
    injectToolCSS({
      ...highlightTitleConfig,
      enable
    });
  }

  // src/tools/readingGuide.html
  var readingGuide_default = '<div class="cya11y-rg cya11y-rg-top"></div><div class="cya11y-rg cya11y-rg-bottom" style=top:auto;bottom:0></div>';

  // src/tools/readingGuide.css
  var readingGuide_default2 = ".cya11y-rg{position:fixed;top:0;left:0;right:0;width:100%;height:0;pointer-events:none;background-color:#0009;z-index:1000000}\n";

  // src/tools/readingGuide.ts
  var MOVE_KEY = "__cya11y__onScrollReadableGuide";
  var RESIZE_KEY = "__cya11y__onResizeReadableGuide";
  var TOUCH_KEY = "__cya11y__onTouchReadableGuide";
  function isNoHoverDevice() {
    return window.matchMedia("(hover: none), (pointer: coarse)").matches;
  }
  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function readingGuide(enable = false) {
    let guide = document.querySelector(".cya11y-rg-container");
    if (enable) {
      if (!guide) {
        guide = document.createElement("div");
        guide.classList.add("cya11y-rg-container");
        guide.setAttribute("aria-hidden", "true");
        guide.innerHTML = `<style>${readingGuide_default2}</style>${readingGuide_default}`;
        const rgTop = guide.querySelector(".cya11y-rg-top");
        const rgBottom = guide.querySelector(".cya11y-rg-bottom");
        const bandHeight = () => clamp(Math.round(window.innerHeight * 0.18), 90, 220);
        const placeBand = (centreY) => {
          const vh = window.innerHeight;
          const half = bandHeight() / 2;
          const cy = clamp(centreY, half, vh - half);
          rgTop.style.height = `${clamp(cy - half, 0, vh)}px`;
          rgBottom.style.height = `${clamp(vh - cy - half, 0, vh)}px`;
        };
        if (isNoHoverDevice()) {
          let centreY = window.innerHeight / 2;
          placeBand(centreY);
          const onClick = (e) => {
            centreY = e.clientY;
            placeBand(centreY);
          };
          const onResize = () => placeBand(centreY);
          document.addEventListener("click", onClick, { passive: true });
          window.addEventListener("resize", onResize, { passive: true });
          window[TOUCH_KEY] = { onClick, onResize };
        } else {
          const clearAbove = 20;
          const clearBelow = 100;
          let lastY = window.innerHeight / 2;
          const place = (y) => {
            const vh = window.innerHeight;
            lastY = y;
            rgTop.style.height = `${clamp(y - clearAbove, 0, vh)}px`;
            rgBottom.style.height = `${clamp(vh - y - clearBelow, 0, vh)}px`;
          };
          place(lastY);
          window[MOVE_KEY] = (event) => place(event.clientY);
          document.addEventListener("mousemove", window[MOVE_KEY], { passive: true });
          window[RESIZE_KEY] = () => place(clamp(lastY, 0, window.innerHeight));
          window.addEventListener("resize", window[RESIZE_KEY], { passive: true });
        }
        document.body.appendChild(guide);
      }
    } else {
      guide?.remove();
      if (window[MOVE_KEY]) {
        document.removeEventListener("mousemove", window[MOVE_KEY]);
        delete window[MOVE_KEY];
      }
      const touch = window[TOUCH_KEY];
      if (touch) {
        document.removeEventListener("click", touch.onClick);
        window.removeEventListener("resize", touch.onResize);
        delete window[TOUCH_KEY];
      }
      if (window[RESIZE_KEY]) {
        window.removeEventListener("resize", window[RESIZE_KEY]);
        delete window[RESIZE_KEY];
      }
    }
  }

  // src/tools/highlightLinks.ts
  var highlightLinksConfig = {
    id: "highlight-links",
    selector: `html`,
    childrenSelector: LINKS_SELECTORS,
    styles: {
      "outline": "2px solid #0048ff",
      "outline-offset": "2px"
    }
  };
  function highlightLinks(enable = false) {
    injectToolCSS({
      ...highlightLinksConfig,
      enable
    });
  }

  // src/tools/adjustLetterSpacing.ts
  var adjustLetterSpacingConfig = {
    id: "letter-spacing",
    selector: `html`,
    childrenSelector: ALL_ELEMENT_SELECTORS,
    styles: {
      "letter-spacing": "2px"
    }
  };
  function adjustLetterSpacing(enable = false) {
    injectToolCSS({
      ...adjustLetterSpacingConfig,
      enable
    });
  }

  // src/tools/adjustLineHeight.ts
  var adjustLineHeightConfig = {
    id: "line-height",
    selector: `html`,
    childrenSelector: ALL_ELEMENT_SELECTORS,
    styles: {
      "line-height": "3"
    }
  };
  function adjustLineHeight(enable = false) {
    injectToolCSS({
      ...adjustLineHeightConfig,
      enable
    });
  }

  // src/tools/adjustFontWeight.ts
  var adjustFontWeightConfig = {
    id: "font-weight",
    selector: `html`,
    childrenSelector: ALL_ELEMENT_SELECTORS,
    styles: {
      "font-weight": "700"
    }
  };
  function adjustFontWeight(enable = false) {
    injectToolCSS({
      ...adjustFontWeightConfig,
      enable
    });
  }

  // src/tools/textAlign.ts
  function textAlign(value) {
    const direction = value || "left";
    const config = {
      id: "text-align",
      selector: `html`,
      childrenSelector: TEXT_SELECTORS,
      styles: {
        "text-align": direction
      }
    };
    injectToolCSS({
      ...config,
      enable: !!value
    });
  }

  // src/tools/pageRead.ts
  var READ_SELECTOR = "p, h1, h2, h3, h4, h5, h6, li, a, button, label, span, dd, dt, td, th, blockquote, figcaption";
  var SKIP_SELECTOR = '.cya11y-menu, .cya11y-widget, .cya11y-overlay, input, textarea, [contenteditable="true"]';
  var SELECTION_DEBOUNCE_MS = 300;
  var SELECTION_MIN_CHARS = 3;
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {
    }
    window.addEventListener("beforeunload", () => {
      try {
        window.speechSynthesis.cancel();
      } catch {
      }
    });
  }
  var mouseupHandler = null;
  var touchendHandler = null;
  var keyupHandler = null;
  var clickHandler = null;
  var focusHandler = null;
  var lastReadEl = null;
  var outlinedEl = null;
  var outlinedOriginalOutline = null;
  var outlinedOriginalOutlineOffset = null;
  var isEnabled = false;
  var chromeKeepalive = null;
  var totalChunks = 0;
  var finishedChunks = 0;
  var selectionDebounce = null;
  var lastSelectionText = "";
  function clearOutline() {
    if (outlinedEl) {
      if (outlinedOriginalOutline !== null) outlinedEl.style.outline = outlinedOriginalOutline;
      if (outlinedOriginalOutlineOffset !== null) outlinedEl.style.outlineOffset = outlinedOriginalOutlineOffset;
    }
    outlinedEl = null;
    outlinedOriginalOutline = null;
    outlinedOriginalOutlineOffset = null;
  }
  function applyOutline(el) {
    clearOutline();
    outlinedOriginalOutline = el.style.outline;
    outlinedOriginalOutlineOffset = el.style.outlineOffset;
    el.style.outline = "2px solid #1d4ed8";
    el.style.outlineOffset = "2px";
    outlinedEl = el;
  }
  function findReadable(target) {
    const semantic = target.closest(READ_SELECTOR);
    if (semantic) return semantic;
    let el = target;
    while (el && el !== document.body) {
      const text = (el.innerText || "").trim();
      if (text.length > 0 && text.length < 5e3) {
        const hasDirectText = Array.from(el.childNodes).some(
          (n) => n.nodeType === Node.TEXT_NODE && n.textContent && n.textContent.trim().length > 0
        );
        if (hasDirectText) return el;
      }
      el = el.parentElement;
    }
    return null;
  }
  function langFromElement(node) {
    if (!node) return null;
    let el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    while (el && el !== document.documentElement) {
      const lang = el.getAttribute && el.getAttribute("lang");
      if (lang && lang.trim()) return lang.toLowerCase().split("-")[0];
      el = el.parentElement;
    }
    return null;
  }
  function detectLangFromText(text) {
    if (/[\u3041-\u309F\u30A0-\u30FF]/.test(text)) return "ja";
    if (/[\uAC00-\uD7AF]/.test(text)) return "ko";
    if (/[\u4E00-\u9FFF]/.test(text)) return "zh";
    if (/[\u0900-\u097F]/.test(text)) return "hi";
    if (/[\u0D00-\u0D7F]/.test(text)) return "ml";
    if (/[\u0B80-\u0BFF]/.test(text)) return "ta";
    if (/[\u0C80-\u0CFF]/.test(text)) return "kn";
    if (/[\u0C00-\u0C7F]/.test(text)) return "te";
    if (/[\u0980-\u09FF]/.test(text)) return "bn";
    if (/[\u0A00-\u0A7F]/.test(text)) return "pa";
    if (/[\u0A80-\u0AFF]/.test(text)) return "gu";
    if (/[\u0B00-\u0B7F]/.test(text)) return "or";
    if (/[\u0D80-\u0DFF]/.test(text)) return "si";
    if (/[\u0E00-\u0E7F]/.test(text)) return "th";
    if (/[\u0E80-\u0EFF]/.test(text)) return "lo";
    if (/[\u1000-\u109F]/.test(text)) return "my";
    if (/[\u1780-\u17FF]/.test(text)) return "km";
    if (/[\u0F00-\u0FFF]/.test(text)) return "bo";
    if (/[\u1800-\u18AF]/.test(text)) return "mn";
    if (/[\u10A0-\u10FF]/.test(text)) return "ka";
    if (/[\u0530-\u058F]/.test(text)) return "hy";
    if (/[\u1200-\u137F]/.test(text)) return "am";
    if (/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(text)) return "ar";
    if (/[\u0590-\u05FF]/.test(text)) return "he";
    if (/[\u0400-\u04FF]/.test(text)) return "ru";
    if (/[\u0370-\u03FF]/.test(text)) return "el";
    return null;
  }
  function pickVoiceForText(text, anchor) {
    const elementLang = langFromElement(anchor);
    const scriptLang = elementLang ? null : detectLangFromText(text);
    const pageLang = (document.documentElement.lang || "").toLowerCase().split("-")[0];
    const targetLang = elementLang || scriptLang || pageLang || "en";
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return { voice: null, lang: targetLang };
    const voice = voices.find((v) => /google/i.test(v.name) && v.lang.toLowerCase().startsWith(targetLang)) || voices.find((v) => v.lang.toLowerCase().startsWith(targetLang)) || voices.find((v) => /google/i.test(v.name)) || voices.find((v) => v.default) || null;
    return { voice, lang: targetLang };
  }
  function chunkText(text) {
    const matches = text.match(/[^.!?\n]+(?:[.!?]+|\n+|$)/g);
    if (!matches) return [text];
    const out = [];
    for (const raw of matches) {
      const trimmed = raw.trim();
      if (!trimmed) continue;
      if (trimmed.length <= 220) {
        out.push(trimmed);
      } else {
        for (let i = 0; i < trimmed.length; i += 200) {
          out.push(trimmed.slice(i, i + 200));
        }
      }
    }
    return out.length ? out : [text];
  }
  function startKeepalive() {
    if (chromeKeepalive !== null) return;
    chromeKeepalive = window.setInterval(() => {
      const synth = window.speechSynthesis;
      if (!synth.speaking && !synth.pending) {
        stopKeepalive();
        return;
      }
      synth.pause();
      synth.resume();
    }, 1e4);
  }
  function stopKeepalive() {
    if (chromeKeepalive !== null) {
      clearInterval(chromeKeepalive);
      chromeKeepalive = null;
    }
  }
  function speakChunked(text, anchor = null) {
    const synth = window.speechSynthesis;
    synth.cancel();
    stopKeepalive();
    const chunks = chunkText(text);
    totalChunks = chunks.length;
    finishedChunks = 0;
    const { voice, lang } = pickVoiceForText(text, anchor);
    chunks.forEach((chunk) => {
      const u = new SpeechSynthesisUtterance(chunk);
      u.lang = lang;
      u.rate = 1;
      if (voice) u.voice = voice;
      u.onend = () => {
        finishedChunks += 1;
        if (finishedChunks >= totalChunks) {
          stopKeepalive();
          clearOutline();
        }
      };
      u.onerror = () => {
        finishedChunks += 1;
        if (finishedChunks >= totalChunks) {
          stopKeepalive();
          clearOutline();
        }
      };
      synth.speak(u);
    });
    if (chunks.length > 0) startKeepalive();
  }
  function isInsideSkippedZone(node) {
    if (!node) return false;
    const el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    if (!el) return false;
    return !!el.closest(SKIP_SELECTOR);
  }
  function readSelectionDebounced() {
    if (selectionDebounce !== null) clearTimeout(selectionDebounce);
    selectionDebounce = window.setTimeout(() => {
      selectionDebounce = null;
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return;
      if (isInsideSkippedZone(sel.anchorNode) || isInsideSkippedZone(sel.focusNode)) return;
      const text = sel.toString().trim();
      if (text.length < SELECTION_MIN_CHARS) return;
      if (text === lastSelectionText) return;
      lastSelectionText = text;
      clearOutline();
      speakChunked(text, sel.anchorNode);
    }, SELECTION_DEBOUNCE_MS);
  }
  function handleMouseup(_e) {
    readSelectionDebounced();
  }
  function handleTouchend(_e) {
    readSelectionDebounced();
  }
  function handleKeyup(e) {
    const isCmdA = (e.ctrlKey || e.metaKey) && (e.key === "a" || e.key === "A");
    const isShiftSel = e.shiftKey && (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Home" || e.key === "End");
    if (!isCmdA && !isShiftSel) return;
    readSelectionDebounced();
  }
  var INTERACTIVE_SELECTOR = 'a[href], button, input, select, textarea, summary, label, [role="button"], [role="link"], [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="tab"], [role="checkbox"], [role="radio"], [role="switch"], [role="option"]';
  function readReadableAt(target) {
    const el = findReadable(target);
    if (!el || el === lastReadEl) return;
    const text = (el.innerText || "").trim() || (el.getAttribute("aria-label") || el.getAttribute("title") || "").trim();
    if (text.length < 1) return;
    lastReadEl = el;
    lastSelectionText = "";
    applyOutline(el);
    speakChunked(text, el);
  }
  function handleFocus(e) {
    const target = e.target;
    if (!target || isInsideSkippedZone(target)) return;
    readReadableAt(target);
  }
  function handleClick(e) {
    const target = e.target;
    if (!target || isInsideSkippedZone(target)) return;
    if (target.closest(INTERACTIVE_SELECTOR)) return;
    const sel = window.getSelection();
    if (sel && !sel.isCollapsed && sel.toString().trim().length >= SELECTION_MIN_CHARS) return;
    readReadableAt(target);
  }
  function pageRead(enable = false) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (enable && !isEnabled) {
      mouseupHandler = handleMouseup;
      touchendHandler = handleTouchend;
      keyupHandler = handleKeyup;
      clickHandler = handleClick;
      focusHandler = handleFocus;
      document.addEventListener("mouseup", mouseupHandler);
      document.addEventListener("touchend", touchendHandler);
      document.addEventListener("keyup", keyupHandler);
      document.addEventListener("click", clickHandler);
      document.addEventListener("focusin", focusHandler);
      isEnabled = true;
    } else if (!enable && isEnabled) {
      if (mouseupHandler) document.removeEventListener("mouseup", mouseupHandler);
      if (touchendHandler) document.removeEventListener("touchend", touchendHandler);
      if (keyupHandler) document.removeEventListener("keyup", keyupHandler);
      if (clickHandler) document.removeEventListener("click", clickHandler);
      if (focusHandler) document.removeEventListener("focusin", focusHandler);
      mouseupHandler = null;
      touchendHandler = null;
      keyupHandler = null;
      clickHandler = null;
      focusHandler = null;
      if (selectionDebounce !== null) {
        clearTimeout(selectionDebounce);
        selectionDebounce = null;
      }
      lastReadEl = null;
      window.speechSynthesis.cancel();
      stopKeepalive();
      clearOutline();
      lastSelectionText = "";
      isEnabled = false;
    }
  }

  // src/tools/muteSounds.ts
  var originalMuted = /* @__PURE__ */ new WeakMap();
  var originalIframeSrc = /* @__PURE__ */ new WeakMap();
  var observer = null;
  var isEnabled2 = false;
  function muteEl(el) {
    if (!originalMuted.has(el)) {
      originalMuted.set(el, el.muted);
    }
    el.muted = true;
  }
  function unmuteEl(el) {
    if (originalMuted.has(el)) {
      el.muted = originalMuted.get(el);
      originalMuted.delete(el);
    }
  }
  function isYouTubeEmbed(src) {
    return /^https?:\/\/(www\.)?(youtube|youtube-nocookie)\.com\/embed\//i.test(src);
  }
  function isVimeoEmbed(src) {
    return /^https?:\/\/player\.vimeo\.com\/video\//i.test(src);
  }
  function postMessageMute(iframe) {
    const src = iframe.src || "";
    try {
      if (isYouTubeEmbed(src)) {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "mute", args: [] }),
          "*"
        );
      } else if (isVimeoEmbed(src)) {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ method: "setVolume", value: 0 }),
          "*"
        );
      }
    } catch {
    }
  }
  function postMessageUnmute(iframe) {
    const src = iframe.src || "";
    try {
      if (isYouTubeEmbed(src)) {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "unMute", args: [] }),
          "*"
        );
      } else if (isVimeoEmbed(src)) {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ method: "setVolume", value: 1 }),
          "*"
        );
      }
    } catch {
    }
  }
  function muteIframe(iframe) {
    const src = iframe.src;
    if (!src) return;
    postMessageMute(iframe);
    let url;
    try {
      url = new URL(src);
    } catch {
      return;
    }
    let needsReload = false;
    if (isYouTubeEmbed(src)) {
      if (url.searchParams.get("mute") !== "1") {
        url.searchParams.set("mute", "1");
        needsReload = true;
      }
      if (url.searchParams.get("enablejsapi") !== "1") {
        url.searchParams.set("enablejsapi", "1");
        needsReload = true;
      }
    } else if (isVimeoEmbed(src)) {
      if (url.searchParams.get("muted") !== "1") {
        url.searchParams.set("muted", "1");
        needsReload = true;
      }
    } else {
      return;
    }
    if (needsReload) {
      if (!originalIframeSrc.has(iframe)) {
        originalIframeSrc.set(iframe, src);
      }
      iframe.src = url.toString();
    }
  }
  function unmuteIframe(iframe) {
    if (originalIframeSrc.has(iframe)) {
      iframe.src = originalIframeSrc.get(iframe);
      originalIframeSrc.delete(iframe);
      return;
    }
    postMessageUnmute(iframe);
  }
  function muteAllExisting() {
    document.querySelectorAll("audio, video").forEach(muteEl);
    document.querySelectorAll("iframe").forEach(muteIframe);
  }
  function unmuteAllTracked() {
    document.querySelectorAll("audio, video").forEach(unmuteEl);
    document.querySelectorAll("iframe").forEach(unmuteIframe);
  }
  function startObserver() {
    if (observer) return;
    observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node instanceof HTMLMediaElement) {
            muteEl(node);
          } else if (node instanceof HTMLIFrameElement) {
            muteIframe(node);
          } else {
            node.querySelectorAll("audio, video").forEach(muteEl);
            node.querySelectorAll("iframe").forEach(muteIframe);
          }
        });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
  function stopObserver() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }
  function muteSounds(enable = false) {
    if (enable && !isEnabled2) {
      muteAllExisting();
      startObserver();
      isEnabled2 = true;
    } else if (!enable && isEnabled2) {
      stopObserver();
      unmuteAllTracked();
      isEnabled2 = false;
    }
  }

  // src/views/menu/renderTools.ts
  function renderTools() {
    const states = userSettings?.states;
    highlightTitle(states["highlight-title"]);
    highlightLinks(states["highlight-links"]);
    const fontSize = Number(states?.fontSize) || 1;
    adjustFontSize(fontSize);
    adjustLetterSpacing(states["letter-spacing"]);
    adjustLineHeight(states["line-height"]);
    adjustFontWeight(states["font-weight"]);
    readableFont(states["readable-font"]);
    readingGuide(states["readable-guide"]);
    stopAnimations(states["stop-animations"]);
    bigCursor(states["big-cursor"]);
    textAlign(states["text-align"] || false);
    pageRead(!!states["page-read"]);
    muteSounds(!!states["mute-sounds"]);
  }

  // src/enum/Filters.ts
  var FILTERS = {
    "dark-contrast": {
      styles: {
        "color": "#FFF",
        "fill": "#FFF",
        "background-color": "#181818"
      },
      // Every element gets the dark backdrop: any tag left out of a list
      // (Divi puts excerpt text bare inside <article> over a white <div>)
      // keeps its original light background under forced-white text.
      childrenSelector: [""],
      // Inline text elements would paint that backdrop over the previous
      // line's glyphs wherever line-height < the font's content box.
      backgroundResetSelectors: INLINE_TEXT_SELECTORS
    },
    "light-contrast": {
      styles: {
        "color": "#000",
        "fill": "#000",
        "background-color": "#FFF"
      },
      // Same universal-backdrop + inline-reset treatment as dark-contrast:
      // the inline overlap clips wrapped headings identically (white boxes
      // over black glyphs), and dark-themed sites need every container
      // whitened for the forced-black text to stay readable.
      childrenSelector: [""],
      backgroundResetSelectors: INLINE_TEXT_SELECTORS
    },
    // Colour filters run once, on <html>. A `filter` on any other element
    // makes it the containing block for its absolute/fixed descendants and a
    // stacking context, and nested filters compound (ALLY-169). The widget's
    // own UI is filtered along with the page — there is no way to exempt a
    // descendant of the root.
    "high-contrast": {
      styles: {
        "filter": "contrast(125%)"
      },
      applyToRoot: true
    },
    "high-saturation": {
      styles: {
        "filter": "saturate(200%)"
      },
      applyToRoot: true
    },
    "low-saturation": {
      styles: {
        "filter": "saturate(50%)"
      },
      applyToRoot: true
    },
    "monochrome": {
      styles: {
        "filter": "grayscale(100%)"
      },
      applyToRoot: true
    }
  };

  // src/tools/disableContrast.ts
  function disableContrast() {
    document.getElementById("cya11y-filter-style")?.remove();
    document.documentElement.classList.remove("cya11y-root-filter");
    document.body.classList.remove("cya11y-filter", "cya11y-dark-contrast");
  }

  // src/tools/enableContrast.ts
  function enableContrast(contrast) {
    const filter = FILTERS[contrast];
    if (!filter) {
      disableContrast();
      return;
    }
    const exclusions = ":not(#cya11y-container):not(#cya11y-container *):not(.cya11y-overlay):not(.cya11y-rg-container):not(.cya11y-rg-container *)";
    let css = generateCSSFromConfig({
      ...filter,
      selector: filter.applyToRoot ? "html.cya11y-root-filter" : `*${exclusions}`
    });
    if (filter.backgroundResetSelectors?.length) {
      css += generateCSSFromConfig({
        styles: { "background-color": "transparent" },
        selector: filter.backgroundResetSelectors.map((tag) => `${tag}${exclusions}`).join(",")
      });
    }
    addStylesheet({ css, id: "cya11y-filter-style" });
    document.documentElement.classList.toggle("cya11y-root-filter", !!filter.applyToRoot);
    document.body.classList.add("cya11y-filter");
    document.body.classList.toggle("cya11y-dark-contrast", contrast === "dark-contrast");
  }

  // src/views/menu/runAccessibility.ts
  function runAccessibility() {
    adjustFontSize(userSettings?.states?.fontSize);
    renderTools();
    enableContrast(userSettings?.states?.contrast);
  }

  // src/views/menu/menu.html
  var menu_default = '<div aria-labelledby=cya11y-menu-title aria-modal=true class=cya11y-menu id=cya11y-accessibility-menu role=dialog><div aria-atomic=true aria-live=polite class=cya11y-sr-only id=cya11y-menu-announcements></div><header class=cya11y-menu-header><div class=cya11y-menu-title-container><div aria-hidden=true class=cya11y-menu-title-icon><svg viewbox="0 0 28 28" fill=none height=28 width=28 xmlns=http://www.w3.org/2000/svg><path d="M14.1009 19.5167L14.0943 19.5102L14.064 19.5405L14.0705 19.547L14.1009 19.5167Z" fill=white /><path d="M13.957 7.7588C16.0735 7.7588 17.7899 6.04796 17.7899 3.93836V3.82044C17.7899 1.71084 16.0735 0 13.957 0C11.8406 0 10.1241 1.71084 10.1241 3.82044V3.93836C10.1241 6.04796 11.8406 7.7588 13.957 7.7588Z" fill=white /><path d="M2.65871 24.1362C2.19047 24.6548 2.23269 25.4551 2.7529 25.9216L4.7109 27.6775C5.22857 28.1417 6.02418 28.0998 6.49023 27.5837L13.3518 19.9865L9.54467 16.5091L2.65871 24.1362Z" fill=white /><path d="M25.5243 8.37116C26.0208 7.88495 26.0308 7.08893 25.5468 6.59033L23.715 4.70324C23.2281 4.20155 22.426 4.19133 21.9264 4.68046L13.9283 12.5108L9.55938 8.35834C9.05541 7.87934 8.25896 7.89812 7.77814 8.40036L5.98803 10.2702C5.5013 10.7786 5.52445 11.5869 6.03948 12.0666L14.0638 19.5407L14.0939 19.5107L14.1003 19.5171L17.0213 16.6164L14.4595 19.9438L20.8258 27.4911C21.2742 28.0228 22.0683 28.0914 22.6014 27.6445L24.618 25.954C25.1534 25.5052 25.2223 24.7068 24.7719 24.1729L17.8128 15.9239L25.5243 8.37116Z" fill=white /></svg></div><h2 class=cya11y-menu-title id=cya11y-menu-title><span class=cya11y-translate>Accessibility menu</span></h2></div><div class=cya11y-menu-actions style=gap:15px><button aria-label="Reset all accessibility settings to default" title="Reset all settings" class=cya11y-menu-reset role=button><svg viewbox="0 0 24 24" aria-hidden=true fill=none height=24 width=24 xmlns=http://www.w3.org/2000/svg><path d="M3.06006 13C3.30547 15.1939 4.34865 17.221 5.9912 18.696C7.63374 20.1709 9.76108 20.9907 11.9686 20.9994C14.1762 21.0081 16.3099 20.2052 17.9641 18.7434C19.6183 17.2815 20.6775 15.2627 20.9403 13.0708C21.2031 10.879 20.6511 8.66696 19.3894 6.85551C18.1276 5.04406 16.2441 3.75951 14.0971 3.24618C11.95 2.73284 9.68922 3.02652 7.74457 4.07135C5.79993 5.11619 4.30712 6.83931 3.55006 8.913" fill=none stroke=#FFFFFF stroke-linecap=round stroke-linejoin=round stroke-width=2 /><path d="M3 4.00098V9.00098H8" fill=none stroke=#FFFFFF stroke-linecap=round stroke-linejoin=round stroke-width=2 /></svg> <span class=cya11y-sr-only>Reset settings</span></button><button aria-label="Close accessibility menu" title="Close accessibility menu" class=cya11y-menu-close role=button><svg viewbox="0 0 14 14" aria-hidden=true fill=none height=14 width=14 xmlns=http://www.w3.org/2000/svg><path d="M13 1L1 13M1 1L13 13" stroke=#FFFFFF stroke-linecap=round stroke-linejoin=round stroke-width=2 /></svg> <span class=cya11y-sr-only>Close</span></button></div></header><main class=cya11y-menu-content><section aria-labelledby=cya11y-language-section class=cya11y-card><h2 class=cya11y-sr-only id=cya11y-language-section>Language Selection</h2><div id=cya11y-language-dropdown></div></section><section class="cya11y-card cya11y-profile-card" aria-labelledby=cya11y-profile-section><div class=cya11y-profile-title-container><div aria-hidden=true><svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill=#E9EAEC /><path d="M7 16C7 17.1819 7.23279 18.3522 7.68508 19.4442C8.13738 20.5361 8.80031 21.5282 9.63604 22.364C10.4718 23.1997 11.4639 23.8626 12.5558 24.3149C13.6478 24.7672 14.8181 25 16 25C17.1819 25 18.3522 24.7672 19.4442 24.3149C20.5361 23.8626 21.5282 23.1997 22.364 22.364C23.1997 21.5282 23.8626 20.5361 24.3149 19.4442C24.7672 18.3522 25 17.1819 25 16C25 14.8181 24.7672 13.6478 24.3149 12.5558C23.8626 11.4639 23.1997 10.4718 22.364 9.63604C21.5282 8.80031 20.5361 8.13738 19.4442 7.68508C18.3522 7.23279 17.1819 7 16 7C14.8181 7 13.6478 7.23279 12.5558 7.68508C11.4639 8.13738 10.4718 8.80031 9.63604 9.63604C8.80031 10.4718 8.13738 11.4639 7.68508 12.5558C7.23279 13.6478 7 14.8181 7 16Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M14 20.5L16 17.5M16 17.5L18 20.5M16 17.5V15.5M16 15.5L19 14.5M16 15.5L13 14.5" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M16 12C16.2761 12 16.5 11.7761 16.5 11.5C16.5 11.2239 16.2761 11 16 11C15.7239 11 15.5 11.2239 15.5 11.5C15.5 11.7761 15.7239 12 16 12Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg></div><button class="cya11y-card-title cya11y-profile-title" aria-controls=cya11y-profile-items aria-expanded=false id=cya11y-profile-section role=button>Accessibility Profiles</button><div aria-hidden=true class=cya11y-arrow><svg viewbox="0 0 24 24" fill=none height=24 width=24 xmlns=http://www.w3.org/2000/svg><path d="M18 9L12 15L6 9" stroke=black stroke-linecap=round stroke-linejoin=round stroke-width=2 /></svg></div></div><div class="cya11y-profile-items profiles" aria-labelledby=cya11y-profile-section id=cya11y-profile-items role=region></div></section><section aria-labelledby=cya11y-content-section class=cya11y-card><h2 class=cya11y-card-title id=cya11y-content-section>Text and Reading</h2><div class="cya11y-items content" aria-labelledby=cya11y-content-section role=group></div></section><section aria-labelledby=cya11y-color-section class=cya11y-card><h2 class=cya11y-card-title id=cya11y-color-section>Color and Contrast</h2><div class="cya11y-items contrast" aria-labelledby=cya11y-color-section role=group></div></section><section aria-labelledby=cya11y-navigation-section class=cya11y-card><h2 class=cya11y-card-title id=cya11y-navigation-section>Navigation and Interaction</h2><div class="cya11y-items tools" aria-labelledby=cya11y-navigation-section role=group></div></section><section class=cya11y-card><div class=cya11y-menu-reset-footer><button aria-label="Reset all accessibility settings to default" class="cya11y-menu-reset cya11y-menu-reset-footer-btn" title="Reset all settings" type=button><svg viewbox="0 0 24 24" aria-hidden=true fill=none height=20 width=20 xmlns=http://www.w3.org/2000/svg><path d="M3.06006 13C3.30547 15.1939 4.34865 17.221 5.9912 18.696C7.63374 20.1709 9.76108 20.9907 11.9686 20.9994C14.1762 21.0081 16.3099 20.2052 17.9641 18.7434C19.6183 17.2815 20.6775 15.2627 20.9403 13.0708C21.2031 10.879 20.6511 8.66696 19.3894 6.85551C18.1276 5.04406 16.2441 3.75951 14.0971 3.24618C11.95 2.73284 9.68922 3.02652 7.74457 4.07135C5.79993 5.11619 4.30712 6.83931 3.55006 8.913" stroke=#FFFFFF stroke-linecap=round stroke-linejoin=round stroke-width=2 /><path d="M3 4.00098V9.00098H8" fill=none stroke=#FFFFFF stroke-linecap=round stroke-linejoin=round stroke-width=2 /></svg> <span class=cya11y-translate>Reset all settings</span></button></div></section></main><footer class=cya11y-footer><a aria-label="Accessibility statement" class="cya11y-footer-statement-link cya11y-accessibility-statement-link" rel="noopener noreferrer" href=# target=_blank> <span class=cya11y-translate>Accessibility statement</span> <span aria-hidden=true class=cya11y-statement-external-icon> <svg viewbox="0 0 16 16" fill=none height=16 width=16 xmlns=http://www.w3.org/2000/svg><path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M14 6V2H10M14 2L6.66667 9.33333" stroke=currentColor stroke-linecap=round stroke-linejoin=round /></svg> </span> </a><a aria-label="Visit AccessiYes website (opens in new window)" href="https://www.accessiyes.com/?utm_source=widget_link&utm_medium=widget_footer_link&utm_campaign=powered_by_ay" class=cya11y-footer-brand rel=noopener target=_blank> <img alt="AccessiYes by CookieYes" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAABJCAYAAADPCZHEAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAIQdJREFUeAHtXQmUHMV5/rt3V0iYYzGHJStGvQhhYQysjOPgk1mwnRebmBVggp0ErZDgESegle3YL8+OtXKck9hIOD6IAI1wXkwCktZHXoKN0eDENr7QEozANooGA2ZBAkZclnZ3pvN/XfVvV1d3z/TMHhLa/t6r7Znqqr+r/qq//qOqZx1qAZ7X3fnCCyOrHIf6fJ88IqfC2UN8Xbtnz89KlCNHjqbhUJOYO7fbq1ZHtikhTMTAnj071lKOHDmaQlszhaER9+8f+UEdQQQKhx9+3N6XXtpzD+XIkSMz3GYKv/jiaG8DQdRw1lCOHNkBpRBYaVdeeeXhOs+hJpXFyx1NCSML4rKMRTuPP/60bsqRozEgdNUHH3zwDb7vP3vDDTdU+Prkhg0bFiOfWnClXq5oShgdx/eylvV9p5MODJwW7+U4QLjjjjtOWLx48U9GR0eP4q8dIyMjx61cuXLH9ddfj+9+SrVDbizbmynMAlZJ501jzL1ql+eM1VYFtNrd9cNf7irT5AIDhAYeTdG+If9FTvtpIh3IMRXwH3300SvxoaOjI1AOs2bNclkw6ZJLLll2zTXXFHGLQuHLOpYY/zFOJ5DSsIJZnJ7TNA4qNKUZue9fy1KKtzzK9hYHBJFGaxyF9fuR8DnIm1xgoF7FCVste4y0m9PjnGrUdJ9zTDVOPfXUh2q1Gt15553QklStVn0WTNqxY8e9fPvDnJ6m6Fg+SY3HEoL4Hl3WrPtrigrnQYOmVP3cuYu9sbG27SyUjUxQ3m/cMTBeTwsi1/Osx5epw+2ZZA35SU5/ZeVhBUVfX89pB+Xa8WBCW1dX13EvvPDC8O7du4MMh1fzPXv23H/ssceeQWrcnuc0m6IBnQ9y+moKTQgphLXM6TUUFdqrOf0ThVbUQYOm7W4OzPBGv7+xDsnSnj0P9Mi3dEEcL1+eXXWXlItdFZoYZACgAedRct9u4ZQ1CJVj+vAAp8UshIHQtLe3E5upP+CPb9H3l3O6mcJFFeOM+XIsheNuAmXexOkeCjUori9xOpJCE/agQtMm2+7dDxTb22tdELroneAUztrmBBHwvX0d1V6aHLyW06specXDYFxEqs/N9rtRUKiZRW0yaU02nCbzmymX1jfk8XzikASH65HGxsYwVmeT8hWhDbH476VwXFHnlZx+l+Jj7eq8m/TVNa4rdJmxlHZMJurxMvFe3QCO17+rc99zo700q6NkmpLDww/hc48yW9s9jrJWWEiHzLrZBFHD98s0cWAA+/XnJGFD3is4ncOpRNngGrQR2Xsdp5NIra76CCD93CjrU/3oH8rAX0EQ4VROJ3M6jtMLnB7mdB+nfdZzG9HC5xM1vfk6r8zpF6T8I6CN0v2kNt1mPAv8OY3Tb+l2QQDu1bTq0ZEJBhoQICyKr9EJ/QGPwKv9FOeTr+mfAfM0IMYakn3GBziqOmo8A9pxC4XaEdd/5rSA4trxNJ1qRtmnOP17Qh9MXpKmt1jzYDJ4iTE5nlTQ6F4K50s9OlFAmOau2Llr7oqH/XkrHn52/hW/yLxvaNZtmFb+coAmDpm8z1I40OgozJJR/Vnyv52RZoe+QtPeSYrBfkJCVO4GUj4NkLTASR6E8AucfpNCC+0skRJSsw12X2VlhW+8N4UWUpnT7+uybRRfkYU+xhYLwVgKHfD1z1PoSHsO4/RvpPy7tL59ndMciyfuwoULT1i0aNH4GM2ZM8fft2/fk9YzgKcpHEu5voGikVbgv63n4noBxWHy8lOkBCaNl4+QsqySeAAIL0/nxHGVVF5iEf+LJDqJ6jJJq3HBCqflv77p5EGqg/lX7OrmyNg2v3GQh4n6a4dvXDRAEwf6cRanH1O4cgKXcrqKU0F/h0BhcI4hJRBpmgeMhRBfy+mjFDWPbJhRvQKnuynqk8jnd3L6FoUaJMlcMdv+OU4fMdpCFGqABZweIrUA1Isqyr37SfGnRuGiIu36E05fpGx9/BWphUL4KGWxYD1KoRZqxCe05V4ytCTjmXvvvfcY1oZ09tln0/79+4dnz549z6gPmu/m9F8GLdTdrukJ7bkUjZzj+qRuo6mN5B40IIJ6R1I2XoLvZ1B0gRdemr6ttDmNDjRtl6ZTTSzc2Lxs6xu+qWtT0p0DJIiCb3A6X3+WDmNglnL6klX2jzn9SwodYSxW+Uv0Z1nF7YlmfgdDMdhv5/Q/FDXdsCoPGmWSYNKSZ0LjXqXryMKxkNMvNS1Z2ZMEwJyMuIfF5wiKmmRv1W2FsHdQ8mS06TxGyiwWkwz39hufBWkLjfQNW1B75B6Eka/j84aFcviwww4zhVHagOfPM77jigVil/6+lVOv9UwshHdR1IVAPQjiIxTlZRYeoL9H6XoyLm8kpQykf43oAE+ZfYkJ47yVO7czY+qapI7vr37i5kXrzLwDKIgSkMFkE7UPpmNwMHFxAKBCUV/jf0mZZravIff7SAUNhLFyBfOhZbDynkmhXyECJuVwvnJE04LfVKboIEm74SfuJOVXvJ7CldY1yveQMl2lrSP6swioCD0m2w90f6FBTjHaJpNQtIj0Cf2YS6GAtmnefJ6Ur3ee5oU5iXDFInWbpvn3nD5G0Ugn3IO1nJ4gtfrDxD3KooOJiyANzZ8//5SBgYGfP/mkskwrlQpdffXVwwsWLDCFUcbnbZy+S1HtuE23FRbPM9ZzfqXbYI61aEi0c5bBI+F9SfPyCM3L11J0nFEOEeDTDbqYbydavMRcuV7zskAqgGTz8jJOX5HORcB+HIh61Ai+MzB888K1ATMPrEYE4Bd93crDBLlWf4Y/dIb+LExANG4vxYVRBMFmGib7e0kxVoDwOQYNg2NqvCIpkwUIwvYUrpLiNyDgYvpFJ+h2vorCccGz9+g8AD7iJym6sGDyLSLl15kQrWev1O8g5VOB5jBFV3CYgL9n0AYg1D+3aMOsO01/xoJyktFm8AfzYL9VBxroRKNfeCYWDvhp2Pu73ix8yy23DF922WW2MMp4wDJYSFFNdrTmzzW6rPAIAv8jigfW/pLTpym6iCCQBi272yoLGhhnm5fvIhVPwBbLHopaKFgwzrHoeKSE1iyHvpwinYvCD1a0xnD8gbmX71xzgAVROjRg5AnTixSaHtca96XPKynuM6Lun1rlUB9+AlbeUQqfifsYZGgu2/TsI6UdsSK/zqIPQBB2UzTwgOCEOanlGRDSgv6+mkJtKFdotr0UHUu053uktEi7QQvP/5z+PtvIF9xj5eGKSCKikM/pNiO90ihzmNVmLA779XNFa6PsMp2/W/cVE1sCVc+ThaOOOooSYGpm26T8MqmDADKmEqX9ISWbzx+lKC+F109TnJfgy+9QlJeo81kKeWDSBn5k1Jc6ZVLuEforvITcdNiVx8ERzoLju1uzCJjD+4sHUCOi/TBNwEDTbHmQ1Mot/YNgPEdRPw5aYT7FTVVogVOs58Ak/RnFhVfMnTdZ9xAMgFZaw+kTVh0sdgMU1T5kfIdAHk+hX4eBwmoKAR6i6Kr6GVIrvE3LpGdaOviOBeVo3XaJfJoWQIFUEEpotFMYQErq+09Imb5ktA0++ocMGsJzSmljHym3YByDg4PDvb298xLqSFsRAOrWNMQstK0Z3L+f4tYPzMv7KMpLCNZHKRnSTsyrxTpPaL5CP2svhW6SPB/7oN8yaOB+0h5nwMvEfUYWmhJrvJ5qrbY1PZCjkEkQXVo+vGFRkSYfYNAHxp+igE5fZ9wHsP2AFfLNRhlE12A2PWbQa9d55iDBr0gSREAc/x9RMs5LyLuV4guAtBX5/6eTjUuNtgtA430Ursw2YDqZWgd14SNhEYKvCh9yCUX91BIp8xnaENtAMLf2Ws+WLQMAsYOvUDgBJUIL/wgm3BZN51cJNHxqHqLNMO4P6e+m9hFg4bqP4tYfnvlWqy0AtDbckMMpGQi2vGR8F7pdpIQUi9LZFOXlHaR4uZkUL75DSimYzx7nZaJmFMzt48hqW8aN+zQEgnhykSYfpv9wEkVXRKz8suoD6CcibFssGhDaDxvfYX7toShfMIkWUGtA3ddYedDkrRz9w/7kh4zvEgHNAjuyh8gfNAsCFOjvLKuMHZ2F34tAzVcoqumE5/Cnzm5A49e6PjQQzDNz+6ePsmtGMp4LU/zNFF+gcB+WkQirDYx7v/F9IryEK/B9Umb/MxTfbrL5AMGF27SRLKvBpToYLnaVqer2EA50t4KpE0QBJvrJkScSfZPCzVsBPmNrwVzZwIDlRj0gaTP3JWodti+JZ45Sa5hjfW/m9Td7nDFhwBMELLA4bKf6cwF+7y2keOFRVBDRDgjE9XVo4FnwbT9OSsNAc5pbRs1Cnv8HlGwCw1LZUae+zcusgkgU76NYJdCsUAI/pfq8RGT2ZlJRcSiRccFtyAwIJGvInqY15NQLIjpx1fjTokBUzWY4VmNogRONOjCxZQMa2E/xlW8iL0mPWN9d3S5M6mZNtGcS8rB10OzrQOjPsPEdfcYpFpiuV5AKgizS98xwPwANChP6eKM9IlR4TxVbGDilgkDTmbq8wDXKf1HX+TxNDHAxYP6903rOH1GyKyCweYlyT1Hzh8cRZYLGl7HEWMDqgAvUR2qxF2Vh8xILNSLR4DvGMdvKJALptNUQ1Km/B0nqBWS/ra1EUwdh9HKKCg+YcT6Fm/9JMM0GfMZqLdE5aAoIyiuMMjijCQHaR8kCVG/QwWzPyoOP8XRK+XpvE9jbC2gftiHuo+ZhmlBykgZ7jgM6YYUvkNoeeguFE0n247A1cqpBT9oMrf9VnaBtYCpiq+EPSQnmiL6iPDQptO1eag3C890J916i9DEBfmZ9Bz9wOKSVH1GTiL3JSwjo3+gEgX0HqXn2NooKJdoIXi4UQg2BLQxya8sOY5OVhW0orZwWxJKP1XdqXh4WoDOIatmvSmX5ASPHogPBFVMDzLnfKgMBOY+ST7nInhPejxPm/zWpSYaI6jcpDjleZ/NeIm3YWrnWoIfIJPyxbxltFnzaqEsJbQNghh6lE9r0Sp2PRQZWAkx9HF4QvxsJ/jZeJEegA5r0cYq2d7GmBXO3i8JD4fCtjzD6grlyOSn+bqBQU0rb3kcTR5KJWW8eYAy/rz+bArtGX5NkIo2Xx2h64KnJy4UU8hILPObB23WdRygabDxJ02kMCOL4oW4IJfJW/KJoH/iet2Lns69e8XBvNH/nrikUyE0UPYCbdjA3KY1Y399j0P2AzqtRuNrhdI+592ZeP55AXza8jzNomFc5gOBYtE5Paa9stTxLyQelAXMCyucfG32R/shB+WLCcz5otUfad35C2fkp7d2u67QbNNCejoSyn9Jl+ux7HMB5grLhtgS6J9YpL32DWWqOMa5n63tJvLyHorxEKul7NyS04QqrvgRr3p1Q9iSzYYkIhI8398cz+PO8lb+8bvimU/qY6vrxbNaILmvNGjnXRSn4njNa3d7MGx8ZIG2GbyJaQkwomAPnkvIhkhJWevgz5mqKuuYpephYpk8HBmJlR1Dot0lNMlfnYQP97ygMyshKK/tV8FFLFBVgLBowLRH6n6OfiXxEe3EUzfYBMQnkFaaVFI0ag9ZPdV2zHvqH0zRvpHArQO4v09frrTbjimjn6RTdOMdz1lHcRMd2EayIlwzaqIex/giFpqtM9r+lOHbR9EP6Bl6aUWG0F1HhiynOy/8gtelv8hLXPn21eYn7eL3rTIOWWFZfoOi8BYLtjtStjZggRlGcXW1bva99rN/x3VUQxKpbuyCtPD+k4lNbf9oB8xYAlf9d4zs69T2d3whihs2m6MSGeSWvNsFPMo+SmXY+BA8TEPtRHQll4C/AXBH/apama55tNM+MPk/heVazjLQLR62wFSKTQDae5b7UgTn0mC63kOJnalEGZu8njH4jGOPp5zlGeQjZj3UeIpZzKOrnYKtDtDuCNv9g1JVtAvAB5iCCRbA8TjLuSVmYwPAZ+6i5rQ0T0IwXW3kLKNzXTIIcWIAW76Z0XpJu9yyK81LeqhGeYBtFLBiTl/BPf6LrITZhvh2C605KPQ5HDQUR6NvP0dXZY+3rnrhp4THV9rHOeuUDH5KqbNruWkaTgwGKrtTo/GeyVQ0YgDc8bHPzUgqZBMHGPpT4hI5RDpPpaAq1qwiiAIIigw3AZD2VwhMiosWl3fA/ZKPZfDkVz+uhMPInkwAHyh+lcDUXWkfoZ7+WQhOx3SgDn/MTFH07A7R+Q6GGkHrQjpeTCpCZPyos9d6rrygP//Y7xrPEHIUgQUj+jMIQvimICA61GryZKKq6DTjwgAUpjZdIpp8rZbZR+Hqb8ARaEIu0yUvwATzuI2UJHUnhoiYHRt6lr3FhzCCIASBgo3pVdWpuRjOUBVL7nRMAVulzKarqwSRMiCwBKTDrs0ZduX7M+Awmwwx/H8UDPjbE/ECQA4NomrgyUFg1PVKnMSTyVo8WBgomcYmib3rIFT7RZoovBDYt0mUGSB3NMt+NBORQ90MUHiVMoyftxlbQozpPBAsuwJco6ic6KfVFgK+lOvt78tZ/BmQuaEEWN1gRt1J9XgpQBgG6cyl6TNCn8Jgh9jfdDLTER31EMiKTd+7lD2/MIojBIQA2TR8vdgWR1SduXriOSS+nLNAHzKl1wGzCJILpBq0B3wWmirxp0bAFpEwwmCHPaRoIjHSR2h+SjXkw+xsUTubHKL7tgAHF9gX2tWCa7qf4JrSsgI9q+tDAODU0ktA2bHl8mtQKCtPGPsso/hfyoXWwcv8nxQ851DStfyQ1QdZS/IypaGlcobkxwX6qy9gTCfzB3iC2fLZT9P1KEUicDvI4/SupsbF9X/AGGgWaGwufuTCAFsb0GZ0qtVot6++a4jkvGHXB1ywCKrxE2xG0Aw8w3s9RdPzwGYso/GZETT9JoYY3aQnPsJ1TIOXrj1J8ToI+/EmM8Q/JWGzHG60EMVCnDaAEMTidYwHRVJ+cjZnOqxqvYDWJtH092cfKAltDCIQxQt8+5Aw/s1M/C2UxSC9SaMY22oA3zVfUR0h7DoV+rOw/NtJSSWUgdOKPPE/hmdQstEwTGu06gsItCmj63Rlo2feO1DQQ6BrRNOStF5OnJk9sNBrTtHE095GzoB4vIejPpZRLgu2OCB/AV/DyqTRaQaMnQxAFzbxS5Tj+uiduXLSaXh4QMytr/nTRmkxM9fMPdP+mE0331Z13+c7rJksQgcc3dA35VXcJZTjP6vtOP7ZK6OWBRr7ZgaI1mZjq588UQQSa7qvrO35/42LZBFHQzAFzCCTlyJEjsFtL9Ys0J4iC7ALZ4hshOQ4FtBoJnQ6Yp3DMra16sMs19VaKS9W25ekC0ZogCkQg08+zOlpgc8wwTEQInYx5E6VdPeusszo8BoVR5yyo0Snnz6fFl6JeU2+BqABOwkvEvM8z5I+5S1sVRBNe365OHBIw3/iQI3SyPZIjx0xHuLVhCqRDpdljbUsn4Z/RRDBvxcPreIlZlQtijhxxxNQ7tNhkC+F00s/x8kahUGDryV1DwdaYO1gqfWc9TSP4+R6LxbZorrua2zFIU4yD2YHOMcOgBQEnfIw9amdtqXTXAE0TCoUeOTwuKJdK27poGtDqb5DkmAaoydnWrbQEXtx2eWJ8+6A27bnNBW6nF+bUuM2lUrba6GvNOiziL6Po7+JOGQqFc/so9ksWbdmOeU4CZpQwXnjxygGq1cpbttxcpIMUPJdhnq3iSYH9187oq4U1rNxlCv43Zo01RqlMBx2cPi1A8r1Emf8FX7WSYKyVadrgr4l+d4ql0p0lmiZk2Ts5JNDb29dJvr+Go8Tn0EEK5S/BTAsO66cdJ/T4fh/8mkLhvF46hKA0qG+eV8b3adFMzHv8oJYXza21cna6ZcwYYWxvbw/MD99xWvkBpymHFkQEDryMVbhcbWuh8M4CHUJgeRxgH43Vo9/F157p0P7aV7VOgkErTq/lMWPM1Jp2yl31I0kHFfRkwL8yS9KGZZ08ShTUKgtkgSduqZJO2+01aHO5tlJW31Obzb3RZ7uliZhvyjezURtiokNK26uXDLjceH6r7VLlonyNC1kQvfWMjLKtFdWiV+s2aKFMKYvAxuviEEx1yK47Y4TRcfxzfHa7xsbGDsIASGwyAGWYaGbwQwVHnI0UFUpMSqzqA2ZlrWlxCL8QP7M8Bt+zpOmXKQF6sq9RJrH9Bk51jfZdEeksUhNgumu0GW6iTOpXDRg1tNkLb7kQiiGrXdqnztSubnurgoWctyruWqfpeaqPJvz1whclSFVuc7VAMTigVUzz33VdHq+qZ9GXumwF3DUu9DPGTGXViIGrDA4WAw1y8cUrCxddtGLrhRddvguJP2/nAM91l156lWdXvfDCy9fw/W2oU+8Rvb1XeaDJaSM1Bb9gZZQ5r8eOQmqfCpPW0oL+KvMbT7BlegIWKB18z9mlylo3xrcYJIiUCC7jb+QJlfmtG013wMqu6L6WM9TvVP1q6FOjXUEwRvNwU7SIv0ZrTFILTgSI/oqgMm+qDfgo/jv6ZrYVGr7awO3wB0z+zRhh5LWogCN+WmC21Xx/G6vLTodNNsdtGwp+p8f3+0dGR7e9//1XRMPbrrsX9WvR/acYXHdkma9+qe1rlBFK29kD5qdGSlW+32WlJQY9D/4OZf4ldKeotGgkrwnf1e/nCdXfqFQoSLH6q7P7Zi4mbne2spjoEuCKaeLAmlC8j2nFtbq9nuZjFnjazTBQsxcpLKBlii+k/eL3zwhhHBcu36+4baPbWKjuq1Wrx2y+/caezZs3LN9824alWzbf1MXCiYHw8N+3guirhviZvh/TYOOAkHP9AY48FDdvvmmQsiNpcpXqVYB/iAlspvCue10yPX+1SklbBeFPbGp/zrMKYMthva6/KV7f1DRpCDSQZz0Xi06RMiBZcIJ+9egFCVHXcvS2EgjNH1s7rtImv4mhsD0xjVlRgjq++Nl86BZfWPPCs563RB0eCOparlItWDRmhM9Yq9U8XAOtxQK39fYbB5LKbeH8pRet8Figlrnt7X2kfveEbr/9xtKFF62oOPH/RDsOFvJg8Do6qk2Gw91O26drNYqn/Z/eaK4zyH7JUqNMUWuo7mjVgqe1rm22lpUZua1sFObPjjlZoWn6SPMr3q5gM70/oV0DlBnuMotPOBnTY3wv6naZ2teD1lFBHTzfuYBCiyEW2OEyS1V7IUwxjbnaWjj62D9dQBETNuBdkepYJeAx01+ug08atTL+zghh5O2MblZrFGitFEEUtDlOkU3YZY7vn2nmc12YsgX4lLfe+uWyeS/QijTaB0G/9dZimQ4YghMsVl40KgitypNhdcL5ywKpiVSI5jslUxA1DTYBe+CnGpMusBqShNGLb6YHkcgm9w9j/+OlnByVtYNVQRSzpPu93lpEDGArY7yfCdaKmxQFrljPC+opgeuBOWoe69ulgmYOuzAua+A7B+wnzAhh5EjqmYikVl234aFjjraW3bb4v2pggb6bBbowUg2iakXzHkxfvpRrY2PrqGnUYqdOsDKnbVXUR/yfEiVtC1Dy9o5nByF0+9L8X9AoGN8XpJTzrO8SsGm2f7a2KSQEvhrVw/hYi4jAXLRwnM8Waj9LUM5cnFYnmMEF1eaqPknlrjMPws+MAI7vePy3PHjbhqFGRTs6OgKG1qwf2HW1H+fXapEJz5HWPsKE8/21EqltDm3leF57xiBFa2hN0CcNFWrtn8VOGKrfQYCmHE3O+lZdgzrPKmqzN23OeTzL1uFguvjbh7xmRCCGAy/dfsYIp/iXHHktm/nYn4TGdMk6TucEZs8EzrtWS/HzmNjXSg/i6DcLbH8HgYFyvKz4gpG8QgLZFCExD31H4CXUpxS6QGdYL4g89tDEwAEUv9i4mF82v+ltiwYWjFNJ0IwQrKYWEX7WIF8GdbS6wLw8R2tzc+y6ZZ/4kNeMcgzOVT/E2xA8BHDyaVb72KCZD60X/PoBm4ISacX+I1+8WR3VlieW1lIlK7sg+2RWZifnw/RBn7wwOSVFp1aKP8FdlZC3LJ5X0zRsgfZX2ZHS5HOcbMYnoyKBkSiJ7PuTGjb9BSUL6llYPMzUihauJmiz9kr8ebFnBSgEOLdPEmfB7ViHQBr7pceoyLQJ5V4c8pox3Bt0Gpp+EohhoSslBWI4sHM367BuCDiXLZPDZdl/nHjQBmF5Z5eVhyBJH6KOpH4CfkHyaZigZYG/owMHJYpG+LAPiGjnJlUXET874hpsdOsJ6G+yghweDgDwnt1qpTFq5yTs26ENRUoBJi63YX30cELQrkfkJExjQAs65iKiF6zaehWcCU67bLX4U7a3TgrhKSaTduTQQTIfqxsLhXctxTFC43RSf5TO+K/q81zzjcXGQfBoifEMW9jxo8mHvs/IJqoXXHn1qXeCpre3v1MHYqijfSwx0scR1oCJEPDWtzLi0FsKST/m7KkBx8CmnYZxrAMCfkJ7IMQ4DVLbmiCIdh0IRzneDtStbksWxCw+V20gTte/Ln7gIBla85Ws+gP87GdZcHx92sU23dPGxrNSAmJ1udzYdvUs59kEQTQFv2jd61SndM7dqiwb37IKlEt0yAujq/47UIU5uIk128ak424QUrftefhhHvnu8jRNx/5kYLqyUGKFxlbGpsnaylC+jN+kYEMIont1atI2Qye68a6DHM34R0Na0OrCoGs/f2tyFDcJSRv7qdhUynigIAlN8jHSN91Xe3H11EIY7F92Rusqy+bQ14ysxQJfr1oNVrKR0VGcQ92Gc6g4Q4ozqcHROGYQm5xLt2zZUEyjpaOlZV+ZvuUtDfYsmwX279SJkoYTrkzBIe+7+uvQWd2ATkVtZMc33pXJmhwQiiI4lZN5m0LTTZikgUB2Zqhf1vwZqlMsiJiyb9ZHE4Tmo0RfU4tpHgxZdddlHINxE/mQ9hkRaFFBl9rXIEj8fYk+WbOM7dc+FqqKjpquxR5hlq0Jx+XN/5rayqApgDbHupRv43IKfEVPmzK83VIb1GUa0eGweQGaHHQuCH2pgM7dmk6lTv2y0Q6s6GeG9Wt4J7TIEz6hvj+InwcxMioJ7SJ18ihSz6NAyPz10XvRoJRu15L67aq7OCQFzOrxYUCdWjL5CN8Zfnz9sag/BvG2OpQjMxDgYV9xl+O6gzjPSjlyTCJmzitUk4DxoE3b6MvlP2fleBkhF8aM0G9+TNJWRo4cceTCmBF4rYov5cnYysiRIwn576ZmgHH+dHmuFXNMFfIATgPooE1wGCB4ATlHjilCrhkbYl9lVsfsnn379mXdBM+RI0eOHDly5MiRI0eOHDly5MiRI8ehiP8HZVbUO4MWe9EAAAAASUVORK5CYII=" class=cya11y-footer-logo height=25 width=76> </a></footer></div><div aria-hidden=true class=cya11y-overlay></div>';

  // src/core/entitlement.ts
  function applyBrandingState() {
    const footer = document.querySelector("#cya11y-container")?.shadowRoot?.querySelector(".cya11y-footer");
    if (!footer) return;
    const brand = footer.querySelector(".cya11y-footer-brand");
    const statement = footer.querySelector(".cya11y-accessibility-statement-link");
    const hideBrand = false;
    if (brand) brand.style.display = hideBrand ? "none" : "";
    const statementVisible = !!statement && statement.style.display !== "none";
    footer.style.display = hideBrand && !statementVisible ? "none" : "";
  }

  // src/views/statement/renderStatement.ts
  function getTemplateData(lang) {
    const templates = window._cyA11yStatementTemplates;
    if (!templates) return null;
    if (templates[lang]) return templates[lang];
    const base = lang.split("-")[0];
    if (base !== lang && templates[base]) return templates[base];
    return templates["en"] ?? null;
  }
  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function formatDate(isoDate, locale) {
    if (!isoDate) return "";
    try {
      return new Date(isoDate).toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    } catch {
      return isoDate;
    }
  }
  function renderStatement() {
    const formData = pluginConfig.modules?.statement?.formData;
    const generatedDate = pluginConfig.modules?.statement?.generatedDate ?? "";
    if (!formData) {
      return "";
    }
    const lang = (userSettings.lang || pluginConfig.language?.default || "en").toLowerCase();
    const tplData = getTemplateData(lang);
    if (!tplData?.template) {
      return "";
    }
    const conformanceValue = formData.conformanceStatus ?? "";
    const conformanceLabel = tplData.conformance_options?.[conformanceValue] ?? conformanceValue;
    const lastUpdated = formatDate(generatedDate, lang);
    return tplData.template.replace(/\{\{company_name\}\}/g, escapeHtml(formData.companyName ?? "")).replace(/\{\{website_url\}\}/g, escapeHtml(formData.website ?? "")).replace(/\{\{accessibility_standard\}\}/g, escapeHtml(formData.wcagStandard ?? "")).replace(/\{\{conformance_status\}\}/g, escapeHtml(conformanceLabel)).replace(/\{\{contact_email\}\}/g, escapeHtml(formData.businessEmail ?? "")).replace(/\{\{last_updated\}\}/g, escapeHtml(lastUpdated));
  }

  // src/views/statement/statementPanel.css
  var statementPanel_default = ".cya11y-statement-view{display:flex;flex-direction:column;height:100%;width:100%;background:#f4f5fa}.cya11y-statement-header{display:flex;align-items:center;padding:14px 20px;gap:10px;background:#f2f2f4;border-bottom:1px solid #e2e2e9;border-radius:6px 6px 0 0;flex-shrink:0}.cya11y-statement-back-btn{display:flex;align-items:center;justify-content:center;background:transparent;border:none;cursor:pointer;padding:4px;border-radius:4px;color:#27283c;flex-shrink:0}.cya11y-statement-back-btn:hover,.cya11y-statement-back-btn:focus-visible{background:#00000014;outline:2px solid rgba(0,0,0,.2);outline-offset:1px}.cya11y-statement-title{font-size:15px;font-weight:600;line-height:1.4;color:#14142a;margin:0;flex:1}.cya11y-statement-body{flex:1;overflow-y:auto;padding:16px;-webkit-overflow-scrolling:touch}.cya11y-statement-card{background:#fff;border-radius:8px;padding:20px;font-family:inherit;font-size:13px;line-height:1.6;color:#14142a}.cya11y-statement-card h2{font-size:15px;font-weight:600;margin:16px 0 6px;color:#14142a}.cya11y-statement-card p{margin:0 0 8px;color:#27283c}.cya11y-statement-card ul{margin:6px 0 10px 18px;padding:0}.cya11y-statement-card li{margin-bottom:4px;color:#27283c}.cya11y-statement-card a{color:var(--cya11y-primary, #1863DC);text-decoration:underline}.cya11y-statement-card em{font-style:italic;color:#525363}.cya11y-statement-card strong{font-weight:600}\n";

  // src/views/statement/statementPanel.ts
  function renderStatementPanel(onBack) {
    const labelKey = "Accessibility statement";
    const backLabelKey = "Back to accessibility menu";
    const label = t(labelKey);
    const backLabel = t(backLabelKey);
    const $wrapper = document.createElement("div");
    $wrapper.innerHTML = `<style id="cya11y-statement-css">${statementPanel_default}</style>
<div class="cya11y-statement-view" role="region" aria-label="${label}" data-translate-aria="${labelKey}">
  <header class="cya11y-statement-header">
    <button class="cya11y-statement-back-btn" aria-label="${backLabel}" data-translate-aria="${backLabelKey}" title="${backLabel}" data-translate="${backLabelKey}" type="button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <h2 class="cya11y-statement-title">${label}</h2>
  </header>
  <div class="cya11y-statement-body">
    <div class="cya11y-statement-card cya11y-statement-content"></div>
  </div>
</div>`;
    const $panel = $wrapper.querySelector(".cya11y-statement-view");
    const $backBtn = $wrapper.querySelector(".cya11y-statement-back-btn");
    const $content = $wrapper.querySelector(".cya11y-statement-content");
    $content.innerHTML = renderStatement();
    $backBtn.addEventListener("click", () => {
      onBack();
    });
    return $wrapper;
  }

  // src/icons/monochromeIcon.svg
  var monochromeIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M25.6979 13.3045C24.8535 11.6744 23.689 9.95099 22.2223 8.20208C19.7423 5.23063 17.2979 3.19306 17.2001 3.10816L16.6668 2.66669L16.1246 3.10816C16.0179 3.19306 13.5735 5.17969 11.0935 8.12567C9.62678 9.86609 8.45345 11.581 7.6179 13.2281C6.54234 15.3251 6.00012 17.3117 6.00012 19.1455C6.00012 24.7658 10.7823 29.3334 16.6668 29.3334C22.5512 29.3334 27.3335 24.7658 27.3335 19.1455C27.3335 17.3626 26.7912 15.4015 25.7068 13.313L25.6979 13.3045Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M24.6668 19.0242C24.6668 17.6893 24.2578 16.2139 23.448 14.6526C22.8181 13.427 21.9347 12.139 20.8386 10.8197C18.9817 8.59487 17.1412 7.06481 17.0676 7.00236L16.6668 6.66669V26.6667C21.0758 26.6667 24.6668 23.2397 24.6668 19.0242Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/lowSaturationIcon.svg
  var lowSaturationIcon_default = '<svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><path d="M25.0312 13.3045C24.1867 11.6744 23.0223 9.95099 21.5556 8.20208C19.0756 5.23063 16.6312 3.19306 16.5334 3.10816L16 2.66669L15.4578 3.10816C15.3512 3.19306 12.9067 5.17969 10.4267 8.12567C8.96004 9.86609 7.78671 11.581 6.95115 13.2281C5.8756 15.3251 5.33337 17.3117 5.33337 19.1455C5.33337 24.7658 10.1156 29.3334 16 29.3334C21.8845 29.3334 26.6667 24.7658 26.6667 19.1455C26.6667 17.3626 26.1245 15.4015 25.04 13.313L25.0312 13.3045Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M22.2765 20C15.9739 20 15.9739 23.157 9.67976 23.157C9.55304 23.157 9.45165 23.157 9.33337 23.1482C10.8372 25.2734 13.2535 26.6667 15.9824 26.6667C19.8603 26.6667 23.1129 23.8625 24 20.097C23.4762 20.0353 22.9186 20 22.2765 20Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/highSaturationIcon.svg
  var highSaturationIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M25.3645 13.3045L24.6986 13.6495C24.7367 13.723 24.7867 13.7897 24.8465 13.8469L25.3645 13.3045ZM21.889 8.20208L21.3132 8.68265L21.3143 8.68401L21.889 8.20208ZM16.8667 3.10816L17.3585 2.54185C17.354 2.53798 17.3495 2.53417 17.345 2.53041L16.8667 3.10816ZM16.3334 2.66669L16.8117 2.08894C16.536 1.86073 16.1374 1.85911 15.8599 2.08508L16.3334 2.66669ZM15.7912 3.10816L16.2583 3.69501L16.2647 3.68976L15.7912 3.10816ZM10.7601 8.12567L11.3336 8.60897L11.3338 8.60868L10.7601 8.12567ZM7.28453 13.2281L7.95187 13.5704L7.95338 13.5674L7.28453 13.2281ZM25.3734 13.313L26.039 12.9674C26.001 12.8941 25.9511 12.8276 25.8914 12.7706L25.3734 13.313ZM9.86968 13.7457L10.0428 13.0159L9.47997 12.8824L9.20784 13.3929L9.86968 13.7457ZM9.55098 14.3355L10.2205 14.6736L10.2239 14.6667L9.55098 14.3355ZM23.1158 14.3993L22.447 14.7385L22.447 14.7387L23.1158 14.3993ZM21.694 12.0638L22.3092 11.6349L22.1083 11.3467L21.7583 11.3166L21.694 12.0638ZM25.3645 13.3045L26.0305 12.9595C25.1567 11.2728 23.9595 9.50392 22.4636 7.72015L21.889 8.20208L21.3143 8.68401C22.7517 10.3981 23.8835 12.0761 24.6986 13.6495L25.3645 13.3045ZM21.889 8.20208L22.4648 7.72151C21.2021 6.20865 19.9504 4.9356 19.0025 4.0303C18.5282 3.57724 18.1289 3.21531 17.8411 2.96051C17.6972 2.83308 17.5812 2.73247 17.4977 2.66072C17.456 2.62484 17.4225 2.59629 17.398 2.57543C17.3866 2.56574 17.375 2.55589 17.3686 2.55045C17.3601 2.54322 17.358 2.54142 17.3585 2.54185L16.8667 3.10816L16.375 3.67447C16.4724 3.75898 18.8756 5.76204 21.3132 8.68265L21.889 8.20208ZM16.8667 3.10816L17.345 2.53041L16.8117 2.08894L16.3334 2.66669L15.8552 3.24443L16.3885 3.68591L16.8667 3.10816ZM16.3334 2.66669L15.8599 2.08508L15.3177 2.52656L15.7912 3.10816L16.2647 3.68976L16.807 3.24829L16.3334 2.66669ZM15.7912 3.10816L15.3241 2.52134C15.1947 2.62434 12.7094 4.64553 10.1863 7.64266L10.7601 8.12567L11.3338 8.60868C13.7708 5.71385 16.1743 3.76178 16.2583 3.69498L15.7912 3.10816ZM10.7601 8.12567L10.1866 7.64237C8.69204 9.41585 7.4832 11.1787 6.61567 12.8888L7.28453 13.2281L7.95338 13.5674C8.75696 11.9834 9.89479 10.3163 11.3336 8.60897L10.7601 8.12567ZM7.28453 13.2281L6.61718 12.8858C5.50216 15.0598 4.91675 17.1639 4.91675 19.1455H5.66675H6.41675C6.41675 17.4595 6.91578 15.5904 7.95187 13.5704L7.28453 13.2281ZM5.66675 19.1455H4.91675C4.91675 25.2121 10.0676 30.0834 16.3334 30.0834V29.3334V28.5834C10.8303 28.5834 6.41675 24.3195 6.41675 19.1455H5.66675ZM16.3334 29.3334V30.0834C22.5992 30.0834 27.7501 25.2121 27.7501 19.1455H27.0001H26.2501C26.2501 24.3195 21.8365 28.5834 16.3334 28.5834V29.3334ZM27.0001 19.1455H27.7501C27.7501 17.2116 27.1628 15.1315 26.039 12.9674L25.3734 13.313L24.7078 13.6586C25.7529 15.6714 26.2501 17.5137 26.2501 19.1455H27.0001ZM25.3734 13.313L25.8914 12.7706L25.8825 12.7621L25.3645 13.3045L24.8465 13.8469L24.8554 13.8554L25.3734 13.313ZM20.5826 12V11.25C18.303 11.25 17.1263 11.7971 16.0237 12.3131C15.0057 12.7895 14.0619 13.2348 12.1005 13.2348V13.9848V14.7348C14.3802 14.7348 15.5569 14.1877 16.6595 13.6717C17.6774 13.1953 18.6213 12.75 20.5826 12.75V12ZM12.1005 13.9848V13.2348C11.2404 13.2348 10.5877 13.1452 10.0428 13.0159L9.86968 13.7457L9.69653 14.4754C10.361 14.6331 11.1302 14.7348 12.1005 14.7348V13.9848ZM9.86968 13.7457L9.20784 13.3929C9.12867 13.5414 8.97958 13.798 8.87804 14.0044L9.55098 14.3355L10.2239 14.6667C10.3185 14.4745 10.3982 14.3485 10.5315 14.0985L9.86968 13.7457ZM9.55098 14.3355L8.88149 13.9975C8.03354 15.6768 7.58341 17.3232 7.58341 18.8631H8.33341H9.08341C9.08341 17.6131 9.45045 16.1986 10.2205 14.6736L9.55098 14.3355ZM8.33341 18.8631H7.58341C7.58341 23.5991 11.5242 27.4167 16.3334 27.4167V26.6667V25.9167C12.3173 25.9167 9.08341 22.7357 9.08341 18.8631H8.33341ZM16.3334 26.6667V27.4167C21.1426 27.4167 25.0834 23.5991 25.0834 18.8631H24.3334H23.5834C23.5834 22.7357 20.3495 25.9167 16.3334 25.9167V26.6667ZM24.3334 18.8631H25.0834C25.0834 17.3522 24.6316 15.7289 23.7847 14.0599L23.1158 14.3993L22.447 14.7387C23.2181 16.2581 23.5834 17.6479 23.5834 18.8631H24.3334ZM23.1158 14.3993L23.7847 14.06C23.381 13.2639 22.8792 12.4524 22.3092 11.6349L21.694 12.0638L21.0787 12.4927C21.6202 13.2694 22.0826 14.0202 22.447 14.7385L23.1158 14.3993ZM21.694 12.0638C21.7583 11.3166 21.7583 11.3166 21.7583 11.3166C21.7583 11.3166 21.7583 11.3165 21.7583 11.3165C21.7582 11.3165 21.7582 11.3165 21.7581 11.3165C21.758 11.3165 21.7578 11.3165 21.7576 11.3165C21.7571 11.3164 21.7565 11.3164 21.7557 11.3163C21.7541 11.3162 21.7518 11.316 21.7489 11.3157C21.743 11.3153 21.7345 11.3145 21.7236 11.3136C21.7018 11.3118 21.6706 11.3093 21.6319 11.3062C21.5548 11.3001 21.448 11.2919 21.329 11.2837C21.0983 11.2678 20.7969 11.25 20.5826 11.25V12V12.75C20.7394 12.75 20.9937 12.7641 21.2259 12.7801C21.3384 12.7879 21.4398 12.7956 21.5131 12.8015C21.5497 12.8044 21.5791 12.8068 21.5993 12.8085C21.6094 12.8093 21.6171 12.81 21.6223 12.8104C21.6248 12.8106 21.6268 12.8108 21.628 12.8109C21.6286 12.8109 21.6291 12.811 21.6293 12.811C21.6295 12.811 21.6296 12.811 21.6296 12.811C21.6296 12.811 21.6296 12.811 21.6297 12.811C21.6297 12.811 21.6296 12.811 21.6296 12.811C21.6296 12.811 21.6296 12.811 21.694 12.0638Z" fill=#27283C /></svg>';

  // src/icons/lightContrastIcon.svg
  var lightContrastIcon_default = '<svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_66_173)><path d="M29.3334 16.0001H30.6667M16 2.66672V1.33339M16 30.6667V29.3334M26.6667 26.6667L25.3334 25.3334M26.6667 5.33339L25.3334 6.66672M5.33337 26.6667L6.66671 25.3334M5.33337 5.33339L6.66671 6.66672M1.33337 16.0001H2.66671M16 24.0001C18.1218 24.0001 20.1566 23.1572 21.6569 21.6569C23.1572 20.1566 24 18.1218 24 16.0001C24 13.8783 23.1572 11.8435 21.6569 10.3432C20.1566 8.84291 18.1218 8.00006 16 8.00006C13.8783 8.00006 11.8435 8.84291 10.3432 10.3432C8.8429 11.8435 8.00004 13.8783 8.00004 16.0001C8.00004 18.1218 8.8429 20.1566 10.3432 21.6569C11.8435 23.1572 13.8783 24.0001 16 24.0001Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></g><defs><clippath id=clip0_66_173><rect fill=white height=32 width=32 /></clippath></defs></svg>';

  // src/icons/darkContrastIcon.svg
  var darkContrastIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M29.6667 18.9166C27.3948 20.129 24.7933 20.579 22.2462 20.2003C19.699 19.8216 17.341 18.6342 15.5201 16.8133C13.6992 14.9924 12.5118 12.6344 12.1331 10.0872C11.7544 7.54007 12.2044 4.93863 13.4168 2.66673C7.44632 4.06603 3 9.42463 3 15.8218C3 19.4053 4.42354 22.842 6.95745 25.3759C9.49136 27.9099 12.9281 29.3334 16.5116 29.3334C22.9088 29.3334 28.2674 24.8871 29.6667 18.9166Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/highContrastIcon.svg
  var highContrastIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M16.6667 2.66673C9.30271 2.66673 3.33337 8.63607 3.33337 16.0001C3.33337 23.3641 9.30271 29.3334 16.6667 29.3334M16.6667 2.66673V29.3334M16.6667 2.66673C24.0307 2.66673 30 8.63607 30 16.0001C30 23.3641 24.0307 29.3334 16.6667 29.3334M16.6667 24.0001H6.66671M16.6667 18.6667H4.00004M16.6667 13.3334H4.00004M16.6667 8.00007H6.66671" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/views/menu/FilterButtons.ts
  var FilterButtons_default = [
    {
      label: "Monochrome",
      key: "monochrome",
      icon: monochromeIcon_default
    },
    {
      label: "Low Saturation",
      key: "low-saturation",
      icon: lowSaturationIcon_default
    },
    {
      label: "High Saturation",
      key: "high-saturation",
      icon: highSaturationIcon_default
    },
    {
      label: "High Contrast",
      key: "high-contrast",
      icon: highContrastIcon_default
    },
    {
      label: "Light Contrast",
      key: "light-contrast",
      icon: lightContrastIcon_default
    },
    {
      label: "Dark Contrast",
      key: "dark-contrast",
      icon: darkContrastIcon_default
    }
  ];

  // src/icons/highlightTitleIcon.svg
  var highlightTitleIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M12.2223 10.4445H16.6667M16.6667 10.4445H21.1112M16.6667 10.4445V22.2963M3.33337 12.1482C3.33337 8.82968 3.33337 7.17042 3.9793 5.90227C4.54743 4.78729 5.45394 3.88077 6.56893 3.31264C7.83708 2.66672 9.49634 2.66672 12.8149 2.66672H20.5186C23.8371 2.66672 25.4963 2.66672 26.7645 3.31264C27.8795 3.88077 28.786 4.78729 29.3541 5.90227C30 7.17042 30 8.82968 30 12.1482V19.8519C30 23.1704 30 24.8297 29.3541 26.0978C28.786 27.2128 27.8795 28.1193 26.7645 28.6875C25.4963 29.3334 23.8371 29.3334 20.5186 29.3334H12.8149C9.49634 29.3334 7.83708 29.3334 6.56893 28.6875C5.45394 28.1193 4.54743 27.2128 3.9793 26.0978C3.33337 24.8297 3.33337 23.1704 3.33337 19.8519V12.1482Z" stroke=black stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/formatBoldIcon.svg
  var formatBoldIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M16.6667 2.66673V22.3158M16.6667 22.3158H13.2099M16.6667 22.3158H20.1235M27.0371 5.94158V2.66673H6.29634V5.94158M30 25.8246L3.33337 25.8246M30 25.8246L25.4023 29.3334M30 25.8246L25.4023 22.3158M3.33337 25.8246L7.01153 29.3334M3.33337 25.8246L7.01153 22.3158" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/lineHeightIcon.svg
  var lineHeightIcon_default = '<svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><path d="M2.66663 9.90481L7.37251 5.33338M7.37251 5.33338L12.0784 9.90481M7.37251 5.33338V26.6667M2.66663 22.0953L7.37251 26.6667M7.37251 26.6667L12.0784 22.0953M18.3529 6.85719H29.3333M18.3529 16.0001H29.3333M18.3529 25.1429H29.3333" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/letterSpacingIcon.svg
  var letterSpacingIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M4.33337 16.0001V6.83338C4.33337 5.72832 4.7849 4.66851 5.58863 3.88711C6.39236 3.1057 7.48245 2.66672 8.61909 2.66672C9.75573 2.66672 10.8458 3.1057 11.6495 3.88711C12.4533 4.66851 12.9048 5.72832 12.9048 6.83338V16.0001M12.9048 9.33338H4.33337M18.0477 2.66672L23.1905 16.0001L28.3334 2.66672M4.33337 26.0001H28.3334M4.33337 26.0001L7.76195 22.6667M4.33337 26.0001L7.76195 29.3334M28.3334 26.0001L24.9048 29.3334M28.3334 26.0001L24.9048 22.6667" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/dyslexiaFontIcon.svg
  var dyslexiaFontIcon_default = '<svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><path d="M1.33337 3.87083V28.0001H8.25371C14.9222 28.0001 19.5761 23.0288 19.5761 15.9116C19.5761 8.79443 14.9121 3.87083 8.25371 3.87083H1.33337ZM17.8435 14.636C17.8435 20.0842 13.9854 23.756 8.25371 23.756H3.03576V5.56369H8.25371C13.9955 5.56369 17.8435 9.21169 17.8435 14.6479V14.636Z" fill=#27283C /><path d="M26.5367 7.03002C26.5367 6.18359 26.7784 5.43254 27.2216 4.89606C28.0074 3.96618 29.2867 4.10924 30.0925 4.74108L30.6667 3.54893C29.9515 2.97669 29.1356 2.66673 28.3398 2.66673C26.4359 2.66673 25.0559 4.46689 24.9854 7.04195L24.8947 10.0581H22.326V11.6079H24.7839L24.24 28.0001H27.0202L26.5467 11.6079H30.5861V10.0581H26.5467V7.03002H26.5367Z" fill=#27283C /></svg>';

  // src/icons/highlightLinksIcon.svg
  var highlightLinksIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M11.8335 20.4995L20.8336 11.4983M14.8335 6.99767L15.528 6.19356C16.9348 4.78687 18.8426 3.99667 20.8319 3.99681C22.8212 3.99695 24.7289 4.78742 26.1354 6.19431C27.5419 7.60121 28.3321 9.50929 28.3319 11.4988C28.3318 13.4883 27.5414 15.3963 26.1347 16.803L25.3337 17.4991M17.8336 25.0001L17.2381 25.8012C15.8145 27.2079 13.894 27.9968 11.8927 27.9968C9.89152 27.9968 7.97094 27.2079 6.54742 25.8012C5.84558 25.1077 5.28836 24.2818 4.90805 23.3713C4.52774 22.4608 4.33191 21.4839 4.33191 20.4972C4.33191 19.5105 4.52774 18.5336 4.90805 17.6231C5.28836 16.7127 5.84558 15.8867 6.54742 15.1933L7.33343 14.4987" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/fontSizeIcon.svg
  var fontSizeIcon_default = '<svg viewbox="0 0 27 22" fill=none height=22 width=27 xmlns=http://www.w3.org/2000/svg><path d="M1.66663 4.33329V1.66663H19V4.33329M11 1.66663V20.3333M13.6666 20.3333H8.33329M17.6666 12.3333V11H25.6666V12.3333M21.6666 11V20.3333M20.3333 20.3333H23" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=2 /></svg>';

  // src/icons/alignLeftIcon.svg
  var alignLeftIcon_default = '<svg viewbox="0 0 24 24" fill=none height=24 width=24 xmlns=http://www.w3.org/2000/svg><path d="M2 4H22M2 11.5H22M2 19H17" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/alignRightIcon.svg
  var alignRightIcon_default = '<svg viewbox="0 0 24 24" fill=none height=24 width=24 xmlns=http://www.w3.org/2000/svg><path d="M2 4H22M9.5 11.5H22M4.5 19H22" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/alignCenterIcon.svg
  var alignCenterIcon_default = '<svg viewbox="0 0 24 24" fill=none height=24 width=24 xmlns=http://www.w3.org/2000/svg><path d="M2 4H22M7 11.5H17M4.5 19H19.5" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/views/menu/ContentButtons.ts
  var ContentButtons_default = [
    {
      label: "Text Align",
      key: "text-align",
      icon: alignLeftIcon_default,
      // Multi-state cycler: off → left → center → right → off
      altIcons: { left: alignLeftIcon_default, right: alignRightIcon_default, center: alignCenterIcon_default }
    },
    {
      label: "Font Weight",
      key: "font-weight",
      icon: formatBoldIcon_default
    },
    {
      label: "Line Height",
      key: "line-height",
      icon: lineHeightIcon_default
    },
    {
      label: "Letter Spacing",
      key: "letter-spacing",
      icon: letterSpacingIcon_default
    },
    {
      label: "Dyslexia Font",
      key: "readable-font",
      icon: dyslexiaFontIcon_default
    },
    {
      label: "Highlight Links",
      key: "highlight-links",
      icon: highlightLinksIcon_default
    },
    {
      label: "Highlight Title",
      key: "highlight-title",
      icon: highlightTitleIcon_default
    },
    {
      label: "Adjust Font Size",
      key: "font-size",
      icon: fontSizeIcon_default
    }
  ];

  // src/icons/bigCursorIcon.svg
  var bigCursorIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M28.5311 11.3834C30.4853 12.1771 30.336 14.9931 28.3087 15.5758L18.0752 18.5185L13.4007 28.0865C12.4739 29.9823 9.6741 29.6398 9.231 27.5769L4.46724 5.35687C4.38211 4.96192 4.40628 4.55123 4.53714 4.16899C4.668 3.78675 4.90061 3.44742 5.20993 3.18751C5.51925 2.9276 5.89358 2.75694 6.29266 2.6939C6.69173 2.63086 7.10044 2.67782 7.47482 2.82973L28.5311 11.3834Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/stopAnimationsIcon.svg
  var stopAnimationsIcon_default = '<svg viewbox="0 0 30 29" fill=none height=29 width=30 xmlns=http://www.w3.org/2000/svg><path d="M17.1333 16.6V8.06669M12.8666 16.6V8.06669M1.66663 26.0476H6.66663M6.66663 26.0476H28.3333M6.66663 26.0476V24.3334M6.66663 26.0476V27.7619M25.6666 12.3334C25.6666 18.2244 20.891 23 15 23C9.10892 23 4.33329 18.2244 4.33329 12.3334C4.33329 6.44232 9.10892 1.66669 15 1.66669C20.891 1.66669 25.6666 6.44232 25.6666 12.3334Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/readingGuideIcon.svg
  var readingGuideIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M5.66667 12.2667V2.66669H27L26.9998 12.2667M5.66667 20V29.3334H26.9998V20M13.6667 20H3V13.3334H29.6667V20H22.3333M22.493 20.3842C23.2083 20.662 23.1536 21.6476 22.4116 21.8515L18.6658 22.8815L16.9548 26.2303C16.6156 26.8938 15.5908 26.774 15.4286 26.0519L13.6849 18.2749C13.6538 18.1367 13.6626 17.9929 13.7105 17.8592C13.7584 17.7254 13.8435 17.6066 13.9568 17.5156C14.07 17.4247 14.207 17.3649 14.3531 17.3429C14.4992 17.3208 14.6488 17.3373 14.7858 17.3904L22.493 20.3842Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/pageReadIcon.svg
  var pageReadIcon_default = '<svg viewbox="0 0 24 24" fill=none height=24 width=24 xmlns=http://www.w3.org/2000/svg><path d="M16.5 5C16.5 3.89543 15.6046 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H16M5.5 8H12.5M5.5 12H10M5.5 16H8M19.3 18.8C20.7059 17.394 21.4959 15.4874 21.4964 13.4991C21.497 11.5109 20.7081 9.6038 19.303 8.19702M16.5001 15.9999C16.8273 15.6728 17.0863 15.2841 17.2623 14.8562C17.4383 14.4283 17.5278 13.9698 17.5254 13.5072C17.5231 13.0445 17.4291 12.587 17.2488 12.1609C17.0685 11.7348 16.8055 11.3487 16.4751 11.0249" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/muteSoundsIcon.svg
  var muteSoundsIcon_default = '<svg viewbox="0 0 24 24" fill=none height=24 width=24 xmlns=http://www.w3.org/2000/svg><path d="M16 9C16.5044 9.67234 16.8311 10.461 16.95 11.293M19.364 5.63599C20.643 6.91425 21.5073 8.54814 21.8442 10.3247C22.1812 12.1013 21.9752 13.9382 21.253 15.596M2 2L22 22M7 7L6.413 7.587C6.2824 7.71838 6.12703 7.82253 5.95589 7.89342C5.78475 7.96432 5.60124 8.00054 5.416 8H3C2.73478 8 2.48043 8.10536 2.29289 8.29289C2.10536 8.48043 2 8.73478 2 9V15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8946 2.73478 16 3 16H5.416C5.60124 15.9995 5.78475 16.0357 5.95589 16.1066C6.12703 16.1775 6.2824 16.2816 6.413 16.413L9.796 19.797C9.8946 19.8958 10.0203 19.9631 10.1572 19.9904C10.2941 20.0177 10.436 20.0037 10.5649 19.9503C10.6939 19.8968 10.804 19.8063 10.8815 19.6902C10.959 19.5741 11.0002 19.4376 11 19.298V11M9.82788 4.17207C9.92377 4.07581 10.0461 4.0102 10.1793 3.98355C10.3125 3.95689 10.4507 3.9704 10.5762 4.02235C10.7017 4.0743 10.809 4.16235 10.8844 4.27535C10.9599 4.38835 11 4.52121 10.9999 4.65707V5.34307" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/enum/TOOL_PRESETS.ts
  var TOOL_PRESETS = [
    {
      label: "Big Cursor",
      key: "big-cursor",
      icon: bigCursorIcon_default
    },
    {
      label: "Pause Animations",
      key: "stop-animations",
      icon: stopAnimationsIcon_default
    },
    {
      label: "Reading Guide",
      key: "readable-guide",
      icon: readingGuideIcon_default
    },
    {
      label: "Page read",
      key: "page-read",
      icon: pageReadIcon_default
    },
    {
      label: "Mute sounds",
      key: "mute-sounds",
      icon: muteSoundsIcon_default
    }
  ];
  var TOOL_PRESETS_default = TOOL_PRESETS;

  // src/icons/seizureSafeIcon.svg
  var seizureSafeIcon_default = '<svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><path d="M9.21208 30.4224V24.9678H4.84844C4.26979 24.9678 3.71484 24.7379 3.30567 24.3288C2.8965 23.9196 2.66663 23.3646 2.66663 22.786V14.0587C2.66702 11.9261 3.23577 9.83202 4.31433 7.99218C5.39288 6.15235 6.94227 4.63319 8.803 3.59109C10.6637 2.549 12.7686 2.02161 14.9008 2.06323C16.6928 2.09821 18.4497 2.53401 20.0444 3.33341M26.6576 14.527C26.5747 16.6581 25.9255 18.7286 24.7766 20.5253C23.6277 22.3221 22.0208 23.7802 20.1212 24.7496V30.4224M21.0725 16.7033C20.8107 17.4342 20.0252 17.8007 19.2747 17.6022C15.4849 16.5985 11.6274 13.8822 9.28195 11.7658C8.66013 11.2051 8.53359 10.2669 9.08559 9.63853C10.1687 8.41409 11.6416 7.60149 13.2551 7.33829C14.8685 7.07508 16.5233 7.37743 17.9394 8.19417C18.8573 8.72498 19.6377 9.45078 20.2306 10.3122M27.8537 1.95526L21.2436 5.39951L27.7229 10.0919L21.1129 13.5362" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/adhdIcon.svg
  var adhdIcon_default = '<svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><path d="M14.5185 16.0001C14.5185 16.393 14.6746 16.7698 14.9524 17.0477C15.2302 17.3255 15.6071 17.4816 16 17.4816C16.3929 17.4816 16.7697 17.3255 17.0475 17.0477C17.3254 16.7698 17.4815 16.393 17.4815 16.0001C17.4815 15.6072 17.3254 15.2304 17.0475 14.9525C16.7697 14.6747 16.3929 14.5186 16 14.5186C15.6071 14.5186 15.2302 14.6747 14.9524 14.9525C14.6746 15.2304 14.5185 15.6072 14.5185 16.0001Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M8.59248 16C8.59248 17.9646 9.3729 19.8487 10.7621 21.2378C12.1512 22.627 14.0353 23.4074 15.9999 23.4074C17.9645 23.4074 19.8486 22.627 21.2377 21.2378C22.6269 19.8487 23.4073 17.9646 23.4073 16C23.4073 14.0354 22.6269 12.1513 21.2377 10.7622C19.8486 9.37302 17.9645 8.5926 15.9999 8.5926C14.0353 8.5926 12.1512 9.37302 10.7621 10.7622C9.3729 12.1513 8.59248 14.0354 8.59248 16Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M2.66663 16.0001C2.66663 17.751 3.0115 19.4849 3.68157 21.1025C4.35163 22.7202 5.33375 24.1901 6.57187 25.4282C7.80998 26.6663 9.27984 27.6484 10.8975 28.3185C12.5152 28.9885 14.249 29.3334 16 29.3334C17.7509 29.3334 19.4847 28.9885 21.1024 28.3185C22.7201 27.6484 24.1899 26.6663 25.4281 25.4282C26.6662 24.1901 27.6483 22.7202 28.3184 21.1025C28.9884 19.4849 29.3333 17.751 29.3333 16.0001C29.3333 14.2491 28.9884 12.5153 28.3184 10.8976C27.6483 9.27996 26.6662 7.81011 25.4281 6.57199C24.1899 5.33388 22.7201 4.35175 21.1024 3.68169C19.4847 3.01163 17.7509 2.66675 16 2.66675C14.249 2.66675 12.5152 3.01163 10.8975 3.68169C9.27984 4.35175 7.80998 5.33388 6.57187 6.57199C5.33375 7.81011 4.35163 9.27996 3.68157 10.8976C3.0115 12.5153 2.66663 14.2491 2.66663 16.0001Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/lowVisionIcon.svg
  var lowVisionIcon_default = '<svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><path d="M16.0372 22.1457C10.6889 22.1457 6.2321 19.1214 2.66663 13.0729C6.2321 7.02429 10.6889 4 16.0372 4C21.3854 4 25.8422 7.02429 29.4077 13.0729C29.274 13.2987 29.1403 13.5199 29.0066 13.7367M26.4364 19.1214L26.4365 28.1943M26.4365 28.1943L21.9796 23.6579M26.4365 28.1943L30.8933 23.6579M13.0659 13.0729C13.0659 13.8749 13.379 14.6442 13.9362 15.2114C14.4934 15.7785 15.2491 16.0971 16.0372 16.0971C16.8252 16.0971 17.5809 15.7785 18.1381 15.2114C18.6953 14.6442 19.0084 13.8749 19.0084 13.0729C19.0084 12.2708 18.6953 11.5015 18.1381 10.9344C17.5809 10.3672 16.8252 10.0486 16.0372 10.0486C15.2491 10.0486 14.4934 10.3672 13.9362 10.9344C13.379 11.5015 13.0659 12.2708 13.0659 13.0729Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/epilepsySafeIcon.svg
  var epilepsySafeIcon_default = '<svg viewbox="0 0 30 29" fill=none height=29 width=30 xmlns=http://www.w3.org/2000/svg><path d="M15 2L4 6V14C4 19.5 8.5 24.5 15 27C21.5 24.5 26 19.5 26 14V6L15 2Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M15 9V14L18 17" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/views/menu/ProfileButtons.ts
  var ProfileButtons_default = [
    {
      label: "Low Vision",
      key: "low-vision-profile",
      icon: lowVisionIcon_default
    },
    {
      label: "ADHD",
      key: "adhd-profile",
      icon: adhdIcon_default
    },
    {
      label: "Seizure Safe",
      key: "seizure-safe-profile",
      icon: seizureSafeIcon_default
    },
    {
      label: "Epilepsy Safe Mode",
      key: "epilepsy-safe-profile",
      icon: epilepsySafeIcon_default
    }
  ];

  // src/views/menu/renderButtons.ts
  function renderButtons(buttons, btnClass) {
    let _html = "";
    for (var i = buttons.length; i--; ) {
      let x = buttons[i];
      if (x.key === "font-size") {
        _html += `
            <div class="cya11y-adjust-font ${btnClass || ""}" role="group" aria-labelledby="font-size-control">
                <div class="cya11y-label" id="font-size-control">
                    ${x.icon}
                    <span class="cya11y-translate">${x.label}</span>
                </div>
                <div class="cya11y-font-controls">
                    <button class="cya11y-minus" type="button" aria-label="Decrease Font Size" aria-describedby="font-size-control">
                        <svg viewBox="0 0 24 24" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <rect x="5" y="11" width="14" height="2" rx="1" fill="white"/>
                        </svg>
                        <span class="cya11y-sr-only">Decrease font size</span>
                    </button>
                    <span class="cya11y-amount" aria-live="polite" aria-atomic="true">100%</span>
                    <button class="cya11y-plus" type="button" aria-label="Increase Font Size" aria-describedby="font-size-control">
                        <svg viewBox="0 0 24 24" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <rect x="11" y="5" width="2" height="14" rx="1" fill="white"/>
                            <rect x="5" y="11" width="14" height="2" rx="1" fill="white"/>
                        </svg>
                        <span class="cya11y-sr-only">Increase font size</span>
                    </button>
                </div>
            </div>
            `;
      } else if (x.key === "text-align" && x.altIcons) {
        _html += `<button class="cya11y-btn cya11y-text-align ${btnClass || ""}" type="button" data-key="${x.key}" data-state="off" title="${x.label}" aria-pressed="false" aria-describedby="${x.key}-description"><span class="cya11y-text-align-icon" data-icon="left">${x.altIcons.left}</span><span class="cya11y-text-align-icon" data-icon="right">${x.altIcons.right}</span><span class="cya11y-text-align-icon" data-icon="center">${x.altIcons.center}</span><span class="cya11y-translate">${x.label}</span><span class="cya11y-sr-only" id="${x.key}-description">Cycle text alignment: left, right, center</span><span class="cya11y-text-align-progress" aria-hidden="true"><span class="cya11y-text-align-segment" data-pos="left"></span><span class="cya11y-text-align-segment" data-pos="center"></span><span class="cya11y-text-align-segment" data-pos="right"></span></span></button>`;
      } else {
        _html += `<button class="cya11y-btn ${btnClass || ""}" type="button" data-key="${x.key}" title="${x.label}" aria-pressed="false" aria-describedby="${x.key}-description">${x.icon}<span class="cya11y-translate">${x.label}</span><span class="cya11y-sr-only" id="${x.key}-description">Toggle ${x.label.toLowerCase()} setting</span></button>`;
      }
    }
    return _html;
  }

  // src/enum/Profiles.ts
  var PROFILES = {
    "low-vision-profile": {
      "contrast": "high-contrast",
      "tools": ["font-size", "page-read"]
    },
    "adhd-profile": {
      "contrast": "high-saturation",
      "tools": ["stop-animations", "readable-guide"]
    },
    "seizure-safe-profile": {
      "contrast": "monochrome",
      "tools": ["stop-animations"]
    },
    "epilepsy-safe-profile": {
      "contrast": "monochrome",
      "tools": ["stop-animations", "mute-sounds"]
    }
  };

  // src/views/menu/moduleFilter.ts
  var CONTENT_KEY_MAP = {
    "font-size": "adjustFontSizing",
    "highlight-title": "highlightTitle",
    "highlight-links": "highlightLinks",
    "readable-font": "dyslexicFont",
    "letter-spacing": "letterSpacing",
    "line-height": "lineHeight",
    "font-weight": "fontWeight",
    "text-align": "textAlign"
  };
  var COLOR_KEY_MAP = {
    "dark-contrast": "darkContrast",
    "light-contrast": "lightContrast",
    "high-contrast": "highContrast",
    "high-saturation": "highSaturation",
    "low-saturation": "lowSaturation",
    "monochrome": "monochrome"
  };
  var NAV_KEY_MAP = {
    "big-cursor": "bigCursor",
    "stop-animations": "pauseAnimations",
    "readable-guide": "readingGuide"
  };
  var TOP_LEVEL_KEY_MAP = {
    "page-read": "pageRead",
    "mute-sounds": "muteSounds"
  };
  function filterByModule(buttons, moduleSection, keyMap) {
    if (!moduleSection) return buttons;
    return buttons.filter((btn) => {
      const configKey = keyMap[btn.key];
      if (!configKey) return true;
      const mod = moduleSection[configKey];
      return mod?.enabled !== false;
    });
  }
  var PROFILE_KEY_MAP = {
    "low-vision-profile": "lowVision",
    "adhd-profile": "adhd",
    "seizure-safe-profile": "seizureSafe",
    "epilepsy-safe-profile": "epilepsySafe"
  };
  var PROFILE_BUTTON_KEYS = [
    "low-vision-profile",
    "adhd-profile",
    "seizure-safe-profile",
    "epilepsy-safe-profile"
  ];
  function shouldRemoveProfilesSection(profilesSection, visibleCount) {
    return profilesSection?.enabled === false || visibleCount === 0;
  }
  var CONTENT_STATE_KEY = { "font-size": "fontSize" };
  function dropDisabledModuleStates(states, modules) {
    if (!modules) return { states, changed: false };
    const next = { ...states };
    let changed = false;
    const drop = (stateKey) => {
      if (stateKey in next) {
        delete next[stateKey];
        changed = true;
      }
    };
    const isDisabled = (section, configKey) => section?.[configKey]?.enabled === false;
    for (const [btnKey, configKey] of Object.entries(CONTENT_KEY_MAP)) {
      if (isDisabled(modules.content, configKey)) drop(CONTENT_STATE_KEY[btnKey] ?? btnKey);
    }
    for (const [btnKey, configKey] of Object.entries(NAV_KEY_MAP)) {
      if (isDisabled(modules.navigation, configKey)) drop(btnKey);
    }
    const contrast = next["contrast"];
    if (typeof contrast === "string") {
      const colorConfigKey = COLOR_KEY_MAP[contrast];
      if (colorConfigKey && isDisabled(modules.color, colorConfigKey)) drop("contrast");
    }
    for (const [btnKey, configKey] of Object.entries(TOP_LEVEL_KEY_MAP)) {
      if (modules[configKey]?.enabled === false) drop(btnKey);
    }
    const profilesSection = modules.profiles;
    for (const btnKey of PROFILE_BUTTON_KEYS) {
      const configKey = PROFILE_KEY_MAP[btnKey];
      const profileOff = profilesSection?.enabled === false || profilesSection?.[configKey]?.enabled === false;
      if (!profileOff) continue;
      const wasActive = Boolean(next[btnKey]);
      drop(btnKey);
      if (!wasActive) continue;
      const bundle = PROFILES[btnKey];
      drop("contrast");
      bundle.tools.forEach((tool) => drop(CONTENT_STATE_KEY[tool] ?? tool));
    }
    return { states: next, changed };
  }
  function shouldShowLanguageSelector(language) {
    return language?.showSelector !== false;
  }

  // src/views/menu/reset.ts
  function reset($menu2) {
    $menu2?.querySelectorAll(".cya11y-selected")?.forEach((el) => el?.classList?.remove("cya11y-selected"));
    $menu2.querySelector(".cya11y-amount").textContent = `100%`;
    userSettings.states = {};
    runAccessibility();
    saveUserSettings();
  }

  // src/views/menu/menu.css
  var menu_default2 = `:root{--cya11y-primary-color: #1863DC;--cya11y-primary-light: #D1E0F8;--cya11y-bg-primary: #eff1f5;--cya11y-bg-secondary: #f2f2f4;--cya11y-bg-white: #fff;--cya11y-bg-overlay: rgba(0, 0, 0, .3);--cya11y-text-primary: #27283C;--cya11y-text-secondary: #293C5B;--cya11y-text-muted: #3D3E50;--cya11y-text-white: #fff;--cya11y-border-light: #E9EAEC;--cya11y-border-focus: #dbeafe;--cya11y-spacing-xs: 8px;--cya11y-spacing-sm: 12px;--cya11y-spacing-md: 16px;--cya11y-spacing-lg: 20px;--cya11y-spacing-xl: 30px;--cya11y-radius-sm: 8px;--cya11y-radius-md: 12px;--cya11y-radius-lg: 45px;--cya11y-radius-full: 50%;--cya11y-shadow-sm: 0px 8px 26px -4px #27283C33;--cya11y-shadow-md: 0 8px 24px rgba(41, 60, 91, .08);--cya11y-shadow-focus: 0px 0px 0px 6px #1863DC24;--cya11y-transition-fast: .15s;--cya11y-transition-normal: .2s;--cya11y-transition-slow: .3s;--cya11y-z-overlay: 10000;--cya11y-z-menu: 500000;--cya11y-z-dropdown: 100}.cya11y-widget{--cya11y-primary-color: #1863DC;--cya11y-primary-light: #D1E0F8;--cya11y-bg-primary: #eff1f5;--cya11y-bg-secondary: #f2f2f4;--cya11y-bg-white: #fff;--cya11y-bg-overlay: rgba(0, 0, 0, .3);--cya11y-text-primary: #333;--cya11y-text-secondary: #293C5B;--cya11y-text-muted: #000000 ;--cya11y-text-white: #fff;--cya11y-border-light: #E9EAEC;--cya11y-border-focus: #dbeafe;--cya11y-spacing-xs: 8px;--cya11y-spacing-sm: 12px;--cya11y-spacing-md: 16px;--cya11y-spacing-lg: 20px;--cya11y-spacing-xl: 30px;--cya11y-radius-sm: 8px;--cya11y-radius-md: 12px;--cya11y-radius-lg: 45px;--cya11y-radius-full: 50%;--cya11y-shadow-sm: 0px 8px 26px -4px #27283C33;--cya11y-shadow-md: 0 8px 24px rgba(41, 60, 91, .08);--cya11y-shadow-focus: 0px 0px 0px 6px #1863DC24;--cya11y-transition-fast: .15s;--cya11y-transition-normal: .2s;--cya11y-transition-slow: .3s;--cya11y-z-overlay: 10000;--cya11y-z-menu: 500000;--cya11y-z-dropdown: 100}.cya11y-menu *{color:inherit;font-family:inherit;padding:0;margin:0;letter-spacing:normal}.cya11y-menu{position:fixed;display:flex;flex-direction:column;top:30px;width:462px;height:calc(100% - 30px);background:var(--cya11y-bg-primary, #eff1f5);box-shadow:var(--cya11y-shadow-sm, 0px 8px 26px -4px #27283C33);opacity:1;transition:var(--cya11y-transition-slow, .3s);z-index:var(--cya11y-z-menu, 500000);overflow:auto;line-height:1;font-size:16px;letter-spacing:.015em;color:#000}.cya11y-menu[data-position=bottom-right],.cya11y-menu[data-position=top-right]{right:0;left:auto;border-radius:var(--cya11y-radius-md, 12px) var(--cya11y-radius-md, 12px) 0 0}.cya11y-menu[data-position=bottom-left],.cya11y-menu[data-position=top-left]{left:0;right:auto;border-radius:var(--cya11y-radius-md, 12px) var(--cya11y-radius-md, 12px) 0 0}.cya11y-menu-header{display:flex;align-items:center;justify-content:space-between;padding:var(--cya11y-spacing-md, 16px) 15px;font-weight:700;background-color:var(--cya11y-primary-color, #1863DC)}.cya11y-menu-title{font-size:20px;font-weight:500;color:var(--cya11y-text-white, #fff)!important}.cya11y-menu-header>div{display:flex}.cya11y-menu-reset,.cya11y-menu-close{width:32px;height:32px;display:flex;padding:10px;align-items:center;justify-content:center;margin:0;background:var(--cya11y-bg-overlay, rgba(0, 0, 0, .3));cursor:pointer;border-radius:var(--cya11y-radius-full, 50%);transition:opacity var(--cya11y-transition-slow, .3s) ease;border:0;box-shadow:none;outline:none}.cya11y-menu-reset{padding:7px}.cya11y-menu-reset-footer{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:20px 0}.cya11y-menu-title-shortcut{font-size:13px;font-weight:400;opacity:.75}.cya11y-menu-reset-footer-btn{display:flex;align-items:center;justify-content:center;gap:8px;border-radius:var(--cya11y-radius-md, 12px);width:100%;height:48px;font-size:15px;font-weight:500;color:var(--cya11y-text-white, #fff);background:var(--cya11y-primary-color);border:2px solid transparent;cursor:pointer;transition:all var(--cya11y-transition-normal, .2s) ease;padding:0 20px;text-decoration:none;outline:none}.cya11y-menu-reset-footer-btn:hover{background:color-mix(in srgb,var(--cya11y-primary-color) 85%,white);transform:translateY(-1px);box-shadow:0 4px 12px color-mix(in srgb,var(--cya11y-primary-color) 30%,transparent)}.cya11y-menu-reset-footer-btn:focus-visible{outline:3px solid var(--cya11y-focus-ring-color, var(--cya11y-primary-color, #1863DC));outline-offset:2px}.cya11y-menu-reset-footer-btn:active{transform:translateY(0);box-shadow:0 2px 6px color-mix(in srgb,var(--cya11y-primary-color) 20%,transparent)}.cya11y-menu-reset-footer-btn svg{width:20px;height:20px;flex-shrink:0}.cya11y-reset-text{font-weight:500;white-space:nowrap}.cya11y-menu-reset:hover:not(.cya11y-menu-reset-footer-btn),.cya11y-menu-close:hover,.cya11y-menu-reset:focus-visible:not(.cya11y-menu-reset-footer-btn),.cya11y-menu-close:focus-visible{outline:3px solid var(--cya11y-focus-color-on-primary, #ffffff);outline-offset:2px}.cya11y-menu-content{flex:1;overflow-y:auto;overflow-x:auto;padding:var(--cya11y-spacing-lg, 20px) 0 12px;background-color:var(--cya11y-bg-secondary, #f2f2f4);max-height:calc(100vh - 146px)}.cya11y-card{margin:0 var(--cya11y-spacing-lg, 20px) var(--cya11y-spacing-lg, 20px)}.cya11y-card-title{font-size:16px;padding:15px 0;font-weight:500;color:var(--cya11y-text-primary, #27283C)}.cya11y-profile-card{background-color:var(--cya11y-bg-white, #fff);border-radius:var(--cya11y-radius-md, 12px)}.cya11y-profile-card .cya11y-card-title{font-size:16px;font-weight:500;color:var(--cya11y-text-secondary, #293C5B);background-color:var(--cya11y-bg-white, #fff);border:none;text-align:left}.cya11y-profile-items{display:none;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;padding:0 var(--cya11y-spacing-md, 16px) var(--cya11y-spacing-md, 16px) var(--cya11y-spacing-md, 16px);margin-top:var(--cya11y-spacing-md, 16px)}.cya11y-profile-items .cya11y-btn{display:flex;gap:10px;align-items:center;flex-direction:row;justify-content:start;text-align:left;width:190px;height:64px;padding:var(--cya11y-spacing-sm, 12px);border-radius:var(--cya11y-radius-md, 12px);background:var(--cya11y-bg-white, #fff);border:1px solid var(--cya11y-border-light, #E9EAEC);transition:background var(--cya11y-transition-normal, .2s) ease,border-color var(--cya11y-transition-normal, .2s) ease}.cya11y-profile-items .cya11y-btn:hover:not(.cya11y-selected){background:color-mix(in srgb,var(--cya11y-primary-color, #1863DC) 8%,var(--cya11y-bg-white, #fff));border:2px solid var(--cya11y-primary-color, #1863DC)}.cya11y-profile-items .cya11y-btn.cya11y-selected{background:var(--cya11y-primary-color, #1863DC);color:var(--cya11y-text-white, #fff);fill:var(--cya11y-text-white, #fff);stroke:var(--cya11y-text-white, #fff)}.cya11y-profile-items .cya11y-btn.cya11y-selected:after{content:"";display:inline-block;-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.0002 1.34001C16.5085 2.21087 17.7632 3.46054 18.6401 4.96531C19.5169 6.47009 19.9856 8.17779 19.9997 9.91935C20.0137 11.6609 19.5727 13.376 18.7203 14.8947C17.8678 16.4135 16.6335 17.6832 15.1395 18.5783C13.6455 19.4734 11.9436 19.9628 10.2023 19.9981C8.46107 20.0333 6.74079 19.6132 5.2118 18.7793C3.6828 17.9453 2.39812 16.7265 1.48491 15.2435C0.571706 13.7605 0.0616534 12.0647 0.00524426 10.324L0.000244141 10L0.00524426 9.67601C0.0612473 7.94901 0.563792 6.26598 1.46388 4.79101C2.36398 3.31604 3.6309 2.09947 5.14114 1.2599C6.65137 0.420327 8.35339 -0.0135887 10.0813 0.000452316C11.8091 0.0144933 13.5038 0.476012 15.0002 1.34001ZM13.7072 7.29302C13.5351 7.12084 13.306 7.01741 13.0629 7.00213C12.8199 6.98685 12.5796 7.06076 12.3872 7.21001L12.2932 7.29302L9.00024 10.585L7.70724 9.29301L7.61324 9.21001C7.42083 9.06087 7.18062 8.98704 6.93765 9.00237C6.69468 9.0177 6.46565 9.12113 6.29351 9.29328C6.12136 9.46542 6.01793 9.69445 6.0026 9.93742C5.98727 10.1804 6.0611 10.4206 6.21024 10.613L6.29324 10.707L8.29324 12.707L8.38724 12.79C8.56262 12.9261 8.77828 12.9999 9.00024 12.9999C9.22221 12.9999 9.43787 12.9261 9.61324 12.79L9.70724 12.707L13.7072 8.70701L13.7902 8.61301C13.9395 8.42061 14.0134 8.18036 13.9981 7.93733C13.9829 7.69431 13.8794 7.46521 13.7072 7.29302Z' fill='%23000000'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.0002 1.34001C16.5085 2.21087 17.7632 3.46054 18.6401 4.96531C19.5169 6.47009 19.9856 8.17779 19.9997 9.91935C20.0137 11.6609 19.5727 13.376 18.7203 14.8947C17.8678 16.4135 16.6335 17.6832 15.1395 18.5783C13.6455 19.4734 11.9436 19.9628 10.2023 19.9981C8.46107 20.0333 6.74079 19.6132 5.2118 18.7793C3.6828 17.9453 2.39812 16.7265 1.48491 15.2435C0.571706 13.7605 0.0616534 12.0647 0.00524426 10.324L0.000244141 10L0.00524426 9.67601C0.0612473 7.94901 0.563792 6.26598 1.46388 4.79101C2.36398 3.31604 3.6309 2.09947 5.14114 1.2599C6.65137 0.420327 8.35339 -0.0135887 10.0813 0.000452316C11.8091 0.0144933 13.5038 0.476012 15.0002 1.34001ZM13.7072 7.29302C13.5351 7.12084 13.306 7.01741 13.0629 7.00213C12.8199 6.98685 12.5796 7.06076 12.3872 7.21001L12.2932 7.29302L9.00024 10.585L7.70724 9.29301L7.61324 9.21001C7.42083 9.06087 7.18062 8.98704 6.93765 9.00237C6.69468 9.0177 6.46565 9.12113 6.29351 9.29328C6.12136 9.46542 6.01793 9.69445 6.0026 9.93742C5.98727 10.1804 6.0611 10.4206 6.21024 10.613L6.29324 10.707L8.29324 12.707L8.38724 12.79C8.56262 12.9261 8.77828 12.9999 9.00024 12.9999C9.22221 12.9999 9.43787 12.9261 9.61324 12.79L9.70724 12.707L13.7072 8.70701L13.7902 8.61301C13.9395 8.42061 14.0134 8.18036 13.9981 7.93733C13.9829 7.69431 13.8794 7.46521 13.7072 7.29302Z' fill='%23000000'/%3E%3C/svg%3E");-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;background-color:color-mix(in srgb,var(--cya11y-focus-ring-color, var(--cya11y-primary-color, #1863DC)) 25%,var(--cya11y-bg-white, #fff));position:absolute;top:10px;right:10px;width:20px;height:20px}.cya11y-profile-items .cya11y-btn.cya11y-selected span,.cya11y-profile-items .cya11y-btn.cya11y-selected svg path{color:var(--cya11y-text-white, #fff);stroke:var(--cya11y-text-white, #fff)}.cya11y-profile-title-container{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding-left:var(--cya11y-spacing-md, 16px);padding-right:var(--cya11y-spacing-md, 16px);gap:var(--cya11y-spacing-sm, 12px);border-radius:var(--cya11y-radius-md, 12px);border:1.5px solid transparent;transition:border var(--cya11y-transition-normal, .2s)}.cya11y-profile-title-container:hover{border:1.5px solid color-mix(in srgb,var(--cya11y-primary-color) 85%,white)}.cya11y-profile-title{width:100%;height:64px;border-radius:var(--cya11y-radius-md, 12px);cursor:pointer}.cya11y-profile-title:focus,.cya11y-profile-title:focus-visible{outline:none}.cya11y-profile-title-container:has(.cya11y-profile-title:focus-visible){outline:3px solid var(--cya11y-focus-ring-color, var(--cya11y-primary-color, #1863DC));outline-offset:2px;border-radius:var(--cya11y-radius-md, 12px)}.cya11y-arrow{margin-left:auto;font-size:18px;color:color-mix(in srgb,var(--cya11y-primary-color) 85%,white);transition:transform var(--cya11y-transition-normal, .2s) ease-in-out;rotate:270deg}.cya11y-arrow-rotate{transform:rotate(90deg)}.cya11y-items{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.75rem}.cya11y-btn{aspect-ratio:6 / 5;border-radius:var(--cya11y-radius-md, 12px);padding:0 12px;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:var(--cya11y-text-primary, #333);font-size:16px;background:var(--cya11y-bg-white, #fff);border:1px solid var(--cya11y-border-light, #E9EAEC);transition:border-color var(--cya11y-transition-normal, .2s) ease;cursor:pointer;word-break:break-word;gap:10px;position:relative;width:auto;height:auto}.cya11y-btn .cya11y-translate,.cya11y-adjust-font .cya11y-label div{font-size:14px;font-weight:500;line-height:22px}.cya11y-btn svg{width:34px;height:34px;min-width:34px;min-height:34px;max-width:34px;max-height:34px}.cya11y-btn:hover{border:2px solid var(--cya11y-primary-color, #1863DC)}.cya11y-btn.cya11y-selected{border:2px solid var(--cya11y-focus-ring-color, var(--cya11y-primary-color, #1863DC))}.cya11y-btn:focus-visible{outline:3px solid var(--cya11y-focus-ring-color, var(--cya11y-primary-color, #1863DC));outline-offset:2px}.cya11y-btn.cya11y-selected{box-shadow:var(--cya11y-shadow-focus, 0px 0px 0px 6px rgba(24, 99, 220, .14))}.cya11y-btn.cya11y-selected svg,.cya11y-btn.cya11y-selected svg path,.cya11y-btn.cya11y-selected span{stroke:var(--cya11y-primary-color, #1863DC);color:var(--cya11y-primary-color, #1863DC)}.cya11y-btn.cya11y-selected:after{content:"";display:inline-block;-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.0002 1.34014C16.5085 2.21099 17.7632 3.46066 18.6401 4.96544C19.5169 6.47021 19.9856 8.17791 19.9997 9.91948C20.0137 11.661 19.5727 13.3761 18.7203 14.8948C17.8678 16.4136 16.6335 17.6834 15.1395 18.5785C13.6455 19.4736 11.9436 19.963 10.2023 19.9982C8.46107 20.0334 6.74079 19.6133 5.2118 18.7794C3.6828 17.9455 2.39812 16.7267 1.48491 15.2437C0.571706 13.7606 0.0616534 12.0648 0.00524426 10.3241L0.000244141 10.0001L0.00524426 9.67614C0.0612473 7.94913 0.563792 6.2661 1.46388 4.79113C2.36398 3.31616 3.6309 2.09959 5.14114 1.26002C6.65137 0.420449 8.35339 -0.0134666 10.0813 0.000574386C11.8091 0.0146154 13.5038 0.476134 15.0002 1.34014ZM13.7072 7.29314C13.5351 7.12096 13.306 7.01753 13.0629 7.00225C12.8199 6.98697 12.5796 7.06089 12.3872 7.21014L12.2932 7.29314L9.00024 10.5851L7.70724 9.29314L7.61324 9.21014C7.42083 9.06099 7.18062 8.98716 6.93765 9.00249C6.69468 9.01782 6.46565 9.12125 6.29351 9.2934C6.12136 9.46554 6.01793 9.69457 6.0026 9.93754C5.98727 10.1805 6.0611 10.4207 6.21024 10.6131L6.29324 10.7071L8.29324 12.7071L8.38724 12.7901C8.56262 12.9262 8.77828 13.0001 9.00024 13.0001C9.22221 13.0001 9.43787 12.9262 9.61324 12.7901L9.70724 12.7071L13.7072 8.70714L13.7902 8.61314C13.9395 8.42073 14.0134 8.18048 13.9981 7.93746C13.9829 7.69443 13.8794 7.46533 13.7072 7.29314Z' fill='%23000000'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.0002 1.34014C16.5085 2.21099 17.7632 3.46066 18.6401 4.96544C19.5169 6.47021 19.9856 8.17791 19.9997 9.91948C20.0137 11.661 19.5727 13.3761 18.7203 14.8948C17.8678 16.4136 16.6335 17.6834 15.1395 18.5785C13.6455 19.4736 11.9436 19.963 10.2023 19.9982C8.46107 20.0334 6.74079 19.6133 5.2118 18.7794C3.6828 17.9455 2.39812 16.7267 1.48491 15.2437C0.571706 13.7606 0.0616534 12.0648 0.00524426 10.3241L0.000244141 10.0001L0.00524426 9.67614C0.0612473 7.94913 0.563792 6.2661 1.46388 4.79113C2.36398 3.31616 3.6309 2.09959 5.14114 1.26002C6.65137 0.420449 8.35339 -0.0134666 10.0813 0.000574386C11.8091 0.0146154 13.5038 0.476134 15.0002 1.34014ZM13.7072 7.29314C13.5351 7.12096 13.306 7.01753 13.0629 7.00225C12.8199 6.98697 12.5796 7.06089 12.3872 7.21014L12.2932 7.29314L9.00024 10.5851L7.70724 9.29314L7.61324 9.21014C7.42083 9.06099 7.18062 8.98716 6.93765 9.00249C6.69468 9.01782 6.46565 9.12125 6.29351 9.2934C6.12136 9.46554 6.01793 9.69457 6.0026 9.93754C5.98727 10.1805 6.0611 10.4207 6.21024 10.6131L6.29324 10.7071L8.29324 12.7071L8.38724 12.7901C8.56262 12.9262 8.77828 13.0001 9.00024 13.0001C9.22221 13.0001 9.43787 12.9262 9.61324 12.7901L9.70724 12.7071L13.7072 8.70714L13.7902 8.61314C13.9395 8.42073 14.0134 8.18048 13.9981 7.93746C13.9829 7.69443 13.8794 7.46533 13.7072 7.29314Z' fill='%23000000'/%3E%3C/svg%3E");-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;background-color:var(--cya11y-focus-ring-color, var(--cya11y-primary-color, #1863DC));position:absolute;top:10px;right:10px;width:20px;height:20px}.cya11y-adjust-font{background:var(--cya11y-bg-white, #fff);padding-top:10px;padding-bottom:13px;border:1px solid var(--cya11y-border-light, #E9EAEC);border-radius:var(--cya11y-radius-md, 12px);box-shadow:none;transition:outline var(--cya11y-transition-normal, .2s) ease;grid-column:span 2}.cya11y-adjust-font .cya11y-label{display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:500;color:var(--cya11y-text-secondary, #293C5B);margin-bottom:10px}.cya11y-adjust-font .cya11y-label svg{margin-right:var(--cya11y-spacing-sm, 12px);width:36px;height:36px;min-width:36px;min-height:36px;max-width:36px;max-height:36px;fill:var(--cya11y-text-secondary, #293C5B)}.cya11y-adjust-font>div:last-child{display:flex;justify-content:center;align-items:center;gap:10px;margin-top:var(--cya11y-spacing-sm, 12px)}.cya11y-adjust-font svg{width:24px;height:24px;min-width:24px;min-height:24px;max-width:24px;max-height:24px}.cya11y-plus,.cya11y-minus{background-color:var(--cya11y-bg-primary, #eff1f5);border:2px solid transparent;transition:border var(--cya11y-transition-normal, .2s) ease}.cya11y-plus:hover,.cya11y-minus:hover{border-color:var(--cya11y-primary-color, #1863DC)}.cya11y-adjust-font .cya11y-minus:focus-visible,.cya11y-adjust-font .cya11y-plus:focus-visible{outline:3px solid var(--cya11y-focus-ring-color, var(--cya11y-primary-color, #1863DC));outline-offset:3px}.cya11y-adjust-font .cya11y-minus,.cya11y-adjust-font .cya11y-plus{background:var(--cya11y-primary-color, #1863DC);border-radius:var(--cya11y-radius-full, 50%);width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;box-shadow:none;transition:background var(--cya11y-transition-normal, .2s)}.cya11y-adjust-font .cya11y-minus svg,.cya11y-adjust-font .cya11y-plus svg{fill:var(--cya11y-text-white, #fff);width:38px;height:38px}.cya11y-adjust-font .cya11y-minus:hover,.cya11y-adjust-font .cya11y-plus:hover{background:var(--cya11y-primary-color, #1863DC)}.cya11y-adjust-font:hover{outline:2px solid var(--cya11y-primary-color, #1863DC)}.cya11y-amount{font-size:14px;font-weight:400;color:var(--cya11y-primary-color, #1863DC)}.cya11y-adjust-font .cya11y-amount{background:#e9eaec;color:var(--cya11y-primary-color, #1863DC);font-size:14px;font-weight:400;border-radius:40px;min-width:100px;min-height:40px;display:flex;align-items:center;justify-content:center;margin:0 10px;box-shadow:none;letter-spacing:.01em}.cya11y-footer{bottom:0;left:0;right:0;background:var(--cya11y-bg-white, #fff);padding:14px var(--cya11y-spacing-lg, 20px) 10px;display:flex;align-items:center;justify-content:space-between;gap:12px;border-top:2px solid var(--cya11y-bg-primary, #eff1f5)}.cya11y-footer .cya11y-footer-statement-link{display:inline-flex;align-items:center;gap:6px;font-size:15px;font-weight:500;color:var(--cya11y-text-primary, #293C5B);text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:.25ch}.cya11y-footer .cya11y-footer-statement-link:hover,.cya11y-footer .cya11y-footer-statement-link:hover span{color:var(--cya11y-primary-color, #1863DC)}.cya11y-footer .cya11y-footer-statement-link:focus-visible{outline:3px solid var(--cya11y-focus-ring-color, var(--cya11y-primary-color, #1863DC));outline-offset:2px;border-radius:2px}.cya11y-statement-external-icon{display:none;align-items:center;color:var(--cya11y-text-primary, #293C5B);line-height:0}.cya11y-footer-statement-link.cya11y-statement-external .cya11y-statement-external-icon{display:inline-flex}.cya11y-statement-external-icon svg{width:16px;height:16px;display:block}.cya11y-footer .cya11y-footer-brand{margin-left:auto;line-height:0}.cya11y-footer a{font-size:16px;text-decoration:none;color:var(--cya11y-text-primary, #333);background:transparent;font-weight:600}.cya11y-footer a:hover,.cya11y-footer a:hover span,.cya11y-footer a:focus-visible,.cya11y-footer a:focus-visible span{color:var(--cya11y-focus-ring-color, var(--cya11y-primary-color, #1863DC))}.cya11y-footer a:focus-visible{outline:2px solid var(--cya11y-focus-ring-color, var(--cya11y-primary-color, #1863DC));outline-offset:2px;border-radius:2px}.cya11y-footer-logo{height:30px;width:auto;display:block;max-width:100%}.cya11y-custom-select{position:relative;width:100%;font-family:inherit;font-size:16px}.cya11y-selected-lang{display:flex;align-items:center;gap:var(--cya11y-spacing-sm, 12px);background:var(--cya11y-bg-white, #fff);border-radius:var(--cya11y-radius-md, 12px);padding:15px;cursor:pointer;user-select:none;transition:border var(--cya11y-transition-normal, .2s);border:1.5px solid transparent}.cya11y-selected-lang:focus{outline:none}.cya11y-selected-lang:hover{border:1.5px solid color-mix(in srgb,var(--cya11y-primary-color) 85%,white)}.cya11y-selected-lang:focus-visible{outline:2px solid var(--cya11y-focus-ring-color, var(--cya11y-primary-color, #1863DC));outline-offset:2px;border:1.5px solid var(--cya11y-focus-ring-color, var(--cya11y-primary-color, #1863DC))}.cya11y-lang-code{display:inline-flex;align-items:center;justify-content:center;background:var(--cya11y-border-light, #E9EAEC);color:var(--cya11y-text-muted, #3D3E50);font-weight:400;border-radius:var(--cya11y-radius-full, 50%);width:32px;height:32px;font-size:14px;text-transform:uppercase}.cya11y-dropdown-list{position:absolute;top:110%;left:0;width:100%;background:var(--cya11y-bg-white, #fff);border:1px solid var(--cya11y-border-focus, #dbeafe);border-radius:var(--cya11y-radius-md, 12px);box-shadow:var(--cya11y-shadow-md, 0 8px 24px rgba(41, 60, 91, .08));z-index:var(--cya11y-z-dropdown, 100);padding:var(--cya11y-spacing-xs, 8px) 0 0 0;max-height:320px;overflow:auto;transition:box-shadow var(--cya11y-transition-normal, .2s)}.cya11y-lang-search{height:48px;width:80%;margin:0 5%;margin-bottom:var(--cya11y-spacing-xs, 8px);padding:0 var(--cya11y-spacing-md, 16px);border:1.5px solid transparent;border-radius:4px;font-size:15px}.cya11y-lang-search:focus{outline:none;border:1.5px solid color-mix(in srgb,var(--cya11y-primary-color, #1863DC) 85%,white)}.cya11y-lang-options{max-height:240px;overflow-y:auto}.cya11y-lang-option{display:flex;align-items:center;gap:var(--cya11y-spacing-sm, 12px);padding:var(--cya11y-spacing-xs, 8px) var(--cya11y-spacing-md, 16px);cursor:pointer;transition:background var(--cya11y-transition-fast, .15s)}.cya11y-lang-option.selected{background:var(--cya11y-primary-light, #D1E0F8)}.cya11y-lang-option:hover,.cya11y-lang-option:focus-visible{background:#f1f6fd}.cya11y-lang-option:focus-visible{outline:2px solid var(--cya11y-focus-ring-color, var(--cya11y-primary-color, #1863DC));outline-offset:-2px}.cya11y-lang-label{color:inherit;font-size:15px;font-weight:500}.cya11y-menu .cya11y-select{width:100%;padding:0 15px;font-size:16px;font-family:inherit;font-weight:600;border-radius:var(--cya11y-radius-lg, 45px);background:var(--cya11y-bg-white, #fff);border:none;min-height:45px;max-height:45px;height:45px;color:inherit}.cya11y-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:var(--cya11y-z-overlay, 10000)}@media only screen and (max-width: 560px){.cya11y-menu{width:100%}.cya11y-profile-items{grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem;padding:0 var(--cya11y-spacing-sm, 12px) var(--cya11y-spacing-sm, 12px) var(--cya11y-spacing-sm, 12px)}}@media only screen and (max-width: 420px){.cya11y-items{grid-template-columns:repeat(2,minmax(0,1fr));gap:.5rem}.cya11y-profile-items{grid-template-columns:1fr;gap:.5rem;padding:0 var(--cya11y-spacing-xs, 8px) var(--cya11y-spacing-xs, 8px) var(--cya11y-spacing-xs, 8px);justify-items:center}}.cya11y-text-align .cya11y-text-align-icon{display:none}.cya11y-text-align[data-state=off] .cya11y-text-align-icon[data-icon=left],.cya11y-text-align[data-state=left] .cya11y-text-align-icon[data-icon=left],.cya11y-text-align[data-state=right] .cya11y-text-align-icon[data-icon=right],.cya11y-text-align[data-state=center] .cya11y-text-align-icon[data-icon=center]{display:inline-flex}.cya11y-text-align .cya11y-text-align-progress{display:none;position:absolute;bottom:6px;left:50%;transform:translate(-50%);gap:4px;pointer-events:none}.cya11y-text-align:not([data-state=off]) .cya11y-text-align-progress{display:inline-flex}.cya11y-text-align .cya11y-text-align-segment{width:14px;height:3px;border-radius:2px;background:var(--cya11y-border-light, #E9EAEC);transition:background-color var(--cya11y-transition-normal, .2s) ease}.cya11y-text-align[data-state=left] .cya11y-text-align-segment[data-pos=left],.cya11y-text-align[data-state=center] .cya11y-text-align-segment[data-pos=center],.cya11y-text-align[data-state=right] .cya11y-text-align-segment[data-pos=right]{background:var(--cya11y-primary-color, #1863DC)}
`;

  // src/views/menu/toggleMenu.ts
  function toggleMenu() {
    const isVisible = $menu.style.display !== "none";
    const shadowRoot = $menu.getRootNode();
    const $overlay = shadowRoot.querySelector(".cya11y-overlay");
    if (String($menu.style.display) !== "none" || isVisible) {
      $menu.style.display = "none";
      $overlay.style.display = "none";
      if ($menu._escapeKeyHandler) {
        document.removeEventListener("keydown", $menu._escapeKeyHandler);
        delete $menu._escapeKeyHandler;
      }
      const widgetContainer = document.querySelector("#cya11y-container");
      if (widgetContainer) {
        const widgetShadowRoot = widgetContainer.shadowRoot;
        if (widgetShadowRoot) {
          const widgetButton = widgetShadowRoot.querySelector(".cya11y-menu-btn");
          if (widgetButton) {
            widgetButton.setAttribute("aria-expanded", "false");
            widgetButton.focus();
          }
        }
      }
    } else {
      $menu.style.display = "block";
      $overlay.style.display = "block";
      const handleEscapeKey = (event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          toggleMenu();
          document.removeEventListener("keydown", handleEscapeKey);
        }
      };
      document.addEventListener("keydown", handleEscapeKey);
      $menu._escapeKeyHandler = handleEscapeKey;
      const widgetContainer = document.querySelector("#cya11y-container");
      if (widgetContainer) {
        const widgetShadowRoot = widgetContainer.shadowRoot;
        if (widgetShadowRoot) {
          const widgetButton = widgetShadowRoot.querySelector(".cya11y-menu-btn");
          if (widgetButton) {
            widgetButton.setAttribute("aria-expanded", "true");
          }
        }
      }
    }
  }

  // src/views/widget/widget.css
  var widget_default = ".cya11y-widget,.cya11y-menu{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:400;-webkit-font-smoothing:antialiased}.cya11y-widget *,.cya11y-menu *{box-sizing:border-box!important}.cya11y-sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.cya11y-menu-title-container{display:flex;align-items:center;gap:5px}.cya11y-menu-btn{position:fixed;z-index:500000;right:30px;bottom:30px;box-shadow:0 0 0 calc(var(--cya11y-size, 44px) * .09) var(--cya11y-primary-color, #1863DC),0 5px 15px #252c6126,0 2px 4px #5d649433;transition:transform .2s ease,box-shadow .2s ease;border-radius:50%;align-items:center;justify-content:center;width:var(--cya11y-size, 44px);height:var(--cya11y-size, 44px);display:flex;cursor:pointer;text-decoration:none!important;background:var(--cya11y-primary-color, #1863DC);border:3px solid #ffffff!important;background-clip:padding-box;outline:none;color:#fff}button.cya11y-menu-btn:focus-visible{outline:3px solid var(--cya11y-focus-ring-color, var(--cya11y-primary-color, #1863DC));outline-offset:calc(var(--cya11y-size, 44px) * .09 + 3px);box-shadow:0 0 0 calc(var(--cya11y-size, 44px) * .09) var(--cya11y-primary-color, #1863DC),0 5px 15px #252c6126,0 2px 4px #5d649433}.cya11y-menu-btn svg{width:85%;max-width:85%;background:transparent!important}.cya11y-menu-btn:hover{transform:scale(1.05)}.cya11y-menu-btn:active{transform:scale(.98)}.cya11y-widget-icon{width:var(--cya11y-size, 44px);height:var(--cya11y-size, 44px);position:fixed;z-index:500000}@media (prefers-contrast: high){.cya11y-menu-btn{border:3px solid transparent!important;background-clip:padding-box;box-shadow:0 0 0 calc(var(--cya11y-size, 44px) * .09) #000,0 5px 15px #252c614d}button.cya11y-menu-btn:focus-visible{outline:3px solid #000000;outline-offset:calc(var(--cya11y-size, 44px) * .09 + 3px);box-shadow:0 0 0 calc(var(--cya11y-size, 44px) * .09) #000,0 5px 15px #252c6126}}@media (prefers-reduced-motion: reduce){.cya11y-menu-btn{transition:none}.cya11y-menu-btn:hover{transform:none}}@media only screen and (max-width: 768px){.cya11y-menu-btn{width:42px;height:42px}.cya11y-menu-btn svg{width:26px;height:26px;min-height:26px;min-width:26px;max-width:26px;max-height:26px}}\n";

  // src/utils/device.ts
  var MOBILE_BREAKPOINT = 768;
  function isMobileDevice() {
    return window.innerWidth < MOBILE_BREAKPOINT;
  }
  function getCurrentDevice() {
    return isMobileDevice() ? "mobile" : "desktop";
  }

  // src/icons/accessibility.ts
  var Accessibility = `
   <svg viewBox="0 0 24 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
     <path
       d="M11.8001 20.032L11.1521 26.206C11.1245 26.4672 11.0457 26.7204 10.9203 26.9512C10.7949 27.1819 10.6252 27.3857 10.421 27.5509C10.2168 27.7161 9.98208 27.8395 9.73021 27.914C9.47834 27.9884 9.21427 28.0126 8.95307 27.985C8.69187 27.9574 8.43866 27.8787 8.2079 27.7532C7.97714 27.6278 7.77334 27.4581 7.60814 27.2539C7.44295 27.0497 7.31959 26.815 7.24511 26.5631C7.17063 26.3113 7.14649 26.0472 7.17407 25.786L8.62007 12.02H2.00007C1.46884 12.02 0.959371 11.809 0.583735 11.4333C0.2081 11.0577 -0.00292969 10.5482 -0.00292969 10.017C-0.00292969 9.48577 0.2081 8.9763 0.583735 8.60067C0.959371 8.22503 1.46884 8.014 2.00007 8.014H22.0001C22.5313 8.014 23.0408 8.22503 23.4164 8.60067C23.792 8.9763 24.0031 9.48577 24.0031 10.017C24.0031 10.5482 23.792 11.0577 23.4164 11.4333C23.0408 11.809 22.5313 12.02 22.0001 12.02H15.3801L16.8261 25.79C16.8628 26.0559 16.8456 26.3264 16.7756 26.5855C16.7057 26.8446 16.5844 27.087 16.4189 27.2982C16.2533 27.5095 16.0471 27.6853 15.8122 27.8153C15.5774 27.9452 15.3189 28.0266 15.052 28.0547C14.7851 28.0827 14.5152 28.0568 14.2585 27.9785C14.0019 27.9001 13.7635 27.771 13.5577 27.5987C13.352 27.4264 13.1829 27.2146 13.0607 26.9756C12.9384 26.7367 12.8654 26.4757 12.8461 26.208L12.2001 20.032H11.8001ZM12.0001 8.012C9.79007 8.012 8.00007 6.218 8.00007 4.006C8.00007 1.794 9.79007 0 12.0001 0C14.2101 0 16.0001 1.794 16.0001 4.006C16.0009 4.53179 15.898 5.05258 15.6973 5.53858C15.4966 6.02457 15.2021 6.46624 14.8306 6.83831C14.4591 7.21038 14.0179 7.50555 13.5322 7.70695C13.0465 7.90834 12.5259 8.012 12.0001 8.012Z"
       fill="currentColor" />
   </svg>
   `;

  // src/icons/assist.ts
  var Assist = `<svg viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.456055 15.2607C0.456063 19.7696 4.11123 23.4248 8.62012 23.4248C12.0774 23.4248 15.0296 21.2763 16.2207 18.2451L16.3301 17.9492L16.3633 17.8379C16.4953 17.2835 16.1883 16.7084 15.6387 16.5166C15.0886 16.3248 14.4901 16.5848 14.249 17.1016L14.2061 17.208L14.126 17.4228C13.2621 19.621 11.1214 21.1748 8.62012 21.1748C5.35387 21.1748 2.70606 18.527 2.70605 15.2607C2.70605 12.5025 4.59543 10.183 7.15137 9.53027L7.40039 9.47265L7.51172 9.44336C8.05538 9.27083 8.39091 8.71087 8.27148 8.14062C8.15202 7.57074 7.62056 7.19323 7.05371 7.25293L6.93945 7.2705L6.5957 7.35058C3.06643 8.25152 0.456055 11.4497 0.456055 15.2607Z" fill="currentColor"/>
<path d="M10.3848 2.5752C10.3848 3.61071 9.54527 4.4502 8.50976 4.4502C7.47424 4.4502 6.63476 3.61071 6.63476 2.5752C6.63476 1.53968 7.47424 0.700195 8.50976 0.700195C9.54527 0.700195 10.3848 1.53968 10.3848 2.5752Z" fill="currentColor"/>
<path d="M20.0073 19.3406L14.9273 14.2605H9.9834V11.4127H14.9655C15.7421 11.4127 16.3718 10.7831 16.3718 10.0064C16.3718 9.22982 15.7421 8.60019 14.9655 8.60019H9.9834V7.25853C9.9834 6.49227 9.3826 5.84455 8.61666 5.82355C7.82194 5.8018 7.1709 6.43949 7.1709 7.22928V16.1355C7.1709 16.6533 7.59062 17.073 8.1084 17.073H13.7623L18.0186 21.3294C18.5678 21.8785 19.4581 21.8785 20.0073 21.3294C20.5565 20.7802 20.5565 19.8898 20.0073 19.3406Z" fill="currentColor"/>
<path d="M18.8955 5C18.8955 4.4201 19.3654 3.95019 19.9453 3.95019C20.5252 3.95019 20.9951 4.4201 20.9951 5V12.4883C20.9951 13.0682 20.5252 13.5381 19.9453 13.5381H12C11.4201 13.5381 10.9502 13.0682 10.9502 12.4883C10.9502 11.9084 11.4201 11.4385 12 11.4385H18.8955V5Z" fill="currentColor"/>
</svg>
`;

  // src/icons/default.ts
  var DefaultIcon = `
<svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M15.5078 9.20507C17.9927 9.20507 20.007 7.17551 20.007 4.6724V4.53273C20.007 2.02961 17.9927 6.10352e-05 15.5078 6.10352e-05C13.0229 6.10352e-05 11.0087 2.02961 11.0087 4.53273V4.6724C11.0087 7.17551 13.0229 9.20507 15.5078 9.20507Z"
        fill="currentColor"
    />
    <path
        d="M10.0938 19.689L2.52471 27.1219C1.83818 27.7941 1.82307 28.9027 2.49232 29.5945L4.3058 31.4713C4.97074 32.1587 6.06098 32.174 6.74319 31.504L14.5239 23.8615L10.0938 19.6868V19.689Z"
        fill="currentColor"
    />
    <path
        d="M28.4812 10.1043C29.1612 9.43214 29.1742 8.33007 28.5114 7.64046L26.7022 5.75712C26.0351 5.06315 24.9384 5.05005 24.254 5.72657L15.042 14.8443L9.91249 9.91662C9.32095 9.34922 8.38615 9.37104 7.82052 9.96681L5.71991 12.1862C5.1478 12.7885 5.17587 13.7488 5.78036 14.3183L14.8413 22.8512C15.042 23.0389 15.3529 23.0345 15.5472 22.8403L19.0468 19.342L15.9704 23.9118L24.0684 31.5325C24.7635 32.1871 25.8516 32.15 26.5036 31.4517L28.2135 29.6142C28.8676 28.9093 28.8331 27.8007 28.1336 27.1416L19.5002 18.9951L28.479 10.1043H28.4812Z"
        fill="currentColor"
    />
</svg>
   `;

  // src/icons/wheel.ts
  var wheel = `<svg  viewBox="0 0 20 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3572 19.3372L14.2778 14.2578H9.33459V11.4104H14.316C15.0926 11.4104 15.7221 10.7809 15.7221 10.0043C15.7221 9.22779 15.0926 8.59825 14.316 8.59825H9.33459V7.25677C9.33459 6.49061 8.73387 5.84298 7.96804 5.82198C7.17342 5.80019 6.52246 6.43783 6.52246 7.22753V16.1326C6.52246 16.6503 6.94212 17.07 7.45984 17.07H13.113L17.3687 21.3257C17.9179 21.8748 18.8081 21.8748 19.3572 21.3257C19.9063 20.7766 19.9063 19.8864 19.3572 19.3372Z" fill="currentColor"/>
<path d="M10.1749 2.73937C10.4575 1.54389 9.71744 0.345677 8.52196 0.0630863C7.32648 -0.219504 6.12827 0.52054 5.84568 1.71602C5.56309 2.9115 6.30313 4.10971 7.49861 4.3923C8.69409 4.67489 9.8923 3.93485 10.1749 2.73937Z" fill="currentColor"/>
<path d="M13.4658 19.4113C12.371 21.3118 10.3186 22.5939 7.97225 22.5939C4.47908 22.5939 1.63714 19.752 1.63714 16.2589C1.63714 13.7925 3.05403 11.651 5.1164 10.605V9.06375C2.25722 10.2027 0.231079 12.9985 0.231079 16.2589C0.231079 20.5273 3.70377 24 7.97225 24C10.7043 24 13.1103 22.5773 14.4884 20.4339L13.4658 19.4113Z" fill="currentColor"/>
</svg>
`;

  // src/views/widget/renderButton.ts
  var ICON_LIBRARY = [
    { id: "default", icon: DefaultIcon },
    { id: "accessibility", icon: Accessibility },
    { id: "assist", icon: Assist },
    { id: "wheel", icon: wheel }
  ];
  function getWidgetEl() {
    return document.querySelector("#cya11y-container")?.shadowRoot?.querySelector(".cya11y-widget") ?? null;
  }
  function hexToRgb(hex) {
    const cleaned = hex.replace("#", "");
    if (!/^[0-9a-fA-F]{6}$/.test(cleaned)) return null;
    return [
      parseInt(cleaned.slice(0, 2), 16),
      parseInt(cleaned.slice(2, 4), 16),
      parseInt(cleaned.slice(4, 6), 16)
    ];
  }
  function getRelativeLuminance(r, g, b) {
    const toLinear = (c) => {
      const s = c / 255;
      return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
  }
  function getContrastRatio(hex1, hex2) {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);
    if (!rgb1 || !rgb2) return 1;
    const l1 = getRelativeLuminance(...rgb1);
    const l2 = getRelativeLuminance(...rgb2);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  }
  var POSITION_STYLES = {
    "bottom-right": (m) => ({ bottom: `${m.bottom}px`, right: `${m.right}px`, left: "auto" }),
    "top-left": (m) => ({ top: `${m.top}px`, left: `${m.left}px`, bottom: "auto", right: "auto" }),
    "top-right": (m) => ({ top: `${m.top}px`, right: `${m.right}px`, left: "auto", bottom: "auto" }),
    "bottom-left": (m) => ({ bottom: `${m.bottom}px`, left: `${m.left}px`, right: "auto" })
  };
  function getButtonStyle(config) {
    const device = getCurrentDevice();
    const currentPosition = config.position[device];
    const currentMargins = config.margins[device];
    const positionStyle = POSITION_STYLES[currentPosition];
    return positionStyle ? positionStyle(currentMargins) : POSITION_STYLES["bottom-left"](currentMargins);
  }
  function handleButtonKeydown(event, button, onActivate) {
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        onActivate();
        break;
      case "Escape": {
        const shadowRoot = document.querySelector("#cya11y-container")?.shadowRoot;
        const menu = shadowRoot?.querySelector(".cya11y-menu");
        if (menu && menu.style.display !== "none") {
          menu.querySelector(".cya11y-menu-close")?.click();
          button.setAttribute("aria-expanded", "false");
        }
        break;
      }
    }
  }
  function renderButton({ config, label, onActivate }) {
    try {
      const device = getCurrentDevice();
      const deviceStatus = device === "mobile" ? config.status.mobile : config.status.desktop;
      if (!deviceStatus) return null;
      const $container = document.createElement("div");
      $container.id = "cya11y-container";
      const shadow = $container.attachShadow({ mode: "open" });
      const currentPosition = config.position[device];
      const selectedIcon = ICON_LIBRARY.find((icon) => icon.id === config.iconId);
      shadow.innerHTML = `
      <style id="cya11y-widget-css">${widget_default}</style>
      <div class="cya11y-widget" data-position="${currentPosition}">
        <div class="cya11y-widget-icon">
          <button
             class="cya11y-menu-btn"
             aria-label="${label}"
             title="${label}"
             aria-expanded="false"
             aria-haspopup="dialog"
             role="button"
             type="button"
             tabindex="0">
            <span class="cya11y-btn-content" aria-hidden="true">
              ${selectedIcon?.icon || DefaultIcon}
            </span>
            <span class="cya11y-sr-only" aria-hidden="true">Open accessibility menu</span>
          </button>
        </div>
      </div>
    `;
      const $widget2 = shadow.querySelector(".cya11y-widget");
      if (!$widget2) throw new Error("Failed to find widget element");
      $widget2.style.setProperty("--cya11y-primary-color", config.primaryColor);
      $widget2.style.setProperty("--cya11y-size", `${config.iconSize}px`);
      const contrastWithWhite = getContrastRatio(config.primaryColor, "#ffffff");
      const primaryVisibleOnWhite = contrastWithWhite >= 3;
      const customFocusRing = config.focusRingColor;
      $widget2.style.setProperty(
        "--cya11y-focus-color-on-primary",
        customFocusRing || (primaryVisibleOnWhite ? "#ffffff" : "#000000")
      );
      $widget2.style.setProperty(
        "--cya11y-focus-color-on-white",
        primaryVisibleOnWhite ? config.primaryColor : "#000000"
      );
      const focusRingColor = customFocusRing || (primaryVisibleOnWhite ? config.primaryColor : "#000000");
      $widget2.style.setProperty("--cya11y-focus-ring-color", focusRingColor);
      const shadowSourceColor = customFocusRing || config.primaryColor;
      const rgb = hexToRgb(shadowSourceColor);
      const shadowColor = rgb && (customFocusRing || primaryVisibleOnWhite) ? `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.14)` : "rgba(0, 0, 0, 0.14)";
      $widget2.style.setProperty("--cya11y-shadow-focus", `0px 0px 0px 6px ${shadowColor}`);
      const $btn = $widget2.querySelector(".cya11y-menu-btn");
      const $icon = $widget2.querySelector(".cya11y-widget-icon");
      if ($btn && $icon) {
        Object.assign($btn.style, getButtonStyle(config));
        Object.assign($icon.style, getButtonStyle(config));
        $btn.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          onActivate();
          setTimeout(() => {
            const shadowRoot = document.querySelector("#cya11y-container")?.shadowRoot;
            const menu = shadowRoot?.querySelector(".cya11y-menu");
            if (menu) $btn.setAttribute("aria-expanded", (menu.style.display !== "none").toString());
          }, 10);
        });
        $btn.addEventListener("keydown", (event) => handleButtonKeydown(event, $btn, onActivate));
        $btn.addEventListener("focus", () => $btn.classList.add("cya11y-focus-visible"));
        $btn.addEventListener("blur", () => $btn.classList.remove("cya11y-focus-visible"));
      }
      document.body.insertBefore($container, document.body.firstChild);
      return $widget2;
    } catch (error) {
      console.error("Failed to render widget button:", error);
      return null;
    }
  }

  // src/tools/selectButtons.ts
  function selectButtons($menu2) {
    const states = userSettings.states;
    if (states) {
      const buttons = Array.from(
        $menu2.querySelectorAll(".cya11y-btn")
      );
      Object.entries(states).forEach(([key, value]) => {
        if (value && key !== "fontSize") {
          const selector = key === "contrast" ? states[key] : key;
          const btn = buttons.find((b) => b.dataset.key === selector);
          if (btn) btn.classList.add("cya11y-selected");
        } else {
          const btn = buttons.find((b) => b.dataset.key === key);
          if (btn) btn.classList.remove("cya11y-selected");
          if (key === "contrast") {
            const filterBtn = $menu2.querySelectorAll(".cya11y-filter");
            filterBtn.forEach((btn2) => {
              btn2.classList.remove("cya11y-selected");
            });
          }
        }
      });
    }
  }

  // src/tools/enableProfile.ts
  var FONT_SIZE_PROFILE_DEFAULT = 1.2;
  function enableProfile(profile, $menu2) {
    const profileConfig = PROFILES[profile];
    if (!profileConfig) {
      return;
    }
    userSettings.states.contrast = profileConfig.contrast;
    enableContrast(profileConfig.contrast);
    profileConfig.tools.forEach((tool) => {
      if (tool === "font-size") {
        const current = Number(userSettings.states.fontSize) || 1;
        if (current === 1) {
          userSettings.states.fontSize = FONT_SIZE_PROFILE_DEFAULT;
        }
      } else {
        userSettings.states[tool] = true;
      }
    });
    saveUserSettings();
    renderTools();
    selectButtons($menu2);
    const newFontSize = Number(userSettings.states.fontSize) || 1;
    const amountElement = $menu2.querySelector(".cya11y-amount");
    if (amountElement) {
      amountElement.textContent = `${(newFontSize * 100).toFixed(0)}%`;
    }
  }

  // src/tools/disableProfile.ts
  function disableProfile(profile, $menu2) {
    const profileConfig = PROFILES[profile];
    if (!profileConfig) return;
    disableContrast();
    userSettings.states.contrast = false;
    profileConfig.tools.forEach((tool) => {
      if (tool === "font-size") {
        userSettings.states.fontSize = 1;
      } else {
        userSettings.states[tool] = false;
      }
      saveUserSettings();
    });
    renderTools();
    selectButtons($menu2);
    const newFontSize = Number(userSettings.states.fontSize) || 1;
    const amountElement = $menu2.querySelector(".cya11y-amount");
    if (amountElement) {
      amountElement.textContent = `${(newFontSize * 100).toFixed(0)}%`;
    }
  }

  // src/views/menu/translateWidget.ts
  function getTranslatedLabel(el, defaultValue) {
    const key = el.getAttribute("data-translate") || defaultValue;
    if (!el.hasAttribute("data-translate") && defaultValue) {
      el.setAttribute("data-translate", key);
    }
    return t(key);
  }
  function translateAttribute(el, attr, storeAttr) {
    const original = el.getAttribute(storeAttr) ?? el.getAttribute(attr) ?? "";
    if (!el.hasAttribute(storeAttr)) {
      el.setAttribute(storeAttr, original);
    }
    if (original) {
      el.setAttribute(attr, t(original));
    }
  }
  function translateWidget($menu2) {
    $menu2.querySelectorAll(".cya11y-card-title, .cya11y-translate").forEach((el) => {
      const text = el.textContent?.trim() || "";
      el.textContent = getTranslatedLabel(el, text);
    });
    const $widget2 = getWidgetEl();
    if (!$widget2) return;
    $widget2.querySelectorAll("[title]").forEach((el) => {
      const title = el.getAttribute("title") || "";
      el.setAttribute("title", getTranslatedLabel(el, title));
    });
    $widget2.querySelectorAll("[aria-label]").forEach((el) => {
      translateAttribute(el, "aria-label", "data-translate-aria");
    });
  }

  // src/i18n/changeLanguage.ts
  function changeLanguage(newLang, $menu2) {
    const requested = String(newLang || "").toLowerCase();
    const matched = LANGUAGES.find((lang) => lang.code.toLowerCase() === requested);
    newLang = matched ? matched.code : pluginConfig.language.default;
    if (userSettings.lang !== newLang) {
      userSettings.lang = newLang;
      const $target = $menu2 instanceof HTMLElement ? $menu2 : $menu;
      if ($target) {
        translateWidget($target);
      }
      saveUserSettings();
    }
  }

  // src/icons/arrowIcon.svg
  var arrowIcon_default = '<svg viewbox="0 0 24 24" fill=none height=24 width=24 xmlns=http://www.w3.org/2000/svg><path d="M18 9L12 15L6 9" stroke=black stroke-linecap=round stroke-linejoin=round stroke-width=2 /></svg>';

  // src/utils/getScriptDataAttribute.ts
  function getScriptDataAttribute(attr) {
    if (!attr || typeof attr !== "string") {
      console.warn("Invalid attribute name provided to getScriptDataAttribute:", attr);
      return null;
    }
    const key = `data-cya11y-${attr}`;
    try {
      const script = document.currentScript;
      if (script?.hasAttribute(key)) {
        return script.getAttribute(key);
      }
      const element = document.querySelector(`[${key}]`);
      return element?.getAttribute(key) || null;
    } catch (error) {
      console.error("Error getting script data attribute:", error);
      return null;
    }
  }
  function getDetectedLanguage() {
    return getScriptDataAttribute("lang") || document.documentElement?.lang || navigator?.language || document.querySelector('meta[http-equiv="Content-Language"]')?.getAttribute("content");
  }

  // src/i18n/getDefaultLanguage.ts
  var isSupported = (code) => !!code && LANGUAGES.some((lang) => lang.code === code);
  function getDefaultLanguage() {
    const detected = getDetectedLanguage()?.split(/[-_]/)?.[0]?.trim();
    if (isSupported(detected)) {
      return detected;
    }
    const adminDefault = pluginConfig.language.default;
    if (isSupported(adminDefault)) {
      return adminDefault;
    }
    return "en";
  }

  // src/views/menu/renderLanguageDropdown.ts
  if (!LANGUAGES.some((lang) => lang.code === userSettings.lang)) {
    userSettings.lang = getDefaultLanguage();
  }
  var dropdownOpen = false;
  var outsideClickHandler = null;
  var langBadge = (code) => (code || "").split("-")[0].toUpperCase();
  function renderLanguageDropdown($menu2, filter = "") {
    const $langDropdown = $menu2.querySelector("#cya11y-language-dropdown");
    const filteredLangs = LANGUAGES.filter(
      (lang) => lang.label.toLowerCase().includes(filter.toLowerCase()) || lang.code.toLowerCase().includes(filter.toLowerCase())
    );
    const selectedIndex = filteredLangs.findIndex((l) => l.code === userSettings.lang);
    $langDropdown.innerHTML = `
    <div class="cya11y-custom-select" role="combobox" aria-haspopup="listbox" aria-expanded="${dropdownOpen}">
      <div class="cya11y-selected-lang" id="cya11y-selected-lang" aria-label="Selected language" aria-controls="cya11y-lang-list" aria-haspopup="listbox" tabindex="0">
        <span class="cya11y-lang-code">${langBadge(userSettings.lang)}</span>
        <span class="cya11y-lang-label">${LANGUAGES.find((l) => l.code === userSettings.lang)?.label}</span>
        <span class="cya11y-arrow" aria-hidden="true">
          ${arrowIcon_default}
        </span>
      </div>
      <div class="cya11y-dropdown-list" id="cya11y-lang-list" role="listbox" style="display:${dropdownOpen ? "block" : "none"};">
        <input type="text" id="cya11y-lang-search" class="cya11y-lang-search" placeholder="Search languages" value="${filter}" aria-label="Search languages" />
        <div class="cya11y-lang-options">
          ${filteredLangs.map((lang, i) => `
            <div class="cya11y-lang-option${lang.code === userSettings.lang ? " selected" : ""}" role="option" aria-selected="${lang.code === userSettings.lang}" data-code="${lang.code}" tabindex="-1" data-index="${i}">
              <span class="cya11y-lang-code">${langBadge(lang.code)}</span>
              <span class="cya11y-lang-label">${lang.label}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
    const $selected = $langDropdown.querySelector(".cya11y-selected-lang");
    const $dropdown = $langDropdown.querySelector(".cya11y-dropdown-list");
    const $search = $langDropdown.querySelector(".cya11y-lang-search");
    const $optionsContainer = $dropdown.querySelector(".cya11y-lang-options");
    let focusedOption = selectedIndex >= 0 ? selectedIndex : 0;
    $selected.onclick = (e) => {
      e.stopPropagation();
      if (dropdownOpen) {
        closeDropdown($langDropdown);
        $selected.querySelector(".cya11y-arrow")?.classList.remove("cya11y-arrow-rotate");
      } else {
        openDropdown($langDropdown);
        $selected.querySelector(".cya11y-arrow")?.classList.add("cya11y-arrow-rotate");
        $search?.focus();
      }
    };
    $selected.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        openDropdown($langDropdown);
        $selected.querySelector(".cya11y-arrow")?.classList.add("cya11y-arrow-rotate");
        setTimeout(() => $search?.focus(), 0);
      }
    };
    $search?.addEventListener("input", (e) => {
      const searchValue = $search.value;
      const $dropdown2 = $langDropdown.querySelector(".cya11y-dropdown-list");
      const $optionsContainer2 = $dropdown2.querySelector(".cya11y-lang-options");
      const filteredLangs2 = LANGUAGES.filter(
        (lang) => lang.label.toLowerCase().includes(searchValue.toLowerCase()) || lang.code.toLowerCase().includes(searchValue.toLowerCase())
      );
      $optionsContainer2.innerHTML = filteredLangs2.map((lang, i) => `
      <div class="cya11y-lang-option${lang.code === userSettings.lang ? " selected" : ""}" role="option" aria-selected="${lang.code === userSettings.lang}" data-code="${lang.code}" tabindex="-1" data-index="${i}">
        <span class="cya11y-lang-code">${langBadge(lang.code)}</span>
        <span class="cya11y-lang-label">${lang.label}</span>
      </div>
    `).join("");
      const $newOptions = Array.from($optionsContainer2.querySelectorAll(".cya11y-lang-option"));
      $newOptions.forEach(($option, i) => {
        $option.onclick = (e2) => {
          e2.stopPropagation();
          changeLanguage($option.dataset.code, $menu2);
          closeDropdown($langDropdown);
          renderLanguageDropdown($menu2);
          $langDropdown.querySelector(".cya11y-selected-lang")?.focus();
        };
      });
    });
    $search?.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const $filteredOptions = Array.from($langDropdown.querySelectorAll(".cya11y-lang-option"));
        $filteredOptions[0].focus();
        $filteredOptions.forEach((option, index) => {
          option.addEventListener("keydown", (e2) => {
            if (e2.key === "ArrowDown") {
              e2.preventDefault();
              if (index < $filteredOptions.length - 1) {
                $filteredOptions[index + 1].focus();
              }
            } else if (e2.key === "ArrowUp") {
              e2.preventDefault();
              if (index > 0) {
                $filteredOptions[index - 1].focus();
              } else {
                $search.focus();
              }
            } else if (e2.key === "Enter" || e2.key === " ") {
              e2.preventDefault();
              changeLanguage(option.dataset.code, $menu2);
              closeDropdown($langDropdown);
              renderLanguageDropdown($menu2);
              $langDropdown.querySelector(".cya11y-selected-lang")?.focus();
            } else if (e2.key === "Escape") {
              closeDropdown($langDropdown);
              $selected.focus();
            }
          });
        });
      }
    });
    const $allOptions = Array.from($langDropdown.querySelectorAll(".cya11y-lang-option"));
    $allOptions.forEach(($option, index) => {
      $option.addEventListener("focus", () => {
        $option.setAttribute("aria-selected", "true");
        $allOptions.forEach((opt) => {
          if (opt !== $option) {
            opt.setAttribute("aria-selected", "false");
          }
        });
      });
      $option.addEventListener("click", () => {
        changeLanguage($option.dataset.code, $menu2);
        closeDropdown($langDropdown);
        renderLanguageDropdown($menu2);
        $langDropdown.querySelector(".cya11y-selected-lang")?.focus();
      });
      $option.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          if (index < $allOptions.length - 1) {
            $allOptions[index + 1].focus();
          }
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (index > 0) {
            $allOptions[index - 1].focus();
          } else {
            $search.focus();
          }
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          changeLanguage($option.dataset.code, $menu2);
          closeDropdown($langDropdown);
          renderLanguageDropdown($menu2);
          $langDropdown.querySelector(".cya11y-selected-lang")?.focus();
        } else if (e.key === "Escape") {
          closeDropdown($langDropdown);
          $langDropdown.querySelector(".cya11y-selected-lang")?.focus();
        }
      });
    });
    $search?.addEventListener("focus", () => {
      openDropdown($langDropdown);
    });
    $langDropdown.addEventListener("focusout", () => {
      setTimeout(() => {
        const root = $langDropdown.getRootNode();
        const active = root.activeElement;
        if (!active || !$langDropdown.contains(active)) {
          closeDropdown($langDropdown);
        }
      }, 0);
    });
  }
  function closeDropdown($langDropdown) {
    const $dropdown = $langDropdown.querySelector(".cya11y-dropdown-list");
    const $selected = $langDropdown.querySelector(".cya11y-selected-lang");
    if ($dropdown) $dropdown.style.display = "none";
    $selected.querySelector(".cya11y-arrow")?.classList.remove("cya11y-arrow-rotate");
    dropdownOpen = false;
    if (outsideClickHandler) {
      document.removeEventListener("mousedown", outsideClickHandler);
      outsideClickHandler = null;
    }
  }
  function openDropdown($langDropdown) {
    const $dropdown = $langDropdown.querySelector(".cya11y-dropdown-list");
    const $selected = $langDropdown.querySelector(".cya11y-selected-lang");
    if ($dropdown) $dropdown.style.display = "block";
    $selected.querySelector(".cya11y-arrow")?.classList.add("cya11y-arrow-rotate");
    dropdownOpen = true;
    if (!outsideClickHandler) {
      outsideClickHandler = (e) => {
        const path = typeof e.composedPath === "function" ? e.composedPath() : [];
        if (!path.includes($langDropdown)) {
          closeDropdown($langDropdown);
        }
      };
      document.addEventListener("mousedown", outsideClickHandler);
    }
  }

  // src/utils/trapFocus.ts
  function trapFocus(container) {
    const focusableElements = container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];
    const getActiveElement = () => {
      const rootNode = container.getRootNode();
      if (rootNode instanceof ShadowRoot) {
        return rootNode.activeElement;
      }
      return document.activeElement;
    };
    container.addEventListener("keydown", function(e) {
      if (e.key === "Tab") {
        const activeElement = getActiveElement();
        if (e.shiftKey) {
          if (activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    });
  }

  // src/utils/getShortcutLabel.ts
  var MODIFIER_LABELS = {
    alt: { win: "Alt", mac: "Option" },
    shift: { win: "Shift", mac: "Shift" },
    ctrl: { win: "Ctrl", mac: "Ctrl" }
  };
  function isMac() {
    if (typeof navigator === "undefined") return false;
    const platform = navigator.userAgentData?.platform ?? navigator.platform;
    return platform.toLowerCase().includes("mac");
  }
  function getShortcutLabel(shortcut) {
    const parts = shortcut.toLowerCase().split("+");
    const key = parts[parts.length - 1].toUpperCase();
    const modifiers = parts.slice(0, -1);
    const mac = isMac();
    const labels = modifiers.map((mod) => MODIFIER_LABELS[mod]?.[mac ? "mac" : "win"] ?? mod);
    return [...labels, key].join("+");
  }

  // src/views/menu/renderMenu.ts
  function announceToScreenReader(message) {
    const announcements = document.getElementById("cya11y-menu-announcements");
    if (announcements) {
      announcements.textContent = message;
      setTimeout(() => {
        announcements.textContent = "";
      }, 1e3);
    }
  }
  function updateButtonAriaState(button, isPressed) {
    button.setAttribute("aria-pressed", isPressed.toString());
    if (isPressed) {
      button.classList.add("cya11y-selected");
    } else {
      button.classList.remove("cya11y-selected");
    }
  }
  function handleMenuKeyboardNavigation(event, currentButton) {
    const buttons = Array.from(currentButton.parentElement?.querySelectorAll(".cya11y-btn") || []);
    const currentIndex = buttons.indexOf(currentButton);
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % buttons.length;
        buttons[nextIndex]?.focus();
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        const prevIndex = currentIndex === 0 ? buttons.length - 1 : currentIndex - 1;
        buttons[prevIndex]?.focus();
        break;
      case "Home":
        event.preventDefault();
        buttons[0]?.focus();
        break;
      case "End":
        event.preventDefault();
        buttons[buttons.length - 1]?.focus();
        break;
    }
  }
  function showStatementPanel($container, $menu2) {
    const $menuContent = $menu2.querySelector(".cya11y-menu-content");
    if (!$menuContent) return;
    if ($menuContent.querySelector(".cya11y-statement-view")) return;
    const fragment = document.createDocumentFragment();
    while ($menuContent.firstChild) {
      fragment.appendChild($menuContent.firstChild);
    }
    const $statementWrapper = renderStatementPanel(() => {
      $menuContent.innerHTML = "";
      $menuContent.appendChild(fragment);
      $menuContent.scrollTop = 0;
    });
    $menuContent.appendChild($statementWrapper);
    $menuContent.scrollTop = 0;
  }
  function renderMenu() {
    const device = getCurrentDevice();
    const $container = document.createElement("div");
    $container.innerHTML = `<style id="cya11y-menu-css">${menu_default2}</style>` + menu_default;
    const $menu2 = $container.querySelector(".cya11y-menu");
    const currentPosition = pluginConfig?.position[device];
    if (currentPosition) {
      $menu2.setAttribute("data-position", currentPosition);
      if (currentPosition.includes("right")) {
        $menu2.style.right = "0px";
        $menu2.style.left = "auto";
      } else if (currentPosition.includes("left")) {
        $menu2.style.left = "0px";
        $menu2.style.right = "auto";
      }
    }
    const contentElement = $menu2.querySelector(".content");
    const toolsElement = $menu2.querySelector(".tools");
    const contrastElement = $menu2.querySelector(".contrast");
    const profilesElement = $menu2.querySelector(".profiles");
    const visibleContent = filterByModule(ContentButtons_default, pluginConfig.modules?.content, CONTENT_KEY_MAP);
    const visibleToolsRaw = filterByModule(TOOL_PRESETS_default, pluginConfig.modules?.navigation, NAV_KEY_MAP);
    const visibleTools = visibleToolsRaw.filter((btn) => {
      const topLevelKey = TOP_LEVEL_KEY_MAP[btn.key];
      return !topLevelKey || pluginConfig.modules?.[topLevelKey]?.enabled !== false;
    });
    const visibleFilters = filterByModule(FilterButtons_default, pluginConfig.modules?.color, COLOR_KEY_MAP);
    const visibleProfiles = filterByModule(
      ProfileButtons_default,
      pluginConfig.modules?.profiles,
      PROFILE_KEY_MAP
    );
    if (contentElement) {
      if (visibleContent.length > 0) {
        contentElement.innerHTML = renderButtons(visibleContent);
      } else {
        (contentElement.closest("section") || contentElement.parentElement)?.remove();
      }
    }
    if (toolsElement) {
      if (visibleTools.length > 0) {
        toolsElement.innerHTML = renderButtons(visibleTools, "cya11y-tools");
      } else {
        (toolsElement.closest("section") || toolsElement.parentElement)?.remove();
      }
    }
    if (contrastElement) {
      if (visibleFilters.length > 0) {
        contrastElement.innerHTML = renderButtons(visibleFilters, "cya11y-filter");
      } else {
        (contrastElement.closest("section") || contrastElement.parentElement)?.remove();
      }
    }
    if (profilesElement) {
      profilesElement.innerHTML = renderButtons(
        visibleProfiles,
        "cya11y-profile"
      );
    }
    const $profileCard = $menu2.querySelector(".cya11y-profile-card");
    const $profileTitleContainer = $menu2.querySelector(".cya11y-profile-title-container");
    const $profileTitle = $menu2.querySelector(".cya11y-profile-title");
    const $profileItems = $menu2.querySelector(".cya11y-profile-items");
    if ($profileItems) {
      $profileItems.style.display = "none";
    }
    if ($profileTitleContainer && $profileTitle) {
      $profileTitleContainer.addEventListener("click", () => {
        const $profileItems2 = $menu2.querySelector(".cya11y-profile-items");
        const isExpanded = $profileItems2.style.display !== "none";
        $profileItems2.style.display = isExpanded ? "none" : "grid";
        $profileTitle.setAttribute("aria-expanded", (!isExpanded).toString());
        $profileCard.querySelector(".cya11y-arrow")?.classList.toggle("cya11y-arrow-rotate");
        announceToScreenReader(isExpanded ? "Accessibility profiles collapsed" : "Accessibility profiles expanded");
      });
    }
    if (shouldRemoveProfilesSection(pluginConfig.modules?.profiles, visibleProfiles.length)) {
      $profileCard.remove();
    }
    const states = userSettings?.states;
    const fontSize = Number(states?.fontSize) || 1;
    if (fontSize != 1) {
      const amountElement = $menu2.querySelector(".cya11y-amount");
      if (amountElement) {
        amountElement.innerHTML = `${(fontSize * 100).toFixed(0)}%`;
      }
    }
    selectButtons($menu2);
    const $textAlignBtn = $menu2.querySelector(".cya11y-text-align");
    if ($textAlignBtn) {
      const ta = states?.["text-align"] || false;
      $textAlignBtn.dataset.state = ta || "off";
      const taLabelKey = ta === "left" ? "Align Left" : ta === "center" ? "Align Center" : ta === "right" ? "Align Right" : "Text Align";
      const $taLabel = $textAlignBtn.querySelector(".cya11y-translate");
      if ($taLabel) {
        $taLabel.setAttribute("data-translate", taLabelKey);
        $taLabel.textContent = t(taLabelKey);
      }
      $textAlignBtn.setAttribute("data-translate", taLabelKey);
      $textAlignBtn.setAttribute("title", t(taLabelKey));
    }
    if (shouldShowLanguageSelector(pluginConfig.language)) {
      renderLanguageDropdown($menu2);
    } else {
      const $langDropdown = $menu2.querySelector("#cya11y-language-dropdown");
      ($langDropdown?.closest("section") || $langDropdown?.parentElement)?.remove();
    }
    const $statementLink = $container.querySelector(".cya11y-accessibility-statement-link");
    const statementModule = pluginConfig.modules.statement;
    if ($statementLink) {
      if (statementModule.displayInWidget && statementModule.formData?.companyName) {
        $statementLink.removeAttribute("href");
        $statementLink.setAttribute("role", "button");
        $statementLink.setAttribute("tabindex", "0");
        $statementLink.setAttribute("aria-label", "Accessibility statement");
        $statementLink.classList.remove("cya11y-statement-external");
        $statementLink.style.display = "inline-flex";
        $statementLink.style.cursor = "pointer";
        const openStatement = (e) => {
          e.preventDefault();
          showStatementPanel($container, $menu2);
        };
        $statementLink.addEventListener("click", openStatement);
        $statementLink.addEventListener("keydown", (e) => {
          if (e.key === " " || e.key === "Enter") openStatement(e);
        });
      } else if (statementModule.enabled) {
        $statementLink.href = statementModule.url || "#";
        $statementLink.classList.add("cya11y-statement-external");
        $statementLink.setAttribute("aria-label", "View accessibility statement (opens in new window)");
        $statementLink.style.display = "inline-flex";
        $statementLink.addEventListener("keydown", (e) => {
          if (e.key === " ") {
            e.preventDefault();
            $statementLink.click();
          }
        });
      } else {
        $statementLink.style.display = "none";
      }
    }
    if (pluginConfig.keyboard?.enabled && pluginConfig.keyboard.shortcut) {
      const $title = $menu2.querySelector(".cya11y-menu-title");
      if ($title) {
        const $shortcut = document.createElement("span");
        $shortcut.className = "cya11y-menu-title-shortcut";
        $shortcut.setAttribute("aria-hidden", "true");
        $shortcut.textContent = ` (${getShortcutLabel(pluginConfig.keyboard.shortcut)})`;
        $title.appendChild($shortcut);
      }
    }
    $container.querySelectorAll(".cya11y-menu-close, .cya11y-overlay").forEach((el) => el.addEventListener("click", toggleMenu));
    $container.querySelectorAll(".cya11y-menu-reset").forEach((el) => el.addEventListener("click", () => {
      reset($menu2);
      announceToScreenReader("All accessibility settings have been reset to default");
    }));
    $menu2.querySelectorAll(".cya11y-plus, .cya11y-minus").forEach((el) => {
      const element = el;
      element.addEventListener("click", () => {
        const difference = 0.1;
        let fontSize2 = userSettings?.states?.fontSize || 1;
        if (element.classList.contains("cya11y-minus")) {
          fontSize2 -= difference;
        } else {
          fontSize2 += difference;
        }
        fontSize2 = Math.max(fontSize2, 0.1);
        fontSize2 = Math.min(fontSize2, 4);
        fontSize2 = Number(fontSize2.toFixed(4));
        const amountElement = $container.querySelector(".cya11y-amount");
        if (amountElement) {
          amountElement.textContent = `${(fontSize2 * 100).toFixed(0)}%`;
        }
        adjustFontSize(fontSize2);
        userSettings.states.fontSize = fontSize2;
        saveUserSettings();
        announceToScreenReader(`Font size set to ${(fontSize2 * 100).toFixed(0)}%`);
      });
    });
    $menu2.querySelectorAll(".cya11y-btn").forEach((el) => {
      const element = el;
      element.addEventListener("keydown", (event) => {
        handleMenuKeyboardNavigation(event, element);
      });
      element.addEventListener("click", () => {
        const key = element.dataset.key;
        if (!key) return;
        const isSelected = !element.classList.contains("cya11y-selected");
        if (key === "text-align") {
          const cycle = [false, "left", "center", "right"];
          const current = userSettings.states["text-align"] || false;
          const next = cycle[(cycle.indexOf(current) + 1) % cycle.length];
          userSettings.states["text-align"] = next;
          element.dataset.state = next || "off";
          const labelKey = next === "left" ? "Align Left" : next === "center" ? "Align Center" : next === "right" ? "Align Right" : "Text Align";
          const labelEl = element.querySelector(".cya11y-translate");
          if (labelEl) {
            labelEl.setAttribute("data-translate", labelKey);
            labelEl.textContent = t(labelKey);
          }
          element.setAttribute("data-translate", labelKey);
          element.setAttribute("title", t(labelKey));
          if (next) {
            element.classList.add("cya11y-selected");
            updateButtonAriaState(element, true);
          } else {
            element.classList.remove("cya11y-selected");
            updateButtonAriaState(element, false);
          }
          renderTools();
          saveUserSettings();
          announceToScreenReader(next ? `Text alignment: ${next}` : "Text alignment cleared");
          return;
        }
        if (element.classList.contains("cya11y-filter")) {
          $menu2.querySelectorAll(".cya11y-filter").forEach((el2) => {
            const filterElement = el2;
            updateButtonAriaState(filterElement, false);
          });
          if (isSelected) {
            updateButtonAriaState(element, true);
          }
          if (userSettings.states.contrast === key) {
            userSettings.states.contrast = false;
            saveUserSettings();
            disableContrast();
            announceToScreenReader("Contrast filter disabled");
            return;
          }
          userSettings.states.contrast = isSelected ? key : false;
          enableContrast(userSettings.states.contrast);
          saveUserSettings();
          renderTools();
          updateButtonAriaState(element, isSelected);
          const contrastLabel = element.querySelector(".cya11y-translate")?.textContent || key;
          announceToScreenReader(`${contrastLabel} contrast enabled`);
          return;
        }
        if (element.classList.contains("cya11y-profile")) {
          $menu2.querySelectorAll(".cya11y-profile").forEach((el2) => {
            const profileElement = el2;
            updateButtonAriaState(profileElement, false);
          });
          if (isSelected) {
            updateButtonAriaState(element, true);
          }
          if (userSettings.states[key]) {
            userSettings.states[key] = false;
            saveUserSettings();
            disableProfile(key, $menu2);
            announceToScreenReader(`${key} profile disabled`);
            return;
          }
          Object.keys(userSettings.states).forEach((stateKey) => {
            if (stateKey.includes("profile")) {
              userSettings.states[stateKey] = false;
              saveUserSettings();
              disableProfile(stateKey, $menu2);
            }
          });
          saveUserSettings();
          userSettings.states[key] = true;
          enableProfile(key, $menu2);
          saveUserSettings();
          renderTools();
          updateButtonAriaState(element, isSelected);
          const profileLabel = element.querySelector(".cya11y-translate")?.textContent || key;
          announceToScreenReader(`${profileLabel} profile enabled`);
        }
        updateButtonAriaState(element, isSelected);
        userSettings.states[key] = isSelected;
        renderTools();
        saveUserSettings();
        const settingLabel = element.querySelector(".cya11y-translate")?.textContent || key;
        announceToScreenReader(`${settingLabel} ${isSelected ? "enabled" : "disabled"}`);
      });
    });
    $container.querySelectorAll(".cya11y-footer a:not(.cya11y-accessibility-statement-link)").forEach((el) => {
      el.addEventListener("keydown", (e) => {
        if (e.key === " ") {
          e.preventDefault();
          el.click();
        }
      });
    });
    const $widget2 = getWidgetEl();
    if ($widget2) {
      $widget2.appendChild($container);
    }
    applyBrandingState();
    trapFocus($menu2);
    return $menu2;
  }

  // src/views/menu/menu.ts
  var $menu;
  function openMenu() {
    if ($menu) {
      toggleMenu();
    } else {
      $menu = renderMenu();
      const widgetContainer = document.querySelector("#cya11y-container");
      const btn = widgetContainer?.shadowRoot?.querySelector(".cya11y-menu-btn");
      btn?.setAttribute("aria-controls", "cya11y-accessibility-menu");
      btn?.setAttribute("aria-expanded", "true");
    }
    translateWidget($menu);
  }

  // src/views/widget/widget.ts
  var $widget = null;
  function renderWidget() {
    try {
      const defaultLanguage = getDefaultLanguage();
      const baseLabel = LANGUAGE_DICTIONARY[defaultLanguage]?.[pluginConfig.label] || "Accessibility menu";
      const shortcutHint = pluginConfig.keyboard?.enabled && pluginConfig.keyboard.shortcut ? ` \u2014 Press ${getShortcutLabel(pluginConfig.keyboard.shortcut)} to open/close` : "";
      $widget = renderButton({
        config: pluginConfig,
        label: `${baseLabel}${shortcutHint}`,
        onActivate: openMenu
      });
      return $widget;
    } catch (error) {
      console.error("Failed to render widget:", error);
      return null;
    }
  }

  // src/utils/shortcutParsing.ts
  function parseShortcut(shortcut) {
    const parts = shortcut.toLowerCase().split("+");
    const rawKey = parts[parts.length - 1];
    let code;
    if (/^\d$/.test(rawKey)) {
      code = `digit${rawKey}`;
    } else if (/^f\d{1,2}$/.test(rawKey)) {
      code = rawKey;
    } else if (rawKey === "space") {
      code = "space";
    } else if (/^[a-z]$/.test(rawKey)) {
      code = `key${rawKey}`;
    } else {
      code = rawKey;
    }
    return {
      alt: parts.includes("alt"),
      shift: parts.includes("shift"),
      ctrl: parts.includes("ctrl"),
      code
    };
  }
  function isTypingContext(target) {
    if (!(target instanceof Element)) return false;
    const tag = target.tagName.toLowerCase();
    return ["input", "textarea", "select"].includes(tag) || (target.getAttribute("contenteditable") ?? "false") !== "false";
  }
  function matchesShortcut(event, parsed) {
    return event.altKey === parsed.alt && event.shiftKey === parsed.shift && event.ctrlKey === parsed.ctrl && event.code.toLowerCase() === parsed.code;
  }

  // src/utils/keyboardShortcut.ts
  var registered = false;
  function registerKeyboardShortcut(keyboard, onTrigger) {
    if (registered) return;
    if (!keyboard?.enabled || !keyboard.shortcut) return;
    const parsed = parseShortcut(keyboard.shortcut);
    document.addEventListener("keydown", (event) => {
      if (isTypingContext(event.target)) return;
      if (matchesShortcut(event, parsed)) {
        event.preventDefault();
        onTrigger();
      }
    });
    registered = true;
  }

  // src/widget.ts
  async function initRuntime() {
    await loadLanguages();
    const savedSettings = getSavedUserSettings();
    const { states, changed } = dropDisabledModuleStates(
      savedSettings.states,
      pluginConfig.modules
    );
    savedSettings.states = states;
    Object.assign(userSettings, savedSettings);
    if (changed) {
      saveUserSettings();
    }
    if (!userSettings.lang || !shouldShowLanguageSelector(pluginConfig.language)) {
      userSettings.lang = getDefaultLanguage();
    }
    runAccessibility();
  }
  async function accessibilityWidget() {
    try {
      await initRuntime();
      renderWidget();
      registerKeyboardShortcut(pluginConfig.keyboard, openMenu);
      return { changeLanguage };
    } catch (error) {
      console.error("Failed to initialize accessibility widget:", error);
      return { changeLanguage };
    }
  }

  // src/utils/observeHTMLLang.ts
  function observeHTMLLang() {
    try {
      const htmlElement = document.documentElement;
      if (!htmlElement) {
        console.warn("HTML element not found, cannot observe lang attribute");
        return;
      }
      const observer2 = new MutationObserver((mutations) => {
        try {
          for (const mutation of mutations) {
            if (mutation.type === "attributes" && mutation.attributeName === "lang") {
              const newLanguage = getDefaultLanguage();
              changeLanguage(newLanguage);
            }
          }
        } catch (error) {
          console.error("Error handling lang attribute mutation:", error);
        }
      });
      observer2.observe(htmlElement, {
        attributes: true,
        attributeFilter: ["lang"]
      });
      window.__cya11y__langObserver = observer2;
    } catch (error) {
      console.error("Failed to observe HTML lang attribute:", error);
    }
  }

  // src/entry.ts
  async function initialize() {
    try {
      if (document.readyState === "complete" || document.readyState === "interactive") {
        document.removeEventListener("readystatechange", initialize);
        await accessibilityWidget();
        if (!getScriptDataAttribute("disableObserveLang")) {
          observeHTMLLang();
        }
      }
    } catch (error) {
      console.error("Failed to initialize accessibility widget:", error);
    }
  }
  document.addEventListener("readystatechange", initialize);
  if (document.readyState === "complete" || document.readyState === "interactive") {
    initialize();
  }
})();
//# sourceMappingURL=widget.js.map
