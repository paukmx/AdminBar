import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DisplayGrid, GridsterConfig, GridsterItem, GridType} from 'angular-gridster2';
import swal from 'sweetalert';

declare function init_plugins();

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DistribucionComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  mesas: Array<GridsterItem>;

  ngOnInit() {
    init_plugins();
    this.mesas = JSON.parse(localStorage.getItem('distribucion'));

    this.options = {
      gridType: GridType.ScrollHorizontal,
      displayGrid: DisplayGrid.Always,
      margin: 10,
      outerMargin: true,
      outerMarginTop: 100,
      outerMarginRight: 0,
      outerMarginBottom: 30,
      outerMarginLeft: 90,
      resizable: {
        enabled: true
      },
      draggable: {
        enabled: true
      },
    };

    if ( this.mesas === null) {
      this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2},
      {cols: 1, rows: 1, y: 0, x: 4},
      {cols: 3, rows: 2, y: 1, x: 4},
      {cols: 1, rows: 1, y: 4, x: 5},
      {cols: 1, rows: 1, y: 2, x: 1},
      {cols: 2, rows: 2, y: 3, x: 0},
      {cols: 2, rows: 2, y: 3, x: 2},
      {cols: 2, rows: 1, y: 2, x: 2},
      {cols: 1, rows: 1, y: 3, x: 4},
      {cols: 1, rows: 1, y: 0, x: 5}
    ];
    }
    if (this.mesas != null) {
      this.dashboard = this.mesas;
    }

  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }

  OnDestroy(): void {
    console.log(this.dashboard);
    swal({
      title: '¿Esta seguro?',
      text: '¿Esta seguro de que desea guardar esta distribución?',
      icon: 'warning',
      buttons: ['cancelar', 'aceptar'],
      dangerMode: true,
    })
    .then((willCreate) => {
      if (willCreate) {
        localStorage.setItem('distribucion', JSON.stringify(this.dashboard));
        swal('Distribución guardada correctamente!', {
          icon: 'success',
        });

      } else {
        swal('Distribución no guardada');
      }
    });
  }
}

