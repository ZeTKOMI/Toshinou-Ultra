/*
Created by Freshek on 28.10.2017
*/

class AutolockWindow {
    createWindow() {
      this.autolockWindow = WindowFactory.createWindow({
        width: 320,
        text: "Автолок"
      });
  
      let options = [
        {
          name: 'lockPlayers',
          labelText: 'Автолок игроков (key: z)(англ. раскладка, работает в хроме)',
          appendTo: this.autolockWindow,
          event: function () {
            window.settings.settings.lockPlayers = this.checked;
          }
        },
        {
          name: 'autoAttack',
          labelText: 'Авто атака игрока после лока',
          appendTo: this.autolockWindow,
          event: function () {
            window.settings.settings.autoAttack = this.checked;
          }
        },
        {
          name: 'lockNpc',
          labelText: 'Автолок NPCs (key: x)',
          appendTo: this.autolockWindow,
          event: function () {
            window.settings.settings.lockNpc = this.checked;
          }
        },
        {
          name: 'excludeNpcs',
          labelText: 'Исключить NPC из блокировки',
          appendTo: this.autolockWindow,
          event: function () {
            window.settings.settings.excludeNpcs = this.checked;
          }
        },
        {
          name: 'autoAttackNpcs',
          labelText: 'Автоатака NPC после лока',
          appendTo: this.autolockWindow,
          event: function () {
            window.settings.settings.autoAttackNpcs = this.checked;
          }
        },
      ];
  
      options.forEach((option) => {
        this[option.name] = ControlFactory.createControl(option);
      });
  
    }
  }
