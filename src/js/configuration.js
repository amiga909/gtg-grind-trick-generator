const VERSION_KEY = 'aight-version';
const CURRENT_VERSION = "1.0"; 

export class Configuration {
  constructor() {
    this.$levelSelect = $("#levelSelect");
    this.$levelStartSelect = $("#start-screen-levels");
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
    this.$negativeSelect = $("#negative-select");
    this.$switchSelect = $("#switch-select");
    this.$channelSelect = $("#channel-select");
    this.$christSelect = $("#christ-select");

    this.$levelSelect = $("#levelSelect");
    this.$spinsTotal = $("#spinsTotalInput");
    this.$removesTotal = $("#removesTotalInput");
    this.$locksTotal = $("#spinsLocksInput");

    this.configs = [
      //   { $dom: this.$levelSelect, key: "levelSelect", value: "" },
      { $dom: this.$soundSelect, key: "soundSelect", value: 0 },
      { $dom: this.$speedSelect, key: "speedSelect", value: 0 },
      { $dom: this.$switchSelect, key: "switchCheckbox", value: "on" },
      { $dom: this.$negativeSelect, key: "negativeCheckbox", value: "on" },
      { $dom: this.$roughSelect, key: "roughCheckbox", value: "off" },
      { $dom: this.$toughSelect, key: "toughCheckbox", value: "off" },
      { $dom: this.$spins360Select, key: "spins360Checkbox", value: "on" },
      { $dom: this.$heelRollSelect, key: "heelRollCheckbox", value: "off" },
      { $dom: this.$spins540Select, key: "spins540Checkbox", value: "off" },
      { $dom: this.$channelSelect, key: "channelCheckbox", value: "off" },
      { $dom: this.$christSelect, key: "christCheckbox", value: "off" },
      { $dom: this.$levelSelect, key: "levelSelect", value: "1" },
      { $dom: this.$levelStartSelect, key: "levelStartSelect", value: "1" },
      { $dom: this.$spinsTotal, key: "spinsTotal", value: 10 },
      { $dom: this.$removesTotal, key: "removesTotal", value: 5 },
      { $dom: this.$locksTotal, key: "locksTotal", value: 3 },
    ];

    this.versionCheck()
    this.initStoreables();
    this.registerListener();
  }

  versionCheck(){
    if (localStorage.getItem(VERSION_KEY) !== CURRENT_VERSION) {
      localStorage.clear();
      localStorage.setItem(VERSION_KEY,CURRENT_VERSION) 
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
    this.$submit.on("click", (e) => {
      e.preventDefault();
      this.configs.forEach((param) => {
        if (param.value) {
          localStorage.setItem(param.key, param.value);
        }
      });
      //localStorage.setItem(VERSION_KEY,CURRENT_VERSION);
      location.reload();
    });

    this.$reset.on("click", (e) => {
      e.preventDefault();
      localStorage.clear();
      location.reload();
    });
  }

  getLevel() {
    const value = this.configs.filter((s) => s.key == "levelSelect")[0].value;
    return value;
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

  getIncludedTricks() {
    return {
      switch: this.$switchSelect.is(":checked") ? "on" : "off",
      negative: this.$negativeSelect.is(":checked") ? "on" : "off",
      rough: this.$roughSelect.is(":checked") ? "on" : "off",
      tough: this.$toughSelect.is(":checked") ? "on" : "off",
      heelRoll: this.$heelRollSelect.is(":checked") ? "on" : "off",
      spins360: this.$spins360Select.is(":checked") ? "on" : "off",
      spins540: this.$spins540Select.is(":checked") ? "on" : "off",
      channel: this.$channelSelect.is(":checked") ? "on" : "off",
      christ: this.$christSelect.is(":checked") ? "on" : "off",
    };
  }
}
