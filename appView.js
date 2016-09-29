define(function (require) {
    'use strict';

    const
        ModuleView = require('common/platform/ModuleView'),
        Button = require('common/ui/Button'),
        Pane = require('common/ui/Pane'),
        ScrollingViewport = require('common/ui/list/scroll/ScrollingViewport'),
        ListControl = require('common/ui/ListControl');

    /**
     * This is the application's root view, which is used for any UI control creation and handling.
     *
     * Note that functions defined in the controller may be called via this.getController()
     * Functions declared in this view class may also be called from the controller.
     * Functions designed to be called from the controller must return a Promise.
     *
     * @see Application Lifecycle {@link https://insidetrack.opencar.com/documentation/2.2/lifecycle}
     * @see Views & Controllers {@link https://insidetrack.opencar.com/documentation/2.2/controllers_and_views}
     * @see Promises {@link https://insidetrack.opencar.com/documentation/2.2/promises}
     */
    return class extends ModuleView {

        /**
         * Controller and View are now linked
         *
         * @async
         * @override super.beforeStart
         * @returns {Promise}
         */
        beforeStart () {
            return super.beforeStart().then(() => {
                Log.debug("view beforeStart()");
                let list = new ListControl({
                    wrapAroundSelect: false,
                    data: [{
                        icon: 'beer',
                        text: ['Beer!', '', 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'],
                    }, {
                        icon: 'book',
                        text: ['Books', '', 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'],
                    }, {
                        icon: 'bell',
                        text: ['Bells', '', 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.']
                    }, {
                        icon: 'coffee',
                        text: ['Coffee', '', 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.']
                    }, {
                        icon: 'cutlery',
                        text: ['Cutlery', '', 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.']
                    }, {
                        icon: 'beer',
                        text: ['Beer', '', 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'],
                    }, {
                        icon: 'book',
                        text: ['Books', '', 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'],
                    }, {
                        icon: 'bell',
                        text: ['Bells', '', 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.']
                    }, {
                        icon: 'coffee',
                        text: ['Coffee', '', 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.']
                    }, {
                        icon: 'cutlery',
                        text: ['Cutlery', '', 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.']
                    }]
                }, false);

                let p = new Pane();
                p.addChild(new Button({
                    model: {
                        text: 'List'
                    },
                    click() {
                        list.set('layout', 'list');
                    }
                }));
                p.addChild(new Button({
                    model: {
                        text: 'Grid',
                    },
                    click() {
                        list.set('layout', 'grid');
                    }
                }));
                p.addChild(new Button({
                    model: {
                        text: 'Hero'
                    },
                    click() {
                        list.set('layout', 'hero');
                    }
                }));
                p.addChild(new Button({
                    model: {
                        text: 'V'
                    },
                    click() {
                        list.set('orientation', 'vertical');
                    }
                }));
                p.addChild(new Button({
                    model: {
                        text: 'H'
                    },
                    click() {
                        list.set('orientation', 'horizontal');
                    }
                }));
                // p.addChild(new Button({
                //     model: {
                //         text: 'Scroll'
                //     },
                //     click() {
                //         list.set('scroll', ScrollingViewport); //'item');
                //     }
                // }));
                p.addChild(new Button({
                    model: {
                        text: 'Scroll'
                    },
                    click() {
                        list.set('scroll', 'item');
                    }
                }));
                p.addChild(new Button({
                    model: {
                        text: 'Page'
                    },
                    click() {
                        list.set('scroll', 'page');
                    }
                }));
                p.render(this.getView());

                list.render(this.getView());
            });
        }

    };
});
