// lazyload config

app.constant('JQ_CONFIG', {
  easyPieChart: [
    'libs/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'
  ],
  plot: ['libs/flot/jquery.flot.js',
    'libs/flot/jquery.flot.pie.js',
    'libs/flot/jquery.flot.resize.js',
    'libs/flot.tooltip/js/jquery.flot.tooltip.js',
    'libs/flot.orderbars/js/jquery.flot.orderBars.js',
    'libs/flot-spline/js/jquery.flot.spline.js'
  ],
  knob: ['libs/jquery-knob/dist/jquery.knob.min.js',
    'js/jq/chart-knobs.js'
  ],
  isotobe: ['js/uport_isotobe.js',
    'js/uport_isotobe_script.js'
  ],
  dataTable: [
    'libs/datatables/media/js/jquery.dataTables.min.js',
    'libs/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
    'libs/plugins/integration/bootstrap/3/dataTables.bootstrap.css'
  ],
  footable: ['libs/footable/dist/footable.all.min.js',
    'libs/footable/css/footable.core.css'
  ],
  fullcalendar: ['libs/moment/moment.js',
    'libs/fullcalendar/dist/fullcalendar.min.js',
    'libs/fullcalendar/dist/fullcalendar.css',
    'libs/fullcalendar/dist/fullcalendar.theme.css'
  ],
  vectorMap: [
    'libs/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
    'libs/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
    'libs/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
    'libs/bower-jvectormap/jquery-jvectormap-1.2.2.css'
  ],
  sortable: ['libs/html5sortable/jquery.sortable.js'],
  nestable: ['libs/nestable/jquery.nestable.js'],
  moment: ['libs/moment/moment.js'],
  daterangepicker: ['libs/moment/moment.js',
    'libs/bootstrap-daterangepicker/daterangepicker.js',
    'libs/bootstrap-daterangepicker/daterangepicker-bs3.css'
  ],
  tagsinput: [
    'libs/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
    'libs/bootstrap-tagsinput/dist/bootstrap-tagsinput.css'
  ],
  jqueryui: ['libs/jquery-ui/ui/minified/jquery-ui.min.js',
    'libs/jquery-ui/themes/smoothness/jquery-ui.css',
    'js/controllers/ui.slider.js'
  ],
  TouchSpin: [
    'libs/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
    'libs/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'
  ],
  chosen: ['libs/chosen/chosen.jquery.min.js',
    'libs/bootstrap-chosen/bootstrap-chosen.css'
  ],
  wysiwyg: ['libs/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
    'libs/bootstrap-wysiwyg/external/jquery.hotkeys.js'
  ],
  sparkline: [
    'libs/jquery.sparkline/dist/jquery.sparkline.retina.js'
  ]
})

// oclazyload config
.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
  // We configure ocLazyLoad to use the lib script.js as the async loader
  $ocLazyLoadProvider.config({
    debug: true,
    events: true,
    modules: [{
        name: 'ngMorris',
        files: [
          'libs/raphael/raphael.js',
          'libs/mocha/mocha.js',
          'libs/morrisjs/morris.js',
          'libs/ngmorris/src/ngMorris-full.js',
          'libs/morrisjs/morris.css'
        ]
      }, {
        name: 'cgNotify',
        files: [
          'libs/angular-notify/dist/angular-notify.min.js',
          'libs/angular-notify/dist/angular-notify.min.css'
        ]
      }, {
        name: 'countTo',
        files: [
          'libs/angular-count-to/build/angular-count-to.min.js'
        ]
      },

      {
        name: 'angularFileUpload',
        files: [
          'libs/angular-file-upload/angular-file-upload.min.js'
        ]
      },
      /*{
          name: 'textAngular',
          series: true,
          files: [
              'libs/textAngular/dist/textAngular.css',
              'libs/textAngular/dist/textAngular-rangy.min.js',
              'libs/textAngular/dist/textAngular.min.js'
          ]
      },*/
      {
        name: 'vr.directives.slider',
        files: [
          'libs/venturocket-angular-slider/build/angular-slider.min.js',
          'libs/venturocket-angular-slider/build/angular-slider.css'
        ]
      }, {
        name: 'ngGrid',
        files: [
          'libs/ng-grid/build/ng-grid.min.js',
          'libs/ng-grid/ng-grid.min.css',
          'libs/ng-grid/ng-grid.bootstrap.css'
        ]
      }, {
        name: 'ui.grid',
        files: [
          'libs/angular-ui-grid/ui-grid.min.js',
          'libs/angular-ui-grid/ui-grid.min.css',
          'libs/angular-ui-grid/ui-grid.bootstrap.css'
        ]
      }, {
        name: 'chart.js',
        files: [
          'libs/js/angular-chart.js',
          'libs/styles/angular-chart.css'
        ]

      }, {
        name: 'angular-rickshaw',
        files: [
          'libs/rickshaw/rickshaw.min.css',
          'libs/rickshaw/rickshaw.min.js',
          'libs/angular-rickshaw/rickshaw.js'
        ]

      }, {
        name: 'xeditable',
        files: [
          'libs/angular-xeditable/dist/js/xeditable.min.js',
          'libs/angular-xeditable/dist/css/xeditable.css'
        ]
      }, {
        name: 'ui.calendar',
        files: [
          'libs/angular-ui-calendar/src/calendar.js'
        ]
      }, {
        name: 'ngImgCrop',
        files: [
          'libs/ngImgCrop/compile/minified/ng-img-crop.js',
          'libs/ngImgCrop/compile/minified/ng-img-crop.css'
        ]
      }, {
        name: 'colorpicker.module',
        files: [
          'libs/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js',
          'libs/angular-bootstrap-colorpicker/css/colorpicker.css'
        ]
      }, {
        name: 'smart-table',
        files: [
          'libs/angular-smart-table/dist/smart-table.min.js'
        ]
      }
    ]
  });
}]);
