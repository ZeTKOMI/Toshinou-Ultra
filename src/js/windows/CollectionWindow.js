/*
Created by Freshek on 14.10.2017
*/

class CollectionWindow {
    createWindow() {
      this.collectionWindow = WindowFactory.createWindow({
        width: 320,
        maxHeight: 300,
        text: "Сбор"
      });
  
      let controls = [{
          name: 'bonusBox',
          labelText: 'Сбор коробок',
          appendTo: this.collectionWindow,
          event: function () {
            window.settings.settings.bonusBox = this.checked;
          }
        },
        {
          name: 'materials',
          labelText: 'Сбор материала',
          appendTo: this.collectionWindow,
          event: function () {
            window.settings.settings.materials = this.checked;
          }
        },
        {
          name: 'cargoBox',
          labelText: 'Сбор ресов',
          appendTo: this.collectionWindow,
          event: function () {
            window.settings.settings.cargoBox = this.checked;
          }
        },
        {
            name: 'greenOrGoldBooty',
            labelText: 'Collect green or gold booty',
            appendTo: this.collectionWindow,
            event: function () {
              window.settings.settings.greenOrGoldBooty = this.checked;
            }
        },
        {
            name: 'blueBooty',
            labelText: 'Collect blue booty',
            appendTo: this.collectionWindow,
            event: function () {
              window.settings.settings.blueBooty = this.checked;
            }
        },
        {
            name: 'redBooty',
            labelText: 'Collect red booty',
            appendTo: this.collectionWindow,
            event: function () {
              window.settings.settings.redBooty = this.checked;
            }
        },
        {
            name: 'masqueBooty',
            labelText: 'Collect masque booty',
            appendTo: this.collectionWindow,
            event: function () {
              window.settings.settings.masqueBooty = this.checked;
            }
        },
      ];
  
      controls.forEach((control) => {
        this[control.name] = ControlFactory.createControl(control);
      });
    }
  }
