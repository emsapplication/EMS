"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAGES_MENU = [
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
                        Role: 'MA',
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
                        Role: 'MA',
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
                path: 'ui',
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
        ]
    }
];
//# sourceMappingURL=pages.menu.js.map