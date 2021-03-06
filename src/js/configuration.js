const VERSION_KEY = "aight-version";
const CURRENT_VERSION = "1.2.3";

const LEVEL_CONFIG = {
  1: {
    spinsTotal: "5",
    locksTotal: "4",
    removesTotal: "3",
    channelCheckbox: "off",
    christCheckbox: "off",
    heelRollCheckbox: "off",
    negativeCheckbox: "off",
    roughCheckbox: "off",
    spins360Checkbox: "off",
    spins540Checkbox: "off",
    spins720Checkbox: "off",
    spins900Checkbox: "off",
    switchCheckbox: "off",
    fakieCheckbox: "off",
    toughCheckbox: "off",
  },
  2: {
    spinsTotal: "5",
    locksTotal: "1",
    removesTotal: "5",
    channelCheckbox: "off",
    christCheckbox: "on",
    heelRollCheckbox: "on",
    negativeCheckbox: "on",
    roughCheckbox: "off",
    spins360Checkbox: "on",
    spins540Checkbox: "off",
    spins720Checkbox: "off",
    spins900Checkbox: "off",
    switchCheckbox: "on",
    fakieCheckbox: "on",
    toughCheckbox: "off",
  },
  3: {
    spinsTotal: "5",
    locksTotal: "1",
    removesTotal: "5",
    channelCheckbox: "on",
    christCheckbox: "on",
    heelRollCheckbox: "on",
    negativeCheckbox: "on",
    roughCheckbox: "on",
    spins360Checkbox: "on",
    spins540Checkbox: "on",
    spins720Checkbox: "on",
    spins900Checkbox: "off",
    fakieCheckbox: "on",
    switchCheckbox: "on",
    toughCheckbox: "on",
  },
};

export class Configuration {
  constructor() {
    this.$levelSelect = $("#levelSelect");

    this.$spinsTotal = $("#spinsTotalInput");
    this.$removesTotal = $("#removesTotalInput");
    this.$spinsLocks = $("#spinsLocksInput");

    this.$soundSelect = $("#soundSelect");
    this.$speedSelect = $("#speedSelect");
    this.$submit = $("#config-submit");
    this.$reset = $("#config-reset");

    this.$roughSelect = $("#rough-select");
    this.$toughSelect = $("#tough-select");
    this.$heelRollSelect = $("#heelRoll-select");
    this.$spins360Select = $("#spins360-select");
    this.$spins540Select = $("#spins540-select");
    this.$spins720Select = $("#spins720-select");
    this.$spins900Select = $("#spins900-select");
    this.$negativeSelect = $("#negative-select");
    this.$switchSelect = $("#switch-select");
    this.$channelSelect = $("#channel-select");
    this.$christSelect = $("#christ-select");
    this.$fakieSelect = $("#fakie-select");

    this.$levelSelect = $("#levelSelect");
    this.$spinsTotal = $("#spinsTotalInput");
    this.$removesTotal = $("#removesTotalInput");
    this.$locksTotal = $("#spinsLocksInput");

    this.configs = [
      { $dom: this.$soundSelect, key: "soundSelect", value: 0 },
      { $dom: this.$speedSelect, key: "speedSelect", value: 0 },
      { $dom: this.$fakieSelect, key: "fakieCheckbox", value: "off" },
      { $dom: this.$switchSelect, key: "switchCheckbox", value: "off" },
      { $dom: this.$negativeSelect, key: "negativeCheckbox", value: "off" },
      { $dom: this.$roughSelect, key: "roughCheckbox", value: "off" },
      { $dom: this.$toughSelect, key: "toughCheckbox", value: "off" },
      { $dom: this.$spins360Select, key: "spins360Checkbox", value: "off" },
      { $dom: this.$spins540Select, key: "spins540Checkbox", value: "off" },
      { $dom: this.$spins720Select, key: "spins720Checkbox", value: "off" },
      { $dom: this.$spins900Select, key: "spins900Checkbox", value: "off" },
      { $dom: this.$heelRollSelect, key: "heelRollCheckbox", value: "off" },
      { $dom: this.$channelSelect, key: "channelCheckbox", value: "off" },
      { $dom: this.$christSelect, key: "christCheckbox", value: "off" },
      { $dom: this.$levelSelect, key: "levelSelect", value: "1" },
      { $dom: this.$spinsTotal, key: "spinsTotal", value: 5 },
      { $dom: this.$removesTotal, key: "removesTotal", value: 3 },
      { $dom: this.$locksTotal, key: "locksTotal", value: 2 },
    ];

    this.versionCheck();
    this.initStoreables();
    this.registerListener();
  }

