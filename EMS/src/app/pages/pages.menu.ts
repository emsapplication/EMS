export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
       
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'fa fa-newspaper-o',
            selected: false,
            expanded: false,
            Role : 'MA',
            order: 0,
          },
        },
      },
      {
      path: 'accountdetail',
        data: {
          menu: {
            title: 'general.menu.account_detail',
            icon: 'fa fa-dollar',
            selected: false,
            expanded: false,
            Role : 'MA',
            order: 0,
          },
        },
      },

      {
      path: 'resourcedetail',
        data: {
          menu: {
            title: 'general.menu.resource_detail',
            icon: 'fa fa-users',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },

      {
      path: 'projectdetail',
        data: {
          menu: {
            title: 'general.menu.project_detail',
            icon: 'fa fa-list',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },

      {
      path: 'resourceallocation',
        data: {
          menu: {
            title: 'general.menu.resource_allocation',
            icon: 'fa fa-slideshare',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },

      {
        path: 'supplementary',
        data: {
          menu: {
            title: 'general.menu.supplementary',
            icon: 'fa fa-edit',
            selected: false,
            expanded: false,
            order: 300,
          },
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                 subicon: 'fa fa-arrow-circle-o-right',
                title: 'general.menu.s_location',
              },
            },
          },

          {
            path: 'buttons',
            data: {
              menu: {
                 subicon: 'fa fa-arrow-circle-o-right',
                title: 'general.menu.s_designation',
              },
            },
          },

          {
            path: 'icons',
            data: {
              menu: {
                 subicon: 'fa fa-arrow-circle-o-right',
                title: 'general.menu.s_subCompetency',
              },
            },
          },

          {
            path: 'modals',
            data: {
              menu: {
                subicon: 'fa fa-arrow-circle-o-right',
                title: 'general.menu.s_shiftdetail',
              },
            },
          },
          {
            path: 'slim',
            data: {
              menu: {
                subicon: 'fa fa-arrow-circle-o-right',
                title: 'general.menu.s_status',
              },
            },
          },

          {
            path: 'modals',
            data: {
              menu: {
                subicon: 'fa fa-arrow-circle-o-right',
                title: 'general.menu.s_verticals',
              },
            },
          },

          {
            path: 'slim',
            data: {
              menu: {
                subicon: 'fa fa-arrow-circle-o-right',
                title: 'general.menu.s_skillFamily',
              },
            },
          },

          {
            path: 'slim',
            data: {
              menu: {
                subicon: 'fa fa-arrow-circle-o-right',
                title: 'general.menu.s_competency',
              },
            },
          },

          {
            path: 'slim',
            data: {
              menu: {
                subicon: 'fa fa-arrow-circle-o-right',
                title: 'general.menu.s_vacation_type',
              },
            },
          },

          {
            path: 'grid',
            data: {
              menu: {
                subicon: 'fa fa-arrow-circle-o-right',
                title: 'general.menu.s_project_role',
              },
            },
          },
        ],
      },


      {
        path: 'editors',
        data: {
          menu: {
            title: 'general.menu.vacation',
            icon: 'fa fa-desktop',
            selected: false,
            expanded: false,
            order: 100,
          },
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                 subicon: 'fa fa-arrow-circle-o-right',
                title: 'general.menu.s_VacationRequest',
              },
            },
          },

          {
            path: 'treeview',
            data: {
              menu: {
                subicon: 'fa fa-arrow-circle-o-right',
                title: 'general.menu.s_VacationRequested',
              },
            },
          },

          {
            path: 'chartist-js',
            data: {
              menu: {
                subicon: 'fa fa-arrow-circle-o-right',
                title: 'general.menu.s_LeaveCalendar',
              },
            },
          },

           {
            path: 'layouts',
            data: {
              menu: {
                subicon: 'fa fa-arrow-circle-o-right',
                title: 'general.menu.s_VacationHistory',
              },
            },
          },

        ],
      },

      {
        path: 'components',
        data: {
          menu: {
            title: 'general.menu.report',
            icon: 'fa fa-bar-chart',
            selected: false,
            expanded: false,
            order: 250,
          },
        },
      },

      // {
      //   path: 'charts',
      //   data: {
      //     menu: {
      //       title: 'general.menu.charts',
      //       icon: 'ion-stats-bars',
      //       selected: false,
      //       expanded: false,
      //       order: 200,
      //     }
      //   },
      //   children: [
      //      {
      //       path: 'chartist-js',
      //       data: {
      //         menu: {
      //           subicon: 'fa fa-arrow-circle-o-right',
      //           title: 'general.menu.charts',
      //         },
      //       },
      //     },
      //   ],
      // },
      
      // {
      //   path: 'forms',
      //   data: {
      //     menu: {
      //       title: 'general.menu.form_elements',
      //       icon: 'ion-compose',
      //       selected: false,
      //       expanded: false,
      //       order: 400,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'inputs',
      //       data: {
      //         menu: {
      //           title: 'general.menu.form_inputs',
      //         }
      //       }
      //     },
      //     {
      //       path: 'layouts',
      //       data: {
      //         menu: {
      //           title: 'general.menu.form_layouts',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'tables',
      //   data: {
      //     menu: {
      //       title: 'general.menu.tables',
      //       icon: 'ion-grid',
      //       selected: false,
      //       expanded: false,
      //       order: 500,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'basictables',
      //       data: {
      //         menu: {
      //           title: 'general.menu.basic_tables',
      //         }
      //       }
      //     },
      //     {
      //       path: 'smarttables',
      //       data: {
      //         menu: {
      //           title: 'general.menu.smart_tables',
      //         }
      //       }
      //     },
      //     {
      //       path: 'datatables',
      //       data: {
      //         menu: {
      //           title: 'Data Tables',
      //         }
      //       }
      //     },
      //      {
      //        path: 'hottables',
      //        data: {
      //          menu: {
      //            title: 'Hot Tables',
      //          }
      //        }
      //      }
      //   ]
      // },
      // {
      //   path: 'maps',
      //   data: {
      //     menu: {
      //       title: 'general.menu.maps',
      //       icon: 'ion-ios-location-outline',
      //       selected: false,
      //       expanded: false,
      //       order: 600,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'googlemaps',
      //       data: {
      //         menu: {
      //           title: 'general.menu.google_maps',
      //         }
      //       }
      //     },
      //     {
      //       path: 'leafletmaps',
      //       data: {
      //         menu: {
      //           title: 'general.menu.leaflet_maps',
      //         }
      //       }
      //     },
      //     {
      //       path: 'bubblemaps',
      //       data: {
      //         menu: {
      //           title: 'general.menu.bubble_maps',
      //         }
      //       }
      //     },
      //     {
      //       path: 'linemaps',
      //       data: {
      //         menu: {
      //           title: 'general.menu.line_maps',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   data: {
      //     menu: {
      //       title: 'general.menu.pages',
      //       icon: 'ion-document',
      //       selected: false,
      //       expanded: false,
      //       order: 650,
      //     }
      //   },
      //   children: [
      //     {
      //       path: ['/login'],
      //       data: {
      //         menu: {
      //           title: 'general.menu.login'
      //         }
      //       }
      //     },
      //     {
      //       path: ['/register'],
      //       data: {
      //         menu: {
      //           title: 'general.menu.register'
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   data: {
      //     menu: {
      //       title: 'general.menu.menu_level_1',
      //       icon: 'ion-ios-more',
      //       selected: false,
      //       expanded: false,
      //       order: 700,
      //     }
      //   },
      //   children: [
      //     {
      //       path: '',
      //       data: {
      //         menu: {
      //           title: 'general.menu.menu_level_1_1',
      //           url: '#'
      //         }
      //       }
      //     },
      //     {
      //       path: '',
      //       data: {
      //         menu: {
      //           title: 'general.menu.menu_level_1_2',
      //           url: '#'
      //         }
      //       },
      //       children: [
      //         {
      //           path: '',
      //           data: {
      //             menu: {
      //               title: 'general.menu.menu_level_1_2_1',
      //               url: '#'
      //             }
      //           }
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   data: {
      //     menu: {
      //       title: 'general.menu.external_link',
      //       url: 'http://akveo.com',
      //       icon: 'ion-android-exit',
      //       order: 800,
      //       target: '_blank'
      //     }
      //   }
      // }
    ]
  }
];