  versionCheck() {
    if (localStorage.getItem(VERSION_KEY) !== CURRENT_VERSION) {
      localStorage.clear();
      localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
    }
  }

  initStoreables() {
    this.configs.forEach((param) => {
      const val = localStorage.getItem(param.key) || param.value;
      if (param.key.includes("Checkbox")) {
        this.initCheckboxes(val, param);
      } else {
        this.initSelects(val, param);
      }
    });
  }

  initSelects(val, param) {
    if (val) {
      param.$dom.val(val);
    }
    param.value = param.$dom.val();
    param.$dom.on("change", (e) => {
      this.$submit.removeClass("pure-button-disabled");
      param.value = param.$dom.val();
    });
  }

  initCheckboxes(val, param) {
    val = val && val === "on" ? "on" : "off";
    if (val === "on") {
      param.$dom.prop("checked", true);
    } else {
      param.$dom.prop("checked", false);
    }
    param.value = val;
    param.$dom.on("change", (e) => {
      this.$submit.removeClass("pure-button-disabled");
      param.value = param.$dom.is(":checked") ? "on" : "off";
    });
  }

  registerListener() {
    this.$levelSelect.on("change", (e) => {
      this.setLevel(this.$levelSelect.val());
    });
    this.$submit.on("click", (e) => {
      e.preventDefault();
      this.submit();
    });

    this.$reset.on("click", (e) => {
      e.preventDefault();
      $("body").html("reset app..");
      // clear sw app cache
      caches.keys().then(function (names) {
        for (let name of names) {
          caches.delete(name);
        }
      });
      localStorage.clear();
      location.reload();
    });
  }

  submit() {
    this.configs.forEach((param) => {
      if (param.value) {
        localStorage.setItem(param.key, param.value);
      }
    });
    location.reload();
  }

  getLevel() {
    const value = this.configs.filter((s) => s.key == "levelSelect")[0].value;
    return value;
  }
  setLevel(level) {
    const levelConfig = LEVEL_CONFIG[level];
    //this.$levelSelect.val(level)
    this.configs.forEach((param) => {
      let configValue = levelConfig[param.key] ? levelConfig[param.key] : "";
      if (param.key === "levelSelect") {
        configValue = level;
      }
      if (configValue) {
        param.value = configValue;
        if (param.key.includes("Checkbox")) {
          if (configValue === "on") {
            param.$dom.prop("checked", true);
          } else {
            param.$dom.prop("checked", false);
          }
        } else {
          param.$dom.val(configValue);
        }
      }
    });
  }

  getGameConfig() {
    return {
      level: this.configs.filter((s) => s.key == "levelSelect")[0].value,
      spins: this.configs.filter((s) => s.key == "spinsTotal")[0].value,
      removes: this.configs.filter((s) => s.key == "removesTotal")[0].value,
      locks: this.configs.filter((s) => s.key == "locksTotal")[0].value,
    };
  }

  getSound() {
    const idx = this.configs.filter((s) => s.key == "soundSelect")[0].value;
    return idx > 0 ? idx - 1 : 0;
  }

  getSpeed() {
    const { value } = this.configs.filter((s) => s.key == "speedSelect")[0];

    return value;
  }

  hasNoApproachSlot() {
    return (
      !this.$switchSelect.is(":checked") && !this.$fakieSelect.is(":checked")
    );
  }

  getIncludedTricks() {
    return {
      switch: this.$switchSelect.is(":checked") ? "on" : "off",
      fakie: this.$fakieSelect.is(":checked") ? "on" : "off",
      negative: this.$negativeSelect.is(":checked") ? "on" : "off",
      rough: this.$roughSelect.is(":checked") ? "on" : "off",
      tough: this.$toughSelect.is(":checked") ? "on" : "off",
      heelRoll: this.$heelRollSelect.is(":checked") ? "on" : "off",
      spins360: this.$spins360Select.is(":checked") ? "on" : "off",
      spins540: this.$spins540Select.is(":checked") ? "on" : "off",
      spins720: this.$spins720Select.is(":checked") ? "on" : "off",
      spins900: this.$spins900Select.is(":checked") ? "on" : "off",
      channel: this.$channelSelect.is(":checked") ? "on" : "off",
      christ: this.$christSelect.is(":checked") ? "on" : "off",
    };
  }
}
